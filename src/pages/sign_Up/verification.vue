<template>

    <div class="max-w-full h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D]">
        <div class="px-6 pt-[15px] h-screen ">

            <div class="flex justify-between items-center mb-3">
    
                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24"/>
                </button>
    
            </div>
            
            <div class=" my-4 p-4">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Enter Verification Code</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Enter the 4-digit code  we just send to your email 
                    <span class="text-[#10192D]">{{ pinia.state.user?.email }}</span></p>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center ">
                   
                    <InputOtp @focusin="isFocused=true" @focusout="isFocused=false"
                    :length="4" @entered=" v => otpValue = v"/>  
                        
                    <p v-if="countdownSeconds === 0" class="mt-[38px] text-center">
                        <button @click.prevent="resendCode" class="text-[#2873FF] font-[600]">Resend code</button>  in 
                        <span class="text-[#2873FF]">{{countdownDisplay}}</span></p>  
                    <p v-else class="mt-[38px] text-center">Resend code in <span class="text-[#2873FF] font-[600]"> {{countdownDisplay}}</span></p>  
                    
            </div>


            
            
        </div>

        <div   v-show="!isFocused"  class="fixed bottom-5 left-0 w-full px-6" >

            <button @click.prevent="verifyAccount"  class="w-full btn-primary mt-[75px] scaling-animation">
                <Loader v-if="loading"/>
                    <span v-else>
                        Verify
                    </span>
                
            </button>
        </div>
        
    </div>

        


</template>

<script setup>
import { ref, watch, computed } from "vue";
import {baseURL} from "@/composables/configs"
import {useStore} from "@/stores/index"
const toast = useToast()

const pinia = useStore()

const loading = ref(false)

const otpValue = ref('');
const isFocused = ref(false)
const countdownSeconds = ref(60); // 30 minutes in seconds
const userEmail = ref('juliajames@gmail.com');

const countdownDisplay = computed(() => {
  const minutes = Math.floor(countdownSeconds.value / 60);
  const seconds = countdownSeconds.value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const countdownTimer = setInterval(() => {
  if (countdownSeconds.value > 0) {
    countdownSeconds.value--;
  }
}, 1000);

watch(countdownSeconds, (newValue) => {
  if (newValue === 0) {
    clearInterval(countdownTimer);
    // Enable Resend Code button or perform any other action
  }
});

const goBack = () => {
  // Navigate back to the previous page
};

const handleOtpEntered = (otp) => {
  otpValue.value = otp;
};

const resendCode = async() => {
  // Send the verification code to the user's email again
   // Reset the countdown timer
try{
    const data = await fetch(`${baseURL}auth/resend-email-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: pinia.state.email
      })
    })
    .then(res=>res.json());
    countdownSeconds.value = 60;
    console.log(data.message)

  }catch(error){
    console.error('Error during resending of otp code:', error);
    toast.message(error, {
        position: 'top',
        timeout: 2000,
      })

  }
};


const verifyAccount = async () => {
  const requestValue = {
    email:  pinia.state.email,
    code: otpValue.value, 
  }

  console.log(requestValue)

  loading.value = true

  try {
    const data = await fetch(`${baseURL}auth/verify-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestValue)
    })
    .then(res=>res.json());
   
    if (data.success) {
      if (data.message === 'success') {
        console.log('Verification successful. Proceed with account verification.');
        // Handle successful verification, e.g., navigate to the next page
        loading.value = false
        const user = data.data
        pinia.setUser(user)
        navigateTo('/sign_Up/successful')

      } else {
        console.error('Invalid OTP. Please enter the correct verification code.');
        // Handle invalid OTP, e.g., display an error message to the user
        toast.message('Invalid OTP. Please enter the correct verification code.', {
        position: 'top',
        timeout: 2000,
        })

    }
      loading.value = false
    } else {
      console.error('Failed to verify OTP:', data.message);
      // Handle failed request, e.g., display a generic error message to the user
      toast.message('Failed to verify OTP', {
        position: 'top',
        timeout: 2000,
       })
       loading.value = false
    }

    loading.value = false
  } catch (error) {
    console.error('An error occurred while verifying OTP:', error);
    // Handle error, e.g., display a generic error message to the user
    toast.message(error, {
        position: 'top',
        timeout: 2000,
       })
       loading.value = false
  }

};

</script>



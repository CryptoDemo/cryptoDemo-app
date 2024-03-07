<template>
    <!-- Main container -->
    <div class="px-6 bg-[#fff] dark:bg-[#10192D] h-screen overflow-y-auto">
      <!-- Successful component -->
      <Successful v-if="show_successful" title="Successful" subtitle="Your two-factor authentication for login was set successfully!"/>
  
      <!-- Appbar component -->
      <Appbar link="/dashboard/account/2FA_login" title="Two-factor login" />
  
      <!-- Code instructions -->
      <p v-if="reveal === 1" class="pt-[72px] text-[#8E9BAE] text-center">Copy and paste this code into your 2FA app</p>
      <p v-if="reveal === 2" class="pt-[72px] text-[#8E9BAE] text-center">Enter the code from your 2FA app</p>
  
      <!-- Input field for code -->
      <div v-if="reveal === 1" class="mt-[40] pt-[40px]">
        <input type="text" class="input text-center" v-model.trim="code_input" disabled>
      </div>
  
      <!-- MazInputCode component for code entry -->
      <div v-if="reveal === 2" class="mt-[40px] px-5 flex flex-col justify-center items-center otp">
        <MazInputCode v-model="my_pin" outline="" class="text-black dark:text-white" :code-length="6"/>
      </div>
  
      <!-- Instructions for 2FA app usage -->
      <p v-if="reveal === 1" class="text-sm text-center mt-[40px]">Use <span class="text-[#2873FF] font-bold">Google Authenticator</span> or <span class="text-[#2873FF] font-bold">Authy</span></p>
  
      <!-- Resend code section -->
      <!-- <div v-if="reveal === 2">
        <p v-if="countdownSeconds === 0" class="mt-[38px] text-center">
          <button @click.prevent="resendCode" class="text-[#2873FF] font-[600]">Resend code</button> in
          <span class="text-[#2873FF]">{{countdownDisplay}}</span>
        </p>
        <p v-else class="mt-[38px] text-center">Resend code in <span class="text-[#2873FF] font-[600]">{{countdownDisplay}}</span></p>
      </div> -->
  
      <!-- Copy code button -->
      <a v-if="reveal === 1" @click.prevent="copy(selected_code)" class="flex justify-center text-center mt-5 text-[#2873FF] font-[400] text-sm">
        <span v-if="!copied"> Copy code</span>
        <span v-else>Copied!</span>
      </a>
  
      <!-- Separator -->
      <div v-if="reveal === 1" class="mt-[40px] flex items-center gap-[3px]">
        <div class="bg-[#E2E8F0] dark:bg-[#1B2537] h-[1px] w-full"></div>
        <span class="text-[#10192D] dark:text-[#8E9BAE] text-[14px] font-[400]">or</span>
        <div class="bg-[#E2E8F0] dark:bg-[#1B2537] h-[1px] w-full"></div>
      </div>
  
      <!-- QR Code display -->
      <div v-if="reveal === 1" class="mt-[32px] flex items-center justify-center">
        <div class="w-[192px] h-[191px] flex justify-center items-center text-center">
          <!-- <MazLazyImg class="w-full dark:text-[#8E9BAE] dark:bg-[#1B2537]" :src="qrcode" /> -->
          <div v-html="two_factor_val.auth_url_img"></div>
        </div>
      </div>
  
      <!-- Instructions for QR Code scanning -->
      <div v-if="reveal === 1" class="mt-[32px] text-center">
        <span class="text-[#8E9BAE] text-[14px] font-[400]">Scan the barcode with your 2FA app</span>
      </div>
  
      <!-- Continue button -->
      <div class="fixed bottom-5 left-0 w-full px-6">
        <button @click.prevent="authenticate()" class="btn-primary mt-[57px] w-full">
            
            <span v-show="reveal === 1">Continue</span>
            <span v-show="reveal === 2">
               
                <Loader v-if="loading"/>
                            <span v-else>
                                Verify
                            </span>
            </span>
        </button>
      </div>
    </div>
  </template>
  
    
  <script setup>
  // Import statements
  import './assets/css/maz-ui-variables.css'
  import MazInputCode from 'maz-ui/components/MazInputCode'
  import MazLazyImg from 'maz-ui/components/MazLazyImg'
  import { useDark, useToggle, useClipboard } from '@vueuse/core'
  import { useQRCode } from '@vueuse/integrations/useQRCode'
  
  // Reactive variables
  const show_successful = ref(false)
  const pinia = useStore()
  const toast = useToast()

  const  two_factor_val = ref([])
  
  const code_input = ref('')
 
  console.log(code_input.value)
  const selected_code = ref(null)
  const { text, copy, copied } = useClipboard({ selected_code })
  
  const my_pin = ref('')
  const reveal = ref(1)
  const isFocused = ref(false)
  const loading = ref(false)
  const countdownSeconds = ref(60)



  
  // Method to handle show successful
  
  
  const toggle_show_successful = ()=>{
       show_successful.value = true
       setTimeout(() => {
           navigateTo('/dashboard')
       }, 1000);
   }
  
  // Method to handle authentication process
  const authenticate = async() => {
    if (reveal.value === 1) {
      if (!pinia.state.twoFactor.length) return;
      return reveal.value++;
    } else if (reveal.value === 2) {
        const requestValue = {
        email:  pinia.state.user?.email,
        phone: pinia.state.user?.phone,
        code: my_pin.value, 
        }

       console.log(requestValue)

       loading.value = true

        try {
            const data = await fetch(`${baseURL}user/verify-2fa`, {
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
                pinia.state.isTwoFactorSet = true
            
                toggle_show_successful()


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
    } else {
      navigateTo('/dashboard');
    }
  }



  onBeforeMount(async()=>{

    if(pinia.state.twoFactor !== null){
 
       two_factor_val.value = pinia.state.twoFactor[0]

       code_input.value = two_factor_val.value.code
       selected_code.value = two_factor_val.value.code
       pinia.state.isTwoFactorSet = true
 
    }else{
 
      try{
      const data = await fetch(`${baseURL}user/init-2fa`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token' : `${pinia.state.user?.token}`
  
      }
      })
      .then(res=>res.json());
  
  
      if(data.success){

        pinia.state.isTwoFactorSet = true
  
          loading.value = false
          const two_factor = [...data.data]
  
           two_factor.map((item,index)=>{
                 if(item.code==two_factor_val.value.code){
                   two_factor[index] = two_factor_val.value;
                 }
             });
 
            
 
 
           pinia.setTwoFactor(two_factor)
  
  
      }else{
          toast.message(`${data.message}`, {
          position: 'top',
          timeout: 2000,
          })
      }
  
       }catch(error){
           toast.message(error, {
               position: 'top',
               timeout: 2000,
           })
       }
    }

  
  })

  
  







  </script>
  


<style scoped>


.otp >>> fieldset{
   width: 100% !important;
   display: flex;
   justify-content: space-between;
   margin: 0 16px !important;
}
.otp >>> .input-wrapper{
   height: 48px !important;
   width: 48px !important;
   border-radius: 16px !important;
   /* border: 1px solid  var(--light-border-color); */
}

.otp >>> input{
  border: none;

}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  
  .otp >>> .input-wrapper {
    background-color: transparent !important; /* Dark mode background color */
    /* border: 1px solid var(--dark-border-color) ;  */
  }
}



</style>
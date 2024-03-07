<template>
    <div class="px-[24px] pb-14 h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
      <!-- Sign-up app bar with referral link -->
      <SignupAppBar link="/dashboard" referral_link="/sign_Up/referralCode" referral="" @toggle_referral="v => show_referral_input = v"/>
  
      <div class="">
        <!-- Sub app bar -->
        <Subappbar heading="Create account" desc="It only takes a minute to create your account"/>
  
        <form class="mt-[32px]" @submit.prevent="null">
          <!-- Full name input -->
          <div class="mb-4">
            <input type="text" v-model.trim="name" :class="name_message.length && !name.length ? 'border-[#E33E38] focus:border-[#E33E38]  focus:ring-[#E33E38] dark:border-[#E33E38] dark:focus:border-[#E33E38]  dark:focus:ring-[#E33E38]':''" id="name" class="input" placeholder="Enter full name">
            <!-- Validation message for full name -->
            <Transition
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-5 opacity-0">
                <span v-if="name_message.length && !name.length" class="text-[#E33E38] text-[12px] mt-[8px] ml-2 at-item font-[600]">{{ name_message }}</span>
            </Transition>
          </div>
  
          <!-- Email input -->
          <div class="mb-4">
            <input type="email" v-model.trim="email" :class="!checkValidEmail && email_message.length ? 'border-[#E33E38] focus:border-[#E33E38]  focus:ring-[#E33E38] dark:border-[#E33E38] dark:focus:border-[#E33E38]  dark:focus:ring-[#E33E38]':''" id="email" 
            class="input" placeholder="Enter email address">
            <!-- Validation message for email -->
            <Transition
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-5 opacity-0">
                <span v-if="!checkValidEmail && email_message.length" class="text-[#E33E38] text-[12px] mt-[8px] ml-2 at-item font-[600]">{{ email_message }}</span>
            </Transition>
          </div>
  
          <!-- Password input -->
          <div class="mb-4">
            <InputPasswordValidation @password="v => password = v" placeholder="Enter your password" :errorlog="checkValidPassword"/>
          </div>
  
          <!-- Country dropdown -->
          <div class="mb-4">
            <CountryDropdown @selected_country="v => country = v"/>
          </div>
  
          <!-- Referral code input (conditional) -->
          <transition 
             leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-5 opacity-0" >

            <div v-show="show_referral_input" class="mb-4 transition ease-linear duration-300 at-item">
              <input type="text" id="referral" class="input" placeholder="Referal Code" v-model.trim="referral_code">
            </div>
          </transition>
  
          <!-- Terms and conditions checkbox -->
          <div class="flex items-center">
            <div class="flex items-center min-h-5">
              <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-gray-200 rounded-lg bg-transparent focus:ring-1 focus:ring-blue-300">
            </div>
            <label for="terms" class="ms-2 mt-3 text-sm font-[400] text-[#8E9BAE] dark:text-[#E2E8F0]">
              I agree with the 
              <a href="#" class="text-[#2873FF] font-bold hover:underline dark:text-[#2873FF]">terms and conditions</a> 
              and
              <a href="#" class="text-[#2873FF] font-bold hover:underline dark:text-[#2873FF]">privacy policy</a>
            </label>
          </div>
  
          <!-- Create account button -->
          <button @click.prevent="signUp" class="scaling-animation mt-[40px] btn-primary mb-4 w-full">
            <Loader v-if="loading"/>
            <span v-else>Create account</span>
          </button>
        </form>
  
        <!-- Login link -->
        <div class="text-center mt-[80px] p-[20px] font-[400] text-sm text-[#8E9BAE]">
          <span class="dark:text-[#8E9BAE] font-[400]">Already registered? <a @click.prevent="navigateTo('/login')" class="text-[#2873FF] font-bold cursor-pointer">Login</a></span>
        </div>
      </div>
    </div>
 </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useStore } from "@/stores/index"
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

const pinia = useStore()
const loading = ref(false)
const name = ref('')
const email = ref('')
const password = ref('')
const country = ref('')
const referral_code = ref(null)
const name_message = ref('')
const email_message = ref('')
const password_message = ref('')
const validmail = ref(null)
const verifyPassword = ref(null)
const showPassword = ref(false)
const show_referral_input = ref(false)

const checkValidEmail = ref(false)
const checkValidPassword = ref(true)

const device =  await deviceInfo()
const toast = useToast()


// watch if the email is validated
watch(()=> email.value ,(newval)=>{
    if(validEmail(newval)){
        checkValidEmail.value = true
    }else{
        checkValidEmail.value = false

    }
})

// watch if the password is valid
watch(()=> password.value ,(newval)=>{
    if(verifyPasswordPattern(newval)){
        checkValidPassword.value = true
    }else{
        checkValidPassword.value = false

    }
})



const togglePasswordVisibility = () => {
showPassword.value = !showPassword.value;
}

// Function to sign up the user
const signUp = async () => {
    delete device.memUsed
    delete device?.diskFree
    delete device?.diskTotal
    delete  device.realDiskFree
    delete device.realDiskTotal
    delete device.webViewVersion

    // Check validity of inputs
    validmail.value = validEmail(email.value)
    verifyPassword.value = verifyPasswordPattern(password.value)
    if (!name.value) return name_message.value = "Enter your name"
    if (!validmail.value) return email_message.value = "Enter valid email "
    if (!verifyPassword.value) return   checkValidPassword.value = false


    // Prepare signup info
    const signup_info = {
        name: name.value,
        email: email.value,
        password: password.value,
        country: country.value,
        device_token: pinia.state.token || null,
        device_info: JSON.stringify(device),
        referrer_code: referral_code.value,
    }

    // Remove null values
    if (signup_info.device_token === null) delete signup_info.device_token
    if (signup_info.referrer_code === null) delete signup_info.referrer_code

    // Perform sign-up request
    loading.value = true
    try {
        const data = await fetch(`${baseURL}auth/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup_info),
        }).then(res => res.json());

        // Handle response
        if (data.success) {
        // Store password in secure storage
        await SecureStoragePlugin.set({ key:'password', value: password.value});
        // Redirect to verification page
        pinia.setEmail(email.value)
        navigateTo('/sign_Up/verification')
        } else {
        console.error('Sign-up failed:', data.message);
        toast.message(`Sign-up failed: ${data.message}`, { position: 'top', timeout: 2000 })
        }
    } catch (error) {
        console.error('Error during sign-up:', error);
        toast.message(error, { position: 'top', timeout: 2000 })
    }
    loading.value = false
}

// Initialize Flowbite on component mount
onMounted(() => {
initFlowbite();
})
</script>
  


<style scoped>

.fadeIn{
    animation: fadeIn  95ms ease-in-out;
}

@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1,
    }
    
}


.at-item {
		/* width: 100%; height: 100%; */
		
		animation-name: slide-in-bck-top;
		animation-duration: 0.3s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
			
		/* shorthand
		animation: slide-in-bck-top 1s linear 0s 1 normal none;*/
	}
	@keyframes slide-in-bck-top {
			
		0% {
			transform:translateZ(700px) translateY(-30px);
			opacity:0;
		}
		100% {
			transform:translateZ(0) translateY(0);
			opacity:1;
		}
	}



    #checkmark {
        animation: drawCheckmark 1s ease-in-out forwards;
    }

    @keyframes drawCheckmark {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>




    



                        
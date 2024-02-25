<template>
    <div class="px-[24px] pb-14  h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
            
           <SignupAppBar link="/dashboard" referral_link="/sign_Up/referralCode" referral=" Apply referral code"
           @toggle_referral=" v => show_referral_input = v"/>

            <div>

             <Subappbar  heading="Create account" desc="It only takes a minute to create your account"/>

                <form class=" mt-[32px]">
                    <div class="mb-4">

                        <input type="text"  v-model.trim="name"  :class="name_message.length && !name.length ? 'border-[#E33E38]':''"
                        id="name" class=" input " placeholder="Enter full name">

                        <Transition
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="translate-y-0 opacity-100"
                            leave-to-class="-translate-y-5 opacity-0"
                        >
                            <span v-if="name_message.length && !name.length" class="text-[#E33E38] mt-[8px] 
                            ml-2 at-item font-[600]" >{{ name_message }}</span>
                        </Transition>
                    </div>

                    <div class="mb-4">
                        <input type="email"  v-model.trim="email"   :class="!validmail && email_message ? 'border-[#E33E38]':''"
                        id="email" class=" input " placeholder="Enter email address">

                         <!-- <Transition
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="translate-y-0 opacity-100"
                            leave-to-class="-translate-y-5 opacity-0"
                        >
                            <span v-if="!validmail  && email_message " class="text-[#E33E38] mt-[8px] 
                            ml-2 at-item font-[600]" >{{ email_message }}</span>
                        </Transition> -->
                    </div>
                    

                    <div class="mb-4">
                       
                        <InputPassword    @password="v => password = v"  placeholder="Enter your password"/>

                            

                    </div>

                   

                    <div class="mb-4 ">

                        <CountryDropdown @selected_country="v => country  = v "/>

                    </div>



                    <div v-show="show_referral_input" 
                   
                    class="mb-4 transition ease-linear duration-300 fadeIn">
                        <input type="text" id="referral" class="input" 
                        placeholder="Referal Code"   v-model.trim="referral_code" >
                    </div>

                
                    <div class="flex items-center">
                        <div class="flex items-center min-h-5">
                        <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-gray-200 rounded-lg bg-transparent
                        focus:ring-1 focus:ring-blue-300 " required>
                        </div>
                        <label for="terms" class="ms-2 mt-3 text-sm font-[400] text-[#8E9BAE] dark:text-[#E2E8F0]">
                            I agree with the 
                            <a href="#" class="text-[#2873FF] font-[600] hover:underline dark:text-[#2873FF]">terms and conditions</a> 
                            and
                            <a href="#" class="text-[#2873FF] font-[600] hover:underline dark:text-[#2873FF]">privacy policy</a>
                        </label>
                    </div>

                    <button @click.prevent="signUp "  
                    class=" scaling-animation mt-[40px] btn-primary mb-4 w-full ">
                       <Loader v-if="loading"/>
                       <span v-else>
                           Create account
                       </span>
                     </button>
                   
                    <!-- <button @click.prevent="navigateTo('/sign_Up/create_with_phone')" class="scaling-animation btn-border  w-full">Create account with phone number</button> -->
                </form>


               <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE] font-[400]">Already registered? <a  @click.prevent="navigateTo('/login')"  class="text-[#2873FF] font-bold"> Login</a></span>
               </div>

            </div>
    </div>
</template>




<script setup>
import { ref } from 'vue'
import { initFlowbite } from 'flowbite'
// import {signUp} from '@/composables/auth'
import {useStore} from "@/stores/index"

const pinia = useStore()

const loading = ref(false)

const name = ref('')
const email = ref('')
const password = ref('')
const country = ref('')
const referral_code = ref('')
const name_message = ref('')
const email_message = ref('')
const password_message = ref('')
const validmail = ref(null)
const verifyPassword = ref(null)





const showPassword = ref(false)
const show_referral_input = ref(false)


const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
}


const togglepassword = (v) => {
  password.value = v;
} 


// const create_account = async()=>{
//     validmail.value = validEmail(email.value)
//     verifyPassword.value = verifyPasswordPattern(password)
//     if(!name.value) return name_message.value = "Enter your name"
//     if(!validmail.value) return email_message.value = "Enter valid email "
//     // if(!verifyPassword.value) return password_message.value = "Enter your password "
//     await signUp(name.value,email.value,password.value,country.value,referral_code.value)
// } 


const device =  await deviceInfo()

const toast = useToast()


 const signUp = async() => {
     
    // alert(pinia.state.token)
    
    validmail.value = validEmail(email.value)
    verifyPassword.value = verifyPasswordPattern(password.value)
    // if(!name.value) return name_message.value = "Enter your name"
    if(!validmail.value) return email_message.value = "Enter valid email "
    // if(!verifyPassword.value) return password_message.value = "Enter your password "
    
    const signup_info = {
        name: name.value,
        email:email.value,
        password: password.value,
        referrer_code: referral_code.value,
        country: country.value,
        device_token: pinia.state.token,
        device_info: JSON.stringify(device),
    }
    
    loading.value = true
    console.log(signup_info)

  try {
    const response = await fetch('https://cryptodemoapi-production.up.railway.app//v1/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(signup_info),
    })

    const data = await response.json()


    if (data.success) {
      // Redirect or perform any action after successful sign-up
      console.log('Sign-up successful!');
      loading.value = false
      pinia.setEmail(email)
      navigateTo('/sign_Up/verification')

    } else {
      // Handle error, maybe show an error message to the user
      console.error('Sign-up failed:', data.message);
      toast.message('Sign-up failed', {
        position: 'top',
        timeout: 2000,
      })
            loading.value = false
    }

  } catch (error) {
    console.error('Error during sign-up:', error);
    toast.message(error, {
        position: 'top',
        timeout: 2000,
      })
      loading.value = false
  }
  loading.value = false

}



// validEmail



onMounted(() => {
//    getDeviceToken(this)
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

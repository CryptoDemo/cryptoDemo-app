<template>
    <div class="px-[24px]  h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
            
           <SignupAppBar link="/dashboard" referral_link="/sign_Up/referralCode" referral=" Apply referral code"/>

            <div >

             <Subappbar  heading="Create account" desc="It only takes a minute to create your account"/>


                <form class=" mt-[32px]">
                    <div class="mb-4">
                        <input type="email" id="email" class=" input " placeholder="Email Address" required>
                    </div>

                    <div class="mb-4">
                       
                        <InputPassword/>


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

                    <button @click.prevent="navigateTo('/sign_Up/setup_pin')"  class=" scaling-animation mt-[40px] btn-primary mb-4 w-full ">create account</button>
                    <button @click.prevent="navigateTo('/sign_Up/create_with_phone')" class="scaling-animation btn-border-primary  w-full">Create account with phone number</button>
               </form>


               <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE] font-[400]">Already registered? <a   @click.prevent="navigateTo('/login')"  class="text-[#2873FF] font-bold"> Login</a></span>
               </div>

            </div>
    </div>
</template>




<script setup>
  
import { initFlowbite} from 'flowbite'

const password = ref('')
const showPassword = ref(false)


const togglePasswordVisibility=() =>{
      showPassword.value = !showPassword.value;
}



onMounted(()=>{
    initFlowbite();
})



</script>
<template>

    <div class="w-full h-screen overflow-y-auto  fixed left-0 top-0  dark:bg-[#10192D] transition ease-linear duration-300">

        <div class=" px-6">

            <LoginAppBar link="/login"/>


            <div class="pt-[72px]  relative">

                <IconsReset/>

            </div>
            
            <div class=" my-4 py-4 text-center relative bottom-0 left-0 w-full ">
           
                  <h3 class="text-2xl font-extrabold text-[#10192D]">Reset password</h3>
                  <p class="text-sm text-[#64748B]  pt-4 px-4">Enter the email address linked to your account</p>

                <div class="my-6">
                        <input type="email" id="email" class="input " placeholder="Email Address" required>
                        
                </div>
                <div class="flex justify-end w-full  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_number')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] font-bold text-sm">Reset with phone number?</a>
                </div>

            </div>
    

            <div class="absolute w-full left-0 bottom-5 px-6">
                <button @click.prevent="navigateTo('/login/verify_password_reset')"  class="w-full btn-primary scaling-animation
               mt-[24px] ">continue</button>
            </div>
        </div>

    </div>

        


</template>

<script>
import { ref } from "vue";

export default {
    data(){
        return{
            otpvalue:'', //collecting th otp pin values
        }
    }
 
};
</script>
<template>

    <div class="w-full  fixed left-0 top-0  dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[15px] h-screen ">
            <div class="flex justify-between items-center mb-3 ">
    
                <button type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2   text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>

            <div class=" py-4  relative">
                  <IconsReset/>
            </div>
            
            <div class=" my-4 py-4 text-center relative bottom-0 left-0 w-full mt-10">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Reset password</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Enter the email address linked to your account</p>

                <div class="my-6">
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                        text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px] dark:bg-transparent
                        dark:border-gray-700 dark:placeholder-gray-400 dark:text-white " placeholder="Email Address" required>
                        
                </div>
                <div class="flex justify-end w-full  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_number')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] text-sm">Reset with phone number?</a>
                </div>

            </div>
    

            <div class=" w-full">
                <button @click.prevent="navigateTo('/login/verify_password_reset')"  class="w-full btn-primary 
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
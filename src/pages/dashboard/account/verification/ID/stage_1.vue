<template>

    <div class="max-w-full h-screen overflow-y-auto bg-[#ffff]   dark:bg-[#10192D]  transition ease-linear duration-300">
        <div class="px-6 pt-[15px] ">
            <div class="grid grid-cols-4 items-center">
                <div>
                    <button @click.prevent="navigateTo('/dashboard/account/verification')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                    items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                        <Icon name="mdi:arrow-left" size="24" />
                    </button>
                </div>

                <span class=" col-span-2 dark:text-white font-bold text-center">ID Verification</span>

            </div>
            
            <div class=" my-4 p-4">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Enter Verification Code</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Enter the 4-digit code  we just send to your email 
                    <span class="text-[#10192D]">juliajames@gmail.com.</span></p>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                        
                      <p class="mt-[38px]">Resend code in <span class="text-[#2873FF]">29:58</span></p>  
    
            </div>

            <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_2')" class="w-full btn-primary mt-[75px]">Verify</button>
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
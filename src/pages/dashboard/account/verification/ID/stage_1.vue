<template>

    <div class="max-w-full h-screen overflow-y-auto bg-[#ffff]   dark:bg-[#10192D]  transition ease-linear duration-300">
        <div class="px-6 pt-[6px] ">
            <Appbar link="/dashboard/account/verification/ID" title="ID Verification" />
            
            <div class=" py-4">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Enter Verification Code</h3>
                  <p class="text-sm font-[400] pt-4 text-[#8E9BAE]">Enter the 4-digit code  we just send to your phone number +62 2344 451</p>
            </div>
    
    
    
            <div class="mt-[36px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                        
                      <p class="mt-[38px] font-[700]">Resend code in <span class="text-[#2873FF]">29:58</span></p>  
    
            </div>

            <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_2')" class="w-full scaling-animation btn-primary mt-[75px]">Verify</button>
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
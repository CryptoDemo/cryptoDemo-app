<template>

    <div class="max-w-full min-h-screen mx-auto transition ease-linear duration-300">
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
                    <span class="text-[#10192D]">juliajames@gmail.com.</span></p>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                        
                      <p class="mt-[38px]">Resend code in <span class="text-[#2873FF]">29:58</span></p>  
    
            </div>

            <button class="w-full btn-primary mt-[75px]">Verify</button>
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



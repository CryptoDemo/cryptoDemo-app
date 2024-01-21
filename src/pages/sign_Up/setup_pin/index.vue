<template>

    <div class="max-w-full h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px] ">
            <div class="flex justify-between items-center mb-3">
    
                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>
            
            <div class=" my-6  text-center">
           
                  <h3 class="text-2xl font-bold text-[#10192D] ">Create New Pin</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE] dark:text-[#E2E8F0]">This adds an extra layer of security to your account. Use pin to unlock app!</p>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                        
    
            </div>

            <button   @click.prevent="navigateTo('/sign_Up/setup_pin/success')" class="w-full btn-primary mt-[75px] scaling-animation">continue</button>
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
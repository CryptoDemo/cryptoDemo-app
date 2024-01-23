<template>

    <div class="max-w-full  h-screen overflow-y-auto mx-auto dark:bg-[#10192D] transition ease-linear duration-300">
        <div class=" px-6 ">
           
            <div class="dark:bg-[#10192D] bg-white fixed w-full top-0 left-0 px-6 py-[10px]">
    
                <div class="flex justify-between items-center dark:bg-[#10192D] w-full">
                    <button  @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                    items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                        <Icon name="mdi:arrow-left" size="24"/>
                    </button>

                
                </div>

            </div>
            
            <div class="pt-[8px] ">
                
                    <Subappbar  heading="Enter Verification Code" 
                    desc=" Enter the 4-digit code  we just send to your email "
                    span="juliajames@gmail.com."/>

            </div>
    
    
    
            <div class="pt-[44px] px-[12px] text-center flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                        
                      <p class="mt-[32px] text-sm text-[#10192D] dark:text-[#F8FAFC]">Resend code in <span class="text-[#2873FF]">29:58</span></p>  
    
            </div>

            <div class="fixed bottom-5 left-0 w-full px-6">
                <button @click.prevent="navigateTo('/login/create_new_password')" class="w-full btn-primary  scaling-animation">Verify</button>
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

<template>

    <div class="max-w-full h-screen overflow-y-auto bg-[#ffff]   dark:bg-[#10192D]  transition ease-linear duration-300">
        <div class="px-6 pt-[6px] ">
            <Appbar link="/dashboard/account/verification/ID" title="ID Verification" />
            

            <Subappbar heading="Enter Verification Code" 
            desc="Enter the 4-digit code  we just send to your phone number "
            span="+62 2344 451"/>
    
    
    
            <div class="mt-[36px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered=" v => otpvalue = v"/>  
                        
                      <p class="mt-[38px] font-[700] text-center">Resend code in <span class="text-[#2873FF]">29:58</span></p>  
    
            </div>

            <div v-show="!isFocused"  class="fixed bottom-5 left-0 w-full px-6 transition ease-out duration-300">

                <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_2')" 
                class="w-full scaling-animation btn-primary mt-[75px]">Verify</button>
                
            </div>
        </div>

    </div>

        


</template>

<script setup>
import { ref } from "vue";

const  otpvalue = ref('')
const isFocused = ref(false)

</script>
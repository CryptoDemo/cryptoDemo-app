<template>

    <div class="max-w-full h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px] ">
          
            <LoginAppBar link="/sign_Up"/>
            
            <div class=" text-center">
           
                <Subappbar  heading="Create New Pin" desc="This adds an extra layer of security to your account. Use pin to unlock app!"/>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp    @focusin="isFocused=true" @focusout="isFocused=false"
                     :length="4" @entered=" v => otpvalue = v"/>  
                        
    
            </div>

            <div  v-show="!isFocused"  class="fixed bottom-5 left-0 w-full px-6">

                <button   @click.prevent="navigateTo('/sign_Up/setup_pin/success')" class="w-full btn-primary mt-[75px] scaling-animation">Continue</button>
            </div>
        </div>

    </div>

        


</template>

<script setup>
import { ref } from "vue";

const  otpvalue = ref('')
const isFocused = ref(false)

</script>
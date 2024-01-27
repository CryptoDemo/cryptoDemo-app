<template>

    <div class="max-w-full h-screen overflow-y-auto mx-auto dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 ">

            <LoginAppBar link="/login"/>


                <div class="pt-[72px]  relative">

                    <IconsReset/>

                </div>
            
            <div class="my-4 py-4  text-center  ">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Reset password</h3>
                  <p class="text-sm  pt-4 px-4 pb-6 text-[#8E9BAE] font-[400]">
                    Enter the phone number linked to your account
                </p>


                  <InputCountrySelector   @focusin="isFocused=true" @focusout="isFocused=false"
                     :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />


                <div class="pt-1 w-full flex justify-end  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] font-bold text-sm">Reset with email?</a>
                </div>

            </div>
    
    
    
           

            <div class="fixed w-full left-0 bottom-10 px-6">

                <button v-show="!isFocused"    @click.prevent="navigateTo('/login/verify_password_reset')" 
                class="w-full btn-primary scaling-animation">Continue</button>
            </div>
        </div>

    </div>

        


</template>

<script setup>
import { initFlowbite,Dropdown } from 'flowbite'
  
const isFocused = ref(false)


onMounted(()=>{
    initFlowbite();
})






</script>
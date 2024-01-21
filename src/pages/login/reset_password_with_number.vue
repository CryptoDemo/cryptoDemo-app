<template>

    <div class="max-w-full h-screen overflow-y-auto mx-auto dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 py-[6px]  ">
            <div class="flex justify-between items-center mb-3 ">
    
                <button @click="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>

            <div class=" pt-4  relative">
                  <IconsReset/>
            </div>
            
            <div class=" my-[32px]  text-center  ">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Reset password</h3>
                  <p class="text-sm  pt-4 text-[#8E9BAE] font-[400]">Enter the email address linked to your account</p>


                  <InputCountrySelector   :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />


                <div class=" w-full flex justify-end  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] text-sm">Reset with email?</a>
                </div>

            </div>
    
    
    
           

            <div class="fixed w-full left-0 bottom-10 px-6">

                <button  @click.prevent="navigateTo('/login/verify_password_reset')" 
                class="w-full btn-primary scaling-animation">continue</button>
            </div>
        </div>

    </div>

        


</template>

<script setup>
import { initFlowbite,Dropdown } from 'flowbite'
  



onMounted(()=>{
    initFlowbite();
})






</script>
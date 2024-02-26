

<template>

    <div class="max-w-full h-screen overflow-y-auto  bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px]">

            <LoginAppBar link="/sign_Up"/>

            
            <div class="mb-[34px]">
                <Subappbar  heading="Add phone number" desc=" It only takes a minute to do this for an extra layer of security to your account."/>
            </div>
    
            <InputCountrySelector  :selectedCountryCode="selectedCountryCode" :selectedIcon="selectedIcon" :isdisabled="true" />
    
           
             <div class="fixed bottom-5 left-0 w-full px-6 flex gap-5 transition ease-in-out duration-500">

                 <button @click.prevent="navigateTo('/dashboard')" class="w-full btn-border scaling-animation ">Skip</button>
                 <button  @click.prevent="navigateTo('/sign_Up/add_phone_number/success')"   class="w-full btn-primary scaling-animation">Save</button>
             </div>
        </div>



    </div>

        


</template>






<script setup>
  
import { initFlowbite} from 'flowbite'
import { showKeyboard } from '@/composables/capacitor_plugins'



const  selectedCountryCode = ref('+234')
const selectedIcon = ref('ng')

// const keyboard = await showKeyboard()


onMounted(()=>{
    // keyboard()
    initFlowbite();
})






</script>

<style scoped>



</style>
<template>
    
    <Successful v-if="show_successful" title="sucessful" subtitle="`Your document has been successfully  uploaded and is under review!`"/>
    <div v-else class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

     
        <Appbar link="/dashboard/account/verification" title="ID Verification" />

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400]  text-[#8E9BAE]">Take a photo of front of your Identity Card</p>
        </div>

      
        <div class=" mt-[15vh] relative p-[14px]">
           
            <!-- <svg class="absolute top-0 left-0 " xmlns="http://www.w3.org/2000/svg" width="39" height="36" viewBox="0 0 39 36" fill="none">
            <path d="M2 35.5V14C2 7.37258 7.37258 2 14 2H28H38.5"   :stroke="!isDark? '#8E9BAE' :'#F8FAFC'"  stroke-width="3"/>
            </svg> -->
            <div class="absolute top-0 left-0 w-full flex justify-center">

                <svg  xmlns="http://www.w3.org/2000/svg" width="169" height="190" viewBox="0 0 169 190" fill="none">
                <path d="M2 35.5V14C2 7.37258 7.37258 2 14 2H28H38.5"    :stroke="!isDark? '#8E9BAE' :'#F8FAFC'" stroke-width="3"/>
                <path d="M167 36V14.5C167 7.87258 161.627 2.5 155 2.5H141H130.5"    :stroke="!isDark? '#8E9BAE' :'#F8FAFC'" stroke-width="3"/>
                <path d="M2.5 155V176.5C2.5 183.127 7.87258 188.5 14.5 188.5H28.5H39"    :stroke="!isDark? '#8E9BAE' :'#F8FAFC'" stroke-width="3"/>
                <path d="M167.5 154.5V176C167.5 182.627 162.127 188 155.5 188H141.5H131"    :stroke="!isDark? '#8E9BAE' :'#F8FAFC'" stroke-width="3"/>
                </svg>
            </div>

            <div class="relative  min-h-[154px] flex justify-center items-center">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="154" height="154" viewBox="0 0 154 154" fill="none">
                <circle opacity="0.1" cx="77" cy="77" r="77" fill="#F8FAFC"/>
                </svg> -->
                <img src="/Ellipse.png"/>
            </div>

           

        </div>


         
        



         <button  @click.prevent="toggle_show_successful" 
         class="btn-primary mt-[127px] w-full scaling-animation">Complete ID verification</button>
    </div>

</template>


<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard/account/verification')
    }, 1000);
}
</script>
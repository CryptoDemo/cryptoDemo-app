<template>

<div class="mx-6 min-h-[144px] bg-gradient-to-r from-[#2873FF] to-[#38BDF8] relative rounded-[20px]">

<div class="p-6  flex flex-col justify-between ">
    <div class="flex justify-between items-center">
        <div class="flex items-center">
            <span class="mr-[10px] capitalize font-[400] text-sm text-[#FFF] opacity-60">balance</span>

            <div @click.prevent=" toggle_visibility ">
                
                <svg v-if="!isvisible" class="opacity-60 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.9833 10.0009C12.9833 11.6509 11.6499 12.9842 9.99993 12.9842C8.34993 12.9842 7.0166 11.6509 7.0166 10.0009C7.0166 8.35091 8.34993 7.01758 9.99993 7.01758C11.6499 7.01758 12.9833 8.35091 12.9833 10.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99987 16.8913C12.9415 16.8913 15.6832 15.1579 17.5915 12.1579C18.3415 10.9829 18.3415 9.00794 17.5915 7.83294C15.6832 4.83294 12.9415 3.09961 9.99987 3.09961C7.0582 3.09961 4.31654 4.83294 2.4082 7.83294C1.6582 9.00794 1.6582 10.9829 2.4082 12.1579C4.31654 15.1579 7.0582 16.8913 9.99987 16.8913Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg v-else class="opacity-60 transition ease-in-out duration-300"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.1083 7.89258L7.8916 12.1092C7.34994 11.5676 7.0166 10.8259 7.0166 10.0009C7.0166 8.35091 8.34993 7.01758 9.99993 7.01758C10.8249 7.01758 11.5666 7.35091 12.1083 7.89258Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8499 4.80742C13.3915 3.70742 11.7249 3.10742 9.99987 3.10742C7.0582 3.10742 4.31654 4.84076 2.4082 7.84075C1.6582 9.01575 1.6582 10.9908 2.4082 12.1658C3.06654 13.1991 3.8332 14.0908 4.66654 14.8074" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.0166 16.2741C7.9666 16.6741 8.97493 16.8908 9.99993 16.8908C12.9416 16.8908 15.6833 15.1574 17.5916 12.1574C18.3416 10.9824 18.3416 9.00742 17.5916 7.83242C17.3166 7.39909 17.0166 6.99076 16.7083 6.60742" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9252 10.584C12.7085 11.759 11.7502 12.7173 10.5752 12.934" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.8915 12.1074L1.6665 18.3324" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3334 1.66602L12.1084 7.89102" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
        </div>

        <div @click.prevent="toggle_account_types" class="flex items-center relative">
            <span class="text-sm font-[400] text-[#fff] opacity-60">{{ selected_account_type }}</span>
            <svg class="ml-[5px]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div v-show="show_account_types" 
            class="absolute top-6 bg-[#F5F9FF] px-4  rounded z-50">
                 <ul  v-for="i in account_types" :key="i"
                 @click.prevent="selected_account_type = i; !show_account_types">

                     <li  class="py-1">{{ i }}</li>
                 </ul>
            </div>

            <!-- <div class="absolute">
              <span>ETH</span>
            </div> -->

        </div>


    </div>

    <div class="pt-[15px] pb-[12px] min-h-[47px] flex  items-center">
        <h1 v-if="!isvisible" class="text-[32px] transition ease-in-out duration-300  font-[800] text-[#fff]">$590,987</h1>
        <div v-else  class="flex  items-center">

            <div v-for="i in 6" class="mr-2 transition ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                </svg>
            </div>
        </div>
    </div>

    <div class="flex items-center">
    <span  class="text-[16px] font-[500] text-[#fff] opacity-60">$5,987</span>
    <div class="ml-[30px] flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M3.88749 7.50065H6.11249C7.49582 7.50065 8.05832 6.52148 7.37082 5.32565L7.06249 4.79232C6.98749 4.66315 6.84999 4.58398 6.69999 4.58398H3.29999C3.14999 4.58398 3.01249 4.66315 2.93749 4.79232L2.62916 5.32565C1.94166 6.52148 2.50416 7.50065 3.88749 7.50065Z" fill="white"/>
        <path d="M3.66265 4.16576H6.34181C6.50431 4.16576 6.60431 3.99076 6.52098 3.85326L6.25431 3.39492C5.56681 2.19909 4.43348 2.19909 3.74598 3.39492L3.47931 3.85326C3.40015 3.99076 3.50015 4.16576 3.66265 4.16576Z" fill="white"/>
        </svg>

        <span class="text-[12px] font-[400] ml-0.5 text-[#fff] opacity-60">+10%</span>
    </div>
    </div>

</div>

    <div v-if="props.show_btns" class="transition ease-in-out duration-300">

        <div v-if="props.show_two_btns" class="absolute -bottom-8 gap-[10px] px-6 w-full  flex justify-between items-center">

            <button class="py-[12px] px-[16px] min-h-[51px] box-shadow capitalize rounded-2xl bg-[white] text-[#10192D] flex items-center justify-center 
            gap-x-[8px] w-full font-[700] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M4.0835 14.168V15.8346C4.0835 16.2767 4.25909 16.7006 4.57165 17.0131C4.88421 17.3257 5.30814 17.5013 5.75016 17.5013H15.7502C16.1922 17.5013 16.6161 17.3257 16.9287 17.0131C17.2412 16.7006 17.4168 16.2767 17.4168 15.8346V14.168" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5835 9.16797L10.7502 13.3346L14.9168 9.16797" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.75 3.33398V13.334" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-sm">Buy</span>
            </button>
            <button class="py-[12px] min-h-[51px] px-[16px] capitalize box-shadow rounded-2xl bg-[white]
            text-[#10192D] flex items-center justify-center 
            gap-x-[8px] w-full font-[700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M3.5835 5.83203V4.16536C3.5835 3.72334 3.75909 3.29941 4.07165 2.98685C4.38421 2.67429 4.80814 2.4987 5.25016 2.4987H15.2502C15.6922 2.4987 16.1161 2.67429 16.4287 2.98685C16.7412 3.29941 16.9168 3.72334 16.9168 4.16536V5.83203" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.0835 10.832L10.2502 6.66536L14.4168 10.832" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.25 16.666V6.66602" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                <span class="text-sm">Sell</span>
            </button>
        
            
        </div>
        <div v-else class="absolute -bottom-8 gap-[10px] px-6 w-full  flex justify-between items-center">

            <button @click.prevent="navigateTo('/dashboard/wallet/send')" class="py-[12px] px-[16px] min-h-[51px] box-shadow capitalize rounded-2xl bg-[white] text-[#10192D] flex items-center justify-center 
            gap-x-[8px] w-full font-[700] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M4.0835 14.168V15.8346C4.0835 16.2767 4.25909 16.7006 4.57165 17.0131C4.88421 17.3257 5.30814 17.5013 5.75016 17.5013H15.7502C16.1922 17.5013 16.6161 17.3257 16.9287 17.0131C17.2412 16.7006 17.4168 16.2767 17.4168 15.8346V14.168" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5835 9.16797L10.7502 13.3346L14.9168 9.16797" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.75 3.33398V13.334" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-sm">Send</span>
            </button>
            <button class="py-[12px] min-h-[51px] px-[16px] capitalize box-shadow rounded-2xl bg-[white]
            text-[#10192D] flex items-center justify-center 
            gap-x-[8px] w-full font-[700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M3.5835 5.83203V4.16536C3.5835 3.72334 3.75909 3.29941 4.07165 2.98685C4.38421 2.67429 4.80814 2.4987 5.25016 2.4987H15.2502C15.6922 2.4987 16.1161 2.67429 16.4287 2.98685C16.7412 3.29941 16.9168 3.72334 16.9168 4.16536V5.83203" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.0835 10.832L10.2502 6.66536L14.4168 10.832" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.25 16.666V6.66602" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                <span class="text-sm">Get</span>
            </button>
            <button @click.prevent="navigateTo('/dashboard/wallet/swap')" class="py-[12px] min-h-[51px] px-[16px] capitalize box-shadow rounded-2xl bg-[white]
            text-[#10192D] flex items-center justify-center 
            gap-x-[7px] w-full font-[700]">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M6.47168 19.9785L14.6347 11.7956L14.6546 16.3361" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.1966 4.02234L10.0336 12.1953L10.0137 7.66475" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-sm">Swap</span>
            </button>
            
        </div>
    </div>

</div>

</template>


<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()


const show_create_account = ref(false)
const isvisible = ref(false)
const show_account_types = ref(false)
const selected_account_type = ref('USD')
const account_types = ['USD','ETH','BTC']



const props = defineProps({
    show_two_btns:{
        type: Boolean,
        default: false,
    },
    show_btns:{
        type: Boolean,
        default: true,
    }
})




const toggle_account_types =()=>{
    show_account_types.value = !show_account_types.value
}

const toggle_visibility = ()=>{
    isvisible.value = !isvisible.value
}

</script>
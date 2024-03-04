<template>
    <div class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <Appbar link="/dashboard" title="Two-factor login"  />

        <p class="pt-[72px]  text-[#8E9BAE]">This safeguards your account against unauthorized entry.</p>

        <!-- :fill="isDark? 'white':'#2873FF'" -->

        <div @click.prevent="openModal" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
            <div class=" flex justify-between items-center">
                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.4499 3.43288L10.8666 1.71621C10.3916 1.54121 9.61659 1.54121 9.14159 1.71621L4.55825 3.43288C3.67492 3.76621 2.95825 4.79954 2.95825 5.74121V12.4912C2.95825 13.1662 3.39992 14.0579 3.94159 14.4579L8.52492 17.8829C9.33325 18.4912 10.6583 18.4912 11.4666 17.8829L16.0499 14.4579C16.5916 14.0495 17.0333 13.1662 17.0333 12.4912V5.74121C17.0416 4.79954 16.3249 3.76621 15.4499 3.43288ZM12.2333 11.6412C12.1083 11.7662 11.9499 11.8245 11.7916 11.8245C11.6333 11.8245 11.4749 11.7662 11.3499 11.6412L10.0249 10.3162L8.65825 11.6829C8.53325 11.8079 8.37492 11.8662 8.21658 11.8662C8.05825 11.8662 7.89992 11.8079 7.77492 11.6829C7.53325 11.4412 7.53325 11.0412 7.77492 10.7995L9.14159 9.43288L7.80825 8.09954C7.56659 7.85788 7.56659 7.45788 7.80825 7.21621C8.04992 6.97454 8.44992 6.97454 8.69159 7.21621L10.0166 8.54121L11.3083 7.24954C11.5499 7.00788 11.9499 7.00788 12.1916 7.24954C12.4333 7.49121 12.4333 7.89121 12.1916 8.13288L10.8999 9.42454L12.2249 10.7495C12.4749 10.9995 12.4749 11.3912 12.2333 11.6412Z" :fill="isDark? 'white':'#2873FF'"/>
                    </svg>
                </span>
                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">none</span>
            </div>

            <svg v-if="show_checked"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M5 12L10 17L20 7"
                        stroke="#2873FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-dasharray="48"
                        stroke-dashoffset="48"
                        id="checkmark"
                    />
            </svg>

        </div>

        <!-- <div @click.prevent="navigateTo('/dashboard/account/2FA_login/get_code_by_email')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
            <div class=" flex justify-between items-center">
                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.99992 10.833C2.69992 10.833 0.833252 12.6913 0.833252 14.9997C0.833252 17.308 2.69992 19.1663 4.99992 19.1663C7.29992 19.1663 9.16659 17.2997 9.16659 14.9997C9.16659 12.6997 7.30825 10.833 4.99992 10.833ZM3.29992 13.2997H4.99992C5.31659 13.2997 5.56659 13.558 5.56659 13.8663C5.56659 14.1747 5.31659 14.433 4.99992 14.433H3.29992C2.98325 14.433 2.73325 14.1747 2.73325 13.8663C2.73325 13.558 2.98325 13.2997 3.29992 13.2997ZM6.69992 16.6997H3.29992C2.98325 16.6997 2.73325 16.4413 2.73325 16.133C2.73325 15.8247 2.99159 15.5663 3.29992 15.5663H6.70825C7.02492 15.5663 7.27492 15.8247 7.27492 16.133C7.27492 16.4413 7.01659 16.6997 6.69992 16.6997Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M14.1667 2.5H5.83342C3.33341 2.5 1.66675 3.75 1.66675 6.66667V9.28333C1.66675 9.89167 2.29175 10.275 2.85008 10.0333C3.76675 9.63333 4.80841 9.48333 5.90008 9.65833C8.08342 10.0167 9.86675 11.7417 10.3084 13.9083C10.4334 14.5417 10.4501 15.1583 10.3667 15.75C10.3001 16.2417 10.7001 16.675 11.1917 16.675H14.1667C16.6667 16.675 18.3334 15.425 18.3334 12.5083V6.66667C18.3334 3.75 16.6667 2.5 14.1667 2.5ZM14.5584 7.15833L11.9501 9.24167C11.4001 9.68333 10.7001 9.9 10.0001 9.9C9.30008 9.9 8.59175 9.68333 8.05008 9.24167L5.44175 7.15833C5.17508 6.94167 5.13341 6.54167 5.34175 6.275C5.55841 6.00833 5.95008 5.95833 6.21675 6.175L8.82508 8.25833C9.45842 8.76667 10.5334 8.76667 11.1667 8.25833L13.7751 6.175C14.0417 5.95833 14.4417 6 14.6501 6.275C14.8667 6.54167 14.8251 6.94167 14.5584 7.15833Z"  :fill="isDark? 'white':'#2873FF'"/>
                    </svg>
                </span>

                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">
                    get code by email</span>

            </div>
            <div class="flex justify-between items-center">
                <span  class="capitalize text-[#89B2FF] text-xs pr-[10px] 
                               font-bold ">recommended</span>
                 <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
            </div>
        </div> -->


        <div @click.prevent=" navigateTo('/dashboard/account/2FA_login/get_code_by_app')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
            <div class=" flex justify-between items-center">
                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16667 15V17.5C9.16667 17.9583 8.79167 18.3333 8.33333 18.3333C7.875 18.3333 7.5 17.9583 7.5 17.5V15H9.16667Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M12.4999 15V17.5C12.4999 17.9583 12.1249 18.3333 11.6666 18.3333C11.2083 18.3333 10.8333 17.9583 10.8333 17.5V15H12.4999Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M14.1666 9.16667V13.3333C14.1666 14.25 13.4166 15 12.4999 15H7.49992C6.58325 15 5.83325 14.25 5.83325 13.3333V9.16667C5.83325 8.25 6.58325 7.5 7.49992 7.5H12.4999C13.4166 7.5 14.1666 8.25 14.1666 9.16667Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M4.16667 9.16634V12.4997C4.16667 12.958 3.79167 13.333 3.33333 13.333C2.875 13.333 2.5 12.958 2.5 12.4997V9.16634C2.5 8.70801 2.875 8.33301 3.33333 8.33301C3.79167 8.33301 4.16667 8.70801 4.16667 9.16634Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M17.4999 9.16634V12.4997C17.4999 12.958 17.1249 13.333 16.6666 13.333C16.2083 13.333 15.8333 12.958 15.8333 12.4997V9.16634C15.8333 8.70801 16.2083 8.33301 16.6666 8.33301C17.1249 8.33301 17.4999 8.70801 17.4999 9.16634Z"  :fill="isDark? 'white':'#2873FF'"/>
                        <path d="M8.00006 6.33366H12.0001C12.7334 6.33366 13.3334 5.73366 13.3334 5.00033C13.3334 3.15866 11.8417 1.66699 10.0001 1.66699C8.15841 1.66699 6.66675 3.15866 6.66675 5.00033C6.66675 5.73366 7.26673 6.33366 8.00006 6.33366Z"  :fill="isDark? 'white':'#2873FF'"/>
                    </svg>

                </span>
                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">
                    get code by app</span>
            </div>
            <div class="flex justify-between items-center">
                <span  class="capitalize text-[#89B2FF] text-xs pr-[10px] 
                               font-bold ">recommended</span>
                 <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
            </div>
        </div>

        <Modal @open="visible"  :visible="visible"  btn1="cancel" btn2="confirm" 
        desc="By selecting this method, your current two factor authentication method will be disabled "/>


    </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const show_checked = ref(false)
const visible = ref(false)

const openModal = () => {
  visible.value = !visible.value;
  show_checked.value = !show_checked.value
};
    
const toggle_show_checked = ()=>{
    show_checked.value = !show_checked.value
}

</script>



<style>
    #checkmark {
        animation: drawCheckmark 1s ease-in-out forwards;
    }

    @keyframes drawCheckmark {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
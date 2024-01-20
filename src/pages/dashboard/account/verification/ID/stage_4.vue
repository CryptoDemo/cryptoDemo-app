<template>

    <div class="px-6 py-[15px] h-screen overflow-y-auto bg-[#fff] relative   dark:bg-[#10192D] ">

        <div class="grid grid-cols-4 items-center relative">

            <div>
                <button @click.prevent="navigateTo('/dashboard/account/verification')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
            </div>

            <span class=" col-span-2 dark:text-white font-bold text-center">ID Verification</span>


        </div>

        <div class=" mt-6">
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Take a photo of front of your Identity Card</p>
        </div>

      
        <div class=" mt-[12vh] relative p-[14px] mx-[10vw]">
            <svg class="absolute top-0 left-0 " xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M16.8171 1H6C3.23858 1 1 3.23858 1 6V16.8171" :stroke="!isDark? '#64748B' :'#F8FAFC'" stroke-linecap="round"/>
            </svg>
            <svg class="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M17 16.8171L17 6C17 3.23858 14.7614 1 12 1L1.18288 0.999999"  :stroke="!isDark? '#64748B' :'#F8FAFC'" stroke-linecap="round"/>
            </svg>

            <svg class="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M0.999999 0.933856L1 11.751C1 14.5124 3.23858 16.751 6 16.751L16.8171 16.751"  :stroke="!isDark? '#64748B' :'#F8FAFC'" stroke-linecap="round"/>
            </svg>

            <svg class="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1.18288 16.751L12 16.751C14.7614 16.751 17 14.5124 17 11.751L17 0.933856"  :stroke="!isDark? '#64748B' :'#F8FAFC'" stroke-linecap="round"/>
            </svg>

            <div class="relative flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="244" height="158" viewBox="0 0 244 158" fill="none">
                        <rect y="0.875" width="243.868" height="157" rx="15.9391" fill="#F8FAFC"/>
                        <path d="M0 16.8141C0 8.01117 7.13617 0.875 15.9391 0.875H227.929C236.732 0.875 243.868 8.01118 243.868 16.8141V37.5349H0V16.8141Z" fill="#2873FF"/>
                        <rect x="157" y="52.6768" width="69.335" height="79.6954" rx="8" fill="#DBE8FF"/>
                        <rect x="16.5264" y="52.6768" width="124.325" height="14.3452" rx="4" fill="#E2E8F0"/>
                        <rect x="29.2781" y="79.7744" width="80.4924" height="6.37564" rx="2" fill="#E2E8F0"/>
                        <rect x="29.2781" y="98.9014" width="80.4924" height="6.37564" rx="2" fill="#E2E8F0"/>
                        <rect x="29.2781" y="116.56" width="80.4924" height="6.37564" rx="2" fill="#E2E8F0"/>
                        <mask id="mask0_562_6540" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="157" y="53" width="70" height="80">
                            <rect x="157" y="53" width="69.335" height="79.6954" rx="8" fill="#CCCFDD"/>
                        </mask>
                        <g mask="url(#mask0_562_6540)">
                            <path d="M179.358 109.837C182.754 107.651 184.691 100.5 185.235 97.1982H198.191C199.519 103.264 200.184 107.538 203.838 109.837C215.464 113.052 221.451 112.564 226 115.637V132.539H191.5H157V116.154C160.266 112.055 175.112 112.57 179.358 109.837Z" fill="#2873FF"/>
                            <rect x="172" y="58.1982" width="38" height="46" rx="19" fill="#2873FF"/>
                        </g>
                </svg>
            </div>

           

        </div>


         
        <div class="fixed min-h-[194px] px-[48px] bg-white dark:bg-[#10192D]  flex justify-between items-center  
          bottom-0 left-0 w-full
         rounded-t-[32px]">

         <div class="absolute left-0  top-1 w-full flex justify-center">
             <div class="h-[6px] w-[48px] text-center bg-[#E3E8FC] dark:bg-[#1B2537]"></div>
         </div>


               <div class="relative">
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                       <circle cx="24" cy="24" r="23.5" :stroke="!isDark?'#E3E7F7':'#1B2537' " />
                   </svg>
                   <svg class="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M2.58005 19.0103L2.56005 19.0303C2.29005 18.4403 2.12005 17.7703 2.05005 17.0303C2.12005 17.7603 2.31005 18.4203 2.58005 19.0103Z" :fill="isDark?'#2873FF':'#1B2537'"/>
                   <path d="M9.00012 10.3801C10.3146 10.3801 11.3801 9.31456 11.3801 8.00012C11.3801 6.68568 10.3146 5.62012 9.00012 5.62012C7.68568 5.62012 6.62012 6.68568 6.62012 8.00012C6.62012 9.31456 7.68568 10.3801 9.00012 10.3801Z" fill="#2873FF"/>
                   <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z" fill="#2873FF"/>
                   </svg>
               </div>
   
               <div  @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_5')" class="relative">
                     
                   <svg  xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                   <circle cx="48" cy="48" r="48" :fill=" !isDark?'#E8ECFD':'#1B2537'" />
                   </svg>
   
   
                   <svg class="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                       <circle cx="36" cy="36" r="36" fill="#2873FF"/>
                   </svg>
   
                   <svg class="absolute top-8 left-8" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M23.9999 8.00033C23.1866 8.00033 22.4399 7.53366 22.0666 6.81366L21.1066 4.88033C20.4932 3.66699 18.8932 2.66699 17.5332 2.66699H14.4799C13.1066 2.66699 11.5066 3.66699 10.8932 4.88033L9.93323 6.81366C9.5599 7.53366 8.81323 8.00033 7.9999 8.00033C5.10656 8.00033 2.81323 10.4403 2.9999 13.3203L3.69323 24.3337C3.85323 27.0803 5.33323 29.3337 9.01323 29.3337H22.9866C26.6666 29.3337 28.1332 27.0803 28.3066 24.3337L28.9999 13.3203C29.1866 10.4403 26.8932 8.00033 23.9999 8.00033ZM13.9999 9.66699H17.9999C18.5466 9.66699 18.9999 10.1203 18.9999 10.667C18.9999 11.2137 18.5466 11.667 17.9999 11.667H13.9999C13.4532 11.667 12.9999 11.2137 12.9999 10.667C12.9999 10.1203 13.4532 9.66699 13.9999 9.66699ZM15.9999 24.1603C13.5199 24.1603 11.4932 22.147 11.4932 19.6537C11.4932 17.1603 13.5066 15.147 15.9999 15.147C18.4932 15.147 20.5066 17.1603 20.5066 19.6537C20.5066 22.147 18.4799 24.1603 15.9999 24.1603Z" fill="white"/>
                   </svg>
               </div>
   
               <div class="relative">
                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                       <circle cx="24" cy="24" r="23.5"  :stroke="!isDark?'#E3E7F7':'#1B2537' "/>
                   </svg>
                 
   
                   <svg class="absolute top-3 left-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M17.91 10.7199H14.82V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L12 3.6699L5.23001 11.3699C4.30001 12.4199 4.69001 13.2799 6.09001 13.2799H9.18001V20.4799C9.18001 22.1599 10.09 22.4999 11.2 21.2399L12 20.3299L18.77 12.6299C19.7 11.5799 19.31 10.7199 17.91 10.7199Z" fill="#2873FF"/>
                   </svg>
               </div>

        </div>



         <!-- <button class="btn-primary mt-[127px] w-full">Continue</button> -->
    </div>

</template>


<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
</script>
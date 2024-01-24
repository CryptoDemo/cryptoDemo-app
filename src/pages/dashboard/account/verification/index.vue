<template>
    <div class=" px-6 py-[6px] bg-[#ffff]   dark:bg-[#10192D] h-screen overflow-y-auto">


            <Appbar link="/dashboard" title="Verification status"/>

            <p class="pt-[72px] font-[400] text-sm text-[#64748B]">Complete verification to unlock full access to all app features.</p>
            
            <!-- :fill="!isDark? '#2873FF':'white'" -->
            <div class="my-4 ">

                <div @click.prevent="navigateTo('/dashboard/account/verification/ID')" class="flex justify-between items-center pb-[21px] font-semibold border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center 
                            rounded-full">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.0001 1.66699C7.81675 1.66699 6.04175 3.44199 6.04175 5.62533C6.04175 7.76699 7.71675 9.50033 9.90008 9.57533C9.96675 9.56699 10.0334 9.56699 10.0834 9.57533C10.1001 9.57533 10.1084 9.57533 10.1251 9.57533C10.1334 9.57533 10.1334 9.57533 10.1417 9.57533C12.2751 9.50033 13.9501 7.76699 13.9584 5.62533C13.9584 3.44199 12.1834 1.66699 10.0001 1.66699Z" :fill="!isDark? '#2873FF':'white'"/>
                                <path d="M14.2333 11.7914C11.9083 10.2414 8.11663 10.2414 5.77497 11.7914C4.71663 12.4997 4.1333 13.4581 4.1333 14.4831C4.1333 15.5081 4.71663 16.4581 5.76663 17.1581C6.9333 17.9414 8.46663 18.3331 9.99997 18.3331C11.5333 18.3331 13.0666 17.9414 14.2333 17.1581C15.2833 16.4497 15.8666 15.4997 15.8666 14.4664C15.8583 13.4414 15.2833 12.4914 14.2333 11.7914Z" :fill="!isDark? '#2873FF':'white'"/>
                            </svg>

                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold "> ID verification</span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>

                <div @click.prevent="navigateTo('/dashboard/account/verification/address')" class="flex justify-between items-center py-[21px] font-semibold border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.1834 7.04134C16.3084 3.19134 12.9501 1.45801 10.0001 1.45801C10.0001 1.45801 10.0001 1.45801 9.99175 1.45801C7.05008 1.45801 3.68341 3.18301 2.80841 7.03301C1.83341 11.333 4.46675 14.9747 6.85008 17.2663C7.73341 18.1163 8.86675 18.5413 10.0001 18.5413C11.1334 18.5413 12.2667 18.1163 13.1417 17.2663C15.5251 14.9747 18.1584 11.3413 17.1834 7.04134ZM10.0001 11.2163C8.55008 11.2163 7.37508 10.0413 7.37508 8.59134C7.37508 7.14134 8.55008 5.96634 10.0001 5.96634C11.4501 5.96634 12.6251 7.14134 12.6251 8.59134C12.6251 10.0413 11.4501 11.2163 10.0001 11.2163Z" :fill="!isDark? '#2873FF':'white'"/>
                                </svg>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold capitalize">Address verification </span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>

                <div @click.prevent="navigateTo('/dashboard/account/verification/why')" class="flex justify-between items-center py-[21px] font-semibold  dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_562_6411)">
                                        <path d="M10.0001 18.3337C5.39758 18.3337 1.66675 14.6028 1.66675 10.0003C1.66675 5.39783 5.39758 1.66699 10.0001 1.66699C14.6026 1.66699 18.3334 5.39783 18.3334 10.0003C18.3334 14.6028 14.6026 18.3337 10.0001 18.3337ZM9.16675 12.5003V14.167H10.8334V12.5003H9.16675ZM10.8334 11.1295C11.5031 10.9276 12.0781 10.492 12.4535 9.90178C12.829 9.3116 12.98 8.6062 12.879 7.91405C12.7781 7.22189 12.4318 6.58903 11.9034 6.13071C11.375 5.67239 10.6996 5.41911 10.0001 5.41699C9.32579 5.41694 8.6723 5.65045 8.15074 6.07782C7.62918 6.50519 7.27176 7.10002 7.13925 7.76116L8.77425 8.08866C8.82065 7.85652 8.93201 7.64233 9.09539 7.47101C9.25876 7.29969 9.46743 7.17828 9.6971 7.12091C9.92678 7.06355 10.168 7.07258 10.3928 7.14697C10.6175 7.22135 10.8165 7.35802 10.9666 7.54109C11.1167 7.72415 11.2117 7.94607 11.2407 8.18103C11.2696 8.41599 11.2311 8.65433 11.1299 8.86831C11.0286 9.0823 10.8687 9.26313 10.6687 9.38977C10.4687 9.51641 10.2368 9.58364 10.0001 9.58366C9.77907 9.58366 9.56711 9.67146 9.41083 9.82774C9.25455 9.98402 9.16675 10.196 9.16675 10.417V11.667H10.8334V11.1295Z" :fill="!isDark? '#2873FF':'white'"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_562_6411">
                                        <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold ">Why verify my account?</span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>

            </div>
    </div>
</template>

<script setup>


import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()


</script>
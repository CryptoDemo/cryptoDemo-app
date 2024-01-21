<template>

    <div class="h-screen overflow-y-scroll bg-[#ffff]   dark:bg-gray-900  w-full px-6">

          <h2 class=" text-[20px] font-[800] pt-[15px]">Account</h2>


          <div class="mt-[45px]">

              <!--start of general settings section -->
                <div class=" w-full">
                        <p class="pb-4 font-[700]">General</p>
                        
                        <div @click.prevent="navigateTo('/dashboard/account/verification')" class="flex justify-between items-center pb-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon  name="solar:verified-check-bold" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                                </span>
                                    
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Verification status</span>
                            </div>
                            <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div @click.prevent="navigateTo('/dashboard/account/update_username')"  class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="mdi:person" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Username</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div  @click.prevent="navigateTo('/dashboard/account/email')"  class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="material-symbols:mail" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">email</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div @click.prevent="navigateTo('/dashboard/account/update_number')" class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="material-symbols:call" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">phone number</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                    
    
                </div>
              <!--end of general settings section -->
    
    
              <!--start of preference settings section -->
                <div class="mt-[32px] w-full">
                        <p class="pb-4 font-[700]">Preferences</p>

                        <div @click.prevent="navigateTo('/dashboard/account/select_language')" class="flex justify-between items-center pb-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="material-symbols:language" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">language</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="ic:round-dark-mode" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Dark Mode</span>
                            </div>
                            <InputRadio :toggleValue="isDark" @toggleChanged="toggleDark"/>
                        </div>
    
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="mingcute:wallet-4-fill" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Preferred currency</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="mdi:bell" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Notification</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                       
    
                </div>
              <!--end of preference settings section -->
    
    
              <!--start of security settings section -->
                <div class="mt-[32px] w-full">
                        <p class="pb-4 font-[700]">Security</p>
                        <div class="flex justify-between items-center pb-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
                                    <Icon name="tabler:shield-lock-filled" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Change pin</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
                                    <Icon name="tabler:shield-lock-filled" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Change password</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]   inline-flex justify-center items-center rounded-full">
                                    <Icon name="mingcute:camcorder-3-fill" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>                            </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Enable fingerprint login</span>
                            </div>
    
                            <InputRadio :toggleValue="showFingerprint" @toggleChanged="toggleShowFingerprint"/>
                        </div>
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="solar:login-2-bold" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor login</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
                                    <svg class="text-[#2873FF] dark:text-[#ffff]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.4998 12.9167C12.4998 15.9083 10.0748 18.3333 7.08317 18.3333C4.0915 18.3333 1.6665 15.9083 1.6665 12.9167C1.6665 9.925 4.0915 7.5 7.08317 7.5C7.22484 7.5 7.37484 7.50833 7.5165 7.51667C10.1582 7.725 12.2748 9.84167 12.4832 12.4833C12.4915 12.625 12.4998 12.775 12.4998 12.9167Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M18.3336 7.08366C18.3336 9.80033 16.3336 12.042 13.7336 12.4337V12.3837C13.4752 9.15032 10.8502 6.52533 7.59189 6.26699H7.56689C7.95856 3.66699 10.2002 1.66699 12.9169 1.66699C15.9086 1.66699 18.3336 4.09199 18.3336 7.08366Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M4.65817 1.66699H2.49984C2.0415 1.66699 1.6665 2.04199 1.6665 2.50033V4.65866C1.6665 5.40033 2.5665 5.77533 3.0915 5.25033L5.24984 3.09199C5.7665 2.56699 5.39984 1.66699 4.65817 1.66699Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M15.3418 18.3332H17.5001C17.9584 18.3332 18.3334 17.9582 18.3334 17.4999V15.3416C18.3334 14.5999 17.4334 14.2249 16.9084 14.7499L14.7501 16.9082C14.2334 17.4332 14.6001 18.3332 15.3418 18.3332Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    </svg>
                                </span>
                                                            
    
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor transactions</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                            
                        </div>
                      
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center ">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg class="text-[#2873FF] dark:text-[#ffff]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M11.2418 11.1504H9.1668C8.9168 11.1504 8.7168 11.3504 8.7168 11.6004C8.7168 11.8504 8.9168 12.0504 9.1668 12.0504H11.2418C11.4918 12.0504 11.6918 11.8504 11.6918 11.6004C11.6918 11.3504 11.4918 11.1504 11.2418 11.1504Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                        <path d="M7.86667 11.1504H6.825C6.575 11.1504 6.375 11.3504 6.375 11.6004C6.375 11.8504 6.575 12.0504 6.825 12.0504H7.86667C8.11667 12.0504 8.31667 11.8504 8.31667 11.6004C8.31667 11.3504 8.11667 11.1504 7.86667 11.1504Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                        <path d="M15.4502 3.51686L10.8668 1.8002C10.3918 1.6252 9.61683 1.6252 9.14183 1.8002L4.5585 3.51686C3.67516 3.85019 2.9585 4.88353 2.9585 5.82519V12.5752C2.9585 13.2502 3.40016 14.1419 3.94183 14.5419L8.52516 17.9669C9.3335 18.5752 10.6585 18.5752 11.4668 17.9669L16.0502 14.5419C16.5918 14.1335 17.0335 13.2502 17.0335 12.5752V5.82519C17.0418 4.88353 16.3252 3.85019 15.4502 3.51686ZM15.1418 11.3752C15.1252 13.1002 14.6502 13.5335 12.8585 13.5335H7.15016C5.32516 13.5335 4.86683 13.0835 4.86683 11.2752V9.33353C4.86683 9.10019 5.05016 8.91686 5.2835 8.91686H14.7252C14.9585 8.91686 15.1418 9.10019 15.1418 9.33353V11.3752ZM15.1418 7.59186C15.1418 7.82519 14.9585 8.00853 14.7252 8.00853H5.2835C5.05016 8.00853 4.86683 7.82519 4.86683 7.59186V7.05853C4.86683 5.4252 5.25016 4.9002 6.67516 4.80853C6.82516 4.80853 6.9835 4.8002 7.15016 4.8002H12.8585C14.6835 4.8002 15.1418 5.2502 15.1418 7.05853V7.59186Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor crypto currency release</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="solar:login-2-bold" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Security questions</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                </div>
              <!--end of security settings section -->

              <!--start of others settings section -->
                <div class="mt-[32px] pb-[60px] w-full">
                        <p class="pb-4 font-[700]">Others</p>
                        <div class="flex justify-between items-center pb-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="solar:graph-up-bold" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Activity</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="material-symbols:help-rounded" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">FAQ & Support</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>


                        <div class="flex justify-between items-center py-[21px] border-b border-gray-100 dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="tabler:brand-android" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Version</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div  @click.prevent="navigateTo('/login')" class="flex justify-between items-center py-[21px]  dark:border-gray-700">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="solar:logout-2-bold" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Sign out</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                      
    
                </div>
              <!--end of others settings section -->
          </div>

    </div>

</template>


<script setup>


import { useDark, useToggle } from '@vueuse/core'
let showFingerprint = ref(false);
let showdarkMode = ref(false);
let showNotification = ref(true);

const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleShowFingerprint =()=>{
    showFingerprint.value = !showFingerprint.value;
}



// const toggleShowNotification =(v)=>{
//     showNotification.value= v;
//     console.log(showNotification.value);
// }

</script>





<template>
    <div class=" px-6 py-[6px] bg-[#ffff]   dark:bg-gray-900 h-screen overflow-y-auto">


            <Appbar link="/dashboard" title="Verification status"/>

            <p class="pt-4 ">Complete verification to unlock full access to all app features.</p>

            <div class="my-4 ">
                <div @click.prevent="navigateTo('/dashboard/account/verification/ID')" class="flex justify-between items-center pb-[21px] font-semibold border-b border-gray-100 dark:border-gray-700">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center 
                            rounded-full">

                                <Icon  name="mdi:person" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold "> ID verification</span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
                <div @click.prevent="navigateTo('/dashboard/account/verification/address')" class="flex justify-between items-center py-[21px] font-semibold border-b border-gray-100 dark:border-gray-700">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <Icon  name="mdi:location" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold capitalize">Address verification </span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
                <div @click.prevent="navigateTo('/dashboard/account/verification/why')" class="flex justify-between items-center py-[21px] font-semibold  dark:border-gray-700">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <Icon  name="material-symbols:help-rounded" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold ">Why verify my account?</span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
            </div>
    </div>
</template>
<template>
    <div class=" px-6 py-[15px] bg-[#ffff]   dark:bg-gray-900 h-screen overflow-y-auto">

            <div class="grid grid-cols-4 items-center">
                <div>
                    <button @click.prevent="navigateTo('/dashboard')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                    items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                        <Icon name="mdi:arrow-left" size="24" />
                    </button>
                </div>

                <span class=" col-span-2 dark:text-white font-bold text-center">Verification status</span>

            </div>

            <p class="pt-6">Complete verification to unlock full access to all app features.</p>

            <div class="my-4 ">
                <div @click.prevent="navigateTo('/dashboard/account/verification/ID')" class="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-700">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <Icon  name="mdi:person" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold "> ID verification</span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
                <div @click.prevent="navigateTo('/dashboard/account/verification/address')" class="flex justify-between items-center py-4 border-b border-gray-100 dark:border-gray-700">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <Icon  name="mdi:location" class="text-[#2873FF] dark:text-[#ffff] " size="20"/>
                            </span>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-semibold capitalize">Address verification </span>
                        </div>
                        <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
                <div @click.prevent="navigateTo('/dashboard/account/verification/why')" class="flex justify-between items-center py-4  dark:border-gray-700">
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
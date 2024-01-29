<template>

    <div class=" h-screen pb-14 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full px-6 ">

        <Appbar link="/dashboard" title="Notification"/>

        <div class="mt-[70px]">

            <div v-for="i in 4">
                <div class=" text-[14px] border-b border-[#F1F5F9] dark:border-[#1B2537] py-[12px]">
                    <h3 class="text-[#10192D] font-[600] ">Security questions set</h3>
                    <div class="text-[#8E9BAE]  mt-[4px]">
                        <span class="font-[600]">Jan 20, 24</span>
                        <span class="ml-[8px] font-[600]">13:56hrs</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>
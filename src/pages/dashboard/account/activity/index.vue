<template>

    <div class="px-6  bg-[#ffff] dark:bg-[#10192D] h-screen overflow-y-auto">
        <Appbar link="/dashboard" title="Activity" />

        <div class="mt-[80px]">

            <div v-for="i in 3" class="py-[12px] border-b border-[#F1F5F9] dark:border-[#2A3340]">
                <div class=" border-[#F1F5F9] dark:border-[#2A3340]">
                    <h3 class="text-[#10192D] dark:text-[#F8FAFC]  text-sm font-[600]">Security questions set</h3>
                    <div class="text-[#8E9BAE] text-sm font-[600]">
                        <span>Jan 20, 24</span>
                        <span class="pl-[8px]">13:56hrs</span>
                    </div>
                </div>
                <div>
                    <p class="text-sm font-[400]">Via PMA/Wallet (a2.9.18) Redmi/fire_global/fire:13/ TP1A.220624.014/V14.0.13.0. TMXMIXM:user/ release-keys near Lagos, Nigeria, 
                    </p>
                    <span class="text-[#8E9BAE] text-sm">IP: 2c0f:2a80:b9:9510:e8bc:5925:358a:9562</span>
                </div>
            </div>

        </div>

    </div>

</template>
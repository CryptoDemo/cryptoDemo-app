<template>

    <div class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <Appbar link="/dashboard" title="Address verification" />

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400]  text-[#8E9BAE]">This can only be done after ID verification</p>
        </div>

      

        <div class="fixed bottom-5 left-0 w-full px-6">

            <button  @click.prevent="navigateTo('/dashboard/account/verification/address/step_1')" 
            class="btn-primary mt-[40px] w-full scaling-animation">Complete ID verification</button>
        </div>
    </div>

</template>
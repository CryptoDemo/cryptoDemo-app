<template>

    <div class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] min-h-screen">

        <div class="grid grid-cols-4 items-center">

            <div>
                <button @click.prevent="navigateTo('/dashboard/account/verification')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
            </div>

            <span class=" col-span-2 dark:text-white font-bold text-center">Address verification</span>


        </div>

        <div class=" mt-6">
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">This can only be done after ID verification</p>
        </div>

      

         <button  @click.prevent="navigateTo('/dashboard/account/verification/address/step_1')" 
         class="btn-primary mt-[40px] w-full">Complete ID verification</button>
    </div>

</template>
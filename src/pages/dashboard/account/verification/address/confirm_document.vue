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
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE] text-[14px] font-bold">Confirm document and submit your application!</p>
        </div>


     


        <ul class="mt-[20px] px-6 text-[#8E9BAE] text-[12px] list-disc ">
            <li>Upload clear image of document</li>
            <li class="leading-6">Upload clear image of document</li>
            <li>Upload clear image of document</li>
        </ul>

      


        <div class="flex gap-4">

            <button  @click.prevent="navigateTo('/dashboard/account/verification/address/upload_document')" 
            class="btn-border-primary mt-[40px] w-full">back</button>
            <button  @click.prevent="navigateTo('/dashboard/account/verification/address/success')" 
            class="btn-primary mt-[40px] w-full">Confirm</button>
        </div>
         <!-- <button  @click.prevent="navigateTo('/dashboard/account/verification/address/step_1')" 
         class="btn-primary mt-[40px] w-full">Complete ID verification</button> -->
    </div>

</template>
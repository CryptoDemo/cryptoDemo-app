<template>
<Successful v-if="show_successful" title="sucessful" subtitle="`Your document has been successfully  uploaded and is under review!`"/>
    <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <Appbar link="/dashboard/account/verification" title="Address verification" />


        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400]   text-[#8E9BAE] text-[14px] ">Confirm document and submit your application!</p>
        </div>



        <ul class="mt-[20px] px-4 font-[400] text-[#8E9BAE] text-[12px] list-disc ">
            <li>Upload clear image of document</li>
            <li class="leading-6">Upload clear image of document</li>
            <li>Upload clear image of document</li>
        </ul>

      

        <div class="fixed bottom-5 left-0 w-full px-6">

            <div class="flex gap-x-4 mt-[40px]">
    
                <button  @click.prevent="navigateTo('/dashboard/account/verification/address/upload_document')" 
                class="btn-border  w-full">back</button>
                <button  @click.prevent="toggle_show_successful" 
                class="btn-primary  w-full">Confirm</button>
            </div>
        </div>
         <!-- <button  @click.prevent="navigateTo('/dashboard/account/verification/address/step_1')" 
         class="btn-primary mt-[40px] w-full">Complete ID verification</button> -->
    </div>

</template>


<script setup>
const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard/account/verification')
    }, 1000);
}
</script>
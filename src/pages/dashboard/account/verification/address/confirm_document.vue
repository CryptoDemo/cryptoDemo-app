<template>
<Successful v-if="show_successful" title="sucessful" subtitle="`Your document has been successfully  uploaded and is under review!`"/>
    <div v-else class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] min-h-screen">

        <Appbar link="/dashboard/account/verification" title="Address verification" />


        <div class=" mt-6">
           
           <p class="text-sm   text-[#8E9BAE] text-[14px] font-bold">Confirm document and submit your application!</p>
        </div>



        <ul class="mt-[20px] px-6 text-[#8E9BAE] text-[12px] list-disc ">
            <li>Upload clear image of document</li>
            <li class="leading-6">Upload clear image of document</li>
            <li>Upload clear image of document</li>
        </ul>

      

        <div class="flex gap-x-4 mt-[48px]">

            <button  @click.prevent="navigateTo('/dashboard/account/verification/address/upload_document')" 
            class="btn-border-primary  w-full">back</button>
            <button  @click.prevent="toggle_show_successful" 
            class="btn-primary  w-full">Confirm</button>
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
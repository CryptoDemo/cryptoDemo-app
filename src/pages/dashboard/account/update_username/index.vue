<template>

<Successful v-if="show_successful" title="sucessful" subtitle="`You have successfully changed your  username permanently`"/>


    <div v-else class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <div class="grid grid-cols-4 items-center">

            <div>
                <button @click.prevent="navigateTo('/dashboard/')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
            </div>

            <span class=" col-span-2 dark:text-white font-bold text-center">Update username</span>


        </div>

        <div class=" mt-6">
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE] font-bold">This username is auto-generated and can be changed only once.</p>
        </div>



        <div class="my-5">
                <input type="text" id="postal code" class="shadow-sm bg-transparent border border-gray-300 text-gray-900
                text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="userjoel98" >
         </div>

      

         <button  @click.prevent="toggle_show_successful" 
         class="btn-primary mt-[57px] w-full">Save new username</button>
    </div>

</template>


<script setup>


const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}
</script>
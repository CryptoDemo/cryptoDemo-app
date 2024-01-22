<template>

<Successful v-if="show_successful" title="sucessful" subtitle="`You have successfully changed your  username permanently`"/>


    <div v-else class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard/account" title="Update username" />
        

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
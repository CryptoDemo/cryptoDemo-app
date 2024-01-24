<template>

<Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your  username permanently"/>


    <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard/account" title="Update username" />
        

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400] text-[#8E9BAE] ">This username is auto-generated and can be changed only once.</p>
        </div>



        <div class="mt-4">
                <input type="text" id="username" class="input" placeholder="userjoel98" >
         </div>

      

         <button  @click.prevent="toggle_show_successful" 
         class="btn-primary mt-[40px] w-full">Save new username</button>
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
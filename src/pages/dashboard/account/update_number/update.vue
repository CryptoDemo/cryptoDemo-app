
<template>
    <Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your  phone number "/>

    <div v-else class="max-w-full h-screen overflow-y-auto  bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pb-24">
           
            <LoginAppBar link="/dashboard"/>
            
           
            <Subappbar class="mb-4"  heading="Add phone number" desc=" Add your phone number to complete this process"/>

    
            <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />
    
           
             <div class="fixed bottom-5 left-0 w-full px-6 flex gap-5 transition ease-in-out duration-500">

                 <button @click.prevent="navigateTo('/dashboard')" class="w-full btn-border">Skip</button>
                 <button  @click.prevent="toggle_show_successful"   class="w-full btn-primary ">Save</button>
             </div>
        </div>



    </div>

        


</template>






<script setup>
  
import { initFlowbite} from 'flowbite'
const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}


onMounted(()=>{
    initFlowbite();
})



</script>
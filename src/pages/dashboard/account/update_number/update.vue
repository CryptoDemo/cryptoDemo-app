
<template>

    <div class="max-w-full h-screen overflow-y-auto  bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px]">
            <div class="flex justify-between items-center mb-3">
    
                <button @click.prevent="navigateTo('/dashboard')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>
            
            <div class=" my-6">
           
                  <h3 class=" text-2xl font-bold text-[#10192D]">Add phone number</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">
                    Add your phone number to complete this process
                </p>
            </div>
    
            <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />
    
           
             <div class="mt-[140px] flex gap-5 transition ease-in-out duration-500">

                 <button @click.prevent="navigateTo('/dashboard')" class="w-full btn-border-primary ">skip</button>
                 <button  @click.prevent="navigateTo('/sign_Up/add_phone_number/success')"   class="w-full btn-primary ">save</button>
             </div>
        </div>



    </div>

        


</template>






<script setup>
  
import { initFlowbite} from 'flowbite'


onMounted(()=>{
    initFlowbite();
})



</script>
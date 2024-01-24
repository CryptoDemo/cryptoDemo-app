<template>
    
    <div class="px-6  h-screen overflow-y-auto bg-[#ffff]   dark:bg-[#10192D]  min-h-screen">

     
        <Appbar link="/dashboard/account/verification" title="ID Verification" />
            

        <p class="pt-[72px] pb-4 text-sm">Your phone number is verified.</p>
        
       
       
        <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="true" />

        <div class="fixed bottom-5 left-0 w-full px-6">

            <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_3')" class="btn-primary 
            scaling-animation w-full mt-[77px]">Verify my ID</button>
        </div>

    </div>

</template>


<script setup>
  
import {debounce} from "@/composables/mixins";
import { initFlowbite } from 'flowbite'
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

const password = ref('')
const showPassword = ref(false)
const  selectedNumber = ref('+1')
const selectedIcon = ref('us')
//  const props = defineProps(["filterInput"]);
const filteredItem  = ref([])
const searchInput = ref("")

console.log(filteredItem.value)
const phone_numbers1 = [
            {name: 
                'United States', 
                code:'+234',
                icon:'us'
            },
            {
                name:'Australia',
                code:'+44',
                icon:'au'
            } , 
            {
                name:'Austria',
                code:'+61',
                icon:`at`
            },
            {
                name:'Dominica',
                code:'+61',
                icon:`dm`
            },
            {
                name:'Denmark',
                code:'+641',
                icon:`br`
            },
        
    ]

const filterV =(n)=>{
        filteredItem.value = phone_numbers1.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())
            
           

        }) 

        console.log(filteredItem.value)
    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
})



// watch(()=> searchInput,(newVal)=>{
//     debounce(filteredItem,newVal)
// })


onMounted(()=>{
    initFlowbite();
})

</script>
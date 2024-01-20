<template>
    
    <div class="px-6 py-[15px] bg-[#ffff]   dark:bg-gray-900 h-screen overflow-y-auto">

        <div class="grid grid-cols-4 items-center">
                <div>
                    <button @click.prevent="navigateTo('/dashboard')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                    items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                        <Icon name="mdi:arrow-left" size="24" />
                    </button>
                </div>

                <span class=" col-span-2 dark:text-white font-bold text-center">ID Verification</span>

        </div>

        <p class="pt-6">Complete verification to unlock full access to all app features.</p>
        
       
        <div class="mb-5 mt-4"   :class="usersToggle?'h-[180px]':''">

            <div  class="flex items-center  relative" >
                <button   @click.prevent="showCountry()"     class="flex-shrink-0  relative
                inline-flex  items-center py-[16px] px-[17px] text-sm font-medium text-center text-gray-900
                    bg-gray-100  rounded-s-2xl hover:bg-gray-200
                    focus:outline-none  dark:bg-transparent  z-20 border-s-0 border border-gray-300 
                    dark:text-white dark:border-gray-700" 
                     
                     type="button">
                    <country-flag :country='selectedIcon' size='small' class="pr-2"/>
                    {{ selectedNumber }}
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                </button>


                 <div  v-show="usersToggle"  :class="usersToggle?'shutter-from-top':''"        id="dropdown-phone"  class="z-20 
                  absolute  top-14  w-full bg-white dark:bg-[#10192D]   rounded-lg  
                     ">
                         <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                         <div class="relative" >
                             <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                 <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                 </svg>
                             </div>
                             
                             <input v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3  p-4 ps-10 text-sm focus:border-0 
                                 text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:outline-none   
                                 dark:bg-transparent  dark:border-gray-700 dark:text-white" 
                                 placeholder="Search countries..." required>
                         </div>
 
 
 
 
                         <div class="h-[180px] border dark:border-gray-700  rounded-2xl overflow-y-scroll">
 
                             <ul @click.prevent="showCountry()" v-for="i in filteredItem.length? filteredItem : phone_numbers1"  class="pb-2 text-sm text-gray-700
                              dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                                 <li >
                                     <button @click="selectedNumber = i.code ;selectedIcon= i.icon ;open = false " type="button" 
                                     class="inline-flex px-4 w-full  py-2 text-sm hover:rounded-2xl text-gray-700
                                      hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-200  dark:hover:text-white" role="menuitem">
                                         <div class="flex  justify-between items-center w-full ">
                                             <div class="gap-x-4 flex justify-between items-center">
                                                 <country-flag :country='i.icon' size='big' class="rounded"/>
                                                 <span class=""> {{ i.name }}</span> 
                                             </div>
                                             <span>{{ i.code }} </span>
                                         </div>
                                     </button>
                                 </li>
                                 
                             </ul>
                         </div>
                 </div>




                <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                <div class="relative w-full z-20">
                    <input type="phone" id="phone-input" class="block py-[16px] px-[17px] w-full z-20 text-sm outline-none
                        text-gray-900 bg-gray-50 rounded-e-2xl border-s-0 border border-gray-300  dark:bg-transparent
                        dark:border-s-gray-700  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white
                        " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required>
                </div>
            </div>

        </div>


        <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_1')" class="btn-primary w-full mt-[150px]">Add phone number</button>

    </div>

</template>


<script setup>
  
import {debounce} from "@/composables/mixins";
import { initFlowbite,Dropdown } from 'flowbite'
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


const usersToggle = ref(false);


const showCountry = () => {
    usersToggle.value = !usersToggle.value;
};


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

<style scoped>

.my-inset{
    inset: 0 auto auto  0 !important;



}

</style>
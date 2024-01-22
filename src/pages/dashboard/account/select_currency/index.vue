<template>
    <div class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <Appbar link="/dashboard/" title="Preferred Currency" />
 
        <div class="relative mt-4">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            <input v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3  p-4 ps-12 text-sm focus:border-0 
              text-gray-900 border border-gray-200 rounded-2xl bg-transparent focus:outline-none   
              dark:bg-transparent  dark:border-gray-700 dark:text-white" 
              placeholder="Search countries..." required>
        </div>

        <div class="  dark:border-gray-700  rounded-2xl overflow-y-scroll bg-transparent z-20">
            <ul  class="pb-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
              <li v-for="(country,index) in filteredPhoneNumbers.length ? filteredPhoneNumbers :  phoneNumbers" :key="country.code">
                
                <button @click="selectCountry(country,index);" type="button" class="inline-flex  w-full  text-sm hover:rounded-2xl text-gray-700
                   dark:text-gray-200 dark:hover:text-white" role="menuitem">
                  <div class="flex justify-between items-center w-full py-6 border-b border-gray-200 dark:border-gray-800">
                      <div class=" flex justify-between items-center">
                          
                        <span class="text-[16px]  text-[#10192D] dark:text-[#F8FAFC] font-[500]">{{ country.name }}</span> 
                      </div>
                      <div v-if="selectedIndex === index" class="transition ease-in-out duration-300">
                        

                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                  d="M5 12L10 17L20 7"
                                  stroke="#2873FF"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-dasharray="48"
                                  stroke-dashoffset="48"
                                  id="checkmark"
                              />
                          </svg>

                      </div>
                  </div>
                </button>
              </li>
            </ul>
            <!-- <div v-else class="text-gray-700 dark:text-gray-200 py-2">No matching countries found</div> -->
          </div>



          <div  class="fixed left-0 bottom-5 w-full px-6 z-10">
             <button @click.prevent="navigateTo('/dashboard')" class="btn-primary w-full">Save Changes</button>
          </div>




    </div>


</template>
<script setup>
import { ref, watch } from 'vue';
import {debounce} from '@/composables/mixins';
import countryFlag from 'vue-country-flag-next';
import { useDark, useToggle } from '@vueuse/core'




 const isDark = useDark()

const selectedNumber = ref('+1');
const selectedCountry = ref('English');

const selectedIndex = ref(0);

const usersToggle = ref(false);
const filteredPhoneNumbers = ref([]);
const searchInput = ref('');
const phoneNumbers = [
  { name: 'Afghan Afghani (AFN)', id:1 },
  { name: 'Australian Dollar (AUD)', id: 2 },
  { name: 'Bahamian Dollar (BSD)', id: 3 },
  { name: 'IndonesNaira (NGN)', id: 4 },
  { name: 'US Dollar (USD)', id: 5 },
];



const selectCountry = (country,index) => {
  selectedNumber.value = country.code;
  selectedIndex.value = index
  usersToggle.value = false;
};



const filterV =(n)=>{
  filteredPhoneNumbers.value = phoneNumbers.filter((i)=>{
          return  i.name.toLowerCase().includes(n.toLowerCase())
          
         

      }) 

  }

watch(()=>searchInput.value,(newv)=>{
  debounce(filterV,newv)
})
</script>

<style>
    #checkmark {
        animation: drawCheckmark 1s ease-in-out forwards;
    }

    @keyframes drawCheckmark {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
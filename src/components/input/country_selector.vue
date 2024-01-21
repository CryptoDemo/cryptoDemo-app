<template>
    <div class="mb-5 mt-4">
      <div class="flex items-center relative">
        <button
          @click.prevent="toggleCountrySelector"
          class="flex-shrink-0 absolute flex justify-between gap-x-2 left-1 items-center py-2 ml-2 px-2 text-sm z-40
          font-medium  text-gray-900 bg-transparent rounded-s-2xl focus:outline-none dark:bg-transparent 
            border-r-[1px] border-gray-300 dark:text-white dark:border-gray-700"
          type="button"   :disabled="props.isdisabled"
        >
          <country-flag :country="selectedIcon" size="small" class="pr-2" />
          {{ selectedNumber }}

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.9467 5.45312H7.79341H4.05341C3.41341 5.45312 3.09341 6.22646 3.54674 6.67979L7.00008
             10.1331C7.55341 10.6865 8.45341 10.6865 9.00674 10.1331L10.3201 8.81979L12.4601 6.67979C12.9067 6.22646 12.5867 
             5.45312 11.9467 5.45312Z" :fill="isDark?'#8E9BAE':'#10192D'"/>
           </svg>
        </button>
  
            <div v-show="usersToggle" :class="{ 'shutter-from-top': usersToggle }" id="dropdown-phone" class="z-20 absolute top-14 w-full bg-white dark:bg-[#10192D] rounded-lg">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
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
  
          <div class="max-h-[284px] border dark:border-gray-700  rounded-2xl overflow-y-scroll">
            <ul  class="pb-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
              <li v-for="country in filteredPhoneNumbers.length ? filteredPhoneNumbers :  phoneNumbers" :key="country.code">
                
                <button @click="selectCountry(country)" type="button" class="inline-flex px-4 w-full py-2 text-sm hover:rounded-2xl text-gray-700
                  hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-200 dark:hover:text-white" role="menuitem">
                  <div class="flex justify-between items-center w-full">
                    <div class="gap-x-4 flex justify-between items-center">
                      <country-flag :country="country.icon" size="big" class="rounded"/>
                      <span>{{ country.name }}</span> 
                    </div>
                    <span>{{ country.code }} </span>
                  </div>
                </button>
              </li>
            </ul>
            <!-- <div v-else class="text-gray-700 dark:text-gray-200 py-2">No matching countries found</div> -->
          </div>
        </div>


        <label for="phone-input" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">
            Phone number:
          </label>
          <div class="relative w-full z-20">
            <input
            :disabled="props.isdisabled"
              type="phone"
              id="phone-input"
              class="block py-[16px] px-[17px] pl-[120px] w-full z-20 text-sm outline-none text-gray-900 bg-transparent 
              rounded-2xl border border-gray-200 dark:bg-transparent dark:border-s-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import {debounce} from '@/composables/mixins';
  import countryFlag from 'vue-country-flag-next';
  import { useDark, useToggle } from '@vueuse/core'

  const props  = defineProps({
    isdisabled:{
        type: Boolean,
        default: false,
    }
  })

   const isDark = useDark()
  
  const selectedNumber = ref('+1');
  const selectedIcon = ref('us');
  const usersToggle = ref(false);
  const filteredPhoneNumbers = ref([]);
  const searchInput = ref('');
  const phoneNumbers = [
    { name: 'United States', code: '+234', icon: 'us' },
    { name: 'Australia', code: '+44', icon: 'au' },
    { name: 'Austria', code: '+61', icon: 'at' },
    { name: 'Dominica', code: '+61', icon: 'dm' },
    { name: 'Denmark', code: '+641', icon: 'br' },
  ];
  
  const toggleCountrySelector = () => {
    usersToggle.value = !usersToggle.value;
  };
  
  const selectCountry = (country) => {
    selectedNumber.value = country.code;
    selectedIcon.value = country.icon;
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
  
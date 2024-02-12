<template>

    <div class=" h-screen pb-52 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full px-6 ">

        <Appbar link="/dashboard" title="Search coin"/>

        <div class="relative pt-[72px]">
          <div class="absolute bottom-4 flex items-center ps-3 pointer-events-none">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"  :stroke="!isDark?'#8E9BAE':'#ffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20"  :stroke="!isDark?'#8E9BAE':'#ffff'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </div>
                      
            <input @focusin="isFocused=true" @focusout="isFocused=false"
            v-model.trim="searchInput" type="search" id="default-search" class="input ps-10" 
              placeholder="Search ..." required>
        </div>

        <div v-for="i in filteredcoins.length? filteredcoins : coin_lists" class="mt-[24px]">

            <div class="flex justify-between items-center mb-[27px]">

                <div class="flex items-center">

                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20.1668" cy="19.8333" r="17.8333" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.95431 8.95427 0 19.9999 0H20.1161C25.405 0.0153897 30.4712 2.13118 34.2001 5.88191C37.929 9.63264 40.0153 14.7111 39.9998 20C39.9998 31.0457 31.0456 40 19.9999 40C8.95427 40 0 31.0457 0 20ZM18.2566 27.6997L20.3389 20.6779L23.5834 19.7578L24.2614 17.4334L21.0653 18.4019L24.4551 6.87648V6.69246C24.45 6.54345 24.386 6.40256 24.277 6.30082C24.168 6.19909 24.023 6.14486 23.874 6.15009H19.5641C19.2283 6.13974 18.9287 6.35945 18.8377 6.68278L14.8183 20.339L11.6222 21.3075L10.8958 23.5351L14.0919 22.5666L11.2348 32.3002H28.2807C28.6176 32.3141 28.9192 32.093 29.0071 31.7675L29.9757 28.4261V28.2421C29.9706 28.0931 29.9065 27.9522 29.7975 27.8505C29.6885 27.7487 29.5436 27.6945 29.3945 27.6997H18.2566Z" fill="#345D9D"/>
                    </svg> -->
                    <div class="h-[40px] w-[40px]">
                      <img class="max-w-[40px]" :src="i.img"/>

                    </div>

                    <div class="flex flex-col ml-[16px]">
                        <h2 class="text-[14px] text-[#10192D] font-[700]">{{ i.name }}</h2>
                        <span class="text-[#8E9BAE] text-[12px] mt-[2px] font-[400]">{{ i.code }}</span>
                    </div>
                </div>

                <div class="flex relative">
                    <div class="absolute -top-6 right-20">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="72" height="34" viewBox="0 0 72 34" fill="none">
                            <path d="M1 32.5C7.90141 28.0818 14.8028 9.30345 18.7465 9.30345C24.2676 9.30345 24.662 22.5587 28.6056 21.4539C33.0375 19.7991 33.5352 11.5127 35.507 10.4081C37.4789 9.30345 39.4507 12.6171 41.4225 12.6171C43.9103 12.6171 47.338 0.466588 50.2958 1.571C53.7309 2.85364 58.1831 24.7677 62.1268 24.7677C66.0704 24.7677 67.0563 12.6172 71 12.6171" stroke="#F65556" stroke-width="2" stroke-linecap="round"/>
                        </svg> -->
                        <chartsArea/>
                    </div>

                    <div >
                        <h2 class="text-sm text-[#10192D] font-[700]">$18,788</h2>
                        <span class="text-[#F65556] font-[500] text-[12px]">-0.15%</span>
                    </div>

                </div>
            </div>
        </div>

    </div>

</template>


<script setup>
import { ref, watch } from 'vue';
import {debounce} from '@/composables/mixins';
import { useDark, useToggle } from '@vueuse/core'




 const isDark = useDark()

const selectedNumber = ref('+1');
const selectedCountryid = ref(1);


const filteredcoins = ref([]);
const searchInput = ref('');

const coin_lists = [
  { name: 'Ethereum',code:'ETH',amount:200000, percentage:'',img:'/home/eth.png',id:1 },
  { name: 'Bitcoin', code:'BTC',amount:18965,percentage:'',img:'/home/btc.png', id: 2 },
  { name: 'XRP',code:'XRP', amount:23341,percentage:'',img:'/home/xrp.png', id: 3 },
  { name: 'Dash',code:'XRP', amount:11232,percentage:'',img:'/home/dash.png', id: 4 },
  { name: 'Binance',code:'BNB', amount:43231,percentage:'',img:'/home/bnb.png', id: 5 },
];



const selectCountry = (id) => {
  selectedCountryid.value = id
  searchInput.value = '';
};



const filterV =(n)=>{
  filteredcoins.value = coin_lists.filter((i)=>{
          return  i.name.toLowerCase().includes(n.toLowerCase())
      }) 

  }

watch(()=>searchInput.value,(newv)=>{
  debounce(filterV,newv)
})
</script>
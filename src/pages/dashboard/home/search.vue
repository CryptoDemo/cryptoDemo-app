<template>

    <div class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full px-6 ">

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

        <div v-for="i in filteredcoins.length? filteredcoins : pinia.state.tokenLists" class="mt-[24px]">

            <div class="flex justify-between items-center mb-[27px]">

                <div class="flex items-center">

                  
                    <div class="w-[40px] h-[40px] rounded-full">

                      <MazLazyImg :src="i.icon"/>

                    </div>

                    <div class="flex flex-col ml-[16px]">
                        <h2 class="text-[14px] text-[#10192D] font-[700]">{{ i.name }}</h2>
                        <span class="text-[#8E9BAE] text-[12px] mt-[2px] font-[400]">{{ i.symbol }}</span>
                    </div>
                </div>



                <div class="flex relative">
                  <div class="absolute -top-7 right-20">
                               
                        <div v-for="p in pinia.state.tokenPrices" :key="p.id">
                            <div v-if="p.symbol === i.symbol+ 'USDT'">
                                <chartsArea :symbol="i.symbol+ 'USDT'" :pricepercent="p.priceChangePercent"/>
                            </div>
                        </div>

                        <div v-show="i.symbol === 'USDT'">
                            <chartsArea :symbol="i.symbol+ 'USDT'" />
                        </div>
                     </div>

                    <div v-for="price in pinia.state.tokenPrices" :key="price.symbol">
                                <div v-if="price.symbol === i.symbol+ 'USDT'">

                                    <h2 class="text-sm text-[#10192D] font-[700]">{{ price.weightedAvgPrice.slice(0,7) }}</h2>
                                    <span v-if="price.priceChangePercent < 0" class="text-[#F65556] font-[500] text-[12px]">{{price.priceChangePercent}}%</span>
                                    <span v-else-if="price.priceChangePercent > 0" class="text-[#22C36B] font-[500] text-[12px]">{{price.priceChangePercent}}%</span>
                                    <span v-else ="price.priceChangePercent === 0" class="text-[#888787] font-[500] text-[12px]">{{price.priceChangePercent}}</span>
                                </div>
                    </div>

                    <div v-show="i.symbol === 'USDT'">

                      <h2 class="text-sm text-[#10192D] font-[700]">$0.9999</h2>
                      <!-- <span v-if="price.priceChangePercent < 0" class="text-[#F65556] font-[500] text-[12px]">%</span> -->
                      <span  class="text-[#22C36B] font-[500] text-[12px]">0.2%</span>
                      <!-- <span v-else ="price.priceChangePercent === 0" class="text-[#888787] font-[500] text-[12px]"></span> -->
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




const toast = useToast()
const pinia = useStore()
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
  filteredcoins.value = pinia.state.tokenLists.filter((i)=>{
          return  i.name.toLowerCase().includes(n.toLowerCase())
      }) 

  }

watch(()=>searchInput.value,(newv)=>{
  debounce(filterV,newv)
})



</script>
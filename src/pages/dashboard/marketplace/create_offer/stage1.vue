<template>

    <div class=" h-screen pb-32 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">
        
        <Appbar link="/dashboard" title="Create offer"/>


        <div class="mt-[80px] flex justify-between items-center">

            <div v-for="(i,index) in 3" class="flex justify-between items-center">
                <div v-if="index === 0" class="w-6 h-6 bg-[#2873FF] text-white rounded-full  text-sm inline-flex justify-center items-center 
                
                ">{{ index + 1 }}</div>
                <div v-else  class="w-6 h-6 bg-[#E2E8F0] dark:bg-[#ffffff1a] rounded-full  text-sm inline-flex justify-center items-center 
                text-[#64748B]
                ">{{ index + 1 }}</div>
                <div v-if="index === 0" class="meter overflow-hidden bg-[#E2E8F0] dark:bg-[#ffffff1a] h-[1.011px] w-[101px] ml-3.5" >
                    <span style="width:100%;"><span class="progress"></span></span>
                </div>
                <div v-else class="h-[1.011px] w-[101px] ml-3.5" :class="{'hidden': index === 2}">
                    <div class="min-h-[1px] max-w-[110px] bg-[#E2E8F0] dark:bg-[#ffffff1a]"></div>
                </div>
            </div>

        </div>


        <h3 class="text-[16px] mt-[24px] font-[700] dark:text-[#F8FAFC] text-[#10192D]">Choose your rate</h3>

        <div class="mt-[16px] p-[12px] bg-[#F5F9FF] dark:bg-[#1B2537] hover:border hover:border-[#2873FF] 
        rounded-[12px] transition ease-in-out duration-300">

            <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Market price</h3>
            <p class="mt-[4px] text-[16px]">Your offer price adjusts with the Bitcoin market.</p>

        </div>

        <div class="mt-[16px] p-[12px] bg-[#F5F9FF] dark:bg-[#1B2537] hover:border hover:border-[#2873FF] 
        rounded-[12px] transition ease-in-out duration-300">

            <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Fixed price</h3>
            <p class="mt-[4px] text-[16px]">Your offer price remains fixed upon creation, unaffected by market changes.</p>

        </div>


        <div class="mt-[24px]">

            <div class="flex justify-between items-center">
                <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Offer Trade Limit</h3>

                <div  class="dark:bg-[#1B2537] bg-[#F8FAFC] rounded-[20px] p-[4px] ">

                    <button @click=" offer_trade_limit = true"  class="font-[600] text-sm capitalize  transition ease-in-out duration-200" 
                    :class="offer_trade_limit?'bg-[#2873FF] text-white rounded-[20px] py-[5px] px-[16px]':'mr-[15px] pl-[16px] text-[#B9D1FF]'">
                    Fixed</button>
                    <button @click=" offer_trade_limit = false"   class="font-[600] text-sm capitalize  transition ease-in-out duration-200" 
                    :class="!offer_trade_limit?'bg-[#2873FF] text-white rounded-[20px] py-[5px] px-[16px]':'ml-[15px] pr-[16px] text-[#B9D1FF]'">
                    Range</button>

                </div>

            </div>


            <div v-if="offer_trade_limit" class="transition ease-in-out duration-300">

                <p class="mt-[16px]">Minimum</p>
                <div class="mt-[8px] relative">
                    <input class="input" placeholder="App fixed amount"/>
                    <div class="absolute bottom-[5px] right-1 max-w-[64px] px-[20px] py-[12px] inline-flex justify-center items-center
                    bg-[#F8FAFC] dark:bg-[#131D35]
                    rounded-[15px]">
                        <!-- <img class="w-[24px]" src="/home/icon.png"/> -->
                        <span class="text-sm text-[#8E9BAE]">NGN</span>
                    </div>
                </div>
    
    
                <p class="mt-[16px]">Maximum</p>
                <div class="mt-[8px] relative">
                    <input class="input" placeholder="Enter an amount"/>
                    <div class="absolute bottom-[5px] right-1 max-w-[64px] px-[20px] py-[12px] inline-flex justify-center items-center
                    bg-[#F8FAFC] dark:bg-[#131D35]
                    rounded-[15px]">
                        <!-- <img class="w-[24px]" src="/home/icon.png"/> -->
                        <span class="text-sm text-[#8E9BAE]">NGN</span>
                    </div>
                </div>
            </div>

            <div v-else class="transition ease-in-out duration-300">

                <p class="mt-[24px]">Select or type in manually</p>

                    
                <div class="mb-4 mt-[8px] relative">

                    <div class="min-h-[50px] w-full p-2 overflow-x-auto grid grid-cols-10 gap-[8px] items-center border 
                    rounded-[15px] dark:border-[#1B2537]">
                        <div class="col-span-9 gap-[8px] ">
                            <div class="flex flex-wrap gap-[4px]">
                                    <div v-for="x in selected_offer" :key="x.id"  class="flex flex-wrap gap-[8px] transition ease-in-out duration-300">
                                        <span class=" text-[#8E9BAE] text-sm flex items-center   bg-[#F8FAFC] transition ease-in-out duration-300 dark:bg-[#131D35] p-2 rounded-[12px]
                                        ">
                                        <span>{{ x.amount }}</span>
                                        <svg @click.prevent="deleteItem(x.id)" class="ml-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                        viewBox="0 0 24 24"><path fill="red" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                                       </span>

                                    </div>
                                    <input @change="selected_offer.push({id:selected_offer.length,amount:`${inputV}`}); inputV = ''"  
                                    v-model="inputV"
                                    class="bg-transparent w-20 pt-1  border-none text-[#8E9BAE] focus:ring-0 outline-none"/>
                            </div>
                        </div>
                        <Icon @click="toggle_show_offer"  :class="{'rotate-up':show_offer}"  
                            name="solar:alt-arrow-down-bold" size="16" class="
                            transition-all  ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                       


                    </div>

                    <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full  
                    dark:text-[#8E9BAE] bg-[#ffff]   dark:bg-[#10192D] z-40
                    rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_offer" >
                        
                    
                        <div class=" relative overflow-y-auto">

                            <div
                                v-for="i in offer_lists" :key='i'
                                class="px-[20px] py-[14px] w-full leading-tight"
                            >
                                <ul  @click="toggle_show_offer();  
                                selected_offer.push({id:selected_offer.length,amount:`${i}`})"  class="flex items-center w-full rounded-xl  ">
                                    <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                        {{ i }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 

                </div>

            </div>


            <p class="mt-[8px]">Your offer limit must be between 14,200 and 14,200,000</p>


        </div>


        <div class="mt-[24px]">

            <div class="flex justify-between items-center">
                <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Offer Margin</h3>

                <div  class="dark:bg-[#1B2537] bg-[#F8FAFC] rounded-[20px] p-[4px] ">

                    <button @click=" offer_margin = true"  class="font-[600] text-sm capitalize  transition ease-in-out duration-200" 
                    :class="offer_margin?'bg-[#2873FF] text-white rounded-[20px] py-[5px] px-[16px]':'mr-[15px] pl-[16px] text-[#B9D1FF]'">
                    Basic</button>
                    <button @click=" offer_margin = false"   class="font-[600] text-sm capitalize  transition ease-in-out duration-200" 
                    :class="!offer_margin?'bg-[#2873FF] text-white rounded-[20px] py-[5px] px-[16px]':'ml-[15px] pr-[16px] text-[#B9D1FF]'">
                    Complex</button>

                </div>

            </div>

            <div v-if="offer_margin">

                <p class="mt-[16px]">What profit target do you have for each trade? (%)</p>

                <div class="min-h-[56px] mt-[8px] bg-[] flex justify-between items-center border
                rounded-[15px] dark:border-[#1B2537] border-[#E2E8F0] px-[2px]">

                    <button @click.prevent="numberV--" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF] dark:bg-[#131D35] rounded-[15px]">
                        -
                    </button>

                    <span class="text-sm text-[#8E9BAE]">{{ numberV }}</span>

                    <button  @click.prevent="numberV++" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF] dark:bg-[#131D35] rounded-[15px]">
                        +
                    </button>

                </div>

                <p class="mt-[16px]">Bitcoin Market Price: ₦61,160,488.67 
                    Save ₦3,058,024.43 per Bitcoin at your selected margin. 
                    With a minimum trade of ₦14,200.00, get ₦14,910.00 worth of Bitcoin in return.
                </p>

            </div>

            <div v-else>

                <p class="mt-[16px]">
                    Adopt a customizable offer margin by selecting the market price of Bitcoin from various sources. 
                    Choose your desired source and time frame  below.
                </p>


                <P class="mt-[16px]">Source</P>

                <div class=" mt-[8px] relative">
    
                    <button
                            @click="toggle_show_source"
                            class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
                            justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                        >
                            <span>{{ selected_source || 'source method' }}</span>
                            <Icon  :class="{'rotate-up':show_source}"  
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>

                    </button>

                    <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full  
                    dark:text-[#8E9BAE] bg-[#ffff]   dark:bg-[#10192D] z-40
                    rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_source" >
                        
                    
                        <div class=" relative overflow-y-auto">

                            <div
                                v-for="i in source_lists"  @click="toggle_show_source();  
                                selected_source = i" :key='i'
                                class="px-[20px] py-[14px] w-full leading-tight"
                            >
                                <ul class="flex items-center w-full rounded-xl  ">
                                    <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                        {{ i }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <P class="mt-[16px]">Price Time frame</P>

                <div class=" mt-[8px] relative">
    
                    <button
                            @click="toggle_show_price"
                            class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
                            justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                        >
                            <span>{{ selected_price || 'current price' }}</span>
                            <Icon  :class="{'rotate-up':show_price}"  
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>

                    </button>

                    <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full  
                    dark:text-[#8E9BAE] bg-[#ffff]   dark:bg-[#10192D] z-40
                    rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_price" >
                        
                    
                        <div class=" relative overflow-y-auto">

                            <div
                                v-for="i in price_lists"  @click="toggle_show_price();  
                                selected_price = i" :key='i'
                                class="px-[20px] py-[14px] w-full leading-tight"
                            >
                                <ul class="flex items-center w-full rounded-xl  ">
                                    <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                        {{ i }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


                <p class="mt-[16px]">What profit target do you have for each trade? (%)</p>


                <div class="min-h-[56px] mt-[8px] bg-[] flex justify-between items-center border
                rounded-[15px] dark:border-[#1B2537] border-[#E2E8F0] px-[2px]">

                    <button @click.prevent="numberV2--" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF] dark:bg-[#131D35] rounded-[15px]">
                        -
                    </button>

                    <span class="text-sm text-[#8E9BAE]">{{ numberV2 }}</span>

                    <button  @click.prevent="numberV2++" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF] dark:bg-[#131D35] rounded-[15px]">
                        +
                    </button>

                </div>

                <p class="mt-[16px]">Bitcoin Market Price: ₦61,160,488.67 <br> Receive 95% of the Bank Transfer value via Demo at the 
                    current price time frame. <br>Save ₦3,054,184.04 per Bitcoin
                     compared to the market price. With a minimum trade of ₦14,200.00, 
                     get ₦14,910.00 worth of Bitcoin in return.
                </p>

            </div>

        </div>


        <div class="mt-[24px]">
            <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Offer Time Limit</h3>
            <p class="mt-[16px]">Set your offer time limit here (Minutes)</p>

            <div class="min-h-[56px] mt-[8px] bg-[] flex justify-between items-center border
                rounded-[15px] dark:border-[#1B2537] border-[#E2E8F0] px-[2px]">

                    <button @click.prevent="(time > 1 )?time-- :''" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF]
                        dark:bg-[#131D35] rounded-[15px]">
                        -
                    </button>

                    <span class="text-sm text-[#8E9BAE]">{{ time }}</span>

                    <button  @click.prevent="time++" class="h-[48px]  text-[#8E9BAE] w-[53px] bg-[#F5F9FF] dark:bg-[#131D35] rounded-[15px]">
                        +
                    </button>

            </div>

            <p class="mt-[16px]">Bitcoin Market Price: ₦61,160,488.67 
                Save ₦3,058,024.43 per Bitcoin at your selected margin. 
                With a minimum trade of ₦14,200.00, get ₦14,910.00 worth of Bitcoin in return.
            </p>



        </div>



          <div class="fixed bottom-5 left-0 w-full px-6 ">
            <div class="flex w-full gap-[21px]">
                <button  @click.prevent="navigateTo('/dashboard/marketplace/create_offer')" class="btn-border w-full">Back</button>
                <button  @click.prevent="navigateTo('/dashboard/marketplace/create_offer/stage2')" 
                class="btn-primary w-full">Continue</button>
            </div>

          </div>





    </div>

</template>

<script setup>

const numberV = ref(0)
const numberV2 = ref(0)
const time = ref(0)

const offer_trade_limit = ref(true)
const offer_margin = ref(true)

const selected_source = ref("Demo")
const show_source = ref(false)

const selected_price = ref("")
const show_price = ref(false)


const show_offer = ref(false)
const selected_offer = ref([
    {id:1,amount:250},
    {id:2,amount:1250},
])
const inputV = ref(null)

const toggle_show_offer =()=>{
    show_offer.value = !show_offer.value
}

const toggle_show_source =()=>{
    show_source.value = !show_source.value
}

const toggle_show_price =()=>{
    show_source.value = !show_source.value
}

const offer_lists = [
    10000,
    15000,
    20000,
    25000
]
const source_lists = [
    'demo',
    'not demo',
]
const price_lists = [
    30000,
    40000,
]



watch(()=>selected_offer.value,(newval)=>{
    selected_offer.value = newval
    console.log(newval)
})


const deleteItem = (itemId) => {
    const index = selected_offer.value.findIndex((item) => item.id === itemId);
    if (index !== -1) {
        selected_offer.value.splice(index, 1);
    }
    console.log(selected_offer.value)
  };

</script>



<style scoped>
.rotate-up {
transform: rotate(180deg);
}

.meter span {
    display: block;
    height: 100%;
}

.progress {
    background-color: #2873FF;
    animation: progressBar 3s ease-in-out;
    animation-fill-mode:both; 
    -moz-animation: progressBar 3s ease-in-out;
    -moz-animation-fill-mode:both; 
}

@keyframes progressBar {
  0% { width: 0; }
  100% { width: 100%; }
}

@-moz-keyframes progressBar {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>
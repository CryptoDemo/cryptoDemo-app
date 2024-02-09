<template>

    <div class=" h-screen pb-32 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Create offer"/>

        <div class="mt-[80px] flex justify-between items-center">

            <div v-for="(i,index) in 3" class="flex justify-between items-center">
                <div v-if="index < 2" class="w-6 h-6 bg-[#2873FF] text-white rounded-full  text-sm inline-flex justify-center items-center 
                
                ">{{ index + 1 }}</div>
                <div v-else  class="w-6 h-6 bg-[#ffffff1a] rounded-full  text-sm inline-flex justify-center items-center 
                text-[#64748B]
                ">{{ index + 1 }}</div>

                <div v-if="index === 1" class="meter overflow-hidden bg-[#ffffff1a] h-[1.011px] w-[101px] ml-3.5" >
                    <span style="width:100%;"><span class="progress"></span></span>
                </div>
                <div v-else class="h-[1.011px] w-[101px] ml-3.5" :class="{'hidden': index === 2}">
                    <div class="min-h-[1px] max-w-[110px] bg-[#2873FF]"></div>
                </div>
            </div>

        </div>

        <h3 class="text-[16px] mt-[24px] font-[700] dark:text-[#F8FAFC] text-[#10192D]">Offer tags</h3>
        
        
                       
        <p class="mt-[24px]">Select up to 3 tags that will apply to this offer</p>

        <div class=" mt-[8px] relative">

          <Tagselector/>
            
        </div>

        <p class="mt-[8px]">Tags are requirements that sellers must meet to participate in this transaction. </p>

        <h3 class="text-[16px] font-[700] text-[#2873FF] dark:text-[#2873FF] mt-[20px]">See all tags</h3>

        <div class="mt-[24px]">
            <h3 class="text-[16px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Offer Terms</h3>

            <p class="mt-[24px]">Bank transfer offer terms are set by Demo</p>

            <ul class=" list-disc pl-6 mt-[16px] text-[#8E9BAE]">
                <li>At the beginning of a trade, the seller chooses the bank for payment, and the buyer selects the 
                    account for fund transfer.</li>
                <li class="my-[8px]">The seller starts the trade by sharing their payment account bank details</li>
                <li>The buyer makes payment and uploads a screenshot of the transaction as proof of payment</li>
            </ul>


        </div>



        <div class="mt-[24px]">

            <h3 class="text-[16px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Offer conditions</h3>
            <div class="mt-[24px]">

                <div class="flex items-center mb-[16px]">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100
                     border-gray-300 rounded-[8px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                     <p class="ml-[8px]">Trade partner must be verified</p>
      
                </div>
                <div class="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100
                     border-gray-300 rounded-[8px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                     <p class="ml-[8px]">Trade partner must show their full name</p>
      
                </div>
            </div>

            <p class="mt-[24px]">Target a particular country</p>

            <div class="mt-[8px]">
    
                <button
                        @click="toggle_show_country"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] "
                    >
                        <span>{{ selected_country|| 'Country' }}</span>
                        <Icon :class="{'rotate-up': show_country }" 
                        name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300  text-[#8E9BAE]
                        dark:text-[#FFFFFF]"/>

                </button>

                <div class=" dark:bg-transparent dark:text-[#8E9BAE]  overflow-y-auto
                rounded-xl  pb-2 transition ease-in-out duration-300 w-full"  v-show="show_country">

                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only
                            dark:text-[#E2E8F0]">Search</label>
                                
                                <div class="relative" >
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-[#FFFFFF]" aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    
                                    <input @focusin="isFocused=true" @focusout="isFocused=false"
                                    v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3 
                                    p-4 ps-10 
                                        input dark:text-[#E2E8F0] focus:ring-1 focus:ring-gray-200 dark:focus:ring-[#1B2537]" 
                                        placeholder="Search countries..." required>
                                </div>
                                
                    <div class="max-h-[215px] relative overflow-y-auto px-4">

                        <div
                            v-for="i in filteredItem.length? filteredItem : countries"  @click="toggle_show_country(); 
                            selected_country = i.name; show_country = false; searchInput = ''"
                            class="mt-4 w-full   pb-3"
                        >
                            <a href="#" class="flex items-center w-full rounded-xl ">
                                
                                    <div class="country-flag inline-flex justify-center items-center">
                                            <country-flag :country='i.icon' size='big' class=" rounded-full"/>
                                    </div>
                            <span class="px-4 font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">{{ i.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <p class="mt-[8px]">You cannot use this feature because your current payment method is country specific</p>

            <div class="flex items-center mt-[24px]">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100
                     border-gray-300 rounded-[8px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                     <p class="ml-[8px]">Apply this settings to all my offers</p>
      
             </div>

            

        </div>

 <!-- other optional conditions -->
        <div class="mt-[24px] w-full">

            <div class="flex justify-between items-center ">
                <span class="text-[16px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Other conditions 
                    <span class="text-[#8E9BAE] text-[14px] font-[400]"> (Optional)</span></span>

                <Icon @click="toggle_show_tag"  :class="{'rotate-up':show_tag}"  
                        name="solar:alt-arrow-down-bold" size="16" class="
                        transition-all  ease-in-out duration-300   text-[#8E9BAE]
                        dark:text-[#FFFFFF]"/>
            </div>


            

            <div class="mt-[24px]">
                <h3 class="text-[16px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Required number of trades</h3>

                <p class="mt-[16px]">Enter minimum number of trades required</p>

                <input type="number" class="input mt-[8px]" placeholder="Enter number here"/>

                <p class="mt-[8px]">Only users who have completed past trades up to your required number will be able to sell
                     to you
                </p>
                     
                <h3 class="text-[16px] mt-[24px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Visibility</h3>

                <div class="flex items-center mt-[16px]">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100
                     border-gray-300 rounded-[8px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600">
                     <p class="ml-[8px]">Show this offer to my trusted users only</p>
      
                </div>

                <h3 class="text-[16px] mt-[24px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">New users</h3>

                <p class="mt-[16px]">Maximum trade amount for new users</p>

                <div class="mt-[8px] relative">
                    <input class="input" placeholder="Enter an amount"/>
                    <div class="absolute bottom-[5px] right-1 max-w-[64px] px-[20px] py-[12px] inline-flex justify-center items-center
                    bg-[#F8FAFC] dark:bg-[#131D35]
                    rounded-[15px]">
                        <!-- <img class="w-[24px]" src="/home/icon.png"/> -->
                        <span class="text-sm text-[#8E9BAE]">NGN</span>
                    </div>
                </div>

                <p class="mt-[8px]">Only users who have completed past trades up to your required number will be able to sell to you</p>


                <h3 class="text-[16px] mt-[24px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Limit by countries</h3>

                <p class="mt-[8px]">Use one of the two options, once you block some countries, your offer is visible to every other country 
                    and vice versa
                </p>

                <p class="mt-[16px]">Select countries to block</p>

                <div class="mt-[8px]">
    
                   <CountryDropdown/>

                </div>
                  
                <p class="mt-[8px]">Traders from this country won’t see your offer</p>

                <p class="mt-[16px]">Select countries to allow</p>

                <div class="mt-[8px]">
    
                    <CountryDropdown/>

                </div>

                <p class="mt-[8px]">Your offer will be visible to only traders from this country</p>

                <h3 class="text-[16px] mt-[24px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Proxy/VPN users</h3>

                <div class="flex items-center mt-[16px]">
                    <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100
                     border-gray-300 rounded-[8px] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600">
                     <p class="ml-[8px]">Show this offer to my trusted users only</p>
      
                </div>

                <h3 class="text-[16px] mt-[24px]  font-[700] dark:text-[#F8FAFC] text-[#10192D]">Offer Visibility Time</h3>

                <p class="mt-[16px]">Select days of the week</p>


                <div class=" mt-[8px] relative">

                    <div class="min-h-[50px] w-full p-2 overflow-x-auto grid grid-cols-10 gap-[8px] items-center border 
                    rounded-[15px] dark:border-[#1B2537]">
                        <div class="col-span-9 gap-[8px] ">
                            <div class="flex flex-wrap gap-[8px]">
                                    <div v-for="(x,index) in  checked" :key="x"  class="flex flex-wrap gap-[8px] transition 
                                    ease-in-out duration-300">
                                        <span 
                                        class=" text-[#8E9BAE] text-sm flex items-center    transition 
                                        ease-in-out duration-300 bg-[#F8FAFC]  dark:bg-[#131D35] p-2 rounded-[12px]
                                        ">
                                        <span>{{ x }}</span>
        
                                        <!-- <svg @click.prevent="deleteItem(index)" class="ml-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                        viewBox="0 0 24 24"><path fill="red" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59
                                            12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg> -->
                                    </span>

                                    </div>
                                    
                            </div>
                        </div>

                        <Icon @click="toggle_show_days"  :class="{'rotate-up':show_days}"  
                            name="solar:alt-arrow-down-bold" size="16" class="
                            transition-all  ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                    


                    </div>

                    <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full  
                    dark:text-[#8E9BAE] bg-[#ffff]   dark:bg-[#10192D] z-40
                    rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_days" >
                        

                        <div class=" relative overflow-y-auto">

                            <div
                                v-for="i in days_lists" :key='i'
                                class="px-[12px] py-[14px] w-full leading-tight"
                            >
                                <ul 
                                    class="flex items-center 
                                w-full rounded-xl  " >
                                        <input  id="default-checkbox" v-model="checked" :value="i"
                                        type="checkbox" value="" class="w-4 h-4 text-blue-600
                                        bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                                        dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <li class="font-[700] ml-[10px] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                        {{ i }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    
                </div>



                <p class="mt-[8px]">Your offer will be visible only on these days</p>


                <div class="grid grid-cols-2 mt-[16px] gap-[16px]">

                    <div>
                          <p>Start time</p>
                          <!-- <input type="time" class="input mt-[8px]" value="12:00 AM"/> -->
                        <div class="flex justify-between items-center input mt-[8px]">
                            <div>
                                <span>12</span>
                                <span>:</span>
                                <span>00</span>
                                <span>AM</span>
                            </div>

                            <Icon @click="toggle_show_start_time"  :class="{'rotate-up':show_start_time}"  
                            name="solar:alt-arrow-down-bold" size="16" class="
                            transition-all  ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                               
                        </div>
                    </div>

                    <div>
                          <p>End time</p>
                          <!-- <input type="time" class="input mt-[8px]" value="12:00 AM"/> -->
                        <div class="flex justify-between items-center input mt-[8px]">
                            <div>
                                <span>12</span>
                                <span>:</span>
                                <span>00</span>
                                <span>AM</span>
                            </div>

                            <Icon @click="toggle_show_end_time"  :class="{'rotate-up':show_end_time}"  
                            name="solar:alt-arrow-down-bold" size="16" class="
                            transition-all  ease-in-out duration-300   text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                               
                        </div>
                    </div>
                   

                </div>



            </div>


        </div>



        <div class="fixed bottom-5 left-0 w-full px-6 ">
            <div class="flex w-full gap-[21px]">
                <button  @click.prevent="navigateTo('/dashboard/marketplace/create_offer')" class="btn-border w-full">Back</button>
                <button  @click.prevent="navigateTo('/dashboard/marketplace/create_offer/success')" 
                class="btn-primary w-full">Create</button>
            </div>
        </div>





    </div>

</template>



<script setup>

import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })


const show_country = ref(false)
const selected_country = ref('')
const filteredItem  = ref([])
const searchInput = ref("")



const isdisable =ref(false)
const show_tag = ref(false)
const checked = ref(['Mon'])

const selected = ref([
    'Guided trade'
])

const show_days = ref(false)

const show_start_time = ref(false)
const show_end_time = ref(false)


const toggle_show_tag =()=>{
    show_tag.value = !show_tag.value
}

const toggle_show_days =()=>{
    show_days.value = !show_days.value
}

const toggle_show_start_time =()=>{
    show_start_time.value = !show_start_time.value
}
const toggle_show_end_time =()=>{
    show_end_time.value = !show_end_time.value
}


const toggle_show_country =()=>{
    show_country.value = !show_country.value
    searchInput.value = ''
  }

// const checkedTg =(length,item)=>{
//     if(selected_tag.value.length < 3){
//         selected_tag.value.push({id:`${length}`,tag:`${item}`})
//     }

// }

const tag_lists = [
    'Guided trade',
    'No third parties',
    'Receipt Required'
]
const days_lists = [
    'Mon',
    'Tues'
]
const source_lists = [
    'demo',
    'not demo',
]
const price_lists = [
    30000,
    40000,
]


const countries = [
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
        filteredItem.value = countries.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())

        }) 

        console.log(filteredItem.value)
    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
})





// const deleteItem = (itemId) => {
//     const index = selected.value.findIndex((item) => item.id === itemId);
//     if (index !== -1) {
//         selected.value.splice(index, 1);
//     }
//     console.log(selected.value)
//   };

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
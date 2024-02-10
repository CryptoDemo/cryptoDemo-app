<template>

    <div class=" h-screen pb-32 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Create offer"/>


        <div class="mt-[80px] flex justify-between items-center">

            <div v-for="(i,index) in 3" class="flex justify-between items-center">
                <div class="w-6 h-6 bg-[#E2E8F0] dark:bg-[#ffffff1a] rounded-full  text-sm inline-flex justify-center items-center 
                text-[#64748B]
                ">{{ index + 1 }}</div>
                <div  class="h-[1.011px] w-[101px] ml-3.5" :class="{'hidden': index === 2}">
                    <div class="min-h-[1.011px] max-w-[110px] bg-[#E2E8F0] dark:bg-[#ffffff1a]"></div>
                </div>
            </div>

        </div>

        <p class="mt-[24px]">Would you like to create an offer to buy or sell?</p>

        <div class="mb-4 mt-[8px] relative">
    
            <button
                    @click="toggle_show_offer"
                    class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                >
                    <span>{{ selected_offer || 'offer method' }}</span>
                    <Icon  :class="{'rotate-up':show_offer}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full  
            dark:text-[#8E9BAE] bg-[#ffff]   dark:bg-[#10192D] z-40
            rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_offer" >
                
            
                <div class=" relative overflow-y-auto">

                    <div
                        v-for="i in offer_lists"  @click="toggle_show_offer();  
                        selected_offer = i" :key='i'
                        class="px-[20px] py-[16px] w-full leading-tight"
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


        <p class="mt-[16px]">What cryptocurrency will you transact on?</p>

        <div class="relative mt-[8px]">
                        <input class="input py-[18px]  focus:ring-1 focus:ring-gray-800" :placeholder="selected_wallet_for_send"/>
                        <button @click.prevent="toggle_wallet_list1" class="min-w-[82px] min-h-[48px] absolute right-1 bottom-[5px]
                        rounded-[15px] bg-[#F5F9FF]
                        dark:bg-[#131D35] inline-flex justify-center items-center">
                            <div class="w-[24px] h-[24px]">
                                <img class="max-w-[24px]" :src="selected_wallet_for_swap"/>
                            </div>
                            <Icon :class="{'rotate-up': show_wallet_list1}" 
                                name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                                dark:text-[#FFFFFF]"/>
                        </button>


                        <div v-show="show_wallet_list1" class="absolute right-0 flex w-full z-50 flex-col bg-[#fff]
                        dark:bg-[#10192D]  
                        px-4 max-h-[auto] overflow-y-auto  rounded-[20px]">
                            <div @click.prevent="selected_wallet_for_swap = i.img;selected_wallet_for_send = i.name
                            ;show_wallet_list1 = false"
                            v-for="i in coin_lists" :key="i.id" class="flex py-4">
                                <div class="w-[24px] h-[24px] mr-[8px]">
                                    <img class="max-w-[24px]" :src="i.img"/>
                                </div>
                                <span class="font-[700] text-[16px] dark:text-[#F8FAFC]  ">{{i.name}} ({{ i.title }})</span>
                            </div>
                        </div>


        </div>

        <p class="mt-[16px]">How would you like to pay for this transaction?</p>

        <div class="relative mt-[8px]">
                        <input class="input py-[18px]  focus:ring-1 focus:ring-gray-800" :placeholder="selected_bank_name"/>
                        <button @click.prevent="toggle_show_bank_method" class="min-w-[82px] min-h-[48px] absolute right-1 bottom-[5px]
                        rounded-[15px] bg-[#F5F9FF]
                        dark:bg-[#131D35] inline-flex justify-center items-center">
                            <div class="w-[24px] h-[24px]">
                                <img class="max-w-[24px]" :src="selected_bank_icon"/>
                            </div>
                            <Icon :class="{'rotate-up': show_bank_method}" 
                                name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                                dark:text-[#FFFFFF]"/>
                        </button>


                        <div v-show="show_bank_method" class="absolute right-0 flex w-full z-50 flex-col bg-[#fff]
                        dark:bg-[#10192D]  
                        px-4 max-h-[auto] overflow-y-auto  rounded-[20px]">
                            <div @click.prevent="selected_bank_icon = i.img;selected_bank_name = i.name
                            ;show_bank_method = false"
                            v-for="i in transfer_mathods" :key="i.id" class="flex py-3">
                                <div class="w-[24px] h-[24px] mr-[8px]">
                                    <img class="max-w-[24px]" :src="i.img"/>
                                </div>
                                <span class="font-[700] text-[16px] dark:text-[#F8FAFC]  ">{{i.name}}</span>
                            </div>
                        </div>


        </div>


        <p class="mt-[16px]">What currency would you like to pay in?</p>

        <div class=" mt-[8px] relative">
    
            <button
                    @click="toggle_show_currency"
                    class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                >
                    <span>{{ selected_currency || 'Currency' }}</span>
                    <Icon  :class="{'rotate-up':show_currency}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class="absolute right-0 flex   dark:border-[#1B2537]  w-full  
            dark:text-[#8E9BAE]  bg-[#F5F9FF] dark:bg-[#10192D]
            rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_currency" >
                
            
                <div class=" relative overflow-y-auto">

                    <div
                        v-for="i in currency_lists"  @click="toggle_show_currency();  
                        selected_currency = i" :key='i'
                        class="px-[20px] py-[16px] w-full leading-tight"
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


        <div class="flex mt-[8px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.3199 11.94L11.5199 3.3C10.8749 2.1375 9.98236 1.5 8.99986 1.5C8.01736 1.5 7.12486 2.1375 6.47986 3.3L1.67986 11.94C1.07236 13.0425 1.00486 14.1 1.49236 14.9325C1.97986 15.765 2.93986 16.2225 4.19986 16.2225H13.7999C15.0599 16.2225 16.0199 15.765 16.5074 14.9325C16.9949 14.1 16.9274 13.035 16.3199 11.94ZM8.43736 6.75C8.43736 6.4425 8.69236 6.1875 8.99986 6.1875C9.30736 6.1875 9.56236 6.4425 9.56236 6.75V10.5C9.56236 10.8075 9.30736 11.0625 8.99986 11.0625C8.69236 11.0625 8.43736 10.8075 8.43736 10.5V6.75ZM9.53236 13.2825C9.49486 13.3125 9.45736 13.3425 9.41986 13.3725C9.37486 13.4025 9.32986 13.425 9.28486 13.44C9.23986 13.4625 9.19486 13.4775 9.14236 13.485C9.09736 13.4925 9.04486 13.5 8.99986 13.5C8.95486 13.5 8.90236 13.4925 8.84986 13.485C8.80486 13.4775 8.75986 13.4625 8.71486 13.44C8.66986 13.425 8.62486 13.4025 8.57986 13.3725C8.54236 13.3425 8.50486 13.3125 8.46736 13.2825C8.33236 13.14 8.24986 12.945 8.24986 12.75C8.24986 12.555 8.33236 12.36 8.46736 12.2175C8.50486 12.1875 8.54236 12.1575 8.57986 12.1275C8.62486 12.0975 8.66986 12.075 8.71486 12.06C8.75986 12.0375 8.80486 12.0225 8.84986 12.015C8.94736 11.9925 9.05236 11.9925 9.14236 12.015C9.19486 12.0225 9.23986 12.0375 9.28486 12.06C9.32986 12.075 9.37486 12.0975 9.41986 12.1275C9.45736 12.1575 9.49486 12.1875 9.53236 12.2175C9.66736 12.36 9.74986 12.555 9.74986 12.75C9.74986 12.945 9.66736 13.14 9.53236 13.2825Z" fill="#8E9BAE"/>
            </svg>
            <p class="ml-[4px]">This shows currencies supported by your preferred payment method</p>
        </div>

        <p class="mt-[16px]">Select country where you’re using your bank account</p>

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


        <div class="flex items-center mt-[16px]">
            <div class="flex items-center min-h-5">
            <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-[#1B2537] rounded-lg bg-transparent
            focus:ring-0 focus:ring-blue-100 " required>
            </div>
            <label for="terms" class="ms-2 text-sm font-[400] text-[#8E9BAE]">
                I can pay to all banks 
            </label>
        </div>


        <p class="mt-[16px]">What banks do you want to pay in? (You can list several banks and separate them with a space)</p>

        <input class="input mt-[8px]" placeholder="Access Uba Firstbank "/>

        
        <div  v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">

            <button v-show="selected_offer === 'Buy'" @click.prevent="navigateTo('/dashboard/marketplace/create_offer/stage1')" class="btn-primary w-full scaling-animation">Continue</button>
            <button v-show="selected_offer === 'Sell'" @click.prevent="navigateTo('/dashboard/marketplace/create_offer/sell')" 
            class="btn-primary w-full scaling-animation">Continue</button>

        </div>
       

    </div>

</template>

<script setup>
  import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

const isFocused = ref(false)

const show_offer = ref(false)
const selected_offer = ref('Buy')

const show_currency = ref(false)
const selected_currency = ref('')

const selected_wallet_for_send = ref('Bitcoin')
const selected_wallet_for_swap = ref('/home/btc2.png')
const show_wallet_list1 = ref(false)

const selected_bank_name = ref('Credit card')
const selected_bank_icon = ref('/home/cardbank.png')
const show_bank_method = ref(false)


const show_country = ref(false)
  const selected_country = ref('')
  const filteredItem  = ref([])
  const searchInput = ref("")

const toggle_show_offer =()=>{
    show_offer.value = !show_offer.value
}

const toggle_wallet_list1 = ()=>{
    show_wallet_list1.value = !show_wallet_list1.value 
}

const toggle_show_currency =()=>{
    show_currency.value = !show_currency.value
  }

const toggle_show_bank_method = ()=>{
    show_bank_method.value = !show_bank_method.value 
}


const toggle_show_country =()=>{
    show_country.value = !show_country.value
    searchInput.value = ''
  }


const currency_lists = [
    'Dollar',
    'Naira',
    'Pounds',
  ]

const offer_lists = [
    'Buy',
    'Sell',
]

const coin_lists =[
    {id:1,title:'BTC',img:'/home/btc2.png',name:'Bitcoin'},
    {id:2,title:'ETH',img:'/home/eth2.png',name:'Etheruem'},
    {id:3,title:'XRP',img:'/home/xrp.png',name:'XRP'},
    {id:3,title:'BNB',img:'/home/bnb.png',name:'Binance'},
]
const transfer_mathods =[
    {id:1,img:'/home/cardbank.png',name:'Credit card'},
    {id:2,img:'/home/bank.png',name:'Bank transfer'},
 
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

</script>


<style scoped>



.rotate-up {
transform: rotate(180deg);
}
.country-flag > .flag{
  width: 40px !important;
  height: 40px !important
}
.fade{
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
from {
  opacity: 0;
}
to {
  opacity: 1;
}
}

</style>

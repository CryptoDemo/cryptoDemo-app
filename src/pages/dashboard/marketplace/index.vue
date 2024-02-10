<template>

    <div class="h-screen pb-52 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full px-6">

        <HomeBar  title="Market" :search="false"/>

        <div class="flex justify-between gap-x-[12px] mt-[70px] w-full relative">

            <div  class="dark:bg-[#1B2537] bg-[#F8FAFC] rounded-[20px] p-[4px] ">

                <button @click=" selectedbtn = true"  class="font-[600] text-sm capitalize  transition ease-linear duration-300" 
                   :class="selectedbtn?'bg-[#2873FF] text-white rounded-[20px] py-[6px] px-[22px]':'pr-[8px] pl-[17px] text-[#B9D1FF]'">
                   buy</button>
                <button @click=" selectedbtn = false"   class="font-[600] text-sm capitalize  transition ease-linear duration-300" 
                   :class="!selectedbtn?'bg-[#2873FF] text-white rounded-[20px] py-[6px] px-[22px]':'pl-[8px] pr-[17px] text-[#B9D1FF]'">
                   sell</button>

            </div>


            <div @click.prevent="toggle_wallet_list1" class=" relative
                        rounded-[20px] bg-[#F5F9FF] px-[14px]
                        dark:bg-[#131D35] inline-flex justify-center items-center ">

                <div class="w-[24px] h-[24px]">
                    <img class="max-w-[24px]" :src="selected_wallet_for_swap"/>
                </div>

                <Icon :class="{'rotate-up': show_wallet_list1}" 
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

                    
            </div>

            <div v-show="show_wallet_list1" class="absolute  top-full right-0 flex w-full z-50 flex-col bg-[#fff]
                        dark:bg-[#10192D]  
                        px-4 max-h-[auto] overflow-y-auto  rounded-[20px]">
                            <div @click.prevent="selected_wallet_for_swap = i.img; show_wallet_list1 = false; 
                            selected_market_coin = i.title"
                            v-for="i in coin_lists" :key="i.id" class="flex py-3">
                                <div class="w-[24px] h-[24px] mr-[8px]">
                                    <img class="max-w-[24px]" :src="i.img"/>
                                </div>
                                <span class="font-[700] text-[16px] dark:text-[#F8FAFC]  ">{{ i.title }}</span>
                            </div>
            </div>

            <button  @click.prevent="openModal"  class="dark:bg-[#1B2537] bg-[#F8FAFC] rounded-[20px] px-[20px] flex justify-center items-center">
                <span class="text-sm font-[600] dark:text-white text-[#10192D] mr-[8px]">Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M3.59993 1.90039H12.3999C13.1333 1.90039 13.7333 2.50039 13.7333 3.23372V4.70039C13.7333 5.23372 13.3999 5.90039 13.0666 6.23372L10.1999 8.76706C9.79993 9.10039 9.53327 9.76706 9.53327 10.3004V13.1671C9.53327 13.5671 9.2666 14.1004 8.93327 14.3004L7.99994 14.9004C7.13327 15.4337 5.93327 14.8337 5.93327 13.7671V10.2337C5.93327 9.76706 5.6666 9.16706 5.39994 8.83372L2.8666 6.16706C2.53327 5.83372 2.2666 5.23372 2.2666 4.83372V3.30039C2.2666 2.50039 2.8666 1.90039 3.59993 1.90039Z" fill="white" stroke="#1B2537" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.28667 1.90039L4 7.16706" stroke="#1B2537" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
                                
    

        </div>

        <button @click.prevent="navigateTo('/dashboard/marketplace/create_offer')" class="btn-primary w-full mt-[24px]">Create offer</button>


        <div @click.prevent="navigateTo(`/dashboard/marketplace/${i.id}`)"
        v-for="i in filtered_marketplace" class="mt-[25px]">

            <div class="dark:bg-[#1B2537] bg-[#F5F9FF] p-[12px] rounded-[20px] transition ease-in-out duration-300">

                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="w-[20px]">
                            <img class="max-w-[20px] " src="/home/profile.png"/>
                        </div>
                        <span class="text-[14px] font-[600] ml-[8px] text-[#10192D] dark:text-[#F8FAFC]">Giftedoriocream567</span>
                    </div>

                    <span v-if="i.status" class="text-[#2873FF] background-verified rounded-[20px] text-[12px] px-[8px] py-[2px]">Verified</span>
                    <span v-else class="text-[#E33E38] background rounded-[20px] text-[12px] px-[8px] py-[2px]">Unverified</span>

                </div>

                <div class="flex justify-between items-center mt-[12px]">
                    <div class="flex items-center">
                        
                        <div class="flex items-center ">
                        <div class="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M17.1999 12.4004C14.5499 12.4004 12.3999 14.5504 12.3999 17.2004C12.3999 18.1004 12.6499 18.9504 13.0999 19.6704C13.9299 21.0604 15.4499 22.0004 17.1999 22.0004C18.9499 22.0004 20.4799 21.0604 21.2999 19.6704C21.7399 18.9504 21.9999 18.1004 21.9999 17.2004C21.9999 14.5504 19.8499 12.4004 17.1999 12.4004ZM19.5799 16.5704L17.0199 18.9304C16.8799 19.0604 16.6899 19.1304 16.5099 19.1304C16.3199 19.1304 16.1299 19.0604 15.9799 18.9104L14.7999 17.7304C14.5099 17.4404 14.5099 16.9604 14.7999 16.6704C15.0899 16.3804 15.5699 16.3804 15.8599 16.6704L16.5299 17.3404L18.5599 15.4604C18.8599 15.1804 19.3399 15.2004 19.6199 15.5004C19.8999 15.8104 19.8799 16.2904 19.5799 16.5704Z" fill="#2873FF"/>
                                <path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill="#2873FF"/>
                            </svg>
                            <span class="text-[10px] ml-[8px] font-[400] text-[#64748B]">2,050</span>
                        </div>
                        <div class="flex justify-between ml-[4.5px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M20.6899 13.9204C20.6799 13.9204 20.6799 13.9104 20.6799 13.9104V13.9004C19.7999 12.9804 18.5699 12.4004 17.1999 12.4004C14.5499 12.4004 12.3999 14.5504 12.3999 17.2004C12.3999 18.4304 12.8699 19.5504 13.6299 20.4004C14.5099 21.3804 15.7799 22.0004 17.1999 22.0004C19.8499 22.0004 21.9999 19.8504 21.9999 17.2004C21.9999 15.9304 21.4999 14.7804 20.6899 13.9204ZM19.0099 19.0704C18.8699 19.2104 18.6699 19.2904 18.4799 19.2904C18.2899 19.2904 18.0999 19.2104 17.9499 19.0704L17.2099 18.3304L16.4499 19.1004C16.2999 19.2404 16.1099 19.3204 15.9199 19.3204C15.8199 19.3204 15.7299 19.3004 15.6399 19.2604C15.5499 19.2304 15.4599 19.1704 15.3899 19.1004C15.0899 18.8004 15.0899 18.3304 15.3899 18.0404L16.1499 17.2704L15.4199 16.5304C15.1199 16.2404 15.1199 15.7604 15.4199 15.4704C15.7099 15.1804 16.1799 15.1804 16.4799 15.4704L17.2099 16.2104L17.9199 15.5004C18.2199 15.2104 18.6899 15.2104 18.9799 15.5004C19.1499 15.6704 19.2199 15.8904 19.1899 16.1104C19.1799 16.2804 19.1099 16.4404 18.9799 16.5604L18.2699 17.2704L19.0099 18.0104C19.3099 18.3004 19.3099 18.7704 19.0099 19.0704Z" fill="#E33E38"/>
                                <path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill="#E33E38"/>
                            </svg>
                            <span class="text-[10px] ml-[8px] font-[400] text-[#64748B]">559</span>
                        </div>

                        </div>
                    
                    </div>
                    <span class="text-[#8E9BAE] text-[12px] font-[400]">Limit 15,000 - 100,000 NGN</span>

                </div>

                <div class="flex justify-between items-center mt-[8px]">

                    <div class="flex items-center">
                        <img class="w-[16px]" :src="i.img"/>
                        <span class="text-[12px] text-[#8E9BAE] font-[600] ml-[10px] mr-[6px]">{{ i.title }}</span>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M3.88749 7.50065H6.11249C7.49582 7.50065 8.05832 6.52148 7.37082 5.32565L7.06249 4.79232C6.98749 4.66315 6.84999 4.58398 6.69999 4.58398H3.29999C3.14999 4.58398 3.01249 4.66315 2.93749 4.79232L2.62916 5.32565C1.94166 6.52148 2.50416 7.50065 3.88749 7.50065Z" fill="#22C36B"/>
                            <path d="M3.66216 4.16576H6.34133C6.50383 4.16576 6.60382 3.99076 6.52049 3.85326L6.25383 3.39492C5.56632 2.19909 4.43299 2.19909 3.74549 3.39492L3.47882 3.85326C3.39966 3.99076 3.49966 4.16576 3.66216 4.16576Z" fill="#22C36B"/>
                        </svg>
                        <span class="text-[#22C36B] text-[12px] font-[400]">-10%</span>
                    </div>

                    <span class="text-[12px] font-[600] text-[#10192D] dark:text-white">62,797,850.5NGN</span>

                </div>

                <div class="flex justify-between items-center mt-[8px]">
                    <span class="text-[#8E9BAE] text-[12px] font-[400]">Bank Transfer</span>
                    <span class="text-[#8E9BAE] text-[12px] font-[400]">First Bank only</span>
                </div>

                <div class="grid grid-cols-3 items-center gap-x-[4px] mt-[8px]">
                    <span class="px-[2px] py-[2.5px] background2 rounded-[20px] text-[#0EA5E9] text-[12px] font-[400] 
                    inline-flex justify-center items-center">Guided trade</span>
                    <span class="px-[2px] py-[2.5px]  background2 rounded-[20px] text-[#0EA5E9] text-[12px] font-[400] 
                    inline-flex justify-center items-center">Receipt required</span>
                    <span class="px-[2px] py-[2.5px]  background2 rounded-[20px] text-[#0EA5E9] text-[12px] font-[400]
                     inline-flex justify-center items-center">no third parties</span>

                </div>

                <div class="dark:bg-[#10192D] bg-[#fff] px-[12px] py-[8px] rounded-[8px] mt-[10px]">
                    <span class="dark:text-white text-[#10192D] text-[14px] font-[400]">Condition</span>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M16.3199 11.94L11.5199 3.3C10.8749 2.1375 9.98236 1.5 8.99986 1.5C8.01736 1.5 7.12486 2.1375 6.47986 3.3L1.67986 11.94C1.07236 13.0425 1.00486 14.1 1.49236 14.9325C1.97986 15.765 2.93986 16.2225 4.19986 16.2225H13.7999C15.0599 16.2225 16.0199 15.765 16.5074 14.9325C16.9949 14.1 16.9274 13.035 16.3199 11.94ZM8.43736 6.75C8.43736 6.4425 8.69236 6.1875 8.99986 6.1875C9.30736 6.1875 9.56236 6.4425 9.56236 6.75V10.5C9.56236 10.8075 9.30736 11.0625 8.99986 11.0625C8.69236 11.0625 8.43736 10.8075 8.43736 10.5V6.75ZM9.53236 13.2825C9.49486 13.3125 9.45736 13.3425 9.41986 13.3725C9.37486 13.4025 9.32986 13.425 9.28486 13.44C9.23986 13.4625 9.19486 13.4775 9.14236 13.485C9.09736 13.4925 9.04486 13.5 8.99986 13.5C8.95486 13.5 8.90236 13.4925 8.84986 13.485C8.80486 13.4775 8.75986 13.4625 8.71486 13.44C8.66986 13.425 8.62486 13.4025 8.57986 13.3725C8.54236 13.3425 8.50486 13.3125 8.46736 13.2825C8.33236 13.14 8.24986 12.945 8.24986 12.75C8.24986 12.555 8.33236 12.36 8.46736 12.2175C8.50486 12.1875 8.54236 12.1575 8.57986 12.1275C8.62486 12.0975 8.66986 12.075 8.71486 12.06C8.75986 12.0375 8.80486 12.0225 8.84986 12.015C8.94736 11.9925 9.05236 11.9925 9.14236 12.015C9.19486 12.0225 9.23986 12.0375 9.28486 12.06C9.32986 12.075 9.37486 12.0975 9.41986 12.1275C9.45736 12.1575 9.49486 12.1875 9.53236 12.2175C9.66736 12.36 9.74986 12.555 9.74986 12.75C9.74986 12.945 9.66736 13.14 9.53236 13.2825Z" fill="#FACC15"/>
                        </svg>
                        <span v-if="!i.status" class="text-[#8E9BAE] font-[400] text-[14px] ml-[4px]">Verify account to qualify for this trade</span>
                        <span v-else class="text-[#8E9BAE] font-[400] text-[14px] ml-[4px]">
                            Must have traded over 100,000NGN</span>

                    </div>
                    <button v-if="!i.status" class="btn-primary text-[12px] w-full mt-[8px] rounded-[12px]">Verify my account</button>


                </div>

            </div>

        </div>

        <div class="">

            <FilterModal @close="openModal(v)"  :visible="visible" btn1="cancel" btn2="confirm" 
            desc="By clicking the confirm button you will be sending worth of"  amount="200USDT" to="true"
            walletAddress="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"/>
        </div>

    </div>
</template>

<script setup>
  
const selectedbtn = ref(false)
const selected_wallet_for_swap = ref('/home/btc2.png')
const show_wallet_list1 = ref(false)
const selected_market_coin = ref('BTC')
const filtered_marketplace = ref([])

const visible = ref(false);

const isFocused = ref(false)

const openModal = (v) => {
  visible.value = v;
};

const togglebtn = (v)=>{
    selectedbtn.value = v
}

const coin_lists =[
    {id:1,title:'BTC',img:'/home/btc2.png',amount:''},
    {id:2,title:'ETH',img:'/home/eth2.png',amount:''},
    {id:3,title:'XRP',img:'/home/xrp.png',amount:''},
    {id:3,title:'BNB',img:'/home/bnb.png',amount:''},

]

const toggle_wallet_list1 = ()=>{
    show_wallet_list1.value = !show_wallet_list1.value 
}





const marketplace = [
    {id:1,title:'BTC',img:'/home/btc2.png',amount:'',status:false},
    {id:2,title:'ETH',img:'/home/eth2.png',amount:'',status:true},
    {id:3,title:'XRP',img:'/home/xrp.png',amount:'',status:false},
    {id:3,title:'BNB',img:'/home/bnb.png',amount:'',status:false},
    {id:1,title:'BTC',img:'/home/btc2.png',amount:'',status:true},
    {id:2,title:'ETH',img:'/home/eth2.png',amount:'',status:true},
    {id:3,title:'XRP',img:'/home/xrp.png',amount:'',status:false},
    {id:3,title:'BNB',img:'/home/bnb.png',amount:'',status:false},
    {id:1,title:'BTC',img:'/home/btc2.png',amount:'',status:true},
    {id:2,title:'ETH',img:'/home/eth2.png',amount:'',status:false},
    {id:3,title:'XRP',img:'/home/xrp.png',amount:'',status:true},
    {id:3,title:'BNB',img:'/home/bnb.png',amount:'',status:false},
]

onMounted(()=>{
    filtered_marketplace.value =  marketplace.filter((i)=>{
        return  i.title.toLowerCase().includes(selected_market_coin.value.toLowerCase())
                
    })
})

const filterV = (n)=>{

    filtered_marketplace.value =  marketplace.filter((i)=>{
        return  i.title.toLowerCase().includes(n.toLowerCase())
                
    })
}


watch(()=> selected_market_coin.value,(newv)=>{
        filterV(newv)
})

</script>


<style scoped>

.bg-gradient{
    background: rgba(40, 115, 255, 0.25);
}

.bg-gradient-not-selected{
    background: rgba(142, 155, 174, 0.25);
}

.rotate-up {
  transform: rotate(180deg);
}

.background{
    background: rgba(227, 62, 56, 0.25);
}
.background-verified{
    background: rgba(40, 115, 255, 0.25);
}
.background2{
    background: rgba(14, 165, 233, 0.25);
}

</style>
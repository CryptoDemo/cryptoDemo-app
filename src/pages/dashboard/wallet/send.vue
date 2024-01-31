<template>
    <Successful v-if="show_successful" title="sucessful" subtitle="By clicking the confirm button you will be sending worth of"
    amount="200USDT" to="true" walletAddress="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"/>

    <div v-else class=" h-screen pb-24 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  ">

        <Appbar link="/dashboard" title="Send Coin"/>

        <CardsBalance  class="mt-[88px]" :show_btns="false"/>  

        <div class="mt-[24px] px-6">

            <p>Select the coin you would like to send</p>
        </div>

        <div class="mt-[16px]">

            <div  class="flex gap-[12px] items-center overflow-x-auto px-6">
                <div v-for="i in coin_lists">
                    <button @click="selected_wallet_for_send = i.title; selected_wallet_for_swap = i.img" 
                    class="py-[10px] px-[12px] bg-gradient rounded-[20px] flex items-center transition ease-in-out duration-300"
                    :class="selected_wallet_for_send === i.title ?'bg-gradient ':'bg-gradient-not-selected opacity-[0.45]'">
                        <div class="w-[20px] h-[20px] mr-[3px]">
                            <img class="max-w-[20px]" :src="i.img"/>
                        </div>
                        <span class="text-[#8E9BAE] text-[14px] font-[400] mr-[12px]">{{ i.title }}</span>
                        <svg v-if="selected_wallet_for_send === i.title" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="9.83301" cy="9.83398" r="4" fill="#2873FF"/>
                            <circle cx="10" cy="10" r="9.58333" stroke="#2873FF" stroke-width="0.833333"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g opacity="0.5">
                                <circle cx="10" cy="10" r="9.58333" stroke="#E2E8F0" stroke-width="0.833333"/>
                            </g>
                        </svg>
                    </button>
                </div>


            </div>


            <div class="mt-[16px] px-6">

                <div class="flex flex-col">

                    <div class="relative">
                        <input class="input py-[18px]  focus:ring-1 focus:ring-gray-800" placeholder="Amount to swap"/>
                        <button @click.prevent="toggle_wallet_list1" class="min-w-[82px] min-h-[48px] absolute right-1 bottom-1.5
                        rounded-[15px]
                        bg-[#131D35] inline-flex justify-center items-center">
                            <div class="w-[24px] h-[24px]">
                                <img class="max-w-[24px]" :src="selected_wallet_for_swap"/>
                            </div>
                            <Icon :class="{'rotate-up': show_wallet_list1}" 
                                name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                                dark:text-[#FFFFFF]"/>
                        </button>


                        <div v-show="show_wallet_list1" class="absolute right-0 flex w-full z-50 flex-col dark:bg-[#10192D]  
                        px-4 max-h-[auto] overflow-y-auto  rounded-[20px]">
                            <div @click.prevent="selected_wallet_for_swap = i.img;selected_wallet_for_send = i.title
                            ;show_wallet_list1 = false"
                            v-for="i in coin_lists" :key="i.id" class="flex py-3">
                                <div class="w-[24px] h-[24px] mr-[8px]">
                                    <img class="max-w-[24px]" :src="i.img"/>
                                </div>
                                <span class="font-[700] text-[16px] dark:text-[#F8FAFC]  ">{{ i.title }}</span>
                            </div>
                        </div>


                    </div>
                    <div class="mt-[8px] px-[16px]">
                        <span class="text-[#8E9BAE] text-[14px] font-[400]">Wallet balance </span>
                        <span class="text-[#2873FF] font-[600] text-[14px] ml-[8px]">4,500BTC</span>
                    </div>
                </div>

            </div>

            <div class="mt-[16px] px-6">

                <div class="flex flex-col">

                    <div class="relative">
                        <input class="input py-[18px]  focus:ring-1 focus:ring-gray-800" placeholder="Amount to swap"/>
                        <button @click.prevent="" class="min-w-[63px] min-h-[48px] absolute right-1 bottom-1.5
                        rounded-[15px]
                        bg-[#131D35] inline-flex justify-center items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                           
                        </button>



                    </div>
                    <div class="mt-[8px] px-[16px]">
                        <span class="text-[#8E9BAE] text-[14px] font-[400]">Ensure the receiver’s wallet is a bitcoin wallet </span>
                    </div>
                </div>

            </div>


        


        </div>


        <div class="mt-[24px] px-6">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 7.5V11.6667" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99986 17.8414H4.94986C2.0582 17.8414 0.849863 15.7747 2.24986 13.2497L4.84986 8.56641L7.29986 4.16641C8.78319 1.49141 11.2165 1.49141 12.6999 4.16641L15.1499 8.57474L17.7499 13.2581C19.1499 15.7831 17.9332 17.8497 15.0499 17.8497H9.99986V17.8414Z" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99512 14.166H10.0026" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <span class="text-white text-[14px] font-[400] ml-[8px]">Network</span>
                    
            </div>

            <div v-for="i in 3" :key="i">
                <div class="mt-[16px] flex justify-between items-center p-[12px] bg-[#1B2537] rounded-[12px]">
                    <span class="text-[14px] font-[400] text-[#8E9BAE]">Ethereum (ERC 20)</span>
                    <span class="text-[14px] font-[400] text-[#8E9BAE]">Fee (2.6 USD)</span>
                </div>
            </div>

        </div>

         
        <div class="fixed bottom-5 left-0 w-full px-6">

            <button @click.prevent="openModal" class="btn-primary w-full scaling-animation">Confirm</button>

        </div>


        <div class="mx-6">

            <Modal @close="openModal(v)" @toggle_successful="toggle_show_successful()"  :visible="visible" btn1="cancel" btn2="confirm" 
              desc="By clicking the confirm button you will be sending worth of"  amount="200USDT" to="true"
               walletAddress="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"/>
        </div>


    </div>
</template>


<script setup>


const selected_wallet_for_send = ref('BTC')
const selected_wallet_for_swap = ref('/home/btc2.png')
const show_wallet_list1 = ref(false)

const visible = ref(false);

const isFocused = ref(false)

const openModal = (v) => {
  visible.value = v;
};

const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = !show_successful.value
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
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

</style>
<template>
        <Successful v-if="show_successful" title="sucessful" subtitle="Your coin has been successfully swapped!"/>

    <div v-else class=" min-h-screen pb-44 bg-[#ffff]   dark:bg-[#10192D]  w-full px-6 ">

        <Appbar link="/dashboard" title="Swap Coin"/>

        <p class="pt-[80px]">Swap coins seamlessly. Review the details below before confirming the transaction.</p>

        <h3 class="mt-[16px] text-[16px] font-[700] dark:text-[#F8FAFC]">Market price</h3>
        

        <div class="mt-[12px] p-[12px] dark:bg-[#1B2537] bg-[#fff] rounded-[12px] border border-[#E2E8F0] dark:border-none">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="w-[18px] h-[18px]">
                        <img class="max-w-[18px]" src="/home/btc2.png"/>
                    </div>
                    <span class="ml-1 text-[#8E9BAE] text-[14px] font-[400]">1 BTC</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <path d="M17.75 12.9766C17.75 15.8791 15.4025 18.2266 12.5 18.2266L13.2875 16.9141" stroke="url(#paint0_linear_2675_10973)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.25 6.97656C1.25 4.07406 3.5975 1.72656 6.5 1.72656L5.7125 3.03906" stroke="url(#paint1_linear_2675_10973)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.46484 10.8027H7.57234C8.03734 10.8027 8.41985 11.2227 8.41985 11.6502C8.41985 12.1152 8.04484 12.4977 7.57234 12.4977H5.46484V10.8027Z" stroke="url(#paint2_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.46484 12.498H7.87984C8.41234 12.498 8.84735 12.8731 8.84735 13.3456C8.84735 13.8106 8.41234 14.1931 7.87984 14.1931H5.46484V12.498Z" stroke="url(#paint3_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.81445 14.1855V15.0255" stroke="url(#paint4_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.81445 9.96289V10.8029" stroke="url(#paint5_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.6378 12.4967C11.6378 15.0542 9.56781 17.1242 7.01031 17.1242C4.45281 17.1242 2.38281 15.0542 2.38281 12.4967C2.38281 9.93917 4.45281 7.86914 7.01031 7.86914C7.13031 7.86914 7.24281 7.87666 7.37031 7.88416C9.64281 8.05666 11.4578 9.87165 11.6303 12.1441C11.6303 12.2566 11.6378 12.3692 11.6378 12.4967Z" stroke="url(#paint6_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.6251 7.50249C16.6251 10.06 14.5551 12.13 11.9976 12.13H11.6301C11.4576 9.85752 9.64262 8.04248 7.37012 7.86998V7.50249C7.37012 4.94499 9.44012 2.875 11.9976 2.875C14.5551 2.875 16.6251 4.94499 16.6251 7.50249Z" stroke="url(#paint7_linear_2675_10973)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_2675_10973" x1="18.3671" y1="15.6016" x2="11.452" y2="15.6016" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2675_10973" x1="7.11707" y1="4.35156" x2="0.201959" y2="4.35156" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_2675_10973" x1="8.76717" y1="11.6502" x2="4.87495" y2="11.6502" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint3_linear_2675_10973" x1="9.24492" y1="13.3456" x2="4.78961" y2="13.3456" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint4_linear_2675_10973" x1="7.93199" y1="14.6055" x2="6.61483" y2="14.6055" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint5_linear_2675_10973" x1="7.93199" y1="10.3829" x2="6.61483" y2="10.3829" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint6_linear_2675_10973" x1="12.7256" y1="12.4967" x2="0.535266" y2="12.4967" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
    <linearGradient id="paint7_linear_2675_10973" x1="17.7129" y1="7.50251" x2="5.52257" y2="7.50251" gradientUnits="userSpaceOnUse">
      <stop stop-color="#38BDF8"/>
      <stop offset="1" stop-color="#2873FF"/>
    </linearGradient>
  </defs>
                    </svg>
                </div>
                <div class="flex items-center">
                    <div class="w-[18px] h-[18px]">
                        <img class="max-w-[18px]" src="/home/eth2.png"/>
                    </div>
                    <span class="ml-1 text-[#8E9BAE] text-[14px] font-[400]">20ETH</span>
                </div>

            </div>

        </div>

        <h3 class="mt-[16px] text-[16px] font-[700] dark:text-[#F8FAFC]">Percentage Wallet Swap</h3>

        <div class="mt-[12px]">
            <div class="flex text-[#8E9BAE]">
                <div class="px-[8px] min-w-[47px] py-[2px] mr-[10px] bg-percent rounded-[20px] inline-flex justify-center items-center">
                    <span class="text-[12px] font-[400]">25%</span>
                </div>
                <div class="px-[8px] min-w-[47px]  py-[2px] mr-[10px] bg-percent rounded-[20px] inline-flex justify-center items-center">
                    <span class="text-[12px] font-[400]">50%</span>
                </div>
                <div class="px-[8px] min-w-[47px]  py-[2px] mr-[10px] bg-percent rounded-[20px] inline-flex justify-center items-center">
                    <span class="text-[12px] font-[400]">75%</span>
                </div>
                <div class="px-[8px] min-w-[47px]  py-[2px] mr-[10px] bg-percent rounded-[20px] inline-flex justify-center items-center">
                    <span class="text-[12px] font-[400]">100%</span>
                </div>
            </div>

        </div>

        <!-- amount to swap section -->
        <div class="mt-[16px]">

            <div class="flex flex-col">

                <div class="relative">
                    <input class="input py-[18px]" placeholder="Amount to swap"/>
                    <button @click.prevent="toggle_wallet_list1" class="min-w-[82px] min-h-[48px] absolute right-1 bottom-1.5
                     rounded-[15px] bg-[#F5F9FF]
                    dark:bg-[#131D35] inline-flex justify-center items-center">
                        <div class="w-[24px] h-[24px]">
                            <img class="max-w-[24px]" :src="selected_wallet_for_swap"/>
                        </div>
                        <Icon :class="{'rotate-up': show_wallet_list1}" 
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                    </button>


                    <div v-show="show_wallet_list1" class="absolute w-full right-0 flex z-50 flex-col bg-[#fff]
                     dark:bg-[#10192D]   
                    px-4 max-h-[auto] overflow-y-auto  rounded-[20px]">
                        <div @click.prevent="selected_wallet_for_swap = i.img;show_wallet_list1 = false"
                        v-for="i in wallet_lists" :key="i.id" class="flex py-3">
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

        <!-- amount to recieve section -->
        <div class="mt-[16px]">

            <div class="flex flex-col">

                <div class="relative">
                    <input class="input py-[18px]" placeholder="Amount to recieve"/>
                    <button @click.prevent="toggle_wallet_list2" class="min-w-[82px] min-h-[48px] absolute right-1 bottom-1.5 rounded-[15px]
                         bg-[#F5F9FF]  dark:bg-[#131D35] inline-flex justify-center items-center">
                        <div class="w-[24px] h-[24px]">
                            <img class="max-w-[24px]" :src=" selected_wallet_to_swap_for "/>
                        </div>
                        <Icon :class="{'rotate-up': show_wallet_list2}" 
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300 ml-[10px]  text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>
                    </button>


                    <div v-show="show_wallet_list2" class="absolute right-0 flex z-40 flex-col  bg-[#fff]
                    dark:bg-[#10192D]  
                     px-4 max-h-[auto] overflow-y-auto w-full  rounded-[20px]">
                        <div @click.prevent="selected_wallet_to_swap_for  = i.img;show_wallet_list2 = false"
                        v-for="i in wallet_lists" :key="i.id" class="flex py-3">
                            <div class="w-[24px] h-[24px] mr-[8px]">
                                <img class="max-w-[24px]" :src="i.img"/>
                            </div>
                            <span class="font-[700] text-[16px] dark:text-[#F8FAFC]  ">{{ i.title }}</span>
                        </div>
                    </div>


                </div>
                <div class="mt-[8px] px-[16px]">
                    <span class="text-[#8E9BAE] text-[14px] font-[400]">Wallet balance </span>
                    <span class="text-[#2873FF] font-[600] text-[14px] ml-[8px]">6,500ETH</span>
                </div>
            </div>

        </div>



         <div class="fixed bottom-5 left-0 w-full px-6">

            <button @click.prevent="toggle_show_successful" class="btn-primary w-full scaling-animation">Swap coin</button>

         </div>


        
    </div>
</template>

<script setup>

const selected_wallet_for_swap = ref('/home/btc2.png')
const selected_wallet_to_swap_for = ref('/home/eth2.png')
const show_wallet_list1 = ref(false)
const show_wallet_list2 = ref(false)


const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}

const wallet_lists = [
    {id:1,title:'BTC',img:'/home/btc2.png',amount:''},
    {id:2,title:'ETH',img:'/home/eth2.png',amount:''},
    {id:3,title:'XRP',img:'/home/xrp.png',amount:''},
]

const toggle_wallet_list1 = ()=>{
    show_wallet_list1.value = !show_wallet_list1.value 
}
const toggle_wallet_list2 = ()=>{
    show_wallet_list2.value = !show_wallet_list2.value 
}
</script>

<style scoped>

.bg-percent{
    background: rgba(142, 155, 174, 0.25);
}

.rotate-up {
  transform: rotate(180deg);
}
</style>

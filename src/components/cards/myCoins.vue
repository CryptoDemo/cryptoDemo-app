<template>
    <div class="mt-[24px]">
                <h2 class="font-[700] px-6 mb-[16px] text-[16px] text-[#10192D] capitalize">My Coins</h2>

                <div class="flex gap-x-[16px] overflow-x-scroll px-6" >

                    <div  v-for="i in coinsCard" :key="i.id">

                        <div  class=" w-[208px] min-h-[168px] relative  rounded-[20px] py-[24px] px-[20px]
                        flex flex-col justify-between overflow-hidden  bg-[#F8FAFC] dark:bg-[#1B2537]">
    
                            <div class="flex  items-center ">
                                <!-- <div v-if="i.id===2" class="h-[40px] w-[40px] bg-[#F59E0B] rounded-full inline-flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clip-path="url(#clip0_1662_36264)">
                                            <path d="M9.43652 21.2732L8.95123 23.0844C8.89765 23.2843 9.01645 23.4901 9.2164 23.5436L10.6653 23.9319C10.7614 23.9576 10.8637 23.9441 10.9498 23.8944C11.036 23.8447 11.0988 23.7628 11.1246 23.6667L11.6098 21.8556L12.3343 22.0497L11.849 23.8608C11.7954 24.0608 11.9142 24.2665 12.1142 24.3201L13.5631 24.7083C13.6591 24.7341 13.7615 24.7206 13.8476 24.6709C13.9338 24.6211 13.9966 24.5392 14.0223 24.4432L14.5076 22.632L14.6293 22.6647C17.5155 23.438 19.9798 22.4941 20.6735 19.905C21.2567 17.7287 20.1164 16.1483 18.4535 15.521L18.4877 15.3935C19.9871 15.4195 21.3043 14.6357 21.7764 12.8738C22.3712 10.6541 21.066 8.86021 18.5232 8.17887L18.3899 8.14315L18.8752 6.33204C18.9009 6.23597 18.8875 6.13362 18.8377 6.04748C18.788 5.96135 18.7061 5.8985 18.61 5.87276L17.1611 5.48453C17.0651 5.45879 16.9627 5.47227 16.8766 5.522C16.7905 5.57172 16.7276 5.65363 16.7019 5.7497L16.2166 7.56081L15.3864 7.33835L15.8717 5.52724C15.8974 5.43118 15.8839 5.32882 15.8342 5.24269C15.7845 5.15655 15.7026 5.09371 15.6065 5.06796L14.2634 4.70808C14.1673 4.68234 14.0649 4.69581 13.9788 4.74554C13.8927 4.79527 13.8298 4.87717 13.8041 4.97324L13.3188 6.78435L10.4197 6.02461C10.3236 5.99887 10.2212 6.01234 10.1351 6.06207C10.049 6.1118 9.98611 6.19371 9.96037 6.28977L9.57641 7.72273C9.52323 7.92122 9.63873 8.12765 9.83868 8.18123L10.9345 8.4671C11.221 8.5459 11.4646 8.73479 11.6123 8.99256C11.76 9.25033 11.7997 9.55604 11.7228 9.84299L9.58559 17.8191C9.50836 18.1073 9.31981 18.353 9.06142 18.5022C8.80303 18.6514 8.49595 18.6918 8.20775 18.6146L7.11971 18.3402C7.02364 18.3144 6.92128 18.3279 6.83515 18.3776C6.74902 18.4274 6.68617 18.5093 6.66043 18.6053L6.2722 20.0542C6.21863 20.2542 6.33742 20.4599 6.53737 20.5135L9.43652 21.2732ZM14.8091 9.49285L17.2997 10.1602C18.6124 10.512 19.1899 11.44 18.8739 12.6194C18.5357 13.8814 17.512 14.3696 15.6255 13.8641L13.7709 13.3672L14.8091 9.49285ZM13.2364 15.3623L15.9023 16.0766C17.5497 16.5181 18.2214 17.5987 17.8549 18.9665C17.4849 20.3473 16.385 20.8243 14.1653 20.2296L12.0818 19.6713L13.236 15.3637L13.2364 15.3623Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1662_36264">
                                            <rect width="24" height="24" fill="white" transform="translate(6.51465 0.302734) rotate(15)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                
                                <div v-else class="h-[40px] w-[40px] bg-[#10192D] rounded-full inline-flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                       <path d="M10.9486 16.4725L4.19824 12.485L10.9477 22L17.7035 12.485L10.9458 16.4725H10.9486ZM11.0512 0L4.29908 11.2044L11.0503 15.1956L17.8016 11.2081L11.0512 0Z" fill="white"/>
                                    </svg>
                                </div> -->

                                <div class="h-[40px] w-[40px]">

                                    <img class="max-w-[40px]" :src="i.img"/>
                                </div>
                                <span class="text-[16px] ml-[16px] font-[600] text-[#10192D] dark:text-[#F8FAFC]">ETH
                                    <span class="text-[#8E9BAE] font-[400]">/USD</span></span>
                            </div>
    
                            <div>
                                <span class="text-[#8E9BAE] font-[400] text-[12px]">3 ETH</span>
                                <div class="flex justify-between">
                                    <h3 class="text-[18px] font-[700] text-[#10192D]">$19,654</h3>
                                    <div class="text-[#22C36B] flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M3.88749 7.50065H6.11249C7.49582 7.50065 8.05832 6.52148 7.37082 5.32565L7.06249 4.79232C6.98749 4.66315 6.84999 4.58398 6.69999 4.58398H3.29999C3.14999 4.58398 3.01249 4.66315 2.93749 4.79232L2.62916 5.32565C1.94166 6.52148 2.50416 7.50065 3.88749 7.50065Z" fill="#22C36B"/>
                                            <path d="M3.66265 4.16576H6.34181C6.50431 4.16576 6.60431 3.99076 6.52098 3.85326L6.25431 3.39492C5.56681 2.19909 4.43348 2.19909 3.74598 3.39492L3.47931 3.85326C3.40015 3.99076 3.50015 4.16576 3.66265 4.16576Z" fill="#22C36B"/>
                                        </svg>
                                        <span class="ml-0.5">+10%</span>
                                    </div>
                                </div>
                            </div>

                            <svg class="absolute -right-4" xmlns="http://www.w3.org/2000/svg" width="148" height="187" viewBox="0 0 148 187" fill="none">
                                <g opacity="0.1" clip-path="url(#clip0_1455_24825)">
                                    <path d="M114.831 21.4915L112.888 24.4781L84.4644 119.5L85.1408 120.751L137.047 107.872L114.831 21.4915Z" fill="#7A899F" fill-opacity="0.4"/>
                                    <path d="M114.83 21.4907L48.8295 81.4838L85.1393 120.75L98.9351 74.6286L114.83 21.4907Z" fill="#7A899F" fill-opacity="0.4"/>
                                    <path d="M82.6471 129.089L81.9055 129.589L71.7807 163.437L71.8496 165.186L134.576 116.231L82.6471 129.089Z" fill="#7A899F" fill-opacity="0.4"/>
                                    <path d="M71.8479 165.184L82.6454 129.087L46.3315 89.834L71.8479 165.184Z" fill="#7A899F" fill-opacity="0.4"/>
                                    <path d="M85.1368 120.766L137.043 107.887L98.9326 74.6445L85.1368 120.766Z" fill="#64748B" fill-opacity="0.4"/>
                                    <path d="M48.8247 81.5001L85.1345 120.766L98.9303 74.645L48.8247 81.5001Z" fill="#64748B" fill-opacity="0.4"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1455_24825">
                                    <rect width="150" height="150" fill="white" transform="translate(42.9863) rotate(16.653)"/>
                                    </clipPath>
                                </defs>
                            </svg>
    
    
                        </div>

                    </div>


                </div>
    </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const coinsCard = [
    {id:1, name:'ETH',paired:'USD', amount:19567,img:'/home/eth2.png'},
    {id:2, name:'BTC',paired:'USD', amount:19567,img:'/home/btc2.png'},
    {id:3, name:'LTC',paired:'USD', amount:19567,img:'/home/eth2.png'},
]

</script>

<style scoped>
.bg-gradient{
    background: linear-gradient(270deg, #38BDF8 -11.75%, #2873FF 119.96%);
    /* box-shadow: 0px 27px 20px rgba(0, 0, 0, 0.02); */
}
.bg-gradient2{
    background: linear-gradient(270deg, #38BDF8 -11.75%, #2873FF 119.96%);
    box-shadow: 0px -1px 2px 0px rgba(42, 51, 64, 0.04), 0px 1px 2px 0px rgba(42, 51, 64, 0.04);
}
.box-shadow{
    box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
}
.card-box-shadow{
    /* box-shadow: 0px 27px 20px 0px rgba(0, 0, 0, 0.02); */
    box-shadow: 0px 27px 20px 0px rgba(0, 0, 0, 0.02);
}
</style>
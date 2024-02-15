<template>

    <div class="min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full">

        <HomeBar  title="Wallet"/>

        <div class="mt-[88px]">

            <CardsBalance/>  


            <div class="mt-[56px] mx-6">

                <div v-for="i in 3" class="mb-[12px] p-[12px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px]">

                    <div class="flex justify-between items-center">
                        <div class="flex">
                            <div class="h-[24px] w-[24px]">
                                <img class="max-w-[24px]" src="/home/eth2.png"/>
                            </div>
                            <div class="ml-[8px]">
                                <span class="dark:text-[#F8FAFC] text-[#10192D] text-[16px] font-[600]">ETH</span>
                                <span class="text-[#8E9BAE] text-[16px] font-[400]">/USD</span>
                            </div>
                        </div>
                        <div>
                            <span class="dark:text-[#F8FAFC] text-[#10192D] text-[16px] font-[600]">3 BTC</span>
                            <span class="text-[#8E9BAE] text-[16px] font-[400]">/$19,654</span>
                        </div>
                    </div>

                    <div class="mt-[4px] flex">
                        <span class="text-[#8E9BAE] text-[12px] font-[400]">1 BTC = $42,236.20</span>
                        <div class="flex items-center ml-[8px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M6.11251 2.49935L3.88751 2.49935C2.50418 2.49935 1.94168 3.47852 2.62918 4.67435L2.93751 5.20768C3.01251 5.33685 3.15001 5.41602 3.30001 5.41602L6.70001 5.41602C6.85001 5.41602 6.98751 5.33685 7.06251 5.20768L7.37084 4.67435C8.05834 3.47852 7.49584 2.49935 6.11251 2.49935Z" fill="#E33E38"/>
                                <path d="M6.33784 5.83424H3.65867C3.49617 5.83424 3.39618 6.00924 3.47951 6.14674L3.74617 6.60508C4.43368 7.80091 5.56701 7.80091 6.25451 6.60508L6.52118 6.14674C6.60034 6.00924 6.50034 5.83424 6.33784 5.83424Z" fill="#E33E38"/>
                            </svg>

                            <span class="font-[400] text-[#E33E38] text-[12px] ml-0.5">-10%</span>

                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-x-[8px] mt-[14px]">

                        <button  class="bg-[#fff] dark:bg-[#10192D] btn-shadow min-h-[48px] px-[16px] py-[12px] text-[14px] font-[700] text-[#2873FF] inline-flex justify-center
                        items-center rounded-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M3.83301 14.168V15.8346C3.83301 16.2767 4.0086 16.7006 4.32116 17.0131C4.63372 17.3257 5.05765 17.5013 5.49967 17.5013H15.4997C15.9417 17.5013 16.3656 17.3257 16.6782 17.0131C16.9907 16.7006 17.1663 16.2767 17.1663 15.8346V14.168" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33301 9.16797L10.4997 13.3346L14.6663 9.16797" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 3.33398V13.334" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="ml-[8px]">Buy</span>
                        </button>
                        <button  class="bg-[#fff] dark:bg-[#10192D] btn-shadow min-h-[48px] px-[16px] py-[12px] text-[14px] font-[700] text-[#2873FF] inline-flex justify-center
                        items-center rounded-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M3.83301 5.83203V4.16536C3.83301 3.72334 4.0086 3.29941 4.32116 2.98685C4.63372 2.67429 5.05765 2.4987 5.49967 2.4987H15.4997C15.9417 2.4987 16.3656 2.67429 16.6782 2.98685C16.9907 3.29941 17.1663 3.72334 17.1663 4.16536V5.83203" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33301 10.832L10.4997 6.66536L14.6663 10.832" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.5 16.666V6.66602" stroke="#2873FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="ml-[8px]">Sell</span>
                        </button>
                        <button  class="bg-[#fff] dark:bg-[#10192D] btn-shadow min-h-[48px] px-[16px] py-[12px] text-[14px] font-[700] text-[#2873FF] inline-flex justify-center
                        items-center rounded-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.50853 17.0832L3.3252 12.9082" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.50879 2.91602V17.0827" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.4912 2.91602L16.6745 7.09102" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.4912 17.0827V2.91602" stroke="#2873FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="ml-[8px]">Swap</span>
                        </button>

                    </div>

                </div>

            </div>


            <h3 class="text-[16px] mt-[24px] px-6 font-[700] dark:text-[#F8FAFC] text-[#10192D]">Transaction history</h3>

            <div class="mt-[16px] mx-6">



                <div v-for="i in 2" class=" p-[12px] bg-[#F5F9FF] dark:bg-[#1B2537] rounded-[12px] mb-[12px]">

                    <h3 class="dark:text-[#F8FAFC] text-[#10192D] font-[700] text-[14px] ">January 20, 2024</h3>

                    <div v-for="i in transaction_lists">
                        <div class="py-[8px] dark:border-[#2A3340]" 
                        :class="i.id === transaction_lists.length ?'border-none':'border-b'">
                            <div class="flex justify-between items-center text-[#8E9BAE]">
                                <span class="dark:text-[#F8FAFC]  text-[#10192D] font-[600] text-[14px] capitalize">{{ i.status }} </span>
                                <span class="time-color text-[rgba(142, 155, 174, 0.45)]">13:53</span>
                            </div>
        
                            <div class="flex justify-between items-center mt-[8px]">
                                <div class="flex items-center">
                                    <div class="h-[18px] w-[18px]">
                                        <img class="max-w-[18px]" :src="i.img"/>
                                    </div>
                                    <span class="font-[400] text-[14px] text-[#8E9BAE] ml-1 ">{{i.coin_name}}/USD</span>
                                </div>
                                <span class="font-[400] text-[14px]  dark:text-[#fff] text-[#8E9BAE]">2.8{{i.coin_name}}/$2.8</span>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>



    </div>

</template>


<script setup>

const transaction_lists = [
    {id:1,status:'Recieved',img:'/home/btc2.png',coin_name:'BTC'},
    {id:2,status:'sold',img:'/home/eth2.png',coin_name:'ETH'},
    {id:3,status:'converted',img:'/home/dash.png',coin_name:'XRP'},
]
</script>




<style scoped>

.btn-shadow{
    box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
}
.time-color{
    color: rgba(142, 155, 174, 0.45);


}
</style>
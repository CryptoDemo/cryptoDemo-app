<template>

    <div class=" h-screen pb-52 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Buy coin"/>

        <div class="mt-[80px]">

            <CardsProfileStatus />

        </div>


        <div class="flex justify-between items-center mt-[34px]">

            <h3 class="text-[16px]  font-[600] dark:text-[#F8FAFC] text-[#10192D]">Trade chat</h3>
            <span class="text-[14px] text-[#8E9BAE] font-[700]">Trade ends in - <span class="text-[#2873FF]">29:30</span> </span>

        </div>

        <p class="mt-[8px]">Read the trade chat to understand the terms of this transaction.</p>

        <div class="mt-[37px]">
            <div v-for="i in chat_messages">

                <div  v-if="i.status === 'admin'">
    
                    <div class="bg-[#1B2537] rounded-e-[8px] rounded-bl-[8px] px-[12px] py-[8px] text-[#8E9BAE] text-[14px] max-w-[260px]">
                        Trade instruction from seller appear here
                    </div>
    
                    <span class="text-[12px] font-[400] text-[#8E9BAE] mt-[4px] pl-[6px]">Demo team • 4:59 PM</span>
                </div>
    
    
    
                <div v-if="i.status === 'buyer'" class="flex justify-end">
    
                    <div class="flex flex-col mt-[10px] items-end">
                        
                        <div class="bg-[#1671D9] rounded-s-[8px] rounded-tr-[8px] px-[12px] py-[8px] text-[#fff] text-[14px] max-w-[260px]">
                            Trade instruction from seller appear here
                        </div>
        
                        <span class="text-[12px] mt-[4px] font-[400] text-[#8E9BAE] ">5:05PM</span>
                    </div>
                    <div class="flex flex-col justify-end items-end pb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                      <path
                                          d="M5 12L10 17L20 7"
                                          stroke="#2873FF"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-dasharray="48"
                                          stroke-dashoffset="48"
                                          id="checkmark"
                                      />
                        </svg>
                    </div>
                </div>


            </div>


        </div>


            <div class="fixed bottom-0 left-0 bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6 pt-[12px] pb-[20px]">

                <div class="relative">
                    <input class="input" placeholder="Type in here"/>
                    <div class="absolute bottom-[15px] right-4 flex items-center">

                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.66992 18.9505L7.59992 15.6405C8.38992 15.1105 9.52992 15.1705 10.2399 15.7805L10.5699 16.0705C11.3499 16.7405 12.6099 16.7405 13.3899 16.0705L17.5499 12.5005C18.3299 11.8305 19.5899 11.8305 20.3699 12.5005L21.9999 13.9005" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
    
                        <svg class="ml-[12px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.1094 13.6505L13.6894 10.0605" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div class="flex w-full mt-[16px] gap-[21px]">
                    <button  @click.prevent="navigateTo('/dashboard/')" class="btn-border w-full">Cancel</button>
                    <button v-show="reveal === 1"  @click.prevent="navigateTo('/dashboard/marketplace/market_buy/review')" 
                    class="btn-primary w-full">I have paid</button>
                    <button  v-show="reveal === 2" @click.prevent="navigateTo('/dashboard/marketplace/market_buy/review')" 
                    class="btn-primary w-full">Review</button>
                    <button v-show="reveal === 3" @click.prevent="navigateTo('/dashboard/marketplace/market_buy/dispute')" 
                    class="btn-primary w-full">Dispute</button>
                </div>



            </div>


          
    </div>

</template>


<script setup>

const reveal = ref(3)

const chat_messages  = [
    {status:'admin',text:'Trade instruction from seller appear here'},
    {status:'admin',text:'Trade instruction from Demo'},
    {status:'admin',text:'The seller’s account number will be shared with you once they accept this exchange.'},
    {status:'buyer',text:'Any inquiry from the buyer'},
    {status:'admin',text:'The seller’s account number will be shared with you once they accept this exchange.'},
     
]
</script>



<style>
    #checkmark {
        animation: drawCheckmark 1s ease-in-out forwards;
    }

    @keyframes drawCheckmark {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
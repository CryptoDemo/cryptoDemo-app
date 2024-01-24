<template>

    
        <div  class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">
    
           
            <Appbar link="/dashboard" title="Notification Setting"  />
            
            <div class="pt-[72px]">

                <div v-for="item in notification_settings" class="py-[12px] flex justify-between items-start
                 border-[#E2E8F0] border-b dark:border-[#1B2537]">
    
                    <div class="">
                           <div class="flex justify-between items-center">
                               <h4 class="text-[16px] font-[500] dark:text-[#F8FAFC]">{{ item.title }}</h4>
                               <span v-if="item.recommended" class="capitalize text-[#89B2FF] text-xs 
                               font-bold relative left-5">recommended</span>
                           </div>
                           <p class="font-[400] text-[#8E9BAE] text-sm">{{ item.desc }} </p>
                    </div>
    
                    <div>
                        <InputRadio :toggleValue="item.status" @toggleChanged="toggle_notification" />
                    </div>
    
                </div>
            </div>
         
        </div>
    
    </template>

<script setup>

const  notification_settings  = [
    {id:1, title:'SMS', desc:'Receive SMS notifications on my mobile ', status:false,recommended:false},
    {id:2, title:'Push notification', desc:'Send me push notifications on my app ', status:false,recommended:true},
    {id:3, title:'Deposit confirmed', desc:'Alert me when the crypto is deposited successfully into my wallet ', status:false,recommended:false},
    {id:5, title:'Deposit pending', desc:'Alert me when the deposit to my wallet is pending', status:false,recommended:false},
    {id:6, title:'Crypto purchased', desc:'Alert me when I receive purchased crypto in my wallet', status:false,recommended:false},
    {id:7, title:'Crypto sold', desc:'Alert me when my crypto is sold to the buyer', status:false,recommended:false},
    {id:8, title:'Crypto sendout', desc:'Alert me when my crypto is sent out from my wallet', status:false,recommended:false},
    {id:9, title:'Incoming trade', desc:'Alert me when I receive trade request', status:false,recommended:false},
    {id:10, title:'Partner pays for trade', desc:'Alert me when buyer pays for trade', status:false,recommended:false},
    {id:11, title:'Profile view', desc:'Alert me when someone views my profile', status:false,recommended:false},
    {id:12, title:'Trade cancelled/expired', desc:'Alert me on trade cancellation by either party', status:false,recommended:false},
    {id:12, title:'Chat message', desc:'Alert me on new trade messages and attachments', status:false,recommended:false},
    {id:12, title:'Moderator  message', desc:'Alert me on new trade moderator messages or attachments.', status:false,recommended:false},
    {id:12, title:'Buyer starts uploading gift cards', desc:'Alert me when buyer uploads gift cards', status:false,recommended:false},
    {id:12, title:'Funds reserved for trade', desc:'Alert me when funds are reserved for trade', status:false,recommended:false},
    {id:12, title:'Bitcoin price change', desc:'Alert me when price of coin changes by minimum of 5% ', status:false,recommended:false},
    {id:12, title:'Tether price change', desc:'Alert me when price of coin changes by minimum of 5% ', status:false,recommended:false},
]

const toggle_notification=()=>{
    notification_settings.status = !notification_settings.status
}
</script>
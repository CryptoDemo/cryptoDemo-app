<template>

    
        <div  class="px-6 pb-24  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">
    
           
            <Appbar link="/dashboard" title="Notification Setting"  />
            
            <div class="pt-[72px]">

                <div v-for="item in notification_settings" class="py-[12px] flex justify-between items-start
                 border-[#E2E8F0] border-b dark:border-[#1B2537]">
    
                    <div class="">
                           <div class="flex justify-between items-center">
                               <h4 class="text-[16px] font-[500] dark:text-[#F8FAFC]">{{ item.title }}</h4>
                               <!-- <span v-if="item.recommended" class="capitalize text-[#89B2FF] text-xs 
                               font-bold relative left-2">recommended</span> -->
                           </div>
                           <p class="font-[400] text-[#8E9BAE] text-sm">{{ item.desc }} </p>
                    </div>
    
                    <div>
                        <InputRadio :toggleValue="item.status"
                          @toggleChanged="v => toggle_notification(item.value, v)" />
                    </div>
    
                </div>
            </div>
         
        </div>
    
</template>

<script setup>

const pinia = useStore();
const toast = useToast();

const status = ref(null)

status.value = pinia.state.user.settings.notifications
// console.log(status.value.notify_me_on_transactions)


const  notification_settings  = [

    {id:1, title:'Transactions',value:'notify_me_on_transactions', desc:'Receive SMS notifications on my mobile ',
     status: status.value?.notify_me_on_transactions, recommended:false},

    // {id:2, title:'Push notification',value:'notify_me_on_', desc:'Send me push notifications on my app ', status:false,recommended:true},
    {id:3, title:'Deposit confirmed',value:'notify_me_on_deposit_confirmed', desc:'Alert me when the crypto is deposited successfully into my wallet ', 
    status:status.value.notify_me_on_deposit_confirmed,recommended:false},

    {id:5, title:'Deposit pending',value:'notify_me_on_deposit_pending', desc:'Alert me when the deposit to my wallet is pending', 
    status:status.value.notify_me_on_deposit_pending,recommended:false},

    {id:6, title:'Crypto purchased',value:'notify_me_on_crypto_purchased', desc:'Alert me when I receive purchased crypto in my wallet',
     status:status.value.notify_me_on_crypto_purchased,recommended:false},

    {id:7, title:'Crypto sold',value:'notify_me_on_crypto_sold', desc:'Alert me when my crypto is sold to the buyer', 
    status:status.value.notify_me_on_crypto_sold,recommended:false},

    {id:8, title:'Crypto sendout',value:'notify_me_on_crypto_sendout', desc:'Alert me when my crypto is sent out from my wallet', 
    status:status.value.notify_me_on_crypto_sendout,recommended:false},

    {id:9, title:'Incoming trade',value:'notify_me_on_incoming_trade', desc:'Alert me when I receive trade request',
     status:status.value.notify_me_on_incoming_trade,recommended:false},

    // {id:10, title:'Partner pays for trade',value:'notify_me_on_', desc:'Alert me when buyer pays for trade', status:false,recommended:false},
    {id:11, title:'Profile view',value:'notify_me_on_profile_view', desc:'Alert me when someone views my profile', 
    status:status.value.notify_me_on_profile_view,recommended:false},

    {id:12, title:'Trade cancelled/expired',value:'notify_me_on_trade_canceled_or_expired', desc:'Alert me on trade cancellation by either party',
     status:status.value.notify_me_on_trade_canceled_or_expired,recommended:false},

    {id:12, title:'Chat message',value:'notify_me_on_chat_message', desc:'Alert me on new trade messages and attachments', 
    status:status.value.notify_me_on_chat_message,recommended:false},

    {id:12, title:'Moderator  message',value:'notify_me_on_moderator_message', desc:'Alert me on new trade moderator messages or attachments.', 
    status:status.value.notify_me_on_moderator_message,recommended:false},
    
]

// const toggle_notification=(v)=>{

//     notification_settings.status = v
//     console.log(notification_settings.status)
// }

const toggle_notification = async (value, status) => {
   

    // const settings = {
    //     notify_me_on_transactions:false,
    //     notify_me_on_deposit_confirmed:false,
    //     notify_me_on_deposit_pending: false,
    //     notify_me_on_crypto_purchased:false,
    //     notify_me_on_crypto_sold:false,
    //     notify_me_on_crypto_sendout:false,
    //     notify_me_on_incoming_trade:false,
    //     notify_me_on_profile_view: false,
    //     notify_me_on_trade_canceled_or_expired: false,
    //     notify_me_on_chat_message:false,
    //     notify_me_on_moderator_message:false,
    // }
    const settings = pinia.state.user.settings.notifications


    const setting_to_update = {[`${value}`]: true}

    const all_settings = {...settings, ...setting_to_update}

    const setting_add_to_info = {settings:{
            notifications:{
                ...all_settings
            }
        }
    }
    
    const userToken = `${pinia.state.user.token}`;
    const info = { ...pinia.state.user, ...setting_add_to_info };
    delete info.token;
    
    console.log(info)

    try {

        const data = await fetch(`${baseURL}user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${pinia.state.user?.token}`
            },
            body: JSON.stringify(info)
        }).then(res => res.json());

        if (data.success) {
            const user = { ...info, token: userToken };

            console.log(user)
            pinia.setUser(user);

            // Update the notification status in the local state
            // const  apiFetchedNofyVal = data.settings.notifications
            // const index = apiFetchedNofyVal.findIndex(item => item === value);

            // console.log(index)
            // // if (index !== -1) {
            //     notification_settings[index].status = status;
            // // }


        } else {
            // Handle error response
            console.error('Failed to update notification settings:', data.message);
            toast.message(`${data.message}`, {
                position: 'top',
                timeout: 2000,
            })
        }
    } catch (error) {
        console.error('Error updating notification settings:', error);
        toast.message(`${error}`, {
                position: 'top',
                timeout: 2000,
            })
    }
}
</script>
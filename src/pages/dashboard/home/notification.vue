<template>

    <div class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full px-6 ">

        <Appbar link="/dashboard" title="Notification"/>

        <div class="pt-[70px]">

            <div v-for="i in notificationLogs" :key="i.id">  
                <div class=" text-[14px] border-b border-[#F1F5F9] dark:border-[#1B2537] py-[12px]">
                    <h3 class="text-[#10192D] font-[600] ">Security questions set</h3>
                    <div class="text-[#8E9BAE]  mt-[4px]">
                        <span class="font-[600]">{{ getFormattedDate(i.timestamp) }}</span>
                        <span class="ml-[8px] font-[600]">{{ getFormattedTime(i.timestamp) }}</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>


<script setup>
 import './assets/css/maz-ui-variables.css'
import MazInputCode from 'maz-ui/components/MazInputCode'

import { useInfiniteScroll } from '@vueuse/core'

const pinia = useStore()
const toast = useToast()
const pageNumber = ref(1);
const notificationLogs = ref([]);
// const updatedActivityLog = ref({id: 1, name: "blal", username: "slfjal"});

const listEl = ref(null);
const notificationLogsToShow = ref(15)
const fetchingData = ref(false)




const fetchNotificationLogsFromDB = async ()=>{
    try{
        const data = await fetch(`${baseURL}notification/${pageNumber.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${pinia.state.user?.token}`
            }
        }).then(res=>res.json());
        
        if(data.success){
            const mynotification_logs = filterByKey("id",[...data.data?.result, ...notificationLogs.value]);
            notificationLogs.value = mynotification_logs;
            pinia.setNotificationLogs(mynotification_logs);
    
                console.log(mynotification_logs)
            // tokens_list.map((item,index)=>{
            //     if(item.id==updatedNotificationLog.id){
            //         tokens_list[index] = updatedNotificationLog;
            //     }
            // });
            // pinia.setNotificationLogs(tokens_list);
        
        }else{
            toast.message(`${data.message}`, {
                position: 'top',
                timeout: 2000,
            })
        }


    }catch(error){
        console.log(error)
        toast.message(`${error}`, {
            position: 'top',
            timeout: 2000,
        });
    }
}

// const getNotificationlogsOnScroll = async ()=>{
//     pageNumber.value += 1;
//     fetchingData.value = true; 
//      await new Promise ((res)=> setTimeout(res,2000))
//     const newuser = fetchNotificationLogsFromDB();
//   //  const newOrderList = await getOrders(
//   //   numberOfOrdersToShow,
//   //   numberOfOrdersToShow.valueOf.length
//   //  )
// //   const orders = ref([1,3,5,3,5,3,8,8,0,89,9999,3,4,5,2,3,2,3,2,3,2,1,1,2,3,3,4,4,4])

//    fetchingData.value= false

// //    orderList.value.push(...orders.value)
// }

// useInfiniteScroll(
//   listEl,

//   async ()=>{
//     await getNotificationlogsOnScroll()
//   },

//   {distance: 100}
// )

onBeforeMount(async()=>{
    if(pinia.state.notificationLogs.length != []){
        notificationLogs.value = pinia.state.notificationLogs;
        console.log(pinia.state.notificationLogs)
    }else{
        fetchNotificationLogsFromDB();
    }
})
</script>
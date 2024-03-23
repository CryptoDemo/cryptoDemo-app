<template>

    <div class="px-6  bg-[#ffff] dark:bg-[#10192D] h-screen overflow-y-auto">
        <Appbar link="/dashboard" title="Activity" />

        <div ref="listEl" class="mt-[80px]">

            <div v-for="(i,index) in activityLogs" :key="i.id" class="py-[12px] border-b border-[#F1F5F9] dark:border-[#2A3340]">
                <div class=" border-[#F1F5F9] dark:border-[#2A3340]">
                    <h3 class="text-[#10192D] dark:text-[#F8FAFC]  text-sm font-[600]">{{ i.title }}</h3>
                    <div class="text-[#8E9BAE] text-sm font-[600]">
                        <span>{{ i.timestamp}}</span>
                        <span class="pl-[8px]">{{ i.timestamp }}</span>
                    </div>
                </div>

                <div>
                    <p class="text-sm font-[400]">{{ i.description }} 
                    </p>
                    <span class="text-[#8E9BAE] text-sm">IP: 2c0f:2a80:b9:9510:e8bc:5925:358a:9562</span>
                </div>
            </div>

            <div v-if="fetchingData" class="flex justify-center items-center">
                <Loader/>
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
const activityLogs = ref([]);
// const updatedActivityLog = ref({id: 1, name: "blal", username: "slfjal"});

const listEl = ref(null);
const activityLogsToShow = ref(15)
const fetchingData = ref(false)


//display the number of orders to display
// const numberOfOrdersToShow = 15

//fetch the range of values of orders to display
const orderList = ref([]);



const fetchActivityLogsFromDB = async ()=>{
    try{
        const data = await fetch(`${baseURL}activity-log/${pageNumber.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${pinia.state.user.token}`
            }
        }).then(res=>res.json());
        
        if(data.success){

            const myactivity_logs = filterByKey("id",[...data.data.result, ...activityLogs.value]);
            activityLogs.value = myactivity_logs;
            pinia.setActivityLogs(myactivity_logs);


            // tokens_list.map((item,index)=>{
            //     if(item.id==updatedActivityLog.id){
            //         tokens_list[index] = updatedActivityLog;
            //     }
            // });

            // pinia.setActivityLogs(tokens_list);

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

// const getActivitylogsOnScroll = async ()=>{
//     pageNumber.value += 1;
//     fetchingData.value = true; 
//      await new Promise ((res)=> setTimeout(res,2000))
//     const newuser = fetchActivityLogsFromDB();
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
//     await getActivitylogsOnScroll()
//   },

//   {distance: 100}
// )
onMounted(async()=>{
    if(pinia.state.activityLogs.length){
        activityLogs.value = pinia.state.activityLogs;
    }else{
        await fetchActivityLogsFromDB();
    }
})
</script>
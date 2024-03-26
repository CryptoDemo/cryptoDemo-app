<template>
    <div ref="headerSection" class="h-screen  overflow-y-auto bg-[#ffff]   dark:bg-[#10192D]">

            <home v-if="useCurrentNavMenu.currentNavMenu === 'home'" />
            <wallet v-else-if ="useCurrentNavMenu.currentNavMenu === 'wallet' " />
            <marketplace v-else-if="useCurrentNavMenu.currentNavMenu === 'marketplace'" />
            <exchange v-else-if ="useCurrentNavMenu.currentNavMenu === 'trade'" />
            <account v-else />


        <div class="px-[30px] min-h-[56px] nav-shadow  z-40 text-gray-400 fixed bottom-0 left-0 w-full
         bg-[#f7f6f6] dark:bg-[#10192D] shadow-2xl">
            <div class="flex justify-between items-center  w-full  py-[15.87px] shadow-[#262c33]">


                <div v-for="item in navItems" >
    
                    <button  @click.prevent="toggleCurrentNavMenu(item.title)"  
                    :class="useCurrentNavMenu.currentNavMenu===item.title?' text-[#2873FF]  ':' text-[#8E9BAE]'"
                    class="flex flex-col justify-center items-center  w-full rounded-lg transition ease-in-out delay-75">
                        <Icon :name= "item.icon" size="28" />
                    </button>

                </div>
               
            </div>
        </div>
           
    </div>

</template>


<script setup>

import home from "@/pages/dashboard/home/index.vue";
import marketplace from "@/pages/dashboard/marketplace/index.vue";
import wallet from "@/pages/dashboard/wallet/index.vue";
import exchange from "@/pages/dashboard/trade/index.vue";
import account from "@/pages/dashboard/account/index.vue";


import {addToken,db} from '@/composables/utils/dexieDB/index'

import { useStore } from "@/stores/index"

const headerSection = ref(null)
const useCurrentNavMenu = useStore()


defineComponent({
    home,
    marketplace,
    wallet,
    exchange,
    account,
})

    
    
definePageMeta({
     layout: 'custom',
 })

//   const currentNavMenu = ref("home")
   
const pinia = useStore()
const toast = useToast()
const token_networks = ref(pinia.state?.tokenNetworks)
const pageNumber = ref(1)

const storedTokenData = ref([]);

const symbolPrice = ref()
const error = ref()



   const navItems = [
        {
            id:1,
            title:"home",
            icon:'solar:home-angle-2-bold'

        },
        {
            id:2,
            title:"wallet",
            icon:'solar:wallet-money-bold'
        },
        {
            id:3,
            title:"marketplace",
            icon:'solar:shop-outline'
        },
        {
            id:4,
            title:"trade",
            icon:'tabler:arrows-right-left'
        },
        {
            id:5,
            title:"account",
            icon:'ic:round-grid-view'
        }
    ]

    const toggleCurrentNavMenu =(v)=>{
        useCurrentNavMenu.currentNavMenu = v
        if( useCurrentNavMenu.currentNavMenu === 'account'){
            if(useCurrentNavMenu.state.isAuthenticated){
                useCurrentNavMenu.currentNavMenu = 'account'
            }else{
                navigateTo('/login')

            }
        }
    }


    onBeforeMount(()=>{

        watch(()=>  useCurrentNavMenu.currentNavMenu,(newval)=>{
    
            if( newval === 'account'){
    
                if(useCurrentNavMenu.state.isAuthenticated){
                    useCurrentNavMenu.currentNavMenu = 'account'
                }else{
                    useCurrentNavMenu.currentNavMenu = 'home'
                    if(pinia.state.isPinSet){

                        navigateTo('/login/login_with_pin')
                    }else{

                        navigateTo('/login')
                    }
    
                }
    
            }
        } )
    })


const router = useRouter()





const fetchSymbolPrice = async(symbol) =>{

    try{
        error.value = null;
        
        const worker = new Worker('/worker/index.js');
        worker.postMessage({ symbol}); // Replace 'BTCUSDT' with your desired symbol
        
        worker.onmessage = (event) => {
          if (event.data.error) {
            error.value = event.data.error;
    
          } else {
            symbolPrice.value = event.data;
            pinia.setTokenPrices(symbolPrice.value)
          }
    
          worker.terminate();
        };
    }catch(e){
        console.log(e)
    
    }
}


onMounted(async () => {
    try {
        const data = await fetch(`${baseURL}blockchain/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${pinia.state.user?.token}`
            }
        }).then(res => res.json());

        console.log(data.success);

        if (data.success) {
            const fetchedData = data.data;

            const storedDataIds = pinia.state.tokenNetworks.map(item => item.id);


            // Check if there are any new items in the fetched data
            const newItems = fetchedData.filter(item => !storedDataIds.includes(item.id));


            if (newItems.length > 0) {
                console.log('fetching')
                pinia.setTokenNetworks(fetchedData);
            }
        } else {
            toast.message(`${data.message}`, {
                position: 'top',
                timeout: 2000,
            });
        }
    } catch (error) {
        console.log(error);
        toast.message(`${error}`, {
            position: 'top',
            timeout: 2000,
        });
    }


// fetching token lists
    try {
        const data = await fetch(`${baseURL}token/all/${pageNumber.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${pinia.state.user?.token}`
            }
        }).then(res => res.json());
    
        console.log(data.success);
    
        if (data.success) {
            const fetchedTokens = data.data.result;
    
            const storedTokenIds = pinia.state.tokenLists.map(item => item.id);
    
    
            // Check if there are any new items in the fetched data
            const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));
    

    
            if (newItems.length > 0) {
                console.log('fetching')
                pinia.setTokenLists(fetchedTokens);
            }
        } else {
            toast.message(`${data.message}`, {
                position: 'top',
                timeout: 2000,
            });
        }
    } catch (error) {
        console.log(error);
        toast.message(`${error}`, {
            position: 'top',
            timeout: 2000,
        });
    }



let symbol = pinia.state.tokenLists.map(coin => coin.symbol+'USDT');
symbol = symbol.filter(s=>s!='USDTUSDT');


// getSymbolPrice(JSON.stringify(symbol))

//     .then(prices => {
//         console.log('PRICES: ',prices);
//     })
//     .catch(error => {
//         console.error('Error:', error);
// });

fetchSymbolPrice(JSON.stringify(symbol))


});






// // Data property to track the number of route navigations
// const routeNavigations = ref(0);

// // Function to refresh the user using the API
// const refreshUser = async () => {
//   try {
//     // Make a request to the refresh endpoint
//     const response = await fetch('https://cryptodemoapi-production.up.railway.app/v1/user/refresh', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `${pinia.state.user?.token}`
//       },
//       // Add any necessary request body if required
//     });

//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error('Failed to refresh user');
//     }

    
//     // Parse the response JSON
//     const data = await response.json();

//         if (data.success) {
//                 console.log(data.data)
//                 const refreshedUserData = data.data;
//                 const newuserinfo = {...pinia.state.user, ...refreshedUserData}
//                 pinia.setUser(newuserinfo)
                
//         } else {
//                 toast.message(`${data.message}`, {
//                     position: 'top',
//                     timeout: 2000,
//                 });
//         }

//     // Handle the response data according to your application logic
//     console.log('User refreshed:', data);
//   } catch (error) {
//     // Handle any errors that occur during the request
//     console.error('Error refreshing user:', error);
//   }
// };



// // Hook to listen to route changes
//     watchEffect(() => {
//     // Hook to listen to route changes
//     router.afterEach(() => {
//     // Increment the route navigation count
//     routeNavigations.value++;

//     // Check if the user has navigated more than 4 times
//     if (routeNavigations.value > 4) {
//         // Make a request to refresh the user
//         refreshUser().then(() => console.log('User refreshed'));
//     }
//     });
// });
    
</script>


<style scoped>
.glass-bg{
    background: rgba(0,15,36,0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0,15,36,0.25);
}
.nav-shadow{
      box-shadow: 0px -4px 50px 0px rgba(100, 116, 139, 0.08) !important;
}
</style>
   
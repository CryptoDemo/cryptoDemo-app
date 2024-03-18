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

            console.log('storedDataIds',storedDataIds)

            // Check if there are any new items in the fetched data
            const newItems = fetchedData.filter(item => !storedDataIds.includes(item.id));

            console.log('newItems',newItems)

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
    
            console.log('storedTokenIds',storedTokenIds)
    
            // Check if there are any new items in the fetched data
            const newItems = fetchedTokens.filter(item => !storedTokenIds.includes(item.id));
    
            console.log('newItems',newItems)
    
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

    const symbol = pinia.state.tokenLists.map(coin => coin.symbol+'USDT');

console.log(symbol)

    // try {
    //     const data = await fetch(`https://api.binance.com/api/v3/ticker/price?symbols=[${symbol}]`, {
    //         method: 'GET',
           
    //     }).then(res => res.json());
    
    //     console.log('success');
    
       
    // } catch (error) {
    //     console.log(error);
    //     toast.message(`${error}`, {
    //         position: 'top',
    //         timeout: 2000,
    //     });
    // }
    
});




    
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
   
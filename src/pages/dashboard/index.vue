<template>
    <div class="h-screen overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]">


        <KeepAlive>
            <home v-if="useCurrentNavMenu.currentNavMenu === 'home'" />
            <marketplace v-else-if ="useCurrentNavMenu.currentNavMenu === 'marketplace'" />
            <wallet v-else-if ="useCurrentNavMenu.currentNavMenu === 'wallet' " />
            <exchange v-else-if ="useCurrentNavMenu.currentNavMenu === 'exchange'" />
            <account v-else />
        </KeepAlive>


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
import exchange from "@/pages/dashboard/exchange/index.vue";
import account from "@/pages/dashboard/account/index.vue";

import { useStore } from "@/stores/index"

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
   
  


   const navItems = [
        {
            id:1,
            title:"home",
            icon:'solar:home-angle-2-bold'

        },
        {
            id:2,
            title:"marketplace",
            icon:'solar:wallet-money-bold'
        },
        {
            id:3,
            title:"wallet",
            icon:'solar:shop-outline'
        },
        {
            id:4,
            title:"exchange",
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
    }

    
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
   
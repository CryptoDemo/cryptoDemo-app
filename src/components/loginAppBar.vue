<template>

    <div class="dark:bg-[#10192D] bg-white fixed w-full top-0 left-0 px-6 py-[10px]">
    
        <div class="flex justify-between items-center dark:bg-[#10192D] w-full">
            <button @click.prevent="!(props.link.length) ? navigate() : $router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
            items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                <Icon name="mdi:arrow-left" size="24"/>
            </button>
          
        </div>
    
    </div>
    
    </template>
    
    <script setup>
    const pinia = useStore()
    
    const props = defineProps(
        {
            link:{
            type:String,
            },
           
        }
    )

    const navigate = ()=>{

        if(pinia.state.user){
            pinia.currentNavMenu = 'home'
            pinia.clearUser()
        }
        navigateTo('/dashboard')

    }
    
    </script>
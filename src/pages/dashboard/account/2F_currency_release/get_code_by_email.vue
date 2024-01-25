<template>

    <Successful v-if="show_successful" title="sucessful" 
    subtitle="Your two-factor authentication for transactions was set successfully!"/>
    
        <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">
    
            <div class="z-50 fixed top-0 left-0 py-[10px] px-6 grid grid-cols-8 bg-[#ffff] w-full   dark:bg-[#10192D] items-center">
                <div>
                    <button @click.prevent="navigateTo(`/dashboard/`)" type="button" class=" bg-[#F8FAFC]  font-medium 
                    rounded-2xl text-sm p-[12px] text-center inline-flex 
                    items-center   text-black dark:bg-[#1B2537] dark:text-white">
                        <Icon name="mdi:arrow-left" size="24" />
                    </button>
                </div>

                <span class=" col-span-6 dark:text-white font-bold text-end">Two-factor currency release</span>

            </div>
    
            <p class="pt-[72px] text-[#8E9BAE] text-center">To set up, enter code sent to your email </p>
    
            <div class="mt-[40px] px-5 flex flex-col justify-center items-center">
                       
                <InputOtp :length="4" @entered=" v => my_pin = v"/> 
            </div>
                <p class="mt-[32px] text-sm text-[#10192D] dark:text-[#F8FAFC] text-center">Resend code in 
                    <span class="text-[#2873FF]">29:58</span></p>  
    
             <a class="flex justify-center text-center mt-5 text-[#2873FF] font-[400] text-sm">Paste code</a>
    
    
             <div class="fixed bottom-5 left-0 w-full px-6">
                    <button  @click.prevent="toggle_show_successful" 
                    class="btn-primary mt-[57px] w-full">continue</button>
             </div>
    
    
        </div>
    </template>
    
    <script setup>
    
    const my_pin = ref(null)
    const show_successful = ref(false)
    
    const toggle_show_successful = ()=>{
        show_successful.value = true
        setTimeout(() => {
            navigateTo('/dashboard')
        }, 1000);
    }
    </script>
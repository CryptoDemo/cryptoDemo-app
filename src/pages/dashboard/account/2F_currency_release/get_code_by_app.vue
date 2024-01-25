<template>

    <Successful v-if="show_successful" title="sucessful" 
    subtitle="Your two-factor authentication for login was set successfully!"/>
    
        <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">
    
            <Appbar link="/dashboard/account/2FA_login" title="Two-factor login"  />
    
            <p v-if="reveal === 1" class="pt-[72px] text-[#8E9BAE] text-center">Copy and paste this code into your 2FA app</p>
            <p v-if="reveal === 2" class="pt-[72px] text-[#8E9BAE] text-center">Enter code that appear on your 2FA app</p>

            <div v-if="reveal === 1" class="mt-[40] pt-[40px]" >
                <p class="text-[18px] font-bold rounded-2xl p-4 py-4 border-[#E2E8F0] text-center dark:border-[#1B2537] 
                border 
                text-[#10192D] dark:text-[#E2E8F0]">WYTIDNBYG65</p>
            </div>
    
            <div v-if="reveal === 2" class="mt-[40px] px-5 flex flex-col justify-center items-center">
                       
                <InputOtp :length="4" @entered=" v => my_pin = v"/> 
            </div>

            <p v-if="reveal === 1" class="text-sm text-center mt-[40px]">Use <span class="text-[#2873FF] font-bold">Google Authenticator </span>or 
                <span class="text-[#2873FF] font-bold">Authy</span></p>
            <p  v-if="reveal === 2"  class="mt-[32px] text-sm text-[#10192D] dark:text-[#F8FAFC] text-center">Resend code in 
                    <span class="text-[#2873FF]">29:58</span></p>  
    
             <a v-if="reveal === 1" class="flex  justify-center text-center mt-5 text-[#2873FF] font-[400] text-sm">Copy code</a>
             <a v-if="reveal === 2" class="flex justify-center text-center mt-5 text-[#2873FF] font-[400] text-sm">Paste code</a>
    
    
             <div class="fixed bottom-5 left-0 w-full px-6">
                    <button  @click.prevent="authenticate" 
                    class="btn-primary mt-[57px] w-full">continue</button>
             </div>
    
    
        </div>
    </template>
    
<script setup>
    
    const my_pin = ref(null)
    const reveal = ref(1)
    
    
   


    const authenticate = ()=>{
        if(reveal.value < 2){
            reveal.value ++
        }else{
            navigateTo('/dashboard')
        }
    }
</script>
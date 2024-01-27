<template>

<Successful v-if="show_successful" title="sucessful" subtitle="Your two-factor authentication for login was set successfully!"/>

    <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <Appbar link="/dashboard/account/2FA_login" title="Two-factor login"  />

        <p class="pt-[72px] text-[#8E9BAE] text-center">Enter code sent to your email.</p>

        <div class="mt-[40px] px-5 flex flex-col justify-center items-center">
                   
            <InputOtp @focusin="isFocused=true" @focusout="isFocused=false"
             :length="4" @entered=" v => my_pin = v"/> 
        </div>
            <p class="mt-[32px] text-sm text-[#10192D] dark:text-[#F8FAFC] text-center">Resend code in 
                <span class="text-[#2873FF]">29:58</span></p>  

         <a class="flex justify-center text-center mt-5 text-[#2873FF] font-[400] text-sm">Paste code</a>


         <div  v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">
                <button  @click.prevent="toggle_show_successful" 
                class="btn-primary mt-[57px] w-full">Continue</button>
         </div>


    </div>
</template>

<script setup>

const isFocused = ref(false)
const my_pin = ref(null)
const show_successful = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}
</script>
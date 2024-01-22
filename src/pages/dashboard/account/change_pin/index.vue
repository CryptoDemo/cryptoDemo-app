<template>

<Successful v-if="show_successful" title="sucessful" subtitle="`You have successfully changed your  username permanently`"/>

    <div v-else class="max-w-full h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px] ">
            <Appbar link="/dashboard" title="Change pin" />
            
            <div  v-if="reveal === 0" class=" my-6  text-center">
           
                  <h3 class="text-2xl font-bold text-[#10192D] ">Enter PIN</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE] dark:text-[#E2E8F0]">
                    Enter your current pin</p>
            </div>
            <div  v-if="reveal === 1" class=" my-6  text-center">
           
                  <h3 class="text-2xl font-bold text-[#10192D] ">Set new PIN</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE] dark:text-[#E2E8F0]">
                    Enter a new pin to secure your wallet</p>
            </div>
            <div  v-if="reveal === 2" class=" my-6  text-center">
           
                  <h3 class="text-2xl font-bold text-[#10192D] ">Re-enter new PIN</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE] dark:text-[#E2E8F0]">
                    Re-enter new pin to secure your wallet</p>
            </div>
    
    
    
            <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                    <InputOtp :length="4" @entered=" v => new_pin = v"/> 

            </div>


                <button  @click.prevent="change_pin()"  class="w-full btn-primary mt-[75px] scaling-animation">
                    <span v-if="reveal === 0" >Change pin</span>
                    <span v-if="reveal === 1" >continue</span>
                    <span v-if="reveal === 2" >save</span>
                </button>
        </div>

    </div>

        


</template>

<script setup>

const reveal = ref(0)
const show_successful = ref(false)

const my_pin = ref(null)
const new_pin = ref(null)
const reentered_new_pin = ref(null)

const change_pin =()=>{
    if(reveal.value === 2){
        show_successful.value = true
       setTimeout(() => {
        navigateTo('/dashboard')
       },1000);
    }else{
        reveal.value ++
    }
   
}

</script>
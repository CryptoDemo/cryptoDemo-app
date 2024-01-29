<template>

<Successful v-if="show_successful" title="sucessful" subtitle="Your password was changed successfully"/>

     <div v-else class=" h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 ">
            <Appbar link="/dashboard" title="Change password" />

              <div class=" pt-[72px]">
           
                <p class="text-sm font-[400]  text-[#8E9BAE] ">
                    Complete the form below to change password
                </p>
               </div>
            
               <form class="mt-[32px]">

                <div class="mb-4">
                    
                    <InputPassword  placeholder="Current password"
                     @focusin="isFocused=true" @focusout="isFocused=false"/>
                </div>

                <div class="">
                    
                    <InputPassword  placeholder="New password"
                    @focusin="isFocused=true" @focusout="isFocused=false"/>

                </div>

                </form>


                <div v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">

                    <button @click.prevent="toggle_show_successful"  class="w-full btn-primary  scaling-animation">
                        Change password</button>
                </div>

          
     </div>

    </div>
</template>



<script setup>


const show_successful = ref(false)
const isFocused = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}
</script>
<template>

    <div class="w-full h-screen overflow-y-auto  fixed left-0 top-0  dark:bg-[#10192D] transition ease-linear duration-300">

        <div class=" px-6">

            <LoginAppBar link="/login"/>

            <div class="pt-[72px]  relative">

                <IconsReset/>

            </div>
            
            <div class=" my-4 py-4 text-center relative bottom-0 left-0 w-full ">
           
                  <h3 class="text-2xl font-extrabold text-[#10192D]">Reset password</h3>
                  <p class="text-sm text-[#64748B]  pt-4 px-4">Enter the email address linked to your account</p>

                <div class="my-6">
                        <input  @focusin="isFocused=true" @focusout="isFocused=false" v-model.trim="email"
                         type="email" id="email" class="input " placeholder="Email Address" required>
                        
                </div>
                <!-- <div class="flex justify-end w-full  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_number')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] font-bold text-sm">Reset with phone number?</a>
                </div> -->

            </div>
    

            <div v-show="!isFocused"  class="fixed w-full left-0 bottom-5 px-6">
                <button @click.prevent="reset_password"  class="w-full btn-primary scaling-animation
               mt-[24px] ">Continue</button>
            </div>
        </div>

    </div>

        


</template>

<script setup>
import { ref } from "vue";

const  otpvalue = ref('')
const isFocused = ref(false)

const toast = useToast()
const pinia = useStore()

const email = ref('')
const loading = ref(false)

const reset_password = async() => {
   loading.value = true
try{
    const data = await fetch(`${baseURL}auth/init-account-recovery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'x-access-token' : `${pinia.state.user?.token}`

      },
      body: JSON.stringify({
        email: email.value
      })
    })
    .then(res=>res.json());
    console.log(data.message)

    if(data.success){
        loading.value = false
        pinia.setEmail(email.value)

        navigateTo('/login/verify_password_reset')
    }else{
        toast.message(`${data.message}`, {
        position: 'top',
        timeout: 2000,
      })
      loading.value = false
    }


  }catch(error){
    console.error('Error during resending of otp code:', error);
    toast.message(error, {
        position: 'top',
        timeout: 2000,
      })

      loading.value = false

  }
};

</script>
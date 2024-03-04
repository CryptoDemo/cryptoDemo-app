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
                    
                    <InputPassword  placeholder="Current password" @password="v => old_password = v"
                     @focusin="isFocused=true" @focusout="isFocused=false"/>
                </div>

                <div class="">
                    
                    <InputPassword  placeholder="New password"  @password="v => new_password = v"
                    @focusin="isFocused=true" @focusout="isFocused=false"/>

                </div>

                </form>


                <div v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">

                    <button :disabled="!recaptchaValid"  @click.prevent="recaptchaValid ? updatePassword() : null"   class="w-full btn-primary  scaling-animation">
                       
                        <Loader v-if="loading"/>
                            <span v-else>
                                Change password
                            </span>
                    </button>
                </div>

          
     </div>

    </div>
</template>



<script setup>


const show_successful = ref(false)
const isFocused = ref(false)
const pinia = useStore()
const toast = useToast()
const recaptchaValid = ref(false)
const old_password = ref('')
const new_password = ref('')


const loading = ref(false)

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}



watchEffect(()=>{

    if(old_password.value.length &&  new_password.value.length){

        recaptchaValid.value = true

    }else{

        recaptchaValid.value = false
    }

})



const updatePassword = async()=>{

loading.value = true
const info = {
    old_password: old_password.value,
    new_password: new_password.value
}

console.log(info)

try{
    
    const data = await fetch(`${baseURL}user/update-password`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token' : `${pinia.state.user?.token}`

  },
  body: JSON.stringify(info)
})
.then(res=>res.json());

console.log(data.message)

if(data.success){

    loading.value = false

    if(data.data === null){

        // navigateTo('/account/update_username/verify')
      
       return  toggle_show_successful()

    }else{

        const user = (data.data)

        pinia.setUser(user)

        toggle_show_successful()
    }


}else{
    toast.message(`${data.message}`, {
    position: 'top',
    timeout: 2000,
  })
  loading.value = false
}


}catch(error){
    toast.message(error, {
    position: 'top',
    timeout: 2000,
  })
}
}
</script>
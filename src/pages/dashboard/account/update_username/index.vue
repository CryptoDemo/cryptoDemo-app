<template>

<Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your  username permanently"/>


    <div v-else class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard" title="Update username" />
        

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400] text-[#8E9BAE] ">This username is auto-generated and can be changed only once.</p>
        </div>



        <div class="mt-4">
                <input type="text" v-model.trim="username" id="username" class="input" :placeholder="pinia.state.user?.username" >
         </div>

      


         <div class="fixed bottom-5 left-0 w-full px-6">

             <button :disabled="!recaptchaValid"  @click.prevent="recaptchaValid ? updateUsername() : null" 
             class="btn-primary mt-[40px] w-full">
            
             <Loader v-if="loading"/>
                       <span v-else>
                        Save new username
                       </span>
            </button>
         </div>
    </div>

</template>


<script setup>
const pinia = useStore()
const toast = useToast()
const show_successful = ref(false)
const username = ref('')
const recaptchaValid = ref(false)


const loading = ref(false)


watchEffect(()=>{

    if(username.value.length){
        recaptchaValid.value = true
    
    }else{
        recaptchaValid.value = false
    }

})

const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}

const updateUsername = async()=>{

    loading.value = true
    const usernameinfo = {username: username.value,}
    const info = {...pinia.state.user,...usernameinfo}

    console.log(info)
    try{
        
        const data = await fetch(`${baseURL}user`, {
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
          
           return 


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
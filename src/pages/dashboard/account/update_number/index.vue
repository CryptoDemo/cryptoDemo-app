<template>
       <Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your  phone number "/>
   
       <div v-else class="max-w-full h-screen overflow-y-auto  bg-white dark:bg-[#10192D] transition ease-linear duration-300">
           <div class="px-6 pb-24">
              
               <LoginAppBar link="/dashboard"/>
               
              
               <Subappbar class="mb-4"  heading="Add phone number" desc=" Add your phone number to complete this process"/>
   
       
               <InputCountrySelector  @number="v => phone = v"
               :isdisabled="false" />
       
              
               <div class="fixed bottom-5 left-0 w-full px-6">

                     <button :disabled="!recaptchaValid"  @click.prevent="recaptchaValid ? updatePhone() : null" 
                     class="btn-primary mt-[40px] w-full">

                     <Loader v-if="loading"/>
                            <span v-else>
                               Save
                            </span>
                     </button>
              </div>
           </div>
   
   
   
       </div>
   
           
   
   
   </template>
   
   
   
   
   
   
   <script setup>
     
   import { initFlowbite} from 'flowbite'
   const show_successful = ref(false)
   const toast = useToast()
   
   const toggle_show_successful = ()=>{
       show_successful.value = true
       setTimeout(() => {
           navigateTo('/dashboard')
       }, 1000);
   }


   const pinia = useStore()

const phone = ref('')
const recaptchaValid = ref(false)


const loading = ref(false)


watchEffect(()=>{

    if(phone.value.length){
        recaptchaValid.value = true
    
    }else{
        recaptchaValid.value = false
    }

})



const updatePhone = async()=>{

    loading.value = true
    const phoneinfo = {phone: phone.value,}
    const info = {...pinia.state.user,...phoneinfo}

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
   
   
   onMounted(()=>{
       initFlowbite();
   })
   
   
   
   </script>


<template>

    <div class="max-w-full h-screen overflow-y-auto  bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[6px]">

            <LoginAppBar link="/sign_Up/successful"/>

            
            <div class="mb-[34px]">
                <Subappbar  heading="Add phone number" desc=" It only takes a minute to do this for an extra layer of security to your account."/>
            </div>
    
            <InputCountrySelector  @number="v => number = v"
            :selectedCountryCode="selectedCountryCode" :selectedIcon="selectedIcon" :isdisabled="true" />
    
                
             <div class="fixed bottom-5 left-0 w-full px-6 flex gap-5 transition ease-in-out duration-500">

                 <button @click.prevent="navigateTo('/sign_Up/setup_pin')" class="w-full btn-border scaling-animation ">Skip</button>
                 <button  @click.prevent="addPhoneNumber"   class="w-full btn-primary scaling-animation">
                    <Loader v-if="loading"/>
                    <span v-else>
                        Proceed
                    </span>
                </button>
             </div>
        </div>



    </div>

        


</template>






<script setup>
  
import { initFlowbite} from 'flowbite'
import { showKeyboard } from '@/composables/capacitor_plugins'

const toast = useToast()
const pinia = useStore()

const  selectedCountryCode = pinia.state.country?.code || '+234'
const selectedIcon = pinia.state.country?.icon || 'ng'
const number = ref('')
// const keyboard = await showKeyboard()

const loading = ref(false)

const addPhoneNumber = async() => {
   loading.value = true
try{
    const data = await fetch(`${baseURL}auth/add-phone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`

      },
      body: JSON.stringify({
        phone: number.value
      })
    })
    .then(res=>res.json());
    console.log(data.message)

    if(data.success){
        loading.value = false

       navigateTo('/sign_Up/add_phone_number/verify')
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








onMounted(()=>{
    // keyboard()
    initFlowbite();
})






</script>

<style scoped>



</style>
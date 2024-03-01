<template>

    <div class="max-w-full h-screen overflow-y-auto mx-auto transition dark:bg-[#10192D] ease-linear duration-300">
        <div class="px-6   ">
          
            <!-- <div class="flex justify-between items-center">
    
                <button @click="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div> -->

            <LoginAppBar link="/login/verify_password_reset"/>
            
            <div class="">

                  <Subappbar  heading="Create new password" 
                    desc="Create a new password to keep your account safe "
                    />

            </div>
    
    
              <form class="mt-[32px]">

                <div class="mb-4">
                       
                      <InputPassword  @password="v => password = v"   @focusin="isFocused=true" @focusout="isFocused=false" 
                      placeholder="Enter new password"/>
                </div>

                <div class="">
                       
                       <InputPassword @password="v => newPassword = v"   @focusin="isFocused=true;"
                        @focusout="isFocused=false; password !== newPassword ? errorlog = `border-red-500` : errorlog = ``;  
                         password !== newPassword ? error_message = true : error_message = false;" 
                       placeholder="Retype  password" :errorlog="errorlog"/>

                       <!-- <Transition
                            leave-active-class="transition-all duration-200 ease-in"
                            leave-from-class="translate-y-0 opacity-100"
                            leave-to-class="-translate-y-5 opacity-0"
                        >
                            <span v-if="error_message" class="text-[#E33E38] mt-[8px]  text-[12px]
                            ml-2 at-item font-[500]" > password did not match </span>
                        </Transition> -->

                </div>

              </form>
           
             <div v-show="!isFocused"     class="fixed bottom-5 left-0 w-full px-6">
               <button @click.prevent="change_password"  class="w-full btn-primary mt-[40px] scaling-animation">
               
                <Loader v-if="loading"/>
                    <span v-else>
                      Create new password
                    </span>
              </button>
             </div>
        </div>

    </div>


</template>

<script setup>

import { useStore } from '@/stores/index'

  const password = ref('')
  const newPassword =ref('')
  const showPassword1 =ref(false)
  const showPassword2 =ref(false)
  const isFocused =ref(false)

  const error_message = ref(false)

  const loading = ref(false)

const toast = useToast()

const pinia = useStore()

const errorlog = ref('')
   
const togglePassword1Visibility =()  =>{
    showPassword1.value = !showPassword1.value;
  }

const  togglePassword2Visibility =() =>{
    showPassword2.value = !showPassword2.value;
  }

const  check_password_match = () =>{
     if(password.value !== newPassword.value){
         return error.value = `border-red-500`
     }else{
      return error.value = ''
     }
}


const change_password = async()=>{

    if(password.value !== newPassword.value) return   errorlog.value = `border-red-500`

    loading.value = true

    const password_info = {
      email: pinia.state.email,
      code: pinia.state.code,
      password: password.value
    }

    try{
    const data = await fetch(`${baseURL}auth/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(password_info)
    })
    .then(res=>res.json());

    if(data.success){

      loading.value = false
  
      console.log(data.message)
  
      navigateTo('/login/success')
    }else{

      toast.message(`${data.message}`, {
        position: 'top',
        timeout: 2000,
      })

    }
  

  }catch(error){
    console.error('Error during resending of otp code:', error);
    toast.message(error, {
        position: 'top',
        timeout: 2000,
      })
      loading.value = false

  }


}

</script>


<style scoped>

.at-item {
		/* width: 100%; height: 100%; */
		
		animation-name: slide-in-bck-top;
		animation-duration: 0.3s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
			
		/* shorthand
		animation: slide-in-bck-top 1s linear 0s 1 normal none;*/
	}
	@keyframes slide-in-bck-top {
			
		0% {
			transform:translateZ(700px) translateY(-30px);
			opacity:0;
		}
		100% {
			transform:translateZ(0) translateY(0);
			opacity:1;
		}
	}
</style>
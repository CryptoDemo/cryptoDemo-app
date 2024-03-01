

<template>

    <div class="px-[24px]  dark:bg-[#10192D] h-screen overflow-y-auto transition ease-linear duration-300">
            <LoginAppBar link="/dashboard"/>

            <div class="">

                <Subappbar  heading="Login" desc="You have been missed!"/>



                <form class=" mt-[34px]" @submit.prevent="null">
                    <div class="mb-4">
                        <input v-model.trim="email" type="email" id="email" class="input" placeholder="Email Address" required>
                    </div>

                       
                      <InputPassword @password="v => password = v"  placeholder="Enter your password"/>

                
                    <div class="flex justify-end w-full  mt-6">
                      
                       <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" 
                       class="text-[#2873FF] text-[14px] font-bold hover:underline dark:text-blue-500">Forgot Password?</a>
                    
                    </div>

                    <button @click.prevent="login"  class=" btn-primary mt-[40px] mb-5 w-full scaling-animation">
                        
                        <Loader v-if="loading"/>
                        <span v-else>
                          Login
                        </span>
                    </button>

               </form>




               <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE] font-[400]">Don’t have an account? 
                    <a   @click.prevent="navigateTo('/sign_Up/')"  class="text-[#2873FF] font-bold"> Create account</a></span>
               </div>

            </div>
    </div>
    
</template>


<script setup>
     
     const loading = ref(false)
    const  password= ref('')
    const email = ref('')
    const  showPassword= ref(false)
  
  const  togglePasswordVisibility =()=>{
      showPassword.value = !showPassword.value;
  }

const login = async() =>{

    loading.value = true

    const login_info = {
      email:email.value,
      password: password.value,
    }

    console.log(login_info)

    try{

      const data = await fetch(`${baseURL}auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${pinia.state.user?.token}`
      },

      body: JSON.stringify(login_info)
    })
    .then(res=>res.json());

    console.log(data.message)
    loading.value = false

    const user = data.data
    pinia.setUser(user)

    navigateTo('/')
     
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
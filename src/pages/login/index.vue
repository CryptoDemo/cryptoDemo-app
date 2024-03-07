

<template>

  <!-- Main container with padding, background color, and transition -->
  <div class="px-[24px]  dark:bg-[#10192D] h-screen overflow-y-auto transition ease-linear duration-300">
          <!-- Include the login app bar component -->
          <LoginAppBar link=""/>

          <!-- Container for login form -->
          <div class="">

              <!-- Sub-app bar with login heading and description -->
              <Subappbar  heading="Login" desc="You have been missed!"/>

              <!-- Form for login -->
              <form class=" mt-[34px]" @submit.prevent="null">
                  <!-- Input field for email address -->
                  <div class="mb-4">
                      <input v-model.trim="email" type="email" id="email" class="input" placeholder="Email Address" required>
                  </div>

                  <!-- Component for password input -->
                  <InputPassword @password="v => password = v"  placeholder="Enter your password"/>

                  <!-- Forgot password link -->
                  <div class="flex justify-end w-full  mt-6">
                     <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" 
                     class="text-[#2873FF] text-[14px] font-bold hover:underline dark:text-blue-500">Forgot Password?</a>
                  </div>

                  <!-- Login button -->
                  <button  @click.prevent="recaptchaValid ? login() : null"  class=" btn-primary mt-[40px] mb-5 w-full scaling-animation" :disabled="!recaptchaValid">
                      <!-- Loader icon when loading -->
                      <Loader v-if="loading"/>
                      <!-- Text to display when not loading -->
                      <span v-else>
                        Login
                      </span>
                  </button>

             </form>

             <!-- Message for creating account -->
             <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
                 <span class="dark:text-[#8E9BAE] font-[400]">Don’t have an account? 
                  <a  @click.prevent="navigateTo('/sign_Up/')"  class="text-[#2873FF] font-bold"> Create account</a></span>
             </div>

          </div>
  </div>
  
</template>


<script setup>
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

// Define reactive variables
const loading = ref(false)
const  password= ref('')
const email = ref('')
const recaptchaValid = ref(false)
const  showPassword= ref(false)
const pinia = useStore()

// Function to toggle password visibility
const  togglePasswordVisibility =()=>{
  showPassword.value = !showPassword.value;
}

// Get device information
const device =  await deviceInfo()
const toast = useToast()

// Function for login
const login = async() =>{
  delete device.memUsed
    delete device?.diskFree
    delete device?.diskTotal
    delete  device.realDiskFree
    delete device.realDiskTotal
  delete device.webViewVersion


  loading.value = true

  const login_info = {
    email:email.value,
    password: password.value,
    device_info: JSON.stringify(device),
  }

  console.log(login_info)

  try{
    // Perform login request
    const data = await fetch(`${baseURL}auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login_info)
    })
    .then(res=>res.json());

    console.log(data.message)
    loading.value = false

    // Handle login response
    if(data.success){
      await SecureStoragePlugin.set({ key:'password', value: password.value});
      pinia.setEmail(email.value)

      if(data.data === null){
        navigateTo('/login/verify')
      }else{
        const user = data.data
        pinia.setUser(user)
        navigateTo('/dashboard')
      }
    }else{
      toast.message(`${data.message}`, {
        position: 'top',
        timeout: 2000
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

// Watch for changes in password and email fields
watchEffect(()=>{
if(password.value !== '' && validEmail(email.value)){
  recaptchaValid.value = true
}else{
  recaptchaValid.value = false
}
})
</script>

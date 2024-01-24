

<template>

    <div class="px-[24px]  dark:bg-[#10192D] h-screen overflow-y-auto transition ease-linear duration-300">

          
            <LoginAppBar link="/dashboard"/>

            <div class="">

                <Subappbar  heading="Login" desc="You have been missed!"/>



                <form class=" mt-[34px]">
                    <div class="mb-4">
                        <input type="email" id="email" class="input" placeholder="Email Address" required>
                    </div>

                       
                      <InputPassword/>

                
                    <div class="flex justify-end w-full  mt-6">
                      
                       <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" class="text-blue-600 text-[14px] font-bold hover:underline dark:text-blue-500">Forgot Password?</a>
                    
                    </div>

                    <button @click.prevent="navigateTo('/dashboard')"  class=" btn-primary mt-[40px] mb-5 w-full scaling-animation">
                        login
                    </button>

               </form>




               <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE] font-[400]">Don’t have an account? 
                    <a   @click.prevent="navigateTo('/sign_Up')"  class="text-[#2873FF] font-bold"> Create account</a></span>
               </div>

            </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
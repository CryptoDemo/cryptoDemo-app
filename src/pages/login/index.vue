

<template>

    <div class="px-[24px] pt-[6px] dark:bg-[#10192D] h-screen overflow-y-auto transition ease-linear duration-300">

            <div class="flex justify-between items-center">

                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">

                    <Icon name="mdi:arrow-left" size="24" />

                </button>

            </div>

            <div class="py-4">

                <h3 class="text-2xl font-extrabold text-[#10192D]">Login</h3>
                <p class="text-sm text-[#64748B] dark:text-[#E2E8F0] font-[400] pt-4">You have been missed!</p>
                


                <form class=" mt-[34px]">
                    <div class="mb-5">
                        <input type="email" id="email" class="shadow-sm bg-transparent border border-gray-200 text-[#10192D] font-[600] 
                        text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px] dark:bg-transparent
                        dark:border-gray-700 dark:placeholder-gray-400 dark:text-white " placeholder="Email Address" required>
                    </div>

                    <div class="mb-5">
                       
                        <div class="relative">


                            <input v-model="password"
                             :type="showPassword ? 'text' : 'password'"
                             id="password" class="shadow-sm bg-transparent border border-gray-200 text-[#10192D] font-[600] 
                            text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px] dark:bg-transparent
                            dark:border-gray-700 dark:placeholder-gray-400 dark:text-white " :placeholder="showPassword ? 'password' : '*******'" required>
    

                            <div @click="togglePasswordVisibility" class=" absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
                                <Icon v-if="showPassword" name="material-symbols:visibility-outline-rounded" size="20" 
                                class="transition ease-in-out duration-300"/>
                                <Icon v-else name="material-symbols:visibility-off-outline-rounded" size="20"
                                class="transition ease-in-out duration-300"/>
                            </div>


                        </div>

                        

                    </div>



                
                    <div class="flex justify-end w-full  mt-6">
                      
                       <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" class="text-blue-600 hover:underline dark:text-blue-500">Forgot Password?</a>
                    
                    </div>

                    <button @click.prevent="navigateTo('/dashboard')"  class=" btn-primary mt-[40px] mb-5 w-full">
                        login
                    </button>

               </form>


               <div class="text-center mt-[64px] font-[400]  text-sm text-[#8E9BAE]">
                   <span>Don’t have an account? <a  @click.prevent="navigateTo('/sign_Up')"  class="text-[#2873FF] font-bold"> Create account</a></span>
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
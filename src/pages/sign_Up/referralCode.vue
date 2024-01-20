<template>
    <div class="px-[24px] pt-[15px] h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D]">
            <div class="flex justify-between items-center">
                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  dark:bg-[#1B2537] dark:text-[#E2E8F0]">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>

                <span class="text-[#2873FF] text-sm font-semibold leading-4">
                    Scan referral code</span>
            </div>

            <div class="py-4">

                <h3 class="text-2xl font-extrabold text-[#10192D]">Create account</h3>
                <p class="text-sm text-[#64748B] dark:text-[#E2E8F0] font-[400] pt-4">It only takes a minute to create your account</p>
                


                <form class=" mt-[34px]">
                    <div class="mb-5">
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                        text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px]
                         dark:bg-transparent
                        dark:border-gray-700 dark:placeholder-gray-400 dark:text-[#E2E8F0]" placeholder="Email Address" required>
                    </div>

                    <div class="mb-5">
                       
                        <div class="relative">
                            <!-- <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div> -->
                            <input v-model="password"
                             :type="showPassword ? 'text' : 'password'"
                             id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                            text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px]
                             dark:bg-transparent
                            dark:border-gray-700 dark:placeholder-gray-400 dark:text-[#E2E8F0]" :placeholder="showPassword ? 'password' : '*******'" required>
    
                            <div @click="togglePasswordVisibility" class=" absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
                                <Icon v-if="showPassword" name="material-symbols:visibility-outline-rounded" size="20" 
                                class="transition ease-in-out duration-300"/>
                                <Icon v-else name="material-symbols:visibility-off-outline-rounded" size="20"
                                class="transition ease-in-out duration-300"/>
                            </div>
                        </div>


                        

                    </div>

                    <div class="mb-5">
                        <input type="text" id="referral" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                        text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px]
                         dark:bg-transparent
                        dark:border-gray-700 dark:placeholder-gray-400 dark:text-[#E2E8F0] " 
                        placeholder="Referal Code" >
                    </div>



                
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-gray-300 rounded-lg bg-gray-50 
                        focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                        </div>
                        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            I agree with the 
                            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a> and
                            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">privacy policy</a>
                        </label>
                    </div>

                    <button @click.prevent="navigateTo('/sign_Up/successful')" class=" btn-primary mb-5 w-full">create account</button>
                    <button @click.prevent="navigateTo('/sign_Up/create_with_phone')" class=" btn-border-primary  w-full">Create account with phone number</button>
               </form>


               <div class="text-center mt-[40px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE]">Already registered? <a @click.prevent="navigateTo('/login')" class="text-[#2873FF] font-bold"> Login</a></span>
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
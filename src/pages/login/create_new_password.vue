<template>

    <div class="max-w-full h-screen overflow-y-auto mx-auto transition dark:bg-[#10192D] ease-linear duration-300">
        <div class="px-6 pt-[6px]  ">
            <div class="flex justify-between items-center mb-3">
    
                <button @click="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>
            
            <div class=" my-6">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Create new password</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Create a new password to keep your account safe</p>
            </div>
    
    
             <form class="mt-[32px]">

                <div class="mb-5">
                       
                       <div class="relative">
                         
                           <input v-model="newPassword"
                            :type="showPassword1 ? 'text' : 'password'"
                            id="password" class="shadow-sm bg-transparent border border-gray-200 text-gray-900
                           text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px]
                            dark:bg-transparent
                           dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="showPassword1 ? 'password' : '*******'" required>
   
                           <div  
                           @click="togglePassword1Visibility" class=" absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
                               <Icon v-if="showPassword1" name="material-symbols:visibility-outline-rounded" size="20" 
                               class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                               <Icon v-else name="material-symbols:visibility-off-outline-rounded" size="20"
                               class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                           </div>
                       </div>

                       

                </div>

                <div class="mb-5">
                       
                       <div class="relative">
                         
                           <input v-model="password"
                            :type="showPassword2 ? 'text' : 'password'"
                            id="password" class="shadow-sm bg-transparent border border-gray-200 text-gray-900
                           text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px]
                            dark:bg-transparent
                           dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500 dark:shadow-sm-light" :placeholder="showPassword2 ? 'password' : '*******'" required>
   
                           <div @click="togglePassword2Visibility" class=" absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
                               <Icon v-if="showPassword2" name="material-symbols:visibility-outline-rounded" size="20" 
                               class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                               <Icon v-else name="material-symbols:visibility-off-outline-rounded" size="20"
                               class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                           </div>
                       </div>

                       

                </div>

             </form>
           

            <button @click.prevent="navigateTo('/login/success')"  class="w-full btn-primary mt-[40px] scaling-animation">create new password</button>
        </div>

    </div>

        


</template>
<script>
export default {
  data() {
    return {
      password: '',
      newPassword:'',
      showPassword1: false,
      showPassword2: false,
    };
  },
  methods: {
    togglePassword1Visibility() {
      this.showPassword1 = !this.showPassword1;
    },
    togglePassword2Visibility() {
      this.showPassword2 = !this.showPassword2;
    },
  },
};
</script>
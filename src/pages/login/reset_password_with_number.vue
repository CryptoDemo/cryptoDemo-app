<template>

    <div class="max-w-full mx-auto dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6 pt-[15px] h-screen ">
            <div class="flex justify-between items-center mb-3 ">
    
                <button type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div>

            <div class=" py-4 h-[29vh] relative">
                  <IconsReset/>
            </div>
            
            <div class=" my-4 py-4 text-center  mt-10">
           
                  <h3 class="text-2xl font-bold text-[#10192D]">Reset password</h3>
                  <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">Enter the email address linked to your account</p>


                  <div class="my-6">
                        <div  class="flex items-center">
                            <button     id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 
                            inline-flex items-center py-[16px] px-[17px] text-sm font-medium text-center text-gray-900
                             bg-gray-100 border border-gray-300 rounded-s-2xl hover:bg-gray-200 focus:ring-2 
                             focus:outline-none  dark:bg-transparent
                              dark:text-white dark:border-gray-700" type="button">
                              <country-flag :country='selectedIcon' size='small' class="pr-2"/>
                               {{ selectedNumber }}
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                            </button>

                            <div   id="dropdown-phone" class="z-10 hidden bg-white divide-y divide-gray-100 dark:bg-[#1B2537]
                             dark:divide-gray-700 rounded-lg shadow w-52 ">
                                <ul v-for="i in phone_numbers1"  class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                                    <li >
                                        <button @click="selectedNumber = i.code ;selectedIcon= i.icon ;open = false " type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                           
                                            <div class="flex  justify-between items-center w-full">
                                                  
                                                    <country-flag :country='i.icon' size='medium'/>
                                                    <span class=""> {{ i.name }}</span> 

                                                     <span>{{ i.code }} </span>
                                            </div>

                                        </button>
                                    </li>
                                    
                                </ul>
                            </div>




                            <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                            <div class="relative w-full">
                                <input type="phone" id="phone-input" class="block py-[16px] px-[17px] w-full z-20 text-sm outline-none
                                 text-gray-900 bg-gray-50 rounded-e-2xl border-s-0 border border-gray-300  dark:bg-transparent
                                  dark:border-s-gray-700  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white
                                   dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required>
                            </div>
                        </div>
                </div>


                <div class="flex justify-end w-full  ">
                    <a @click.prevent="navigateTo('/login/reset_password_with_email')" href="#" 
                    class="text-[#2873FF] hover:underline dark:text-[#2873FF] text-sm">Reset with email?</a>
                </div>

            </div>
    
    
    
           

            <button  @click.prevent="navigateTo('/login/verify_password_reset')" class="w-full btn-primary mt-[24px]">continue</button>
        </div>

    </div>

        


</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import CountryFlag from 'vue-country-flag-next'


export default {
    components: {
        CountryFlag
    },
  data() {
    return {
      password: '',
      showPassword: false,
      selectedNumber:'+1',
      selectedIcon:`us`,
      phone_numbers1: [
            {name: 
                'United States', 
                code:'+234',
                icon:'us'
            },
            {
                name:'Australia',
                code:'+44',
                icon:'au'
            } , 
            {
                name:'Austria',
                code:'+61',
                icon:`at`
            },
            {
                name:'Dominica',
                code:'+61',
                icon:`dm`
            },
            {
                name:'Denmark',
                code:'+641',
                icon:`br`
            },
        
      ],

    };
  },
  mounted(){
    initFlowbite();
},
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
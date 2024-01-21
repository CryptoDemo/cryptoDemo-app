<template>
    <div class="px-[24px] pt-[6px] h-screen overflow-y-auto dark:bg-[#10192D] transition ease-linear duration-300">
            <div class="flex justify-between items-center">
                <button @click.prevent="navigateTo('/dashboard')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24"/>
                </button>

                <span @click.prevent="navigateTo('/sign_Up/referralCode')" class="text-[#2873FF] text-sm font-semibold leading-4">Apply referral code</span>
            </div>

            <div class="py-4">

                <h3 class="text-2xl font-extrabold text-[#10192D]">Create account</h3>
                <p class="text-sm text-[#64748B] dark:text-[#E2E8F0] font-[400] pt-4">It only takes a minute to create your account</p>
                


                <form class=" mt-[32px]">
                    <div class="mb-5">
                        <input type="email" id="email" class="shadow-sm bg-transparent border border-gray-200 text-gray-900
                        dark:text-[#E2E8F0]
                        text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px] dark:bg-transparent
                        dark:border-gray-700" placeholder="Email Address" required>
                    </div>

                    <div class="mb-5">
                       
                        <div class="relative">
                          
                            <input v-model="password"
                             :type="showPassword ? 'text' : 'password'"
                             id="password" class="shadow-sm bg-transparent border border-gray-200 text-[#10192D]
                             dark:text-[#E2E8F0] 
                            text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[16px] px-[17px] dark:bg-transparent
                            dark:border-gray-700" 
                            :placeholder="showPassword ? 'password' : '*******'" required>
    
                            <div @click="togglePasswordVisibility" class=" absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
                                <Icon v-if="showPassword" name="material-symbols:visibility-outline-rounded" size="20" 
                                class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                                <Icon v-else name="material-symbols:visibility-off-outline-rounded" size="20"
                                class="transition ease-in-out duration-300 text-[#8E9BAE]"/>
                            </div>
                        </div>

                        

                    </div>



                
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-gray-200 rounded-lg bg-transparent
                        focus:ring-1 focus:ring-blue-300 " required>
                        </div>
                        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-[#E2E8F0]">
                            I agree with the 
                            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a> 
                            and
                            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">privacy policy</a>
                        </label>
                    </div>

                    <button @click.prevent="navigateTo('/sign_Up/setup_pin')"  class=" scaling-animation btn-primary mb-5 w-full ">create account</button>
                    <button @click.prevent="navigateTo('/sign_Up/create_with_phone')" class="scaling-animation btn-border-primary  w-full">Create account with phone number</button>
               </form>


               <div class="text-center mt-[80px] py-[20px] font-[400]  text-sm text-[#8E9BAE]">
                   <span class="dark:text-[#8E9BAE] font-[400]">Already registered? <a   @click.prevent="navigateTo('/login')"  class="text-[#2873FF] font-bold"> Login</a></span>
               </div>

            </div>
    </div>
</template>




<script setup>
  
import {debounce} from "@/composables/mixins";
import { initFlowbite,Dropdown } from 'flowbite'
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

const password = ref('')
const showPassword = ref(false)
const  selectedNumber = ref('+1')
const selectedIcon = ref('us')
//  const props = defineProps(["filterInput"]);
const filteredItem  = ref([])
const searchInput = ref("")


const usersToggle = ref(false);


const showCountry = () => {
    usersToggle.value = !usersToggle.value;
};


console.log(filteredItem.value)

const phone_numbers1 = [
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
        
    ]



const togglePasswordVisibility=() =>{
      showPassword.value = !showPassword.value;
}

const filterV =(n)=>{
        filteredItem.value = phone_numbers1.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())
            
           

        }) 

        console.log(filteredItem.value)
    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
})



onMounted(()=>{
    initFlowbite();
})






</script>
<template>
    <div class="px-[24px] pb-14 h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D] ">

        <SignupAppBar link="/dashboard" referral_link="/sign_Up/referralCode" referral=" Apply referral code"/>

            <div>

                <Subappbar  heading="Create account" desc="It only takes a minute to create your account"/>
                
                <form class=" mt-[32px]">

                    <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />


                    <div class="mb-4">
                       
                        <InputPassword/>

                    </div>



                
                    <div class="flex items-center">
                        <div class="flex items-center min-h-5">
                        <input id="terms" type="checkbox" value="" class="w-6 h-6 border border-gray-200 rounded-lg bg-transparent
                        focus:ring-1 focus:ring-blue-300 " required>
                        </div>
                        <label for="terms" class="ms-2 mt-3 text-sm font-[400] text-[#8E9BAE] dark:text-[#E2E8F0]">
                            I agree with the 
                            <a href="#" class="text-[#2873FF] font-[600] hover:underline dark:text-[#2873FF]">terms and conditions</a> 
                            and
                            <a href="#" class="text-[#2873FF] font-[600] hover:underline dark:text-[#2873FF]">privacy policy</a>
                        </label>
                    </div>

                    <button class=" btn-primary mb-4  mt-[40px] w-full">Create account</button>
                    <button @click.prevent="navigateTo('/sign_Up')" 
                    class=" btn-border scaling-animation  w-full">Create account with email</button>
               </form>


               <div class="text-center mt-[80px] p-[20px] font-[400]  text-sm text-[#8E9BAE]">
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
     searchInput.value = ''
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



// watch(()=> searchInput,(newVal)=>{
//     debounce(filteredItem,newVal)
// })


onMounted(()=>{
    initFlowbite();
})






</script>
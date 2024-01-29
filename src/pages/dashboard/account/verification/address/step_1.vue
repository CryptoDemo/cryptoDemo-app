<template>

    <div class="px-6 pb-24  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        
        <Appbar link="/dashboard/account/verification" title="Address verification" />

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400] text-[#8E9BAE]">Complete this form to increase your trading limit</p>
        </div>

        
        <div>
            <div class="my-4">
    
                <button
                        @click="showUsers"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                    >
                        <span>{{ selectedName || 'Country of residence' }}</span>
                        <Icon :class="{'rotate-up': usersToggle }"  
                        name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>

                </button>


                <div class=" dark:border-[#1B2537]  w-full  dark:bg-transparent
                dark:text-[#8E9BAE]  rounded-2xl pb-2 mt-1 z"    
                :class="usersToggle ?' block h-auto':'h-0 hidden'">
                       <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"  :stroke="isDark?'#8E9BAE':'#8E9BAE'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 22L20 20"  :stroke="isDark?'#8E9BAE':'#8E9BAE'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            
                            <input  @focusin="isFocused=true" @focusout="isFocused=false"
                            v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3  p-4 ps-10 text-sm focus:border-0 
                                text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:outline-none   
                                bg-transparent  dark:border-gray-700 dark:text-white" 
                                placeholder="Search countries..." required>
                        </div>
                   
                    <div class=" relative overflow-y-auto transition ease-out duration-300 max-h-[215px]"
                   >

                        <div
                            v-for="i in filteredItem.length? filteredItem : countries"  @click="showUsers(); 
                            selectedName = i.name"
                            class="p-4 w-full"
                        >
                            <a href="#" class="flex  items-center w-full rounded-xl  ">
                            <div class="country-flag inline-flex justify-center items-center">
                                <country-flag :country='i.icon' size='big' class=" rounded-full"/>
                            </div>
                            <span class="px-4 text-[16px] font-[500] text-[#10192D] dark:text-[#F8FAFC]">{{ i.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>


        
             </div>

             <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                 type="text" id="state" class="input" placeholder="Region/State" required>
            </div>

             <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                type="text" id="state" class="input" placeholder="City" required>
            </div>

            <div class="mb-4">
    
                <button
                        @click="showDocs"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                    >
                        <span>{{ selectedDocument || 'Document type' }}</span>
                        <Icon  :class="{'rotate-up': docToggle }" 
                         name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>

                </button>


                <div class="bg-transparent  dark:border-[#1B2537] overflow-y-auto dark:bg-transparent dark:text-[#8E9BAE] 
                rounded-2xl px-4 pb-2 mt-2 z-20"  v-show="docToggle">
                   

                        <div
                        v-for="(i,index) in document_type" :key="i.name" @click="showDocs(); selectedDocument = i.name"
                        class="mt-4 w-full   pb-3"
                    >
                        <a href="#" class="flex items-center w-full rounded-xl bg- 
                                        blue-100 ">
                                        <div class="h-[40px] w-[40px]">
                                            <img class="max-w-[40px]" :src="i.img"/>
                                        </div>
                            
                        <span class="px-4 text-lg text-[#10192D] dark:text-[#F8FAFC]">{{ i.name }}</span>
                        </a>
                    </div>
                </div>


            </div>

            <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                type="text" id="address" class="input" placeholder="Address line " required>
            </div>
            <div class="mb-4 relative">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                type="text" id="address" class="input" placeholder="Address line 2" >
                <span class="absolute right-4 bottom-4 text-sm text-[#8E9BAE]">Optional</span>
            </div>
            <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                 type="text" id="postal code" class="input" placeholder="Postal code" required>
            </div>
             
        
        </div>


      
         <div  v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">
             <button  @click.prevent="navigateTo('/dashboard/account/verification/address/upload_document')" 
             class="btn-primary mt-[20px] w-full ">Start verification</button>
         </div>
    </div>

</template>


<script setup>
import {debounce} from "@/composables/mixins";
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })


 const isFocused = ref(false)

const  selectedName = ref('')
const  selectedDocument = ref('')
const selectedIcon = ref('au')
const usersToggle = ref(false);
const docToggle = ref(false);
const filteredItem  = ref([])
const searchInput = ref("")

const showUsers = () => {
    usersToggle.value = !usersToggle.value;
};
const showDocs = () => {
    docToggle.value = !docToggle.value;
};

const countries = [
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


const document_type = [
    {name:'Bank/credit card bill',img:'/bbill.png'},
    {name:'Phone bill',img:'/pbill.png'},
    {name:'Home/utility bill',img:'/hbill.png'},
]
   
const filterV =(n)=>{
        filteredItem.value = countries.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())
            
           

        }) 

        console.log(filteredItem.value)
    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
})
</script>


<style scoped>

.rotate-up {
  transform: rotate(180deg);
}

.country-flag > .flag{
    width: 40px !important;
    height: 40px !important
}
.slidedown{
    animation: rotateMenu  300ms ease forwards;
    transform-origin: top center
}
.slideup{
    animation: rotateMenuback  200ms ease forwards;
    transform-origin: bottom center
}

@keyframes rotateMenu {
    0% {
      transform: rotateX(-90deg)
    }
    70% {
      transform: rotateX(20deg)
    }
    100% {
      transform: rotateX(0deg)
    }
}
@keyframes rotateMenuback {
    0% {
      transform: rotateX(0deg)
    }
    70% {
      transform: rotateX(20deg)
    }
    100% {
      transform: rotateX(-90deg)
    }
}

</style>


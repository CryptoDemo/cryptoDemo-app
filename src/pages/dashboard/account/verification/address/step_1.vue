<template>

    <div class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        
        <Appbar link="/dashboard/account/verification" title="Address verification" />

        <div class=" mt-[20px]">
           
           <p class="text-sm font-[700] text-[#8E9BAE]">Complete this form to increase your trading limit</p>
        </div>

        
        <div>
            <div class="my-5">
    
                <button
                        @click="showUsers"
                        class="btn-border-primary border hover:border-blue-600 focus:ring-1 border-gray-200 
                        text-center text-sm dark:bg-transparent
                         text-[#10192D] dark:text-[#8E9BAE]  
                         dark:border-gray-700  w-full flex justify-between "
                    >
                        <span>{{ selectedName || 'Country of residence' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300"/>

                </button>


                <div class=" border-b dark:border-gray-800  w-full  dark:bg-transparent
                dark:text-[#8E9BAE] 
                rounded-2xl pb-2 mt-1 z"  v-show="usersToggle" >
                       <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            
                            <input v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3  p-4 ps-10 text-sm focus:border-0 
                                text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:outline-none   
                                bg-transparent  dark:border-gray-700 dark:text-white" 
                                placeholder="Search countries..." required>
                        </div>
                   
                    <div class="max-h-[215px] relative overflow-y-auto">

                        <div
                            v-for="i in filteredItem.length? filteredItem : countries"  @click="showUsers(); 
                            selectedName = i.name"
                            class="p-4 w-full"
                        >
                            <a href="#" class="flex items-center w-full rounded-xl  ">
                                
                            <country-flag :country='i.icon' size='big' class=" rounded-xl"/>
                            <span class="px-4 text-lg text-[#10192D] dark:text-[#8E9BAE]">{{ i.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>


        
             </div>

             <div class="mb-5">
                <input type="text" id="state" class="shadow-sm bg-transparent border border-gray-300 text-[#10192D] dark:text-[#8E9BAE] 
                text-sm rounded-2xl  block w-full py-[17px] px-[17px] dark:bg-transparent
                placeholder:text-[#10192D] font-['Open_Sans'] dark:placeholder:text-[#8E9BAE]
                dark:border-gray-700" placeholder="Region/State" required>
            </div>

             <div class="mb-5">
                <input type="text" id="state" class="shadow-sm bg-transparent border border-gray-300 
                text-[#10192D] dark:text-[#8E9BAE] placeholder:text-[#10192D] font-['open_sans'] dark:placeholder:text-[#8E9BAE]
                text-sm rounded-2xl  block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="City" required>
            </div>

            <div class="my-5">
    
                <button
                        @click="showDocs"
                        class="btn-border-primary text-sm dark:bg-transparent hover:border-blue-600 focus:ring-1
                        text-[#10192D] dark:text-[#8E9BAE] placeholder:text-[#10192D] font-['open_sans'] dark:placeholder:text-[#8E9BAE] dark:border-gray-700
                        border-gray-300 w-full flex justify-between"
                    >
                        <span>{{ selectedDocument || 'Document type' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300"/>

                </button>


                <div class="bg-transparent  dark:border-gray-800 overflow-y-auto dark:bg-transparent dark:text-[#8E9BAE] 
                rounded-2xl px-4 pb-2 mt-2 z-20"  v-show="docToggle">
                   

                        <div
                        v-for="i in document_type" :key="i.name" @click="showDocs(); selectedDocument = i.name"
                        class="mt-4 w-full   pb-3"
                    >
                        <a href="#" class="flex items-center w-full rounded-xl bg- 
                                        blue-100 ">
                            <img :src="i.img"/>
                        <span class="px-4 text-lg text-[#10192D] dark:text-[#8E9BAE]">{{ i.name }}</span>
                        </a>
                    </div>
                </div>



            </div>

            <div class="mb-5">
                <input type="text" id="address" class="shadow-sm bg-transparent border border-gray-300 
                text-[#10192D] dark:text-[#8E9BAE] placeholder:text-[#10192D] font-['open_sans'] 
                dark:placeholder:text-[#8E9BAE]
                text-sm rounded-2xl  block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="Address line " required>
            </div>
            <div class="mb-5 relative">
                <input type="text" id="address" class="shadow-sm bg-transparent border border-gray-300 
                text-[#10192D] dark:text-[#8E9BAE] placeholder:text-[#10192D] font-['open_sans'] dark:placeholder:text-[#8E9BAE]
                text-sm rounded-2xl  block w-full py-[17px] px-[17px] 
                dark:bg-transparent
                dark:border-gray-700" placeholder="Address line 2" >
                <span class="absolute right-4 bottom-4 text-sm text-[#8E9BAE]">Optional</span>
            </div>
            <div class="mb-5">
                <input type="text" id="postal code" class="shadow-sm bg-transparent border border-gray-300 
                text-[#10192D] dark:text-[#8E9BAE] placeholder:text-[#10192D] font-['open_sans'] dark:placeholder:text-[#8E9BAE]
                text-sm rounded-2xl  block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="Postal code" required>
            </div>
             
        
        </div>


      

         <button  @click.prevent="navigateTo('/dashboard/account/verification/address/upload_document')" 
         class="btn-primary mt-[20px] mb-4 w-full ">Start verification</button>
    </div>

</template>


<script setup>
import {debounce} from "@/composables/mixins";
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })


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
    {name:'Bank/credit card bill',img:'/imgdoc1.png'},
    {name:'Phone bill',img:'/imgdoc2.png'},
    {name:'Home/utility bill',img:'/imgdoc3.png'},
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
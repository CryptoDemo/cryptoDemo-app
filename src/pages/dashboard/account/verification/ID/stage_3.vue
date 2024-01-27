<template>

    <div class="h-screen overflow-y-auto px-6   bg-[#ffff]  dark:bg-[#10192D]   w-full" >
        <div class="pb-6 ">
            <Appbar link="/dashboard/account/verification" title="ID Verification" />
    
           
            <Subappbar heading="Let’s verify your identity" 
            desc="This qualifies you to trade amounts larger than $1,000 "
            />
    
          
            <div class="my-6">
    
                <button
                        @click="showUsers"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] "
                    >
                        <span>{{ selectedName || 'Issuing country' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300  text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>
    
                </button>


                    <div class="bg-transparent dark:bg-transparent dark:text-[#8E9BAE]  overflow-y-scroll
                     rounded-xl  pb-2  z-20 transition-transform ease-in-out duration-300 w-full"  v-show="usersToggle">

                                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#E2E8F0]">Search</label>
                                    
                                    <div class="relative" >
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-[#FFFFFF]" aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                        </div>
                                        
                                        <input @focusin="isFocused=true" @focusout="isFocused=false"
                                        v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3  p-4 ps-10 
                                            input dark:text-[#E2E8F0] focus:ring-1 focus:ring-gray-200 dark:focus:ring-[#1B2537]" 
                                            placeholder="Search countries..." required>
                                    </div>
                         <div class="max-h-[215px] relative overflow-y-auto px-4">

                             <div
                                   v-for="i in filteredItem.length? filteredItem : countries"  @click="showUsers(); selectedName = i.name"
                                 class="mt-4 w-full   pb-3"
                             >
                                 <a href="#" class="flex items-center w-full rounded-xl bg- 
                                                 blue-100 ">
                                     
                                 <country-flag :country='i.icon' size='big' class=" rounded-xl"/>
                                 <span class="px-4 text-[16px]">{{ i.name }}</span>
                                 </a>
                             </div>
                         </div>
                    </div>
    
    
                    
            </div>
    
            <div class="mt-6">
    
                <p class="pb-4 font-[700] text-[12px]">METHOD OF VERIFICATION</p>
    
                <div class="p-4   flex justify-between items-center hover:border hover:border-[#2873FF] bg-[#F8FAFC]
                 dark:bg-[#1B2537] rounded-2xl transition-all">
    
                    <div class=" flex justify-between items-center">
                            <div class="frame relative overflow-hidden">
                                  <div class="rectangle relative left-1.5 top-2.5"></div>
                                  <div class="line absolute top-3 left-[13px]"></div>
                                  <svg class="absolute bottom-1.5 left-2.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <g clip-path="url(#clip0_635_7830)">
                                            <path d="M7 0.875C5.78859 0.875 4.60439 1.23423 3.59713 1.90725C2.58988 2.58027 1.80483 3.53687 1.34124 4.65606C0.877654 5.77526 0.756358 7.00679 0.992693 8.19493C1.22903 9.38306 1.81238 10.4744 2.66897 11.331C3.52557 12.1876 4.61694 12.771 5.80507 13.0073C6.99321 13.2436 8.22474 13.1223 9.34394 12.6588C10.4631 12.1952 11.4197 11.4101 12.0928 10.4029C12.7658 9.39562 13.125 8.21141 13.125 7C13.1231 5.37612 12.4772 3.81928 11.329 2.67102C10.1807 1.52276 8.62389 0.876853 7 0.875ZM1.75875 7.17237L2.34413 7.3675L3.0625 8.44506V9.00638C3.06253 9.1224 3.10864 9.23366 3.19069 9.31569L4.375 10.5V11.5399C3.60408 11.0938 2.95941 10.4588 2.5017 9.69471C2.04399 8.93061 1.78832 8.06258 1.75875 7.17237ZM7 12.25C6.62152 12.2492 6.24423 12.2074 5.87475 12.1253L6.125 11.375L6.91469 9.401C6.941 9.33509 6.95089 9.26378 6.9435 9.1932C6.9361 9.12262 6.91165 9.0549 6.87225 8.99588L6.25494 8.06969C6.21498 8.00979 6.16084 7.96068 6.09735 7.92671C6.03385 7.89275 5.96295 7.87499 5.89094 7.875H3.73407L3.18807 7.05556L4.11863 6.125H4.8125V7H5.6875V5.80387L7.37975 2.842L6.62025 2.408L6.24619 3.0625H5.04657L4.57188 2.34981C5.20968 2.01324 5.91062 1.81331 6.63001 1.76276C7.34939 1.71222 8.07141 1.81217 8.75 2.05625V3.5C8.75 3.61603 8.7961 3.72731 8.87814 3.80936C8.96019 3.89141 9.07147 3.9375 9.1875 3.9375H9.82844C9.90045 3.93751 9.97135 3.91975 10.0348 3.88579C10.0983 3.85182 10.1525 3.80271 10.1924 3.74281L10.5761 3.16706C11.0758 3.63312 11.48 4.19199 11.7661 4.8125H9.98375C9.88265 4.81256 9.78469 4.84764 9.70652 4.91176C9.62836 4.97589 9.57482 5.06511 9.555 5.16425L9.23869 7.11987C9.22372 7.21195 9.23857 7.30639 9.28107 7.38943C9.32357 7.47246 9.3915 7.53974 9.47494 7.58144L10.9375 8.3125L11.2372 10.087C10.7516 10.7562 10.1146 11.301 9.37814 11.6769C8.64173 12.0529 7.82682 12.2492 7 12.25Z" fill="#2873FF"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_635_7830">
                                            <rect width="14" height="14" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                            </div>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-bold "> Passport</span>
                    </div>
                    <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
    
                <div class="p-4 my-4  flex justify-between items-center hover:border hover:border-[#2873FF] bg-[#F8FAFC]
                 dark:bg-[#1B2537] rounded-2xl transition-all">
    
                    <div class=" flex justify-between items-center">
                            <div class="frame relative overflow-hidden">
                                  <div class="rectangle2 relative left-0.5 top-3"></div>
    
                                    <svg class=" absolute top-1 left-1.5" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g filter="url(#filter0_d_635_7841)">
                                            <circle cx="11" cy="9" r="7" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_635_7841" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0872331 0 0 0 0 0.359128 0 0 0 0 0.866667 0 0 0 0.12 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_635_7841"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_635_7841" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
    
                                    <svg class=" absolute top-[9px] left-[12.8px]" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                        <path d="M3.99992 4.00033C4.92039 4.00033 5.66658 3.25413 5.66658 2.33366C5.66658 1.41318 4.92039 0.666992 3.99992 0.666992C3.07944 0.666992 2.33325 1.41318 2.33325 2.33366C2.33325 3.25413 3.07944 4.00033 3.99992 4.00033Z" fill="#4263EB"/>
                                        <path d="M3.99997 4.83301C2.32997 4.83301 0.969971 5.95301 0.969971 7.33301C0.969971 7.42634 1.0433 7.49967 1.13664 7.49967H6.8633C6.95664 7.49967 7.02997 7.42634 7.02997 7.33301C7.02997 5.95301 5.66997 4.83301 3.99997 4.83301Z" fill="#4263EB"/>
                                    </svg>
                                    
                                    <div class="line2 absolute top-6 left-[11px]"></div>
                              
                            </div>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-bold "> Identity Card</span>
                    </div>
                    <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
    
                <div class="p-4   flex justify-between items-center hover:border hover:border-[#2873FF] bg-[#F8FAFC] 
                dark:bg-[#1B2537] rounded-2xl transition-all">
    
                    <div class=" flex justify-between items-center">
                            <div class="frame relative overflow-hidden">
                                <div class="rectangle2 relative left-0.5 top-3"></div>
                                  <div class="line absolute top-2.5 left-[13px]"></div>
                                  <svg class=" absolute top-2 left-[22px] z-10" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M7 1.5V3.5C7 3.63261 7.05268 3.75979 7.14645 3.85355C7.24021 3.94732 7.36739 4 7.5 4H9.5" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.5 10.5H3.5C3.23478 10.5 2.98043 10.3946 2.79289 10.2071C2.60536 10.0196 2.5 9.76522 2.5 9.5V2.5C2.5 2.23478 2.60536 1.98043 2.79289 1.79289C2.98043 1.60536 3.23478 1.5 3.5 1.5H7L9.5 4V9.5C9.5 9.76522 9.39464 10.0196 9.20711 10.2071C9.01957 10.3946 8.76522 10.5 8.5 10.5Z" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 4.5H5" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 6.5H7.5" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 8.5H7.5" stroke="#2873FF" stroke-linecap="round" stroke-linejoin="round"/>
                                   </svg>
    
                                   <svg class=" absolute top-1 left-4" xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                                        <g filter="url(#filter0_d_635_7852)">
                                            <circle cx="12" cy="10" r="8" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_635_7852" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0872331 0 0 0 0 0.359128 0 0 0 0 0.866667 0 0 0 0.12 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_635_7852"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_635_7852" result="shape"/>
                                        </filter>
                                    </defs>
                                   </svg>
                            </div>
                                
                            <span class="text-[#10192D]  dark:text-[#F8FAFC] ml-[22px] font-bold "> Driver’s License</span>
                    </div>
                    <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                </div>
    
            </div>
    
           <div v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">
               <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_4')" 
               class="btn-primary  w-full scaling-animation
               ">Continue</button>
           </div>
        </div>


    </div>

</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

 const isDark = useDark()
const  selectedName = ref('')
const selectedIcon = ref('au')
const usersToggle = ref(false);
const filteredItem  = ref([])
const searchInput = ref("")

const isFocused = ref(false)

const showUsers = () => {
    usersToggle.value = !usersToggle.value;
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

.frame{
    width: 40px;
    height: 40px;  
    border-radius: 833.333px;
    border: 2px solid  #FFF;
    background: #2873FF;
    box-shadow: 0px 8px 16px 0px rgba(30, 41, 59, 0.04);

}

.rectangle{
    width: 24px;
height: 33px;
flex-shrink: 0;
    border-radius: 3.333px;
background:  #FFF;
}

.line{
    width: 10px;
    height: 2px;
    flex-shrink: 0;
    border-radius: 3.333px;
    background: #B9D1FF;
}


.rectangle2{
    width: 32px;
height: 33px;
flex-shrink: 0;
    border-radius: 3.333px;
background: #FFF;
}

.circle{
    width: 14px;
height: 14px;
flex-shrink: 0;
fill:  #FFF;
filter: drop-shadow(0px 2px 4px rgba(22, 92, 221, 0.12));  
}

.line2{
    width: 12px;
height: 1px;
flex-shrink: 0;
border-radius: 3.333px;
background: #DBE8FF;
}





</style>
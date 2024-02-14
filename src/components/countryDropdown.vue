<template>

    <div class="relative">

        <button
                            @click="toggle_show_country"
                            class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400]  w-full flex text-sm
                            justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] "
                        >
                            <span>{{ selected_country|| 'Country' }}</span>
                            <Icon :class="{'rotate-up': show_country }" 
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300  text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>

        </button>

        <div class="absolute top-full left-0 dark:text-[#8E9BAE]  
          pb-2 transition ease-in-out duration-300 w-full at-container"  v-show="show_country">

                <div class="relative  w-full bg-[#fff] dark:bg-[#10192D] at-item rounded-[20px]">

                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only
                    dark:text-[#E2E8F0]">Search</label>
                        
                        <div class="relative" >
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-[#FFFFFF]" aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            
                            <input @focusin="isFocused=true" @focusout="isFocused=false"
                            v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3 
                            p-4 ps-10 
                                input dark:text-[#E2E8F0] focus:ring-1 focus:ring-gray-200 dark:focus:ring-[#1B2537]" 
                                placeholder="Search countries..." required>
                        </div>
                        
                    <div class="max-h-[215px] relative overflow-y-auto px-2">
    
                        <div
                            v-for="i in filteredItem.length? filteredItem : countries"  @click="toggle_show_country(); 
                            selected_country = i.name; show_country = false; searchInput = ''"
                            class="mt-4 w-full   pb-3"
                        >
                            <a href="#" class="flex items-center w-full rounded-xl ">
                                
                                    <div class="country-flag inline-flex justify-center items-center">
                                            <country-flag :country='i.icon' size='big' class=" rounded-full"/>
                                    </div>
                            <span class="px-4 font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">{{ i.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>

        </div>
        
    </div>

</template>


<script setup>
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

 
const show_country = ref(false)
const selected_country = ref('')
const filteredItem  = ref([])
const searchInput = ref("")

const toggle_show_country =()=>{
    show_country.value = !show_country.value
    searchInput.value = ''
  }

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

.rotate-up {
  transform: rotate(180deg);
}
  .country-flag > .flag{
    width: 40px !important;
    height: 40px !important
}


div.at-container {
		height: 100%;
	}
	.at-item {
		/* width: 100%; height: 100%; */
		
		animation-name: slide-in-bck-top;
		animation-duration: 0.3s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
			
		/* shorthand
		animation: slide-in-bck-top 1s linear 0s 1 normal none;*/
	}
	@keyframes slide-in-bck-top {
			
		0% {
			transform:translateZ(700px) translateY(-27px);
			opacity:0;
		}
		100% {
			transform:translateZ(0) translateY(0);
			opacity:1;
		}
	}
</style>
<template>
  
    <!-- Your modal content goes here -->
    <div>

        <div class="mb-4 relative">

            <button
                    @click="toggle_show_payment"
                    class="btn-border-primary bg-[#fff] dark:bg-[#10192D]  text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] overflow-hidden"
                >
                    <span>{{ selected_payment || 'Payment method' }}</span>
                    <Icon  :class="{'rotate-up':show_payment}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class="absolute top-full left-0 bg-[#fff] dark:bg-[#10192D]   dark:border-[#1B2537]  w-full  
            dark:text-[#8E9BAE] transition ease-in-out duration-500 at-container
            rounded-2xl pb-2 mt-1 z-30"  v-show="show_payment" 
            :class="show_payment?'max-h-[500px] slidein transition ease-in-out duration-500':'max-h-0  overflow-hidden'">
                
                <div class=" relative overflow-y-auto at-item bg-[#fff] dark:bg-[#10192D]">

                    <div
                        v-for="i in payment_lists"  @click="toggle_show_payment();  
                        selected_payment = i" :key='i'
                        class="px-[20px] py-[16px] w-full leading-tight"
                    >
                        <ul class="flex items-center w-full rounded-xl  ">
                            <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div class="mb-4 relative">

            <button
                    @click="toggle_show_country"
                    class="btn-border-primary  bg-[#fff] dark:bg-[#10192D]  text-[#8E9BAE] font-[400]  w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] "
                >
                    <span>{{ selected_country|| 'Country' }}</span>
                    <Icon :class="{'rotate-up': show_country }" 
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300  text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class="absolute top-full left-0 bg-[#fff] dark:bg-[#10192D]  dark:text-[#8E9BAE]   at-container
            rounded-xl  pb-2 z-30   w-full"  v-show="show_country"
            :class="show_country?'max-h-[500px] slidein transition ease-in-out duration-500':'max-h-0  overflow-hidden'">

                <div class="relative overflow-y-auto at-item bg-[#fff] dark:bg-[#10192D]">
                    
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
                                                
                                    <div class="max-h-[215px] relative overflow-y-auto px-4">
                    
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

        <div class="mb-4 relative">

            <button
                    @click="toggle_show_currency"
                    class="btn-border-primary bg-[#fff] dark:bg-[#10192D]  text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                >
                    <span>{{ selected_currency || 'Currency' }}</span>
                    <Icon  :class="{'rotate-up':show_currency}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class="absolute top-full left-0  dark:border-[#1B2537]  w-full  bg-[#fff] dark:bg-[#10192D] 
            dark:text-[#8E9BAE] at-container
            rounded-2xl pb-2 mt-1 z-30 transition-all ease-out duration-300"  v-show="show_currency" 
            :class="show_currency?'max-h-[500px] slidein transition ease-in-out duration-500':'max-h-0  overflow-hidden'">
                
            
                <div class=" relative overflow-y-auto bg-[#fff] dark:bg-[#10192D] at-item">

                    <div
                        v-for="i in currency_lists"  @click="toggle_show_currency();  
                        selected_currency = i" :key='i'
                        class="px-[20px] py-[16px] w-full leading-tight"
                    >
                        <ul class="flex items-center w-full rounded-xl  ">
                            <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div class="mb-4 relative">

            <button
                    @click="toggle_show_verification"
                    class="btn-border-primary  bg-[#fff] dark:bg-[#10192D]  text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                >
                    <span>{{ selected_verification || 'Verification status' }}</span>
                    <Icon  :class="{'rotate-up':show_verification}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class=" absolute top-full left-0 dark:border-[#1B2537]  w-full   bg-[#fff] dark:bg-[#10192D] 
            dark:text-[#8E9BAE] at-container
            rounded-2xl pb-3 mt-1 z-30 transition-all ease-out duration-300"  v-show="show_verification" >
                
            
                <div class=" relative overflow-y-auto  bg-[#fff] dark:bg-[#10192D] at-item ">

                    <div
                        v-for="i in verification_status"  @click="toggle_show_verification();  
                        selected_verification = i" :key='i'
                        class="px-[20px] py-[12px] w-full leading-tight"
                    >
                        <ul class="flex items-center w-full rounded-xl  ">
                            <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- <div class="mb-4">

            <button
                    @click="toggle_show_tag"
                    class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
                    justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                >
                    <span>{{ selected_tag || 'Tags/conditions' }}</span>
                    <Icon  :class="{'rotate-up':show_tag}"  
                    name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>

            </button>

            <div class="  dark:border-[#1B2537]  w-full  dark:bg-transparent
            dark:text-[#8E9BAE] 
            rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_tag" >
                
            
                <div class=" relative overflow-y-auto">

                    <div
                        v-for="i in tag_lists"  @click="toggle_show_tag();  
                        selected_tag = i" :key='i'
                        class="px-[20px] py-[16px] w-full leading-tight"
                    >
                        <ul class="flex items-center w-full rounded-xl  ">
                            <li class="font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div> -->

        <div class="mb-4">
            <Tagselector/>
        </div>

        <input type="number" class="input   mb-4" placeholder="Minimum amount"/>
        <input type="number" class="input  mb-4" placeholder="Maximum amount"/>
    </div>


   
    
</template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue';
  import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })


  const show_payment = ref(false)
  const selected_payment = ref('')

  const show_currency = ref(false)
  const selected_currency = ref('')

  const show_verification = ref(false)
  const selected_verification = ref('')

  const show_tag = ref(false)
  const selected_tag = ref('')

  const show_country = ref(false)
  const selected_country = ref('')
  const filteredItem  = ref([])
  const searchInput = ref("")

  const toggle_show_payment =()=>{
    show_payment.value = !show_payment.value
  }

  const toggle_show_currency =()=>{
    show_currency.value = !show_currency.value
  }

  const toggle_show_verification =()=>{
    show_verification.value = !show_verification.value
  }
  const toggle_show_tag =()=>{
    show_tag.value = !show_tag.value
  }

  const toggle_show_country =()=>{
    show_country.value = !show_country.value
    searchInput.value = ''
  }

  const payment_lists = [
    'First Bank',
    'UBA',
    'Moniepoint',
    'Access Bank'
  ]

  const currency_lists = [
    'Dollar',
    'Naira',
    'Pounds',
  ]

  const verification_status = [
    'Verified',
    'Unverified',
  ]

  const tag_lists = [
    'Tag1',
    'Tag2',
  ]

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



  const { visible,btn1,btn2,amount,walletAddress,to } = defineProps({
    visible: Boolean,
    btn1:String,
    btn2:String,
    desc:String,
    amount:Number,
    walletAddress:String,
    to:Boolean,
    });
  
  const show_successful = ref(false)
  const emit = defineEmits('close','toggle_successful');


  
  const open_success = () => {
    emit('toggle_successful',show_successful);
  };
  const closeModal = () => {
    emit('close',visible);
  };
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
  
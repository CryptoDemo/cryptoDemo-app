<template>

<div>

    <button
        @click="toggle_show_currency"
        class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
    >
        <span>{{ selected_currency || 'Currency' }}</span>
        <Icon  :class="{'rotate-up':show_currency}"  
        name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
        dark:text-[#FFFFFF]"/>

    </button>

    <div class="absolute right-0 flex   dark:border-[#1B2537]  w-full  px-4
    dark:text-[#8E9BAE]  bg-[#F5F9FF] dark:bg-[#10192D]
    rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_currency" >
        
    
        <div class=" relative overflow-y-auto">

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



</template>



<script setup>
  import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })



const show_currency = ref(false)
const selected_currency = ref('')





// const show_country = ref(false)
//   const selected_country = ref('')
//   const filteredItem  = ref([])
//   const searchInput = ref("")


const toggle_show_currency =()=>{
    show_currency.value = !show_currency.value
  }



const currency_lists = [
    'Dollar',
    'Naira',
    'Pounds',
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
  

//   const filterV =(n)=>{
//         filteredItem.value = countries.filter((i)=>{
//             return  i.name.toLowerCase().includes(n.toLowerCase())

//         }) 

//         console.log(filteredItem.value)
//     }

// watch(()=>searchInput.value,(newv)=>{
//     debounce(filterV,newv)
// })

</script>



<style scoped>
.rotate-up {
transform: rotate(180deg);
}
.country-flag > .flag{
  width: 40px !important;
  height: 40px !important
}


</style>
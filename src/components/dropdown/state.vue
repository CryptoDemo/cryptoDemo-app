
<template>

    <div>
  
        <button
              @click="toggle_show_state"
              class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400] w-full flex text-sm
              justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
          >
              <span>{{ selected_state || 'Select State' }}</span>
              <Icon  :class="{'rotate-up':show_state}"  
              name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
              dark:text-[#FFFFFF]"/>
  
      </button>
  
        <div class="  dark:border-[#1B2537]  w-full  dark:bg-transparent
        dark:text-[#8E9BAE] 
        rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_state" >
            
        
            <div class=" relative overflow-y-auto">
  
                <div
                    v-for="i in state_lists"  @click="toggle_show_state();  
                    selected_state = i" :key='i'
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
    import { defineProps, defineEmits } from 'vue';
    import CountryFlag from 'vue-country-flag-next'
  
  defineComponent ({
          CountryFlag
   })
  
  
    const show_state = ref(false)
    const selected_state = ref('')
  
   
  
    const show_country = ref(false)
    const selected_country = ref('')
    const filteredItem  = ref([])
    const searchInput = ref("")
  
    const toggle_show_state =()=>{
      show_state.value = !show_state.value
    }
  
   
  
    const state_lists = [
      'First Bank',
      'UBA',
      'Moniepoint',
      'Access Bank'
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
  </style>
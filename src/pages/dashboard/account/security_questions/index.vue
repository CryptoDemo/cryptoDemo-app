<template>

<Successful v-if="show_successful" title="sucessful" subtitle="You have successfully set your security questions "/>


    <div class="px-6 pb-24  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        
        <Appbar link="/dashboard/" title="Address verification" />

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400] text-[#8E9BAE]">Choose a security question and input your answers. You'll need it in case of a phone number change.
           </p>
        </div>

        
        <div>
            <div class="my-4">
    
                <button
                        @click="showQuestion_1Toggle"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                    >
                        <span>{{ selectedQuestion1 || 'Question 1' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>

                </button>


                <div class=" border-b dark:border-[#1B2537]  w-full  dark:bg-transparent
                dark:text-[#8E9BAE] 
                rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="question_1Toggle" >
                     
                   
                    <div class=" relative overflow-y-auto">

                        <div
                            v-for="i in questions_1"  @click="showQuestion_1Toggle();  
                            selectedQuestion1 = i.text" :key='i.id'
                            class=" px-2.5 py-1.5 w-full leading-tight"
                        >
                            <ul class="flex items-center w-full rounded-xl  ">
                                <li class=" text-lg text-[#10192D] dark:text-[#F8FAFC]">
                                    {{ i.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


        
             </div>

             <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                 type="text" id="state" class="input" placeholder="Enter answer here" required>
            </div>

            <div class="mb-4">
    
                <button
                        @click="showQuestion_2Toggle"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                    >
                        <span>{{ selectedQuestion2 || 'Question 2' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>

                </button>


                <div class=" border-b dark:border-[#1B2537]  w-full  dark:bg-transparent
                dark:text-[#8E9BAE] transition-all ease-out duration-300
                rounded-2xl pb-2 mt-1 z "  v-show="question_2Toggle" >
                     
                   
                    <div class=" relative overflow-y-auto">

                        <div
                            v-for="i in questions_1"  @click="showQuestion_2Toggle();  
                            selectedQuestion2 = i.text" :key='i.id'
                            class=" px-2.5 py-1.5 w-full leading-tight"
                        >
                            <ul class="flex items-center w-full rounded-xl  ">
                                <li class=" text-lg text-[#10192D] dark:text-[#F8FAFC]">
                                    {{ i.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


        
             </div>

             <div class="mb-4">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                 type="text" id="state" class="input" placeholder="Enter answer here" required>
            </div>
            <div class="mb-4">
    
                <button
                        @click="showQuestion_3Toggle"
                        class="btn-border-primary dark:bg-transparent text-[#8E9BAE]  w-full flex text-sm
                        justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537]"
                    >
                        <span>{{ selectedQuestion3 || 'Question 3' }}</span>
                        <Icon name="solar:alt-arrow-down-bold" size="24" class="transition-all ease-in-out duration-300   text-[#8E9BAE]
                         dark:text-[#FFFFFF]"/>

                </button>


                <div class=" border-b dark:border-[#1B2537]  w-full  dark:bg-transparent
                dark:text-[#8E9BAE] transition-all ease-out duration-300
                rounded-2xl pb-2 mt-1 z"  v-show="question_3Toggle" >
                     
                   
                    <div class=" relative overflow-y-auto">

                        <div
                            v-for="i in questions_1"  @click="showQuestion_3Toggle();  
                            selectedQuestion3 = i.text" :key='i.id'
                            class=" px-2.5 py-1.5 w-full leading-tight"
                        >
                            <ul class="flex items-center w-full rounded-xl  ">
                                <li class=" text-lg text-[#10192D] dark:text-[#F8FAFC]">
                                    {{ i.text }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


        
             </div>

             <div class="">
                <input  @focusin="isFocused=true" @focusout="isFocused=false"
                 type="text" id="state" class="input" placeholder="Enter answer here" required>
            </div>

            
             
        
        </div>


      
         <div  v-show="!isFocused"  class="fixed bottom-5 left-0 w-full px-6">
             <button  @click.prevent="toggle_show_successful" 
             class="btn-primary mt-[40px] w-full ">Start verification</button>
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
const  selectedQuestion1 = ref('')
const  selectedQuestion2 = ref('')
const  selectedQuestion3 = ref('')
const question_1Toggle = ref(false);
const question_2Toggle = ref(false);
const question_3Toggle = ref(false);
const show_successful = ref(false);



const toggle_show_successful = ()=>{
    show_successful.value = true
    setTimeout(() => {
        navigateTo('/dashboard')
    }, 1000);
}


const showQuestion_1Toggle = () => {
    question_1Toggle.value = !question_1Toggle.value;
};
const showQuestion_2Toggle = () => {
    question_2Toggle.value = !question_2Toggle.value;
};
const showQuestion_3Toggle = () => {
    question_3Toggle.value = !question_3Toggle.value;
};



const questions_1 = [
    {
        text: 'What was your childhood nickname? ', 
        id:1,
    },
    {
        id:2,
        text:'what is your surname',
        
    } , 
    {
        id:3,
        text:'what is your mothers name',
        
    },
        
]
const questions_2 = [
    {
        text: 'What is favorite food', 
        id:1,
    },
    {
        id:2,
        text:'what is your surname',
        
    } , 
    {
        id:3,
        text:'what is your mothers name',
        
    },
        
]
const questions_3 = [
    {
        text: 'What is favorite food', 
        id:1,
    },
    {
        id:2,
        text:'what is your surname',
        
    } , 
    {
        id:3,
        text:'what is your mothers name',
        
    },
        
]



   

</script>
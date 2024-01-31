
<template>

    <SplashScreen v-if="showSplashScreen"/>

    <div v-else  class="fixed w-full top-0 left-0 h-screen py-4   bg-white dark:bg-[#10192D]   transition ease-linear duration-300">

        <carousel ref="carousel" v-model="currentSlide" :items-to-show="1" class="relative" :wrapAround="false">

                <slide  class="h-screen w-full absolute" >
                        <onboardingScreensOne  class="transition-all ease-in-out duration-300"/>
                </slide>

                <slide  class="h-screen w-full absolute" >
                        <onboardingScreensTwo  class="transition-all ease-in-out duration-300"/>
                </slide>

                <slide  class="h-screen w-full absolute">
                        <onboardingScreensThird  class="transition-all ease-in-out duration-300"/>
                </slide>
                
                <slide class="h-screen w-full absolute">
                        <OnboardingScreensFourth class="transition-all ease-in-out duration-300"/>
                </slide>

        </carousel>
            
                <div class=" fixed bottom-0 left-0 min-h-[20vh] w-full">
                        <div class=" mx-4 flex flex-col justify-center items-center h-full">
                        
                        <div   :class="currentSlide === 3 ? 'hidden': 'flex'" class="text-center transition-all ease-in-out duration-300" >
        
                                <div  :class="currentSlide === 0 ? 'bg-[#2873FF]': 'bg-[#E2E8F0] dark:bg-[#64748B]'"
                                class="h-[10px]   w-[10px] mx-2 rounded-full transition-all ease-in-out duration-75"></div>
                                <div  :class="currentSlide === 1 ? 'bg-[#2873FF]': 'bg-[#E2E8F0]  dark:bg-[#64748B]'"
                                class="h-[10px]   w-[10px] mx-2 rounded-full transition-all ease-in-out duration-75"></div>
                                
                                <div  :class="currentSlide === 2 ? 'bg-[#2873FF]': 'bg-[#E2E8F0]  dark:bg-[#64748B]'"
                                class="h-[10px]   w-[10px] mx-2 rounded-full transition-all 
                                ease-in-out duration-75"></div>
                                
        
                        </div>
        
        
                        <div class="pt-10 w-full " >
                                <div class="grid grid-cols-2 gap-2.5">
                                        <button  type="button"  @click.prevent="currentSlide  = 3"
                                        :class="currentSlide === 3 ? 'hidden': 'flex'"
                                        class=" scaling-animation btn-border ">
                                                Skip
                                        </button>
                        
                                        <button  @click.prevent="next()" type="button" 
                                        :class="currentSlide === 3 ? 'hidden': 'flex'"
                                        class="  scaling-animation btn-primary" >
                                                Next
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                        </button>
        
                                </div>

                                <div class="grid  grid-cols-1 w-full  mb-[20px]" :class="currentSlide === 3 ? 'flex': 'hidden'">

                                        <button   @click.prevent="navigateTo('/sign_Up')"    
                                        :class="currentSlide === 3 ? 'flex': 'hidden'"
                                        type="button" class="text-white  scaling-animation btn-primary mb-4">
                                                
                                                Create  account
                                                
                                        </button>


                                        <button @click.prevent="navigateTo('/login') " 
                                        :class="currentSlide === 3 ? 'flex': 'hidden'"  
                                        type="button" class="  scaling-animation btn-border">
                                                Login
                                        </button>
                                </div>
                        </div>
                        
        
        
                        </div>
                </div>

        
    </div>

</template>



<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineComponent({
    Carousel,
    Slide,
    Pagination,
    Navigation,

})
const currentSlide = ref(0)
const showSplashScreen = ref(true)

onMounted(()=>{
     setTimeout(() => {
        showSplashScreen.value = false
     }, 4000);

})


const next = () =>{

    currentSlide.value ++

    }



</script>
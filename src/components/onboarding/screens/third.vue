<template>

    <div class="fixed w-full top-0 left-0 p-4 mt-5 ">


      <div class="flex justify-center items-center  min-h-[50vh]">
        <div class="flex justify-center items-center ">
           <onboardingIconsBoxcoin>
                 <slot></slot>
            </onboardingIconsBoxcoin>  
        </div>
      </div>
         <div class="fixed bottom-0 left-0 h-[47vh] w-full">
               <div class=" m-4 h-full">
                 <h3 class=" text-center text-[24px] font-[800] leading-8 ">Accumulate wealth</h3>
                   <p class="text-center pt-4 text-[#8E9BAE] ">Explore multiple ways to generate income on NexQual! </p>
               </div>
         </div>
        

       
    </div>



</template>
<script>
export default{
   
    data(){
        return{
            currentSlide:0,
            onboarding_items:[
                {
                    id:1,
                    heading:'Started to Discover New Currency',
                    text:'Start trading and save your money with invest on crypto currency now'
                },
                {
                    id:2,
                    heading:'Started to Discover New Currency',
                    text:'Start trading and save your money with invest on crypto currency now'
                },
                {
                    id:3,
                    heading:'Started to Discover New Currency',
                    text:'Start trading and save your money with invest on crypto currency now'
                },
            ],
        showSplashScreen: true,

           
        }
    },

    mounted(){
        setTimeout(() => {
        this.showSplashScreen = false;
      }, 4000); 

    },

    methods:{
        prev(){
          this.currentSlide --
        },
        next(){
          this.currentSlide ++
        },
    }
}
</script>
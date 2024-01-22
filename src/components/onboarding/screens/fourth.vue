
<template>

    <div class="fixed w-full top-0 left-0 p-4 ">
         <!-- <div class="flex justify-end">
 
             <onboardingIconsBigstar>
                  <slot></slot>
             </onboardingIconsBigstar>
         </div>
 
         <div class="flex justify-center items-center min-h-[33vh]">
             <div class="relative mt-3 -left-8">
                 <div class="absolute left-14 top-10">
                       <onboardingIconsSmallstar >
                           <slot></slot>
                       </onboardingIconsSmallstar>
                 </div>
                 <div class="absolute -right-14 top-[15rem]">
                       <onboardingIconsSmallstar>
                           <slot></slot>
                       </onboardingIconsSmallstar>
                 </div>
                 <div class="relative top-20 z-30 left-8">
                     <onboardingVisaCard>
                          <slot></slot>
                     </onboardingVisaCard>
                 </div>
                 <div class="absolute top-10 z-40">
                     <OnboardingIconsEllipse127>
                         <slot></slot>
                     </OnboardingIconsEllipse127>
                 </div>
                 <div class="absolute top-[104px]">
                     <OnboardingIconsEllipse130>
                         <slot></slot>
                     </OnboardingIconsEllipse130>
                 </div>
                 <div class="absolute top-0 z-20">
                     <OnboardingIconsEllipse128>
                         <slot></slot>
                     </OnboardingIconsEllipse128>
                 </div>
                 <div class="absolute top-3.5 left-2.5 z-40">
                     <OnboardingIconsEllipse129>
                         <slot></slot>
                     </OnboardingIconsEllipse129>
                 </div>
                 <div class="absolute top-60">
                     <OnboardingIconsShadow>
                         <slot></slot>
                     </OnboardingIconsShadow>
                 </div>
             </div>
         </div> -->

         <div class="flex justify-center items-center  min-h-[60vh]">
        <div class="flex justify-center items-center ">
             <img src="/onboarding/Image1.png"/>
        </div>
      </div>
 
 
         <div class="fixed bottom-0 left-0 h-[47vh] w-full">
               <div class=" m-4 h-full">
                 <h3 class=" text-center text-[24px] font-[800] leading-8">Secure Escrow Hub</h3>
                   <p class="text-center pt-4 font-[400] text-[#8E9BAE]">Secure transactions – your funds are held safely until your deal is done</p>
               </div>
         </div>


 
        
    </div>
 
 </template>


<script setup>

const currentSlide = ref(0)

const emitprop = defineEmits('next')

const next = () =>{

    currentSlide.value ++
    emitprop('next', currentSlide.value ++)

    }



</script>
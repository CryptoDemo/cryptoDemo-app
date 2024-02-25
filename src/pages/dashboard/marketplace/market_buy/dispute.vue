<template>

   <Successful v-if="show_successful" title="sucessful" subtitle="You have successfully completed this trade with trader Bitcoinlord124 and 0.0000056BTC credited to your wallet. "/>

    <div v-else class=" min-h-screen pb-52 bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Review"/>

        <div class="pt-[80px]">

            <CardsProfileStatus />

        </div>

        <p class="mt-[34px]">Use this form to report any trade disputes. Provide details of the issue and we will be in touch
             soon.
        </p>

        <p class="mt-[24px]">Where can we contact you?</p>

        <input class="input mt-[8px]" placeholder="Email or phone"/>

        <p class="mt-[16px]">Describe the trade dispute</p>

       <div>
           <textarea class="input mt-[8px] py-[18px]" placeholder="Describe the issue"></textarea>
       </div> 

       
       
       <div class=" border-[#E2E8F0] border dark:border-[#1B2537] p-[20px] mt-[16px] rounded-[16px]
        flex flex-col  items-center" style="padding: 32px 20px !important;">

           <svg class="" xmlns="http://www.w3.org/2000/svg" width="56" height="48" viewBox="0 0 56 48" fill="none">
             <path d="M2.55077e-06 31.5809C-0.00155296 28.7908 0.708352 26.0463 2.06263 23.607C3.41691 21.1676 5.37083 19.1138 7.73974 17.6397C8.36496 12.7647 10.7452 8.28462 14.435 5.03781C18.1248 1.79099 22.8713 0 27.7862 0C32.7012 0 37.4477 1.79099 41.1375 5.03781C44.8273 8.28462 47.2075 12.7647 47.8328 17.6397C50.7711 19.4678 53.0567 22.1775 54.3633 25.3819C55.6698 28.5864 55.9305 32.1217 55.1081 35.4832C54.2856 38.8446 52.4222 41.8602 49.7837 44.0995C47.1453 46.3387 43.8668 47.6871 40.4164 47.952L15.1561 48C6.67881 47.3079 2.55077e-06 40.2249 2.55077e-06 31.5809ZM40.0324 42.9151C42.4216 42.7314 44.6916 41.7974 46.5182 40.2465C48.3449 38.6955 49.6346 36.607 50.2033 34.2793C50.772 31.9515 50.5906 29.5035 49.6849 27.2851C48.7792 25.0666 47.1956 23.1911 45.1602 21.9264L43.1217 20.6558L42.8186 18.2763C42.3464 14.6229 40.56 11.2664 37.7933 8.83424C35.0265 6.40206 31.4688 5.06062 27.785 5.06062C24.1012 5.06062 20.5434 6.40206 17.7767 8.83424C15.0099 11.2664 13.2235 14.6229 12.7514 18.2763L12.4482 20.6558L10.4148 21.9264C8.37957 23.1909 6.79597 25.0662 5.89017 27.2845C4.98437 29.5027 4.8027 31.9505 5.3711 34.2782C5.9395 36.6058 7.22891 38.6944 9.05516 40.2455C10.8814 41.7966 13.1511 42.731 15.5401 42.9151L15.9771 42.948H39.5954L40.0324 42.9151ZM30.3123 27.7918V37.8959H25.2602V27.7918H17.6822L27.7862 15.1617L37.8903 27.7918H30.3123Z" fill="#64748B"/>
           </svg>

           <span class="text-[#fff] text-sm font-[700] mt-[20px]">Upload supporting evidence </span>

           <button class="btn-primary mt-[24px]   w-full">Upload file</button>

       </div>


       <div class=" fixed bottom-5 left-0 w-full px-6 flex flex-col justify-center items-center gap-4">
            <div class="grid grid-cols-2 gap-[21px] w-full">

                <button @click.prevent="navigateTo('/dashboard')" class="btn-border w-full">Cancel</button>
                <button  @click.prevent="send"
                class="btn-primary w-full scaling-animation">Send</button>
            </div>
        </div>


    </div>

</template>

<script setup>


const reveal = ref(1)
const show_successful = ref(false)


const send =()=>{
    show_successful.value = true
    setTimeout(() => {
    navigateTo('/dashboard')
    },1000);
  
}

</script>
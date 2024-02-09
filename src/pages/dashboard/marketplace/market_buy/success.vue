<template>
    <div class="h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">


        <div class=" py-[6px] px-6 ">

            <div class=" h-[50vh] relative flex justify-center items-center ">
               
                <IconsSuccess/>

            </div>


            <div class=" h-[25vh] text-center">

                <h2 class="text-2xl text-[#10192D] font-extrabold">Successful</h2>
                <p class="text-[#8E9BAE] font-[400] mt-2">You have successfully completed this trade with trader 
                    Bitcoinlord124 and 0.0000056BTC credited to your wallet.</p>
                
            </div>


            <div class=" fixed bottom-5 left-0 w-full px-6 flex flex-col justify-center items-center gap-4">
                <div class="grid grid-cols-2 gap-[21px] w-full">

                    <button @click.prevent="navigateTo('/dashboard')" class="btn-border w-full">Home</button>
                    <button 
                    class="btn-primary w-full scaling-animation">Trade again</button>
                </div>
            </div>


        </div>

    </div>
</template>
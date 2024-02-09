<template>
    <div class="h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">


        <div class=" py-[6px] px-6 ">

            <div class=" h-[50vh] relative flex justify-center items-center ">
               
                <IconsSuccess/>

            </div>


            <div class=" h-[25vh] text-center">

                <h2 class="text-2xl text-[#10192D] font-extrabold">Successful</h2>
                <p class="text-[#8E9BAE] font-[400] mt-2">Your offer has been created. Once somebody starts a trade on this offer, 
                    the selected cryptocurrency will 
                    be automatically reserved for that trade.</p>

                <p class="mt-[24px]">Copy and share offer link below</p>
                <input class="input mt-[8px]" placeholder="WYTIDNBYG65ghht3867hja7890makgmKL998"/>

            </div>


            <div class=" fixed bottom-5 left-0 w-full px-6 flex flex-col justify-center items-center gap-4">
                <div class="grid grid-cols-2 gap-[21px] w-full">

                    <button class="btn-border w-full">Copy</button>
                    <button @click.prevent="navigateTo('/dashboard')"
                    class="btn-primary w-full scaling-animation">Home</button>
                </div>
            </div>


        </div>

    </div>
</template>
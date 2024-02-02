<template>
 
    <div class=" h-screen pb-44 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Send Coin"/>

        <p   class="mt-[80px] mb-[16px]">
            Scan receiver’s wallet barcode, their bitcoin wallet address will appear below after the scan is complete
        </p>

        <div>

            <p class="mt-[24px]">Bitcoin address</p>

            <input type="text" class="input mt-[8px] text-[#E2E8F0]" />

            <div class="flex justify-center items-center mt-[55px] relative ">

            
                <div class="w-[165.5px] h-[186.5px]  absolute">

                    <img class="max-w-[165.5px]" src="/home/qrcodeCover.png"/>

                </div>
                <div v-if="isDark" class="w-[136px]">

                    <img class="max-w-[136px]" src="/home/Qrcode123.png"/>

                </div>
                <div v-else class="w-[136px]">

                    <img class="max-w-[136px]" src="/home/Qrcode-light.png"/>

                </div>

            </div>


        </div>

        <div   class="fixed bottom-5 left-0 w-full px-6">

            <button @click.prevent="" class="btn-primary w-full scaling-animation">Continue</button>

        </div>




    
    </div>

</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
</script>
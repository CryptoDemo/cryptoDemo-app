<template>
    <div class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">
        <Appbar link="/dashboard" title="Get Coin"/>

        <p v-show="reveal === 1"  class="pt-[80px] mb-[16px]">Select the cryptocurrency you would like to get and click continue</p>
        <p v-show="reveal === 2"  class="pt-[80px] mb-[16px]">
            Send only BTC tokens through the Bitcoin network to avoid potential fund loss when using different currencies or networks.
        </p>

        <div v-show="reveal === 1" >

            <div v-for="i in 3">
                <div class="flex justify-between hover:border hover:border-[#2873FF] bg-[#F5F9FF] dark:bg-[#1B2537] rounded-[12px] mb-[16px] p-[12px]">
    
                    <div class="flex items-center">
                        <div class="w-[24px] h-[24px] mr-[3px]">
                                <img class="max-w-[24px]" src="/home/eth2.png"/>
                        </div>
                        <div class="flex flex-col ml-[8px]">
                            <span class="dark:text-[#F8FAFC] font-[600] text-[16px]">ETH<span class="text-[#8E9BAE]">/USD</span></span>
                            <span class="dark:text-[#F8FAFC] font-[600] text-[16px]">Ethereum</span>
                        </div>
                    </div>
                    
                    <span class="dark:text-[#F8FAFC] font-[600] text-[16px">3 ETH<span class="text-[#8E9BAE]">/$19,654</span></span>
    
                </div>
            </div>

        </div>

        <div v-show="reveal === 2">

            <p class="mt-[24px]">Bitcoin address</p>

            <input type="text" class="input mt-[8px] text-[#8E9BAE]" v-model="selected_wallet_address"/>

            <div class="flex justify-center items-center mt-[48px]">
                <div v-if="isDark" class="w-[191px]">

                    <img class="max-w-[191px]" src="/home/Qrcode123.png"/>

                </div>
                <div v-else class="w-[191px]">

                    <img class="max-w-[191px]" src="/home/Qrcode-light.png"/>

                </div>

            </div>


        </div>

        <div v-show="reveal === 1"  class="fixed bottom-5 left-0 w-full px-6">

        <button @click.prevent="reveal++" class="btn-primary w-full scaling-animation">Continue</button>

        </div>


        <div v-show="reveal === 2"  class="fixed bottom-5 left-0 w-full px-6">

        <button @click.prevent="copy(selected_wallet_address)" class="btn-primary w-full scaling-animation">
            <span v-if="!copied">Copy</span>
            <span v-else>Copied!</span>
        </button>
        <button @click.prevent="startShare" class="btn-border w-full scaling-animation mt-[16px]">Share</button>

        </div>

    </div>
</template>

<script setup>
import { useDark, useToggle ,useShare,useClipboard} from '@vueuse/core'

const { share, isSupported } = useShare()




const isDark = useDark()

const reveal = ref(1)
const selected_wallet_address = ref('WYTIDNBYG65ghht3867hja7890makgmKL998')
const { text, copy, copied } = useClipboard({ selected_wallet_address })

const  startShare =() =>{
  share({
    title: 'Wallet Address',
    text: selected_wallet_address.value ,
    url: location.href,
  })
}

</script>
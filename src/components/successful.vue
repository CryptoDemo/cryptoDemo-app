<template>
    <div class="h-screen   dark:bg-[#10192D] transition ease-linear duration-300">


        <div class="py-4">
            <div class=" h-[50vh] relative flex justify-center items-center">
               
                <IconsSuccess>
                    <slot></slot>
                </IconsSuccess>
                    

            </div>
            <div class=" h-[25vh] text-center">
                <h2 class="text-2xl text-[#10192D] font-extrabold capitalize">{{ props.title }}</h2>
                <p class="text-[#8E9BAE] font-[400] mt-2 px-10">{{ props.subtitle }}
                    <span class="font-[600] text-[white]"> {{ props.amount }}</span><span v-if="props.to"> to</span><span 
                    class="font-[600] text-[white]"><br> {{ props.walletAddress }}</span>
                </p>
            </div>
            <!-- <div class=" h-[20vh] flex flex-col justify-center items-center gap-4">
                <button @click.prevent="navigateTo('/dashboard')"  
                class="btn-primary w-full">done</button>
            </div> -->
        </div>

    </div>
</template>

<script setup>

const props = defineProps({
    title:{
        type:String,
    },

    subtitle:{
        type:String,
    },
    walletAddress:{
        type:String,
    },
    amount:{
        type:Number,
    },
    to:{
        type:Boolean,
    },

})

</script>
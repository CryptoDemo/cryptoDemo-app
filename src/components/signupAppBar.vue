<template>

<div class="dark:bg-[#10192D] bg-white fixed w-full top-0 left-0 px-6 py-[10px]">

    <div class="flex justify-between items-center dark:bg-[#10192D]">
        <button @click.prevent="navigateTo(`${props.link}`)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
        items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
            <Icon name="mdi:arrow-left" size="24"/>
        </button>

        <span @click.prevent="toggle_referral" class="text-[#2873FF] text-sm font-semibold leading-4">
          <span v-if="!show_referral_input">Apply referral code</span>   
          <span v-else>Hide referral code</span>   
        </span>
    </div>

</div>

</template>

<script setup>

const show_referral_input = ref(false)

const props = defineProps(
    {
        link:{
        default:'',
        },
        referral:{
            default:'',
        },
        referral_link:{
            default:'',
        }
    }
)


const emitprops = defineEmits('toggle_referral');

const toggle_referral =()=>{
    show_referral_input.value = !show_referral_input.value
    emitprops('toggle_referral', show_referral_input.value)
}

// watch(()=> show_referral_input.value ,(newVal)=>{
//   emitprops('toggle_referral',newVal)
// })

</script>
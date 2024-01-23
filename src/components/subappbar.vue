<template>
    <div class=" pt-[72px]">
        <h3 class="text-2xl font-extrabold text-[#10192D]">{{ props.heading }}</h3>
        <p class="text-sm text-[#64748B] pt-4 ">{{ props.desc }} <span class="text-[#10192D]
             dark:text-[#2873FF]">{{ props.span }}</span></p>
    </div>
</template>

<script setup>


const props = defineProps(
    {
        heading:{
        default:'',
        },
        desc:{
            default:'',
        },
        span:{
            default:""
        }

    }
)

</script>
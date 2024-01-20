<template>
    <div class="grid grid-cols-4 items-center">
        <div>
            <button @click.prevent="navigateTo(`${props.link}`)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
            items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                <Icon name="mdi:arrow-left" size="24" />
            </button>
        </div>

        <span class=" col-span-2 dark:text-white font-bold text-center">{{ props.title }}</span>

    </div>
</template>


<script setup>


const props = defineProps(
    {
        title:{
        default:'',
        },
        link:{
            default:'',
        }
    }
)


</script>
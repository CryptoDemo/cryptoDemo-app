<template>
    <div class="z-50 fixed top-0 left-0 py-[10px] px-6 grid grid-cols-4 bg-[#ffff] w-full   dark:bg-[#10192D] items-center">
        <div>
            <button @click.prevent="navigateTo(`${props.link}`)" type="button" class=" bg-[#F8FAFC]  font-medium 
            rounded-2xl text-sm p-[12px] text-center inline-flex 
            items-center   text-black dark:bg-[#1B2537] dark:text-white">
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
<template>
    <div class="px-[24px] pt-[6px] h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D]">

        <!-- <div class="flex justify-between items-center">

            <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
            items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">

                <Icon name="mdi:arrow-left" size="24" />

        </button> -->
        <LoginAppBar link="$router.go(-1)"/>

        <div>
            <h1 class="">Scan QR code</h1>
        </div>


    </div>
</template>
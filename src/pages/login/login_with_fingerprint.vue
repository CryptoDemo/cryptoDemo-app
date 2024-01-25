<template>
    <div class="px-[24px]  h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <!-- <div class="dark:bg-[#10192D] bg-white fixed w-full top-0 left-0 px-6 py-[10px]">

            <div class="flex justify-between items-center dark:bg-[#10192D]">
                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0001 12H3.62012" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

               
            </div>

        </div> -->
        <LoginAppBar link="/login/login_with_pin"/>


        <div class="text-center px-4">

            <Subappbar  heading="Login with fingerprint" 
            desc="Enter your pin to open app or touch the fingerprint sensor"/>

        </div>

        

        <div >
            <IconsBigfingerprint class=" "/>
        </div>
        
        

            
    </div>

</template>
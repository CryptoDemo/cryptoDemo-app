<template>

    <div class="px-6 py-[15px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

        <div class="grid grid-cols-4 items-center">

            <div>
                <button @click.prevent="navigateTo('/dashboard')" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2  text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
            </div>

            <span class=" col-span-2 dark:text-white font-bold text-center">Update username</span>


        </div>

        <div class=" mt-6">
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE] font-bold">To update your email address, kindly reach out to our support team.</p>
        </div>



        <div class="my-5">
                <input type="email" id="postal code" class="shadow-sm bg-transparent border border-gray-300 text-gray-900
                text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="juliajones@gmail.com" >
         </div>

      

         <button  @click.prevent="navigateTo('/dashboard/account/update_username/success')" 
         class="btn-primary mt-[57px] w-full">Contact support team</button>
    </div>

</template>
<template>

    <div class="px-6  bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard/account" title="Phone number" />

        <div class=" pt-[72px]">
           
           <p class="text-sm font-[400]  text-[#8E9BAE] ">To update your phone number, kindly reach out to our support team.</p>
        </div>



         <div class="my-4">
                <!-- <input type="text" id="question 1" class="shadow-sm bg-transparent border border-gray-200 text-gray-900 
                text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700 dark:text-[#f8FAFC] "  placeholder=""> -->
                <p class="text-sm rounded-2xl p-4 py-2 border-[#E2E8F0] dark:border-[#1B2537] border  text-[#8E9BAE] dark:text-[#8E9BAE]">What is the name of your childhood best friend</p>
         </div>

         <div class="mb-4">
                <input type="text" id="answer 1" class="input"  placeholder="Enter your answer here">
         </div>
         <div class="mb-4">

                <p class="text-sm rounded-2xl p-4 py-4 border-[#E2E8F0] dark:border-[#1B2537] border 
                 text-[#8E9BAE] dark:text-[#8E9BAE]">What is the name of your first pet</p>

         </div>
         <div class="mb-4">
                <input type="text" id="answer 2" class="input"  placeholder="Enter your answer here">
         </div>

      

         <div class="fixed bottom-5 left-0 w-full px-6">
                <button  @click.prevent="navigateTo('/dashboard/account/update_number/update')" 
                class="btn-primary mt-[57px] w-full">Submit</button>
         </div>
    </div>

</template>
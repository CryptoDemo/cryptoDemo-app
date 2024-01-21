<template>

    <div class="px-6 py-[6px] bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard" title="Update username" />

        <div class=" mt-6">
           
           <p class="text-sm text-[400] pt-4 text-[#8E9BAE] font-bold">To update your email address, kindly reach out to our support team.</p>
        </div>



        <div class="my-5">
                <input type="email" id="postal code" class="shadow-sm bg-transparent border border-gray-300 text-gray-900
                text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full py-[17px] px-[17px] dark:bg-transparent
                dark:border-gray-700" placeholder="juliajones@gmail.com" >
         </div>

      

         <button  @click.prevent="navigateTo('/dashboard/')" 
         class="btn-primary mt-[57px] w-full">Contact support team</button>
    </div>

</template>
<template>

    <div class="px-6 bg-[#fff]   dark:bg-[#10192D] h-screen overflow-y-auto">

       
        <Appbar link="/dashboard" title="Email" />

        <div class="pt-[72px]">
           
           <p class="text-sm font-[400]  text-[#8E9BAE] ">To update your email address, kindly reach out to our support team.</p>
        </div>



        <div class="mt-4">
                <input type="email" id="email" class="input" placeholder="juliajones@gmail.com" >
         </div>

      

         <div class="fixed bottom-5 left-0 w-full px-6">

             <button  @click.prevent="navigateTo('/dashboard/')" 
             class="btn-primary mt-[40px] w-full">Contact support team</button>
         </div>
    </div>

</template>
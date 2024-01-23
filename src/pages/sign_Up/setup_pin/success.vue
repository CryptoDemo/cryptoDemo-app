<template>
    <div class="h-screen  overflow-y-auto dark:bg-[#10192D] transition ease-linear duration-300">


        <div class="my-4 mx-6">
            <div class=" h-[50vh] relative flex justify-center items-center">
               
                <IconsSuccess/>

            </div>
            <div class=" h-[25vh] text-center">
                <h2 class="text-2xl text-[#10192D] font-extrabold">Successful</h2>
                <p class="text-[#8E9BAE] mt-2 font-[400]">Your pin has been set successfully!</p>
            </div>
            <div class="fixed bottom-5 left-0 px-6  w-full flex flex-col justify-center items-center gap-4">
                <button @click.prevent="navigateTo('/dashboard')"  
                class="btn-primary w-full scaling-animation">done</button>
                <!-- <button class="btn-border w-full">skip</button> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
  methods: {
    // navigateTo(path) {
    //   // Add your navigation logic here
    // }
  }
}
</script>
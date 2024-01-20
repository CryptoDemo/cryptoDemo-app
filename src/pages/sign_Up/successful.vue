<template>
    <div class="h-screen overflow-y-auto  dark:bg-[#10192D] transition ease-linear duration-300">

        <div class="py-4 px-6">
            <div class=" h-[50vh] relative flex justify-center items-center">
               
                <IconsSuccess/>

            </div>
            <div class=" h-[25vh] text-center">
                <h2 class="text-2xl text-[#10192D] font-extrabold">You’re verified!</h2>
                <p class="text-[#8E9BAE] mt-2">You have been succes fully verified</p>
            </div>
            <div class=" h-[20vh] flex flex-col justify-center items-center gap-4">
                <button @click.prevent="navigateTo('/sign_Up/add_phone_number')"  
                class="btn-primary w-full">Add phone number</button>
                <button  @click.prevent="navigateTo('/dashboard')" class="btn-border-primary w-full">skip</button>
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
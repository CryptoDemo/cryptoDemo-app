
<template>
    <div class="px-6  bg-[#ffff] dark:bg-[#10192D] h-screen overflow-y-auto">
      <Appbar link="/dashboard" title="ID Verification" />
  
      <p class="pt-[72px] pb-4 text-[#8E9BAE]">Complete verification to unlock full access to all app features.</p>
  
        <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />
      
         
  
        <div class="fixed bottom-5 left-0 w-full px-6">

          <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_1')" class="btn-primary scaling-animation w-full mt-[150px]">
            Add phone number
          </button>
        </div>
    </div>
  </template>
  
  <script setup>
  
  const selectedNumber = ref('+1');
  const selectedIcon = ref('us');
  </script>


<style scoped>
.scaling-animation {
  transition: transform 0.3s ease-in-out;
}

.scaling-animation:hover {
  transform: scale(0.955);
}
</style>

  
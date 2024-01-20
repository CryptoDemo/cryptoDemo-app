
<template>
    <div class="px-6 py-[6px] bg-[#ffff] dark:bg-gray-900 h-screen overflow-y-auto">
      <Appbar link="/dashboard" title="ID Verification" />
  
      <p class="pt-6">Complete verification to unlock full access to all app features.</p>
  
        <InputCountrySelector  :selectedNumber.sync="selectedNumber" :selectedIcon.sync="selectedIcon" :isdisabled="false" />
      
         
  
      <button @click.prevent="navigateTo('/dashboard/account/verification/ID/stage_1')" class="btn-primary scaling-animation w-full mt-[150px]">
        Add phone number
      </button>
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

  
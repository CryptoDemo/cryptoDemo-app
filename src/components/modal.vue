<!-- Modal.vue -->
<template>
    <div v-if="visible" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50 px-6">
      <!-- Background glass overlay -->
      <div v-if="visible"  class="fixed inset-0 glass z-40" @click="visible = false"></div>
  
      <!-- Modal content -->
      <div class="bg-[#F1F5F9] rounded-lg px-5 py-6 w-96 fade z-50">
        <!-- Your modal content goes here -->
        <div>
          <h2 class="text-xl font-bold mb-4 text-[#10192D] dark:text-[#10192D] text-center">Confirm changes</h2>
          <p class="text-sm text-[#8E9BAE] font-[400] text-center">To apply the language change, please restart the app.</p>
        </div>
  
        <!-- Close button -->
        <div class="flex justify-end ">

            <button @click="visible = false" class="mt-4 font-bold  capitalize bg-transparent text-[#64748B] py-2 px-4 rounded-md">
              cancel
            </button>
            <button @click="visible = false" class="mt-4 font-bold bg-transparent capitalize text-[#2873FF] py-2 px-4 rounded-md">
                Restart
            </button>

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const { visible } = defineProps({
    visible: Boolean,
  });
  
  const emit = defineEmits('close');
  
  const closeModal = () => {
    emit('close',visible);
  };
  </script>

  <style scoped>

  .glass{
/* From https://css.glass */
background: rgba(255, 255, 255, 0.11);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.9px);
-webkit-backdrop-filter: blur(1.9px);


  }
  .fade{
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
  
  
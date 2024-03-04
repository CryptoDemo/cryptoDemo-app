<!-- Modal.vue -->
<template>
    <div v-if="visible" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50 px-6">
      <!-- Background glass overlay -->
      <div v-if="visible"  class="fixed inset-0 glass z-40" @click="visible = false"></div>
  
      <!-- Modal content -->
      <div  class="bg-[#F1F5F9] dark:bg-[#1B2537] rounded-lg px-5  py-6 w-96 zoom-in z-50"
      :class="visible?'zoom-in':'zoom-out'">
        <!-- Your modal content goes here -->
        <div>
          <h2 class="text-xl font-bold mb-4 text-[#10192D] dark:text-[#F8FAFC] text-center">Confirm changes</h2>
          <p class="text-sm text-[#8E9BAE] dark:text-[#E2E8F0] font-[400] text-left">
              {{ desc }} <span class="font-[600] text-[#10192D]  dark:text-[white]">{{ amount }}</span><span v-if="to"> to</span><span 
              class="font-[600] text-[#10192D]  dark:text-[white]"><br>{{ walletAddress }}</span>
          </p>
        </div>
  
        <!-- Close button -->
        <div class="flex justify-end ">

            <button v-if="btn1 === 'Sign out'" @click.prevent="signOut" class="mt-4 font-bold  capitalize bg-transparent text-[#64748B] dark:text-[#64748B]
             py-2 px-4 rounded-md">
              {{ btn1 }}
            </button>

            <button v-else @click.prevent="visible = false" class="mt-4 font-bold  capitalize bg-transparent text-[#64748B] dark:text-[#64748B]
             py-2 px-4 rounded-md">
              {{ btn1 }}
            </button>
           
            <button v-if="btn2 === 'Log out'"  @click="pinia.clearUser" class="mt-4 font-bold bg-transparent capitalize text-[#E33E38] py-2 px-4 rounded-md">
                {{ btn2 }}
            </button>
            <button v-else  @click="open_success" class="mt-4 font-bold bg-transparent capitalize text-[#2873FF] py-2 px-4 rounded-md">
                {{ btn2 }}
            </button>

        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue';
  import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
  
  const { visible,btn1,btn2,amount,walletAddress,to } = defineProps({
    visible: Boolean,
    btn1:String,
    btn2:String,
    desc:String,
    amount:Number,
    walletAddress:String,
    to:Boolean,
    });
  
    const toast = useToast()
const pinia = useStore()
  const show_successful = ref(false)
  const emit = defineEmits('close','toggle_successful');

  
  const open_success = () => {
    show_successful.value = !show_successful.value
    emit('toggle_successful',show_successful);
  };

  const closeModal = () => {
    emit('close',visible);
  };

  const signOut = async()=>{
    pinia.state.isPinSet = false
    
    try {

    // Call the remove method to delete the data associated with the specified key
    await SecureStoragePlugin.remove({ key: 'pin' });
    await SecureStoragePlugin.remove({ key: 'email' });
    await SecureStoragePlugin.remove({ key: 'password' });
    await SecureStoragePlugin.remove({ key:'user_account_created'});

    console.log('Data deleted successfully from Secure Storage');

    pinia.state.isPinSet = false
    
     navigateTo('/login')

    } catch (error) {
    console.error('Error deleting data from Secure Storage:', error);
    // Handle error: display a message to the user or perform other actions
    }
  }
</script>

  <style scoped>

  .glass{
/* From https://css.glass */
background: rgba(255, 255, 255, 0.11);
/* border-radius: 16px; */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(1.9px);
-webkit-backdrop-filter: blur(1.9px);


  }
  
  .zoom-in{
    animation: zoomInAnimation 0.5s ease-in-out;
  }
  .zoom-out{
    animation: zoomOutAnimation 0.5s ease-in-out;
  }

  
@keyframes zoomInAnimation {
  0% {
    transform: scale(0);
    opacity:0,
  }
  100% {
    transform: scale(1);
    opacity:1,
  }
}

@keyframes zoomOutAnimation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
  
  
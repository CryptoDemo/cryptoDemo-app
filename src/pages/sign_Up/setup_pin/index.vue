

<template>
    <!-- Main container -->
    <div class="max-w-full h-screen overflow-y-auto dark:bg-[#10192D] transition ease-linear duration-300">
      <div class="px-6 pt-[6px] ">
        <!-- Login app bar -->
        <LoginAppBar link="/sign_Up"/>
        <!-- Subtitle -->
        <div class="text-center">
          <Subappbar heading="Create New Pin" desc="This adds an extra layer of security to your account. Use pin to unlock app!"/>
        </div>
        <!-- Pin input section -->
        <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
          <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered="v => pin = v"/>  
        </div>
        <!-- Continue button section -->
        <div v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">
          <button @click.prevent="setPin"  class="w-full btn-primary mt-[75px] scaling-animation">
            <!-- Loading state indicator -->
            <span v-if="loading">
              <Loader/>
            </span>
            <!-- Continue button text -->
            <span v-else>
              Continue
            </span>
          </button>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref } from "vue";
  import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
  import { useStore } from '@/stores/index'
  
  const toast = useToast()
  const pinia = useStore()
  // Reactive variables
  const loading = ref(false); // Loading state indicator
  const pin = ref(''); // Pin input value
  const isFocused = ref(false); // Pin input focus state
  
  // Function to set the PIN
  const setPin = async () => {
    console.log(pin.value)
          // Check if PIN value is exactly 4 digits
        if (pin.value.length !== 4) {
            const info =  toast.message(`PIN must be 4 digits long`, {
                position: 'top',
                timeout: 2000,
            })
            return info
        }

      loading.value = true; // Set loading state to true

    try {
      // Set PIN value in secure storage
      await SecureStoragePlugin.set({ key:'pin', value: pin.value});
      await SecureStoragePlugin.set({ key:'userData', value: JSON.stringify(pinia.state?.user)});
    //   alert('PIN set successfully');
        pinia.state.isPinSet = true
      // Redirect or perform other actions
      navigateTo('/sign_Up/setup_pin/success')
    } catch (error) {
      console.error('Error setting PIN:', error);
      // Handle error: display a message to the user or perform other actions
    } finally {
      loading.value = false; // Set loading state back to false
    }
  };
</script>
  
  
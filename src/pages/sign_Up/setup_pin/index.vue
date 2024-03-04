

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
        <div class="mt-[42px] px-5 flex flex-col justify-center items-center otp">
          <!-- <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered="v => pin = v"/>   -->
            <MazInputCode @focusin="isFocused=true" @focusout="isFocused=false"  v-model="pin"  outline=""  class="text-black dark:text-white"/>

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
  import './assets//css/maz-ui-variables.css'
import MazInputCode from 'maz-ui/components/MazInputCode'
  
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
      await SecureStoragePlugin.set({ key:'user_account_created', value: 'true'});
      await SecureStoragePlugin.set({ key:'email', value: pinia.state.user?.email});
      // await SecureStoragePlugin.set({ key:'password', value: pinia.state.user?.password});
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

<style scoped>


.otp >>> fieldset{
   width: 100% !important;
   display: flex;
   justify-content: space-between;
   margin: 0 16px !important;
}
.otp >>> .input-wrapper{
   height: 56px !important;
   width: 56px !important;
   border-radius: 16px !important;
   /* border: 1px solid  var(--light-border-color); */
}

.otp >>> input{
  border: none;

}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  
  .otp >>> .input-wrapper {
    background-color: transparent !important; /* Dark mode background color */
    /* border: 1px solid var(--dark-border-color) ;  */
  }
}



</style>
  
  
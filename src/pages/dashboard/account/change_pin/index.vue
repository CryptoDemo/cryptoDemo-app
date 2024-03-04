<template>
    <div>
      <Successful v-if="show_successful" title="Successful" subtitle="You have successfully changed your PIN" />
  
      <div v-else class="h-screen overflow-y-auto dark:bg-[#10192D] transition ease-linear duration-300">
        <div class="px-6">
          <Appbar link="/dashboard" title="Change PIN" />
  
          <div v-if="reveal === 0" class="my-6 text-center">
            <Subappbar heading="Enter PIN" desc="Enter your current PIN" />
          </div>
          <div v-if="reveal === 1" class="my-6 text-center">
            <Subappbar heading="Set new PIN" desc="Enter a new PIN to secure your wallet" />
          </div>
          <div v-if="reveal === 2" class="my-6 text-center">
            <Subappbar heading="Re-enter new PIN" desc="Re-enter the new PIN to secure your wallet" />
          </div>
  
          <div v-if="reveal === 0" class="mt-[42px] px-5 flex flex-col justify-center items-center otp">
            <!-- <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered=" v => my_pin = v" /> -->
              <MazInputCode @focusin="isFocused=true" @focusout="isFocused=false"  v-model="my_pin"  outline=""  class="text-black dark:text-white"/>

          </div>
          <div v-if="reveal === 1" class="mt-[42px] px-5 flex flex-col justify-center items-center otp">
            <!-- <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered=" v => new_pin = v" /> -->
              <MazInputCode @focusin="isFocused=true" @focusout="isFocused=false"  v-model="new_pin"  outline=""  class="text-black dark:text-white"/>

          </div>
          <div v-if="reveal === 2" class="mt-[42px] px-5 flex flex-col justify-center items-center otp">
            <!-- <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered=" v => reentered_new_pin = v" /> -->
              <MazInputCode @focusin="isFocused=true" @focusout="isFocused=false"  v-model="reentered_new_pin"  outline=""  class="text-black dark:text-white"/>

          </div>
  
          <div v-show="!isFocused" class="fixed bottom-5 left-0 w-full px-6">
            <button @click.prevent="changePin" class="w-full btn-primary mt-[75px] scaling-animation">
              <span v-if="reveal === 0">Change PIN</span>
              <span v-if="reveal === 1">Continue</span>
              <span v-if="reveal === 2">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
  import './assets//css/maz-ui-variables.css'
  import MazInputCode from 'maz-ui/components/MazInputCode'
  
const loading = ref(false)
  const isFocused = ref(false);
  const reveal = ref(0);
  const show_successful = ref(false);
  const my_pin = ref(null);
  const new_pin = ref(null);
  const reentered_new_pin = ref(null);

  const toast = useToast()
  
  const changePin = async () => {
    loading.value = true
    if (reveal.value === 0) {
      // Check if the entered PIN matches the stored PIN
      const storedPin = await SecureStoragePlugin.get({ key: 'pin' });
      if (storedPin.value !== my_pin.value) {

        toast.message('Incorrect current PIN. Please try again.', {
        position: 'top',
        timeout: 2000
    })
    loading.value = false
        return;
      }
      reveal.value++;
    } else if (reveal.value === 1) {
      reveal.value++;
    } else if (reveal.value === 2) {
      // Check if the new PIN and re-entered new PIN match
      if (new_pin.value !== reentered_new_pin.value) {

        toast.message('New PIN and re-entered PIN do not match. Please try again.', {
        position: 'top',
        timeout: 2000
    })
    loading.value = false
        return;

      }
  
      // Save the new PIN to secure storage
      await SecureStoragePlugin.set({ key: 'pin', value: new_pin.value });
      show_successful.value = true;
  
      // Reset input fields and navigate after a delay
      setTimeout(() => {
        resetInputs();
        navigateTo('/dashboard');
      }, 1000);
    }
    loading.value = false
  };
  
  const resetInputs = () => {
    my_pin.value = null;
    new_pin.value = null;
    reentered_new_pin.value = null;
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
  
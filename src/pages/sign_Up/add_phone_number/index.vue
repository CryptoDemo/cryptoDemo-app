

<template>
  <!-- Main container -->
  <div class="max-w-full h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
    <div class="px-6 pt-[6px]">

      <!-- Navigation Bar -->
      <LoginAppBar link="/sign_Up/successful"/>

      <!-- Sub Header -->
      <div class="mb-[34px]">
        <Subappbar heading="Add phone number" desc="It only takes a minute to do this for an extra layer of security to your account."/>
      </div>

      <!-- Input Country Selector -->
      <InputCountrySelector @number="v => number = v" :selectedCountryCode="selectedCountryCode" :selectedIcon="selectedIcon" :isdisabled="true"/>

      <!-- Buttons -->
      <div class="fixed bottom-5 left-0 w-full px-6 flex gap-5 transition ease-in-out duration-500">
        <!-- Skip Button -->
        <button @click.prevent="navigateTo('/sign_Up/setup_pin')" class="w-full btn-border scaling-animation">Skip</button>

        <!-- Proceed Button -->
        <button :disabled="!recaptchaValid" @click.prevent="recaptchaValid ? addPhoneNumber() : null" class="btn-primary w-full" :class="!recaptchaValid ? 'bg-[#8E9299] text-[#6D7179] hover:bg-[#8E9299] dark:text-[#6D7179]':''">
          <Loader v-if="loading"/> <!-- Loader -->
          <span v-else>Proceed</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { showKeyboard } from '@/composables/capacitor_plugins';
const toast = useToast();
const pinia = useStore();
const selectedCountryCode = pinia.state.country?.code || '+234';
const selectedIcon = pinia.state.country?.icon || 'ng';
const number = ref('');
const loading = ref(false);
const recaptchaValid = ref(false);

// Watch for changes in the phone number input
watchEffect(() => {
  if (number.value) {
    recaptchaValid.value = true;
  } else {
    recaptchaValid.value = false;
  }
});

// Function to add the phone number
const addPhoneNumber = async () => {
  loading.value = true;
  try {
    const data = await fetch(`${baseURL}auth/add-phone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
      },
      body: JSON.stringify({ phone: number.value })
    }).then(res => res.json());
    
    // Check if the request was successful
    if (data.success) {
      loading.value = false;
      navigateTo('/sign_Up/add_phone_number/verify');
    } else {
      // Display error message
      toast.message(`${data.message}`, {
        position: 'top',
        timeout: 2000
      });
      loading.value = false;
    }
  } catch (error) {
    console.error('Error during resending of otp code:', error);
    // Display error message
    toast.message(error, {
      position: 'top',
      timeout: 2000
    });
    loading.value = false;
  }
};

// Initialize Flowbite on component mount
onMounted(() => {
  initFlowbite();
});
</script>


<style scoped>



</style>
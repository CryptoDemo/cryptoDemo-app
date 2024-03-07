<template>
  <div class="max-w-full h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D]">
    <div class="px-6 pt-[15px] h-screen">

      <!-- Back Button -->
      <div class="flex justify-between items-center mb-3">
        <button @click.prevent="$router.go(-1)" type="button" class="bg-[#F8FAFC] font-medium rounded-2xl text-sm p-[12px] text-center inline-flex items-center me-2 dark:bg-[#1B2537] dark:text-white">
          <Icon name="mdi:arrow-left" size="24"/>
        </button>
      </div>

      <!-- Verification Code Section -->
      <div class="my-4 p-4">
        <h3 class="text-2xl font-bold text-[#10192D]">Enter Verification Code</h3>
        <p class="text-sm text-[400] pt-4 text-[#8E9BAE]">
          Enter the 4-digit code we just sent to your phone number 
          <span class="text-[#10192D]">{{ pinia.state.user?.phone }}</span>
        </p>
      </div>

      <!-- OTP Input and Resend Code -->
      <div class="mt-[42px] px-5 flex flex-col justify-center items-center ">
        <InputOtp @focusin="isFocused=true" @focusout="isFocused=false" :length="4" @entered="v => otpValue = v"/>
        <p v-if="countdownSeconds === 0" class="mt-[38px] text-center">
          <button @click.prevent="resendCode" class="text-[#2873FF] font-[600]">Resend code</button> in 
          <span class="text-[#2873FF]">{{countdownDisplay}}</span>
        </p>
        <p v-else class="mt-[38px] text-center">Resend code in <span class="text-[#2873FF] font-[600]">{{countdownDisplay}}</span></p>
      </div>

    </div>

    <!-- Verify Button -->
    <div class="fixed bottom-5 left-0 w-full px-6">
      <button :disabled="!recaptchaValid" @click.prevent="recaptchaValid ? verifyAccount() : null" 
        class="btn-primary mt-[40px] w-full" :class="!recaptchaValid ? 'bg-[#8E9299] text-[#6D7179] hover:bg-[#8E9299] dark:text-[#6D7179]' : ''">
        <Loader v-if="loading"/>
        <span v-else>Verify</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { baseURL } from "@/composables/configs";
import { useStore } from "@/stores/index";
const toast = useToast();

// Variables
const pinia = useStore();
const loading = ref(false);
const otpValue = ref('');
const isFocused = ref(false);
const countdownSeconds = ref(60);
const userEmail = ref('juliajames@gmail.com');
const recaptchaValid = ref(false);

// Countdown Timer
const countdownDisplay = computed(() => {
  const minutes = Math.floor(countdownSeconds.value / 60);
  const seconds = countdownSeconds.value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});
const countdownTimer = setInterval(() => {
  if (countdownSeconds.value > 0) countdownSeconds.value--;
}, 1000);

// Reset countdown on route change
const resetCountdown = () => {
  clearInterval(countdownTimer);
  countdownSeconds.value = 60;
};

// Watchers
watch(countdownSeconds, (newValue) => {
  if (newValue === 0) resetCountdown();
});
watchEffect(() => {
  recaptchaValid.value = otpValue.value.length === 4;
});

// Methods
const resendCode = async () => {
  try {
    const data = await fetch(`${baseURL}auth/resend-email-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: pinia.state.user.phone })
    }).then(res => res.json());
    resetCountdown();
    console.log(data.message);
  } catch (error) {
    console.error('Error during resending of otp code:', error);
    toast.message(error, { position: 'top', timeout: 2000 });
  }
};

const verifyAccount = async () => {
  const requestValue = { phone: pinia.state.user.phone, code: otpValue.value };
  loading.value = true;
  try {
    const data = await fetch(`${baseURL}auth/verify-phone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${pinia.state.user?.token}`
      },
      body: JSON.stringify(requestValue)
    }).then(res => res.json());
    if (data.success) {
      if (data.message === 'success') {
        console.log('Verification successful. Proceed with account verification.');
        loading.value = false;
        navigateTo('/sign_Up/successful');
      } else {
        console.error('Invalid OTP. Please enter the correct verification code.');
        toast.message('Invalid OTP. Please enter the correct verification code.', { position: 'top', timeout: 2000 });
      }
    } else {
      console.error('Failed to verify OTP:', data.message);
      toast.message('Failed to verify OTP', { position: 'top', timeout: 2000 });
    }
    loading.value = false;
  } catch (error) {
    console.error('An error occurred while verifying OTP:', error);
    toast.message('An error occurred while verifying OTP or account already verified', { position: 'top', timeout: 2000 });
    loading.value = false;
  }
};

watch(() => otpValue.value, (newVal) => {
  if (newVal.length === 4) verifyAccount();
});
</script>

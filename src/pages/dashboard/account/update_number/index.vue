<template>
    <!-- Display successful message if show_successful is true -->
    <Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your phone number"/>
  
    <!-- Main container -->
    <div v-else class="max-w-full h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
      <div class="px-6 pb-24">
        
        <!-- Appbar -->
        <LoginAppBar link="/dashboard"/>
        
        <!-- Subappbar -->
        <Subappbar class="mb-4" heading="Add phone number" desc="Add your phone number to complete this process"/>
  
        <!-- InputCountrySelector -->
        <InputCountrySelector @number="v => phone = v" :isdisabled="false"/>
  
        <!-- Save button -->
        <div class="fixed bottom-5 left-0 w-full px-6">
          <button :disabled="!recaptchaValid" @click.prevent="recaptchaValid ? updatePhone() : null" class="btn-primary mt-[40px] w-full" :class="!recaptchaValid ? 'bg-[#8E9299] text-[#6D7179] hover:bg-[#8E9299] dark:text-[#6D7179]':''">
            <Loader v-if="loading"/> <!-- Loader -->
            <span v-else>Save</span>
          </button>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { initFlowbite } from 'flowbite';
  const show_successful = ref(false);
  const toast = useToast();
  
  // Function to toggle show_successful value and navigate after a delay
  const toggle_show_successful = () => {
    show_successful.value = true;
    setTimeout(() => {
      navigateTo('/dashboard');
    }, 1000);
  };
  
  const pinia = useStore();
  const phone = ref('');
  const recaptchaValid = ref(false);
  const loading = ref(false);
  
  // Watch for changes in the phone number input
  watchEffect(() => {
    if (phone.value.length) {
      recaptchaValid.value = true;
    } else {
      recaptchaValid.value = false;
    }
  });
  
  // Function to update the phone number
  const updatePhone = async () => {
    loading.value = true;
    const phoneinfo = { phone: phone.value };
    const info = { ...pinia.state.user, ...phoneinfo };
  
    try {
      const data = await fetch(`${baseURL}user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token' : `${pinia.state.user?.token}`
        },
        body: JSON.stringify(info)
      }).then(res => res.json());
  
      if (data.success) {
        loading.value = false;
        const user = { ...info };
        pinia.setUser(user);
        toggle_show_successful();
      } else {
        // Display error message
        toast.message(`${data.message}`, {
          position: 'top',
          timeout: 2000
        });
        loading.value = false;
      }
    } catch (error) {
      // Display error message
      toast.message(error, {
        position: 'top',
        timeout: 2000
      });
    }
  };
  
  onMounted(() => {
    initFlowbite();
  });
  </script>
  
<template>
    <!-- Display successful message if show_successful is true -->
    <Successful v-if="show_successful" title="sucessful" subtitle="You have successfully changed your username permanently"/>
  
    <!-- Main container -->
    <div v-else class="px-6 bg-[#fff] dark:bg-[#10192D] h-screen overflow-y-auto">
      
      <!-- Appbar -->
      <Appbar link="/dashboard" title="Update username" />
  
      <!-- Description -->
      <div class="pt-[72px]">
        <p class="text-sm font-[400] text-[#8E9BAE]">This username is auto-generated and can be changed only once.</p>
      </div>
  
      <!-- Input field for new username -->
      <div class="mt-4">
        <input type="text" v-model.trim="username" id="username" class="input" :placeholder="pinia.state.user?.username" >
      </div>
  
      <!-- Save button -->
      <div class="fixed bottom-5 left-0 w-full px-6">
        <button :disabled="!recaptchaValid" 
        @click.prevent="recaptchaValid ? updateUsername() : null" 
        class="btn-primary mt-[40px] w-full" 
        :class="!recaptchaValid ? 'bg-[#8E9299] text-[#6D7179] hover:bg-[#8E9299] dark:text-[#6D7179]':''">
          <Loader v-if="loading"/> <!-- Loader -->
          <span v-else>Save new username</span>
        </button>
      </div>
  
    </div>
</template>
  
<script setup>
  const pinia = useStore();
  const toast = useToast();
  const show_successful = ref(false);
  const username = ref('');
  const recaptchaValid = ref(false);
  const loading = ref(false);
  
  // Watch for changes in the username input
  watchEffect(() => {
    if (username.value.length) {
      recaptchaValid.value = true;
    } else {
      recaptchaValid.value = false;
    }
  });
  
  // Function to toggle show_successful value and navigate after a delay
  const toggle_show_successful = () => {
    show_successful.value = true;
    setTimeout(() => {
      navigateTo('/dashboard');
    }, 1000);
  };
  
  // Function to update the username
  const updateUsername = async () => {
    loading.value = true;
    const usernameinfo = { username: username.value };
    const userToken = `${pinia.state.user.token}`;
    const info = { ...pinia.state.user, ...usernameinfo };
    delete info.token;
    
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
        const user = { ...info, token: userToken };
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
</script>
  
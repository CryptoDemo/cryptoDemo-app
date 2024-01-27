<template>

    <div class="max-w-full h-screen overflow-y-auto mx-auto transition dark:bg-[#10192D] ease-linear duration-300">
        <div class="px-6   ">
            <!-- <div class="flex justify-between items-center">
    
                <button @click="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                    <Icon name="mdi:arrow-left" size="24" />
                </button>
    
            </div> -->
            <LoginAppBar link="/login/verify_password_reset"/>
            
            <div class="">

                  <Subappbar  heading="Create new password" 
                    desc="Create a new password to keep your account safe "
                    />

            </div>
    
    
              <form class="mt-[32px]">

                <div class="mb-4">
                       
                      <InputPassword    @focusin="isFocused=true" @focusout="isFocused=false"/>
                </div>

                <div class="">
                       
                       <InputPassword    @focusin="isFocused=true" @focusout="isFocused=false"/>

                </div>

              </form>
           
             <div v-show="!isFocused"     class="fixed bottom-5 left-0 w-full px-6">
               <button @click.prevent="navigateTo('/login/success')"  class="w-full btn-primary mt-[40px] scaling-animation">Create new password</button>
             </div>
        </div>

    </div>

        


</template>
<script>
export default {
  data() {
    return {
      password: '',
      newPassword:'',
      showPassword1: false,
      showPassword2: false,
      isFocused:false,
    };
  },
  methods: {
    togglePassword1Visibility() {
      this.showPassword1 = !this.showPassword1;
    },
    togglePassword2Visibility() {
      this.showPassword2 = !this.showPassword2;
    },
  },
};
</script>
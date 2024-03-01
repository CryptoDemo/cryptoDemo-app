<template>
    <div class="px-[24px]  h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
        <!-- <div class="dark:bg-[#10192D] bg-white fixed w-full top-0 left-0 px-6 py-[10px]">

            <div class="flex justify-between items-center dark:bg-[#10192D]">
                <button @click.prevent="$router.go(-1)" type="button" class=" bg-[#F8FAFC]  font-medium rounded-2xl text-sm p-[12px] text-center inline-flex 
                items-center me-2 text-black dark:bg-[#1B2537] dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0001 12H3.62012" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#10192D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <span @click.prevent="navigateTo(`/login`)" class="text-[#2873FF] text-sm font-semibold leading-4 pr-2">
                   </span>
            </div>

        </div> -->
        <SignupAppBar link="/login" referral_link="/login" referral="  Login with email"/>



        <div class="text-center px-4">

            <Subappbar  heading="Login" 
            desc="Enter your pin to open app or touch the fingerprint sensor "
            />

         </div>

         <div class="mt-[42px] px-5 flex flex-col justify-center items-center">
                   
                   <InputOtp :length="4" @entered=" v => otpvalue = v"/>  
                       
   
           </div>


            <button @click.prevent="login"  class=" btn-primary mt-[32px] w-full scaling-animation">
                        login
            </button>

            <div class="flex justify-end w-full  mt-6">
                      
                      <a @click.prevent="openModal" href="#" 
                      class="text-[#2873FF] text-[14px] font-bold hover:underline dark:text-[#2873FF]">Forgot Pin?</a>
                   
            </div>


             <div class="flex items-center justify-center pt-[6px]">
                  <iconsFingerprint @click.prevent="navigateTo('/login/login_with_fingerprint')"/>    
             </div>


             <Modal @open="visible"  :visible="visible" btn1="sign out" btn2="cancel"
             desc="To reset your pin; Sign out, login  and set up a new pin"/>

    </div>

</template>



<script setup>
import { ref } from "vue";
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

const toast = useToast()
const pinia = useStore()
const visible = ref(false);
const otpvalue = ref(false); //collecting th otp pin values

const openModal = () => {
  visible.value = !visible.value;
};

const login = async () => {
  try {
    // Retrieve the stored PIN from secure storage
    const storedPin = await SecureStoragePlugin.get({ key: 'pin' });
    const storedUserData = await SecureStoragePlugin.get({ key: 'userData' });
    console.log(storedPin.value)
    console.log(JSON.parse(storedUserData.value))
    // Compare the entered PIN with the stored PIN
    if (otpvalue.value === storedPin.value) {
      // PIN matches, allow the user to log in
      pinia.setUser(JSON.parse(storedUserData.value))
      navigateTo('/dashboard'); // Navigate to the dashboard or any desired page
    } else {
      // PIN doesn't match, display an error message
      toast.message('Incorrect PIN. Please try again.', {
        position: 'top',
        timeout: 2000,
      })
    }
  } catch (error) {
    console.error('Error retrieving PIN:', error);
    // Handle error: display a message to the user or perform other actions
  }
};

</script>
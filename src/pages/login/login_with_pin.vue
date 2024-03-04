<template>
    <div class="px-[24px]  h-screen overflow-y-auto bg-white dark:bg-[#10192D] transition ease-linear duration-300">
       
        <SignupAppBar link="/login" referral_link="/login" referral="Login with email"/>



        <div class="text-left px-4">

            <Subappbar  heading="Login" 
            desc="Enter your pin to open app or touch the fingerprint sensor "
            />

         </div>

         <div class="mt-[42px] px-5 flex flex-col justify-center items-center otp">
                   
              <!-- <InputOtp :length="4" @entered=" v => otpvalue = v"/>   -->
                <MazInputCode @focusin="isFocused=true" @focusout="isFocused=false"  v-model="code"  outline=""  class="text-black dark:text-white"/>
                       
   
           </div>


            <button @click.prevent="login"  class=" btn-primary mt-[32px] w-full scaling-animation">
                        <Loader v-if="loading"/>
                        <span v-else>
                          Login
                        </span>
            </button>

            <div class="flex justify-end w-full  mt-6">
                      
                      <a @click.prevent="openModal" href="#" 
                      class="text-[#2873FF] text-[14px] font-bold hover:underline dark:text-[#2873FF]">Forgot Pin?</a>
                   
            </div>


             <div v-if="pinia.state.isFingerprintSet" class="flex items-center justify-center pt-[6px]">
                  <iconsFingerprint @click.prevent="performBiometricVerification"/>    
             </div>


             <Modal @open="visible"  :visible="visible"  btn1="Sign out" btn2="Cancel"
             desc="To reset your pin; Sign out, login  and set up a new pin"/>

    </div>

</template>



<script setup>
import { ref } from "vue";
import './assets//css/maz-ui-variables.css'
import MazInputCode from 'maz-ui/components/MazInputCode'
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { NativeBiometric, BiometryType } from "@capgo/capacitor-native-biometric";


const toast = useToast()
const pinia = useStore()
const visible = ref(false);
const code = ref(''); //collecting th otp pin values

const loading = ref(false)

const openModal = () => {
  visible.value = !visible.value;
};

const device =  await deviceInfo()

const login = async () => {

  loading.value = true

  try {
    // Retrieve the stored PIN from secure storage
    const storedPin = await SecureStoragePlugin.get({ key:'pin' });
    const storedUserEmail = await SecureStoragePlugin.get({ key: 'email' });
    const storedUserPassword = await SecureStoragePlugin.get({ key: 'password' });

   console.log(storedPin.value)

    const login_info ={
      email:  storedUserEmail.value,
      password: storedUserPassword.value,
      device_info: JSON.stringify(device),

    }

    console.log(login_info)

    // Compare the entered PIN with the stored PIN
    if (code.value === storedPin.value) {
      // PIN matches, allow the user to log in
      const data = await fetch(`${baseURL}auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'x-access-token' : `${pinia.state.user?.token}`
      },

      body: JSON.stringify(login_info)

      })
        .then(res=>res.json());

        console.log(data.message)
        loading.value = false

        if(data.success){

          const user = data.data
          pinia.setUser(user)
      
          navigateTo('/dashboard')
        }else{
          toast.message(`${data.message}`, {
            position: 'top',
            timeout: 2000
        })
        loading.value = false
      }
    } else {
      // PIN doesn't match, display an error message
      toast.message('Incorrect PIN. Please try again.', {
        position: 'top',
        timeout: 2000,
      })
      loading.value = false
    }
    loading.value = false
  } catch (error) {
    console.error('Error retrieving PIN:', error);
    // Handle error: display a message to the user or perform other actions
    loading.value = false
  }
};


const Forgot_pin = async()=>{

  try {

    // Call the remove method to delete the data associated with the specified key
    await SecureStoragePlugin.remove({ key: 'pin' });
    await SecureStoragePlugin.remove({ key: 'userData' });
    await SecureStoragePlugin.set({ key:'user_account_created', value: 'false'});

    console.log('Data deleted successfully from Secure Storage');

    navigateTo('/login')

  } catch (error) {
    console.error('Error deleting data from Secure Storage:', error);
    // Handle error: display a message to the user or perform other actions
  }

}


const performBiometricVerification = async () => {
  try {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable){
      const info =  toast.message('Biometric authentication is not available on this device.', {
        position: 'top',
        timeout: 2000,
      })

      return info
    };

    const isFaceID = result.biometryType == BiometryType.FACE_ID;

    isFaceID

    const verified = await NativeBiometric.verifyIdentity({
      reason: "To access user data",
      title: "Biometric Authentication",
      subtitle: "Please authenticate to access your data.",
    });

    if (!verified) return;

    const credentials = await NativeBiometric.getCredentials({
      server: "http://localhost:3000",
    });

    const login_info = {
      email:  credentials.username,
      password : credentials.password,
      device_info: JSON.stringify(device),
    }

    console.log(login_info)

    const data = await fetch(`${baseURL}auth/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'x-access-token' : `${pinia.state.user?.token}`
      },

      body: JSON.stringify(login_info)

      })
        .then(res=>res.json());

        console.log(data.message)
        // loading.value = false

        if(data.success){

          const user = data.data
          pinia.setUser(user)
      
          navigateTo('/dashboard')
        }else{
          toast.message(`${data.message}`, {
            position: 'top',
            timeout: 2000
        })
      }

    // alert('Successful');

  } catch (error) {
    toast.message(error, {
            position: 'top',
            timeout: 2000
        })
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
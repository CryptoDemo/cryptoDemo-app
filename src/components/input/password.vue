<template>
    <div>
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="input"
            :placeholder="props.placeholder"
            @focusin="hint = true"
            @focusout="hint = false"
            @input="checkPassword"
            :class="props.errorlog?.length? 'border-[#E33E38] focus:border-[#E33E38]  focus:ring-[#E33E38] dark:border-[#E33E38] dark:focus:border-[#E33E38]  dark:focus:ring-[#E33E38]' : ''"
          />
    
          <div @click="togglePasswordVisibility" class="absolute end-2.5 bottom-4 dark:text-[#F8FAFC]">
            
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    
            <svg  v-else  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.47 14.53L2 22" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 2L14.53 9.47" stroke="#8E9BAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    
          </div>
    
        </div>

       

    </div>
  </template>
  
  <script setup>
  const hint = ref(false)
  const password = ref('');
  const showPassword = ref(false);
  

  const props = defineProps({
    placeholder:{
      type: String,
      default: 'Password'
    },
    password_message:{
      type:String,
    },
    errorlog:{
        type:String,
    }
  })


  // verify password
const passwordIsValid = ref(true);
const containsUppercase = ref(false);
const containsLowercase = ref(false);
const containsSpecialCharacter = ref(false);
const containsNumeral = ref(false);

const checkPassword = () => {
  containsUppercase.value = /[A-Z]/.test(password.value);
  containsLowercase.value = /[a-z]/.test(password.value);
  containsSpecialCharacter.value = /[!@#$%^&*()_+}{:;'?/>,.<>\|]/.test(password.value);
  containsNumeral.value = /\d/.test(password.value);
  
  passwordIsValid.value =
    containsUppercase.value &&
    containsLowercase.value &&
    containsSpecialCharacter.value &&
    containsNumeral.value &&
    password.value.length >= 8;
};
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };

  const emitProp = defineEmits('password','hint');

  watch(()=> password.value ,(newVal)=>{
    emitProp('password',newVal)
  })
  
  </script>


<style scoped>

.fadeIn{
    animation: fadeIn  1s ease-in-out;
}

@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1,
    }
    
}

#checkmark {
        animation: drawCheckmark 1s ease-in-out forwards;
    }

    @keyframes drawCheckmark {
        to {
            stroke-dashoffset: 0;
        }
}
</style>
  
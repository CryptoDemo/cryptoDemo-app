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
            :class="props.errorlog?.length? props.errorlog : ''"
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

        <div v-if="hint">
          <div class="flex  flex-wrap items-center mt-[8px] gap-[4px]">

             

              <div class="flex justify-center items-center rounded-[4px] px-[8px] py-[4px] fadeIn"
              :class=" !(password.length > 6) ? 'bg-[#e33e380d]':'bg-[#35b2330d]'">
                  <svg v-if="!(password.length > 6)" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M13.7252 4.78248C13.6558 4.71296 13.5734 4.6578 13.4826 4.62016C13.3919 4.58252 13.2946 4.56315 13.1964 4.56315C13.0982 4.56315 13.0009 4.58252 12.9102 4.62016C12.8195 4.6578 12.7371 4.71296 12.6677 4.78248L9.00017 8.44248L5.33267 4.77498C5.26323 4.70555 5.1808 4.65047 5.09008 4.61289C4.99935 4.57531 4.90212 4.55597 4.80392 4.55597C4.70572 4.55597 4.60848 4.57531 4.51776 4.61289C4.42704 4.65047 4.3446 4.70555 4.27517 4.77498C4.20573 4.84442 4.15065 4.92685 4.11307 5.01758C4.07549 5.1083 4.05615 5.20554 4.05615 5.30373C4.05615 5.40193 4.07549 5.49917 4.11307 5.58989C4.15065 5.68062 4.20573 5.76305 4.27517 5.83248L7.94267 9.49998L4.27517 13.1675C4.20573 13.2369 4.15065 13.3194 4.11307 13.4101C4.07549 13.5008 4.05615 13.598 4.05615 13.6962C4.05615 13.7944 4.07549 13.8917 4.11307 13.9824C4.15065 14.0731 4.20573 14.1555 4.27517 14.225C4.3446 14.2944 4.42704 14.3495 4.51776 14.3871C4.60848 14.4247 4.70572 14.444 4.80392 14.444C4.90212 14.444 4.99935 14.4247 5.09008 14.3871C5.1808 14.3495 5.26323 14.2944 5.33267 14.225L9.00017 10.5575L12.6677 14.225C12.7371 14.2944 12.8195 14.3495 12.9103 14.3871C13.001 14.4247 13.0982 14.444 13.1964 14.444C13.2946 14.444 13.3919 14.4247 13.4826 14.3871C13.5733 14.3495 13.6557 14.2944 13.7252 14.225C13.7946 14.1555 13.8497 14.0731 13.8873 13.9824C13.9248 13.8917 13.9442 13.7944 13.9442 13.6962C13.9442 13.598 13.9248 13.5008 13.8873 13.4101C13.8497 13.3194 13.7946 13.2369 13.7252 13.1675L10.0577 9.49998L13.7252 5.83248C14.0102 5.54748 14.0102 5.06748 13.7252 4.78248Z" fill="#E33E38"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M5 12L10 17L20 7"
                          stroke="#35B233"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          id="checkmark"
                      />
                  </svg>
                  <span class="ml-[4px] text-[14px] font-[400]"
                  :class="!(password.length > 6)?'text-[#E33E38]':'text-[#35B233]'" >6+ Characters</span>
              </div>

              <div class="flex justify-center items-center rounded-[4px] px-[8px] py-[4px] fadeIn"
              :class=" !containsNumeral ? 'bg-[#e33e380d]':'bg-[#35b2330d]'">
                  <svg v-if="!containsNumeral" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M13.7252 4.78248C13.6558 4.71296 13.5734 4.6578 13.4826 4.62016C13.3919 4.58252 13.2946 4.56315 13.1964 4.56315C13.0982 4.56315 13.0009 4.58252 12.9102 4.62016C12.8195 4.6578 12.7371 4.71296 12.6677 4.78248L9.00017 8.44248L5.33267 4.77498C5.26323 4.70555 5.1808 4.65047 5.09008 4.61289C4.99935 4.57531 4.90212 4.55597 4.80392 4.55597C4.70572 4.55597 4.60848 4.57531 4.51776 4.61289C4.42704 4.65047 4.3446 4.70555 4.27517 4.77498C4.20573 4.84442 4.15065 4.92685 4.11307 5.01758C4.07549 5.1083 4.05615 5.20554 4.05615 5.30373C4.05615 5.40193 4.07549 5.49917 4.11307 5.58989C4.15065 5.68062 4.20573 5.76305 4.27517 5.83248L7.94267 9.49998L4.27517 13.1675C4.20573 13.2369 4.15065 13.3194 4.11307 13.4101C4.07549 13.5008 4.05615 13.598 4.05615 13.6962C4.05615 13.7944 4.07549 13.8917 4.11307 13.9824C4.15065 14.0731 4.20573 14.1555 4.27517 14.225C4.3446 14.2944 4.42704 14.3495 4.51776 14.3871C4.60848 14.4247 4.70572 14.444 4.80392 14.444C4.90212 14.444 4.99935 14.4247 5.09008 14.3871C5.1808 14.3495 5.26323 14.2944 5.33267 14.225L9.00017 10.5575L12.6677 14.225C12.7371 14.2944 12.8195 14.3495 12.9103 14.3871C13.001 14.4247 13.0982 14.444 13.1964 14.444C13.2946 14.444 13.3919 14.4247 13.4826 14.3871C13.5733 14.3495 13.6557 14.2944 13.7252 14.225C13.7946 14.1555 13.8497 14.0731 13.8873 13.9824C13.9248 13.8917 13.9442 13.7944 13.9442 13.6962C13.9442 13.598 13.9248 13.5008 13.8873 13.4101C13.8497 13.3194 13.7946 13.2369 13.7252 13.1675L10.0577 9.49998L13.7252 5.83248C14.0102 5.54748 14.0102 5.06748 13.7252 4.78248Z" fill="#E33E38"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M5 12L10 17L20 7"
                          stroke="#35B233"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          id="checkmark"
                      />
                  </svg>
                  <span class="ml-[4px] text-[14px] font-[400]"
                  :class="!containsNumeral?'text-[#E33E38]':'text-[#35B233]'" >Number</span>
              </div>

              <div class="flex justify-center items-center rounded-[4px] px-[8px] py-[4px] fadeIn"
              :class=" !containsUppercase ? 'bg-[#e33e380d]':'bg-[#35b2330d]'">
                  <svg v-if="!containsUppercase" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M13.7252 4.78248C13.6558 4.71296 13.5734 4.6578 13.4826 4.62016C13.3919 4.58252 13.2946 4.56315 13.1964 4.56315C13.0982 4.56315 13.0009 4.58252 12.9102 4.62016C12.8195 4.6578 12.7371 4.71296 12.6677 4.78248L9.00017 8.44248L5.33267 4.77498C5.26323 4.70555 5.1808 4.65047 5.09008 4.61289C4.99935 4.57531 4.90212 4.55597 4.80392 4.55597C4.70572 4.55597 4.60848 4.57531 4.51776 4.61289C4.42704 4.65047 4.3446 4.70555 4.27517 4.77498C4.20573 4.84442 4.15065 4.92685 4.11307 5.01758C4.07549 5.1083 4.05615 5.20554 4.05615 5.30373C4.05615 5.40193 4.07549 5.49917 4.11307 5.58989C4.15065 5.68062 4.20573 5.76305 4.27517 5.83248L7.94267 9.49998L4.27517 13.1675C4.20573 13.2369 4.15065 13.3194 4.11307 13.4101C4.07549 13.5008 4.05615 13.598 4.05615 13.6962C4.05615 13.7944 4.07549 13.8917 4.11307 13.9824C4.15065 14.0731 4.20573 14.1555 4.27517 14.225C4.3446 14.2944 4.42704 14.3495 4.51776 14.3871C4.60848 14.4247 4.70572 14.444 4.80392 14.444C4.90212 14.444 4.99935 14.4247 5.09008 14.3871C5.1808 14.3495 5.26323 14.2944 5.33267 14.225L9.00017 10.5575L12.6677 14.225C12.7371 14.2944 12.8195 14.3495 12.9103 14.3871C13.001 14.4247 13.0982 14.444 13.1964 14.444C13.2946 14.444 13.3919 14.4247 13.4826 14.3871C13.5733 14.3495 13.6557 14.2944 13.7252 14.225C13.7946 14.1555 13.8497 14.0731 13.8873 13.9824C13.9248 13.8917 13.9442 13.7944 13.9442 13.6962C13.9442 13.598 13.9248 13.5008 13.8873 13.4101C13.8497 13.3194 13.7946 13.2369 13.7252 13.1675L10.0577 9.49998L13.7252 5.83248C14.0102 5.54748 14.0102 5.06748 13.7252 4.78248Z" fill="#E33E38"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M5 12L10 17L20 7"
                          stroke="#35B233"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          id="checkmark"
                      />
                  </svg>
                  <span class="ml-[4px] text-[14px] font-[400]"
                  :class="!containsUppercase?'text-[#E33E38]':'text-[#35B233]'" >Uppercase</span>
              </div>

              <div class="flex justify-center items-center rounded-[4px] px-[8px] py-[4px] fadeIn"
              :class=" !containsLowercase ? 'bg-[#e33e380d]':'bg-[#35b2330d]'">
                  <svg v-if="!containsLowercase" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M13.7252 4.78248C13.6558 4.71296 13.5734 4.6578 13.4826 4.62016C13.3919 4.58252 13.2946 4.56315 13.1964 4.56315C13.0982 4.56315 13.0009 4.58252 12.9102 4.62016C12.8195 4.6578 12.7371 4.71296 12.6677 4.78248L9.00017 8.44248L5.33267 4.77498C5.26323 4.70555 5.1808 4.65047 5.09008 4.61289C4.99935 4.57531 4.90212 4.55597 4.80392 4.55597C4.70572 4.55597 4.60848 4.57531 4.51776 4.61289C4.42704 4.65047 4.3446 4.70555 4.27517 4.77498C4.20573 4.84442 4.15065 4.92685 4.11307 5.01758C4.07549 5.1083 4.05615 5.20554 4.05615 5.30373C4.05615 5.40193 4.07549 5.49917 4.11307 5.58989C4.15065 5.68062 4.20573 5.76305 4.27517 5.83248L7.94267 9.49998L4.27517 13.1675C4.20573 13.2369 4.15065 13.3194 4.11307 13.4101C4.07549 13.5008 4.05615 13.598 4.05615 13.6962C4.05615 13.7944 4.07549 13.8917 4.11307 13.9824C4.15065 14.0731 4.20573 14.1555 4.27517 14.225C4.3446 14.2944 4.42704 14.3495 4.51776 14.3871C4.60848 14.4247 4.70572 14.444 4.80392 14.444C4.90212 14.444 4.99935 14.4247 5.09008 14.3871C5.1808 14.3495 5.26323 14.2944 5.33267 14.225L9.00017 10.5575L12.6677 14.225C12.7371 14.2944 12.8195 14.3495 12.9103 14.3871C13.001 14.4247 13.0982 14.444 13.1964 14.444C13.2946 14.444 13.3919 14.4247 13.4826 14.3871C13.5733 14.3495 13.6557 14.2944 13.7252 14.225C13.7946 14.1555 13.8497 14.0731 13.8873 13.9824C13.9248 13.8917 13.9442 13.7944 13.9442 13.6962C13.9442 13.598 13.9248 13.5008 13.8873 13.4101C13.8497 13.3194 13.7946 13.2369 13.7252 13.1675L10.0577 9.49998L13.7252 5.83248C14.0102 5.54748 14.0102 5.06748 13.7252 4.78248Z" fill="#E33E38"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M5 12L10 17L20 7"
                          stroke="#35B233"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          id="checkmark"
                      />
                  </svg>
                  <span class="ml-[4px] text-[14px] font-[400]"
                  :class="!containsLowercase?'text-[#E33E38]':'text-[#35B233]'" >Lowercase</span>
              </div>

              

              <div class="flex justify-center items-center rounded-[4px] px-[8px] py-[4px]  fadeIn"
              :class=" !containsSpecialCharacter ? 'bg-[#e33e380d]':'bg-[#35b2330d]'">
                  <svg v-if="!containsSpecialCharacter" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M13.7252 4.78248C13.6558 4.71296 13.5734 4.6578 13.4826 4.62016C13.3919 4.58252 13.2946 4.56315 13.1964 4.56315C13.0982 4.56315 13.0009 4.58252 12.9102 4.62016C12.8195 4.6578 12.7371 4.71296 12.6677 4.78248L9.00017 8.44248L5.33267 4.77498C5.26323 4.70555 5.1808 4.65047 5.09008 4.61289C4.99935 4.57531 4.90212 4.55597 4.80392 4.55597C4.70572 4.55597 4.60848 4.57531 4.51776 4.61289C4.42704 4.65047 4.3446 4.70555 4.27517 4.77498C4.20573 4.84442 4.15065 4.92685 4.11307 5.01758C4.07549 5.1083 4.05615 5.20554 4.05615 5.30373C4.05615 5.40193 4.07549 5.49917 4.11307 5.58989C4.15065 5.68062 4.20573 5.76305 4.27517 5.83248L7.94267 9.49998L4.27517 13.1675C4.20573 13.2369 4.15065 13.3194 4.11307 13.4101C4.07549 13.5008 4.05615 13.598 4.05615 13.6962C4.05615 13.7944 4.07549 13.8917 4.11307 13.9824C4.15065 14.0731 4.20573 14.1555 4.27517 14.225C4.3446 14.2944 4.42704 14.3495 4.51776 14.3871C4.60848 14.4247 4.70572 14.444 4.80392 14.444C4.90212 14.444 4.99935 14.4247 5.09008 14.3871C5.1808 14.3495 5.26323 14.2944 5.33267 14.225L9.00017 10.5575L12.6677 14.225C12.7371 14.2944 12.8195 14.3495 12.9103 14.3871C13.001 14.4247 13.0982 14.444 13.1964 14.444C13.2946 14.444 13.3919 14.4247 13.4826 14.3871C13.5733 14.3495 13.6557 14.2944 13.7252 14.225C13.7946 14.1555 13.8497 14.0731 13.8873 13.9824C13.9248 13.8917 13.9442 13.7944 13.9442 13.6962C13.9442 13.598 13.9248 13.5008 13.8873 13.4101C13.8497 13.3194 13.7946 13.2369 13.7252 13.1675L10.0577 9.49998L13.7252 5.83248C14.0102 5.54748 14.0102 5.06748 13.7252 4.78248Z" fill="#E33E38"/>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                          d="M5 12L10 17L20 7"
                          stroke="#35B233"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-dasharray="20"
                          stroke-dashoffset="20"
                          id="checkmark"
                      />
                  </svg>
                  <span class="ml-[4px] text-[14px] font-[400]"
                  :class="!containsSpecialCharacter?'text-[#E33E38]':'text-[#35B233]'" >Special character</span>
              </div>


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
  
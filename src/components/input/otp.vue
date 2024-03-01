<!-- <template>
    <div ref="container" class="flex justify-between mx-4 w-full">
      <input
        v-for="i in length"
        :key="i"
        @keyup="(e) => handleEnter(e, i - 1)"
        class="w-[56px] h-[56px] rounded-2xl text-center font-bold dark:bg-transparent dark:text-[#E2E8F0]"
        v-model="otpArray[i - 1]"
        type="text"
        maxlength="1"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const otpProps = defineProps({
    length: {
      type: Number,
      default: 4,
    },
  });
  
  const otpArray = ref([]);
  const container = ref();
  const emitOtp = defineEmits('entered');
  
  onMounted(() => {
    for (let i = 0; i < otpProps.length - 1; i++) {
      otpArray.value.push(null);
    }
  });
  
  function handleEnter(e, i) {
    const children = container.value.children;
    const keypressed = e.key;
  
    if (i > 0 && (keypressed === 'Backspace' || keypressed === 'Delete')) {
      otpArray.value[i] = null;
        children[i - 1].focus();
    } else {
      const matched = keypressed.match(/^[0-9]$/);
      if (!matched) {
        otpArray.value[i] = null;
        return;
      } else if (i < otpProps.length - 1) {
        if (otpArray[i] !== null && i < otpProps.length - 1) {
          setTimeout(() => {
            children[i + 1].focus();
          }, 100);
        }
      } else {
        handleCheck();
      }
    }
  }
  
  function handleCheck() {
    let flag = true;
    const children = container.value.children;
    for (let i = 0; i < otpProps.length - 1; i++) {
      if (otpArray.value[i] === null) {
        children[i].classList.add('border-red-500');
        let flag = false;
      } else {
        children[i].classList.remove('border-red-500');
      }
    }
    if (flag) emitOtp('entered', otpArray.value.join(''));
  }
  </script> -->
  

  <template>
    <div ref="container" class="flex justify-between mx-4 w-full">
      <input
        v-for="i in length"
        :key="i"
        @input="(e) => handleInput(e, i - 1)"
        class="w-[56px] h-[56px] rounded-2xl text-[20px] text-center focus:ring-1 hover:border-[#2873ff] 
        focus:border-[#2873ff] border-gray-200 dark:border-gray-800 focus:border
         font-extrabold dark:bg-transparent
         dark:text-[#E2E8F0]"
        v-model="otpArray[i - 1]"
        type="text"
        maxlength="1"
        required
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const otpProps = defineProps({
    length: {
      type: Number,
      default: 4,
    },
  });
  
  const otpArray = ref([]);
  const container = ref();
  const emitOtp = defineEmits('entered');
  
  onMounted(() => {
    for (let i = 0; i < otpProps.length; i++) {
      otpArray.value.push(null);
    }
  });
  
  function handleInput(event, i) {
    const keypressed = event.data;
  
    if (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward' || event.inputType === 'Delete' ||  event.inputType === 'Backspace') {
      // Handle deletion (Backspace or Delete key)
      otpArray.value[i] = null;
      if (i > 0) {
        container.value.children[i - 1].focus();
      }
    } else if(keypressed && keypressed.match(/^[0-9]$/)) {
      // Handle valid numeric input
      otpArray.value[i] = keypressed;
      if (i < otpProps.length - 1) {
        container.value.children[i + 1].focus();
      } else {
        handleCheck();
      }
    }
  }
  
  function handleCheck() {
    let flag = true;
    const children = container.value.children;
    for (let i = 0; i < otpProps.length; i++) {
      if (otpArray.value[i] === null) {
        children[i].classList.add('border-red-500');
        flag = false;
      } else {
        children[i].classList.remove('border-red-500');
      }
    }
    if (flag) return emitOtp('entered', otpArray.value.join(''));
  }

  watch(()=> otpArray.value ,(newVal)=>{
    emitOtp('entered',newVal.join(''))
  })
  </script>
  
  
  
  
  

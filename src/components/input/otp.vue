<template>
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
      setTimeout(() => {
        children[i - 1].focus();
      }, 100);
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
  </script>
  
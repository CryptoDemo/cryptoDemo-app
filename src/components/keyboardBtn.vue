<template>
   
    <div class="flex">
        <button @click.prevent="showKeyboard" class="btn-primary mx-2">show keyboard</button>   
        <button @click.prevent="hideKeyboard" class="btn-primary mx-3">hide keyboard</button>   
    </div>
 
 </template>
 
 <script setup>
 // import {keyboardService} from '@/composables/utils/capacitor-utils';
 import { Keyboard } from '@capacitor/keyboard';
 
 const keyboardVisible = ref(false);
 
 const initialize = async () => {
   Keyboard.addListener('keyboardDidShow', () => {
     keyboardVisible.value = true;
   });
 
   Keyboard.addListener('keyboardDidHide', () => {
     keyboardVisible.value = false;
   });
 };
 
 const showKeyboard = async () => {
   await Keyboard.show();
 };
 
 const hideKeyboard = async () => {
   await Keyboard.hide();
 };
 
 onMounted(()=>{
     initialize()
 })
 </script>
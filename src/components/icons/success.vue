
<template>
    <div class="animate-success-icon relative">
      <!-- Your success icon here (e.g., a checkmark) -->
        <svg class="relative" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="113.596" height="113.636" fill="#2873FF" viewBox="0 0 64 64">
            <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748
            	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
        </svg>

        <svg class="absolute -top-14 left-8" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <ellipse cx="4.54386" cy="4.77275" rx="4.54386" ry="4.54545" fill="#2873FF"/>
        </svg>
        <svg class="absolute -top-4 left-36" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <ellipse cx="5.88148" cy="6.18182" rx="5.67982" ry="5.68182" fill="#2873FF"/>
        </svg>
        <svg class="absolute top-24 -left-16" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <ellipse cx="5.88148" cy="6.18182" rx="5.67982" ry="5.68182" fill="#2873FF"/>
        </svg>
        <svg class="absolute -top-4 right-36" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <ellipse cx="3.76751" cy="3.72721" rx="3.40789" ry="3.40909" fill="#FACC15"/>
         </svg>

         <svg class="absolute -top-4 left-3"  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <ellipse cx="4.8378" cy="4.59086" rx="4.54386" ry="4.54545" fill="#F1F5F9"/>
        </svg>

         <svg class="absolute top-16 -left-5"  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <ellipse cx="4.8378" cy="4.59086" rx="4.54386" ry="4.54545" fill="#F1F5F9"/>
        </svg>

        <svg class="absolute -top-8 left-20" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
             <path d="M2.09204 22.7727L21.4034 2.31812" stroke="#F1F5F9" stroke-width="3.40789" stroke-linecap="round"/>
        </svg>

        <svg class="absolute top-8 -left-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M2.54395 22.2273L21.8553 1.77271" stroke="#FACC15" stroke-width="3.40789" stroke-linecap="round"/>
        </svg>

        <svg class="absolute top-32 left-24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M2.54395 22.2273L21.8553 1.77271" stroke="#FACC15" stroke-width="3.40789" stroke-linecap="round"/>
        </svg>

        <svg class="absolute top-28 -left-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M2.66235 22.4545L21.9738 2" stroke="#2873FF" stroke-width="3.40789" stroke-linecap="round"/>
        </svg>
        <svg class="absolute top-16 left-36"  xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M2.66235 22.4545L21.9738 2" stroke="#2873FF" stroke-width="3.40789" stroke-linecap="round"/>
        </svg>

        <svg class="absolute  left-20" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
             <ellipse cx="6.0746" cy="5.99993" rx="5.67982" ry="5.68182" fill="#FACC15"/>
        </svg>

        <svg class="absolute top-24 left-32" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <ellipse cx="6.46498" cy="6.591" rx="5.67982" ry="5.68182" fill="#F1F5F9"/>
        </svg>
    </div>
  </template>
  
  <style scoped>
  @keyframes successAnimation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-success-icon {
    animation: successAnimation 0.5s ease-in-out;
  }
  </style>
  
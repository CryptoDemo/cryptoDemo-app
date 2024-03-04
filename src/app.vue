<template>

  <div class="font-['Manrope']">
    <NuxtPage/>
  </div>
  
</template>

<script setup>
const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();
</script>


<style>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap'); */

  
  body {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }

::-webkit-scrollbar {
  display: none;
}




/* for otp input styling */
.otp >>> fieldset{
   width: 100% !important;
   display: flex;
   justify-content: space-between;
   margin: 0 16px !important;
   background: transparent !important;
}
.otp >>> .input-wrapper{
   height: 56px !important;
   width: 56px !important;
   border-radius: 16px !important;
   border: 1px solid #E2E8F0 !important;
}

.otp >>>  .input-wrapper{
   height: 56px !important;
   width: 56px !important;
   border-radius: 16px !important;
   background-color: transparent !important;
}


.otp >>> input{
  border: none;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .otp >>> .input-wrapper {
    background-color: transparent !important; /* Dark mode background color */
    border: 1px solid #1B2537; /* Dark mode border color */
  }
}



.shutter-from-top{
    animation: shutter 0.5s ease-in-out ;
}
@keyframes shutter {
    0%{
        transform:rotateY(-100deg);
        /* max-height: 0; */
        transform-origin:top;
        opacity:0;
    }
    100%{
        transform:rotateY(0deg);
        /* max-height: 100%; */
        transform-origin:top;
        opacity:1;
    }
}

/* Add transition classes */
/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
  transform:rotateY(-50deg);
}

.dropdown-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}

.dropdown-enter {
  opacity: 0;
  transform:rotateY(0deg);
}



/* btn scaling animation */
.scaling-animation {
  transition: transform 0.3s ease-in-out;
}

.scaling-animation:hover {
  transform: scale(0.955);
}

</style>




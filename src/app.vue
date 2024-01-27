<template>

  <div class="font-['Poppins']">
    <NuxtPage/>
  </div>
  
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
  
  body {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }


::-webkit-scrollbar {
  display: none;
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




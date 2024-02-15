<template>
  <div class="animate-success-icon relative">
    <svg width="261" height="250" viewBox="0 0 261 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Path elements for the icons -->
      <path class="animate-path1" d="M126.092 39.7727L145.403 19.3181" stroke="#F1F5F9" stroke-width="3.40789" stroke-linecap="round"/>
      <path class="animate-path2" d="M239.688 120.455L259 100" stroke="#2873FF" stroke-width="3.40789" stroke-linecap="round"/>
      <path class="animate-path3" d="M193.114 239.773L212.426 219.318" stroke="#FACC15" stroke-width="3.40789" stroke-linecap="round"/>
      <path class="animate-path4" d="M4.54395 110.227L23.8553 89.7727" stroke="#FACC15" stroke-width="3.40789" stroke-linecap="round"/>
      <path class="animate-path5" d="M55.6621 220.455L74.9735 200" stroke="#2873FF" stroke-width="3.40789" stroke-linecap="round"/>
      <ellipse class="animate-ellipse1" cx="94.2851" cy="4.54545" rx="4.54386" ry="4.54545" fill="#2873FF"/>
      <ellipse class="animate-ellipse2" cx="73.8378" cy="46.5909" rx="4.54386" ry="4.54545" fill="#F1F5F9"/>
      <ellipse class="animate-ellipse3" cx="38.623" cy="132.955" rx="4.54386" ry="4.54545" fill="#F1F5F9"/>
      <ellipse class="animate-ellipse4" cx="4.54386" cy="189.773" rx="4.54386" ry="4.54545" fill="#2873FF"/>
      <ellipse class="animate-ellipse5" cx="105.644" cy="245.455" rx="4.54386" ry="4.54545" fill="#F1F5F9"/>
      <ellipse class="animate-ellipse6" cx="176.074" cy="200" rx="5.67982" ry="5.68182" fill="#FACC15"/>
      <ellipse class="animate-ellipse7" cx="229.465" cy="171.591" rx="5.67982" ry="5.68182" fill="#F1F5F9"/>
      <ellipse class="animate-ellipse8" cx="207.881" cy="43.1818" rx="5.67982" ry="5.68182" fill="#2873FF"/>
      <ellipse class="animate-ellipse9" cx="201.066" cy="95.4545" rx="3.40789" ry="3.40909" fill="#F1F5F9"/>
      <ellipse class="animate-ellipse10" cx="14.7673" cy="47.7272" rx="3.40789" ry="3.40909" fill="#FACC15"/>
      <ellipse class="animate-ellipse11" cx="129.5" cy="126.136" rx="56.7982" ry="56.8182" fill="#2873FF"/>
      <path class="animate-path6" 
      d="M111.041 126.138 L123.962 139.063 L149.805 113.211" 
      stroke="white" 
      stroke-width="5.67982" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      id="checkmark"/>
       
    </svg>
  </div>
</template>

<style scoped>
  /* Define CSS animations for each individual icon */
  .animate-path1 {
    animation: drawPath 3s ease-in-out forwards;
  }

  .animate-path3 {
    animation: drawPath 3s ease-in-out forwards;
  }

  .animate-path2 {
    animation: drawPath 3s ease-in-out forwards;
  }

  .animate-path4 {
    animation: drawPath 3s ease-in-out forwards;
  }

  .animate-path5 {
    animation: drawPath 3s ease-in-out forwards;
  }

  .animate-ellipse1 {
    animation: fadeIn 3s ease-in-out forwards;
  }

  .animate-ellipse2 {
    animation: fadeIn 3s ease-in-out forwards;
  }

  .animate-path6 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawCheckmark 5s ease-in-out forwards;
  }

  /* Define keyframe animations */
  @keyframes drawCheckmark {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  

  /* Define keyframe animations */
  @keyframes drawPath {
    0% {
      stroke-dasharray: 0;
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


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

  
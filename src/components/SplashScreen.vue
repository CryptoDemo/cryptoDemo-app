<template>
    <div class="h-screen w-screen bg-[#2873FF] dark:bg-[#10192D]">
      <div class="flex items-center justify-center h-full">
        <div class="group">
          <div
            class="transform rotate-45 -translate-y-1/2 bg-white rounded-full w-4 h-4 opacity-0 
            group-hover:opacity-100 transition-all duration-300 ease-in-out"
          />

          <div
            class="transform rotate-135 -translate-x-1/2 -translate-y-1/2
             bg-white rounded-full w-6 h-6 opacity-0 group-hover:opacity-100 transition-all 
             duration-300 ease-in-out delay-100"
          />

          </div>
          <div   v-show="showLogo" class="flex justify-center items-center">

              <img
              
                class="bounce_on_top  w-[58.8px] h-[56px]"
                src="/logo3.png"

              />

              <span class="text-white text-[20px] mx-3 font-[600] leading-normal bounce_on_bottom">Demo</span>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLogo: false,
      };
    },

    mounted() {
      setTimeout(() => {
        this.showLogo = true;
      }, 1600); // Adjust delay for logo reveal
     // Adjust delay for logo reveal
    },
  };

  </script>


<style scoped>

.bounce_on_top{
    animation: bounce_on_top 2s ease 0s 1 normal forwards;
}
@keyframes bounce_on_top {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-75px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(-32px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(-14px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(-4px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
}

.bounce_on_bottom{
    animation: bounce_on_bottom 2s ease 0s 1 normal forwards;
}

@keyframes  bounce_on_bottom{
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(75px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(32px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(14px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(4px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
}
</style>
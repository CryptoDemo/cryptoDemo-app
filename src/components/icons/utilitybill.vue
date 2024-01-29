<template>

<svg class="overflow-hidden" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_475_6543)">
<rect x="2" y="2" width="40" height="40" rx="20" fill="#2873FF"/>
<rect x="10" y="12" width="24" height="33" rx="3.33333" fill="white"/>
<rect x="17" y="14" width="10" height="2" rx="1" fill="#B9D1FF"/>
<path d="M20.8744 21.6451L16.8319 24.8826C16.3769 25.2442 16.0852 26.0084 16.1844 26.5801L16.9602 31.2234C17.1002 32.0517 17.8936 32.7226 18.7336 32.7226H25.2669C26.1011 32.7226 26.9002 32.0459 27.0402 31.2234L27.8161 26.5801C27.9094 26.0084 27.6177 25.2442 27.1686 24.8826L23.1261 21.6509C22.5019 21.1492 21.4927 21.1492 20.8744 21.6451Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.0003 29.0417C22.8057 29.0417 23.4587 28.3887 23.4587 27.5833C23.4587 26.7779 22.8057 26.125 22.0003 26.125C21.1949 26.125 20.542 26.7779 20.542 27.5833C20.542 28.3887 21.1949 29.0417 22.0003 29.0417Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<rect x="1" y="1" width="42" height="42" rx="21" :stroke="isDark?'#1B2537':'white'" stroke-width="2"/>
<defs>
<clipPath id="clip0_475_6543">
<rect x="2" y="2" width="40" height="40" rx="20" fill="white"/>
</clipPath>
</defs>
</svg>
    
</template>



<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
</script>
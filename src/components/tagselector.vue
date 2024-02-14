<template>

    <div>
        <div class=" mt-[8px] relative">

            <div class="min-h-[50px] w-full p-2 overflow-x-auto grid grid-cols-10 gap-[8px] items-center border 
            rounded-[15px] dark:border-[#1B2537]">
                <div class="col-span-9 gap-[8px] ">
                    <div class="flex flex-wrap gap-[8px]">
                            <div v-for="(x,index) in selected" :key="x"  class="flex flex-wrap gap-[8px] transition ease-in-out duration-300">
                                <span 
                                class=" text-[#8E9BAE] text-sm flex items-center    transition 
                                ease-in-out duration-300  p-2 rounded-[12px] 
                                "
                            :class="index===0?'bg-[#2873FF] dark:bg-[#2873FF] text-[#F8FAFC]':'bg-[#F8FAFC] dark:bg-[#131D35]'">
                                <span>{{ x }}</span>
            <!-- 
                                <svg @click.prevent="deleteItem(x.id)" class="ml-1.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                viewBox="0 0 24 24"><path fill="red" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59
                                    12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg> -->
                            </span>

                            </div>
                            
                    </div>
                </div>

                <Icon @click="toggle_show_tag"  :class="{'rotate-up':show_tag}"  
                    name="solar:alt-arrow-down-bold" size="16" class="
                    transition-all  ease-in-out duration-300   text-[#8E9BAE]
                    dark:text-[#FFFFFF]"/>



            </div>

            <div class=" absolute bg-[#ffff]   dark:bg-[#10192D] top-full left-0 dark:border-[#1B2537]  w-full  
            dark:text-[#8E9BAE]  z-20 at-container
            rounded-2xl pb-2 mt-1 z transition-all ease-out duration-300"  v-show="show_tag" >
                

                <div class=" relative overflow-y-auto bg-[#ffff]    dark:bg-[#10192D]  at-item">

                    <div
                        v-for="i in tag_lists" :key='i'
                        class="px-[12px] py-[14px] w-full leading-tight"
                    >
                        <ul 
                            class="flex items-center 
                        w-full rounded-xl  ">
                                <input  id="default-checkbox"  v-model="selected" :value="i"
                                type="checkbox"  class="w-4 h-4 text-blue-600
                                bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                                dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <li class="font-[700] ml-[10px] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">
                                {{ i }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 

        </div>
    </div>

    

</template>

<script setup>





const show_tag = ref(false)

const selected = ref([
    'Guided trade'
])




const toggle_show_tag =()=>{
    show_tag.value = !show_tag.value
}






// const checkedTg =(length,item)=>{
//     if(selected_tag.value.length < 3){
//         selected_tag.value.push({id:`${length}`,tag:`${item}`})
//     }

// }

const tag_lists = [
    'Guided trade',
    'No third parties',
    'Receipt Required'
]




// const deleteItem = (itemId) => {
//     const index = selected.value.findIndex((item) => item.id === itemId);
//     if (index !== -1) {
//         selected.value.splice(index, 1);
//     }
//     console.log(selected.value)
//   };

</script>

<style scoped>

.rotate-up {
  transform: rotate(180deg);
}

div.at-container {
		height: 100%;
	}
	.at-item {
		/* width: 100%; height: 100%; */
		
		animation-name: slide-in-bck-top;
		animation-duration: 0.3s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
			
		/* shorthand
		animation: slide-in-bck-top 1s linear 0s 1 normal none;*/
	}
	@keyframes slide-in-bck-top {
			
		0% {
			transform:translateZ(700px) translateY(-27px);
			opacity:0;
		}
		100% {
			transform:translateZ(0) translateY(0);
			opacity:1;
		}
	}
 
</style>


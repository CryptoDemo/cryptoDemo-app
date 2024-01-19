<template> 
    <!-- <div class="h-[24px] w-[39px] px-0.5 rounded-xl flex items-center relative bg-[#E2E8F0]"
      @click="toggleRadio()">
        <span  v-if="!isToggled"  class="flex justify-start items-start w-full ">
            <div  :class="isToggled?'bg-[#2873FF]':'bg-white'"
            class="h-[22px] w-[22px]  rounded-full transition shadow-md ease-in-out duration-300"></div>
        </span>
        <span  v-if="isToggled" class="flex justify-end items-end w-full">
            <div :class="isToggled?'bg-[#2873FF]':'bg-white'"
             class="h-[22px] w-[22px] rounded-full transition shadow-md ease-in-out duration-300"></div>
        </span>
    </div> -->


    <label class="relative inline-flex items-center cursor-pointer">
        <input  type="checkbox" value="" v-model="isToggled" class="sr-only peer"  @click="toggleRadio()">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300
         rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
         rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
         after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border 
         after:rounded-full after:h-5 after:w-5 after:transition-all after:ease-in-out dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>

</template>
<script>
export default{
    props:["toggleValue"],
    data(){
        return{
            isToggled: false,
        }
    },
    
    
    mounted(){
        this.isToggled = this.toggleValue;
       
    },

    methods:{
        toggleRadio(){
            this.isToggled = !this.isToggled;
            this.$emit("toggleChanged",this.isToggled);
            console.log(this.toggleValue)
        }
    }
}
</script>
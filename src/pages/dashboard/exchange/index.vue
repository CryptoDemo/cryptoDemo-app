<template>
    <div class="h-screen pb-24 overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full p-6">

        <button @click.prevent=" initPushNotification(this,platform)" class="btn-primary">testing push notification</button>

    </div>
</template>



<!-- dee7kHY7SDqf2mOXEVEuho:APA91bGi8p61CV2rz7WkXk1cF3|GfykfiWM405RZi8IVw96EyQn2AlmwtKrC3v8Oz8uPFmYzWqcEz1mdj50Z2vMccKQqaoL-DmXOsvdwixZCZ9GsrOddzWu6b5Khjqi8JFpXt2gW16AN -->

<script>

export default{
    data(){
        return{
            platform:'',

        }
    },
    async mounted(){
        const context = await deviceInfo()
        // console.log(context.platform)
        this.platform = context.platform
        // initPushNotification(this,context.platform)
    },
    method:{
       
    }
}
</script>



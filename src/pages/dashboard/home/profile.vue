<template>

    <div class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full  ">

        <Appbar link="/dashboard" title="Profile"/>

        <div class="pt-[80px]">

            <div class="flex justify-center items-center mx-6">
                <div class="relative h-[102px] w-[102px] border border-[#F1F5F9] dark:border-[#1B2537]  p-[7px] rounded-full">
                    <input @input="handleImgChange($event)"  type="file" class="w-full " 
                        ref="profileImage" accept="image/jpeg,.webp,.png,.jpg,.gif,.svg,.jfif,.pjpeg,.pjp" hidden/>
                    <img  ref="profileImg" class="w-full h-full relative
                     rounded-full" :src="pinia.state.user.profile_image? pinia.state.user.profile_image : '/home/profile.png'" alt="">
                    <span @click="handleImageClick()" class="bottom-1 right-0 absolute  w-[28px] h-[28px] bg-[#2873FF] border-2
                     border-white dark:border-gray-800 rounded-full inline-flex justify-center items-center p-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M11.9999 4.00065C11.5933 4.00065 11.2199 3.76732 11.0333 3.40732L10.5533 2.44065C10.2466 1.83398 9.44662 1.33398 8.76662 1.33398H7.23995C6.55328 1.33398 5.75328 1.83398 5.44662 2.44065L4.96662 3.40732C4.77995 3.76732 4.40662 4.00065 3.99995 4.00065C2.55328 4.00065 1.40662 5.22065 1.49995 6.66065L1.84662 12.1673C1.92662 13.5407 2.66662 14.6673 4.50662 14.6673H11.4933C13.3333 14.6673 14.0666 13.5407 14.1533 12.1673L14.4999 6.66065C14.5933 5.22065 13.4466 4.00065 11.9999 4.00065ZM6.99995 4.83398H8.99995C9.27328 4.83398 9.49995 5.06065 9.49995 5.33398C9.49995 5.60732 9.27328 5.83398 8.99995 5.83398H6.99995C6.72662 5.83398 6.49995 5.60732 6.49995 5.33398C6.49995 5.06065 6.72662 4.83398 6.99995 4.83398ZM7.99995 12.0807C6.75995 12.0807 5.74662 11.074 5.74662 9.82732C5.74662 8.58065 6.75328 7.57398 7.99995 7.57398C9.24662 7.57398 10.2533 8.58065 10.2533 9.82732C10.2533 11.074 9.23995 12.0807 7.99995 12.0807Z" fill="white"/>
                        </svg>
                    </span>
                </div>
            </div>



            <div  class="box-shadow2 mx-6 mt-[24px] p-[12px]   dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] 
            flex justify-between
             items-center">
                  
                <div class="w-full">
                    <span class="font-[600] text-sm text-[#64748B] capitalize">{{ pinia.state.user?.username }}</span>
                    <div class="flex items-center mt-[12px] pl-1">
                        <div class="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.1999 12.4004C14.5499 12.4004 12.3999 14.5504 12.3999 17.2004C12.3999 18.1004 12.6499 18.9504 13.0999 19.6704C13.9299 21.0604 15.4499 22.0004 17.1999 22.0004C18.9499 22.0004 20.4799 21.0604 21.2999 19.6704C21.7399 18.9504 21.9999 18.1004 21.9999 17.2004C21.9999 14.5504 19.8499 12.4004 17.1999 12.4004ZM19.5799 16.5704L17.0199 18.9304C16.8799 19.0604 16.6899 19.1304 16.5099 19.1304C16.3199 19.1304 16.1299 19.0604 15.9799 18.9104L14.7999 17.7304C14.5099 17.4404 14.5099 16.9604 14.7999 16.6704C15.0899 16.3804 15.5699 16.3804 15.8599 16.6704L16.5299 17.3404L18.5599 15.4604C18.8599 15.1804 19.3399 15.2004 19.6199 15.5004C19.8999 15.8104 19.8799 16.2904 19.5799 16.5704Z" fill="#2873FF"/>
                                <path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill="#2873FF"/>
                            </svg>
                            <span class="text-[10px] ml-[8px] font-[400] text-[#64748B]">0</span>
                        </div>
                        <div class="flex justify-between ml-[4.5px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.6899 13.9204C20.6799 13.9204 20.6799 13.9104 20.6799 13.9104V13.9004C19.7999 12.9804 18.5699 12.4004 17.1999 12.4004C14.5499 12.4004 12.3999 14.5504 12.3999 17.2004C12.3999 18.4304 12.8699 19.5504 13.6299 20.4004C14.5099 21.3804 15.7799 22.0004 17.1999 22.0004C19.8499 22.0004 21.9999 19.8504 21.9999 17.2004C21.9999 15.9304 21.4999 14.7804 20.6899 13.9204ZM19.0099 19.0704C18.8699 19.2104 18.6699 19.2904 18.4799 19.2904C18.2899 19.2904 18.0999 19.2104 17.9499 19.0704L17.2099 18.3304L16.4499 19.1004C16.2999 19.2404 16.1099 19.3204 15.9199 19.3204C15.8199 19.3204 15.7299 19.3004 15.6399 19.2604C15.5499 19.2304 15.4599 19.1704 15.3899 19.1004C15.0899 18.8004 15.0899 18.3304 15.3899 18.0404L16.1499 17.2704L15.4199 16.5304C15.1199 16.2404 15.1199 15.7604 15.4199 15.4704C15.7099 15.1804 16.1799 15.1804 16.4799 15.4704L17.2099 16.2104L17.9199 15.5004C18.2199 15.2104 18.6899 15.2104 18.9799 15.5004C19.1499 15.6704 19.2199 15.8904 19.1899 16.1104C19.1799 16.2804 19.1099 16.4404 18.9799 16.5604L18.2699 17.2704L19.0099 18.0104C19.3099 18.3004 19.3099 18.7704 19.0099 19.0704Z" fill="#E33E38"/>
                                <path d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z" fill="#E33E38"/>
                            </svg>
                            <span class="text-[10px] ml-[8px] font-[400] text-[#64748B]">0</span>
                        </div>

                    </div>
                </div>

                <div class="w-full">

                    <button class="bg-[#E0ECFF] dark:bg-[#1E2A3E] py-[11px] px-[14px] text-[#2873FF] rounded-[12px] font-[600]
                    text-[12px] w-full flex justify-center items-center">
                            <span class="font-[600] text-[12px] mr-[2px]">Verified</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                               <path d="M16.1702 8.55492L15.1502 7.36992C14.9552 7.14492 14.7977 6.72492 14.7977 6.42492V5.14992C14.7977 4.35492 14.1452 3.70242 13.3502 3.70242H12.0752C11.7827 3.70242 11.3552 3.54492 11.1302 3.34992L9.94516 2.32992C9.42766 1.88742 8.58016 1.88742 8.05516 2.32992L6.87766 3.35742C6.65266 3.54492 6.22516 3.70242 5.93266 3.70242H4.63516C3.84016 3.70242 3.18766 4.35492 3.18766 5.14992V6.43242C3.18766 6.72492 3.03016 7.14492 2.84266 7.36992L1.83016 8.56242C1.39516 9.07992 1.39516 9.91992 1.83016 10.4374L2.84266 11.6299C3.03016 11.8549 3.18766 12.2749 3.18766 12.5674V13.8499C3.18766 14.6449 3.84016 15.2974 4.63516 15.2974H5.93266C6.22516 15.2974 6.65266 15.4549 6.87766 15.6499L8.06266 16.6699C8.58016 17.1124 9.42766 17.1124 9.95266 16.6699L11.1377 15.6499C11.3627 15.4549 11.7827 15.2974 12.0827 15.2974H13.3577C14.1527 15.2974 14.8052 14.6449 14.8052 13.8499V12.5749C14.8052 12.2824 14.9627 11.8549 15.1577 11.6299L16.1777 10.4449C16.6127 9.92742 16.6127 9.07242 16.1702 8.55492ZM12.1202 8.08242L8.49766 11.7049C8.39266 11.8099 8.25016 11.8699 8.10016 11.8699C7.95016 11.8699 7.80766 11.8099 7.70266 11.7049L5.88766 9.88992C5.67016 9.67242 5.67016 9.31242 5.88766 9.09492C6.10516 8.87742 6.46516 8.87742 6.68266 9.09492L8.10016 10.5124L11.3252 7.28742C11.5427 7.06992 11.9027 7.06992 12.1202 7.28742C12.3377 7.50492 12.3377 7.86492 12.1202 8.08242Z" fill="#2873FF"/>
                            </svg>
                    </button>

                </div>

            </div>


            <div class="mt-[24px] mx-6">

                <h3 class="text-[#10192D] font-[700] text-[16px]">Contact info</h3>

                <div class="mt-[16px] bg-[#F5F9FF] dark:bg-[#1B2537] py-[10px] px-[12px] rounded-[12px]">

                    <div class="border-b  border-[#8E9BAE] dark:border-[#2A3340] pb-[8px]">

                        <h3 class="text-sm text-[#10192D] font-[700] mb-[4px]">Email</h3>
    
                        <p>{{ pinia.state.user?.email || 'Add your email ' }}</p>
                    </div>
                    <div class=" pt-[8px]">

                        <h3 class="text-sm text-[#10192D] font-[700] mb-[4px]">Phone number</h3>
    
                        <p>{{ pinia.state.user?.phone || 'Add your phone number'}}</p>
                    </div>


                </div>

            </div>

            <div class="mt-[24px] mx-6">

                 <h3 class="text-[#10192D] mb-[4px] font-[700] text-[16px]">My Trades</h3>


                <div class="mt-[16px]">

                    <div class="py-[8px] px-[12px] mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Bought coins</h3>
                                <p class="text-[14px] font-[400]">0</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M12.9902 10.2645C12.4469 7.64725 10.3632 5.56238 7.73436 5.01319C8.29494 3.40592 9.82347 2.25 11.6251 2.25C13.9033 2.25 15.7501 4.09671 15.7501 6.375C15.7501 8.17534 14.5957 9.703 12.9902 10.2645Z" fill="#2873FF" stroke="#2873FF" stroke-width="1.5"/>
                            <path d="M7.58808 12.8381L8.608 12.284L9.82124 11.625L8.608 10.966L7.58808 10.4119L7.03404 9.392L6.375 8.17876L5.71596 9.392L5.16193 10.4119L4.142 10.966L2.92876 11.625L4.142 12.284L5.16193 12.8381L5.71596 13.858L6.375 15.0712L7.03404 13.858L7.58808 12.8381ZM6.71322 7.51325C8.7173 7.67483 10.3252 9.28271 10.4867 11.2868C10.4941 11.413 10.5 11.5246 10.5 11.625C10.5 13.9033 8.65329 15.75 6.375 15.75C4.09671 15.75 2.25 13.9033 2.25 11.625C2.25 9.34671 4.09671 7.5 6.375 7.5C6.47538 7.5 6.58705 7.50586 6.71322 7.51325Z" fill="#2873FF" stroke="#2873FF" stroke-width="1.5"/>
                            </svg>
                        </div>
                    


                    </div>

                    <div class="py-[8px] px-[12px]  mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Sold  coins</h3>
                                <p class="text-[14px] font-[400]">0</p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M10.5 11.625C10.5 13.9033 8.65329 15.75 6.375 15.75C4.09671 15.75 2.25 13.9033 2.25 11.625C2.25 9.34671 4.09671 7.5 6.375 7.5C6.47538 7.5 6.58705 7.50586 6.71322 7.51325C8.7173 7.67483 10.3252 9.28271 10.4867 11.2868C10.4941 11.413 10.5 11.5246 10.5 11.625Z" fill="#2873FF" stroke="#2873FF" stroke-width="1.5"/>
                                <path d="M12.9902 10.2645C12.4469 7.64725 10.3632 5.56238 7.73436 5.01319C8.29494 3.40592 9.82347 2.25 11.6251 2.25C13.9033 2.25 15.7501 4.09671 15.7501 6.375C15.7501 8.17534 14.5957 9.703 12.9902 10.2645Z" fill="#2873FF" stroke="#2873FF" stroke-width="1.5"/>
                                <path d="M4.1925 1.5H2.25C1.8375 1.5 1.5 1.8375 1.5 2.25V4.1925C1.5 4.86 2.31 5.1975 2.7825 4.725L4.725 2.7825C5.19 2.31 4.86 1.5 4.1925 1.5Z" fill="#2873FF"/>
                                <path d="M13.8073 16.5002H15.7498C16.1623 16.5002 16.4998 16.1627 16.4998 15.7502V13.8077C16.4998 13.1402 15.6898 12.8027 15.2173 13.2752L13.2748 15.2177C12.8098 15.6902 13.1398 16.5002 13.8073 16.5002Z" fill="#2873FF"/>
                            </svg>

                        </div>
                        


                    </div>
                   

                </div>

            </div>

            <CardsMyCoins/>

            <div class="mx-6">

                <CardsReferrals/>
            </div>




        </div>

    </div>

</template>

<script setup>
 
 const toast = useToast()
const pinia = useStore()
const profileImage = ref(null)
const profileImg = ref(null)
const selectedImage = ref(null)

const handleImageClick = ()=>{
    profileImage.value.click()
}


const handleImgChange = async(event)=> await handleFileChange(event,selectedImage,profileImg.value);

watch(()=> selectedImage.value,async(newval)=>{
    const {secure_url} = await uploadToCloudinary(newval);
    console.log('newval is ',secure_url)

    const profile_image = {profile_image: secure_url}
    const userToken = `${pinia.state.user.token}`;
    const info = { ...pinia.state.user, ...profile_image };
    delete info.token;

       try {
         
      const data = await fetch(`${baseURL}user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token' : `${pinia.state.user?.token}`
        },
        body: JSON.stringify(info)
      }).then(res => res.json());
      
      if (data.success) {

        const user = { ...info, token: userToken };
        pinia.setUser(user);

      } else {
        // Display error message
        toast.message(`${data.message}`, {
          position: 'top',
          timeout: 2000
        });

      }
    } catch (error) {
      // Display error message
      toast.message(error, {
        position: 'top',
        timeout: 2000
      });
    }


})



  

</script>
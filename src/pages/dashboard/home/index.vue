<template>

    <div class="min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full ">

        <HomeBar :image="true"/>
     

        <div class="pt-[88px] ">

            <div class="mx-6 min-h-[144px] bg-gradient-to-r from-[#2873FF] to-[#38BDF8] relative rounded-[20px]">

                <div class="p-6  flex flex-col justify-between ">
                    <div class="flex justify-between items-center">

                        <div class="flex items-center">
                            <span class="mr-[10px] capitalize font-[400] text-sm text-[#FFF] opacity-60">balance</span>

                            <div @click.prevent=" toggle_visibility ">
                                
                                <svg v-if="!isvisible" class="opacity-60 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.9833 10.0009C12.9833 11.6509 11.6499 12.9842 9.99993 12.9842C8.34993 12.9842 7.0166 11.6509 7.0166 10.0009C7.0166 8.35091 8.34993 7.01758 9.99993 7.01758C11.6499 7.01758 12.9833 8.35091 12.9833 10.0009Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.99987 16.8913C12.9415 16.8913 15.6832 15.1579 17.5915 12.1579C18.3415 10.9829 18.3415 9.00794 17.5915 7.83294C15.6832 4.83294 12.9415 3.09961 9.99987 3.09961C7.0582 3.09961 4.31654 4.83294 2.4082 7.83294C1.6582 9.00794 1.6582 10.9829 2.4082 12.1579C4.31654 15.1579 7.0582 16.8913 9.99987 16.8913Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                                <svg v-else class="opacity-60 transition ease-in-out duration-300"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.1083 7.89258L7.8916 12.1092C7.34994 11.5676 7.0166 10.8259 7.0166 10.0009C7.0166 8.35091 8.34993 7.01758 9.99993 7.01758C10.8249 7.01758 11.5666 7.35091 12.1083 7.89258Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.8499 4.80742C13.3915 3.70742 11.7249 3.10742 9.99987 3.10742C7.0582 3.10742 4.31654 4.84076 2.4082 7.84075C1.6582 9.01575 1.6582 10.9908 2.4082 12.1658C3.06654 13.1991 3.8332 14.0908 4.66654 14.8074" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.0166 16.2741C7.9666 16.6741 8.97493 16.8908 9.99993 16.8908C12.9416 16.8908 15.6833 15.1574 17.5916 12.1574C18.3416 10.9824 18.3416 9.00742 17.5916 7.83242C17.3166 7.39909 17.0166 6.99076 16.7083 6.60742" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.9252 10.584C12.7085 11.759 11.7502 12.7173 10.5752 12.934" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.8915 12.1074L1.6665 18.3324" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.3334 1.66602L12.1084 7.89102" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                        </div>

                        <div @click.prevent="toggle_account_types" class="flex items-center relative">
                            <span class="text-sm font-[400] text-[#fff] opacity-60">{{ selected_account_type }}</span>
                            <svg class="ml-[5px]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <div v-show="show_account_types" 
                            class="absolute top-6 bg-[#F5F9FF] px-4  rounded z-50">
                                 <ul  v-for="i in account_types" :key="i"
                                 @click.prevent="selected_account_type = i; !show_account_types">

                                     <li  class="py-1">{{ i }}</li>
                                 </ul>
                            </div>

                            <!-- <div class="absolute">
                              <span>ETH</span>
                            </div> -->

                        </div>


                    </div>

                    <div class="pt-[15px] pb-[12px] min-h-[47px] flex  items-center">
                        <h1 v-if="!isvisible" class="text-[32px] transition ease-in-out duration-300  font-[800] text-[#fff]">$590,987</h1>
                        <div v-else  class="flex  items-center">
    
                            <div v-for="i in 6" class="mr-2 transition ease-in-out duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center">
                    <span  class="text-[16px] font-[500] text-[#fff] opacity-60">$5,987</span>
                    <div class="ml-[30px] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3.88749 7.50065H6.11249C7.49582 7.50065 8.05832 6.52148 7.37082 5.32565L7.06249 4.79232C6.98749 4.66315 6.84999 4.58398 6.69999 4.58398H3.29999C3.14999 4.58398 3.01249 4.66315 2.93749 4.79232L2.62916 5.32565C1.94166 6.52148 2.50416 7.50065 3.88749 7.50065Z" fill="white"/>
                        <path d="M3.66265 4.16576H6.34181C6.50431 4.16576 6.60431 3.99076 6.52098 3.85326L6.25431 3.39492C5.56681 2.19909 4.43348 2.19909 3.74598 3.39492L3.47931 3.85326C3.40015 3.99076 3.50015 4.16576 3.66265 4.16576Z" fill="white"/>
                        </svg>

                        <span class="text-[12px] font-[400] ml-0.5 text-[#fff] opacity-60">+10%</span>
                    </div>
                    </div>

                </div>
                <div class="absolute -bottom-8 gap-[10px] px-6 w-full  flex justify-between items-center">

                    <button class="py-[12px] px-[16px] min-h-[51px] box-shadow capitalize rounded-2xl bg-[white] text-[#10192D] flex items-center justify-center 
                    gap-x-[8px] w-full font-[700] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M4.0835 14.168V15.8346C4.0835 16.2767 4.25909 16.7006 4.57165 17.0131C4.88421 17.3257 5.30814 17.5013 5.75016 17.5013H15.7502C16.1922 17.5013 16.6161 17.3257 16.9287 17.0131C17.2412 16.7006 17.4168 16.2767 17.4168 15.8346V14.168" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.5835 9.16797L10.7502 13.3346L14.9168 9.16797" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.75 3.33398V13.334" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="text-sm">Buy</span>
                    </button>
                    <button class="py-[12px] min-h-[51px] px-[16px] capitalize box-shadow rounded-2xl bg-[white]
                     text-[#10192D] flex items-center justify-center 
                    gap-x-[8px] w-full font-[700]">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M3.5835 5.83203V4.16536C3.5835 3.72334 3.75909 3.29941 4.07165 2.98685C4.38421 2.67429 4.80814 2.4987 5.25016 2.4987H15.2502C15.6922 2.4987 16.1161 2.67429 16.4287 2.98685C16.7412 3.29941 16.9168 3.72334 16.9168 4.16536V5.83203" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.0835 10.832L10.2502 6.66536L14.4168 10.832" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.25 16.666V6.66602" stroke="#10192D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        <span class="text-sm">Sell</span>
                    </button>
                   
                    
                </div>

            </div>

            
            <div v-if="pinia.state.isAuthenticated" class="box-shadow2 mx-6  mt-[53px] py-[12px] px-[8px]  dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] flex justify-between
             items-center">
                  
                <div>
                    <span class="font-[600] text-sm text-[#64748B] capitalize">Userglory12345</span>
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

                <div>

                    <button class="bg-[#2873FF] py-[16px] px-[14px] text-white rounded-[12px] font-[600]
                    text-[12px]">
                        Complete verification
                    </button>

                </div>

            </div>


            <div v-else class="mt-[53px] mx-6">

                <p class="mb-4">Create an account to have access to all of our features</p>
                <button @click.prevent="navigateTo('/sign_Up')" class="btn-primary w-full mb-4 scaling-animation">Create account</button>
                <button @click.prevent="navigateTo('/login')"  class="btn-border w-full scaling-animation ">Login</button>

            </div>


                <CardsMyCoins/>

            <div class="mt-[24px] mx-6">

                <h3 class="text-[#10192D] mb-[28px] font-[700] text-[16px] capitalize">Trending</h3>

                <div v-for="i in combinedTokens.slice(0,3)" :key="i.id">
                    <div class="flex justify-between items-center mb-[27px]">

                        <div class="flex items-center">
    

                            <div class="w-[40px] h-[40px] rounded-full">

                                <MazLazyImg :src="i.icon"/>

                            </div>
    
                            <div class="flex flex-col ml-[16px]">
                                <h2 class="text-[14px] text-[#10192D] font-[700]">{{ i.name }}</h2>
                                <span class="text-[#8E9BAE] text-[12px] mt-[2px] font-[400]">{{ i.symbol === "USDT"? i.symbol :i.symbol.split('USDT')[0].trim() }}</span>
                            </div>
                        </div>

                        <div class="flex relative">
                            <div class="absolute -top-6 right-20">
                              
                                    <div v-if="!(i.symbol === 'USDT')">
                                        <chartsArea :symbol="i.symbol" :pricepercent="i.priceChangePercent"/>
                                    </div>

                                <div v-show="i.symbol === 'USDT'">
                                    <chartsArea symbol="USDTUSDT" />
                                </div>
                            </div>

                                <div v-if="!(i.symbol === 'USDT')">

                                    <h2 class="text-sm text-[#10192D] font-[700]">${{ i.weightedAvgPrice.slice(0,7) }}</h2>
                                    <span v-if="i.priceChangePercent < 0" class="text-[#F65556] font-[500] text-[12px]">{{i.priceChangePercent}}%</span>
                                    <span v-else-if="i.priceChangePercent > 0" class="text-[#22C36B] font-[500] text-[12px]">{{i.priceChangePercent}}%</span>
                                    <span v-else ="i.priceChangePercent === 0" class="text-[#888787] font-[500] text-[12px]">{{i.priceChangePercent}}</span>
                                </div>
                                
                            <div v-show="i.symbol === 'USDT'">

                                <h2 class="text-sm text-[#10192D] font-[700]">$0.9999</h2>
                                <!-- <span v-if="price.priceChangePercent < 0" class="text-[#F65556] font-[500] text-[12px]">%</span> -->
                                <span  class="text-[#22C36B] font-[500] text-[12px]">0.2%</span>
                                <!-- <span v-else ="price.priceChangePercent === 0" class="text-[#888787] font-[500] text-[12px]"></span> -->
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div class="mt-[9px] mx-6">

                <h1 class="text-[#10192D] text-[16px] mb-[4px] font-[700]">Trading Threshold</h1>
                <p class="text-[#8E9BAE] font-[400] text-[14px]">
                    Complete verification to increase your trading threshold</p>

                <div class="my-[16px]">

                    <div class="grid grid-cols-2 gap-x-[16px]">
                        <div  class="min-h-[141px]   rounded-[20px] py-[14px] px-[16px]  dark:bg-[#1B2537] bg-[#F5F9FF]">

                            <div class="h-[40px] w-[40px] rounded-full bg-[#EDF2F7] dark:bg-[#10192D]
                            inline-flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.1277 14.0105C16.4994 10.3998 13.6168 7.51413 9.98838 6.8765C10.6864 4.49428 12.8869 2.75 15.5001 2.75C18.6759 2.75 21.2501 5.32421 21.2501 8.5C21.2501 11.1117 19.5078 13.3112 17.1277 14.0105Z" :fill="!isDark?'#2873FF':'white'" :stroke="!isDark?'#2873FF':'white'" stroke-width="1.5"/>
                                    <path d="M9.93307 16.9331L11.358 16.159L12.5712 15.5L11.358 14.841L9.93307 14.0669L9.15904 12.642L8.5 11.4288L7.84096 12.642L7.06693 14.0669L5.642 14.841L4.42876 15.5L5.642 16.159L7.06692 16.9331L7.84096 18.358L8.5 19.5712L9.15904 18.358L9.93307 16.9331ZM8.96829 9.76826C11.7648 9.99237 14.0076 12.2352 14.2317 15.0317C14.2417 15.2006 14.25 15.3572 14.25 15.5C14.25 18.6758 11.6758 21.25 8.5 21.25C5.32421 21.25 2.75 18.6758 2.75 15.5C2.75 12.3242 5.32421 9.75 8.5 9.75C8.64277 9.75 8.79937 9.75834 8.96829 9.76826Z" :fill="!isDark?'#2873FF':'white'" :stroke="!isDark?'#2873FF':'white'" stroke-width="1.5"/>
                                </svg>

                            </div>

                            <div class="mt-[12px] leading-3">
                                <h3 class="text-[#10192D] text-[14px] font-[700] uppercase">BUY</h3>
                                <span class="text-[#64748B] text-[10px] font-[400]">Verify to buy more</span>
                            </div>

                            <h3 class="text-[#10192D] mt-[10px] text-[14px] font-[700]">$20,788</h3>

                        </div>

                        <div  class="min-h-[141px]   rounded-[20px] py-[14px] px-[16px]  dark:bg-[#1B2537] bg-[#F5F9FF]">

                            <div class="h-[40px] w-[40px] rounded-full bg-[#EDF2F7]  dark:bg-[#10192D]
                            inline-flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.25 15.5C14.25 18.6758 11.6758 21.25 8.5 21.25C5.32421 21.25 2.75 18.6758 2.75 15.5C2.75 12.3242 5.32421 9.75 8.5 9.75C8.64277 9.75 8.79937 9.75834 8.96829 9.76826C11.7648 9.99237 14.0076 12.2352 14.2317 15.0317C14.2417 15.2006 14.25 15.3572 14.25 15.5Z" :fill="!isDark?'#2873FF':'white'" :stroke="!isDark?'#2873FF':'white'" stroke-width="1.5"/>
                                <path d="M17.1277 14.0105C16.4994 10.3998 13.6168 7.51413 9.98838 6.8765C10.6864 4.49428 12.8869 2.75 15.5001 2.75C18.6759 2.75 21.2501 5.32421 21.2501 8.5C21.2501 11.1117 19.5078 13.3112 17.1277 14.0105Z" :fill="!isDark?'#2873FF':'white'" :stroke="!isDark?'#2873FF':'white'" stroke-width="1.5"/>
                                <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.08 6.93 3.71 6.3L6.3 3.71C6.92 3.08 6.48 2 5.59 2Z" :fill="!isDark?'#2873FF':'white'"/>
                                <path d="M18.4102 22.0003H21.0002C21.5502 22.0003 22.0002 21.5503 22.0002 21.0003V18.4103C22.0002 17.5203 20.9202 17.0703 20.2902 17.7003L17.7002 20.2903C17.0802 20.9203 17.5202 22.0003 18.4102 22.0003Z" :fill="!isDark?'#2873FF':'white'"/>
                                </svg>

                            </div>

                            <div class="mt-[12px] leading-3">
                                <h3 class="text-[#10192D] dark:text-[#F8FAFC] text-[14px] font-[700] uppercase">sell</h3>
                                <span class="text-[#64748B] text-[10px] font-[400]">Verify to buy more</span>
                            </div>

                            <h3 class="text-[#10192D] mt-[10px] text-[14px] font-[700]">$20,788</h3>

                        </div>

                    </div>

                </div>

                <button class="btn-primary w-full font-[700] text-[16px]">Complete verification</button>

                

            </div>

            <div class="mt-[24px] mx-6">

                <div class="leading-6">
                    <div class="grid grid-cols-6 items-start">
                        <div class=" col-span-5">
                            <h3 class="text-[#10192D] mb-[4px] font-[700] text-[16px]">Buy coins</h3>
                            <p class="text-[14px] font-[400]">Choose your preferred payment method</p>

                        </div>
                        <span class="text-[#2873FF] font-[700] text-sm">See All</span>
                    </div>

                </div>


                <div class="mt-[16px]">

                    <div class="py-[8px] px-[12px] mb-[16px]   dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Bank transfer</h3>
                                 <p>Buy coin and pay with bank transfer</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.5 14.25V16.5H1.5V14.25C1.5 13.8375 1.8375 13.5 2.25 13.5H15.75C16.1625 13.5 16.5 13.8375 16.5 14.25Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <mask id="path-2-inside-1_1811_6603" fill="white">
                                    <path d="M5.25 8.25H3.75V13.5H5.25V8.25Z"/>
                                </mask>
                                <path d="M5.25 8.25H3.75V13.5H5.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M3.75 8.25V6.75H2.25V8.25H3.75ZM5.25 8.25H6.75V6.75H5.25V8.25ZM5.25 13.5V15H6.75V13.5H5.25ZM3.75 13.5H2.25V15H3.75V13.5ZM3.75 9.75H5.25V6.75H3.75V9.75ZM3.75 8.25V13.5H6.75V8.25H3.75ZM5.25 12H3.75V15H5.25V12ZM5.25 13.5V8.25H2.25V13.5H5.25Z" fill="#8E9BAE" mask="url(#path-2-inside-1_1811_6603)"/>
                                <path d="M8.25 8.25H6.75V13.5H8.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M11.25 8.25H9.75V13.5H11.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M14.25 8.25H12.75V13.5H14.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M17.25 17.0625H0.75C0.4425 17.0625 0.1875 16.8075 0.1875 16.5C0.1875 16.1925 0.4425 15.9375 0.75 15.9375H17.25C17.5575 15.9375 17.8125 16.1925 17.8125 16.5C17.8125 16.8075 17.5575 17.0625 17.25 17.0625Z" fill="#8E9BAE"/>
                                <path d="M16.0275 4.31336L9.2775 1.61336C9.1275 1.55336 8.8725 1.55336 8.7225 1.61336L1.9725 4.31336C1.71 4.41836 1.5 4.72586 1.5 5.01086V7.50086C1.5 7.91336 1.8375 8.25086 2.25 8.25086H15.75C16.1625 8.25086 16.5 7.91336 16.5 7.50086V5.01086C16.5 4.72586 16.29 4.41836 16.0275 4.31336ZM9 6.37586C8.3775 6.37586 7.875 5.87336 7.875 5.25086C7.875 4.62836 8.3775 4.12586 9 4.12586C9.6225 4.12586 10.125 4.62836 10.125 5.25086C10.125 5.87336 9.6225 6.37586 9 6.37586Z" fill="#8E9BAE"/>
                            </svg>
                        </div>
                               


                    </div>
                    <div class="p-[8px] px-[12px]  mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px]">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Online wallet</h3>
                                <p>Buy coin and pay from an online wallet</p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M5.92776 4.38399L5.93682 4.36361L5.94465 4.34273L5.98426 4.2371C5.9899 4.22361 5.99476 4.21161 5.99854 4.20226L6.00515 4.18588L6.01628 4.16733L6.0361 4.12137C6.4529 3.15482 6.83664 2.67046 7.20726 2.44421C7.3872 2.33436 7.60136 2.26345 7.88182 2.25468L6.65332 5.11438H5.62178L5.90133 4.44346L5.92776 4.38399Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <path d="M12.6598 5.11563H9.10396L10.074 2.86091L11.3714 3.40691L11.3714 3.40692L11.3751 3.40843C12.2499 3.77116 12.7568 4.10728 13.039 4.44117C13.0966 4.51829 13.1371 4.57539 13.1761 4.6387L13.18 4.64498L13.184 4.65119C13.225 4.71509 13.2365 4.74773 13.2402 4.76137L13.2554 4.8186L13.2795 4.87273C13.2894 4.89512 13.2943 4.90778 13.297 4.91523C13.2993 4.92171 13.2999 4.92451 13.3002 4.92582L13.3057 4.9505L13.3128 4.97475C13.3297 5.03226 13.3434 5.09354 13.3534 5.15886C13.1246 5.13035 12.8934 5.11563 12.6598 5.11563Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <mask id="path-3-inside-1_1811_15201" fill="white">
                                    <path d="M9.39014 13.2455H9.57764C9.80264 13.2455 9.99014 13.043 9.99014 12.7955C9.99014 12.4805 9.90014 12.4355 9.70514 12.3605L9.39014 12.248V13.2455Z"/>
                                </mask>
                                <path d="M9.39014 13.2455H9.57764C9.80264 13.2455 9.99014 13.043 9.99014 12.7955C9.99014 12.4805 9.90014 12.4355 9.70514 12.3605L9.39014 12.248V13.2455Z" fill="#8E9BAE"/>
                                <path d="M9.39014 13.2455H7.89014V14.7455H9.39014V13.2455ZM9.70514 12.3605L10.2436 10.9605L10.2267 10.954L10.2096 10.9479L9.70514 12.3605ZM9.39014 12.248L9.89464 10.8354L7.89014 10.1195V12.248H9.39014ZM9.39014 14.7455H9.57764V11.7455H9.39014V14.7455ZM9.57764 14.7455C10.747 14.7455 11.4901 13.7505 11.4901 12.7955H8.49014C8.49014 12.3356 8.85823 11.7455 9.57764 11.7455V14.7455ZM11.4901 12.7955C11.4901 12.5574 11.4709 12.0357 11.1028 11.5646C10.7584 11.1237 10.2697 10.9706 10.2436 10.9605L9.16667 13.7606C9.22349 13.7824 9.17522 13.7665 9.11004 13.7307C9.02538 13.6842 8.8756 13.5867 8.73872 13.4115C8.46439 13.0604 8.49014 12.7187 8.49014 12.7955H11.4901ZM10.2096 10.9479L9.89464 10.8354L8.88563 13.6607L9.20063 13.7732L10.2096 10.9479ZM7.89014 12.248V13.2455H10.8901V12.248H7.89014Z" fill="#8E9BAE" mask="url(#path-3-inside-1_1811_15201)"/>
                                <path d="M13.7177 7.14023C13.3802 7.04273 13.0277 6.99023 12.6602 6.99023H5.34018C4.83018 6.99023 4.35018 7.08773 3.90018 7.28273C2.59518 7.84523 1.68018 9.14273 1.68018 10.6502V12.1127C1.68018 12.2927 1.69518 12.4652 1.71768 12.6452C1.88268 15.0302 3.15768 16.3052 5.54268 16.4627C5.71518 16.4852 5.88768 16.5002 6.07518 16.5002H11.9252C14.7002 16.5002 16.1627 15.1802 16.3052 12.5552C16.3127 12.4127 16.3202 12.2627 16.3202 12.1127V10.6502C16.3202 8.99273 15.2177 7.59773 13.7177 7.14023ZM9.96018 11.6252C10.3052 11.7452 10.7702 12.0002 10.7702 12.7952C10.7702 13.4777 10.2377 14.0252 9.57768 14.0252H9.39018V14.1902C9.39018 14.4077 9.21768 14.5802 9.00018 14.5802C8.78268 14.5802 8.61018 14.4077 8.61018 14.1902V14.0252H8.54268C7.82268 14.0252 7.23018 13.4177 7.23018 12.6677C7.23018 12.4502 7.40268 12.2777 7.62018 12.2777C7.83768 12.2777 8.01018 12.4502 8.01018 12.6677C8.01018 12.9827 8.25018 13.2452 8.54268 13.2452H8.61018V11.9777L8.04018 11.7752C7.69518 11.6552 7.23018 11.4002 7.23018 10.6052C7.23018 9.92273 7.76268 9.37523 8.42268 9.37523H8.61018V9.21023C8.61018 8.99273 8.78268 8.82023 9.00018 8.82023C9.21768 8.82023 9.39018 8.99273 9.39018 9.21023V9.37523H9.45767C10.1777 9.37523 10.7702 9.98273 10.7702 10.7327C10.7702 10.9502 10.5977 11.1227 10.3802 11.1227C10.1627 11.1227 9.99018 10.9502 9.99018 10.7327C9.99018 10.4177 9.75018 10.1552 9.45767 10.1552H9.39018V11.4227L9.96018 11.6252Z" fill="#8E9BAE"/>
                                <path d="M8.00977 10.6043C8.00977 10.9193 8.09977 10.9643 8.29477 11.0393L8.60977 11.1518V10.1543H8.42227C8.18977 10.1543 8.00977 10.3568 8.00977 10.6043Z" fill="#8E9BAE"/>
                            </svg>

                        </div>
                       


                    </div>
                    <div class="p-[8px] px-[12px]  mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px]">

                        <div class="flex justify-between items-start ">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Cash deposit</h3>
                                <p>Buy coin and pay with cash deposit to bank</p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <mask id="path-1-inside-1_1811_12592" fill="white">
                                    <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z"/>
                                </mask>
                                <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z" fill="#8E9BAE"/>
                                <path d="M8.055 8.0775L7.55577 9.49199L7.55577 9.49199L8.055 8.0775ZM8.4375 8.2125L7.93827 9.62699L9.9375 10.3326V8.2125H8.4375ZM8.4375 6.9375H9.9375V5.4375H8.4375V6.9375ZM6.1875 7.5225C6.1875 7.7955 6.20911 8.34898 6.59315 8.84103C6.96269 9.31451 7.48699 9.46771 7.55577 9.49199L8.55423 6.66301C8.48883 6.63993 8.52987 6.65123 8.59276 6.68457C8.6754 6.7284 8.82351 6.82278 8.9581 6.99522C9.22214 7.33352 9.1875 7.6545 9.1875 7.5225H6.1875ZM7.55577 9.49199L7.93827 9.62699L8.93673 6.79801L8.55423 6.66301L7.55577 9.49199ZM9.9375 8.2125V6.9375H6.9375V8.2125H9.9375ZM8.4375 5.4375H8.2125V8.4375H8.4375V5.4375ZM8.2125 5.4375C6.95825 5.4375 6.1875 6.51979 6.1875 7.5225H9.1875C9.1875 7.88021 8.89675 8.4375 8.2125 8.4375V5.4375Z" fill="#8E9BAE" mask="url(#path-1-inside-1_1811_12592)"/>
                                <path d="M9.945 9.92211L9.7875 10.3684L9.945 9.92211Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <path d="M14.685 4.11L13.1475 5.6475C13.035 5.76 12.8925 5.8125 12.75 5.8125C12.6075 5.8125 12.465 5.76 12.3525 5.6475C12.135 5.43 12.135 5.07 12.3525 4.8525L13.89 3.315C12.57 2.19 10.8675 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 7.1325 15.81 5.43 14.685 4.11ZM10.3125 8.865C10.7925 9.0375 11.4375 9.3825 11.4375 10.485C11.4375 11.4225 10.695 12.195 9.7875 12.195H9.5625V12.3825C9.5625 12.69 9.3075 12.945 9 12.945C8.6925 12.945 8.4375 12.69 8.4375 12.3825V12.195H8.3775C7.38 12.195 6.5625 11.355 6.5625 10.32C6.5625 10.005 6.8175 9.75 7.125 9.75C7.4325 9.75 7.6875 10.005 7.6875 10.3125C7.6875 10.725 7.995 11.0625 8.3775 11.0625H8.4375V9.3975L7.6875 9.135C7.2075 8.9625 6.5625 8.6175 6.5625 7.515C6.5625 6.5775 7.305 5.805 8.2125 5.805H8.4375V5.625C8.4375 5.3175 8.6925 5.0625 9 5.0625C9.3075 5.0625 9.5625 5.3175 9.5625 5.625V5.8125H9.6225C10.62 5.8125 11.4375 6.6525 11.4375 7.6875C11.4375 7.995 11.1825 8.25 10.875 8.25C10.5675 8.25 10.3125 7.995 10.3125 7.6875C10.3125 7.275 10.005 6.9375 9.6225 6.9375H9.5625V8.6025L10.3125 8.865Z" fill="#8E9BAE"/>
                                <path d="M17.0175 1.2825C16.9575 1.1475 16.8525 1.035 16.71 0.975C16.6425 0.9525 16.575 0.9375 16.5 0.9375H13.5C13.1925 0.9375 12.9375 1.1925 12.9375 1.5C12.9375 1.8075 13.1925 2.0625 13.5 2.0625H15.1425L13.89 3.315C14.175 3.5625 14.4375 3.825 14.685 4.11L15.9375 2.8575V4.5C15.9375 4.8075 16.1925 5.0625 16.5 5.0625C16.8075 5.0625 17.0625 4.8075 17.0625 4.5V1.5C17.0625 1.425 17.0475 1.3575 17.0175 1.2825Z" fill="#8E9BAE"/>
                            </svg>
                        </div>
                        


                    </div>

                </div>

            </div>

            <div class="mt-[24px] mx-6">

                <div class="">
                    <div class="grid grid-cols-6 items-start">
                        <div class=" col-span-5">
                            <h3 class="text-[#10192D] mb-[4px] font-[700] text-[16px]">Withdraw from wallet</h3>
                            <p class="text-[14px] font-[400]">Choose your preferred withdrawal method</p>

                        </div>
                        <span class="text-[#2873FF] font-[700] text-sm">See All</span>
                    </div>
                   
                </div>


                <div class="mt-[16px]">

                    <div class="p-[8px] px-[12px] mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Send to bank</h3>
                                <p class="text-[14px] font-[400]">SWIFT or SEPA</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.5 14.25V16.5H1.5V14.25C1.5 13.8375 1.8375 13.5 2.25 13.5H15.75C16.1625 13.5 16.5 13.8375 16.5 14.25Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <mask id="path-2-inside-1_1811_6603" fill="white">
                                    <path d="M5.25 8.25H3.75V13.5H5.25V8.25Z"/>
                                </mask>
                                <path d="M5.25 8.25H3.75V13.5H5.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M3.75 8.25V6.75H2.25V8.25H3.75ZM5.25 8.25H6.75V6.75H5.25V8.25ZM5.25 13.5V15H6.75V13.5H5.25ZM3.75 13.5H2.25V15H3.75V13.5ZM3.75 9.75H5.25V6.75H3.75V9.75ZM3.75 8.25V13.5H6.75V8.25H3.75ZM5.25 12H3.75V15H5.25V12ZM5.25 13.5V8.25H2.25V13.5H5.25Z" fill="#8E9BAE" mask="url(#path-2-inside-1_1811_6603)"/>
                                <path d="M8.25 8.25H6.75V13.5H8.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M11.25 8.25H9.75V13.5H11.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M14.25 8.25H12.75V13.5H14.25V8.25Z" fill="#8E9BAE"/>
                                <path d="M17.25 17.0625H0.75C0.4425 17.0625 0.1875 16.8075 0.1875 16.5C0.1875 16.1925 0.4425 15.9375 0.75 15.9375H17.25C17.5575 15.9375 17.8125 16.1925 17.8125 16.5C17.8125 16.8075 17.5575 17.0625 17.25 17.0625Z" fill="#8E9BAE"/>
                                <path d="M16.0275 4.31336L9.2775 1.61336C9.1275 1.55336 8.8725 1.55336 8.7225 1.61336L1.9725 4.31336C1.71 4.41836 1.5 4.72586 1.5 5.01086V7.50086C1.5 7.91336 1.8375 8.25086 2.25 8.25086H15.75C16.1625 8.25086 16.5 7.91336 16.5 7.50086V5.01086C16.5 4.72586 16.29 4.41836 16.0275 4.31336ZM9 6.37586C8.3775 6.37586 7.875 5.87336 7.875 5.25086C7.875 4.62836 8.3775 4.12586 9 4.12586C9.6225 4.12586 10.125 4.62836 10.125 5.25086C10.125 5.87336 9.6225 6.37586 9 6.37586Z" fill="#8E9BAE"/>
                            </svg>
                        </div>
                       


                    </div>

                    <div class="p-[8px] px-[12px]  mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Send to online wallet</h3>
                                <p class="text-[14px] font-[400]">PayPal, Skrill, Neteller</p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M5.92776 4.38399L5.93682 4.36361L5.94465 4.34273L5.98426 4.2371C5.9899 4.22361 5.99476 4.21161 5.99854 4.20226L6.00515 4.18588L6.01628 4.16733L6.0361 4.12137C6.4529 3.15482 6.83664 2.67046 7.20726 2.44421C7.3872 2.33436 7.60136 2.26345 7.88182 2.25468L6.65332 5.11438H5.62178L5.90133 4.44346L5.92776 4.38399Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <path d="M12.6598 5.11563H9.10396L10.074 2.86091L11.3714 3.40691L11.3714 3.40692L11.3751 3.40843C12.2499 3.77116 12.7568 4.10728 13.039 4.44117C13.0966 4.51829 13.1371 4.57539 13.1761 4.6387L13.18 4.64498L13.184 4.65119C13.225 4.71509 13.2365 4.74773 13.2402 4.76137L13.2554 4.8186L13.2795 4.87273C13.2894 4.89512 13.2943 4.90778 13.297 4.91523C13.2993 4.92171 13.2999 4.92451 13.3002 4.92582L13.3057 4.9505L13.3128 4.97475C13.3297 5.03226 13.3434 5.09354 13.3534 5.15886C13.1246 5.13035 12.8934 5.11563 12.6598 5.11563Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <mask id="path-3-inside-1_1811_15201" fill="white">
                                    <path d="M9.39014 13.2455H9.57764C9.80264 13.2455 9.99014 13.043 9.99014 12.7955C9.99014 12.4805 9.90014 12.4355 9.70514 12.3605L9.39014 12.248V13.2455Z"/>
                                </mask>
                                <path d="M9.39014 13.2455H9.57764C9.80264 13.2455 9.99014 13.043 9.99014 12.7955C9.99014 12.4805 9.90014 12.4355 9.70514 12.3605L9.39014 12.248V13.2455Z" fill="#8E9BAE"/>
                                <path d="M9.39014 13.2455H7.89014V14.7455H9.39014V13.2455ZM9.70514 12.3605L10.2436 10.9605L10.2267 10.954L10.2096 10.9479L9.70514 12.3605ZM9.39014 12.248L9.89464 10.8354L7.89014 10.1195V12.248H9.39014ZM9.39014 14.7455H9.57764V11.7455H9.39014V14.7455ZM9.57764 14.7455C10.747 14.7455 11.4901 13.7505 11.4901 12.7955H8.49014C8.49014 12.3356 8.85823 11.7455 9.57764 11.7455V14.7455ZM11.4901 12.7955C11.4901 12.5574 11.4709 12.0357 11.1028 11.5646C10.7584 11.1237 10.2697 10.9706 10.2436 10.9605L9.16667 13.7606C9.22349 13.7824 9.17522 13.7665 9.11004 13.7307C9.02538 13.6842 8.8756 13.5867 8.73872 13.4115C8.46439 13.0604 8.49014 12.7187 8.49014 12.7955H11.4901ZM10.2096 10.9479L9.89464 10.8354L8.88563 13.6607L9.20063 13.7732L10.2096 10.9479ZM7.89014 12.248V13.2455H10.8901V12.248H7.89014Z" fill="#8E9BAE" mask="url(#path-3-inside-1_1811_15201)"/>
                                <path d="M13.7177 7.14023C13.3802 7.04273 13.0277 6.99023 12.6602 6.99023H5.34018C4.83018 6.99023 4.35018 7.08773 3.90018 7.28273C2.59518 7.84523 1.68018 9.14273 1.68018 10.6502V12.1127C1.68018 12.2927 1.69518 12.4652 1.71768 12.6452C1.88268 15.0302 3.15768 16.3052 5.54268 16.4627C5.71518 16.4852 5.88768 16.5002 6.07518 16.5002H11.9252C14.7002 16.5002 16.1627 15.1802 16.3052 12.5552C16.3127 12.4127 16.3202 12.2627 16.3202 12.1127V10.6502C16.3202 8.99273 15.2177 7.59773 13.7177 7.14023ZM9.96018 11.6252C10.3052 11.7452 10.7702 12.0002 10.7702 12.7952C10.7702 13.4777 10.2377 14.0252 9.57768 14.0252H9.39018V14.1902C9.39018 14.4077 9.21768 14.5802 9.00018 14.5802C8.78268 14.5802 8.61018 14.4077 8.61018 14.1902V14.0252H8.54268C7.82268 14.0252 7.23018 13.4177 7.23018 12.6677C7.23018 12.4502 7.40268 12.2777 7.62018 12.2777C7.83768 12.2777 8.01018 12.4502 8.01018 12.6677C8.01018 12.9827 8.25018 13.2452 8.54268 13.2452H8.61018V11.9777L8.04018 11.7752C7.69518 11.6552 7.23018 11.4002 7.23018 10.6052C7.23018 9.92273 7.76268 9.37523 8.42268 9.37523H8.61018V9.21023C8.61018 8.99273 8.78268 8.82023 9.00018 8.82023C9.21768 8.82023 9.39018 8.99273 9.39018 9.21023V9.37523H9.45767C10.1777 9.37523 10.7702 9.98273 10.7702 10.7327C10.7702 10.9502 10.5977 11.1227 10.3802 11.1227C10.1627 11.1227 9.99018 10.9502 9.99018 10.7327C9.99018 10.4177 9.75018 10.1552 9.45767 10.1552H9.39018V11.4227L9.96018 11.6252Z" fill="#8E9BAE"/>
                                <path d="M8.00977 10.6043C8.00977 10.9193 8.09977 10.9643 8.29477 11.0393L8.60977 11.1518V10.1543H8.42227C8.18977 10.1543 8.00977 10.3568 8.00977 10.6043Z" fill="#8E9BAE"/>
                            </svg>

                        </div>
                        


                    </div>
                    <div class="p-[8px] px-[12px]  mb-[16px] dark:bg-[#1B2537] bg-[#F5F9FF] rounded-[12px] ">

                        <div class="flex justify-between items-start">
                            <div class="flex flex-col">
                                <h3 class="text-[#10192D] mb-[4px] font-[700] text-[14px]">Get as gift card</h3>
                                <p>Amazon, iTunes, eBay</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <mask id="path-1-inside-1_1811_12592" fill="white">
                                    <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z"/>
                                </mask>
                                <path d="M7.6875 7.5225C7.6875 7.9275 7.8 7.9875 8.055 8.0775L8.4375 8.2125V6.9375H8.2125C7.9275 6.9375 7.6875 7.2 7.6875 7.5225Z" fill="#8E9BAE"/>
                                <path d="M8.055 8.0775L7.55577 9.49199L7.55577 9.49199L8.055 8.0775ZM8.4375 8.2125L7.93827 9.62699L9.9375 10.3326V8.2125H8.4375ZM8.4375 6.9375H9.9375V5.4375H8.4375V6.9375ZM6.1875 7.5225C6.1875 7.7955 6.20911 8.34898 6.59315 8.84103C6.96269 9.31451 7.48699 9.46771 7.55577 9.49199L8.55423 6.66301C8.48883 6.63993 8.52987 6.65123 8.59276 6.68457C8.6754 6.7284 8.82351 6.82278 8.9581 6.99522C9.22214 7.33352 9.1875 7.6545 9.1875 7.5225H6.1875ZM7.55577 9.49199L7.93827 9.62699L8.93673 6.79801L8.55423 6.66301L7.55577 9.49199ZM9.9375 8.2125V6.9375H6.9375V8.2125H9.9375ZM8.4375 5.4375H8.2125V8.4375H8.4375V5.4375ZM8.2125 5.4375C6.95825 5.4375 6.1875 6.51979 6.1875 7.5225H9.1875C9.1875 7.88021 8.89675 8.4375 8.2125 8.4375V5.4375Z" fill="#8E9BAE" mask="url(#path-1-inside-1_1811_12592)"/>
                                <path d="M9.945 9.92211L9.7875 10.3684L9.945 9.92211Z" fill="#8E9BAE" stroke="#8E9BAE" stroke-width="1.5"/>
                                <path d="M14.685 4.11L13.1475 5.6475C13.035 5.76 12.8925 5.8125 12.75 5.8125C12.6075 5.8125 12.465 5.76 12.3525 5.6475C12.135 5.43 12.135 5.07 12.3525 4.8525L13.89 3.315C12.57 2.19 10.8675 1.5 9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 7.1325 15.81 5.43 14.685 4.11ZM10.3125 8.865C10.7925 9.0375 11.4375 9.3825 11.4375 10.485C11.4375 11.4225 10.695 12.195 9.7875 12.195H9.5625V12.3825C9.5625 12.69 9.3075 12.945 9 12.945C8.6925 12.945 8.4375 12.69 8.4375 12.3825V12.195H8.3775C7.38 12.195 6.5625 11.355 6.5625 10.32C6.5625 10.005 6.8175 9.75 7.125 9.75C7.4325 9.75 7.6875 10.005 7.6875 10.3125C7.6875 10.725 7.995 11.0625 8.3775 11.0625H8.4375V9.3975L7.6875 9.135C7.2075 8.9625 6.5625 8.6175 6.5625 7.515C6.5625 6.5775 7.305 5.805 8.2125 5.805H8.4375V5.625C8.4375 5.3175 8.6925 5.0625 9 5.0625C9.3075 5.0625 9.5625 5.3175 9.5625 5.625V5.8125H9.6225C10.62 5.8125 11.4375 6.6525 11.4375 7.6875C11.4375 7.995 11.1825 8.25 10.875 8.25C10.5675 8.25 10.3125 7.995 10.3125 7.6875C10.3125 7.275 10.005 6.9375 9.6225 6.9375H9.5625V8.6025L10.3125 8.865Z" fill="#8E9BAE"/>
                                <path d="M17.0175 1.2825C16.9575 1.1475 16.8525 1.035 16.71 0.975C16.6425 0.9525 16.575 0.9375 16.5 0.9375H13.5C13.1925 0.9375 12.9375 1.1925 12.9375 1.5C12.9375 1.8075 13.1925 2.0625 13.5 2.0625H15.1425L13.89 3.315C14.175 3.5625 14.4375 3.825 14.685 4.11L15.9375 2.8575V4.5C15.9375 4.8075 16.1925 5.0625 16.5 5.0625C16.8075 5.0625 17.0625 4.8075 17.0625 4.5V1.5C17.0625 1.425 17.0475 1.3575 17.0175 1.2825Z" fill="#8E9BAE"/>
                            </svg>
                        </div>
                        


                    </div>

                </div>

            </div>


           

            <div class="mx-6">

                <cardsReferrals />
            </div>


        </div>

    </div>

</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toast = useToast()
const pinia = useStore()

const priceChangePercent = ref()
console.log('a',priceChangePercent.value)

const show_create_account = ref(false)
const isvisible = ref(false)
const show_account_types = ref(false)
const selected_account_type = ref('USD')
const account_types = ['USD','ETH','BTC']
const toggle_account_types =()=>{
    show_account_types.value = !show_account_types.value
}

const toggle_visibility = ()=>{
    isvisible.value = !isvisible.value
}

const bitcoinPrice = ref(null)




// Assuming pinia.state.tokenLists contains tokens and pinia.state.tokenPrices contains prices and percentages
const tokens = pinia.state.tokenLists;
const prices = pinia.state.tokenPrices;

// Combine tokens and prices
const combinedTokens = tokens.map(token => {
    const priceInfo = prices.find(price => price.symbol === token.symbol + 'USDT');
    return {
        ...token,
        ...priceInfo
    };
});

// Sort combined tokens by percentage in descending order
onMounted(()=>{
    
combinedTokens.sort((a, b) => b.pricePercentage - a.pricePercentage);

console.log('TOKENS:',combinedTokens)
})

</script>

<style scoped>
.bg-gradient{
    background: linear-gradient(270deg, #38BDF8 -60.75%, #2873FF 119.96%);
    /* box-shadow: 0px 27px 20px rgba(0, 0, 0, 0.02); */
}
.bg-gradient2{
    background: linear-gradient(270deg, #38BDF8 -11.75%, #2873FF 119.96%);
    box-shadow: 0px -1px 2px 0px rgba(42, 51, 64, 0.04), 0px 1px 2px 0px rgba(42, 51, 64, 0.04);
}
.box-shadow{
    box-shadow: 0px 10px 25px 0px rgba(27, 37, 55, 0.05);
}
.box-shadow2{
    box-shadow: 0px -1px 2px 0px rgba(42, 51, 64, 0.04), 0px 1px 2px 0px rgba(42, 51, 64, 0.04);
}
.card-box-shadow{
    box-shadow: 0px 27px 20px 0px rgba(0, 0, 0, 0.02);
}
</style>
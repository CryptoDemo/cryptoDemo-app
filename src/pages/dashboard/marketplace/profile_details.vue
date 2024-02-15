<template>

    <div  class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Partner’s profile"/>

        <div class="pt-[80px]">
            <CardsProfileStatus />
        </div>

        <h3 class="text-[16px] mt-[22px]  font-[600] dark:text-[#F8FAFC] text-[#10192D] ">User Info</h3>

        <div class="mt-[16px]">

            <div class="dark:bg-[#1B2537] bg-[#F8FAFC] p-[12px]  rounded-[12px]">
                <h4 class="dark:text-[#F8FAFC] text-[#10192D]   text-[14px] font-[600]">About</h4>
                <p class="mt-[12px]">Name - Nehemiah Bernard Judas</p>
                <p class="mt-[12px]">Mobile carrier info - MTN NG</p>
                <p class="mt-[12px]">IP Loc- Nigeria</p>
                <p class="mt-[12px]">Detected Loc- Nigeria</p>
            </div>

            <div class="dark:bg-[#1B2537] bg-[#F8FAFC] p-[12px] mt-[16px] rounded-[12px]">
                <h4 class="dark:text-[#F8FAFC] text-[#10192D]  text-[14px] font-[600]">Estimated Response  time</h4>
                <p class="mt-[12px]">Speed - 3mins</p>
                <p class="mt-[12px]">Status - Last seen 1min ago</p>
            </div>


            <div class="dark:bg-[#1B2537]  bg-[#F8FAFC] p-[12px] mt-[16px] rounded-[12px]">
                <h4 class="dark:text-[#F8FAFC] text-[#10192D]  text-[14px] font-[600]">Verification status</h4>
                <div class="flex items-center mt-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 14.0625C8.6925 14.0625 8.4375 13.8075 8.4375 13.5V11.25C8.4375 10.9425 8.6925 10.6875 9 10.6875C9.3075 10.6875 9.5625 10.9425 9.5625 11.25V13.5C9.5625 13.8075 9.3075 14.0625 9 14.0625Z" fill="#E33E38"/>
                        <path d="M13.1997 16.9196H4.79973C3.43473 16.9196 2.18973 15.8696 1.96473 14.5271L0.967226 8.54962C0.802226 7.61962 1.25973 6.42712 2.00223 5.83462L7.19973 1.67212C8.20473 0.862122 9.78723 0.869622 10.7997 1.67962L15.9972 5.83462C16.7322 6.42712 17.1822 7.61962 17.0322 8.54962L16.0347 14.5196C15.8097 15.8471 14.5347 16.9196 13.1997 16.9196ZM8.99223 2.19712C8.59473 2.19712 8.19723 2.31712 7.90473 2.54962L2.70723 6.71962C2.28723 7.05712 1.98723 7.83712 2.07723 8.36962L3.07473 14.3396C3.20973 15.1271 3.99723 15.7946 4.79973 15.7946H13.1997C14.0022 15.7946 14.7897 15.1271 14.9247 14.3321L15.9222 8.36212C16.0047 7.83712 15.7047 7.04212 15.2922 6.71212L10.0947 2.55712C9.79473 2.31712 9.38973 2.19712 8.99223 2.19712Z" fill="#E33E38"/>
                    </svg>
                    <span class="text-[#E33E38] text-sm ml-[4px]">Address unverified</span>

                </div>
                <div class="flex items-center mt-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_3814_30907)">
                            <path d="M5.83268 3.33268V16.666H14.166V3.33268H5.83268ZM4.99935 1.66602H14.9993C15.2204 1.66602 15.4323 1.75381 15.5886 1.91009C15.7449 2.06637 15.8327 2.27834 15.8327 2.49935V17.4993C15.8327 17.7204 15.7449 17.9323 15.5886 18.0886C15.4323 18.2449 15.2204 18.3327 14.9993 18.3327H4.99935C4.77834 18.3327 4.56637 18.2449 4.41009 18.0886C4.25381 17.9323 4.16602 17.7204 4.16602 17.4993V2.49935C4.16602 2.27834 4.25381 2.06637 4.41009 1.91009C4.56637 1.75381 4.77834 1.66602 4.99935 1.66602ZM9.99935 14.166C10.2204 14.166 10.4323 14.2538 10.5886 14.4101C10.7449 14.5664 10.8327 14.7783 10.8327 14.9993C10.8327 15.2204 10.7449 15.4323 10.5886 15.5886C10.4323 15.7449 10.2204 15.8327 9.99935 15.8327C9.77834 15.8327 9.56637 15.7449 9.41009 15.5886C9.25381 15.4323 9.16602 15.2204 9.16602 14.9993C9.16602 14.7783 9.25381 14.5664 9.41009 14.4101C9.56637 14.2538 9.77834 14.166 9.99935 14.166Z" fill="#2873FF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3814_30907">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="text-[#2873FF] text-sm ml-[4px]">Phone verified</span>

                </div>

                <div class="flex items-center mt-[12px]">

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12.75 15.75H5.25C2.25 15.75 1.5 15 1.5 12V6C1.5 3 2.25 2.25 5.25 2.25H12.75C15.75 2.25 16.5 3 16.5 6V12C16.5 15 15.75 15.75 12.75 15.75Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 6H14.25" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.25 9H14.25" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.75 12H14.25" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.37508 8.46695C7.1248 8.46695 7.73258 7.85918 7.73258 7.10945C7.73258 6.35973 7.1248 5.75195 6.37508 5.75195C5.62535 5.75195 5.01758 6.35973 5.01758 7.10945C5.01758 7.85918 5.62535 8.46695 6.37508 8.46695Z" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12.2478C8.895 11.1603 8.0325 10.3053 6.945 10.2078C6.57 10.1703 6.1875 10.1703 5.805 10.2078C4.7175 10.3128 3.855 11.1603 3.75 12.2478" stroke="#2873FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-[#2873FF] text-sm ml-[4px]">ID verified</span>

                </div>
                
            </div>


            <div class="dark:bg-[#1B2537] bg-[#F8FAFC] p-[12px] mt-[16px]  rounded-[12px]">
                <h4 class="dark:text-[#F8FAFC] text-[#10192D]  text-[14px] font-[600]">Trading history</h4>
                <p class="mt-[12px]">Joined - 1 year ago</p>
                <p class="mt-[12px]">Sold - 3BTC, 50ETH, 5,000USDT</p>
                <p class="mt-[12px]">Trades -3,050</p>
                <p class="mt-[12px]">Blocked - 35</p>
                <p class="mt-[12px]">Blocked by - 50</p>
            </div>
            
        </div>

    </div>

</template>
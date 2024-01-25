<template>

    <div class="h-screen overflow-y-scroll bg-[#ffff]   dark:bg-[#10192D]  w-full px-6">

        <div class="fixed top-0 left-0 w-full bg-[#ffff]   dark:bg-[#10192D] px-6 py-[15px] z-50">
            <h2 class=" text-[20px] dark:text-text-dark text-text-light font-[800]">Account</h2>
        </div>


          <div class="pt-[80px]">

              <!--start of general settings section -->
                <div class=" w-full">
                        <p class=" font-[700]">General</p>
                        
                        <div @click.prevent="navigateTo('/dashboard/account/verification')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.9667 8.94997L16.8334 7.6333C16.6167 7.3833 16.4417 6.91663 16.4417 6.5833V5.16663C16.4417 4.2833 15.7167 3.5583 14.8334 3.5583H13.4167C13.0917 3.5583 12.6167 3.3833 12.3667 3.16663L11.0501 2.0333C10.4751 1.54163 9.5334 1.54163 8.95007 2.0333L7.64173 3.17497C7.39173 3.3833 6.91673 3.5583 6.59173 3.5583H5.15006C4.26673 3.5583 3.54173 4.2833 3.54173 5.16663V6.59163C3.54173 6.91663 3.36673 7.3833 3.1584 7.6333L2.0334 8.9583C1.55007 9.5333 1.55007 10.4666 2.0334 11.0416L3.1584 12.3666C3.36673 12.6166 3.54173 13.0833 3.54173 13.4083V14.8333C3.54173 15.7166 4.26673 16.4416 5.15006 16.4416H6.59173C6.91673 16.4416 7.39173 16.6166 7.64173 16.8333L8.9584 17.9666C9.5334 18.4583 10.4751 18.4583 11.0584 17.9666L12.3751 16.8333C12.6251 16.6166 13.0917 16.4416 13.4251 16.4416H14.8417C15.7251 16.4416 16.4501 15.7166 16.4501 14.8333V13.4166C16.4501 13.0916 16.6251 12.6166 16.8417 12.3666L17.9751 11.05C18.4584 10.475 18.4584 9.52497 17.9667 8.94997ZM13.4667 8.42497L9.44173 12.45C9.32507 12.5666 9.16673 12.6333 9.00007 12.6333C8.8334 12.6333 8.67507 12.5666 8.5584 12.45L6.54173 10.4333C6.30007 10.1916 6.30007 9.79163 6.54173 9.54997C6.7834 9.3083 7.1834 9.3083 7.42507 9.54997L9.00007 11.125L12.5834 7.54163C12.8251 7.29997 13.2251 7.29997 13.4667 7.54163C13.7084 7.7833 13.7084 8.1833 13.4667 8.42497Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                    
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Verification status</span>
                            </div>
                            <Icon  class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div @click.prevent="navigateTo('/dashboard/account/update_username')"  class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0001 1.6665C7.81675 1.6665 6.04175 3.4415 6.04175 5.62484C6.04175 7.7665 7.71675 9.49984 9.90008 9.57484C9.96675 9.5665 10.0334 9.5665 10.0834 9.57484C10.1001 9.57484 10.1084 9.57484 10.1251 9.57484C10.1334 9.57484 10.1334 9.57484 10.1417 9.57484C12.2751 9.49984 13.9501 7.7665 13.9584 5.62484C13.9584 3.4415 12.1834 1.6665 10.0001 1.6665Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M14.2333 11.7919C11.9083 10.2419 8.11663 10.2419 5.77497 11.7919C4.71663 12.5002 4.1333 13.4586 4.1333 14.4836C4.1333 15.5086 4.71663 16.4586 5.76663 17.1586C6.9333 17.9419 8.46663 18.3336 9.99997 18.3336C11.5333 18.3336 13.0666 17.9419 14.2333 17.1586C15.2833 16.4502 15.8666 15.5002 15.8666 14.4669C15.8583 13.4419 15.2833 12.4919 14.2333 11.7919Z"  :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Username</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div  @click.prevent="navigateTo('/dashboard/account/email')"  class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14.1667 2.91699H5.83342C3.33341 2.91699 1.66675 4.16699 1.66675 7.08366V12.917C1.66675 15.8337 3.33341 17.0837 5.83342 17.0837H14.1667C16.6667 17.0837 18.3334 15.8337 18.3334 12.917V7.08366C18.3334 4.16699 16.6667 2.91699 14.1667 2.91699ZM14.5584 7.99199L11.9501 10.0753C11.4001 10.517 10.7001 10.7337 10.0001 10.7337C9.30008 10.7337 8.59175 10.517 8.05008 
                                        10.0753L5.44175 7.99199C5.17508 7.77533 5.13341 7.37533 5.34175 7.10866C5.55841 6.84199 5.95008 6.79199 6.21675 
                                        7.00866L8.82508 9.09199C9.45842 9.60033 10.5334 9.60033 11.1667 9.09199L13.7751 7.00866C14.0417 6.79199 14.4417
                                         6.83366 14.6501 7.10866C14.8667 7.37533 14.8251 7.77533 14.5584 7.99199Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">email</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div @click.prevent="navigateTo('/dashboard/account/update_number')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                       <path d="M18.3084 15.2753C18.3084 15.5753 18.2417 15.8837 18.1001 16.1837C17.9584 16.4837 17.7751 16.767 17.5334 17.0337C17.1251 17.4837 16.6751 17.8087 16.1667 18.017C15.6667 18.2253 15.1251 18.3337 14.5417 18.3337C13.6917 18.3337 12.7834 18.1337 11.8251 17.7253C10.8667 17.317 9.90841 16.767 8.95842 16.0753C8.00008 15.3753 7.09175 14.6003 6.22508 13.742C5.36675 12.8753 4.59175 11.967 3.90008 11.017C3.21675 10.067 2.66675 9.11699 2.26675 8.17533C1.86675 7.22533 1.66675 6.31699 1.66675 5.45033C1.66675 4.88366 1.76675 4.34199 1.96675 3.84199C2.16675 3.33366 2.48341 2.86699 2.92508 2.45033C3.45841 1.92533 4.04175 1.66699 4.65842 1.66699C4.89175 1.66699 5.12508 1.71699 5.33342 1.81699C5.55008 1.91699 5.74175 2.06699 5.89175 2.28366L7.82508 5.00866C7.97508 5.21699 8.08342 5.40866 8.15841 5.59199C8.23342 5.76699 8.27508 5.94199 8.27508 6.10033C8.27508 6.30033 8.21675 6.50033 8.10008 6.69199C7.99175 6.88366 7.83342 7.08366 7.63341 7.28366L7.00008 7.94199C6.90841 8.03366 6.86675 8.14199 6.86675 8.27533C6.86675 8.34199 6.87508 8.40033 6.89175 8.46699C6.91675 8.53366 6.94175 8.58366 6.95842 8.63366C7.10842 8.90866 7.36675 9.26699 7.73341 9.70033C8.10841 10.1337 8.50841 10.5753 8.94175 11.017C9.39175 11.4587 9.82508 11.867 10.2667 12.242C10.7001 12.6087 11.0584 12.8587 11.3417 13.0087C11.3834 13.0253 11.4334 13.0503 11.4917 13.0753C11.5584 13.1003 11.6251 13.1087 11.7001 13.1087C11.8417 13.1087 11.9501 13.0587 12.0417 12.967L12.6751 12.342C12.8834 12.1337 13.0834 11.9753 13.2751 11.8753C13.4667 11.7587 13.6584 11.7003 13.8667 11.7003C14.0251 11.7003 14.1917 11.7337 14.3751 11.8087C14.5584 11.8837 14.7501 11.992 14.9584 12.1337L17.7167 14.092C17.9334 14.242 18.0834 14.417 18.1751 14.6253C18.2584 14.8337 18.3084 15.042 18.3084 15.2753Z"  :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">phone number</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                    
    
                </div>
              <!--end of general settings section -->
    
          
              <!--start of preference settings section -->
                <div class="mt-[32px] w-full">
                        <p class=" font-[700]">Preferences</p>

                    <div @click.prevent="navigateTo('/dashboard/account/select_language')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M6.37505 17.4245C6.35005 17.4245 6.31671 17.4412 6.29171 17.4412C4.67505 16.6412 3.35838 15.3162 2.55005 13.6995C2.55005 13.6745 2.56672 13.6412 2.56672 13.6162C3.58338 13.9162 4.63338 14.1412 5.67505 14.3162C5.85838 15.3662 6.07505 16.4079 6.37505 17.4245Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M17.45 13.7079C16.625 15.3662 15.25 16.7079 13.575 17.5162C13.8916 16.4579 14.1583 15.3912 14.3333 14.3162C15.3833 14.1412 16.4166 13.9162 17.4333 13.6162C17.425 13.6495 17.45 13.6829 17.45 13.7079Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M17.5166 6.42506C16.4666 6.1084 15.4083 5.85006 14.3333 5.66673C14.1583 4.59173 13.9 3.52506 13.575 2.4834C15.3 3.3084 16.6916 4.70006 17.5166 6.42506Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M6.37506 2.5748C6.07506 3.59147 5.8584 4.6248 5.6834 5.6748C4.6084 5.84147 3.54173 6.10814 2.4834 6.4248C3.29173 4.7498 4.6334 3.3748 6.29173 2.5498C6.31673 2.5498 6.35006 2.5748 6.37506 2.5748Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M12.9082 5.49199C10.9749 5.27533 9.02489 5.27533 7.09155 5.49199C7.29989 4.35033 7.56655 3.20866 7.94155 2.10866C7.95822 2.04199 7.94989 1.99199 7.95822 1.92533C8.61655 1.76699 9.29155 1.66699 9.99989 1.66699C10.6999 1.66699 11.3832 1.76699 12.0332 1.92533C12.0416 1.99199 12.0416 2.04199 12.0582 2.10866C12.4332 3.21699 12.6999 4.35033 12.9082 5.49199Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M5.49175 12.9085C4.34175 12.7001 3.20841 12.4335 2.10841 12.0585C2.04175 12.0418 1.99175 12.0501 1.92508 12.0418C1.76675 11.3835 1.66675 10.7085 1.66675 10.0001C1.66675 9.30013 1.76675 8.6168 1.92508 7.9668C1.99175 7.95846 2.04175 7.95846 2.10841 7.9418C3.21675 7.57513 4.34175 7.30013 5.49175 7.0918C5.28342 9.02513 5.28342 10.9751 5.49175 12.9085Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M18.3333 10.0001C18.3333 10.7085 18.2333 11.3835 18.075 12.0418C18.0083 12.0501 17.9583 12.0418 17.8916 12.0585C16.7833 12.4251 15.65 12.7001 14.5083 12.9085C14.725 10.9751 14.725 9.02513 14.5083 7.0918C15.65 7.30013 16.7916 7.5668 17.8916 7.9418C17.9583 7.95846 18.0083 7.9668 18.075 7.9668C18.2333 8.62513 18.3333 9.30013 18.3333 10.0001Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M12.9082 14.5088C12.6999 15.6588 12.4332 16.7921 12.0582 17.8921C12.0416 17.9588 12.0416 18.0088 12.0332 18.0755C11.3832 18.2338 10.6999 18.3338 9.99989 18.3338C9.29155 18.3338 8.61655 18.2338 7.95822 18.0755C7.94989 18.0088 7.95822 17.9588 7.94155 17.8921C7.57489 16.7838 7.29989 15.6588 7.09155 14.5088C8.05822 14.6171 9.02489 14.6921 9.99989 14.6921C10.9749 14.6921 11.9499 14.6171 12.9082 14.5088Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M13.1362 13.1364C11.0519 13.3994 8.94822 13.3994 6.86397 13.1364C6.60101 11.0522 6.60101 8.94846 6.86397 6.86422C8.94822 6.60125 11.0519 6.60125 13.1362 6.86422C13.3992 8.94846 13.3992 11.0522 13.1362 13.1364Z" :fill="isDark? 'white':'#2873FF'"/>
                                </svg>
                            </span>
                            <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">language</span>
                        </div>
                        <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                    </div>

                    <div class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.9417 13.2748C17.8083 13.0498 17.4333 12.6998 16.5 12.8665C15.9833 12.9581 15.4583 12.9998 14.9333 12.9748C12.9917 12.8915 11.2333 11.9998 10.0083 10.6248C8.925 9.41648 8.25833 7.84148 8.25 6.14148C8.25 5.19148 8.43333 4.27481 8.80833 3.40815C9.175 2.56648 8.91667 2.12481 8.73333 1.94148C8.54167 1.74981 8.09167 1.48315 7.20833 1.84981C3.8 3.28315 1.69167 6.69981 1.94167 10.3581C2.19167 13.7998 4.60833 16.7415 7.80833 17.8498C8.575 18.1165 9.38333 18.2748 10.2167 18.3081C10.35 18.3165 10.4833 18.3248 10.6167 18.3248C13.4083 18.3248 16.025 17.0081 17.675 14.7665C18.2333 13.9915 18.0833 13.4998 17.9417 13.2748Z"  :fill="isDark? 'white':'#2873FF'" />
                                </svg>
                            </span>
                            <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Dark Mode</span>
                        </div>
                        <InputRadio :toggleValue="isDark" @toggleChanged="toggleDark"/>
                    </div>

                    <div @click.prevent="navigateTo('/dashboard/account/select_currency')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.3749 3.29134V6.45801H11.1249V3.29134C11.1249 3.06634 10.9249 2.95801 10.7916 2.95801C10.7499 2.95801 10.7083 2.96634 10.6666 2.98301L4.05825 5.47468C3.61659 5.64134 3.33325 6.05801 3.33325 6.53301V7.09134C2.57492 7.65801 2.08325 8.56634 2.08325 9.59134V6.53301C2.08325 5.54134 2.69159 4.65801 3.61659 4.30801L10.2333 1.80801C10.4166 1.74134 10.6083 1.70801 10.7916 1.70801C11.6249 1.70801 12.3749 2.38301 12.3749 3.29134Z" :fill="isDark? 'white':'#2873FF'"/>
                                    <path d="M17.9167 12.0837V12.917C17.9167 13.142 17.7417 13.3253 17.5083 13.3337H16.2917C15.85 13.3337 15.45 13.0087 15.4167 12.5753C15.3917 12.317 15.4917 12.0753 15.6583 11.9087C15.8083 11.7503 16.0167 11.667 16.2417 11.667H17.5C17.7417 11.6753 17.9167 11.8587 17.9167 12.0837Z" :fill="isDark? 'white':'#2873FF'"/>
                                    <path d="M16.2332 10.7913H17.0832C17.5416 10.7913 17.9166 10.4163 17.9166 9.95801V9.59134C17.9166 7.86634 16.5082 6.45801 14.7832 6.45801H5.21658C4.50825 6.45801 3.85825 6.69134 3.33325 7.09134C2.57492 7.65801 2.08325 8.56634 2.08325 9.59134V15.1997C2.08325 16.9247 3.49159 18.333 5.21658 18.333H14.7832C16.5082 18.333 17.9166 16.9247 17.9166 15.1997V15.0413C17.9166 14.583 17.5416 14.208 17.0832 14.208H16.3582C15.5582 14.208 14.7916 13.7163 14.5833 12.9413C14.4082 12.308 14.6166 11.6997 15.0333 11.2913C15.3416 10.9747 15.7666 10.7913 16.2332 10.7913ZM11.6666 10.6247H5.83325C5.49158 10.6247 5.20825 10.3413 5.20825 9.99968C5.20825 9.65801 5.49158 9.37468 5.83325 9.37468H11.6666C12.0083 9.37468 12.2916 9.65801 12.2916 9.99968C12.2916 10.3413 12.0083 10.6247 11.6666 10.6247Z" :fill="isDark? 'white':'#2873FF'"/>
                                </svg>
                            </span>
                            <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Preferred currency</span>
                        </div>
                        <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                    </div>

                    <div  @click.prevent="navigateTo('/dashboard/account/notification_settings')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                        <div class=" flex justify-between items-center">
                            <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.1168 12.0753L15.2834 10.692C15.1084 10.3837 14.9501 9.80033 14.9501 9.45866V7.35033C14.9501 5.39199 13.8001 3.70033 12.1418 2.90866C11.7084 2.14199 10.9084 1.66699 9.99178 1.66699C9.08345 1.66699 8.26678 2.15866 7.83345 2.93366C6.20845 3.74199 5.08345 5.41699 5.08345 7.35033V9.45866C5.08345 9.80033 4.92512 10.3837 4.75012 10.6837L3.90845 12.0753C3.57512 12.6337 3.50012 13.2503 3.70845 13.817C3.90845 14.3753 4.38345 14.8087 5.00012 15.017C6.61678 15.567 8.31678 15.8337 10.0168 15.8337C11.7168 15.8337 13.4168 15.567 15.0335 15.0253C15.6168 14.8337 16.0668 14.392 16.2835 13.817C16.5001 13.242 16.4418 12.6087 16.1168 12.0753Z":fill="isDark? 'white':'#2873FF'"/>
                                    <path d="M12.3582 16.6753C12.0082 17.642 11.0832 18.3337 9.9999 18.3337C9.34157 18.3337 8.69157 18.067 8.23324 17.592C7.96657 17.342 7.76657 17.0087 7.6499 16.667C7.75824 16.6837 7.86657 16.692 7.98324 16.7087C8.1749 16.7337 8.3749 16.7587 8.5749 16.7753C9.0499 16.817 9.53324 16.842 10.0166 16.842C10.4916 16.842 10.9666 16.817 11.4332 16.7753C11.6082 16.7587 11.7832 16.7503 11.9499 16.7253C12.0832 16.7087 12.2166 16.692 12.3582 16.6753Z":fill="isDark? 'white':'#2873FF'"/>
                                </svg>
                            </span>
                            <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Notification</span>
                        </div>
                        <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                    </div>
                       
                </div>
              <!--end of preference settings section -->
    

              <!--start of security settings section -->
                <div class="mt-[32px] w-full">
                        <p class=" font-[700]">Security</p>
                        <div   @click.prevent="navigateTo('/dashboard/account/change_pin')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.4499 3.47487L10.8666 1.7582C10.3916 1.5832 9.61659 1.5832 9.14159 1.7582L4.55825 3.47487C3.67492 3.8082 2.95825 4.84154 2.95825 5.7832V12.5332C2.95825 13.2082 3.39992 14.0999 3.94159 14.4999L8.52492 17.9249C9.33325 18.5332 10.6583 18.5332 11.4666 17.9249L16.0499 14.4999C16.5916 14.0915 17.0333 13.2082 17.0333 12.5332V5.7832C17.0416 4.84154 16.3249 3.8082 15.4499 3.47487ZM10.6249 10.7249V12.9165C10.6249 13.2582 10.3416 13.5415 9.99992 13.5415C9.65825 13.5415 9.37492 13.2582 9.37492 12.9165V10.7249C8.53325 10.4582 7.91658 9.67487 7.91658 8.74987C7.91658 7.59987 8.84992 6.66654 9.99992 6.66654C11.1499 6.66654 12.0833 7.59987 12.0833 8.74987C12.0833 9.6832 11.4666 10.4582 10.6249 10.7249Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Change pin</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div  @click.prevent="navigateTo('/dashboard/account/change_password')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.4499 3.47487L10.8666 1.7582C10.3916 1.5832 9.61659 1.5832 9.14159 1.7582L4.55825 3.47487C3.67492 3.8082 2.95825 4.84154 2.95825 5.7832V12.5332C2.95825 13.2082 3.39992 14.0999 3.94159 14.4999L8.52492 17.9249C9.33325 18.5332 10.6583 18.5332 11.4666 17.9249L16.0499 14.4999C16.5916 14.0915 17.0333 13.2082 17.0333 12.5332V5.7832C17.0416 4.84154 16.3249 3.8082 15.4499 3.47487ZM10.6249 10.7249V12.9165C10.6249 13.2582 10.3416 13.5415 9.99992 13.5415C9.65825 13.5415 9.37492 13.2582 9.37492 12.9165V10.7249C8.53325 10.4582 7.91658 9.67487 7.91658 8.74987C7.91658 7.59987 8.84992 6.66654 9.99992 6.66654C11.1499 6.66654 12.0833 7.59987 12.0833 8.74987C12.0833 9.6832 11.4666 10.4582 10.6249 10.7249Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Change password</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]   inline-flex justify-center items-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0001 6.625C8.50841 6.625 7.29175 7.84167 7.29175 9.33333V10.6667C7.29175 12.1583 8.50841 13.375 10.0001 13.375C11.4917 13.375 12.7084 12.1583 12.7084 10.6667V9.33333C12.7084 7.84167 11.4917 6.625 10.0001 6.625ZM10.7501 11.0333C10.7501 11.45 10.4167 11.7833 10.0001 11.7833C9.58341 11.7833 9.25008 11.45 9.25008 11.0333V8.975C9.25008 8.56667 9.58341 8.225 10.0001 8.225C10.4167 8.225 10.7501 8.55833 10.7501 8.975V11.0333Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M10.0001 1.66699C5.40008 1.66699 1.66675 5.40033 1.66675 10.0003C1.66675 14.6003 5.40008 18.3337 10.0001 18.3337C14.6001 18.3337 18.3334 14.6003 18.3334 10.0003C18.3334 5.40033 14.6001 1.66699 10.0001 1.66699ZM13.9584 10.667C13.9584 12.8503 12.1834 14.6253 10.0001 14.6253C7.81675 14.6253 6.04175 12.8503 6.04175 10.667V9.33366C6.04175 7.15033 7.81675 5.37533 10.0001 5.37533C12.1834 5.37533 13.9584 7.15033 13.9584 9.33366V10.667Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>                        
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Enable fingerprint login</span>
                            </div>
    
                            <InputRadio :toggleValue="showFingerprint" @toggleChanged="toggleShowFingerprint"/>
                        </div>
                        <div @click.prevent="navigateTo('/dashboard/account/2FA_login')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14 1.66699H11.8333C9.16667 1.66699 7.5 3.33366 7.5 6.00033V9.37533H11.2L9.475 7.65033C9.35 7.52533 9.29167 7.36699 9.29167 7.20866C9.29167 7.05033 9.35 6.89199 9.475 6.76699C9.71667 6.52533 10.1167 6.52533 10.3583 6.76699L13.15 9.55866C13.3917 9.80033 13.3917 10.2003 13.15 10.442L10.3583 13.2337C10.1167 13.4753 9.71667 13.4753 9.475 13.2337C9.23333 12.992 9.23333 12.592 9.475 12.3503L11.2 10.6253H7.5V14.0003C7.5 16.667 9.16667 18.3337 11.8333 18.3337H13.9917C16.6583 18.3337 18.325 16.667 18.325 14.0003V6.00033C18.3333 3.33366 16.6667 1.66699 14 1.66699Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M2.29175 9.375C1.95008 9.375 1.66675 9.65833 1.66675 10C1.66675 10.3417 1.95008 10.625 2.29175 10.625H7.50008V9.375H2.29175Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>

                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor login</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                        <div  class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
                                    <svg class="text-[#2873FF] dark:text-[#ffff]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M12.4998 12.9167C12.4998 15.9083 10.0748 18.3333 7.08317 18.3333C4.0915 18.3333 1.6665 15.9083 1.6665 12.9167C1.6665 9.925 4.0915 7.5 7.08317 7.5C7.22484 7.5 7.37484 7.50833 7.5165 7.51667C10.1582 7.725 12.2748 9.84167 12.4832 12.4833C12.4915 12.625 12.4998 12.775 12.4998 12.9167Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M18.3336 7.08366C18.3336 9.80033 16.3336 12.042 13.7336 12.4337V12.3837C13.4752 9.15032 10.8502 6.52533 7.59189 6.26699H7.56689C7.95856 3.66699 10.2002 1.66699 12.9169 1.66699C15.9086 1.66699 18.3336 4.09199 18.3336 7.08366Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M4.65817 1.66699H2.49984C2.0415 1.66699 1.6665 2.04199 1.6665 2.50033V4.65866C1.6665 5.40033 2.5665 5.77533 3.0915 5.25033L5.24984 3.09199C5.7665 2.56699 5.39984 1.66699 4.65817 1.66699Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    <path d="M15.3418 18.3332H17.5001C17.9584 18.3332 18.3334 17.9582 18.3334 17.4999V15.3416C18.3334 14.5999 17.4334 14.2249 16.9084 14.7499L14.7501 16.9082C14.2334 17.4332 14.6001 18.3332 15.3418 18.3332Z"  :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    </svg>
                                </span>
                                                            
    
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor transactions</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                            
                        </div>
                      
                        <div @click.prevent="navigateTo('/dashboard/account/2F_currency_release')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center ">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg class="text-[#2873FF] dark:text-[#ffff]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M11.2418 11.1504H9.1668C8.9168 11.1504 8.7168 11.3504 8.7168 11.6004C8.7168 11.8504 8.9168 12.0504 9.1668 12.0504H11.2418C11.4918 12.0504 11.6918 11.8504 11.6918 11.6004C11.6918 11.3504 11.4918 11.1504 11.2418 11.1504Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                        <path d="M7.86667 11.1504H6.825C6.575 11.1504 6.375 11.3504 6.375 11.6004C6.375 11.8504 6.575 12.0504 6.825 12.0504H7.86667C8.11667 12.0504 8.31667 11.8504 8.31667 11.6004C8.31667 11.3504 8.11667 11.1504 7.86667 11.1504Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                        <path d="M15.4502 3.51686L10.8668 1.8002C10.3918 1.6252 9.61683 1.6252 9.14183 1.8002L4.5585 3.51686C3.67516 3.85019 2.9585 4.88353 2.9585 5.82519V12.5752C2.9585 13.2502 3.40016 14.1419 3.94183 14.5419L8.52516 17.9669C9.3335 18.5752 10.6585 18.5752 11.4668 17.9669L16.0502 14.5419C16.5918 14.1335 17.0335 13.2502 17.0335 12.5752V5.82519C17.0418 4.88353 16.3252 3.85019 15.4502 3.51686ZM15.1418 11.3752C15.1252 13.1002 14.6502 13.5335 12.8585 13.5335H7.15016C5.32516 13.5335 4.86683 13.0835 4.86683 11.2752V9.33353C4.86683 9.10019 5.05016 8.91686 5.2835 8.91686H14.7252C14.9585 8.91686 15.1418 9.10019 15.1418 9.33353V11.3752ZM15.1418 7.59186C15.1418 7.82519 14.9585 8.00853 14.7252 8.00853H5.2835C5.05016 8.00853 4.86683 7.82519 4.86683 7.59186V7.05853C4.86683 5.4252 5.25016 4.9002 6.67516 4.80853C6.82516 4.80853 6.9835 4.8002 7.15016 4.8002H12.8585C14.6835 4.8002 15.1418 5.2502 15.1418 7.05853V7.59186Z" :fill="!isDark ? '#2873FF':'#ffff'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Two-factor crypto currency release</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                        <div @click.prevent="navigateTo('/dashboard/account/security_questions')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                       <path d="M14.1667 2.02539H5.83342C3.33341 2.02539 1.66675 3.69206 1.66675 6.19206V11.1921C1.66675 13.6921 3.33341 15.3587 5.83342 15.3587V17.1337C5.83342 17.8004 6.57508 18.2004 7.12508 17.8254L10.8334 15.3587H14.1667C16.6667 15.3587 18.3334 13.6921 18.3334 11.1921V6.19206C18.3334 3.69206 16.6667 2.02539 14.1667 2.02539ZM10.0001 12.1671C9.65008 12.1671 9.37508 11.8837 9.37508 11.5421C9.37508 11.2004 9.65008 10.9171 10.0001 10.9171C10.3501 10.9171 10.6251 11.2004 10.6251 11.5421C10.6251 11.8837 10.3501 12.1671 10.0001 12.1671ZM11.0501 8.70872C10.7251 8.92539 10.6251 9.06706 10.6251 9.30039V9.47539C10.6251 9.81706 10.3417 10.1004 10.0001 10.1004C9.65842 10.1004 9.37508 9.81706 9.37508 9.47539V9.30039C9.37508 8.33372 10.0834 7.85872 10.3501 7.67539C10.6584 7.46706 10.7584 7.32539 10.7584 7.10872C10.7584 6.69206 10.4167 6.35039 10.0001 6.35039C9.58342 6.35039 9.24175 6.69206 9.24175 7.10872C9.24175 7.45039 8.95842 7.73372 8.61675 7.73372C8.27508 7.73372 7.99175 7.45039 7.99175 7.10872C7.99175 6.00039 8.89175 5.10039 10.0001 5.10039C11.1084 5.10039 12.0084 6.00039 12.0084 7.10872C12.0084 8.05872 11.3084 8.53372 11.0501 8.70872Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Security questions</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
    
                </div>
              <!--end of security settings section -->

                      <!-- :fill="isDark? 'white':'#2873FF'" -->
              <!--start of others settings section -->
                <div class="mt-[32px] pb-[60px] w-full">
                        <p class=" font-[700]">Others</p>
                        <div @click.prevent="navigateTo('/dashboard/account/activity')" class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M13.4917 1.66699H6.50841C3.47508 1.66699 1.66675 3.47533 1.66675 6.50866V13.4837C1.66675 16.5253 3.47508 18.3337 6.50841 18.3337H13.4834C16.5167 18.3337 18.3251 16.5253 18.3251 13.492V6.50866C18.3334 3.47533 16.5251 1.66699 13.4917 1.66699ZM14.3834 8.30033L12.4584 10.7837C12.2167 11.092 11.8751 11.292 11.4834 11.3337C11.0917 11.3837 10.7084 11.2753 10.4001 11.0337L8.87508 9.83366C8.81675 9.78366 8.75008 9.78366 8.71675 9.79199C8.68341 9.79199 8.62508 9.80866 8.57508 9.87533L6.59175 12.4503C6.46675 12.6087 6.28341 12.692 6.10008 12.692C5.96675 12.692 5.83341 12.6503 5.71675 12.5587C5.44175 12.3503 5.39175 11.9587 5.60008 11.6837L7.58342 9.10866C7.82508 8.80033 8.16675 8.60033 8.55841 8.55033C8.94175 8.50033 9.33341 8.60866 9.64175 8.85033L11.1667 10.0503C11.2251 10.1003 11.2834 10.1003 11.3251 10.092C11.3584 10.092 11.4167 10.0753 11.4667 10.0087L13.3917 7.52533C13.6001 7.25033 14.0001 7.20033 14.2667 7.41699C14.5417 7.64199 14.5917 8.03366 14.3834 8.30033Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Activity</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <Icon name="material-symbols:help-rounded" class="text-[#2873FF] dark:text-[#ffff]" size="20"/>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">FAQ & Support</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>


                        <div class="flex justify-between items-center py-4 border-b border-[#F1F5F9] dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537]  inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.16667 15V17.5C9.16667 17.9583 8.79167 18.3333 8.33333 18.3333C7.875 18.3333 7.5 17.9583 7.5 17.5V15H9.16667Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M12.4999 15V17.5C12.4999 17.9583 12.1249 18.3333 11.6666 18.3333C11.2083 18.3333 10.8333 17.9583 10.8333 17.5V15H12.4999Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M14.1666 9.16667V13.3333C14.1666 14.25 13.4166 15 12.4999 15H7.49992C6.58325 15 5.83325 14.25 5.83325 13.3333V9.16667C5.83325 8.25 6.58325 7.5 7.49992 7.5H12.4999C13.4166 7.5 14.1666 8.25 14.1666 9.16667Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M4.16667 9.16634V12.4997C4.16667 12.958 3.79167 13.333 3.33333 13.333C2.875 13.333 2.5 12.958 2.5 12.4997V9.16634C2.5 8.70801 2.875 8.33301 3.33333 8.33301C3.79167 8.33301 4.16667 8.70801 4.16667 9.16634Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M17.4999 9.16634V12.4997C17.4999 12.958 17.1249 13.333 16.6666 13.333C16.2083 13.333 15.8333 12.958 15.8333 12.4997V9.16634C15.8333 8.70801 16.2083 8.33301 16.6666 8.33301C17.1249 8.33301 17.4999 8.70801 17.4999 9.16634Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M8.00006 6.33366H12.0001C12.7334 6.33366 13.3334 5.73366 13.3334 5.00033C13.3334 3.15866 11.8417 1.66699 10.0001 1.66699C8.15841 1.66699 6.66675 3.15866 6.66675 5.00033C6.66675 5.73366 7.26673 6.33366 8.00006 6.33366Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Version</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>

                        <div  @click.prevent="navigateTo('/login')" class="flex justify-between items-center py-4  dark:border-[#2A3340]">
                            <div class=" flex justify-between items-center">
                                <span class=" h-[32px] w-[32px] bg-[#F5F9FF] dark:bg-[#1B2537] inline-flex justify-center items-center rounded-full">
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M14 1.66699H11.8333C9.16667 1.66699 7.5 3.33366 7.5 6.00033V9.37533H12.7083C13.05 9.37533 13.3333 9.65866 13.3333 10.0003C13.3333 10.342 13.05 10.6253 12.7083 10.6253H7.5V14.0003C7.5 16.667 9.16667 18.3337 11.8333 18.3337H13.9917C16.6583 18.3337 18.325 16.667 18.325 14.0003V6.00033C18.3333 3.33366 16.6667 1.66699 14 1.66699Z" :fill="isDark? 'white':'#2873FF'"/>
                                        <path d="M3.79995 9.37454L5.52495 7.64954C5.64995 7.52454 5.70828 7.36621 5.70828 7.20788C5.70828 7.04954 5.64995 6.88288 5.52495 6.76621C5.28328 6.52454 4.88328 6.52454 4.64162 6.76621L1.84995 9.55788C1.60828 9.79954 1.60828 10.1995 1.84995 10.4412L4.64162 13.2329C4.88328 13.4745 5.28328 13.4745 5.52495 13.2329C5.76662 12.9912 5.76662 12.5912 5.52495 12.3495L3.79995 10.6245H7.49995V9.37454H3.79995Z" :fill="isDark? 'white':'#2873FF'"/>
                                    </svg>
                                </span>
                                <span class="text-[#10192D]   dark:text-[#F8FAFC] ml-[22px] text-sm font-semibold capitalize">Sign out</span>
                            </div>
                            <Icon class="text-[#8E9BAE]" name="solar:alt-arrow-right-linear" size="20"/>
                        </div>
                      
    
                </div>
              <!--end of others settings section -->
          </div>

    </div>

</template>


<script setup>


import { useDark, useToggle } from '@vueuse/core'
let showFingerprint = ref(false);
// let showdarkMode = ref(false);
// let showNotification = ref(true);

const isDark = useDark()
const toggleDark = useToggle(isDark)

const toggleShowFingerprint =()=>{
    showFingerprint.value = !showFingerprint.value;
}




// const toggleShowNotification =(v)=>{
//     showNotification.value= v;
//     console.log(showNotification.value);
// }

</script>





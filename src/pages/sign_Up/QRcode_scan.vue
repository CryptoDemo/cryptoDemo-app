<template>
    <div class="px-[24px] pt-[6px] h-screen overflow-y-auto transition ease-linear duration-300 dark:bg-[#10192D]">

        <LoginAppBar link="/sign_Up/referralCode"/>

        <div class="pt-[72px] text-center">
            <h1 class="font-extrabold text-[24px] text-[#10192D]">Scan QR code</h1>
        </div>

        <div class="mt-[166px] relative flex items-center justify-center">

            <img class="absolute" src="/qr_code/Select1.png"/>

             <IconsBarCode />
            <img class="absolute" src="/qr_code/Rectangle25.png"/>

        </div>

    </div>
</template>
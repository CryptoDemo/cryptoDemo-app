<template>
    
    <div class="card w-[73vw] min-h-[24vh] p-4 flex flex-col justify-between rounded-lg relative overflow-hidden 
    font-['Manrope']">
        
        <div class="flex justify-between">

            <div class="flex  flex-col">
                <span class="card-title">Name Card</span>
                <span class="card-holder-name pt-1.5">Julia James</span>
            </div>

            <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="53" height="23" viewBox="0 0 53 23" fill="none">
                <g clip-path="url(#clip0_190_1597)">
                    <path d="M35.4665 4.23088C31.9085 3.79402 28.5047 5.23014 28.0903 8.6048C27.6151 12.4749 33.2214 13.4346 32.9827 15.3788C32.8822 16.1974 31.845 16.8139 30.2272 16.6153C27.9312 16.3334 26.3409 15.0987 26.3409 15.0987L25.1885 18.414C25.1885 18.414 27.0591 19.5216 29.6837 19.8439C33.5737 20.3215 36.8699 18.7811 37.2914 15.3488C37.7935 11.2593 32.1627 10.3047 32.3843 8.50014C32.4631 7.85886 33.3269 7.25168 34.9401 7.44976C36.7602 7.67324 38.1538 8.60026 38.1538 8.60026L39.2762 5.39946C39.2762 5.39946 37.7452 4.51067 35.4665 4.23088ZM2.88386 0.482212L2.73675 0.968092C2.73675 0.968092 4.20029 1.42321 5.48199 2.12998C7.14165 2.96375 7.22094 3.34024 7.3755 4.49833L9.06775 17.0527L13.3382 17.5771L21.8297 2.80847L17.569 2.28532L12.0413 12.3567L11.4185 3.16795C11.3865 2.12112 10.6571 1.43665 9.67624 1.31621L2.88386 0.482212ZM23.543 3.01883L18.2881 18.1848L22.351 18.6837L27.5941 3.51625L23.543 3.01883ZM46.2032 5.80115C45.2235 5.68086 44.6406 6.13663 44.1482 6.99768L36.4585 20.4159L40.7192 20.939L41.8331 18.6821L47.0238 19.3194L47.2355 21.7391L50.9949 22.2007L49.6278 6.22164L46.2032 5.80115ZM46.2406 10.0775L46.7858 16.0776L43.4024 15.6621L46.2406 10.0775Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_190_1597">
                    <rect width="50.5366" height="16.2514" fill="white" transform="translate(2.80453 0.193451) rotate(7)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>


        <div>
            <span class="card-content">****   ****   ****   1234</span>
        </div>


        <div class="grid grid-cols-3">
            <div class="flex flex-col">
                <span class="title">EXP DATE</span>
                <span class="value">12/25</span>
            </div>
            <div class="flex flex-col">
                <span class="title">EXP DATE</span>
                <span class="value">12/25</span>
            </div>
            
        </div>


        <div class="absolute overflow-hidden top-10 left-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="201" height="153" viewBox="0 0 201 153" fill="none">
                <path d="M199.658 160.825C189.978 243.77 35.3959 225.538 -14.0651 158.276C-48.6353 111.264 -71.6521 36.8024 -20.378 8.95274C19.569 -12.7446 78.1655 7.92798 125.27 42.3899C169.343 74.6342 206.97 98.172 199.658 160.825Z" fill="#6374BD" fill-opacity="0.15"/>
                </svg>
        </div>
          
    </div>

</template>



<style scoped>
.card{
    background: linear-gradient(114deg, #011154 21.44%, #011154 119.11%);
    transform: rotate(7deg);

}
.card-title{
    color: rgba(255, 255, 255, 0.70);
    font-size: 9.031px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.card-holder-name{
    color: #FFF;
    font-size: 12.644px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.svg{
    transform: rotate(-7deg);
}

.card-content{
    color: #FFF;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Open Sauce Sans;
    font-size: 14.45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.title{
    color: rgba(255, 255, 255, 0.70);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Open Sauce Sans;
    font-size: 9.031px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.value{
    color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Open Sauce Sans;
    font-size: 9.031px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
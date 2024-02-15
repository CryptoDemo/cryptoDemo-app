<template>

    <div class=" min-h-screen pb-52  bg-[#ffff]   dark:bg-[#10192D]  w-full  px-6">

        <Appbar link="/dashboard" title="Bank Account"/>


        <div v-if="reveal ===1">

            <div class="mt-[80px]">
    
                <p>Bank account type</p>
    
                <input class="input mt-[8px]" placeholder="personal">
    
                <p class="mt-[16px]">Bank account country</p>
    
                <CountryDropdown class="mt-[8px]"/>
                
                <p class="mt-[16px]">Bank account currency</p>
    
                <CurrencyDropdown class="mt-[8px]"/>
    
                <p class="mt-[16px]">Select your bank</p>
    
                <BankDropdown class="mt-[8px]"/>
    
                <p class="mt-[16px]">Enter account number</p>
    
                <input class="input mt-[8px]" placeholder="Account number"/>
    
                <p class="mt-[16px]">Enter account name</p>
    
                <input class="input mt-[8px]" placeholder="Account name"/>
    
            </div>
    
    
            <div @click.prevent="toggle_show_international_payments">
    
                <p v-if="!show_international_payments" class="text-[#2873FF] mt-[24px]">Receive international payments</p>
                <p v-else class="text-[#2873FF] mt-[24px]">Do not receive international payments</p>
    
            </div>
    
    
            <div  v-if="show_international_payments"  class="mt-[24px] transition ease-in-out duration-300">
    
                <p class="">Country of residence</p>
    
                <CountryDropdown class="mt-[8px]"/>
    
                <p class="mt-[16px]">State/Region</p>
    
                <DropdownState class="mt-[8px]"/>
    
                <p class="mt-[16px]">City</p>
    
                <input class="input mt-[8px]" placeholder="Enter city name"/>
    
                <p class="mt-[16px]">Zip code</p>
    
                <input class="input mt-[8px]" placeholder="Enter zip code"/>
    
                <p class="mt-[16px]">Address</p>
    
                <input class="input mt-[8px]" placeholder="Enter address"/>
    
            </div>

        </div>


        <div v-if="reveal ===2">
            
            <div class="mt-[80px]">

            <p class="text-[#2873FF] ">Add new account details</p>
    
            <p class="mt-[16px]">Bank account type</p>

            <input class="input mt-[8px]" placeholder="personal">

            <p class="mt-[16px]">Bank account country</p>

            <CountryDropdown class="mt-[8px]"/>
            
            <p class="mt-[16px]">Bank account currency</p>

            <CurrencyDropdown class="mt-[8px]"/>

            <p class="mt-[16px]">Select your bank</p>

            <BankDropdown class="mt-[8px]"/>

            <p class="mt-[16px]">Enter account number</p>

            <input class="input mt-[8px]" placeholder="Account number"/>

            <p class="mt-[16px]">Enter account name</p>

            <input class="input mt-[8px]" placeholder="Account name"/>

            </div>

        </div>

          
        <div   class="fixed bottom-5 left-0 w-full px-6">
            <button v-if="reveal ===1"  @click.prevent="reveal++" class="btn-primary w-full 
            scaling-animation">Save account details</button>
            <button v-if="reveal ===2"  @click.prevent="navigateTo('/dashboard/marketplace/create_offer/stage1')" class="btn-primary w-full 
            scaling-animation">Continue with this account</button>
        </div>

    </div>
</template>

<script setup>

const reveal = ref(1)

const show_international_payments =  ref(false)

const toggle_show_international_payments = ()=>{
    show_international_payments.value = !show_international_payments.value
}
</script>
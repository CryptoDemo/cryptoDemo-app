<template>

    <div class="relative">

        <button
                            @click="toggle_show_country"
                            class="btn-border-primary dark:bg-transparent text-[#8E9BAE] font-[400]  w-full flex text-sm
                            justify-between items-center  border-[#E2E8F0] border dark:border-[#1B2537] "
                        >
                            <span>{{ selected_country|| 'Country' }}</span>
                            <Icon :class="{'rotate-up': show_country }" 
                            name="solar:alt-arrow-down-bold" size="16" class="transition-all ease-in-out duration-300  text-[#8E9BAE]
                            dark:text-[#FFFFFF]"/>

        </button>

        <Transition
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-5 opacity-0"
        >

            <div class="absolute top-full left-0 dark:text-[#8E9BAE]  
              pb-2 transition ease-in-out duration-300 w-full at-container"  v-show="show_country">
    
                    <div class="relative  w-full bg-[#fff] dark:bg-[#10192D] at-item rounded-[20px]">
    
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only
                        dark:text-[#E2E8F0]">Search</label>
                            
                            <div class="relative" >
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-[#FFFFFF]" aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                
                                <input @focusin="isFocused=true" @focusout="isFocused=false"
                                v-model.trim="searchInput" type="search" id="default-search" class="block w-full my-3 
                                p-4 ps-10 
                                    input dark:text-[#E2E8F0] focus:ring-1 focus:ring-gray-200 dark:focus:ring-[#1B2537]" 
                                    placeholder="Search countries..." >
                            </div>
                            
                        <div class="max-h-[215px] relative overflow-y-auto px-2">
        
                            <div
                                v-for="i in filteredItem.length? filteredItem : countries"  @click="toggle_show_country(); 
                                selected_country = i.name; show_country = false; searchInput = ''"
                                class="mt-4 w-full   pb-3"
                            >
                                <a href="#" class="flex items-center w-full rounded-xl ">
                                    
                                        <div class="country-flag inline-flex justify-center items-center">
                                                <country-flag :country='i.alpha2' size='big' class=" rounded-full"/>
                                        </div>
                                <span class="px-4 font-[700] text-[16px] text-[#10192D] dark:text-[#F8FAFC]">{{ i.name }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
    
            </div>

        </Transition>
        
    </div>

</template>


<script setup>
import CountryFlag from 'vue-country-flag-next'

defineComponent ({
        CountryFlag
 })

 
const show_country = ref(false)
const selected_country = ref('')
const filteredItem  = ref([])
const searchInput = ref("")

const toggle_show_country =()=>{
    show_country.value = !show_country.value
    searchInput.value = ''
  }

  const countries = [
    { name: 'Afghanistan', alpha2: 'af', alpha3: 'afg' },
    { name: 'Åland Islands', alpha2: 'ax', alpha3: 'ala' },
    { name: 'Albania', alpha2: 'al', alpha3: 'alb' },
    { name: 'Algeria', alpha2: 'dz', alpha3: 'dza' },
    { name: 'American Samoa', alpha2: 'as', alpha3: 'asm' },
    { name: 'Andorra', alpha2: 'ad', alpha3: 'and' },
    { name: 'Angola', alpha2: 'ao', alpha3: 'ago' },
    { name: 'Anguilla', alpha2: 'ai', alpha3: 'aia' },
    { name: 'Antarctica', alpha2: 'aq', alpha3: 'ata' },
    { name: 'Antigua and Barbuda', alpha2: 'ag', alpha3: 'atg' },
    { name: 'Argentina', alpha2: 'ar', alpha3: 'arg' },
    { name: 'Armenia', alpha2: 'am', alpha3: 'arm' },
    { name: 'Aruba', alpha2: 'aw', alpha3: 'abw' },
    { name: 'Australia', alpha2: 'au', alpha3: 'aus' },
    { name: 'Austria', alpha2: 'at', alpha3: 'aut' },
    { name: 'Azerbaijan', alpha2: 'az', alpha3: 'aze' },
    { name: 'Bahamas', alpha2: 'bs', alpha3: 'bhs' },
    { name: 'Bahrain', alpha2: 'bh', alpha3: 'bhr' },
    { name: 'Bangladesh', alpha2: 'bd', alpha3: 'bgd' },
    { name: 'Barbados', alpha2: 'bb', alpha3: 'brb' },
    { name: 'Belarus', alpha2: 'by', alpha3: 'blr' },
    { name: 'Belgium', alpha2: 'be', alpha3: 'bel' },
    { name: 'Belize', alpha2: 'bz', alpha3: 'blz' },
    { name: 'Benin', alpha2: 'bj', alpha3: 'ben' },
    { name: 'Bermuda', alpha2: 'bm', alpha3: 'bmu' },
    { name: 'Bhutan', alpha2: 'bt', alpha3: 'btn' },
    { name: 'Bolivia (Plurinational State of)', alpha2: 'bo', alpha3: 'bol' },
    { name: 'Bonaire, Sint Eustatius and Saba', alpha2: 'bq', alpha3: 'bes' },
    { name: 'Bosnia and Herzegovina', alpha2: 'ba', alpha3: 'bih' },
    { name: 'Botswana', alpha2: 'bw', alpha3: 'bwa' },
    { name: 'Bouvet Island', alpha2: 'bv', alpha3: 'bvt' },
    { name: 'Brazil', alpha2: 'br', alpha3: 'bra' },
    { name: 'Virgin Islands (British)', alpha2: 'vg', alpha3: 'vgb' },
    { name: 'British Indian Ocean Territory', alpha2: 'io', alpha3: 'iot' },
    { name: 'Brunei Darussalam', alpha2: 'bn', alpha3: 'brn' },
    { name: 'Bulgaria', alpha2: 'bg', alpha3: 'bgr' },
    { name: 'Burkina Faso', alpha2: 'bf', alpha3: 'bfa' },
    { name: 'Burundi', alpha2: 'bi', alpha3: 'bdi' },
    { name: 'Cambodia', alpha2: 'kh', alpha3: 'khm' },
    { name: 'Cameroon', alpha2: 'cm', alpha3: 'cmr' },
    { name: 'Canada', alpha2: 'ca', alpha3: 'can' },
    { name: 'Cabo Verde', alpha2: 'cv', alpha3: 'cpv' },
    { name: 'Cayman Islands', alpha2: 'ky', alpha3: 'cym' },
    { name: 'Central African Republic', alpha2: 'cf', alpha3: 'caf' },
    { name: 'Chad', alpha2: 'td', alpha3: 'tcd' },
    { name: 'Chile', alpha2: 'cl', alpha3: 'chl' },
    { name: 'China', alpha2: 'cn', alpha3: 'chn' },
    { name: 'Hong Kong', alpha2: 'hk', alpha3: 'hkg' },
    { name: 'Macao', alpha2: 'mo', alpha3: 'mac' },
    { name: 'Christmas Island', alpha2: 'cx', alpha3: 'cxr' },
    { name: 'Cocos (Keeling) Islands', alpha2: 'cc', alpha3: 'cck' },
    { name: 'Colombia', alpha2: 'co', alpha3: 'col' },
    { name: 'Comoros', alpha2: 'km', alpha3: 'com' },
    { name: 'Congo', alpha2: 'cg', alpha3: 'cog' },
    { name: 'Congo, Democratic Republic of the', alpha2: 'cd', alpha3: 'cod' },
    { name: 'Cook Islands', alpha2: 'ck', alpha3: 'cok' },
    { name: 'Costa Rica', alpha2: 'cr', alpha3: 'cri' },
    { name: "Côte d'Ivoire", alpha2: 'ci', alpha3: 'civ' },
    { name: 'Croatia', alpha2: 'hr', alpha3: 'hrv' },
    { name: 'Cuba', alpha2: 'cu', alpha3: 'cub' },
    { name: 'Curaçao', alpha2: 'cw', alpha3: 'cuw' },
    { name: 'Cyprus', alpha2: 'cy', alpha3: 'cyp' },
    { name: 'Czechia', alpha2: 'cz', alpha3: 'cze' },
    { name: 'Denmark', alpha2: 'dk', alpha3: 'dnk' },
    { name: 'Djibouti', alpha2: 'dj', alpha3: 'dji' },
    { name: 'Dominica', alpha2: 'dm', alpha3: 'dma' },
    { name: 'Dominican Republic', alpha2: 'do', alpha3: 'dom' },
    { name: 'Ecuador', alpha2: 'ec', alpha3: 'ecu' },
    { name: 'Egypt', alpha2: 'eg', alpha3: 'egy' },
    { name: 'El Salvador', alpha2: 'sv', alpha3: 'slv' },
    { name: 'Equatorial Guinea', alpha2: 'gq', alpha3: 'gnq' },
    { name: 'Eritrea', alpha2: 'er', alpha3: 'eri' },
    { name: 'Estonia', alpha2: 'ee', alpha3: 'est' },
    { name: 'Ethiopia', alpha2: 'et', alpha3: 'eth' },
    { name: 'Falkland Islands (Malvinas)', alpha2: 'fk', alpha3: 'flk' },
    { name: 'Faroe Islands', alpha2: 'fo', alpha3: 'fro' },
    { name: 'Fiji', alpha2: 'fj', alpha3: 'fji' },
    { name: 'Finland', alpha2: 'fi', alpha3: 'fin' },
    { name: 'France', alpha2: 'fr', alpha3: 'fra' },
    { name: 'French Guiana', alpha2: 'gf', alpha3: 'guf' },
    { name: 'French Polynesia', alpha2: 'pf', alpha3: 'pyf' },
    { name: 'French Southern Territories', alpha2: 'tf', alpha3: 'atf' },
    { name: 'Gabon', alpha2: 'ga', alpha3: 'gab' },
    { name: 'Gambia', alpha2: 'gm', alpha3: 'gmb' },
    { name: 'Georgia', alpha2: 'ge', alpha3: 'geo' },
    { name: 'Germany', alpha2: 'de', alpha3: 'deu' },
    { name: 'Ghana', alpha2: 'gh', alpha3: 'gha' },
    { name: 'Gibraltar', alpha2: 'gi', alpha3: 'gib' },
    { name: 'Greece', alpha2: 'gr', alpha3: 'grc' },
    { name: 'Greenland', alpha2: 'gl', alpha3: 'grl' },
    { name: 'Grenada', alpha2: 'gd', alpha3: 'grd' },
    { name: 'Guadeloupe', alpha2: 'gp', alpha3: 'glp' },
    { name: 'Guam', alpha2: 'gu', alpha3: 'gum' },
    { name: 'Guatemala', alpha2: 'gt', alpha3: 'gtm' },
    { name: 'Guernsey', alpha2: 'gg', alpha3: 'ggy' },
    { name: 'Guinea', alpha2: 'gn', alpha3: 'gin' },
    { name: 'Guinea-Bissau', alpha2: 'gw', alpha3: 'gnb' },
    { name: 'Guyana', alpha2: 'gy', alpha3: 'guy' },
    { name: 'Haiti', alpha2: 'ht', alpha3: 'hti' },
    { name: 'Heard Island and McDonald Islands', alpha2: 'hm', alpha3: 'hmd' },
    { name: 'Holy See', alpha2: 'va', alpha3: 'vat' },
    { name: 'Honduras', alpha2: 'hn', alpha3: 'hnd' },
    { name: 'Hungary', alpha2: 'hu', alpha3: 'hun' },
    { name: 'Iceland', alpha2: 'is', alpha3: 'isl' },
    { name: 'India', alpha2: 'in', alpha3: 'ind' },
    { name: 'Indonesia', alpha2: 'id', alpha3: 'idn' },
    { name: 'Iran (Islamic Republic of)', alpha2: 'ir', alpha3: 'irn' },
    { name: 'Iraq', alpha2: 'iq', alpha3: 'irq' },
    { name: 'Ireland', alpha2: 'ie', alpha3: 'irl' },
    { name: 'Isle of Man', alpha2: 'im', alpha3: 'imn' },
    { name: 'Israel', alpha2: 'il', alpha3: 'isr' },
    { name: 'Italy', alpha2: 'it', alpha3: 'ita' },
    { name: 'Jamaica', alpha2: 'jm', alpha3: 'jam' },
    { name: 'Japan', alpha2: 'jp', alpha3: 'jpn' },
    { name: 'Jersey', alpha2: 'je', alpha3: 'jey' },
    { name: 'Jordan', alpha2: 'jo', alpha3: 'jor' },
    { name: 'Kazakhstan', alpha2: 'kz', alpha3: 'kaz' },
    { name: 'Kenya', alpha2: 'ke', alpha3: 'ken' },
    { name: 'Kiribati', alpha2: 'ki', alpha3: 'kir' },
    { name: "Korea (Democratic People's Republic of)", alpha2: 'kp', alpha3: 'prk' },
    { name: 'Korea, Republic of', alpha2: 'kr', alpha3: 'kor' },
    { name: 'Kuwait', alpha2: 'kw', alpha3: 'kwt' },
    { name: 'Kyrgyzstan', alpha2: 'kg', alpha3: 'kgz' },
    { name: "Lao People's Democratic Republic", alpha2: 'la', alpha3: 'lao' },
    { name: 'Latvia', alpha2: 'lv', alpha3: 'lva' },
    { name: 'Lebanon', alpha2: 'lb', alpha3: 'lbn' },
    { name: 'Lesotho', alpha2: 'ls', alpha3: 'lso' },
    { name: 'Liberia', alpha2: 'lr', alpha3: 'lbr' },
    { name: 'Libya', alpha2: 'ly', alpha3: 'lby' },
    { name: 'Liechtenstein', alpha2: 'li', alpha3: 'lie' },
    { name: 'Lithuania', alpha2: 'lt', alpha3: 'ltu' },
    { name: 'Luxembourg', alpha2: 'lu', alpha3: 'lux' },
    { name: 'North Macedonia', alpha2: 'mk', alpha3: 'mkd' },
    { name: 'Madagascar', alpha2: 'mg', alpha3: 'mdg' },
    { name: 'Malawi', alpha2: 'mw', alpha3: 'mwi' },
    { name: 'Malaysia', alpha2: 'my', alpha3: 'mys' },
    { name: 'Maldives', alpha2: 'mv', alpha3: 'mdv' },
    { name: 'Mali', alpha2: 'ml', alpha3: 'mli' },
    { name: 'Malta', alpha2: 'mt', alpha3: 'mlt' },
    { name: 'Marshall Islands', alpha2: 'mh', alpha3: 'mhl' },
    { name: 'Martinique', alpha2: 'mq', alpha3: 'mtq' },
    { name: 'Mauritania', alpha2: 'mr', alpha3: 'mrt' },
    { name: 'Mauritius', alpha2: 'mu', alpha3: 'mus' },
    { name: 'Mayotte', alpha2: 'yt', alpha3: 'myt' },
    { name: 'Mexico', alpha2: 'mx', alpha3: 'mex' },
    { name: 'Micronesia (Federated States of)', alpha2: 'fm', alpha3: 'fsm' },
    { name: 'Moldova, Republic of', alpha2: 'md', alpha3: 'mda' },
    { name: 'Monaco', alpha2: 'mc', alpha3: 'mco' },
    { name: 'Mongolia', alpha2: 'mn', alpha3: 'mng' },
    { name: 'Montenegro', alpha2: 'me', alpha3: 'mne' },
    { name: 'Montserrat', alpha2: 'ms', alpha3: 'msr' },
    { name: 'Morocco', alpha2: 'ma', alpha3: 'mar' },
    { name: 'Mozambique', alpha2: 'mz', alpha3: 'moz' },
    { name: 'Myanmar', alpha2: 'mm', alpha3: 'mmr' },
    { name: 'Namibia', alpha2: 'na', alpha3: 'nam' },
    { name: 'Nauru', alpha2: 'nr', alpha3: 'nru' },
    { name: 'Nepal', alpha2: 'np', alpha3: 'npl' },
    { name: 'Netherlands', alpha2: 'nl', alpha3: 'nld' },
    { name: 'New Caledonia', alpha2: 'nc', alpha3: 'ncl' },
    { name: 'New Zealand', alpha2: 'nz', alpha3: 'nzl' },
    { name: 'Nicaragua', alpha2: 'ni', alpha3: 'nic' },
    { name: 'Niger', alpha2: 'ne', alpha3: 'ner' },
    { name: 'Nigeria', alpha2: 'ng', alpha3: 'nga' },
    { name: 'Niue', alpha2: 'nu', alpha3: 'niu' },
    { name: 'Norfolk Island', alpha2: 'nf', alpha3: 'nfk' },
    { name: 'Northern Mariana Islands', alpha2: 'mp', alpha3: 'mnp' },
    { name: 'Norway', alpha2: 'no', alpha3: 'nor' },
    { name: 'Oman', alpha2: 'om', alpha3: 'omn' },
    { name: 'Pakistan', alpha2: 'pk', alpha3: 'pak' },
    { name: 'Palau', alpha2: 'pw', alpha3: 'plw' },
    { name: 'Palestine, State of', alpha2: 'ps', alpha3: 'pse' },
    { name: 'Panama', alpha2: 'pa', alpha3: 'pan' },
    { name: 'Papua New Guinea', alpha2: 'pg', alpha3: 'png' },
    { name: 'Paraguay', alpha2: 'py', alpha3: 'pry' },
    { name: 'Peru', alpha2: 'pe', alpha3: 'per' },
    { name: 'Philippines', alpha2: 'ph', alpha3: 'phl' },
    { name: 'Pitcairn', alpha2: 'pn', alpha3: 'pcn' },
    { name: 'Poland', alpha2: 'pl', alpha3: 'pol' },
    { name: 'Portugal', alpha2: 'pt', alpha3: 'prt' },
    { name: 'Puerto Rico', alpha2: 'pr', alpha3: 'pri' },
    { name: 'Qatar', alpha2: 'qa', alpha3: 'qat' },
    { name: 'Réunion', alpha2: 're', alpha3: 'reu' },
    { name: 'Romania', alpha2: 'ro', alpha3: 'rou' },
    { name: 'Russian Federation', alpha2: 'ru', alpha3: 'rus' },
    { name: 'Rwanda', alpha2: 'rw', alpha3: 'rwa' },
    { name: 'Saint Barthélemy', alpha2: 'bl', alpha3: 'blm' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', alpha2: 'sh', alpha3: 'shn' },
    { name: 'Saint Kitts and Nevis', alpha2: 'kn', alpha3: 'kna' },
    { name: 'Saint Lucia', alpha2: 'lc', alpha3: 'lca' },
    { name: 'Saint Martin (French part)', alpha2: 'mf', alpha3: 'maf' },
    { name: 'Saint Pierre and Miquelon', alpha2: 'pm', alpha3: 'spm' },
    { name: 'Saint Vincent and the Grenadines', alpha2: 'vc', alpha3: 'vct' },
    { name: 'Samoa', alpha2: 'ws', alpha3: 'wsm' },
    { name: 'San Marino', alpha2: 'sm', alpha3: 'smr' },
    { name: 'Sao Tome and Principe', alpha2: 'st', alpha3: 'stp' },
    { name: 'Saudi Arabia', alpha2: 'sa', alpha3: 'sau' },
    { name: 'Senegal', alpha2: 'sn', alpha3: 'sen' },
    { name: 'Serbia', alpha2: 'rs', alpha3: 'srb' },
    { name: 'Seychelles', alpha2: 'sc', alpha3: 'syc' },
    { name: 'Sierra Leone', alpha2: 'sl', alpha3: 'sle' },
    { name: 'Singapore', alpha2: 'sg', alpha3: 'sgp' },
    { name: 'Sint Maarten (Dutch part)', alpha2: 'sx', alpha3: 'sxm' },
    { name: 'Slovakia', alpha2: 'sk', alpha3: 'svk' },
    { name: 'Slovenia', alpha2: 'si', alpha3: 'svn' },
    { name: 'Solomon Islands', alpha2: 'sb', alpha3: 'slb' },
    { name: 'Somalia', alpha2: 'so', alpha3: 'som' },
    { name: 'South Africa', alpha2: 'za', alpha3: 'zaf' },
    { name: 'South Georgia and the South Sandwich Islands', alpha2: 'gs', alpha3: 'sgs' },
    { name: 'South Sudan', alpha2: 'ss', alpha3: 'ssd' },
    { name: 'Soviet Union', alpha2: 'su', alpha3: 'sun' },
    { name: 'Spain', alpha2: 'es', alpha3: 'esp' },
    { name: 'Sri Lanka', alpha2: 'lk', alpha3: 'lka' },
    { name: 'Sudan', alpha2: 'sd', alpha3: 'sdn' },
    { name: 'Suriname', alpha2: 'sr', alpha3: 'sur' },
    { name: 'Svalbard and Jan Mayen', alpha2: 'sj', alpha3: 'sjm' },
    { name: 'Eswatini', alpha2: 'sz', alpha3: 'swz' },
    { name: 'Sweden', alpha2: 'se', alpha3: 'swe' },
    { name: 'Switzerland', alpha2: 'ch', alpha3: 'che' },
    { name: 'Syrian Arab Republic', alpha2: 'sy', alpha3: 'syr' },
    { name: 'Taiwan, Province of China', alpha2: 'tw', alpha3: 'twn' },
    { name: 'Tajikistan', alpha2: 'tj', alpha3: 'tjk' },
    { name: 'Tanzania, United Republic of', alpha2: 'tz', alpha3: 'tza' },
    { name: 'Thailand', alpha2: 'th', alpha3: 'tha' },
    { name: 'Timor-Leste', alpha2: 'tl', alpha3: 'tls' },
    { name: 'Togo', alpha2: 'tg', alpha3: 'tgo' },
    { name: 'Tokelau', alpha2: 'tk', alpha3: 'tkl' },
    { name: 'Tonga', alpha2: 'to', alpha3: 'ton' },
    { name: 'Trinidad and Tobago', alpha2: 'tt', alpha3: 'tto' },
    { name: 'Tunisia', alpha2: 'tn', alpha3: 'tun' },
    { name: 'Turkey', alpha2: 'tr', alpha3: 'tur' },
    { name: 'Turkmenistan', alpha2: 'tm', alpha3: 'tkm' },
    { name: 'Turks and Caicos Islands', alpha2: 'tc', alpha3: 'tca' },
    { name: 'Tuvalu', alpha2: 'tv', alpha3: 'tuv' },
    { name: 'Uganda', alpha2: 'ug', alpha3: 'uga' },
    { name: 'Ukraine', alpha2: 'ua', alpha3: 'ukr' },
    { name: 'United Arab Emirates', alpha2: 'ae', alpha3: 'are' },
    { name: 'United Kingdom of Great Britain and Northern Ireland', alpha2: 'gb', alpha3: 'gbr' },
    { name: 'United States of America', alpha2: 'us', alpha3: 'usa' },
    { name: 'Uruguay', alpha2: 'uy', alpha3: 'ury' },
    { name: 'Uzbekistan', alpha2: 'uz', alpha3: 'uzb' },
    { name: 'Vanuatu', alpha2: 'vu', alpha3: 'vut' },
    { name: 'Venezuela (Bolivarian Republic of)', alpha2: 've', alpha3: 'ven' },
    { name: 'Viet Nam', alpha2: 'vn', alpha3: 'vnm' },
    { name: 'Wallis and Futuna', alpha2: 'wf', alpha3: 'wlf' },
    { name: 'Western Sahara', alpha2: 'eh', alpha3: 'esh' },
    { name: 'Yemen', alpha2: 'ye', alpha3: 'yem' },
    { name: 'Zambia', alpha2: 'zm', alpha3: 'zmb' },
    { name: 'Zimbabwe', alpha2: 'zw', alpha3: 'zwe' }
];

  
// const countries = [
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg",
// 		"country": "Andorra",
// 		"code": "ad"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
// 		"country": "United Arab Emirates",
// 		"code": "ae"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg",
// 		"country": "Afghanistan",
// 		"code": "af"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ec.svg",
// 		"country": "Antigua & Barbuda",
// 		"code": "ag"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ee.svg",
// 		"country": "Anguilla",
// 		"code": "ai"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg",
// 		"country": "Albania",
// 		"code": "al"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg",
// 		"country": "Armenia",
// 		"code": "am"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f4.svg",
// 		"country": "Angola",
// 		"code": "ad"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f6.svg",
// 		"country": "Antarctica",
// 		"code": "aq"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg",
// 		"country": "Argentina",
// 		"code": "ar"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f8.svg",
// 		"country": "American Samoa",
// 		"code": "as"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg",
// 		"country": "Austria",
// 		"code": "at"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
// 		"country": "Australia",
// 		"code": "au"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fc.svg",
// 		"country": "Aruba",
// 		"code": "aw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fd.svg",
// 		"country": "Åland Islands",
// 		"code": "ax"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ff.svg",
// 		"country": "Azerbaijan",
// 		"code": "az"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e6.svg",
// 		"country": "Bosnia & Herzegovina",
// 		"code": "ba"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e7.svg",
// 		"country": "Barbados",
// 		"code": "bb"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e9.svg",
// 		"country": "Bangladesh",
// 		"code": "bd"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg",
// 		"country": "Belgium",
// 		"code": "be"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1eb.svg",
// 		"country": "Burkina Faso",
// 		"code": "bf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg",
// 		"country": "Bulgaria",
// 		"code": "bg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ed.svg",
// 		"country": "Bahrain",
// 		"code": "bh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ee.svg",
// 		"country": "Burundi",
// 		"code": "bi"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ef.svg",
// 		"country": "Benin",
// 		"code": "bj"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f1.svg",
// 		"country": "St. Barthélemy",
// 		"code": "bl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f2.svg",
// 		"country": "Bermuda",
// 		"code": "bm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f3.svg",
// 		"country": "Brunei",
// 		"code": "bn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f4.svg",
// 		"country": "Bolivia",
// 		"code": "bo"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f6.svg",
// 		"country": "Caribbean Netherlands"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg",
// 		"country": "Brazil",
// 		"code": "br"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f8.svg",
// 		"country": "Bahamas",
// 		"code": "bs"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg",
// 		"country": "Bhutan",
// 		"code": "bt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fb.svg",
// 		"country": "Bouvet Island",
// 		"code": "bv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fc.svg",
// 		"country": "Botswana",
// 		"code": "bw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg",
// 		"country": "Belarus",
// 		"code": "by"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ff.svg",
// 		"country": "Belize",
// 		"code": "bz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
// 		"country": "Canada",
// 		"code": "ca"
// 	},
//     {
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ed.svg",
// 		"country": "Cambodia",
// 		"code": "kh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e8.svg",
// 		"country": "Cocos (Keeling) Islands",
// 		"code": "cc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e9.svg",
// 		"country": "Congo - Kinshasa",
// 		"code": "cg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1eb.svg",
// 		"country": "Central African Republic",
// 		"code": "cf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ec.svg",
// 		"country": "Congo - Brazzaville",
// 		"code": "cd"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg",
// 		"country": "Switzerland",
// 		"code": "ch"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ee.svg",
// 		"country": "Côte d’Ivoire",
// 		"code": "ci"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f0.svg",
// 		"country": "Cook Islands",
// 		"code": "ck"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f1.svg",
// 		"country": "Chile",
// 		"code": "cl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f2.svg",
// 		"country": "Cameroon",
// 		"code": "cm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f3.svg",
// 		"country": "China",
// 		"code": "cn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f4.svg",
// 		"country": "Colombia",
// 		"code": "co"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f7.svg",
// 		"country": "Costa Rica",
// 		"code": "cr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fa.svg",
// 		"country": "Cuba",
// 		"code": "cu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fb.svg",
// 		"country": "Cape Verde",
// 		"code": "cv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fc.svg",
// 		"country": "Curaçao",
// 		"code": "cw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fd.svg",
// 		"country": "Christmas Island",
// 		"code": "cx"
// 	},
//     {
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg",
// 		"country": "Croatia",
// 		"code": "hr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg",
// 		"country": "Cyprus",
// 		"code": "cy"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg",
// 		"country": "Czechia",
// 		"code": "cz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg",
// 		"country": "Germany",
// 		"code": "de"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ef.svg",
// 		"country": "Djibouti",
// 		"code": "dj"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg",
// 		"country": "Denmark",
// 		"code": "dk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f2.svg",
// 		"country": "Dominica",
// 		"code": "dm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f4.svg",
// 		"country": "Dominican Republic",
// 		"code": "do"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ff.svg",
// 		"country": "Algeria",
// 		"code": "dz"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e8.svg",
// 		"country": "Ecuador",
// 		"code": "ec"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg",
// 		"country": "Estonia",
// 		"code": "ee"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ec.svg",
// 		"country": "Egypt",
// 		"code": "eg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ed.svg",
// 		"country": "Western Sahara",
// 		"code": "eh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f7.svg",
// 		"country": "Eritrea",
// 		"code": "er"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg",
// 		"country": "Spain",
// 		"code": "es"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f9.svg",
// 		"country": "Ethiopia",
// 		"code": "et"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg",
// 		"country": "European Union",
// 		"code": "eu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg",
// 		"country": "Finland",
// 		"code": "fi"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ef.svg",
// 		"country": "Fiji",
// 		"code": "fj"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f0.svg",
// 		"country": "Falkland Islands",
// 		"code": "fk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f2.svg",
// 		"country": "Micronesia",
// 		"code": "fm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f4.svg",
// 		"country": "Faroe Islands",
// 		"code": "fo"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg",
// 		"country": "France",
// 		"code": "fr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e6.svg",
// 		"country": "Gabon",
// 		"code": "ga"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
// 		"country": "United Kingdom",
// 		"code": "gb"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e9.svg",
// 		"country": "Grenada",
// 		"code": "gd"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ea.svg",
// 		"country": "Georgia",
// 		"code": "ge"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1eb.svg",
// 		"country": "French Guiana",
// 		"code": "gf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ec.svg",
// 		"country": "Guernsey",
// 		"code": "gg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ed.svg",
// 		"country": "Ghana",
// 		"code": "gh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ee.svg",
// 		"country": "Gibraltar",
// 		"code": "gi"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f1.svg",
// 		"country": "Greenland",
// 		"code": "gl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f2.svg",
// 		"country": "Gambia",
// 		"code": "gm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f3.svg",
// 		"country": "Guinea",
// 		"code": "gn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f5.svg",
// 		"country": "Guadeloupe",
// 		"code": "gp"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f6.svg",
// 		"country": "Equatorial Guinea",
// 		"code": "gq"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg",
// 		"country": "Greece",
// 		"code": "gr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f8.svg",
// 		"country": "South Georgia & South', Sandwich Islands",
// 		"code": "gs"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f9.svg",
// 		"country": "Guatemala",
// 		"code": "gt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fa.svg",
// 		"country": "Guam",
// 		"code": "gu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fc.svg",
// 		"country": "Guinea-Bissau",
// 		"code": "gw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fe.svg",
// 		"country": "Guyana",
// 		"code": "gy"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f0.svg",
// 		"country": "Hong Kong SAR China",
// 		"code": "hk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f2.svg",
// 		"country": "Heard & McDonald Islands",
// 		"code": "hm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f3.svg",
// 		"country": "Honduras",
// 		"code": "hn"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f9.svg",
// 		"country": "Haiti",
// 		"code": "ht"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg",
// 		"country": "Hungary",
// 		"code": "hu"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e9.svg",
// 		"country": "Indonesia",
// 		"code": "id"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg",
// 		"country": "Ireland",
// 		"code": "ie"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f1.svg",
// 		"country": "Israel",
// 		"code": "il"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f2.svg",
// 		"country": "Isle of Man",
// 		"code": "im"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg",
// 		"country": "India",
// 		"code": "in"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f4.svg",
// 		"country": "British Indian Ocean Territory",
// 		"code": "io"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f6.svg",
// 		"country": "Iraq",
// 		"code": "iq"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f7.svg",
// 		"country": "Iran"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg",
// 		"country": "Iceland",
// 		"code": "is"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg",
// 		"country": "Italy",
// 		"code": "it"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg",
// 		"country": "Jersey",
// 		"code": "je"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f2.svg",
// 		"country": "Jamaica",
// 		"code": "jm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f4.svg",
// 		"country": "Jordan",
// 		"code": "jo"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg",
// 		"country": "Japan",
// 		"code": "jp"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg",
// 		"country": "Kenya",
// 		"code": "ke"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ec.svg",
// 		"country": "Kyrgyzstan",
// 		"code": "kg"
// 	},
	
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ee.svg",
// 		"country": "Kiribati",
// 		"code": "ki"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f2.svg",
// 		"country": "Comoros",
// 		"code": "km"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f3.svg",
// 		"country": "St. Kitts & Nevis",
// 		"code": "kn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f5.svg",
// 		"country": "North Korea",
// 		"code": "kp"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f7.svg",
// 		"country": "South Korea",
// 		"code": "kr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fc.svg",
// 		"country": "Kuwait",
// 		"code": "kw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fe.svg",
// 		"country": "Cayman Islands",
// 		"code": "ky"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ff.svg",
// 		"country": "Kazakhstan",
// 		"code": "kz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e6.svg",
// 		"country": "Laos",
// 		"code": "la"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e7.svg",
// 		"country": "Lebanon",
// 		"code": "lb"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e8.svg",
// 		"country": "St. Lucia",
// 		"code": "lc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg",
// 		"country": "Liechtenstein",
// 		"code": "li"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f0.svg",
// 		"country": "Sri Lanka",
// 		"code": "lk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f7.svg",
// 		"country": "Liberia",
// 		"code": "lr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f8.svg",
// 		"country": "Lesotho",
// 		"code": "ls"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg",
// 		"country": "Lithuania",
// 		"code": "lt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg",
// 		"country": "Luxembourg",
// 		"code": "lu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg",
// 		"country": "Latvia",
// 		"code": "lv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fe.svg",
// 		"country": "Libya",
// 		"code": "ly"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e6.svg",
// 		"country": "Morocco",
// 		"code": "ma"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e8.svg",
// 		"country": "Monaco",
// 		"code": "mc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg",
// 		"country": "Moldova",
// 		"code": "md"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg",
// 		"country": "Montenegro",
// 		"code": "me"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1eb.svg",
// 		"country": "St. Martin",
// 		"code": "mf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ec.svg",
// 		"country": "Madagascar",
// 		"code": "mg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ed.svg",
// 		"country": "Marshall Islands",
// 		"code": "mh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg",
// 		"country": "North Macedonia",
// 		"code": "mk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f1.svg",
// 		"country": "Mali",
// 		"code": "ml"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f2.svg",
// 		"country": "Myanmar (Burma)",
// 		"code": "mm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f3.svg",
// 		"country": "Mongolia",
// 		"code": "mn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f4.svg",
// 		"country": "Macao Sar China",
// 		"code": "mo"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f5.svg",
// 		"country": "Northern Mariana Islands",
// 		"code": "mp"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f6.svg",
// 		"country": "Martinique",
// 		"code": "mq"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f7.svg",
// 		"country": "Mauritania",
// 		"code": "mr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f8.svg",
// 		"country": "Montserrat",
// 		"code": "ms"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg",
// 		"country": "Malta",
// 		"code": "mt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fa.svg",
// 		"country": "Mauritius",
// 		"code": "mu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fb.svg",
// 		"country": "Maldives",
// 		"code": "mv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fc.svg",
// 		"country": "Malawi",
// 		"code": "mw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fd.svg",
// 		"country": "Mexico",
// 		"code": "mx"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fe.svg",
// 		"country": "Malaysia",
// 		"code": "my"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ff.svg",
// 		"country": "Mozambique",
// 		"code": "mz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e6.svg",
// 		"country": "Namibia",
// 		"code": "na"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e8.svg",
// 		"country": "New Caledonia",
// 		"code": "nc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ea.svg",
// 		"country": "Niger",
// 		"code": "ne"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1eb.svg",
// 		"country": "Norfolk Island",
// 		"code": "nf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ec.svg",
// 		"country": "Nigeria",
// 		"code": "ng"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ee.svg",
// 		"country": "Nicaragua",
// 		"code": "ni"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg",
// 		"country": "Netherlands",
// 		"code": "nl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg",
// 		"country": "Norway",
// 		"code": "no"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f5.svg",
// 		"country": "Nepal",
// 		"code": "np"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f7.svg",
// 		"country": "Nauru",
// 		"code": "nr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1fa.svg",
// 		"country": "Niue",
// 		"code": "nu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg",
// 		"country": "New Zealand",
// 		"code": "nz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f4-1f1f2.svg",
// 		"country": "Oman",
// 		"code": "om"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1e6.svg",
// 		"country": "Panama",
// 		"code": "pa"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ea.svg",
// 		"country": "Peru",
// 		"code": "pe"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1eb.svg",
// 		"country": "French Polynesia",
// 		"code": "pf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ec.svg",
// 		"country": "Papua New Guinea",
// 		"code": "pg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ed.svg",
// 		"country": "Philippines",
// 		"code": "ph"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f0.svg",
// 		"country": "Pakistan",
// 		"code": "pk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg",
// 		"country": "Poland",
// 		"code": "pl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f2.svg",
// 		"country": "St. Pierre & Miquelon",
// 		"code": "pm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f3.svg",
// 		"country": "Pitcairn Islands",
// 		"code": "pn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f7.svg",
// 		"country": "Puerto Rico",
// 		"code": "pr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f8.svg",
// 		"country": "Palestinian Territories",
// 		"code": "ps"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg",
// 		"country": "Portugal",
// 		"code": "pt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fc.svg",
// 		"country": "Palau",
// 		"code": "pw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fe.svg",
// 		"country": "Paraguay",
// 		"code": "py"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f6-1f1e6.svg",
// 		"country": "Qatar",
// 		"code": "qa"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1ea.svg",
// 		"country": "Réunion",
// 		"code": "re"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg",
// 		"country": "Romania",
// 		"code": "ro"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg",
// 		"country": "Serbia",
// 		"code": "yu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg",
// 		"country": "Russia",
// 		"code": "ru"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg",
// 		"country": "Rwanda",
// 		"code": "rw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e6.svg",
// 		"country": "Saudi Arabia",
// 		"code": "sa"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e7.svg",
// 		"country": "Solomon Islands",
// 		"code": "sb"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e8.svg",
// 		"country": "Seychelles",
// 		"code": "sc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e9.svg",
// 		"country": "Sudan",
// 		"code": "sd"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg",
// 		"country": "Sweden",
// 		"code": "se"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ec.svg",
// 		"country": "Singapore",
// 		"code": "sg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ed.svg",
// 		"country": "St. Helena",
// 		"code": "sh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg",
// 		"country": "Slovenia",
// 		"code": "si"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ef.svg",
// 		"country": "Svalbard & Jan Mayen",
// 		"code": "sj"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg",
// 		"country": "Slovakia",
// 		"code": "sk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f1.svg",
// 		"country": "Sierra Leone",
// 		"code": "sl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg",
// 		"country": "San Marino",
// 		"code": "sm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f3.svg",
// 		"country": "Senegal",
// 		"code": "sn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f4.svg",
// 		"country": "Somalia",
// 		"code": "so"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f7.svg",
// 		"country": "Suriname",
// 		"code": "sr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f8.svg",
// 		"country": "South Sudan",
// 		"code": "ss"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f9.svg",
// 		"country": "São Tomé & Príncipe",
// 		"code": "st"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fb.svg",
// 		"country": "El Salvador",
// 		"code": "sv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fd.svg",
// 		"country": "Sint Maarten",
// 		"code": "sx"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fe.svg",
// 		"country": "Syria",
// 		"code": "sy"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ff.svg",
// 		"country": "Eswatini",
// 		"code": "sz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e6.svg",
// 		"country": "Tristan Da Cunha",
// 		"code": "sh"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e8.svg",
// 		"country": "Turks & Caicos Islands",
// 		"code": "tc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e9.svg",
// 		"country": "Chad",
// 		"code": "td"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1eb.svg",
// 		"country": "French Southern Territories",
// 		"code": "tf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ec.svg",
// 		"country": "Togo",
// 		"code": "tg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ed.svg",
// 		"country": "Thailand",
// 		"code": "th"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ef.svg",
// 		"country": "Tajikistan",
// 		"code": "tj"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f0.svg",
// 		"country": "Tokelau",
// 		"code": "tk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f1.svg",
// 		"country": "Timor-Leste",
// 		"code": "tl"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f2.svg",
// 		"country": "Turkmenistan",
// 		"code": "tm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f3.svg",
// 		"country": "Tunisia",
// 		"code": "tn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f4.svg",
// 		"country": "Tonga",
// 		"code": "to"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg",
// 		"country": "Turkey",
// 		"code": "tr"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f9.svg",
// 		"country": "Trinidad & Tobago",
// 		"code": "tt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fb.svg",
// 		"country": "Tuvalu",
// 		"code": "tv"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg",
// 		"country": "Taiwan",
// 		"code": "tw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ff.svg",
// 		"country": "Tanzania",
// 		"code": "tz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1e6.svg",
// 		"country": "Ukraine",
// 		"code": "ua"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ec.svg",
// 		"country": "Uganda",
// 		"code": "ug"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg",
// 		"country": "U.S. Outlying Islands",
// 		"code": "um"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f3.svg",
// 		"country": "United Nations",
// 		"code": "un"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
// 		"country": "United States",
// 		"code": "us"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1fe.svg",
// 		"country": "Uruguay",
// 		"code": "uy"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ff.svg",
// 		"country": "Uzbekistan",
// 		"code": "uz"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e6.svg",
// 		"country": "Vatican City",
// 		"code": "va"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e8.svg",
// 		"country": "St. Vincent & Grenadines",
// 		"code": "vc"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ea.svg",
// 		"country": "Venezuela",
// 		"code": "ve"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ec.svg",
// 		"country": "British Virgin Islands",
// 		"code": "vg"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ee.svg",
// 		"country": "U.S. Virgin Islands",
// 		"code": "vi"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1f3.svg",
// 		"country": "Vietnam",
// 		"code": "vn"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1fa.svg",
// 		"country": "Vanuatu",
// 		"code": "vu"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1eb.svg",
// 		"country": "Wallis & Futuna",
// 		"code": "wf"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1f8.svg",
// 		"country": "Samoa",
// 		"code": "ws"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg",
// 		"country": "Kosovo",
// 		"code": "xk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1ea.svg",
// 		"country": "Yemen",
// 		"code": "ye"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1f9.svg",
// 		"country": "Mayotte",
// 		"code": "yt"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
// 		"country": "South Africa",
// 		"code": "za"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1f2.svg",
// 		"country": "Zambia",
// 		"code": "zm"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1fc.svg",
// 		"country": "Zimbabwe",
// 		"code": "zw"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.svg",
// 		"country": "England",
// 		"code": "uk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.svg",
// 		"country": "Scotland",
// 		"code": "uk"
// 	},
// 	{
// 		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg",
// 		"country": "Wales",
// 		"code": "uk"
// 	}
// ]

const filterV =(n)=>{
        filteredItem.value = countries.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())

        }) 

        console.log(filteredItem.value)
    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
})


const emitPassword = defineEmits('selected_country');

watch(()=> selected_country.value ,(newVal)=>{
  emitPassword('selected_country',newVal)
})



</script>


<style scoped>

.rotate-up {
  transform: rotate(180deg);
}
  .country-flag > .flag{
    width: 40px !important;
    height: 40px !important
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
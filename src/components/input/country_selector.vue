<template>
    <div class="mb-4">
      <div class="flex items-center relative">
        <button
          @click.prevent="toggleCountrySelector"
          class="flex-shrink-0 absolute flex justify-between gap-x-2 left-1 items-center py-2 ml-2 px-2 text-sm z-40
          font-medium  text-gray-900 bg-transparent rounded-s-2xl focus:outline-none dark:bg-transparent 
            border-r-[1px] border-gray-300 dark:text-white dark:border-gray-700"
          type="button"   :disabled="props.isdisabled"
        >
          <country-flag :country="selectedIcon" size="small" class="pr-2" />
          {{ selectedNumber }}

          <svg :class="{'rotate-up': usersToggle }" class="transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.9467 5.45312H7.79341H4.05341C3.41341 5.45312 3.09341 6.22646 3.54674 6.67979L7.00008
             10.1331C7.55341 10.6865 8.45341 10.6865 9.00674 10.1331L10.3201 8.81979L12.4601 6.67979C12.9067 6.22646 12.5867 
             5.45312 11.9467 5.45312Z" :fill="isDark?'#8E9BAE':'#10192D'"/>
           </svg>
        </button>
  
        <Transition
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-5 opacity-0"
        >

          <div v-show="usersToggle" id="dropdown-phone" class="z-20 absolute top-14 w-full bg-white dark:bg-[#10192D] 
          rounded-lg at-container">
             
            <div class="relative at-item bg-white dark:bg-[#10192D] ">

              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">

                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"  :stroke="isDark?'#8E9BAE':'#10192D'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 22L20 20"  :stroke="isDark?'#8E9BAE':'#10192D'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </div>
                
                <input v-model.trim="searchInput" type="search" id="default-search" class="input my-3  p-4 ps-12 " 
                  placeholder="Search countries..." required>
              </div>
      
              <div class="max-h-[284px] border dark:border-[#1B2537] rounded-2xl overflow-y-scroll">
                <ul  class="pb-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                  <li v-for="country in filteredPhoneNumbers.length ? filteredPhoneNumbers :  phoneNumbers" :key="country.code">
                    
                    <button @click="selectCountry(country)" type="button" class="inline-flex px-4 w-full py-2 text-sm hover:rounded-2xl text-gray-700
                      hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-200 dark:hover:text-white" role="menuitem">
                      <div class="flex justify-between items-center w-full">
                        <div class="gap-x-4 flex justify-between items-center">
                          <div class="country-flag inline-flex justify-center items-center">
                                    <country-flag :country='country.alpha2' size='big' class=" rounded-full"/>
                            </div>
                          <span class=" dark:text-[#F8FAFC] text-[#10192D] text-[16px]">{{ country.name }}</span> 
                        </div>
                        <span>{{ country.code }} </span>
                      </div>
                    </button>
                  </li>
                </ul>
                <!-- <div v-else class="text-gray-700 dark:text-gray-200 py-2">No matching countries found</div> -->
              </div>
            </div>

          </div>

        </Transition>


        <label for="phone-input" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">
            Phone number:
          </label>
          <div class="relative w-full z-20">
            <input
            :disabled="props.isdisabled"
              type="phone"
              id="phone-input"
              class="input  pl-[120px] w-full z-20"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import {debounce} from '@/composables/mixins';
  import countryFlag from 'vue-country-flag-next';
  import { useDark, useToggle } from '@vueuse/core'

  const props  = defineProps({
    isdisabled:{
        type: Boolean,
        default: false,
    }
  })

   const isDark = useDark()
  
  const selectedNumber = ref('+1');
  const selectedIcon = ref('us');
  const usersToggle = ref(false);
  const filteredPhoneNumbers = ref([]);
  const searchInput = ref('');


  // const phoneNumbers = [
  //   { name: 'United States', code: '+234', icon: 'us' },
  //   { name: 'Australia', code: '+44', icon: 'au' },
  //   { name: 'Austria', code: '+61', icon: 'at' },
  //   { name: 'Dominica', code: '+61', icon: 'dm' },
  //   { name: 'Denmark', code: '+641', icon: 'br' },
  // ];

  const phoneNumbers = [
    { name: 'Afghanistan', alpha2: 'af', alpha3: 'afg', code: '+93' },
    { name: 'Åland Islands', alpha2: 'ax', alpha3: 'ala', code: '+358' },
    { name: 'Albania', alpha2: 'al', alpha3: 'alb', code: '+355' },
    { name: 'Algeria', alpha2: 'dz', alpha3: 'dza', code: '+213' },
    { name: 'American Samoa', alpha2: 'as', alpha3: 'asm', code: '+1' },
    { name: 'Andorra', alpha2: 'ad', alpha3: 'and', code: '+376' },
    { name: 'Angola', alpha2: 'ao', alpha3: 'ago', code: '+244' },
    { name: 'Anguilla', alpha2: 'ai', alpha3: 'aia', code: '+1' },
    { name: 'Antarctica', alpha2: 'aq', alpha3: 'ata', code: '+672' },
    { name: 'Antigua and Barbuda', alpha2: 'ag', alpha3: 'atg', code: '+1' },
    { name: 'Argentina', alpha2: 'ar', alpha3: 'arg', code: '+54' },
    { name: 'Armenia', alpha2: 'am', alpha3: 'arm', code: '+374' },
    { name: 'Aruba', alpha2: 'aw', alpha3: 'abw', code: '+297' },
    { name: 'Australia', alpha2: 'au', alpha3: 'aus', code: '+61' },
    { name: 'Austria', alpha2: 'at', alpha3: 'aut', code: '+43' },
    { name: 'Azerbaijan', alpha2: 'az', alpha3: 'aze', code: '+994' },
    { name: 'Bahamas', alpha2: 'bs', alpha3: 'bhs', code: '+1' },
    { name: 'Bahrain', alpha2: 'bh', alpha3: 'bhr', code: '+973' },
    { name: 'Bangladesh', alpha2: 'bd', alpha3: 'bgd', code: '+880' },
    { name: 'Barbados', alpha2: 'bb', alpha3: 'brb', code: '+1' },
    { name: 'Belarus', alpha2: 'by', alpha3: 'blr', code: '+375' },
    { name: 'Belgium', alpha2: 'be', alpha3: 'bel', code: '+32' },
    { name: 'Belize', alpha2: 'bz', alpha3: 'blz', code: '+501' },
    { name: 'Benin', alpha2: 'bj', alpha3: 'ben', code: '+229' },
    { name: 'Bermuda', alpha2: 'bm', alpha3: 'bmu', code: '+1' },
    { name: 'Bhutan', alpha2: 'bt', alpha3: 'btn', code: '+975' },
    { name: 'Bolivia (Plurinational State of)', alpha2: 'bo', alpha3: 'bol', code: '+591' },
    { name: 'Bonaire, Sint Eustatius and Saba', alpha2: 'bq', alpha3: 'bes', code: '+599' },
    { name: 'Bosnia and Herzegovina', alpha2: 'ba', alpha3: 'bih', code: '+387' },
    { name: 'Botswana', alpha2: 'bw', alpha3: 'bwa', code: '+267' },
    { name: 'Bouvet Island', alpha2: 'bv', alpha3: 'bvt', code: '+47' },
    { name: 'Brazil', alpha2: 'br', alpha3: 'bra', code: '+55' },
    { name: 'British Indian Ocean Territory', alpha2: 'io', alpha3: 'iot', code: '+246' },
    { name: 'Brunei Darussalam', alpha2: 'bn', alpha3: 'brn', code: '+673' },
    { name: 'Bulgaria', alpha2: 'bg', alpha3: 'bgr', code: '+359' },
    { name: 'Burkina Faso', alpha2: 'bf', alpha3: 'bfa', code: '+226' },
    { name: 'Burundi', alpha2: 'bi', alpha3: 'bdi', code: '+257' },
    { name: 'Cambodia', alpha2: 'kh', alpha3: 'khm', code: '+855' },
    { name: 'Cameroon', alpha2: 'cm', alpha3: 'cmr', code: '+237' },
    { name: 'Canada', alpha2: 'ca', alpha3: 'can', code: '+1' },
    { name: 'Cabo Verde', alpha2: 'cv', alpha3: 'cpv', code: '+238' },
    { name: 'Cayman Islands', alpha2: 'ky', alpha3: 'cym', code: '+1' },
    { name: 'Central African Republic', alpha2: 'cf', alpha3: 'caf', code: '+236' },
    { name: 'Chad', alpha2: 'td', alpha3: 'tcd', code: '+235' },
    { name: 'Chile', alpha2: 'cl', alpha3: 'chl', code: '+56' },
    { name: 'China', alpha2: 'cn', alpha3: 'chn', code: '+86' },
    { name: 'Christmas Island', alpha2: 'cx', alpha3: 'cxr', code: '+61' },
    { name: 'Cocos (Keeling) Islands', alpha2: 'cc', alpha3: 'cck', code: '+61' },
    { name: 'Colombia', alpha2: 'co', alpha3: 'col', code: '+57' },
    { name: 'Comoros', alpha2: 'km', alpha3: 'com', code: '+269' },
    { name: 'Congo', alpha2: 'cg', alpha3: 'cog', code: '+242' },
    { name: 'Congo (Democratic Republic of the)', alpha2: 'cd', alpha3: 'cod', code: '+243' },
    { name: 'Cook Islands', alpha2: 'ck', alpha3: 'cok', code: '+682' },
    { name: 'Costa Rica', alpha2: 'cr', alpha3: 'cri', code: '+506' },
    { name: 'Croatia', alpha2: 'hr', alpha3: 'hrv', code: '+385' },
    { name: 'Cuba', alpha2: 'cu', alpha3: 'cub', code: '+53' },
    { name: 'Curaçao', alpha2: 'cw', alpha3: 'cuw', code: '+599' },
    { name: 'Cyprus', alpha2: 'cy', alpha3: 'cyp', code: '+357' },
    { name: 'Czech Republic', alpha2: 'cz', alpha3: 'cze', code: '+420' },
    { name: 'Denmark', alpha2: 'dk', alpha3: 'dnk', code: '+45' },
    { name: 'Djibouti', alpha2: 'dj', alpha3: 'dji', code: '+253' },
    { name: 'Dominica', alpha2: 'dm', alpha3: 'dma', code: '+1' },
    { name: 'Dominican Republic', alpha2: 'do', alpha3: 'dom', code: '+1' },
    { name: 'Ecuador', alpha2: 'ec', alpha3: 'ecu', code: '+593' },
    { name: 'Egypt', alpha2: 'eg', alpha3: 'egy', code: '+20' },
    { name: 'El Salvador', alpha2: 'sv', alpha3: 'slv', code: '+503' },
    { name: 'Equatorial Guinea', alpha2: 'gq', alpha3: 'gnq', code: '+240' },
    { name: 'Eritrea', alpha2: 'er', alpha3: 'eri', code: '+291' },
    { name: 'Estonia', alpha2: 'ee', alpha3: 'est', code: '+372' },
    { name: 'Ethiopia', alpha2: 'et', alpha3: 'eth', code: '+251' },
    { name: 'Falkland Islands (Malvinas)', alpha2: 'fk', alpha3: 'flk', code: '+500' },
    { name: 'Faroe Islands', alpha2: 'fo', alpha3: 'fro', code: '+298' },
    { name: 'Fiji', alpha2: 'fj', alpha3: 'fji', code: '+679' },
    { name: 'Finland', alpha2: 'fi', alpha3: 'fin', code: '+358' },
    { name: 'France', alpha2: 'fr', alpha3: 'fra', code: '+33' },
    { name: 'French Guiana', alpha2: 'gf', alpha3: 'guf', code: '+594' },
    { name: 'French Polynesia', alpha2: 'pf', alpha3: 'pyf', code: '+689' },
    { name: 'French Southern Territories', alpha2: 'tf', alpha3: 'atf', code: '+262' },
    { name: 'Gabon', alpha2: 'ga', alpha3: 'gab', code: '+241' },
    { name: 'Gambia', alpha2: 'gm', alpha3: 'gmb', code: '+220' },
    { name: 'Georgia', alpha2: 'ge', alpha3: 'geo', code: '+995' },
    { name: 'Germany', alpha2: 'de', alpha3: 'deu', code: '+49' },
    { name: 'Ghana', alpha2: 'gh', alpha3: 'gha', code: '+233' },
    { name: 'Gibraltar', alpha2: 'gi', alpha3: 'gib', code: '+350' },
    { name: 'Greece', alpha2: 'gr', alpha3: 'grc', code: '+30' },
    { name: 'Greenland', alpha2: 'gl', alpha3: 'grl', code: '+299' },
    { name: 'Grenada', alpha2: 'gd', alpha3: 'grd', code: '+1' },
    { name: 'Guadeloupe', alpha2: 'gp', alpha3: 'glp', code: '+590' },
    { name: 'Guam', alpha2: 'gu', alpha3: 'gum', code: '+1' },
    { name: 'Guatemala', alpha2: 'gt', alpha3: 'gtm', code: '+502' },
    { name: 'Guernsey', alpha2: 'gg', alpha3: 'ggy', code: '+44' },
    { name: 'Guinea', alpha2: 'gn', alpha3: 'gin', code: '+224' },
    { name: 'Guinea-Bissau', alpha2: 'gw', alpha3: 'gnb', code: '+245' },
    { name: 'Guyana', alpha2: 'gy', alpha3: 'guy', code: '+592' },
    { name: 'Haiti', alpha2: 'ht', alpha3: 'hti', code: '+509' },
    { name: 'Heard Island and McDonald Islands', alpha2: 'hm', alpha3: 'hmd', code: '+672' },
    { name: 'Holy See', alpha2: 'va', alpha3: 'vat', code: '+379' },
    { name: 'Honduras', alpha2: 'hn', alpha3: 'hnd', code: '+504' },
    { name: 'Hong Kong', alpha2: 'hk', alpha3: 'hkg', code: '+852' },
    { name: 'Hungary', alpha2: 'hu', alpha3: 'hun', code: '+36' },
    { name: 'Iceland', alpha2: 'is', alpha3: 'isl', code: '+354' },
    { name: 'India', alpha2: 'in', alpha3: 'ind', code: '+91' },
    { name: 'Indonesia', alpha2: 'id', alpha3: 'idn', code: '+62' },
    { name: 'Iran (Islamic Republic of)', alpha2: 'ir', alpha3: 'irn', code: '+98' },
    { name: 'Iraq', alpha2: 'iq', alpha3: 'irq', code: '+964' },
    { name: 'Ireland', alpha2: 'ie', alpha3: 'irl', code: '+353' },
    { name: 'Isle of Man', alpha2: 'im', alpha3: 'imn', code: '+44' },
    { name: 'Israel', alpha2: 'il', alpha3: 'isr', code: '+972' },
    { name: 'Italy', alpha2: 'it', alpha3: 'ita', code: '+39' },
    { name: 'Jamaica', alpha2: 'jm', alpha3: 'jam', code: '+1' },
    { name: 'Japan', alpha2: 'jp', alpha3: 'jpn', code: '+81' },
    { name: 'Jersey', alpha2: 'je', alpha3: 'jey', code: '+44' },
    { name: 'Jordan', alpha2: 'jo', alpha3: 'jor', code: '+962' },
    { name: 'Kazakhstan', alpha2: 'kz', alpha3: 'kaz', code: '+7' },
    { name: 'Kenya', alpha2: 'ke', alpha3: 'ken', code: '+254' },
    { name: 'Kiribati', alpha2: 'ki', alpha3: 'kir', code: '+686' },
    { name: 'Korea (Democratic People\'s Republic of)', alpha2: 'kp', alpha3: 'prk', code: '+850' },
    { name: 'Korea (Republic of)', alpha2: 'kr', alpha3: 'kor', code: '+82' },
    { name: 'Kuwait', alpha2: 'kw', alpha3: 'kwt', code: '+965' },
    { name: 'Kyrgyzstan', alpha2: 'kg', alpha3: 'kgz', code: '+996' },
    { name: 'Lao People\'s Democratic Republic', alpha2: 'la', alpha3: 'lao', code: '+856' },
    { name: 'Latvia', alpha2: 'lv', alpha3: 'lva', code: '+371' },
    { name: 'Lebanon', alpha2: 'lb', alpha3: 'lbn', code: '+961' },
    { name: 'Lesotho', alpha2: 'ls', alpha3: 'lso', code: '+266' },
    { name: 'Liberia', alpha2: 'lr', alpha3: 'lbr', code: '+231' },
    { name: 'Libya', alpha2: 'ly', alpha3: 'lby', code: '+218' },
    { name: 'Liechtenstein', alpha2: 'li', alpha3: 'lie', code: '+423' },
    { name: 'Lithuania', alpha2: 'lt', alpha3: 'ltu', code: '+370' },
    { name: 'Luxembourg', alpha2: 'lu', alpha3: 'lux', code: '+352' },
    { name: 'Macao', alpha2: 'mo', alpha3: 'mac', code: '+853' },
    { name: 'Macedonia (the former Yugoslav Republic of)', alpha2: 'mk', alpha3: 'mkd', code: '+389' },
    { name: 'Madagascar', alpha2: 'mg', alpha3: 'mdg', code: '+261' },
    { name: 'Malawi', alpha2: 'mw', alpha3: 'mwi', code: '+265' },
    { name: 'Malaysia', alpha2: 'my', alpha3: 'mys', code: '+60' },
    { name: 'Maldives', alpha2: 'mv', alpha3: 'mdv', code: '+960' },
    { name: 'Mali', alpha2: 'ml', alpha3: 'mli', code: '+223' },
    { name: 'Malta', alpha2: 'mt', alpha3: 'mlt', code: '+356' },
    { name: 'Marshall Islands', alpha2: 'mh', alpha3: 'mhl', code: '+692' },
    { name: 'Martinique', alpha2: 'mq', alpha3: 'mtq', code: '+596' },
    { name: 'Mauritania', alpha2: 'mr', alpha3: 'mrt', code: '+222' },
    { name: 'Mauritius', alpha2: 'mu', alpha3: 'mus', code: '+230' },
    { name: 'Mayotte', alpha2: 'yt', alpha3: 'myt', code: '+262' },
    { name: 'Mexico', alpha2: 'mx', alpha3: 'mex', code: '+52' },
    { name: 'Micronesia (Federated States of)', alpha2: 'fm', alpha3: 'fsm', code: '+691' },
    { name: 'Moldova (Republic of)', alpha2: 'md', alpha3: 'mda', code: '+373' },
    { name: 'Monaco', alpha2: 'mc', alpha3: 'mco', code: '+377' },
    { name: 'Mongolia', alpha2: 'mn', alpha3: 'mng', code: '+976' },
    { name: 'Montenegro', alpha2: 'me', alpha3: 'mne', code: '+382' },
    { name: 'Montserrat', alpha2: 'ms', alpha3: 'msr', code: '+1' },
    { name: 'Morocco', alpha2: 'ma', alpha3: 'mar', code: '+212' },
    { name: 'Mozambique', alpha2: 'mz', alpha3: 'moz', code: '+258' },
    { name: 'Myanmar', alpha2: 'mm', alpha3: 'mmr', code: '+95' },
    { name: 'Namibia', alpha2: 'na', alpha3: 'nam', code: '+264' },
    { name: 'Nauru', alpha2: 'nr', alpha3: 'nru', code: '+674' },
    { name: 'Nepal', alpha2: 'np', alpha3: 'npl', code: '+977' },
    { name: 'Netherlands', alpha2: 'nl', alpha3: 'nld', code: '+31' },
    { name: 'New Caledonia', alpha2: 'nc', alpha3: 'ncl', code: '+687' },
    { name: 'New Zealand', alpha2: 'nz', alpha3: 'nzl', code: '+64' },
    { name: 'Nicaragua', alpha2: 'ni', alpha3: 'nic', code: '+505' },
    { name: 'Niger', alpha2: 'ne', alpha3: 'ner', code: '+227' },
    { name: 'Nigeria', alpha2: 'ng', alpha3: 'nga', code: '+234' },
    { name: 'Niue', alpha2: 'nu', alpha3: 'niu', code: '+683' },
    { name: 'Norfolk Island', alpha2: 'nf', alpha3: 'nfk', code: '+672' },
    { name: 'Northern Mariana Islands', alpha2: 'mp', alpha3: 'mnp', code: '+1' },
    { name: 'Norway', alpha2: 'no', alpha3: 'nor', code: '+47' },
    { name: 'Oman', alpha2: 'om', alpha3: 'omn', code: '+968' },
    { name: 'Pakistan', alpha2: 'pk', alpha3: 'pak', code: '+92' },
    { name: 'Palau', alpha2: 'pw', alpha3: 'plw', code: '+680' },
    { name: 'Palestine, State of', alpha2: 'ps', alpha3: 'pse', code: '+970' },
    { name: 'Panama', alpha2: 'pa', alpha3: 'pan', code: '+507' },
    { name: 'Papua New Guinea', alpha2: 'pg', alpha3: 'png', code: '+675' },
    { name: 'Paraguay', alpha2: 'py', alpha3: 'pry', code: '+595' },
    { name: 'Peru', alpha2: 'pe', alpha3: 'per', code: '+51' },
    { name: 'Philippines', alpha2: 'ph', alpha3: 'phl', code: '+63' },
    { name: 'Pitcairn', alpha2: 'pn', alpha3: 'pcn', code: '+64' },
    { name: 'Poland', alpha2: 'pl', alpha3: 'pol', code: '+48' },
    { name: 'Portugal', alpha2: 'pt', alpha3: 'prt', code: '+351' },
    { name: 'Puerto Rico', alpha2: 'pr', alpha3: 'pri', code: '+1' },
    { name: 'Qatar', alpha2: 'qa', alpha3: 'qat', code: '+974' },
    { name: 'Réunion', alpha2: 're', alpha3: 'reu', code: '+262' },
    { name: 'Romania', alpha2: 'ro', alpha3: 'rou', code: '+40' },
    { name: 'Russian Federation', alpha2: 'ru', alpha3: 'rus', code: '+7' },
    { name: 'Rwanda', alpha2: 'rw', alpha3: 'rwa', code: '+250' },
    { name: 'Saint Barthélemy', alpha2: 'bl', alpha3: 'blm', code: '+590' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', alpha2: 'sh', alpha3: 'shn', code: '+290' },
    { name: 'Saint Kitts and Nevis', alpha2: 'kn', alpha3: 'kna', code: '+1' },
    { name: 'Saint Lucia', alpha2: 'lc', alpha3: 'lca', code: '+1' },
    { name: 'Saint Martin (French part)', alpha2: 'mf', alpha3: 'maf', code: '+590' },
    { name: 'Saint Pierre and Miquelon', alpha2: 'pm', alpha3: 'spm', code: '+508' },
    { name: 'Saint Vincent and the Grenadines', alpha2: 'vc', alpha3: 'vct', code: '+1' },
    { name: 'Samoa', alpha2: 'ws', alpha3: 'wsm', code: '+685' },
    { name: 'San Marino', alpha2: 'sm', alpha3: 'smr', code: '+378' },
    { name: 'Sao Tome and Principe', alpha2: 'st', alpha3: 'stp', code: '+239' },
    { name: 'Saudi Arabia', alpha2: 'sa', alpha3: 'sau', code: '+966' },
    { name: 'Senegal', alpha2: 'sn', alpha3: 'sen', code: '+221' },
    { name: 'Serbia', alpha2: 'rs', alpha3: 'srb', code: '+381' },
    { name: 'Seychelles', alpha2: 'sc', alpha3: 'syc', code: '+248' },
    { name: 'Sierra Leone', alpha2: 'sl', alpha3: 'sle', code: '+232' },
    { name: 'Singapore', alpha2: 'sg', alpha3: 'sgp', code: '+65' },
    { name: 'Sint Maarten (Dutch part)', alpha2: 'sx', alpha3: 'sxm', code: '+1' },
    { name: 'Slovakia', alpha2: 'sk', alpha3: 'svk', code: '+421' },
    { name: 'Slovenia', alpha2: 'si', alpha3: 'svn', code: '+386' },
    { name: 'Solomon Islands', alpha2: 'sb', alpha3: 'slb', code: '+677' },
    { name: 'Somalia', alpha2: 'so', alpha3: 'som', code: '+252' },
    { name: 'South Africa', alpha2: 'za', alpha3: 'zaf', code: '+27' },
    { name: 'South Georgia and the South Sandwich Islands', alpha2: 'gs', alpha3: 'sgs', code: '+500' },
    { name: 'South Sudan', alpha2: 'ss', alpha3: 'ssd', code: '+211' },
    { name: 'Spain', alpha2: 'es', alpha3: 'esp', code: '+34' },
    { name: 'Sri Lanka', alpha2: 'lk', alpha3: 'lka', code: '+94' },
    { name: 'Sudan', alpha2: 'sd', alpha3: 'sdn', code: '+249' },
    { name: 'Suriname', alpha2: 'sr', alpha3: 'sur', code: '+597' },
    { name: 'Svalbard and Jan Mayen', alpha2: 'sj', alpha3: 'sjm', code: '+47' },
    { name: 'Swaziland', alpha2: 'sz', alpha3: 'swz', code: '+268' },
    { name: 'Sweden', alpha2: 'se', alpha3: 'swe', code: '+46' },
    { name: 'Switzerland', alpha2: 'ch', alpha3: 'che', code: '+41' },
    { name: 'Syrian Arab Republic', alpha2: 'sy', alpha3: 'syr', code: '+963' },
    { name: 'Taiwan', alpha2: 'tw', alpha3: 'twn', code: '+886' },
    { name: 'Tajikistan', alpha2: 'tj', alpha3: 'tjk', code: '+992' },
    { name: 'Tanzania, United Republic of', alpha2: 'tz', alpha3: 'tza', code: '+255' },
    { name: 'Thailand', alpha2: 'th', alpha3: 'tha', code: '+66' },
    { name: 'Timor-Leste', alpha2: 'tl', alpha3: 'tls', code: '+670' },
    { name: 'Togo', alpha2: 'tg', alpha3: 'tgo', code: '+228' },
    { name: 'Tokelau', alpha2: 'tk', alpha3: 'tkl', code: '+690' },
    { name: 'Tonga', alpha2: 'to', alpha3: 'ton', code: '+676' },
    { name: 'Trinidad and Tobago', alpha2: 'tt', alpha3: 'tto', code: '+1' },
    { name: 'Tunisia', alpha2: 'tn', alpha3: 'tun', code: '+216' },
    { name: 'Turkey', alpha2: 'tr', alpha3: 'tur', code: '+90' },
    { name: 'Turkmenistan', alpha2: 'tm', alpha3: 'tkm', code: '+993' },
    { name: 'Turks and Caicos Islands', alpha2: 'tc', alpha3: 'tca', code: '+1' },
    { name: 'Tuvalu', alpha2: 'tv', alpha3: 'tuv', code: '+688' },
    { name: 'Uganda', alpha2: 'ug', alpha3: 'uga', code: '+256' },
    { name: 'Ukraine', alpha2: 'ua', alpha3: 'ukr', code: '+380' },
    { name: 'United Arab Emirates', alpha2: 'ae', alpha3: 'are', code: '+971' },
    { name: 'United Kingdom of Great Britain and Northern Ireland', alpha2: 'gb', alpha3: 'gbr', code: '+44' },
    { name: 'United States of America', alpha2: 'us', alpha3: 'usa', code: '+1' },
    { name: 'Uruguay', alpha2: 'uy', alpha3: 'ury', code: '+598' },
    { name: 'Uzbekistan', alpha2: 'uz', alpha3: 'uzb', code: '+998' },
    { name: 'Vanuatu', alpha2: 'vu', alpha3: 'vut', code: '+678' },
    { name: 'Venezuela (Bolivarian Republic of)', alpha2: 've', alpha3: 'ven', code: '+58' },
    { name: 'Viet Nam', alpha2: 'vn', alpha3: 'vnm', code: '+84' },
    { name: 'Wallis and Futuna', alpha2: 'wf', alpha3: 'wlf', code: '+681' },
    { name: 'Western Sahara', alpha2: 'eh', alpha3: 'esh', code: '+212' },
    { name: 'Yemen', alpha2: 'ye', alpha3: 'yem', code: '+967' },
    { name: 'Zambia', alpha2: 'zm', alpha3: 'zmb', code: '+260' },
    { name: 'Zimbabwe', alpha2: 'zw', alpha3: 'zwe', code: '+263' }
];

  
  const toggleCountrySelector = () => {
    usersToggle.value = !usersToggle.value;
  };
  
  const selectCountry = (country) => {
    selectedNumber.value = country.code;
    selectedIcon.value = country.alpha2;
    usersToggle.value = false;
    searchInput.value = ''
  };
  


  const filterV =(n)=>{
    filteredPhoneNumbers.value = phoneNumbers.filter((i)=>{
            return  i.name.toLowerCase().includes(n.toLowerCase())
            
           

        }) 

    }

watch(()=>searchInput.value,(newv)=>{
    debounce(filterV,newv)
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
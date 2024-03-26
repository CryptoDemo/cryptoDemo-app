
<template>
      
          <div id="area-chart" ref="areaChart"></div>
     
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ApexCharts from 'apexcharts';
  
  const areaChart = ref(null);

  const { symbol,pricepercent } = defineProps({
      symbol: String,
      pricepercent:String,
  });

  const marketPriceRange = ref([])
  const pData = ref([])

  const getUklinesChartValue = async(symbol)=>{

  }
  
  onMounted(async() => {

    const symbolWithoutQuotes = symbol.replace(/^"(.*)"$/, '$1');
  
  
    if(!(symbolWithoutQuotes === 'USDTUSDT')){

      try {
          const response = await fetch(`https://api.binance.com/api/v3/uiKlines?symbol=${symbolWithoutQuotes}&interval=1h&limit=1`, {
            headers: { 'Accept': 'application/json' }
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch symbol price');
          }
          
          const data = await response.json();
          marketPriceRange.value = data

          
          pData.value = marketPriceRange.value[0]
          
          console.log('p',pData.value.map(parseFloat).map(Math.floor))
          
        } catch (error) {
          console.error('Error fetching symbol price:', error);
        }

    }else{
        // Default data for USDTUSDT symbol
        pData.value = [6456, 6543, 60809,5677,69];
      }


    
    const options = {
      chart: {
        height: "100",
        width: "70",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },

      tooltip: {
        enabled: false,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      
      series: [
        {
          name: "New users",
          data: pData.value.map(parseFloat).map(Math.floor) ,
          color: pricepercent > 0 || symbol === 'USDTUSDT' ? '#22C36B' :  pricepercent < 0 ? "#F65556" :  'gray' ,
        },
      ],

      xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  
    if (areaChart.value && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(areaChart.value, options);
      chart.render();
    }
  });
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  
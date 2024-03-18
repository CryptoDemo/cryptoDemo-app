
<template>
      
          <div id="area-chart" ref="areaChart"></div>
     
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ApexCharts from 'apexcharts';
  
  const areaChart = ref(null);
  
  onMounted(() => {
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
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#F65556",
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
  
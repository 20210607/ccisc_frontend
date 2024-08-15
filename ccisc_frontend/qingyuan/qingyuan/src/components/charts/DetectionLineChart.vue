<template>
  <div class="container">
      <div class="header">
          <h3>近年漏洞检出量</h3>
      </div>
      <div ref="lineChart" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const lineChart = ref<HTMLDivElement>();

onMounted(() => {
  if (lineChart.value) {
    const chart = echarts.init(lineChart.value, 'theme');
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
          return `${params.name}<br/>${params.marker}${params.seriesName}: ${params.value}`;
        }
      },
      xAxis: {
        type: 'category',
        data: ['2016','2017','2018','2019', '2020', '2021', '2022', '2023'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '检出量',
          type: 'line',
          data: [6447, 17810, 17563, 18634, 19221,21944,26434],
        },
      ],
    };

    chart.setOption(option);
  }
});
</script>


<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #c43f7f, #d36bb4);
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
}

.header h3 {
    margin: 0;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.chart {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.501), rgba(240, 242, 245, 0.501));
    border: medium solid rgba(48, 43, 67, 0.5);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s; /* 增加平滑的过渡效果 */
}

/* 悬停效果 */
.chart:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
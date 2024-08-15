<template>
  <div class="container">
      <div class="header">
          <h3>漏洞检测量和来源</h3>
      </div>
      <div id="vulnerability-chart" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';

const chart = ref<HTMLDivElement>();

onMounted(() => {
  chart.value = document.getElementById('vulnerability-chart') as HTMLDivElement;
  if (chart.value) {
    const chartInstance = echarts.init(chart.value, 'theme');
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
          return `${params.name}<br/>${params.marker}${params.seriesName}: ${params.value}`;
        }
      },
      legend: {
        data: ['数量'],
      },
      xAxis: {
        type: 'category',
        data: ['CVE', ' cnnvd'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value: number) {
            return value >= 10000 ? `${value / 10000}w` : value.toString();
          },
          margin: 10 // 调整标签与轴线的间距
        },
      },
      series: [
        {
          name: '数量',
          type: 'bar',
          data: [203263, 247331],
          barwidth: '60%',
          barCategoryGap: '50%'
        },
      ],
    };

    chartInstance.setOption(option);
  }
})

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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.39);
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
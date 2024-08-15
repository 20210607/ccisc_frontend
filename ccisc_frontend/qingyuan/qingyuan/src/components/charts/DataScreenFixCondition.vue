<template>
    <div class="container">
        <div class="header">
            <h3>漏洞修复情况</h3>
        </div>
        <div ref="stackedBarChart" class="chart"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const stackedBarChart = ref<HTMLDivElement>();

onMounted(() => {
    if (stackedBarChart.value) {
        const chart = echarts.init(stackedBarChart.value, 'theme');
        const option = {
            legend: {
                data: ['已修复', '未修复'],
                left: 'right',
            },
            xAxis: {
                data: ['低危', '中危', '高危', '严重']
            },
            yAxis: {},
            series: [
                {
                    name: '已修复',
                    data: [8, 20, 25, 40],
                    type: 'bar',
                    stack: 'x',
                },
                {
                    name: '未修复',
                    data: [2, 2, 3, 3],
                    type: 'bar',
                    stack: 'x',
                }
            ]
        };

        chart.setOption(option);
        window.addEventListener('resize', () => {
            chart.resize();
        });
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
    background: linear-gradient(to right, #4090df, #67b7dc);
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
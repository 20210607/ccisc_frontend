<template>
    <div class="container">
        <div class="header">
            <h3>高危漏洞列表</h3>
        </div>
        <div id="high-severity-bar-chart" class="chart"></div>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';

const chart = ref<HTMLDivElement>();

const highSeverityList = [
    { cve: 'CVE-2021-1234', severity: 120 },
    { cve: 'CVE-2021-5678', severity: 110 },
    { cve: 'CVE-2021-9101', severity: 100 },
    { cve: 'CVE-2021-1121', severity: 100 },
]

onMounted(() => {
    chart.value = document.getElementById('high-severity-bar-chart') as HTMLDivElement;
    if (chart.value) {
        const chartInstance = echarts.init(chart.value, 'theme');
        const option = {
            tooltip: {
                trigger: 'axis',
                formatter: '{b}: {c}',
            },
            xAxis: {
                type: 'category',
                data: highSeverityList.map(item => item.cve),
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                data: highSeverityList.map(item => item.severity),
                type: 'bar',
            }]
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
    background: linear-gradient(to right, #5c1996, #697ef5);
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
<template>
    <div class="app-container">
        <div class="chart-container">
            <el-row class="chart-row">
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <DataScreenFixCondition style="width: 100%; height: 100%;"></DataScreenFixCondition>
                    </div>
                </el-col>
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <HighSeverityList style="width: 100%; height: 100%;"></HighSeverityList>
                    </div>
                </el-col>
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <SourceDetectionBarChart style="width: 100%; height: 100%;"></SourceDetectionBarChart>
                    </div>
                </el-col>
            </el-row>
            <el-row class="chart-row">
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <DataScreenNewPatch style="width: 100%; height: 100%;"></DataScreenNewPatch>
                    </div>
                </el-col>
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <SeverityPieChart style="width: 100%; height: 100%;"></SeverityPieChart>
                    </div>
                </el-col>
                <el-col :span="8" class="chart-col">
                    <div class="single-chart">
                        <DetectionLineChart style="width: 100%; height: 100%;"></DetectionLineChart>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DataScreenFixCondition from '@/components/charts/DataScreenFixCondition.vue';
import HighSeverityList from '@/components/charts/HighSeverityList.vue';
import SeverityPieChart from '@/components/charts/SeverityPieChart.vue';
import SourceDetectionBarChart from '@/components/charts/SourceDetectionBarChart.vue';
import DataScreenNewPatch from '@/components/charts/DataScreenNewPatch.vue';
import DetectionLineChart from '@/components/charts/DetectionLineChart.vue';
</script>

<style scoped>
.app-container {
    background-image: url('/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chart-container {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;  /* Allow the container to grow and fill available space */
    overflow: hidden;
}

.chart-row {
    display: flex;
    height: 50%;
}

.chart-col {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.single-chart {
    flex-grow: 1;   /* Allow charts to grow and fill available space */
    margin: 15px;
    height: 100%;
    overflow: hidden;
}
</style>
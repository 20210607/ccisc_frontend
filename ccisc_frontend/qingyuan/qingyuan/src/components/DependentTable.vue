<template>
  <div class="container">
    <div class="head-container">
      <el-row justify="center" style="width: 100%;">
        <el-col :span="12">
          <el-text type="primary" class="lib-name">
            {{ libName }}
          </el-text>
        </el-col>
        <el-col :span="6">
          <div class="button-left">
            <el-button :class="{ 'selected': isDependenciesActive }"
              @click="toggleButton('dependencies')">上游依赖</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="button-left">
            <el-button :class="{ 'selected': !isDependenciesActive }"
              @click="toggleButton('dependents')">下游依赖</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table-container">
      <el-table :data="tableData" style="width: 100%" height="500px">
        <el-table-column prop="library" label="软件包" align="center" sortable />
        <el-table-column :props="isDependenciesActive ? 'dependencies' : 'dependents'"
          :label="isDependenciesActive ? '上游依赖' : '下游依赖'" align="center">
          <template v-slot="{ row }">
            <el-tag v-for="item in getDependenciesOrDependents(row)" :key="item" style="margin: 0 5px;">
              {{ item }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRef } from 'vue';
import { useDiscoveryStore } from '@/store/discovery';

const discoveryStore = useDiscoveryStore();
const libName = toRef(discoveryStore.discoveryTableData, 'library');
const tableData = toRef(discoveryStore.discoveryTableData, 'tableData1');

// 创建响应式变量，并将 dependencies 默认设置为 true
const isDependenciesActive = ref(true);

// 切换按钮状态的函数
const toggleButton = (buttonName: string) => {
  if (buttonName === 'dependencies') {
    isDependenciesActive.value = true;
  } else {
    isDependenciesActive.value = false;
  }
};

// 根据按钮状态获取依赖或者依赖者数据
const getDependenciesOrDependents = (row: any) => {
  return isDependenciesActive.value ? row.dependencies : row.dependents;
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.head-container {
    display: flex;
    justify-content: space-between; /* 两端对齐 */
    padding: 10px; /* 增加内边距 */
}

.table-container {
    flex-grow: 1;
    padding: 10px; /* 内边距 */
}

.selected {
    background-color: #764ba2; /* 统一按钮选中的背景色 */
    color: white;
}

.lib-name {
    color: black; /* 将字体颜色设置为黑色 */
}
</style>

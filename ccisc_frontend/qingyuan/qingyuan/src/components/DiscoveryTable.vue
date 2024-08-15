<template>
  <div class="container">
    <div class="head-container">
      <el-row justify="center" :style="{ width: '100%' }">
        <el-col :span="12">
          <div style="margin: 10px 10px;">
            <el-input v-model="input" placeholder="请输入内容" size="large"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="button-right">
            <el-button type="primary" @click="handleExport" size="large">导出</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table-container">
      <!-- 表格的代码 -->
      <el-table :data="tableData" style="width: 100%" height="500px">
        <el-table-column prop="CVE_number" label="CVE编号" width="180" sortable>
        </el-table-column>
        <el-table-column prop="library" label="软件包" width="150" sortable>
        </el-table-column>
        <el-table-column prop="publish_date" label="公布日期" width="130" sortable>
        </el-table-column>
        <!-- :filters 是一个对象数组，指定了过滤的选项 -->
        <el-table-column prop="level" label="漏洞等级" align="center" :filters="[
          { text: '严重', value: '严重' },
          { text: '高危', value: '高危' },
          { text: '中危', value: '中危' },
          { text: '低危', value: '低危' }]" :filter-method="handleFilter">
          <!-- vue3增加了v-slot的指令来代替原来2的slot，slot-scope属性 -->
          <template v-slot="{ row }">
            <el-tag :color="getTagColor(row.level)" size="large">
              <div style="color: white">{{ row.level }}</div>
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="fix_status" label="修复情况" align="center" :filters="[
          { text: '已修复', value: '已修复' },
          { text: '未修复', value: '未修复' }]" :filter-method="handleFilter">
          <template v-slot="{ row }">
            <el-tag :type="row.fix_status === '已修复' ? 'success' : 'danger'" size="large">{{ row.fix_status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="detail" align="center" label="漏洞详情">
          <template v-slot="{ row }">
            <el-link :href="row.detail" target="_blank">查看详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface TableData {
  CVE_number: string;
  library: string;
  publish_date: string;
  level: string;
  fix_status: string;
  detail: string;
}

const tableData = ref<TableData[]>([
  {
    CVE_number: 'CVE-2013-7381',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '严重',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7381'
  },
  {
    CVE_number: 'CVE-2023-52355',
    library: 'libnotify4',
    publish_date: '2024-01-24',
    level: '高危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-52355'
  },
  {
    CVE_number: 'CVE-2023-3164',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '中危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-3164'
  },
  {
    CVE_number: 'CVE-2013-7384',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '中危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7384'
  },
  {
    CVE_number: 'CVE-2013-7385',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '未修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7385'
  },
  {
    CVE_number: 'CVE-2013-7386',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7386'
  },
  {
    CVE_number: 'CVE-2013-7387',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7387'
  },
  {
    CVE_number: 'CVE-2013-7388',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7388'
  },
  {
    CVE_number: 'CVE-2013-7389',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7389'
  },
  {
    CVE_number: 'CVE-2013-7390',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7390'
  },
  {
    CVE_number: 'CVE-2013-7391',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7391'
  },
  {
    CVE_number: 'CVE-2013-7392',
    library: 'libnotify4',
    publish_date: '2014-05-14',
    level: '低危',
    fix_status: '已修复',
    detail: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7392'
  }
]);

const input = ref('');

const handleFilter = (value, row) => {
  return row.level === value || row.fix_status === value;
};

const getTagColor = (level) => {
  switch (level) {
    case '严重':
      return "#8B0000"; // 深红色
    case '高危':
      return '#FF4500'; // 红色
    case '中危':
      return '#FFA500'; // 橙色
    case '低危':
      return '#F0E68C'; // 黄色
    default:
      return '';
  }
};

const handleExport = () => {
  const headers = ["CVE编号", "软件包", "公布日期", "漏洞等级", "修复情况", "漏洞详情"];
  const data = [headers, ...tableData.value.map(row => [row.CVE_number, row.library, row.publish_date, row.level, row.fix_status, row.detail])];
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, '漏洞情况.xlsx');
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
  justify-content: space-between;
  padding: 10px;
}

.table-container {
  flex-grow: 1;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7); /* 半透明黑色背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.el-table {
  color: #ffffff; /* 白色字体 */
}

.el-table th,
.el-table td {
  background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色背景 */
}

.el-table th {
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
}

.button-right {
  display: flex;
  justify-content: flex-end;
}
</style>

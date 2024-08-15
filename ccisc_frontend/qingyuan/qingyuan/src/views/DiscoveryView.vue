<template>
  <div class="app-container">
    <div class="search-area">
      <SearchArea :vertical="false" />
    </div>
    <div class="title-area">
      <h2 class="example-title">以麒麟/libnotify4为例</h2>
    </div>
    <div class="head-container">
      <el-row justify="center" :style="{ width: '100%' }">
        <el-col :span="16">
          <div style="margin: 10px;"><el-input v-model="input" placeholder="请输入内容" size="large"></el-input></div>
        </el-col>
        <el-col :span="4">
          <div class="button-right">
            <el-button type="primary" @click="handleExport" size="large">导出</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 依赖和被依赖的表格 -->
    <div class="table-container">
      <div class="info-header">
        <div class="header-item">软件包</div>
        <div class="header-item">上游依赖</div>
        <div class="header-item">下游依赖</div>
      </div>
      <div v-for="(item, index) in tableData1" :key="index" class="info-row">
        <div class="info-cell">{{ item.library }}</div>
        <div class="info-cell">
          <el-tag v-for="dep in item.dependencies" :key="dep" class="dependency-tag">
            {{ dep }}
          </el-tag>
        </div>
        <div class="info-cell">
          <el-tag v-for="dep in item.dependents" :key="dep" class="dependent-tag">
            {{ dep }}
          </el-tag>
        </div>
      </div>
    </div>
    <!-- CVE的详细表格 -->
    <div class="table-container">
      <div class="info-header">
        <div class="header-item">CVE编号</div>
        <div class="header-item">软件包</div>
        <div class="header-item">公布日期</div>
        <div class="header-item">漏洞等级</div>
        <div class="header-item">修复情况</div>
        <div class="header-item">漏洞详情</div>
      </div>
      <div v-for="(item, index) in tableData2" :key="index" class="info-row">
        <div class="info-cell">{{ item.CVE_number }}</div>
        <div class="info-cell">{{ item.library }}</div>
        <div class="info-cell">{{ item.publish_date }}</div>
        <div class="info-cell">
          <el-tag :color="getTagColor(item.level)" size="large">
            <div class="tag-text-dark"></div>{{ item.level }}
          </el-tag>
        </div>
        <div class="info-cell">
          <el-tag :type="item.fix_status === '已修复' ? 'success' : 'danger'">
            {{ item.fix_status }}
          </el-tag>
        </div>
        <div class="info-cell">
          <el-link :href="item.detail" target="_blank" class="link-text-white">查看详情</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SearchArea from '@/components/SearchArea.vue';

const tableData1 = ref([
  {
    library: "libnotify4",
    dependencies: [
      "libc6",
      "libglib2.0-0",
      "libgdk-pixbuf2.0-0"
    ],
    dependents: []
  },
  {
    library: "libc6",
    dependencies: [],
    dependents: [
      "libnotify4",
      "libgdk-pixbuf2.0-0"
    ]
  },
  {
    library: "libnotify4",
    dependencies: [
      "libnotify3"
    ],
    dependents: [
      "libnotify5"
    ]
  }
]);

const tableData2 = ref([
    {
      CVE_number: "CVE-2013-7381",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "严重",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7381"
    },
    {
      CVE_number: "CVE-2023-52355",
      library: "libnotify4",
      publish_date: "2024-01-24",
      level: "高危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-52355"
    },
    {
      CVE_number: "CVE-2023-3164",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "中危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-3164"
    },
    {
      CVE_number: "CVE-2013-7384",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "中危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7384"
    },
    {
      CVE_number: "CVE-2013-7385",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "未修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7385"
    },
    {
      CVE_number: "CVE-2013-7386",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7386"
    },
    {
      CVE_number: "CVE-2013-7387",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7387"
    },
    {
      CVE_number: "CVE-2013-7388",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7388"
    },
    {
      CVE_number: "CVE-2013-7389",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7389"
    },
    {
      CVE_number: "CVE-2013-7390",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7390"
    },
    {
      CVE_number: "CVE-2013-7391",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7391"
    },
    {
      CVE_number: "CVE-2013-7392",
      library: "libnotify4",
      publish_date: "2014-05-14",
      level: "低危",
      fix_status: "已修复",
      detail: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-7392"
    }
  ]);

// const isDependenciesActive = ref(true);

// function toggleButton(buttonName: string) {
//   isDependenciesActive.value = buttonName === 'dependencies';
// }

// function getDependenciesOrDependents(row) {
//   return isDependenciesActive.value ? row.dependencies : row.dependents;
// }

function getTagColor(level) {
  switch (level) {
    case '严重': return '#FF4500'; // Tomato
    case '高危': return '#FF6347'; // OrangeRed
    case '中危': return '#FFD700'; // Gold
    case '低危': return '#32CD32'; // LimeGreen
    default: return '#808080'; // Grey
  }
}
</script>
  
<style scoped>
.app-container {
  width: 100%;
  box-sizing: border-box;
  background-image: url('/Discovery_back.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.search-area, .head-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title-area {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.example-title {
  color: white;
  font-size: 24px;
}

.table-container, .head-container {
  width: 100%;
  max-width: 1600px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.info-header, .info-row {
  display: flex;
  justify-content: space-between;
}

.header-item, .info-cell {
  color: #ffffff;
  flex: 1;
  text-align: left;
  padding: 10px;
}

.info-header {
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
}

.info-cell {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-row:last-child .info-cell {
  border-bottom: none;
}

.tag-text-dark {
  color: #000000 !important; /* 确保标签内文字为黑色 */
}

.link-text-white {
  color: #ffffff !important; /* 确保链接文字为白色 */
}

.button-right, .button-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.el-input, .el-button {
  border-radius: 4px; /* Rounded corners for input and buttons */
}

.el-col {
  display: flex;
  justify-content: center; /* Centers content in the column */
}

.el-tag {
  font-size: 16px; /* 调整标签字体大小以适合视觉效果 */
}

/* 修复情况的标签颜色 */
.el-tag[fix-status="已修复"] {
  color: rgb(10, 75, 10); /* 字体颜色为白色以增强可读性 */
}

.el-tag[fix-status="未修复"] {
  color: rgb(255, 0, 0); /* 字体颜色为白色以增强可读性 */
}

.el-col :first-child {
  flex: 1; /* Allows the input field to fill available space */
  max-width: 60%; /* Limits width of the input field */
}

.button-right {
  flex: 0 0 auto; /* Prevents flex-grow and flex-shrink */
  margin-left: -100px; /* Reduce gap between input and button */
}

.el-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Button background color changed to purple */
  color: white; /* Text color is white */
}

.selected {
  background-color: rgb(0, 0, 0) !important;
  color: white !important;
}

.lib-name {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>

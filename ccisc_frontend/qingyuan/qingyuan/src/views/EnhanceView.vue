<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <SearchArea :vertical="false" />
      </el-col>
    </el-row>
    <div class="content-container">
      <h2 class="table-title">漏洞信息增强示例</h2>
      <div class="info-row">
        <div class="info-container">
          <div class="info-item" v-for="(item, index) in leftColumnData" :key="index">
            <div class="info-key">{{ item.key }}</div>
            <div class="info-value">
              <template v-if="item.isLink">
                <a :href="item.value" target="_blank" class="link">{{ item.value }}</a>
              </template>
              <template v-else>{{ item.value }}</template>
            </div>
          </div>
        </div>
        <div class="info-container">
          <div class="info-item" v-for="(item, index) in rightColumnData" :key="index">
            <div class="info-key">{{ item.key }}</div>
            <div class="info-value">
              <template v-if="item.isLink">
                <a :href="item.value" target="_blank" class="link">{{ item.value }}</a>
              </template>
              <template v-else>{{ item.value }}</template>
            </div>
          </div>
        </div>
      </div>
      <div class="reference-container">
        <h3 class="reference-title">漏洞参考链接</h3>
        <div v-for="(item, index) in referenceLinks" :key="index" class="link-item">
          <a :href="item" target="_blank" class="link">{{ item }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import SearchArea from '@/components/SearchArea.vue';

interface TableItem {
  key: string;
  value: string;
  isLink?: boolean;
}

const tableData = ref<TableItem[]>([
  { key: '漏洞编号', value: 'CVE-2021-21686' },
  { key: '漏洞来源平台', value: 'CVE/NVD' },
  { key: '漏洞链接', value: 'https://nvd.nist.gov/vuln/detail/CVE-2021-21686', isLink: true },
  { key: '漏洞披露时间', value: '2021.11.04' },
  { key: '野外漏洞报告', value: 'https://www.cvedetails.com/cve/CVE-2021-21686', isLink: true },
  { key: '漏洞成因', value: '文件过滤器没有规范路径，允许与外部文件创建符号链接' },
  { key: '漏洞位置', value: 'core/src/main/java/hudson/FilePath.java 第2840行' },
  { key: '漏洞PoC', value: '无' },
  { key: '漏洞补丁', value: 'https://github.com/jenkinsci/jenkins/pull/5900/files', isLink: true },  // 移动到左边
  { key: '漏洞类型', value: 'CWE-59 Improper Link Resolution Before File Access (\'Link Following\')\nCWE-22 Improper Limitation of a Pathname to a Restricted Directory (\'Path Traversal\')' },
  { key: '漏洞危害', value: '这可能允许攻击者读写Jenkins控制器文件系统上的任意文件。' },
  { key: '漏洞评级', value: '8.1 HIGH' },
  { key: '影响版本（网站）', value: '1.408.1-2.303.2; <2.318' },
  { key: '漏洞修复版本', value: '2.303之后' },
  { key: '漏洞描述', value: '代理到控制器的安全子系统限制了代理进程可以访问Jenkins控制器上的哪些文件。文件路径过滤器不规范化路径，允许操作遵循符号链接到允许的外部目录。' },
  { key: '漏洞处置建议', value: '建议升级到2.303.2之后，或者直接修改相应位置代码' }
]);

const leftColumnData = computed(() => [
  ...tableData.value.slice(0, 8),
]);

const rightColumnData = computed(() => [
  ...tableData.value.slice(9)
]);

const referenceLinks = ref<string[]>([
  'https://www.jenkins.io/security/advisory/2021-11-04/#SECURITY-2455',
  'https://github.com/jenkinsci/jenkins/pull/5900/files'
]);
</script>

<style scoped>
.app-container {
  width: 100%;
  box-sizing: border-box;
  background-image: url('/Enhance_back.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.table-title {
  font-size: 24px;
  color: #ffffff; 
  margin-bottom: 20px; 
  text-align: center;
}

.content-container {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 30px;
  max-width: 1600px; /* 增加最大宽度 */
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.info-row {
  display: flex;
  justify-content: space-between;
  gap: 30px; /* 增加间隔 */
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%; /* 确保两列平分宽度 */
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-key {
  color: #ffffff;
  font-weight: bold;
  width: 40%; /* 调整宽度确保对齐 */
  text-align: left; /* 左对齐 */
}

.info-value {
  color: #ffffff;
  width: 60%; /* 调整宽度确保对齐 */
  text-align: left; /* 左对齐 */
}

.link {
  color: #1e90ff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.reference-container {
  margin-top: 20px;
}

.reference-title {
  font-size: 20px;
  color: #ffffff; 
  margin-bottom: 10px;
}

.link-item {
  margin-bottom: 10px;
}
</style>

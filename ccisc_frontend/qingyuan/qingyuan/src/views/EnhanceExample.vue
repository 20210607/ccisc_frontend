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
    { "key": "漏洞编号", "value": "CVE-2021-30180" },
    { "key": "漏洞来源平台", "value": "CVE/NVD" },
    { "key": "漏洞链接", "value": "https://nvd.nist.gov/vuln/detail/CVE-2021-30180", "isLink": true },
    { "key": "漏洞披露时间", "value": "2021.06.01" },
    { "key": "野外漏洞报告", "value": "https://securitylab.github.com/advisories/GHSL-2021-034_043-apache-dubbo/", "isLink": true },
    { "key": "漏洞成因", "value": "Apache Dubbo多处使用了yaml.load，攻击者在控制如ZooKeeper注册中心后可上传恶意配置文件从而造成了Yaml反序列化漏洞。" },
    { "key": "漏洞位置", "value": "dubbo/TagRuleParser.java at f4b225eb3a5acdf7c9064763f522ea0b86421c8d · apache/dubbo (github.com)，35-36行" },
    { "key": "漏洞PoC", "value": "https://securitylab.github.com/advisories/GHSL-2021-034_043-apache-dubbo/", "isLink": true },
    { "key": "漏洞补丁", "value": "https://github.com/apache/dubbo/pull/7437", "isLink": true },
    { "key": "漏洞类型", "value": "CWE-444" },
    { "key": "漏洞危害", "value": "Apache Dubbo多处使用了yaml.load，从而造成了Yaml反序列化漏洞。" },
    { "key": "漏洞评级", "value": "CVSS 3.x：9.8 CRITICAL，CVSS 2.0：6.8 MEDIUM" },
    { "key": "影响版本（网站）", "value": "dubbo:[2.7.0, 2.7.10)" },
    { "key": "漏洞修复版本", "value": "2.7.10-2.7.15" },
    { "key": "漏洞描述", "value": "Apache Dubbo 2.7.9 之前的版本支持标签路由，这将使客户能够将请求路由到正确的服务器。客户在发出请求时使用这些规则来查找正确的终结点。在解析这些 YAML 规则时，Dubbo 客户可以启用调用任意构造函数。" },
    { "key": "漏洞处置建议", "value": "升级至2.7.10及以上版本，或者直接修改相应位置代码" }
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
  
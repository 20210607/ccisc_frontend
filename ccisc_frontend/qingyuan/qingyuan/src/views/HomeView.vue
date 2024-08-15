<template>
  <div class="home-container">
    <div class="header">
      <img src="/title.png" alt="Main Title" class="title-image"> <!-- 添加标题图片 -->
      <el-button class="view-data-button" @click="goToBigScreen">查看数据大屏</el-button>
    </div>
    <div class="content">
      <div class="card feature" v-for="feature in features" :key="feature.title">
        <div class="feature-icon" v-html="feature.icon"></div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
      <div class="card introduction full-width">
        <ProjectIntroduction />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ProjectIntroduction from '@/components/ProjectIntroduction.vue';

const router = useRouter();
const features = ref([
  { icon: '🔍', title: '漏洞挖掘', description: '擎源平台拥有软件深层漏洞挖掘和自动化漏洞验证技术,漏洞挖掘页面得到软件内部组件库的依赖关系图以及表格形式呈现的软件内部漏洞情况。' },
  { icon: '🛠', title: '漏洞可利用性验证', description: '漏洞可利用性页面以表格形式展示上游漏洞描述、触发方式及漏洞编号，并列出了会收到此漏洞影响的下游软件。' },
  { icon: '📊', title: '数据大屏', description: '数据大屏通过大数据可视化全球漏洞治理安全态势，帮助用户关注实时的关键漏洞治理指标与漏洞发生趋势，从而根据安全环境及时指定和完善企业漏洞治理相应模式。' },
  { icon: '🔒', title: '漏洞信息增强', description: '漏洞信息增强页面以表格形式展示信息增强后的漏洞信息，结合大语言模型对信息进行判别。' }
]);

const goToBigScreen = () => {
  //router.push('/bigscreen');
  window.location.href = 'http://localhost:8080';
};
</script>

<style scoped>
.home-container {
  background: url('/background_home.png') no-repeat center center fixed; /* 设置背景图片 */
  background-size: cover; /* 确保背景图覆盖整个容器 */
  color: #ffffff;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  padding: 5px 0; /* 调整padding以确保标题图片显示合适 */
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-image {
  max-width: 150%; /* 增加标题图片最大宽度为150% */
  height: auto; /* 保持图片的纵横比 */
  margin-bottom: 0px; /* 减少标题图片与按钮的间距 */
}

.view-data-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 20px 40px; /* 增加按钮的padding以提升按钮大小 */
  font-size: 1.5rem; /* 增大按钮的字体大小 */
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  color: #ffffff; /* 白色字体 */
  margin-top: -150px; /* 按钮上移以贴近标题 */
}

.view-data-button:hover {
  background-color: #772222; /* 修改鼠标悬停的背景颜色 */
  color: black; /* 鼠标悬停时改变字体颜色为黑色 */
  transform: translateY(-2px);
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; /* 减少内容区与头部的间距 */
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: calc(50% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 1.6rem; /* 增大标题字体大小 */
}

.card p {
  font-size: 1.3rem; /* 增大描述字体大小 */
}

.introduction {
  width: 100%;
}
</style>

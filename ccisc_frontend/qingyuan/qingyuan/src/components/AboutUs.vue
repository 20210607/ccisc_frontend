<template>
    <div class="container">
        <div class="header-section">
            <h1>关于我们</h1>
            <hr class="header-divider"> <!-- 添加的横线 -->
            <p>深擎启源团队成员主要来自复旦大学信息安全、软件工程、计算机科学与技术、管理学类专业，是一支在网络安全领域专业实力强劲且多学科优势互补的团队。团队依托系统软件与安全实验室，与中国电信安全公司、中远海运科技股份有限公司达成合作意向。</p>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
</script>
  
<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #f0f8ff; /* 设置浅蓝色背景 */
}
h1 {
    color: #301781;
    margin-top: 10px;
}
.header-section p {
    margin-bottom: 60px;
    color: #6b6b6b; /* 更深的颜色提高可读性 */
    font-size: 1.1rem; /* 调整字体大小使其更加清晰 */
    line-height: 1.6; /* 增加行间距提高阅读舒适度 */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1); /* 轻微的文字阴影增加层次感 */
    font-weight: 400; /* 调整字重 */
    width: 70%; /* 设置宽度为100% */
    text-align: left; /* 文字居中 */
}
.header-section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* 确保所有子元素在水平方向上居中 */
}
.header-divider {
    border: none; /* 移除默认边框 */
    height: 3px; /* 横线的粗度 */
    width: 100px; /* 横线的长度 */
    background-color: #10287e; /* 横线的颜色 */
    margin: 20px auto; /* 在横线上下添加间距 左右自动（居中）*/
}
</style>
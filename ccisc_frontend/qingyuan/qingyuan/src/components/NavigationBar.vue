<template>
    <el-menu mode="horizontal" class="el-menu-demo" default-active="/" :ellipsis="false" :router="true">
        <div class="menu-item-container">
            <el-menu-item index="/" style="font-size: larger;">首页</el-menu-item>
            <el-menu-item index="/discovery" style="font-size: larger;">漏洞挖掘</el-menu-item>
            <el-menu-item index="/exploitability" style="font-size: larger;">漏洞可利用性验证</el-menu-item>
            <el-menu-item style="font-size: larger;" @click="goToBigScreen">数据大屏</el-menu-item>
            <el-menu-item index="/enhance" style="font-size: larger;">漏洞信息增强</el-menu-item>
        </div>
    </el-menu>
</template>

<script lang="ts" setup>
function goToBigScreen() {
    window.location.href = "http://localhost:8080";
}
</script>

<style scoped>
.el-menu-demo {
    background: url('navbar_background.png') no-repeat center center;
    background-size: cover;
    width: 100%;  /* 确保背景覆盖整个宽度 */
}

.el-menu-item {
    color: white !important;
}

.el-menu-item:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;  /* 鼠标悬停时半透明黑色背景 */
    color: rgb(136, 102, 199) !important;  /* 确保悬停时字体颜色仍为白色 */
}

.el-menu-item.is-active {
    background-color: transparent !important;  /* 点击后保持背景不变 */
    color: rgb(136, 102, 199) !important;  /* 激活后的字体颜色 */
}

.menu-item-container {
    display: flex;
    width: 100%;  /* 确保菜单项容器覆盖整个宽度 */
}
</style>

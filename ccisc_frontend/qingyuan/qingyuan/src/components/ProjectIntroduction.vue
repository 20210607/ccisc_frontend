<template>
  <div class="project-introduction">
    <el-row :gutter="20" type="flex" align="stretch" justify="center">
      <el-col :span="8">
        <div class="feature-card">
          <img src="/cloud_data.png" alt="Feature Icon" class="feature-icon">
          <h3>漏洞数据库搭建</h3>
          <hr class="content-divider">
          <div class="feature-text">
            <p>实时全网自动化检测</p>
            <p>漏洞质量的量化评估</p>
            <p>搭建增强型数据库</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="feature-card">
          <img src="/TARGET.png" alt="Feature Icon" class="feature-icon">
          <h3>软件深层漏洞挖掘</h3>
          <hr class="content-divider">
          <div class="feature-text">
            <p>基于程序建模的高质量测试输入生成</p>
            <p>程序输入处理逻辑建模</p>
            <p>输入分层嵌套结构及字段约束识别</p>
            <p>基于级联变异的高质量输入生成</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="feature-card">
          <img src="/CONVERSION.png" alt="Feature Icon" class="feature-icon">
          <h3>自动化漏洞可利用性验证</h3>
          <hr class="content-divider">
          <div class="feature-text">
            <p>自动化概念验证生成技术</p>
            <p>分层次概念验证生成技术</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.project-introduction .feature-card {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* 蓝紫渐变背景 */
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;
border-radius: 10px;
text-align: center;
height: 100%;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.project-introduction .feature-icon {
width: 60px;
height: auto;
margin: 10px auto 15px;
display: block;
}

.project-introduction hr.content-divider {
border: none;
height: 1px;
background: #ffffff;
margin: 10px auto;
width: 90%;
}

.project-introduction .feature-text {
flex-grow: 1;
}

.project-introduction h3 {
color: #ffffff;
margin-bottom: 5px;
font-size: 1.6rem; /* 增大标题字体大小 */
}

.project-introduction p {
color: #ffffff;
margin: 5px 0; /* 调整段落间距 */
font-size: 1.5rem; /* 增大描述字体大小 */
line-height: 1.3;
}
</style>

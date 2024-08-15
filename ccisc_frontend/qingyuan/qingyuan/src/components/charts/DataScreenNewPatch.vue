<template>
  <div class="container">
        <div class="header">
          <h3>漏洞补丁</h3>
        </div>
        <div class="table-container">
          <el-table :data="tableData" class="custom-table" style="width: 100%; height: 100%;">
            <el-table-column label="漏洞补丁" align="center">
              <template v-slot="{ row }">
                <el-link :href="row.patch" target="_blank">补丁链接</el-link>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="发布日期" align="center" />
          </el-table>
        </div>
  </div>
</template>

<script lang="ts" setup>
const tableData = [
  {
    patch: 'http://example.com/patch1',
    date: '2016-05-02',
  },
  {
    patch: 'http://example.com/patch2',
    date: '2016-05-02',
  },
  {
    patch: 'http://example.com/patch3',
    date: '2016-05-04',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
  {
    patch: 'http://example.com/patch4',
    date: '2016-05-01',
  },
]
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #4090df, #67b7dc);
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
}

.header h3 {
    margin: 0;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.table-container {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.501), rgba(240, 242, 245, 0.501));
    border: medium solid rgba(48, 43, 67, 0.5);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s; /* 增加平滑的过渡效果 */
}

/* 悬停效果 */
.table-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* 表头和表尾的圆角 */
.custom-table .el-table__header-wrapper {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.custom-table .el-table__body-wrapper {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.el-table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  background-color: transparent;
  color: #333;
}


/* 链接样式 */
.el-link {
  color: #21429e;
  text-decoration: none;
  font-weight: bold;
}

.el-link:hover {
  text-decoration: underline;
  /* 悬停下划线 */
}
</style>

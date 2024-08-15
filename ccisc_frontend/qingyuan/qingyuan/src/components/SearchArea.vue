<template>
    <div :class="vertical ? 'search-container-vertical' : 'search-container-horizontal'">
        <div class="logo">
            <img src="/logo.png" alt="logo" @click="router.push('/')" style="cursor: pointer;" title="回到首页" />
        </div>
        <div class="search-box">
            <div class="upload-box">
                <el-upload v-if="selectedOption !== 'op4'" class="upload-demo" :action="uploadAPI" ref="uploadFile" :file-list="fileList" :limit="1"
                    :auto-upload="false" :on-change="handleChange">
                    <el-button type="primary" class="custom-upload-btn" :icon="Upload">请上传文件：信创软件压缩包</el-button>
                </el-upload>
                <el-input v-else v-model="cveNumber" placeholder="请输入cve编号"></el-input>
            </div>
            <div class="select-box">
                <el-select v-model="selectedOption" placeholder="选择功能" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="button-box">
                <el-button type="primary" @click="search" size="large">搜索</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Import the necessary components
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Upload } from '@element-plus/icons-vue';
import type { UploadFile, UploadInstance, UploadFiles, UploadUserFile } from 'element-plus';
import axios from 'axios';
import { useDiscoveryStore } from '@/store/discovery';
import { useExploitabilityStore } from '@/store/exploitability';

// Define props
const props = defineProps<{
    vertical: boolean;
}>();

// The router
const router = useRouter();

const cveNumber = ref('');
// The file to be uploaded
const uploadFile = ref(null);
const fileList = ref<UploadUserFile[]>([]);
const handleChange = (file: UploadFile, files: UploadFiles) => {
    if (fileList.value.length > 0) {
        fileList.value.pop();
    }
    fileList.value.push(file);
};

// The options for the select box
const options = [
    { value: 'op1', label: '漏洞挖掘' },
    { value: 'op2', label: '漏洞可利用性验证' },
    { value: 'op3', label: '数据大屏' },
    { value: 'op4', label: '漏洞信息增强' }
];

// The selected option
const selectedOption = ref('');

// The API for uploading the file, changed based on the selected option
const uploadAPI = computed(() => {
    if (selectedOption.value === 'op1') {
        return '/api/discovery';
    } else if (selectedOption.value === 'op2') {
        return '/api/exploitability';
    }
    return '';
});

const currentRoute = computed(() => {
    if (selectedOption.value === 'op1') {
        return '/discovery';
    } else if (selectedOption.value === 'op2') {
        return '/exploitability';
    } else if (selectedOption.value === 'op3') {
        return '/bigscreen';
    } else if (selectedOption.value === 'op4') {
        return '/enhance-example';
    }

    return '';
});

// Search function
// Redirect to the corresponding page based on the selected option
// Upload the file if it is not empty
const search = () => {
    if (!selectedOption.value) {
        alert('请选择功能');
        return;
    }

    if (selectedOption.value === 'op3') {
        router.push('/bigscreen');
        return;
    }

    if (selectedOption.value !== 'op4' && fileList.value.length === 0) {
        alert('请上传文件');
        return;
    }

    if (selectedOption.value === 'op4') {
        router.push('/enhance-example');
        return;
    }

    // Upload the file
    const formData = new FormData();
    formData.append('file', fileList.value[0].raw!);
    axios.post(uploadAPI.value, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        // console.log('响应数据:', response.data);
        if (selectedOption.value === 'op1') {
            const discoveryStore = useDiscoveryStore();
            discoveryStore.setDiscoveryTableData(response.data);
        } else if (selectedOption.value === 'op2') {
            const exploitabilityStore = useExploitabilityStore();
            exploitabilityStore.setExploitabilityTableData(response.data);
        }
    })
    .catch(error => {
        console.error('Error uploading file:', error);
        alert('文件上传成功，等待后台运行');
    });

    router.push(currentRoute.value);
};
</script>

<style scoped>
/* logo above search box */
.search-container-vertical {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    justify-content: center;
    width: 100%;
    align-items: center;
}

/* logo on the left of search box */
.search-container-horizontal {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: auto;
    justify-content: center;
    width: 100%;
}

.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
}

.upload-box {
    width: 400px;
    margin: 0 0;
}

.custom-upload-btn {
    height: 40px;
    /* 设置高度 */
    line-height: 20px;
    /* 调整行高以确保文本垂直居中 */
    width: 400px;
}

.upload-demo {
    /* 提高优先级的样式定义 */
    height: 40px !important;
}

.select-box {
    width: 200px;
    margin: 0 10px;
    align-items: center;
    height: 40px;
}

.button-box {
    margin: 0 10px;
}

.logo {
    margin: 20px 40px;
}

.logo img {
    width: 350px;
    height: auto;
}
</style>

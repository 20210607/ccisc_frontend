# 介绍

## 技术栈

- [Vue.js](https://cn.vuejs.org/)
- [Element Plus](https://element-plus.org/zh-CN/)
- [echarts](https://echarts.apache.org/zh/index.html)

## 使用说明

### 安装依赖

本项目采用npm进行依赖管理, 安装依赖请执行以下命令:

```bash
npm install
```

### 启动服务

在开发环境下启动服务:

```bash
npm run dev
```

此时将启动一个热重载的开发服务器, 对代码的修改将实时反映在浏览器中.

执行以下命令可以预览生产环境效果:

```bash
npm run preview
```

### 打包

将项目打包为生产环境代码:

```bash
npm run build
```

打包得到的代码将位于 `dist` 目录下. 可以将 `dist` 目录下的文件部署到服务器上.

### 部署

1. 将 `dist` 目录下的文件部署到服务器上.
2. 使用 `nginx` 配置服务器, 使其能够正确地处理前端路由. 

以下是一个简单的 `nginx` 配置示例:

```nginx
server {
    # 监听80端口
    listen 80;
    server_name 10.176.37.42;

    # 前端静态资源的路径
	location / {
    	root /root/ShenQing-Frontend/dist;
    	index index.html;
        try_files $uri $uri/ /index.html;
	}

    location /api/ {
        # 后端API服务的代理
        proxy_pass http://localhost:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

}
```

## 环境配置
```bash
下载node:
wget https://nodejs.org/dist/v20.13.1/node-v20.13.1-linux-x64.tar.xz
tar -xvJf node-v20.13.1-linux-x64.tar.xz
rm -rf node-v20.13.1-linux-x64.tar.xz
mv node-v20.13.1-linux-x64/* /usr/local/nodejs
软链接：
ln -s /usr/local/nodejs/bin/node /usr/local/bin/node
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/npm
查看安装：
npm list
```
# Gitee Pages 部署指南

## 📌 重要说明

本分支 (`gitee`) 专门用于 **Gitee Pages 部署**，不会修改 `main` 分支的代码。

---

## 🚀 部署步骤

### 第1步：在Gitee上创建账户
如果还没有Gitee账户，请访问：https://gitee.com/signup

### 第2步：导入GitHub项目到Gitee
1. 登录 Gitee：https://gitee.com/login
2. 点击右上角 **"+"** → **"新建仓库"**
3. 选择 **"导入已有仓库"**
4. 在 **"仓库地址"** 中填入：
   ```
   https://github.com/AngleSay/ningyi.git
   ```
5. 设置仓库信息：
   - **仓库名称**：ningyi
   - **仓库路径**：ningyi
   - **仓库描述**：山西凝一科技有限公司官网
   - **公开/私有**：公开
6. 点击 **"创建"** 完成导入

### 第3步：切换到gitee分支
1. 进入您的Gitee仓库
2. 点击 **"分支"** 标签
3. 确保 **`gitee` 分支** 存在（应该已经导入）
4. 如果没有，请在本地运行：
   ```bash
   git push https://YOUR_GITEE_USERNAME:YOUR_GITEE_PASSWORD@gitee.com/YOUR_USERNAME/ningyi.git gitee
   ```

### 第4步：启用Gitee Pages
1. 进入Gitee仓库
2. 点击 **"服务"** → **"Gitee Pages"**
3. 在 **"部署分支"** 中选择 **`gitee`**
4. 在 **"部署目录"** 中填入：
   ```
   dist/public
   ```
5. 点击 **"启动"** 或 **"更新"**

### 第5步：等待部署完成
Gitee Pages 会自动：
- ✅ 从 `gitee` 分支拉取代码
- ✅ 运行构建命令：`pnpm build`
- ✅ 部署到 `dist/public` 目录

完成后您会看到一个类似这样的链接：
```
https://YOUR_USERNAME.gitee.io/ningyi
```

---

## 🎯 自动更新部署

### 方案1：从GitHub同步（推荐）
1. 在Gitee仓库页面，点击 **"管理"** → **"仓库管理"** → **"镜像管理"**
2. 设置GitHub仓库作为镜像源
3. 每次GitHub更新时，Gitee会自动同步

### 方案2：手动推送
每次更新代码后，运行：
```bash
# 切换到gitee分支
git checkout gitee

# 从main分支合并最新代码
git merge main

# 推送到Gitee
git push https://YOUR_GITEE_USERNAME:YOUR_GITEE_PASSWORD@gitee.com/YOUR_USERNAME/ningyi.git gitee

# 返回main分支
git checkout main
```

### 方案3：在Gitee中手动重新部署
1. 进入Gitee仓库
2. 点击 **"服务"** → **"Gitee Pages"**
3. 点击 **"更新"** 按钮重新部署

---

## 📊 部署完成后

### 获取您的网站URL
部署完成后，您的网站地址为：
```
https://YOUR_GITEE_USERNAME.gitee.io/ningyi
```

### 绑定自定义域名（可选）
1. 在Gitee Pages设置中，找到 **"自定义域名"**
2. 输入您的域名
3. 按照说明更新DNS记录

---

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 检查Gitee Pages的部署日志：
1. 进入 **"服务"** → **"Gitee Pages"**
2. 查看 **"部署日志"** 了解错误信息

### Q: 如何更新网站内容？
A: 
1. 在GitHub的 `main` 分支上更新代码
2. 将 `main` 分支合并到 `gitee` 分支
3. Gitee Pages 会自动重新部署

### Q: 为什么要用单独的gitee分支？
A: 这样可以：
- ✅ 保持 `main` 分支的纯净
- ✅ 独立管理Gitee的配置
- ✅ 方便在不同平台部署

### Q: 如何同时维护GitHub和Gitee？
A: 使用以下工作流：
```bash
# 1. 在main分支开发
git checkout main
# ... 修改代码 ...
git add .
git commit -m "feat: add new feature"
git push origin main

# 2. 定期同步到gitee分支
git checkout gitee
git merge main
git push gitee
```

---

## 📞 需要帮助？

如果遇到问题：
1. 查看Gitee Pages的部署日志
2. 确保 `gitee` 分支存在
3. 确保 `dist/public` 目录存在
4. 检查 `pnpm build` 是否成功

祝您部署成功！🎉

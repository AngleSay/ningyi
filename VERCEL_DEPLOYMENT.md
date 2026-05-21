# 部署到Vercel - 完整指南

## 🚀 一键部署步骤

### 第1步：访问Vercel官网
打开浏览器访问：https://vercel.com

### 第2步：使用GitHub账户登录/注册
1. 点击 **"Sign Up"** 或 **"Log In"**
2. 选择 **"Continue with GitHub"**
3. 授权Vercel访问您的GitHub账户

### 第3步：导入项目
1. 登录后，点击 **"New Project"** 或 **"Add New..."**
2. 选择 **"Import Git Repository"**
3. 搜索并选择 **"AngleSay/ningyi"** 仓库
4. 点击 **"Import"**

### 第4步：配置项目
Vercel会自动检测到以下配置（来自 `vercel.json`）：

| 配置项 | 值 |
|--------|-----|
| **Framework Preset** | Vite |
| **Build Command** | pnpm build |
| **Output Directory** | dist/public |
| **Install Command** | pnpm install |

确保这些配置正确，然后点击 **"Deploy"**

### 第5步：等待部署完成
Vercel会自动：
- ✅ 从GitHub拉取代码
- ✅ 安装依赖
- ✅ 构建项目
- ✅ 部署到CDN

完成后您会看到绿色的 ✅ 成功标记和一个 `*.vercel.app` 的域名

---

## 🎯 部署完成后

### 获取您的网站URL
部署完成后，您会获得一个类似这样的链接：
```
https://ningyi-tech-website.vercel.app
```

### 自定义域名（可选）
1. 在Vercel项目设置中找到 **"Domains"**
2. 点击 **"Add Domain"**
3. 输入您的自定义域名
4. 按照说明更新DNS记录

### 自动部署
每次您推送代码到GitHub的 `main` 分支时，Vercel会自动重新部署

---

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 检查构建日志，通常是因为：
- 依赖安装失败 → 运行 `pnpm install`
- 构建错误 → 运行 `pnpm build` 检查本地错误
- 输出目录错误 → 确保 `dist/public` 存在

### Q: 如何重新部署？
A: 
- 自动：推送代码到GitHub
- 手动：在Vercel项目页面点击 **"Redeploy"**

### Q: 如何查看部署日志？
A: 在Vercel项目页面点击最新的部署，查看 **"Build Logs"**

---

## 📞 需要帮助？

如果遇到问题，请：
1. 查看Vercel的部署日志
2. 确保GitHub仓库是最新的
3. 在本地运行 `pnpm build` 测试构建

祝您部署成功！🎉

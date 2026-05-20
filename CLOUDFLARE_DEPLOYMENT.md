# Cloudflare Pages 部署指南

本项目已配置为可直接部署到 Cloudflare Pages。按照以下步骤进行一键部署。

## 部署步骤

### 1. 登录 Cloudflare 账户

访问 [Cloudflare Dashboard](https://dash.cloudflare.com/) 并登录您的账户。

### 2. 创建 Pages 项目

1. 在左侧菜单中选择 **Pages**
2. 点击 **创建项目** (Create a project)
3. 选择 **连接到 Git** (Connect to Git)

### 3. 授权 GitHub

1. 选择 **GitHub** 作为 Git 提供商
2. 点击 **授权 Cloudflare** (Authorize Cloudflare)
3. 在 GitHub 中授予权限

### 4. 选择仓库

1. 在授权后，选择您的 GitHub 账户
2. 搜索并选择 **ningyi** 仓库
3. 点击 **开始设置** (Begin Setup)

### 5. 配置构建设置

在项目设置页面，配置以下信息：

| 字段 | 值 |
|------|-----|
| **项目名称** | ningyi-tech-website |
| **生产分支** | main |
| **框架预设** | Vite |
| **构建命令** | pnpm build |
| **构建输出目录** | dist |
| **Node.js 版本** | 20.x |

### 6. 环境变量（可选）

如果需要设置环境变量，点击 **环境变量** 并添加相应的变量。

### 7. 部署

1. 点击 **保存并部署** (Save and Deploy)
2. Cloudflare 将自动从 GitHub 拉取代码并进行构建
3. 部署完成后，您将获得一个 `*.pages.dev` 的域名

## 自定义域名

部署完成后，您可以绑定自定义域名：

1. 在 Pages 项目中选择 **自定义域** (Custom Domain)
2. 输入您的域名（例如：ningyi.com）
3. 按照 Cloudflare 的指示更新 DNS 记录

## 自动部署

配置完成后，每次您推送代码到 GitHub 的 `main` 分支时，Cloudflare Pages 将自动触发构建和部署。

## 构建配置

项目的构建配置已在以下文件中定义：

- **package.json** - 构建脚本：`pnpm build`
- **vite.config.ts** - Vite 构建配置
- **vercel.json** - 构建输出目录配置

## 常见问题

### Q: 构建失败怎么办？

A: 检查以下几点：
- 确保 Node.js 版本为 20.x 或更高
- 检查 GitHub 仓库中的代码是否有语法错误
- 查看 Cloudflare Pages 的构建日志获取详细错误信息

### Q: 如何更新已部署的网站？

A: 只需推送代码到 GitHub 的 `main` 分支，Cloudflare Pages 将自动重新构建和部署。

### Q: 如何回滚到之前的版本？

A: 在 Cloudflare Pages 的 **部署历史** (Deployments) 中，选择要回滚的版本并点击 **回滚** (Rollback)。

## 支持

如有问题，请访问：
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare 支持](https://support.cloudflare.com/)

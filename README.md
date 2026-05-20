# 山西凝一科技有限公司官网

一个现代化的、响应式的混凝土外加剂企业官网，使用 React 19 + Tailwind CSS 4 + TypeScript 构建。

## 📋 项目概述

本项目是山西凝一科技有限公司的官方网站，展示公司的产品、技术优势和企业信息。网站采用现代化设计，参考 Apple 和 Microsoft 的设计风格，确保在所有设备上都有优秀的用户体验。

## 🎯 主要特性

- ✨ **现代化设计** - 参考知名企业的设计风格，简洁优雅
- 📱 **完全响应式** - 完美适配手机、平板、桌面等所有设备
- ⚡ **高性能** - 使用 Vite 构建，加载速度极快
- 🎨 **专业UI组件** - 集成 shadcn/ui 组件库
- 🔄 **热模块替换** - 开发时实时预览代码变化
- 📊 **SEO友好** - 结构化标记和元标签优化

## 📁 项目结构

```
ningyi-tech-website/
├── client/
│   ├── public/              # 静态资源（favicon、robots.txt等）
│   ├── src/
│   │   ├── pages/           # 页面组件
│   │   │   ├── Home.tsx     # 首页
│   │   │   └── ProductDetail.tsx  # 产品详情页
│   │   ├── components/      # 可复用UI组件
│   │   ├── contexts/        # React Context
│   │   ├── hooks/           # 自定义Hooks
│   │   ├── lib/             # 工具函数
│   │   ├── App.tsx          # 路由配置
│   │   ├── main.tsx         # React入口
│   │   └── index.css        # 全局样式
│   └── index.html           # HTML模板
├── server/                  # 服务器配置（兼容性占位符）
├── package.json             # 项目依赖
├── vite.config.ts           # Vite配置
├── tsconfig.json            # TypeScript配置
└── README.md                # 本文件
```

## 🚀 快速开始

### 前置要求

- Node.js 18+
- pnpm 10+

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm run dev
```

访问 `http://localhost:3000` 查看网站

### 构建生产版本

```bash
pnpm run build
```

### 预览生产版本

```bash
pnpm run preview
```

## 📄 页面说明

### 首页 (Home.tsx)

首页包含以下主要部分：

1. **导航栏** - 固定导航，包含品牌Logo、菜单链接和CTA按钮
2. **Hero Section** - 引人入胜的标题、企业定位和行动按钮
3. **企业简介** - 公司信息、发展历程和核心数据
4. **产品展示** - 4个核心产品卡片：
   - 降粘型 - 高效流动性调节
   - 抗裂型 - 混凝土裂纹控制
   - 增韧型 - 混凝土韧性增强
   - 分散型 - 水泥分散性增强
5. **技术优势** - 4个优势卡片展示
6. **联系方式** - 联系表单和企业信息
7. **页脚** - 链接导航和版权信息

### 产品详情页 (ProductDetail.tsx)

展示单个产品的详细信息，包括：
- 产品特性列表
- 技术规格参数
- 应用领域
- 相关案例

## 🎨 设计系统

### 色彩方案

- **主色** - 橙色 (#ff9500) - 代表能量和创新
- **背景** - 白色 (#ffffff) - 简洁专业
- **文本** - 深灰色 (#1f2937) - 易读性强
- **辅助** - 浅灰色 (#6b7280) - 层级区分

### 排版

- **标题字体** - Noto Sans SC (900/700/600 weight)
- **正文字体** - Noto Sans SC (400 weight)
- **行高** - 1.8 (正文) / 1.2-1.3 (标题)
- **响应式排版** - 使用 clamp() 函数实现流体排版

### 间距系统

- 移动端：1rem (16px) 水平内边距
- 平板：1.5rem (24px) 水平内边距
- 桌面：2rem (32px) 水平内边距，最大宽度 1280px

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19 | UI框架 |
| TypeScript | 5.6 | 类型安全 |
| Tailwind CSS | 4 | 样式框架 |
| Vite | 7 | 构建工具 |
| Wouter | 3.3 | 路由管理 |
| shadcn/ui | - | UI组件库 |
| Lucide React | 0.453 | 图标库 |

## 📦 主要依赖

```json
{
  "dependencies": {
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "wouter": "^3.3.5",
    "lucide-react": "^0.453.0",
    "tailwindcss": "^4.1.14"
  },
  "devDependencies": {
    "typescript": "5.6.3",
    "vite": "^7.1.7",
    "@vitejs/plugin-react": "^5.0.4"
  }
}
```

## 🔧 可用命令

```bash
# 开发
pnpm run dev          # 启动开发服务器

# 构建
pnpm run build        # 构建生产版本
pnpm run preview      # 预览生产版本

# 代码质量
pnpm run check        # TypeScript类型检查
pnpm run format       # 代码格式化
```

## 📱 响应式设计

网站采用移动优先的设计方法，确保在所有屏幕尺寸上都有最佳体验：

- **手机** (< 640px) - 单列布局，优化触摸交互
- **平板** (640px - 1024px) - 两列布局，平衡显示
- **桌面** (> 1024px) - 多列布局，充分利用屏幕空间

## 🖼️ 图片资源

网站使用高质量的AI生成图片：

1. **Hero背景** - 现代混凝土桥梁在金色时刻的专业摄影
2. **企业简介图** - 混凝土微观结构的科学可视化
3. **产品详情图** - 专业的混凝土研究实验室场景

所有图片存储在云端，确保快速加载和最佳性能。

## 🌐 部署

### 部署到 Manus

项目已配置为可直接在 Manus 平台上部署。

### 部署到其他平台

1. **Vercel**
   ```bash
   vercel deploy
   ```

2. **Netlify**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **传统服务器**
   ```bash
   # 构建
   pnpm run build
   
   # 将 dist 文件夹上传到服务器
   ```

## 📝 开发指南

### 添加新页面

1. 在 `client/src/pages/` 中创建新的 `.tsx` 文件
2. 在 `client/src/App.tsx` 中添加路由

```tsx
import NewPage from "@/pages/NewPage";

function Router() {
  return (
    <Switch>
      <Route path="/new-page" component={NewPage} />
    </Switch>
  );
}
```

### 添加新组件

1. 在 `client/src/components/` 中创建新的 `.tsx` 文件
2. 导出组件并在其他地方使用

```tsx
// client/src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>;
}

// 在其他文件中使用
import MyComponent from "@/components/MyComponent";
```

### 修改样式

全局样式在 `client/src/index.css` 中定义。使用 Tailwind CSS 的实用类进行样式编写。

## 🐛 常见问题

**Q: 如何修改网站标题？**
A: 编辑 `client/index.html` 中的 `<title>` 标签

**Q: 如何添加新产品？**
A: 在 `client/src/pages/ProductDetail.tsx` 中的 `products` 对象中添加新产品数据

**Q: 如何修改颜色主题？**
A: 编辑 `client/src/index.css` 中的 CSS 变量

## 📞 联系方式

- **公司名称** - 山西凝一科技有限公司
- **地址** - 山西省吕梁市
- **电话** - +86 (0)358-XXXX-XXXX
- **邮箱** - info@ningyi-tech.com

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🙏 致谢

感谢以下开源项目的支持：
- React 团队
- Tailwind CSS
- shadcn/ui
- Vite

---

**最后更新** - 2026年5月

如有任何问题或建议，欢迎提交 Issue 或 Pull Request。

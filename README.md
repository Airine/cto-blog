# 一口闰心的 CTO 博客

React + Vite + Tailwind CSS + shadcn/ui + HashRouter

## 在线地址

**https://cto.singularity-x.ai**

## 功能特性

- 13 篇博客文章（技术/创业/媒体分类）
- 划线评论（本地存储）
- Giscus 评论系统（GitHub Discussions）
- 分享/复制链接
- 搜索 + 分类筛选
- 代码语法高亮
- 响应式设计

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/Airine/cto-blog.git
cd cto-blog

# 安装依赖
npm install

# 安装 shadcn/ui 组件
chmod +x setup.sh
./setup.sh

# 添加头像（从备份获取 avatar.png 放到 public/ 目录）

# 开发模式
npm run dev

# 构建
npm run build
```

## 项目结构

```
src/
  components/     # UI 组件 + 业务组件
    ui/           # shadcn/ui 组件
    Navbar.tsx    # 导航栏
    Footer.tsx    # 页脚
    ShareBar.tsx  # 分享按钮
    TextSelectionToolbar.tsx  # 选中文本工具栏
    HighlightLayer.tsx        # 划线高亮层
    HighlightComments.tsx     # 划线评论弹窗
    GiscusComments.tsx        # Giscus 评论
    CodeBlock.tsx             # 代码语法高亮
  pages/          # 页面
    Home.tsx
    BlogList.tsx
    BlogPost.tsx
    About.tsx
    Products.tsx
    ProductDetail.tsx
  content/        # 博客文章内容
    posts/        # 13 篇文章
    products/     # 4 个产品描述
  lib/            # 工具函数
    content.ts    # 文章元数据
    products.ts   # 产品元数据
    utils.ts      # 通用工具
public/
  avatar.png      # 头像
  images/posts/   # 文章配图
```

## 添加新文章

1. 在 `src/content/posts/` 创建新的 `.tsx` 文件
2. 在 `src/content/index.ts` 导入并注册
3. 在 `src/lib/content.ts` 添加文章元数据

## 部署

构建输出到 `dist/` 目录：

```bash
npm run build
```

将 `dist/` 目录部署到任何静态托管服务（Vercel、Netlify、Cloudflare Pages 等）。

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- react-router (HashRouter)
- react-syntax-highlighter (代码高亮)
- Giscus (评论系统)

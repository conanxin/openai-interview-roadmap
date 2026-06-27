# openai-interview-roadmap

一个个人学习型静态网页项目，主题是“通往 OpenAI / AI Lab 的学习地图”。

页面基于 Alisa Liu 的 OpenAI / AI Lab 求职经验和公开学习资源，整理面向顶级 AI Lab 面试的能力地图、资源清单、Mini GPT 实践项目和 12 周学习计划。

## V2：站内中文学习系统

V2 把项目从“资源导航页”升级为“站内中文学习系统”。

首页资源卡片现在提供两个入口：

- `站内学习`：进入当前站点内的中文学习页，例如 `#/resources/cs336`
- `查看原文`：在新窗口打开外部原文链接

每个资源详情页包含：

- 返回首页按钮
- 资源标题
- 资源定位
- 学习目标
- 中文导读
- 核心概念
- 术语表
- 学习笔记
- 代码练习
- 面试问题
- 学习产出
- 原文链接按钮

当前已内置 10 个资源详情页：

- `#/resources/alisa-job-search`
- `#/resources/cs336`
- `#/resources/illustrated-gpt2`
- `#/resources/self-attention`
- `#/resources/backpropagation`
- `#/resources/policy-gradient`
- `#/resources/grpo`
- `#/resources/scaling`
- `#/resources/leetcode`
- `#/resources/transformer-from-scratch`

## 项目目的

- 建立 LLM 底层理解：语言模型、Transformer、tokenizer、loss、training loop。
- 建立代码实现能力：ML Coding、手写 Transformer、decoding、backward。
- 建立技术讨论能力：实验设计、parallelism、post-training、PPO vs GRPO。
- 建立面试表达能力：research discussion、job talk、behavioral stories。

这个页面不是 offer 保证，而是一张个人学习和面试准备路线图。

## 本地运行

```bash
npm install
npm run dev
```

Vite 默认会输出本地访问地址，通常是 `http://localhost:5173/`。

## 如何新增一个资源详情页

资源内容集中维护在：

```text
src/data/resources.js
```

新增资源时，在 `resourceDetails` 数组里添加一个对象，并填写：

- `slug`：站内 hash route，例如 `my-resource`
- `name`：资源名称
- `stage`：适合阶段
- `problem`：解决什么面试能力缺口
- `advice`：学习建议
- `link`：原文链接
- `positioning`：资源定位
- `goals`：学习目标
- `guide`：中文导读段落
- `concepts`：核心概念
- `glossary`：英文术语 + 中文解释
- `notes`：学习笔记
- `exercises`：代码练习
- `interviewQuestions`：面试问题
- `outputs`：学习产出

添加后页面会自动生成首页资源卡片和 `#/resources/<slug>` 详情页。

## 构建

```bash
npm run build
```

构建产物会生成在 `dist/` 目录。

本地预览构建产物：

```bash
npm run preview
```

## 部署到 GitHub Pages

如果仓库名是 `openai-interview-roadmap`，使用项目页路径构建：

```bash
npm run build:gh-pages
```

网络稳定时，也可以使用 `gh-pages` 包：

```bash
npm install --save-dev gh-pages
npm run build:gh-pages
npx gh-pages -d dist
```

### 网络不稳定时的手动部署方式

如果 npm registry 不稳定，导致 `npx gh-pages -d dist` 超时，可以使用不依赖 `gh-pages` npm 包的手动部署脚本：

```bash
npm run deploy:manual
```

脚本会先运行 `npm run build:gh-pages`，再进入 `dist/` 目录内部初始化临时 `gh-pages` 分支，并强制推送到当前仓库的 `origin`。GitHub Pages 的 `gh-pages` 分支根目录会直接包含 `index.html`、`assets/`、`favicon.svg` 和 `.nojekyll`。

## 部署到腾讯云服务器

默认构建命令即可：

```bash
npm run build
```

把 `dist/` 目录上传到服务器的静态站点目录，并用 Nginx、Caddy 或腾讯云静态网站托管服务指向该目录即可。

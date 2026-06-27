# openai-interview-roadmap

一个个人学习型静态网页项目，主题是“通往 OpenAI / AI Lab 的学习地图”。

页面基于 Alisa Liu 的 OpenAI / AI Lab 求职经验和公开学习资源，整理面向顶级 AI Lab 面试的能力地图、资源清单、Mini GPT 实践项目和 12 周学习计划。

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

然后把 `dist/` 目录部署到 GitHub Pages。常见方式：

1. 在 GitHub 仓库中启用 Pages。
2. 选择从 GitHub Actions 或 `gh-pages` 分支部署。
3. 如果使用手动分支部署，可以把 `dist/` 的内容推送到 `gh-pages` 分支。

也可以使用 `gh-pages` 包：

```bash
npm install --save-dev gh-pages
npm run build:gh-pages
npx gh-pages -d dist
```

## 部署到腾讯云服务器

默认构建命令即可：

```bash
npm run build
```

把 `dist/` 目录上传到服务器的静态站点目录，并用 Nginx、Caddy 或腾讯云静态网站托管服务指向该目录即可。

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

## V3B：Backpropagation / GRPO / Scaling 深度学习页

V3B 把 3 个核心技术资源页从“中文导读”增强为“可直接学习的中文讲义”：

- `#/resources/backpropagation`：反向传播、计算图、链式法则、手写 backward、数值稳定性和常见 bug。
- `#/resources/grpo`：语言模型后训练、policy/reward/advantage、PPO vs GRPO、group relative advantage 和 KL 约束。
- `#/resources/scaling`：模型规模、数据规模、计算量、并行策略、KV cache、prefill/decode 和训练/推理成本。

这些深度页新增了章节式讲义、文字概念结构图、最小伪代码、面试答题模板、自测题和学习完成 checklist。

## V3C：Policy Gradient / LeetCode / Transformer from Scratch 深度学习页

V3C 继续把 3 个面试关键资源页增强为中文讲义页：

- `#/resources/policy-gradient`：语言模型作为 policy、state/action/trajectory/reward 映射、REINFORCE、advantage、variance、baseline/value function，以及它和 RLHF、PPO、GRPO 的关系。
- `#/resources/leetcode`：general coding 面试流程、常见题型、算法模板、从 brute force 到优化、边界条件、复杂度分析，以及它和 ML Coding 的区别。
- `#/resources/transformer-from-scratch`：Mini GPT 模块链路、tokenizer/dataset/embedding/attention/loss/generation 的关系、causal mask、采样策略、测试设计和 GitHub 作品集表达。

这些页面复用 V3B 的深度学习页结构：章节式讲义、文字概念结构图、最小伪代码、练习任务、面试答题模板、自测题和学习完成 checklist。

## V3D：Alisa Job Search Notes 深度求职战略页

V3D 把 `#/resources/alisa-job-search` 从中文导读增强为 OpenAI / AI Lab 求职战略页。

页面新增：

- 求职策略拆解：把学习资源、项目、研究表达、mock interview 和投递流程串成闭环。
- AI Lab 面试能力模型：ML Coding、General Coding、Technical Discussion、Research Discussion、Behavioral、Math 和 Job Talk。
- 面试准备矩阵：每种面试类型对应考察内容、准备方式、推荐产出和站内资源页。
- 行为面试故事库：debug、失败调整、协作冲突、快速学习、AI 项目 insight 五类模板。
- 4 周求职行动计划、面试复盘模板、自测题和学习完成 checklist。

## V4A：Mini GPT from Scratch 项目联动页

V4A 新增站内项目页 `#/projects/mini-gpt`，把学习站内容联动到一个可实践的 Mini GPT from Scratch 项目路线图。

页面包括：

- Mini GPT 项目目标：decoder-only Transformer、causal self-attention、training loop、generation、sampling、debug 和测试。
- 8 个项目模块：Tokenizer、Embedding、Causal Self-Attention、Transformer Block、Training Loop、Generation、Testing、项目展示。
- 推荐代码目录结构：`src/mini_gpt/`、`tests/`、`notes/`、`scripts/`。
- 相关学习页联动：CS336、Illustrated GPT-2、Self-Attention、Backpropagation、Transformer from Scratch、Scaling、Alisa Job Search Notes。
- 项目完成 checklist 和“如何向面试官讲这个项目”的 30 秒 / 3 分钟展示模板。

## V4C：接入 mini-gpt-from-scratch 真实代码仓库

V4C 把 `#/projects/mini-gpt` 从路线图占位升级为“学习站 + 真实代码仓库联动”。

页面新增：

- GitHub 仓库入口：`https://github.com/conanxin/mini-gpt-from-scratch`
- v0.2 tag 代码入口：`https://github.com/conanxin/mini-gpt-from-scratch/tree/v0.2.0`
- 代码仓库当前能力：tokenizer、shifted batch、causal self-attention、Transformer block、MiniGPT model、training loop、top-p sampling、checkpoint、train/eval loss、loss history CSV、pytest 10 passed。
- 如何运行代码项目：安装、测试、训练和生成命令。

## V5A：学习进度 Dashboard 与 AI Lab 面试题库

V5A 把站点从“内容学习站”继续升级为“OpenAI / AI Lab 面试训练系统”。

新增页面：

- `#/dashboard`：学习进度 Dashboard，用于追踪资源页、Mini GPT 项目模块、12 周计划和面试准备任务。
- `#/interview-bank`：AI Lab 面试题库，覆盖 ML Coding、Technical Discussion、Research Discussion、Behavioral、Project Pitch、Math & Backprop、Scaling & Systems、RLHF / GRPO。

V5A 支持：

- 使用 `localStorage` 保存本地学习进度和题库练习状态。
- 不需要后端、数据库、账号或云同步。
- 首页 Hero 和 Mini GPT 项目区都提供训练系统入口。

## V5B：Mock Interview 模式

V5B 新增 `#/mock-interview`，把题库进一步升级为结构化模拟面试训练模式。

新增能力：

- 支持 4 种模拟方式：快速练习、技术面试、项目面试、全流程模拟。
- 从内置题库中按模式抽题，同一场模拟中不重复题目。
- 答题时默认隐藏推荐回答思路，可以手动显示。
- 支持在流程中标记“已练习 / 已掌握”，并复用题库的本地状态。
- 结束后生成复盘页，展示题目列表、分类分布、未掌握题目、建议补习资源页和面试复盘模板。
- 继续使用 `openai-roadmap-progress` 这一个 `localStorage` key，并新增最近一次 mock interview 结果记录。

## V5C：错题复盘与 Markdown 导出

V5C 新增 `#/review`，把未掌握问题、最近一次模拟面试和学习进度整理成可复制的 Markdown 复盘文档。

新增能力：

- 错题复盘页：汇总已练习但未掌握的题、最近一次 Mock Interview 的 weak questions，以及未练习的高阶题。
- 学习进度导出：生成资源页、Mini GPT 项目、12 周计划和面试准备任务的 Markdown checklist。
- 错题本导出：生成未掌握题列表，包含分类、难度、考察点、推荐回答思路和相关学习页。
- 最近一次 Mock Interview 复盘导出：生成模式、时间、题目列表、分类分布、已掌握题、未掌握题和复盘模板。
- 导出格式为 Markdown，页面内展示文本并支持复制到剪贴板。

## Related Projects

- `mini-gpt-from-scratch`：真实 Python + PyTorch Mini GPT 代码作品集，https://github.com/conanxin/mini-gpt-from-scratch
- `openai-interview-roadmap`：当前学习站与 AI Lab 面试准备路线图，https://github.com/conanxin/openai-interview-roadmap

后续计划：

- V6：连续课程路径和学习 dashboard
- V7：简历 / 项目展示 / mock interview 工具区
- V8：公开学习日志与周报模板

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

如果要做成 V3 深度学习页，可以继续补充这些可选字段：

- `lectureSections`：章节式中文讲义
- `structureDiagram`：文字概念结构图
- `pseudocode`：最小伪代码
- `interviewTemplates`：面试答题模板
- `selfTest`：自测题与参考答案
- `completionChecklist`：学习完成 checklist

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

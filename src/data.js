export const capabilities = [
  {
    title: 'ML Coding',
    detail: 'PyTorch 实现 Transformer、decoding、loss、backward',
  },
  {
    title: 'General Coding',
    detail: 'LeetCode 风格算法题，训练清晰、稳定、可解释的编码表达',
  },
  {
    title: 'Technical Discussion',
    detail: '实验设计、positional encoding、parallelism、PPO vs GRPO',
  },
  {
    title: 'Research Discussion',
    detail: '讲清楚自己的项目、insight、失败路径和未来方向',
  },
  {
    title: 'Behavioral',
    detail: '准备 PhD、项目、协作、失败、成长故事',
  },
  {
    title: 'Math',
    detail: '线代、概率、反向传播、优化，能从公式走到直觉',
  },
  {
    title: 'Job Talk',
    detail: '系统展示一个核心研究或工程项目，突出动机、贡献和边界',
  },
]

export const timelineSteps = [
  {
    step: 'Step 1',
    title: '广度建立：Stanford CS336',
    detail: '先建立语言模型从数据、tokenizer、Transformer、训练到评估的全局框架。',
  },
  {
    step: 'Step 2',
    title: '结构理解：The Illustrated GPT-2 + CS224n Self-Attention',
    detail: '把 attention、mask、position、decoder-only 架构从图解走到代码结构。',
  },
  {
    step: 'Step 3',
    title: '数学基础：CS231n Backpropagation',
    detail: '复习计算图、链式法则、梯度流和优化器，为手写 backward 做准备。',
  },
  {
    step: 'Step 4',
    title: '后训练与 RL：Policy Gradient for LMs + GRPO',
    detail: '理解 reward、advantage、KL、PPO、GRPO 和 reasoning model 后训练的基本语言。',
  },
  {
    step: 'Step 5',
    title: '系统与 Scaling：How to Scale Your Model',
    detail: '学习训练和推理系统里的并行、显存、通信、吞吐和延迟权衡。',
  },
  {
    step: 'Step 6',
    title: '面试训练：LeetCode + ML Coding + 手写 Transformer',
    detail: '把知识压缩成可现场表达、可运行、可调试、可解释的代码和讨论能力。',
  },
]

export const projectTasks = [
  '实现 tokenizer',
  '实现 causal self-attention',
  '实现 Transformer block',
  '实现 training loop',
  '实现 generation',
  '实现 top-k / top-p sampling',
  '添加测试',
  '写学习笔记',
]

export const weeks = [
  {
    period: '第 1-2 周',
    title: 'CS336 建立全局框架',
    output: '完成课程总览、tokenization、Transformer、training loop 的笔记。',
  },
  {
    period: '第 3-5 周',
    title: '手写 Mini GPT',
    output: '完成 tokenizer、attention、block、训练与生成，并记录 bug。',
  },
  {
    period: '第 6 周',
    title: 'ML Coding 专项',
    output: '限时实现 loss、decoding、backward、小型模块测试。',
  },
  {
    period: '第 7 周',
    title: 'General Coding',
    output: '完成 30 道 LeetCode 高频题，练习口述思路和复杂度。',
  },
  {
    period: '第 8 周',
    title: '推理系统',
    output: '整理 KV cache、batching、parallelism、延迟和吞吐权衡。',
  },
  {
    period: '第 9 周',
    title: 'RLHF / GRPO',
    output: '写清 PPO vs GRPO、reward、advantage、KL 的对比笔记。',
  },
  {
    period: '第 10 周',
    title: '公开项目',
    output: '把 Mini GPT 仓库、README、实验表格和学习笔记整理成可展示版本。',
  },
  {
    period: '第 11 周',
    title: '模拟面试',
    output: '完成 ML Coding、General Coding、Technical Discussion 各两轮 mock。',
  },
  {
    period: '第 12 周',
    title: '简历和展示',
    output: '打磨简历、job talk、research story 和 behavioral stories。',
  },
]

export const checklist = [
  '看完 CS336 lectures',
  '实现 tokenizer',
  '实现 causal self-attention',
  '实现 Transformer block',
  '完成一次小模型训练',
  '实现 top-k sampling',
  '实现 top-p sampling',
  '完成 30 道 LeetCode',
  '准备 5 个 Behavioral stories',
  '完成一次 mock interview',
]

export const mockInterviewModes = [
  {
    id: 'quick',
    name: '快速练习',
    count: 5,
    scope: '混合分类',
    description: '适合每日训练，用少量问题快速热身回答结构。',
    categories: null,
  },
  {
    id: 'technical',
    name: '技术面试',
    count: 8,
    scope: 'ML Coding / Technical / Math / Systems',
    description: '重点训练代码实现、机制解释、反向传播和系统估算。',
    categories: ['ML Coding', 'Technical Discussion', 'Math & Backprop', 'Scaling & Systems'],
  },
  {
    id: 'project',
    name: '项目面试',
    count: 6,
    scope: 'Project Pitch / Research / Behavioral',
    description: '重点训练项目表达、research insight 和行为故事。',
    categories: ['Project Pitch', 'Research Discussion', 'Behavioral'],
  },
  {
    id: 'full',
    name: '全流程模拟',
    count: 12,
    scope: '覆盖主要 AI Lab 面试类型',
    description: '模拟更完整的面试 loop，从技术实现到研究讨论和项目表达。',
    categories: [
      'ML Coding',
      'Technical Discussion',
      'Research Discussion',
      'Behavioral',
      'Project Pitch',
      'Scaling & Systems',
      'RLHF / GRPO',
    ],
  },
]

export const mockReviewPrompts = [
  {
    label: '本次最卡的问题',
    prompt: '记录是哪一道题让你停顿最久，以及卡住的第一层原因。',
  },
  {
    label: '哪个概念不熟',
    prompt: '写下需要重新学习的核心概念，例如 causal mask、KV cache、advantage 或 backward shape。',
  },
  {
    label: '哪个回答可以更结构化',
    prompt: '把答案改写成“背景 -> 关键机制 -> 例子 -> trade-off -> 验证方式”的结构。',
  },
  {
    label: '需要补的资源页',
    prompt: '列出 1-3 个最应该回看的站内学习页，并安排下一次复习动作。',
  },
  {
    label: '下一次练习目标',
    prompt: '给下一场 mock interview 设置一个明确目标，例如减少停顿、补齐公式或讲清项目 insight。',
  },
]

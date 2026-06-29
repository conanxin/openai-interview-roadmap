export const resourcesProgressItems = [
  { id: 'alisa-job-search', title: 'Alisa Liu Job Search Notes', type: '求职战略', href: '#/resources/alisa-job-search' },
  { id: 'cs336', title: 'Stanford CS336', type: '主线课程', href: '#/resources/cs336' },
  { id: 'illustrated-gpt2', title: 'The Illustrated GPT-2', type: '架构理解', href: '#/resources/illustrated-gpt2' },
  { id: 'self-attention', title: 'CS224n Self-Attention', type: '注意力机制', href: '#/resources/self-attention' },
  { id: 'backpropagation', title: 'CS231n Backpropagation', type: '数学与反向传播', href: '#/resources/backpropagation' },
  { id: 'policy-gradient', title: 'Policy Gradient for LMs', type: '后训练 RL', href: '#/resources/policy-gradient' },
  { id: 'grpo', title: 'GRPO', type: '后训练 RL', href: '#/resources/grpo' },
  { id: 'scaling', title: 'Scaling', type: '系统与规模化', href: '#/resources/scaling' },
  { id: 'leetcode', title: 'LeetCode', type: 'General Coding', href: '#/resources/leetcode' },
  { id: 'transformer-from-scratch', title: 'Transformer from Scratch', type: 'ML Coding 项目', href: '#/resources/transformer-from-scratch' },
]

export const miniGptProgressItems = [
  {
    id: 'tokenizer-data',
    title: 'Tokenizer 与数据准备',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/cs336',
    resourceLabel: 'CS336',
  },
  {
    id: 'embedding-position',
    title: 'Embedding 与位置编码',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/illustrated-gpt2',
    resourceLabel: 'Illustrated GPT-2',
  },
  {
    id: 'causal-attention',
    title: 'Causal Self-Attention',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/self-attention',
    resourceLabel: 'Self-Attention',
  },
  {
    id: 'transformer-block',
    title: 'Transformer Block',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/transformer-from-scratch',
    resourceLabel: 'Transformer from Scratch',
  },
  {
    id: 'training-loop',
    title: 'Training Loop',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/backpropagation',
    resourceLabel: 'Backpropagation',
  },
  {
    id: 'generation-sampling',
    title: 'Generation 与 Sampling',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/transformer-from-scratch',
    resourceLabel: 'Transformer from Scratch',
  },
  {
    id: 'testing-debug',
    title: 'Testing 与 Debug',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/leetcode',
    resourceLabel: 'LeetCode',
  },
  {
    id: 'project-pitch',
    title: '项目展示与面试讲法',
    projectHref: '#/projects/mini-gpt',
    resourceHref: '#/resources/alisa-job-search',
    resourceLabel: 'Alisa Job Search Notes',
  },
]

export const weeklyPlanItems = [
  { id: 'week-01', title: '第 1 周：建立 LLM 全局框架' },
  { id: 'week-02', title: '第 2 周：CS336 主线学习' },
  { id: 'week-03', title: '第 3 周：Tokenizer / Data' },
  { id: 'week-04', title: '第 4 周：Self-Attention' },
  { id: 'week-05', title: '第 5 周：Transformer Block' },
  { id: 'week-06', title: '第 6 周：Training Loop / Backpropagation' },
  { id: 'week-07', title: '第 7 周：Generation / Sampling' },
  { id: 'week-08', title: '第 8 周：Scaling / Inference' },
  { id: 'week-09', title: '第 9 周：Policy Gradient / GRPO' },
  { id: 'week-10', title: '第 10 周：Mini GPT 项目整理' },
  { id: 'week-11', title: '第 11 周：Mock Interview' },
  { id: 'week-12', title: '第 12 周：简历 / 项目展示 / 投递' },
]

export const interviewProgressItems = [
  { id: 'ml-coding-10', title: '完成 10 道 ML Coding 题' },
  { id: 'technical-discussion-10', title: '完成 10 道 Technical Discussion 题' },
  { id: 'behavioral-stories-5', title: '准备 5 个 Behavioral Stories' },
  { id: 'mock-interviews-3', title: '完成 3 次 Mock Interview' },
  { id: 'mini-gpt-pitch', title: '写完 Mini GPT 3 分钟项目讲稿' },
  { id: 'full-review', title: '完成一次完整面试复盘' },
]

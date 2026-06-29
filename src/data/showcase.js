export const showcaseHeroActions = [
  { label: '开始 12 周课程', href: '#/course', variant: 'primary' },
  { label: '学习进度 Dashboard', href: '#/dashboard', variant: 'secondary' },
  { label: 'AI Lab 面试题库', href: '#/interview-bank', variant: 'secondary' },
  { label: 'Mock Interview', href: '#/mock-interview', variant: 'secondary' },
  { label: 'Portfolio Toolkit', href: '#/portfolio', variant: 'secondary' },
  { label: 'Learning Log', href: '#/learning-log', variant: 'secondary' },
]

export const showcaseExternalLinks = [
  {
    label: 'Roadmap GitHub 仓库',
    href: 'https://github.com/conanxin/openai-interview-roadmap',
  },
  {
    label: 'Mini GPT 代码仓库',
    href: 'https://github.com/conanxin/mini-gpt-from-scratch',
  },
]

export const systemCapabilityCards = [
  {
    title: '学习',
    description: '站内中文学习页、深度讲义、资源导读，把外部材料转成可直接复习的中文学习系统。',
    href: '#resources',
    action: '查看资源地图',
  },
  {
    title: '实践',
    description: 'Mini GPT from Scratch 项目路线图和真实代码仓库，把 Transformer 理解落到可运行代码。',
    href: '#/projects/mini-gpt',
    action: '进入项目页',
  },
  {
    title: '训练',
    description: 'AI Lab 面试题库、Mock Interview 和技术讨论训练，帮助从“看懂”切换到“讲清楚”。',
    href: '#/interview-bank',
    action: '进入题库',
  },
  {
    title: '复盘',
    description: '错题本、Mock Interview 复盘和 Markdown 导出，把薄弱点变成下一轮学习任务。',
    href: '#/review',
    action: '查看复盘',
  },
  {
    title: '课程',
    description: '12 周课程路径、每周详情页、周报和总报告，把准备过程拆成可执行节奏。',
    href: '#/course',
    action: '开始课程',
  },
  {
    title: '求职',
    description: 'Resume Bullet Optimizer、Project Pitch、Behavioral Story Editor 和 Portfolio Packet。',
    href: '#/portfolio',
    action: '打开工具箱',
  },
]

export const learningLoopSteps = [
  { title: '资源学习', href: '#resources' },
  { title: 'Mini GPT 项目实践', href: '#/projects/mini-gpt' },
  { title: '面试题训练', href: '#/interview-bank' },
  { title: 'Mock Interview', href: '#/mock-interview' },
  { title: '错题复盘', href: '#/review' },
  { title: '课程周报', href: '#/course' },
  { title: 'Portfolio Packet', href: '#/portfolio' },
  { title: '公开学习日志', href: '#/learning-log' },
]

export const projectShowcaseItems = [
  {
    name: 'openai-interview-roadmap',
    positioning: 'AI Lab 面试训练系统 / 中文学习站 / 公开作品集主页',
    highlights: [
      '站内中文学习系统',
      '12 周课程路径',
      'Dashboard 进度追踪',
      '54 道 AI Lab 面试题',
      'Mock Interview',
      '错题复盘与 Markdown 导出',
      'Portfolio & Resume Toolkit',
      'Learning Log & Weekly Report',
      'GitHub Pages 静态部署',
    ],
    links: [
      { label: 'Live Demo', href: 'https://conanxin.github.io/openai-interview-roadmap/', external: true },
      { label: 'GitHub', href: 'https://github.com/conanxin/openai-interview-roadmap', external: true },
    ],
  },
  {
    name: 'mini-gpt-from-scratch',
    positioning: '从零实现 Mini GPT 的代码作品集',
    highlights: [
      'character-level tokenizer',
      'shifted batch data loader',
      'causal self-attention',
      'Transformer block',
      'MiniGPT model',
      'training loop',
      'greedy / temperature / top-k / top-p sampling',
      'checkpoint save/load',
      'train/eval loss',
      'loss history CSV',
      'pytest tests 10 passed',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/conanxin/mini-gpt-from-scratch', external: true },
      { label: '站内项目页', href: '#/projects/mini-gpt' },
    ],
  },
]

export const audienceCards = [
  {
    title: 'Research Engineer 候选人',
    description: '关注 Transformer、ML Coding、实验讨论和项目表达，需要把实现细节转化成研究判断。',
  },
  {
    title: 'GenAI Application Engineer 候选人',
    description: '关注 AI 工具、工作流、产品化和应用工程能力，需要能把模型知识放进真实产品路径。',
  },
  {
    title: 'AI Product / Tooling Engineer 候选人',
    description: '关注学习系统、面试训练系统、工具化能力和用户路径设计，需要展示端到端系统思维。',
  },
  {
    title: '自学 LLM 的工程师',
    description: '关注从资源收藏到代码实现、再到面试输出的完整路径，希望学习过程可复盘、可发布。',
  },
]

export const versionCapabilityItems = [
  'V2：站内中文学习系统',
  'V3：深度资源讲义',
  'V4：Mini GPT 项目联动',
  'V5：Dashboard / 题库 / Mock / Review',
  'V6：12 周课程路径与课程报告',
  'V7：Portfolio / Resume / Behavioral Stories',
  'V8：Learning Log / Weekly Report / 首页 Showcase',
]

export const quickStartSteps = [
  '先进入 12 周课程路径，设定当前学习周。',
  '在 Dashboard 勾选学习资源和项目任务。',
  '按课程推进 Mini GPT 项目。',
  '用 Interview Bank 练题。',
  '每周做一次 Mock Interview。',
  '在 Review 中导出错题复盘。',
  '在 Portfolio 中生成简历与项目讲稿。',
  '在 Learning Log 中生成公开学习周报。',
]

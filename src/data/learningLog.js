export const weeklyReportTemplates = [
  {
    id: 'weekly-report',
    label: '生成本周学习周报 Markdown',
    title: 'AI Lab 面试准备周报',
    description: '适合放到 GitHub、Notion 或个人周报里，记录学习、项目、面试训练和下周计划。',
  },
]

export const publicLogTemplates = [
  {
    id: 'public-log',
    label: '生成公开学习日志 Markdown',
    title: '我正在用 12 周准备 AI Lab 面试',
    description: '更适合发布到 GitHub Discussion、Notion、公众号草稿或博客。',
  },
  {
    id: 'social-short',
    label: '生成短版 X 更新',
    title: '短版 X / 即刻 / 小红书动态',
    description: '280 字以内中文，适合快速公开同步。',
  },
  {
    id: 'social-long',
    label: '生成长版 X 更新',
    title: '长版 X / 公众号短文',
    description: '包含学习内容、项目进展、卡点和下一步。',
  },
]

export const learningMilestoneTemplates = [
  { id: 'complete-resource', label: '完成一个资源页' },
  { id: 'complete-course-week', label: '完成一周课程' },
  { id: 'complete-mini-gpt-module', label: '完成 Mini GPT 一个模块' },
  { id: 'complete-mock-interview', label: '完成一次 Mock Interview' },
  { id: 'export-wrong-book', label: '导出一次错题复盘' },
  { id: 'complete-behavioral-story', label: '完成一个 Behavioral story' },
  { id: 'complete-portfolio-packet', label: '完成一次 Portfolio Packet' },
  { id: 'push-github-commit', label: '推送一次 GitHub commit' },
  { id: 'publish-public-log', label: '发布一次公开学习日志' },
]

export const publishChecklistItems = [
  { id: 'specific-learning', label: '本周学习内容是否具体' },
  { id: 'project-progress', label: '是否写了项目进展' },
  { id: 'verifiable-output', label: '是否包含一个可验证产出' },
  { id: 'avoid-overclaiming', label: '是否避免夸大' },
  { id: 'project-links', label: '是否加了项目链接' },
  { id: 'next-plan', label: '是否写了下周计划' },
  { id: 'public-safe', label: '是否适合公开发布' },
  { id: 'sync-platforms', label: '是否同步到 GitHub / Notion / X' },
]

export const suggestedLogSections = [
  {
    id: 'learned',
    label: '本周学了什么',
    placeholder: '例如：CS336 主线、Self-Attention、GRPO、Scaling、面试题复盘……',
  },
  {
    id: 'built',
    label: '本周实现了什么',
    placeholder: '例如：Mini GPT module、Learning Log 页面、Markdown 导出、测试或部署……',
  },
  {
    id: 'hardestProblem',
    label: '本周最难的问题',
    placeholder: '写下最卡的概念、代码、面试问题或项目取舍。',
  },
  {
    id: 'debugNotes',
    label: '本周 debug 记录',
    placeholder: '记录一个具体 bug：现象、排查、根因、修复、验证。',
  },
  {
    id: 'interviewPractice',
    label: '本周面试训练情况',
    placeholder: '例如：做了多少题、哪类题最弱、是否完成 mock interview。',
  },
  {
    id: 'keyTakeaway',
    label: '本周最重要的收获',
    placeholder: '用 1-3 句话总结这周真正掌握或看清楚的东西。',
  },
  {
    id: 'nextPlan',
    label: '下周计划',
    placeholder: '写下下周课程任务、项目任务、面试训练和求职材料计划。',
  },
]

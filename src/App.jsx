import { useEffect, useState } from 'react'
import roadmapHero from './assets/roadmap-hero.png'
import {
  capabilities,
  checklist,
  projectTasks,
  timelineSteps,
  weeks,
} from './data'
import {
  interviewProgressItems,
  miniGptProgressItems,
  resourcesProgressItems,
  weeklyPlanItems,
} from './data/progress'
import { mockInterviewModes, mockReviewPrompts } from './data/mockInterview'
import { projectsBySlug } from './data/projects'
import { interviewQuestions, questionCategories } from './data/questions'
import { resources, resourcesBySlug } from './data/resources'
import './App.css'

const STORAGE_KEY = 'openai-roadmap-progress'

const emptyProgress = {
  resourceCompletion: {},
  miniGptCompletion: {},
  weeklyCompletion: {},
  interviewCompletion: {},
  questionPracticed: {},
  questionMastered: {},
  lastMockInterview: null,
  lastExportedAt: null,
}

const navItems = [
  { label: '能力地图', href: '#capabilities' },
  { label: '学习路线', href: '#roadmap' },
  { label: '资源地图', href: '#resources' },
  { label: '12 周计划', href: '#plan' },
]

const baseDetailNavItems = [
  { id: 'positioning', label: '资源定位' },
  { id: 'goals', label: '学习目标' },
  { id: 'guide', label: '中文导读' },
  { id: 'lecture', label: '章节讲义', field: 'lectureSections' },
  { id: 'diagram', label: '概念结构图', field: 'structureDiagram' },
  { id: 'pseudocode', label: '最小伪代码', field: 'pseudocode' },
  { id: 'prep-matrix', label: '准备矩阵', field: 'interviewPrepMatrix' },
  { id: 'story-library', label: '故事库', field: 'behavioralStories' },
  { id: 'action-plan', label: '行动计划', field: 'weeklyJobPlan' },
  { id: 'review-template', label: '复盘模板', field: 'interviewReviewTemplate' },
  { id: 'concepts', label: '核心概念' },
  { id: 'glossary', label: '术语表' },
  { id: 'notes', label: '学习笔记' },
  { id: 'exercises', label: '代码练习' },
  { id: 'templates', label: '答题模板', field: 'interviewTemplates' },
  { id: 'questions', label: '面试问题' },
  { id: 'self-test', label: '自测题', field: 'selfTest' },
  { id: 'outputs', label: '学习产出' },
  { id: 'completion', label: '完成清单', field: 'completionChecklist' },
]

function hasItems(items) {
  return Array.isArray(items) && items.length > 0
}

function getDetailNavItems(resource) {
  return baseDetailNavItems.filter((item) => !item.field || hasItems(resource[item.field]))
}

function getRouteFromHash() {
  const resourceMatch = window.location.hash.match(/^#\/resources\/([^/?#]+)/)
  const projectMatch = window.location.hash.match(/^#\/projects\/([^/?#]+)/)
  const pageMatch = window.location.hash.match(/^#\/(dashboard|interview-bank|mock-interview|review)(?:[/?#]|$)/)

  return {
    resourceSlug: resourceMatch ? decodeURIComponent(resourceMatch[1]) : null,
    projectSlug: projectMatch ? decodeURIComponent(projectMatch[1]) : null,
    page: pageMatch ? pageMatch[1] : null,
  }
}

function useHashRoute() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return route
}

function readStoredProgress() {
  if (typeof window === 'undefined') {
    return emptyProgress
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? { ...emptyProgress, ...JSON.parse(stored) } : emptyProgress
  } catch {
    return emptyProgress
  }
}

function useLocalProgress() {
  const [progress, setProgress] = useState(readStoredProgress)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const toggleProgress = (bucket, id, checked) => {
    setProgress((current) => ({
      ...current,
      [bucket]: {
        ...current[bucket],
        [id]: checked,
      },
    }))
  }

  const toggleQuestionMastered = (id, checked) => {
    setProgress((current) => ({
      ...current,
      questionPracticed: checked
        ? { ...current.questionPracticed, [id]: true }
        : current.questionPracticed,
      questionMastered: {
        ...current.questionMastered,
        [id]: checked,
      },
    }))
  }

  const resetProgress = () => {
    if (!window.confirm('确定要重置本项目的本地学习进度吗？')) {
      return
    }

    window.localStorage.removeItem(STORAGE_KEY)
    setProgress(emptyProgress)
  }

  const saveMockInterview = (result) => {
    setProgress((current) => ({
      ...current,
      lastMockInterview: result,
    }))
  }

  const recordExport = () => {
    setProgress((current) => ({
      ...current,
      lastExportedAt: new Date().toISOString(),
    }))
  }

  return { progress, recordExport, resetProgress, saveMockInterview, toggleProgress, toggleQuestionMastered }
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首页顶部">
        <span className="brand-mark" aria-hidden="true">
          AI
        </span>
        <span>AI Lab Roadmap</span>
      </a>
      <nav aria-label="页面导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function DetailSection({ id, title, children }) {
  return (
    <section id={id} className="detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function TermTable({ terms }) {
  return (
    <div className="term-table">
      {terms.map((item) => (
        <div className="term-row" key={item.term}>
          <dt>{item.term}</dt>
          <dd>{item.explanation}</dd>
        </div>
      ))}
    </div>
  )
}

function LectureSections({ sections }) {
  return (
    <div className="lecture-list">
      {sections.map((section, index) => (
        <article className="lecture-card" key={section.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{section.title}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ))}
    </div>
  )
}

function StructureDiagram({ lines }) {
  return (
    <div className="structure-diagram" role="img" aria-label="文字概念结构图">
      {lines.map((line) => (
        <div key={line}>{line}</div>
      ))}
    </div>
  )
}

function PseudocodeBlocks({ blocks }) {
  return (
    <div className="pseudocode-list">
      {blocks.map((block) => (
        <article className="code-card" key={block.title}>
          <h3>{block.title}</h3>
          <pre>
            <code>{block.code}</code>
          </pre>
        </article>
      ))}
    </div>
  )
}

function InterviewPrepMatrix({ items }) {
  return (
    <div className="prep-matrix">
      {items.map((item) => (
        <article className="matrix-card" key={item.type}>
          <h3>{item.type}</h3>
          <dl>
            <div>
              <dt>考察内容</dt>
              <dd>{item.focus}</dd>
            </div>
            <div>
              <dt>准备方式</dt>
              <dd>{item.preparation}</dd>
            </div>
            <div>
              <dt>推荐产出</dt>
              <dd>{item.output}</dd>
            </div>
            <div>
              <dt>对应站内资源页</dt>
              <dd>
                {item.resourceHref ? (
                  <a href={item.resourceHref}>{item.resource}</a>
                ) : (
                  item.resource
                )}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  )
}

function BehavioralStoryLibrary({ stories }) {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <article className="story-card" key={story.title}>
          <h3>{story.title}</h3>
          <dl>
            <div>
              <dt>场景</dt>
              <dd>{story.situation}</dd>
            </div>
            <div>
              <dt>冲突/挑战</dt>
              <dd>{story.challenge}</dd>
            </div>
            <div>
              <dt>行动</dt>
              <dd>{story.action}</dd>
            </div>
            <div>
              <dt>结果</dt>
              <dd>{story.result}</dd>
            </div>
            <div>
              <dt>突出能力</dt>
              <dd>{story.signal}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  )
}

function WeeklyJobPlan({ weeks }) {
  return (
    <div className="job-plan-list">
      {weeks.map((week) => (
        <article className="job-plan-card" key={week.week}>
          <p>{week.week}</p>
          <h3>{week.focus}</h3>
          <BulletList items={week.actions} />
          <strong>{week.output}</strong>
        </article>
      ))}
    </div>
  )
}

function InterviewReviewTemplate({ fields }) {
  return (
    <div className="review-template-list">
      {fields.map((field) => (
        <article className="review-template-card" key={field.label}>
          <h3>{field.label}</h3>
          <p>{field.prompt}</p>
        </article>
      ))}
    </div>
  )
}

function InterviewTemplates({ templates }) {
  return (
    <div className="template-list">
      {templates.map((item) => (
        <article className="template-card" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  )
}

function SelfTest({ items }) {
  return (
    <div className="self-test-list">
      {items.map((item) => (
        <article className="self-test-card" key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </div>
  )
}

function CompletionChecklist({ items }) {
  return (
    <div className="completion-list">
      {items.map((item) => (
        <label key={item} className="completion-item">
          <input type="checkbox" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

function countCompleted(items, bucket) {
  return items.filter((item) => bucket[item.id]).length
}

function shuffleItems(items) {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    const current = shuffled[index]
    shuffled[index] = shuffled[swapIndex]
    shuffled[swapIndex] = current
  }
  return shuffled
}

function selectMockQuestions(mode) {
  const selected = []
  const seenIds = new Set()
  const addQuestion = (question) => {
    if (selected.length >= mode.count || seenIds.has(question.id)) {
      return
    }

    selected.push(question)
    seenIds.add(question.id)
  }

  const prioritized = mode.categories
    ? interviewQuestions.filter((question) => mode.categories.includes(question.category))
    : interviewQuestions

  shuffleItems(prioritized).forEach(addQuestion)
  shuffleItems(interviewQuestions).forEach(addQuestion)

  return selected
}

function getCategoryDistribution(questions) {
  return questions.reduce((distribution, question) => {
    distribution[question.category] = (distribution[question.category] || 0) + 1
    return distribution
  }, {})
}

function getSuggestedResources(questions) {
  const resourcesMap = new Map()
  questions.forEach((question) => {
    resourcesMap.set(question.resourceHref, question.resourceLabel)
  })
  return [...resourcesMap.entries()].map(([href, label]) => ({ href, label }))
}

function formatDateTime(value) {
  if (!value) {
    return '暂无记录'
  }

  return new Date(value).toLocaleString('zh-CN')
}

function getMockModeName(modeId) {
  return mockInterviewModes.find((mode) => mode.id === modeId)?.name || '暂无记录'
}

function getQuestionsByIds(ids = []) {
  const questionMap = new Map(interviewQuestions.map((question) => [question.id, question]))
  return ids.map((id) => questionMap.get(id)).filter(Boolean)
}

function getReviewQuestions(progress) {
  const recentWeakIds = new Set(progress.lastMockInterview?.weakIds || [])
  const reviewMap = new Map()

  interviewQuestions.forEach((question) => {
    const practiced = Boolean(progress.questionPracticed[question.id])
    const mastered = Boolean(progress.questionMastered[question.id])
    const isPracticedWeak = practiced && !mastered
    const isRecentWeak = recentWeakIds.has(question.id)
    const isUnpracticedAdvanced = !practiced && question.difficulty === '高阶'

    if (isPracticedWeak || isRecentWeak || isUnpracticedAdvanced) {
      reviewMap.set(question.id, {
        ...question,
        reviewReason: [
          isPracticedWeak ? '已练习但未掌握' : null,
          isRecentWeak ? '最近一次 Mock Interview 未掌握' : null,
          isUnpracticedAdvanced ? '未练习的高阶题' : null,
        ].filter(Boolean),
      })
    }
  })

  return [...reviewMap.values()]
}

function markdownCheckbox(label, completed) {
  return `- [${completed ? 'x' : ' '}] ${label}`
}

function buildLearningProgressMarkdown(progress) {
  const generatedAt = formatDateTime(new Date().toISOString())
  const resourceLines = resourcesProgressItems.map((item) => markdownCheckbox(item.title, progress.resourceCompletion[item.id]))
  const miniGptLines = miniGptProgressItems.map((item) => markdownCheckbox(item.title, progress.miniGptCompletion[item.id]))
  const weekLines = weeklyPlanItems.map((item) => markdownCheckbox(item.title, progress.weeklyCompletion[item.id]))
  const interviewLines = interviewProgressItems.map((item) => markdownCheckbox(item.title, progress.interviewCompletion[item.id]))

  return [
    '# OpenAI / AI Lab 学习进度复盘',
    '',
    `生成时间：${generatedAt}`,
    '',
    '## 资源页进度',
    ...resourceLines,
    '',
    '## Mini GPT 项目进度',
    ...miniGptLines,
    '',
    '## 12 周计划进度',
    ...weekLines,
    '',
    '## 面试准备进度',
    ...interviewLines,
  ].join('\n')
}

function buildWrongBookMarkdown(questions) {
  const questionBlocks = questions.length > 0
    ? questions.map((question, index) => [
        `### ${index + 1}. ${question.question}`,
        '',
        `- 分类：${question.category}`,
        `- 难度：${question.difficulty}`,
        `- 复盘来源：${question.reviewReason.join(' / ')}`,
        `- 考察点：${question.focus}`,
        `- 推荐回答思路：${question.answer}`,
        `- 相关学习页：[${question.resourceLabel}](${question.resourceHref})`,
      ].join('\n'))
    : ['暂无错题。可以先去题库或 Mock Interview 完成一轮练习。']

  return [
    '# AI Lab 面试错题本',
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    '',
    '## 未掌握题列表',
    ...questionBlocks,
    '',
    '## 下一步学习建议',
    '- 先回看相关学习页，把概念补到能用 2 分钟讲清楚。',
    '- 针对每道题写出一个结构化回答：背景 -> 核心机制 -> 例子 -> trade-off -> 验证方式。',
    '- 下一次 Mock Interview 优先选择包含这些分类的模式。',
  ].join('\n')
}

function buildMockInterviewMarkdown(progress) {
  const lastMock = progress.lastMockInterview
  if (!lastMock) {
    return [
      '# 最近一次 Mock Interview 复盘',
      '',
      `生成时间：${formatDateTime(new Date().toISOString())}`,
      '',
      '暂无最近一次 Mock Interview 记录。请先完成一场模拟面试。',
    ].join('\n')
  }

  const questions = getQuestionsByIds(lastMock.questionIds)
  const masteredQuestions = getQuestionsByIds(lastMock.masteredIds)
  const weakQuestions = getQuestionsByIds(lastMock.weakIds)
  const distribution = getCategoryDistribution(questions)

  return [
    '# 最近一次 Mock Interview 复盘',
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    `模式：${getMockModeName(lastMock.mode)}`,
    `完成时间：${formatDateTime(lastMock.completedAt)}`,
    '',
    '## 题目列表',
    ...questions.map((question, index) => `- ${index + 1}. [${question.category} / ${question.difficulty}] ${question.question}`),
    '',
    '## 分类分布',
    ...Object.entries(distribution).map(([category, count]) => `- ${category}：${count}`),
    '',
    '## 已掌握题',
    ...(masteredQuestions.length > 0 ? masteredQuestions.map((question) => `- ${question.question}`) : ['- 暂无']),
    '',
    '## 未掌握题',
    ...(weakQuestions.length > 0 ? weakQuestions.map((question) => `- ${question.question}`) : ['- 暂无']),
    '',
    '## 复盘模板',
    '- 本次最卡的问题：',
    '- 哪个概念不熟：',
    '- 哪个回答可以更结构化：',
    '- 需要补的资源页：',
    '- 下一次练习目标：',
  ].join('\n')
}

function ProgressCheckbox({ checked, label, onChange }) {
  return (
    <label className={checked ? 'progress-checkbox is-checked' : 'progress-checkbox'}>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  )
}

function DashboardStat({ label, value }) {
  return (
    <article className="dashboard-stat-card">
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  )
}

function ResourceProgressList({ items, progress, onToggle }) {
  return (
    <div className="progress-list">
      {items.map((item) => (
        <article className={progress[item.id] ? 'progress-row is-complete' : 'progress-row'} key={item.id}>
          <ProgressCheckbox
            checked={Boolean(progress[item.id])}
            label={item.title}
            onChange={(checked) => onToggle('resourceCompletion', item.id, checked)}
          />
          <div className="progress-meta">
            <span>{item.type}</span>
            <a href={item.href}>站内学习</a>
          </div>
        </article>
      ))}
    </div>
  )
}

function MiniGptProgressList({ items, progress, onToggle }) {
  return (
    <div className="progress-list">
      {items.map((item) => (
        <article className={progress[item.id] ? 'progress-row is-complete' : 'progress-row'} key={item.id}>
          <ProgressCheckbox
            checked={Boolean(progress[item.id])}
            label={item.title}
            onChange={(checked) => onToggle('miniGptCompletion', item.id, checked)}
          />
          <div className="progress-meta">
            <a href={item.projectHref}>项目页</a>
            <a href={item.resourceHref}>{item.resourceLabel}</a>
          </div>
        </article>
      ))}
    </div>
  )
}

function SimpleProgressList({ items, progress, bucket, onToggle }) {
  return (
    <div className="progress-list compact-progress-list">
      {items.map((item) => (
        <article className={progress[item.id] ? 'progress-row is-complete' : 'progress-row'} key={item.id}>
          <ProgressCheckbox
            checked={Boolean(progress[item.id])}
            label={item.title}
            onChange={(checked) => onToggle(bucket, item.id, checked)}
          />
        </article>
      ))}
    </div>
  )
}

function DashboardPage({ progress, onToggle, onReset }) {
  const completedResources = countCompleted(resourcesProgressItems, progress.resourceCompletion)
  const completedMiniGpt = countCompleted(miniGptProgressItems, progress.miniGptCompletion)
  const completedWeeks = countCompleted(weeklyPlanItems, progress.weeklyCompletion)
  const practicedQuestions = countCompleted(interviewQuestions, progress.questionPracticed)

  return (
    <main className="detail-page dashboard-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V5A Dashboard</p>
        <h1>学习进度 Dashboard</h1>
        <span>把 OpenAI / AI Lab 面试准备拆成可追踪的学习任务、项目任务和面试训练任务。</span>
        <div className="detail-actions">
          <a className="button primary" href="#/interview-bank">
            进入面试题库
          </a>
          <a className="button primary" href="#/mock-interview">
            开始一次 Mock Interview
          </a>
          <a className="button secondary" href="#/review">
            查看错题复盘
          </a>
          <button className="button secondary" type="button" onClick={onReset}>
            重置本地进度
          </button>
        </div>
      </section>

      <div className="project-detail-content">
        <DetailSection id="dashboard-overview" title="总览">
          <div className="dashboard-stat-grid">
            <DashboardStat label="已完成资源页" value={`${completedResources} / ${resourcesProgressItems.length}`} />
            <DashboardStat label="Mini GPT 项目任务" value={`${completedMiniGpt} / ${miniGptProgressItems.length}`} />
            <DashboardStat label="面试题练习数" value={`${practicedQuestions} / ${interviewQuestions.length}`} />
            <DashboardStat label="12 周计划完成" value={`${completedWeeks} / 12`} />
          </div>
        </DetailSection>

        <DetailSection id="resource-progress" title="学习资源进度">
          <ResourceProgressList items={resourcesProgressItems} progress={progress.resourceCompletion} onToggle={onToggle} />
        </DetailSection>

        <DetailSection id="mini-gpt-progress" title="Mini GPT 项目进度">
          <MiniGptProgressList items={miniGptProgressItems} progress={progress.miniGptCompletion} onToggle={onToggle} />
        </DetailSection>

        <DetailSection id="weekly-progress" title="12 周计划进度">
          <SimpleProgressList items={weeklyPlanItems} progress={progress.weeklyCompletion} bucket="weeklyCompletion" onToggle={onToggle} />
        </DetailSection>

        <DetailSection id="interview-progress" title="面试准备进度">
          <SimpleProgressList items={interviewProgressItems} progress={progress.interviewCompletion} bucket="interviewCompletion" onToggle={onToggle} />
        </DetailSection>
      </div>
    </main>
  )
}

function QuestionCard({ question, practiced, mastered, onPracticedChange, onMasteredChange }) {
  return (
    <article className={mastered ? 'question-card is-mastered' : practiced ? 'question-card is-practiced' : 'question-card'}>
      <div className="question-card-head">
        <span>{question.category}</span>
        <strong>{question.difficulty}</strong>
      </div>
      <h3>{question.question}</h3>
      <dl>
        <div>
          <dt>考察点</dt>
          <dd>{question.focus}</dd>
        </div>
        <div>
          <dt>推荐回答思路</dt>
          <dd>{question.answer}</dd>
        </div>
      </dl>
      <a className="question-resource-link" href={question.resourceHref}>
        {question.resourceLabel}
      </a>
      <div className="question-status-row">
        <ProgressCheckbox checked={practiced} label="已练习" onChange={onPracticedChange} />
        <ProgressCheckbox checked={mastered} label="已掌握" onChange={onMasteredChange} />
      </div>
    </article>
  )
}

function InterviewBankPage({ progress, onToggle, onToggleMastered }) {
  const [category, setCategory] = useState('全部')
  const [search, setSearch] = useState('')
  const practicedCount = countCompleted(interviewQuestions, progress.questionPracticed)
  const masteredCount = countCompleted(interviewQuestions, progress.questionMastered)
  const normalizedSearch = search.trim().toLowerCase()
  const filteredQuestions = interviewQuestions.filter((item) => {
    const categoryMatches = category === '全部' || item.category === category
    const searchText = `${item.question} ${item.focus} ${item.category} ${item.answer}`.toLowerCase()
    return categoryMatches && (!normalizedSearch || searchText.includes(normalizedSearch))
  })

  return (
    <main className="detail-page interview-bank-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V5A Interview Bank</p>
        <h1>AI Lab 面试题库</h1>
        <span>围绕 ML Coding、Technical Discussion、Research Discussion、Behavioral 和 Project Pitch 进行系统训练。</span>
        <div className="detail-actions">
          <a className="button primary" href="#/dashboard">
            查看学习进度
          </a>
          <a className="button primary" href="#/mock-interview">
            用当前题库开始 Mock Interview
          </a>
          <a className="button secondary" href="#/projects/mini-gpt">
            Mini GPT 项目
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <DetailSection id="question-stats" title="题库统计">
          <div className="dashboard-stat-grid">
            <DashboardStat label="总题数" value={interviewQuestions.length} />
            <DashboardStat label="已练习题数" value={practicedCount} />
            <DashboardStat label="已掌握题数" value={masteredCount} />
            <DashboardStat label="未练习题数" value={interviewQuestions.length - practicedCount} />
          </div>
        </DetailSection>

        <DetailSection id="question-bank" title="题目训练">
          <div className="question-toolbar">
            <input
              aria-label="搜索题目"
              className="question-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="搜索题目、考察点、分类"
            />
            <div className="question-filter-row" aria-label="题库分类筛选">
              {questionCategories.map((item) => (
                <button className={item === category ? 'is-active' : ''} key={item} type="button" onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="question-result-meta">当前显示 {filteredQuestions.length} 道题</div>
          <div className="question-grid">
            {filteredQuestions.map((item) => (
              <QuestionCard
                key={item.id}
                question={item}
                practiced={Boolean(progress.questionPracticed[item.id])}
                mastered={Boolean(progress.questionMastered[item.id])}
                onPracticedChange={(checked) => onToggle('questionPracticed', item.id, checked)}
                onMasteredChange={(checked) => onToggleMastered(item.id, checked)}
              />
            ))}
          </div>
        </DetailSection>
      </div>
    </main>
  )
}

function MockModeSelection({ onStart, lastMockInterview }) {
  return (
    <div className="project-detail-content">
      <DetailSection id="mock-mode" title="选择模拟模式">
        <div className="mock-mode-grid">
          {mockInterviewModes.map((mode) => (
            <article className="mock-mode-card" key={mode.id}>
              <p>{mode.count} 道题 · {mode.scope}</p>
              <h3>{mode.name}</h3>
              <span>{mode.description}</span>
              <button className="button primary" type="button" onClick={() => onStart(mode)}>
                开始{mode.name}
              </button>
            </article>
          ))}
        </div>
      </DetailSection>

      {lastMockInterview ? (
        <DetailSection id="last-mock" title="最近一次模拟记录">
          <div className="last-mock-card">
            <div>
              <p>模式：{mockInterviewModes.find((mode) => mode.id === lastMockInterview.mode)?.name || lastMockInterview.mode}</p>
              <p>完成时间：{new Date(lastMockInterview.completedAt).toLocaleString('zh-CN')}</p>
            </div>
            <div className="dashboard-stat-grid compact-stat-grid">
              <DashboardStat label="题目数" value={lastMockInterview.questionIds.length} />
              <DashboardStat label="已掌握" value={lastMockInterview.masteredIds.length} />
              <DashboardStat label="待补强" value={lastMockInterview.weakIds.length} />
            </div>
          </div>
        </DetailSection>
      ) : null}
    </div>
  )
}

function MockQuestionPanel({
  currentIndex,
  onEnd,
  onMarkMastered,
  onMarkPracticed,
  onMove,
  practiced,
  mastered,
  question,
  questions,
  showAnswer,
  toggleAnswer,
}) {
  return (
    <div className="project-detail-content">
      <DetailSection id="mock-question" title={`第 ${currentIndex + 1} 题 / 共 ${questions.length} 题`}>
        <article className="mock-question-card">
          <div className="question-card-head">
            <span>{question.category}</span>
            <strong>{question.difficulty}</strong>
          </div>
          <h3>{question.question}</h3>
          <dl>
            <div>
              <dt>考察点</dt>
              <dd>{question.focus}</dd>
            </div>
          </dl>
          <button className="button secondary answer-toggle" type="button" onClick={toggleAnswer}>
            {showAnswer ? '隐藏回答思路' : '显示回答思路'}
          </button>
          {showAnswer ? (
            <div className="mock-answer-box">
              <p>{question.answer}</p>
              <a href={question.resourceHref}>{question.resourceLabel}</a>
            </div>
          ) : null}
        </article>

        <div className="mock-control-row">
          <button className="button secondary" type="button" disabled={currentIndex === 0} onClick={() => onMove(-1)}>
            上一题
          </button>
          <button className="button secondary" type="button" disabled={currentIndex === questions.length - 1} onClick={() => onMove(1)}>
            下一题
          </button>
          <button className={practiced ? 'button primary' : 'button secondary'} type="button" onClick={onMarkPracticed}>
            {practiced ? '已练习' : '标记已练习'}
          </button>
          <button className={mastered ? 'button primary' : 'button secondary'} type="button" onClick={onMarkMastered}>
            {mastered ? '已掌握' : '标记已掌握'}
          </button>
          <button className="button primary" type="button" onClick={onEnd}>
            结束并复盘
          </button>
        </div>
      </DetailSection>
    </div>
  )
}

function MockReviewPage({ mode, questions, progress, result, onRestart }) {
  const distribution = getCategoryDistribution(questions)
  const weakQuestions = questions.filter((question) => result.weakIds.includes(question.id))
  const suggestedResources = getSuggestedResources(weakQuestions.length > 0 ? weakQuestions : questions)

  return (
    <div className="project-detail-content">
      <DetailSection id="mock-review" title="本次模拟面试复盘">
        <div className="dashboard-stat-grid">
          <DashboardStat label="模式" value={mode.name} />
          <DashboardStat label="题目数" value={questions.length} />
          <DashboardStat label="标记已掌握" value={result.masteredIds.length} />
          <DashboardStat label="待补强题目" value={result.weakIds.length} />
        </div>

        <div className="mock-review-grid">
          <article className="mock-review-card">
            <h3>分类分布</h3>
            <div className="concept-cloud">
              {Object.entries(distribution).map(([category, count]) => (
                <span key={category}>{category} · {count}</span>
              ))}
            </div>
          </article>

          <article className="mock-review-card">
            <h3>建议补习的学习页</h3>
            <div className="mock-resource-list">
              {suggestedResources.map((resource) => (
                <a href={resource.href} key={resource.href}>
                  {resource.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </DetailSection>

      <DetailSection id="mock-question-list" title="本次模拟面试题目列表">
        <div className="mock-question-list">
          {questions.map((question, index) => (
            <article className={progress.questionMastered[question.id] ? 'mock-list-item is-mastered' : 'mock-list-item'} key={question.id}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{question.question}</h3>
                <p>{question.category} · {question.difficulty}</p>
              </div>
              <strong>{progress.questionMastered[question.id] ? '已掌握' : '待补强'}</strong>
            </article>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="mock-weak-list" title="未掌握题目列表">
        {weakQuestions.length > 0 ? (
          <div className="mock-question-list">
            {weakQuestions.map((question) => (
              <article className="mock-list-item" key={question.id}>
                <span>{question.category}</span>
                <div>
                  <h3>{question.question}</h3>
                  <p>{question.focus}</p>
                </div>
                <a href={question.resourceHref}>补习</a>
              </article>
            ))}
          </div>
        ) : (
          <p>本次题目都已标记掌握。下一步可以换一个模式，或者提升回答速度和结构化程度。</p>
        )}
      </DetailSection>

      <DetailSection id="mock-review-template" title="面试复盘模板">
        <InterviewReviewTemplate fields={mockReviewPrompts} />
        <div className="detail-actions">
          <a className="button primary" href="#/review?export=mock">
            导出本次复盘
          </a>
          <a className="button secondary" href="#/review">
            查看完整错题本
          </a>
          <button className="button primary" type="button" onClick={onRestart}>
            再来一场
          </button>
          <a className="button secondary" href="#/dashboard">
            回到 Dashboard
          </a>
        </div>
      </DetailSection>
    </div>
  )
}

function MockInterviewPage({ progress, onSaveMockInterview, onToggle, onToggleMastered }) {
  const [session, setSession] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [reviewResult, setReviewResult] = useState(null)
  const currentQuestion = session?.questions[currentIndex]

  const startSession = (mode) => {
    setSession({ mode, questions: selectMockQuestions(mode) })
    setCurrentIndex(0)
    setShowAnswer(false)
    setReviewResult(null)
  }

  const moveQuestion = (direction) => {
    setCurrentIndex((index) => Math.min(Math.max(index + direction, 0), session.questions.length - 1))
    setShowAnswer(false)
  }

  const finishSession = () => {
    const questionIds = session.questions.map((question) => question.id)
    const masteredIds = questionIds.filter((id) => progress.questionMastered[id])
    const weakIds = questionIds.filter((id) => !progress.questionMastered[id])
    const result = {
      mode: session.mode.id,
      questionIds,
      completedAt: new Date().toISOString(),
      masteredIds,
      weakIds,
    }

    onSaveMockInterview(result)
    setReviewResult(result)
  }

  return (
    <main className="detail-page mock-interview-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V5B Mock Interview</p>
        <h1>Mock Interview</h1>
        <span>从题库中抽取问题，模拟 OpenAI / AI Lab 面试流程，训练回答结构、项目表达和复盘能力。</span>
        <div className="detail-actions">
          <a className="button secondary" href="#/interview-bank">
            查看题库
          </a>
          <a className="button secondary" href="#/dashboard">
            学习进度
          </a>
        </div>
      </section>

      {!session ? (
        <MockModeSelection lastMockInterview={progress.lastMockInterview} onStart={startSession} />
      ) : reviewResult ? (
        <MockReviewPage
          mode={session.mode}
          progress={progress}
          questions={session.questions}
          result={reviewResult}
          onRestart={() => {
            setSession(null)
            setReviewResult(null)
          }}
        />
      ) : (
        <MockQuestionPanel
          currentIndex={currentIndex}
          mastered={Boolean(progress.questionMastered[currentQuestion.id])}
          practiced={Boolean(progress.questionPracticed[currentQuestion.id])}
          question={currentQuestion}
          questions={session.questions}
          showAnswer={showAnswer}
          onEnd={finishSession}
          onMarkMastered={() => onToggleMastered(currentQuestion.id, true)}
          onMarkPracticed={() => onToggle('questionPracticed', currentQuestion.id, true)}
          onMove={moveQuestion}
          toggleAnswer={() => setShowAnswer((visible) => !visible)}
        />
      )}
    </main>
  )
}

function getInitialExportType() {
  if (typeof window !== 'undefined' && window.location.hash.includes('export=mock')) {
    return 'mock'
  }

  return 'progress'
}

function ReviewQuestionCard({ question, onMaster }) {
  return (
    <article className="review-question-card">
      <div className="question-card-head">
        <span>{question.category}</span>
        <strong>{question.difficulty}</strong>
      </div>
      <h3>{question.question}</h3>
      <dl>
        <div>
          <dt>复盘来源</dt>
          <dd>{question.reviewReason.join(' / ')}</dd>
        </div>
        <div>
          <dt>考察点</dt>
          <dd>{question.focus}</dd>
        </div>
        <div>
          <dt>推荐回答思路</dt>
          <dd>{question.answer}</dd>
        </div>
      </dl>
      <div className="review-card-actions">
        <a className="question-resource-link" href={question.resourceHref}>
          {question.resourceLabel}
        </a>
        <button className="button primary" type="button" onClick={() => onMaster(question.id, true)}>
          标记已掌握
        </button>
        <a className="button secondary" href="#/interview-bank">
          返回题库查看
        </a>
      </div>
    </article>
  )
}

function ReviewSummary({ progress, reviewQuestions }) {
  const completedResources = countCompleted(resourcesProgressItems, progress.resourceCompletion)
  const completedMiniGpt = countCompleted(miniGptProgressItems, progress.miniGptCompletion)
  const completedWeeks = countCompleted(weeklyPlanItems, progress.weeklyCompletion)
  const practicedQuestions = countCompleted(interviewQuestions, progress.questionPracticed)
  const masteredQuestions = countCompleted(interviewQuestions, progress.questionMastered)
  const lastMock = progress.lastMockInterview

  return (
    <div className="dashboard-stat-grid review-stat-grid">
      <DashboardStat label="资源页完成" value={`${completedResources} / ${resourcesProgressItems.length}`} />
      <DashboardStat label="Mini GPT 模块" value={`${completedMiniGpt} / ${miniGptProgressItems.length}`} />
      <DashboardStat label="12 周计划" value={`${completedWeeks} / 12`} />
      <DashboardStat label="已练习题" value={`${practicedQuestions} / ${interviewQuestions.length}`} />
      <DashboardStat label="已掌握题" value={`${masteredQuestions} / ${interviewQuestions.length}`} />
      <DashboardStat label="错题本题数" value={reviewQuestions.length} />
      <DashboardStat label="最近 Mock 模式" value={lastMock ? getMockModeName(lastMock.mode) : '暂无'} />
      <DashboardStat label="最近 weak 数" value={lastMock ? lastMock.weakIds.length : 0} />
    </div>
  )
}

function MarkdownExportPanel({ markdown, onCopy, onSelect, selectedType, status }) {
  const exportOptions = [
    { id: 'progress', label: '导出学习进度 Markdown' },
    { id: 'wrong', label: '导出错题本 Markdown' },
    { id: 'mock', label: '导出最近一次 Mock Interview 复盘 Markdown' },
  ]

  return (
    <div className="markdown-export-panel">
      <div className="markdown-export-actions">
        {exportOptions.map((option) => (
          <button
            className={selectedType === option.id ? 'button primary' : 'button secondary'}
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="markdown-output-head">
        <p>Markdown 输出</p>
        <button className="button primary" type="button" onClick={onCopy}>
          复制 Markdown
        </button>
      </div>
      {status ? <div className="copy-status">{status}</div> : null}
      <textarea className="markdown-output" readOnly value={markdown} aria-label="Markdown 导出内容" />
    </div>
  )
}

function ReviewPage({ progress, onRecordExport, onToggleMastered }) {
  const [exportType, setExportType] = useState(getInitialExportType)
  const [copyStatus, setCopyStatus] = useState('')
  const reviewQuestions = getReviewQuestions(progress)
  const lastMock = progress.lastMockInterview
  const markdownByType = {
    progress: buildLearningProgressMarkdown(progress),
    wrong: buildWrongBookMarkdown(reviewQuestions),
    mock: buildMockInterviewMarkdown(progress),
  }
  const selectedMarkdown = markdownByType[exportType]

  const selectExportType = (type) => {
    setExportType(type)
    setCopyStatus('已生成，可复制或手动选中文本')
    onRecordExport()
  }

  const copyMarkdown = async () => {
    onRecordExport()
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('已生成，可手动复制')
      return
    }

    try {
      await navigator.clipboard.writeText(selectedMarkdown)
      setCopyStatus('已复制')
    } catch {
      setCopyStatus('复制失败，可手动复制')
    }
  }

  return (
    <main className="detail-page review-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V5C Review</p>
        <h1>错题复盘与导出</h1>
        <span>把未掌握问题、最近一次模拟面试和学习进度整理成可复制的 Markdown 复盘文档。</span>
        <div className="detail-actions">
          <a className="button secondary" href="#/interview-bank">
            返回题库
          </a>
          <a className="button secondary" href="#/mock-interview">
            开始模拟面试
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <DetailSection id="review-summary" title="复盘摘要">
          <ReviewSummary progress={progress} reviewQuestions={reviewQuestions} />
          <div className="review-summary-note">
            <p>最近一次 Mock Interview 时间：{formatDateTime(lastMock?.completedAt)}</p>
            <p>最近一次导出时间：{formatDateTime(progress.lastExportedAt)}</p>
          </div>
        </DetailSection>

        <DetailSection id="wrong-book" title="错题本">
          {reviewQuestions.length > 0 ? (
            <div className="review-question-grid">
              {reviewQuestions.map((question) => (
                <ReviewQuestionCard key={question.id} question={question} onMaster={onToggleMastered} />
              ))}
            </div>
          ) : (
            <p>当前没有错题记录。可以先去题库练习几道题，或者完成一次 Mock Interview。</p>
          )}
        </DetailSection>

        <DetailSection id="markdown-export" title="Markdown 导出">
          <MarkdownExportPanel
            markdown={selectedMarkdown}
            selectedType={exportType}
            status={copyStatus}
            onCopy={copyMarkdown}
            onSelect={selectExportType}
          />
        </DetailSection>
      </div>
    </main>
  )
}

function ProjectModuleRoadmap({ modules }) {
  return (
    <div className="module-roadmap">
      {modules.map((item) => (
        <article className="module-card" key={item.module}>
          <p>{item.module}</p>
          <h3>{item.title}</h3>
          <dl>
            <div>
              <dt>任务</dt>
              <dd>{item.task}</dd>
            </div>
            <div>
              <dt>对应学习页</dt>
              <dd className="module-links">
                {item.resources.map((resource) => (
                  <a key={resource.href} href={resource.href}>
                    {resource.label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt>产出</dt>
              <dd>{item.outputs.join('、')}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  )
}

function RepoTree({ lines }) {
  return (
    <pre className="repo-tree" aria-label="推荐项目目录结构">
      <code>{lines.join('\n')}</code>
    </pre>
  )
}

function RelatedLearningPages({ resources }) {
  return (
    <div className="related-learning-grid">
      {resources.map((resource) => (
        <a className="related-learning-card" href={resource.href} key={resource.href}>
          {resource.label}
        </a>
      ))}
    </div>
  )
}

function CodeCapabilities({ items }) {
  return (
    <div className="code-capability-grid">
      {items.map((item) => (
        <div className="code-capability-card" key={item}>
          <span aria-hidden="true"></span>
          {item}
        </div>
      ))}
    </div>
  )
}

function RunCommands({ commands }) {
  return (
    <pre className="run-command-block" aria-label="代码项目运行命令">
      <code>{commands.join('\n')}</code>
    </pre>
  )
}

function PitchCards({ items }) {
  return (
    <div className="pitch-card-list">
      {items.map((item) => (
        <article className="pitch-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  )
}

function scrollToDetailSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function CapabilityMap() {
  return (
    <section className="section" id="capabilities">
      <SectionHeading
        eyebrow="Interview Capability Map"
        title="面试能力地图"
        description="从写得出、讲得清，到能把研究判断放进真实团队语境里。"
      />
      <div className="capability-grid">
        {capabilities.map((capability, index) => (
          <article className="capability-card" key={capability.title}>
            <div className="card-index">{String(index + 1).padStart(2, '0')}</div>
            <h3>{capability.title}</h3>
            <p>{capability.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function RoadmapTimeline() {
  return (
    <section className="section roadmap-section" id="roadmap">
      <SectionHeading
        eyebrow="Learning Path"
        title="学习路线"
        description="先广度建立，再深入实现，最后转化成面试讨论和项目展示。"
      />
      <div className="timeline">
        {timelineSteps.map((item) => (
          <article className="timeline-item" key={item.step}>
            <div className="timeline-marker">{item.step.replace('Step ', '')}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ResourceCards() {
  return (
    <section className="section" id="resources">
      <SectionHeading
        eyebrow="Resource Map"
        title="学习资源卡片"
        description="每个资源都对应一个面试准备缺口。先进入站内中文导读，再按需打开原文深读。"
      />
      <div className="resource-grid">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.slug}>
            <div>
              <p className="stage">{resource.stage}</p>
              <h3>{resource.name}</h3>
            </div>
            <dl>
              <div>
                <dt>解决什么问题</dt>
                <dd>{resource.problem}</dd>
              </div>
              <div>
                <dt>学习建议</dt>
                <dd>{resource.advice}</dd>
              </div>
            </dl>
            <div className="resource-actions">
              <a className="resource-link primary-link" href={`#/resources/${resource.slug}`}>
                站内学习
              </a>
              <a className="resource-link secondary-link" href={resource.link} target="_blank" rel="noreferrer">
                查看原文
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PracticeProject() {
  return (
    <section className="section project-section" id="project">
      <div>
        <SectionHeading
          eyebrow="Practice Project"
          title="推荐实践项目：Mini GPT from Scratch"
          description="用一个小而完整的项目，把理论、代码、debug 和表达能力接起来。"
        />
        <p className="project-copy">
          目标不是追求大参数量，而是把每个关键组件写到自己能解释 shape、梯度、采样策略和失败模式。
        </p>
        <div className="project-actions">
          <a className="resource-link primary-link" href="#/projects/mini-gpt">
            开始项目
          </a>
          <a className="resource-link secondary-link" href="https://github.com/conanxin/mini-gpt-from-scratch" target="_blank" rel="noreferrer">
            代码仓库
          </a>
          <a className="resource-link secondary-link" href="#/resources/transformer-from-scratch">
            查看对应学习页
          </a>
          <a className="resource-link secondary-link" href="#/dashboard">
            进入训练系统
          </a>
        </div>
      </div>
      <div className="project-list" aria-label="Mini GPT 实践任务">
        {projectTasks.map((task) => (
          <div className="project-task" key={task}>
            <span aria-hidden="true"></span>
            {task}
          </div>
        ))}
      </div>
    </section>
  )
}

function WeeklyPlan() {
  return (
    <section className="section" id="plan">
      <SectionHeading
        eyebrow="12-Week Plan"
        title="12 周学习计划"
        description="每周都留下可检查产物：笔记、代码、测试、项目展示或 mock 记录。"
      />
      <div className="week-grid">
        {weeks.map((week) => (
          <article className="week-card" key={week.period}>
            <p>{week.period}</p>
            <h3>{week.title}</h3>
            <span>{week.output}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProgressChecklist() {
  return (
    <section className="section checklist-section" id="progress">
      <SectionHeading
        eyebrow="Progress Tracker"
        title="进度追踪"
        description="先用静态 checkbox 做个人学习打卡，后续可以再接入本地存储。"
      />
      <div className="checklist">
        {checklist.map((item) => (
          <label key={item} className="check-item">
            <input type="checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>通往 OpenAI / AI Lab 的学习地图</h1>
          <p>
            基于 Alisa Liu 求职经验整理：从语言模型基础、Transformer 实现、ML
            Coding 到 Research Discussion 的系统学习路径
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#plan">
              开始学习
            </a>
            <a className="button secondary" href="#resources">
              查看资源地图
            </a>
            <a className="button secondary" href="#/dashboard">
              学习进度
            </a>
            <a className="button secondary" href="#/interview-bank">
              面试题库
            </a>
            <a className="button secondary" href="#/mock-interview">
              开始模拟面试
            </a>
            <a className="button secondary" href="#/review">
              错题复盘
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={roadmapHero} alt="通往 AI Lab 的学习阶梯插图" />
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div>
          <p className="section-kicker">Project Note</p>
          <h2 id="intro-title">这不是 offer 保证，而是一张系统学习路线图</h2>
        </div>
        <p>
          页面目标是帮助学习者建立 LLM 底层理解、代码实现能力、技术讨论能力和面试表达能力。
          V2 新增站内中文学习页，让资源不只是外链，而是可持续扩展的学习系统。
        </p>
      </section>

      <CapabilityMap />
      <RoadmapTimeline />
      <ResourceCards />
      <PracticeProject />
      <WeeklyPlan />
      <ProgressChecklist />
    </main>
  )
}

function ProjectDetail({ project }) {
  if (!project) {
    return (
      <main className="detail-page">
        <a className="back-link" href="#top">
          返回首页
        </a>
        <section className="detail-hero">
          <p>Project Not Found</p>
          <h1>没有找到这个项目页</h1>
          <span>请回到首页实践项目区，选择一个已有的站内项目页。</span>
        </section>
      </main>
    )
  }

  return (
    <main className="detail-page project-detail-page">
      <a className="back-link" href="#top">
        返回首页
      </a>

      <section className="detail-hero project-hero">
        <p>{project.stage}</p>
        <h1>{project.name}</h1>
        <span>{project.subtitle}</span>
        <div className="project-hero-copy">
          <p>{project.description}</p>
        </div>
        <div className="detail-actions">
          <a className="button primary" href={project.repoUrl} target="_blank" rel="noreferrer">
            查看代码仓库
          </a>
          <a className="button secondary" href={project.versionUrl} target="_blank" rel="noreferrer">
            查看 v0.2 功能
          </a>
          <button className="button primary" type="button" onClick={() => scrollToDetailSection('project-modules')}>
            查看模块路线图
          </button>
          <a className="button secondary" href="#/resources/transformer-from-scratch">
            对应学习页
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <DetailSection id="project-goals" title="项目目标：完成后应该具备的能力">
          <BulletList items={project.goals} />
        </DetailSection>

        <DetailSection id="project-modules" title="模块路线图">
          <ProjectModuleRoadmap modules={project.modules} />
        </DetailSection>

        <DetailSection id="project-repo" title="项目目录建议">
          <RepoTree lines={project.repoTree} />
        </DetailSection>

        <DetailSection id="project-code-capabilities" title="代码仓库当前能力">
          <CodeCapabilities items={project.codeCapabilities} />
        </DetailSection>

        <DetailSection id="project-run" title="如何运行代码项目">
          <RunCommands commands={project.runCommands} />
        </DetailSection>

        <DetailSection id="project-resources" title="相关学习页">
          <RelatedLearningPages resources={project.relatedResources} />
        </DetailSection>

        <DetailSection id="project-checklist" title="项目完成 checklist">
          <CompletionChecklist items={project.checklist} />
        </DetailSection>

        <DetailSection id="project-pitch" title="如何向面试官讲这个项目">
          <PitchCards items={project.pitch} />
        </DetailSection>

        <section className="project-next-callout" aria-label="V4B 后续说明">
          <p>V4B 状态</p>
          <h2>{project.nextStep}</h2>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            打开 mini-gpt-from-scratch 仓库
          </a>
        </section>
      </div>
    </main>
  )
}

function ResourceDetail({ resource }) {
  if (!resource) {
    return (
      <main className="detail-page">
        <a className="back-link" href="#top">
          返回首页
        </a>
        <section className="detail-hero">
          <p>Resource Not Found</p>
          <h1>没有找到这个资源页</h1>
          <span>请回到首页资源地图，选择一个已有的站内学习页。</span>
        </section>
      </main>
    )
  }

  const detailNavItems = getDetailNavItems(resource)

  return (
    <main className="detail-page">
      <a className="back-link" href="#top">
        返回首页
      </a>

      <section className="detail-hero">
        <p>{resource.stage}</p>
        <h1>{resource.name}</h1>
        <span>{resource.problem}</span>
        <div className="detail-actions">
          <a className="button primary" href={resource.link} target="_blank" rel="noreferrer">
            查看原文
          </a>
          <a className="button secondary" href="#resources">
            回到资源地图
          </a>
        </div>
      </section>

      <div className="detail-layout">
        <aside className="detail-summary" aria-label="资源学习导航">
          <p>学习页结构</p>
          {detailNavItems.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToDetailSection(item.id)}>
              {item.label}
            </button>
          ))}
        </aside>

        <div className="detail-content">
          <DetailSection id="positioning" title="资源定位：这份资料解决什么面试能力缺口">
            <p>{resource.positioning}</p>
          </DetailSection>

          <DetailSection id="goals" title="学习目标：学完应该掌握什么">
            <div>
              <BulletList items={resource.goals} />
            </div>
          </DetailSection>

          <DetailSection id="guide" title="中文导读：这份资料的主线">
            <div className="note-stack">
              {resource.guide.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </DetailSection>

          {hasItems(resource.lectureSections) ? (
            <DetailSection id="lecture" title="章节式中文讲义">
              <LectureSections sections={resource.lectureSections} />
            </DetailSection>
          ) : null}

          {hasItems(resource.structureDiagram) ? (
            <DetailSection id="diagram" title="概念结构图">
              <StructureDiagram lines={resource.structureDiagram} />
            </DetailSection>
          ) : null}

          {hasItems(resource.pseudocode) ? (
            <DetailSection id="pseudocode" title="最小伪代码">
              <PseudocodeBlocks blocks={resource.pseudocode} />
            </DetailSection>
          ) : null}

          {hasItems(resource.interviewPrepMatrix) ? (
            <DetailSection id="prep-matrix" title="面试准备矩阵">
              <InterviewPrepMatrix items={resource.interviewPrepMatrix} />
            </DetailSection>
          ) : null}

          {hasItems(resource.behavioralStories) ? (
            <DetailSection id="story-library" title="行为面试故事库">
              <BehavioralStoryLibrary stories={resource.behavioralStories} />
            </DetailSection>
          ) : null}

          {hasItems(resource.weeklyJobPlan) ? (
            <DetailSection id="action-plan" title="每周求职行动计划">
              <WeeklyJobPlan weeks={resource.weeklyJobPlan} />
            </DetailSection>
          ) : null}

          {hasItems(resource.interviewReviewTemplate) ? (
            <DetailSection id="review-template" title="面试复盘模板">
              <InterviewReviewTemplate fields={resource.interviewReviewTemplate} />
            </DetailSection>
          ) : null}

          <DetailSection id="concepts" title="核心概念">
            <div className="concept-cloud">
              {resource.concepts.map((concept) => (
                <span key={concept}>{concept}</span>
              ))}
            </div>
          </DetailSection>

          <DetailSection id="glossary" title="术语表：英文术语 + 中文解释">
            <dl>
              <TermTable terms={resource.glossary} />
            </dl>
          </DetailSection>

          <DetailSection id="notes" title="学习笔记">
            <div>
              <BulletList items={resource.notes} />
            </div>
          </DetailSection>

          <DetailSection id="exercises" title="代码练习">
            <div>
              <BulletList items={resource.exercises} />
            </div>
          </DetailSection>

          {hasItems(resource.interviewTemplates) ? (
            <DetailSection id="templates" title="面试答题模板">
              <InterviewTemplates templates={resource.interviewTemplates} />
            </DetailSection>
          ) : null}

          <DetailSection id="questions" title="面试问题">
            <div>
              <BulletList items={resource.interviewQuestions} />
            </div>
          </DetailSection>

          {hasItems(resource.selfTest) ? (
            <DetailSection id="self-test" title="自测题：附简短参考答案">
              <SelfTest items={resource.selfTest} />
            </DetailSection>
          ) : null}

          <DetailSection id="outputs" title="学习产出">
            <div>
              <BulletList items={resource.outputs} />
            </div>
            <a className="resource-link primary-link detail-original" href={resource.link} target="_blank" rel="noreferrer">
              查看原文
            </a>
          </DetailSection>

          {hasItems(resource.completionChecklist) ? (
            <DetailSection id="completion" title="学习完成 checklist">
              <CompletionChecklist items={resource.completionChecklist} />
            </DetailSection>
          ) : null}
        </div>
      </div>
    </main>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Based on public learning resources and Alisa Liu's job search notes</strong>
        <p>Learning roadmap for personal study and AI Lab interview preparation</p>
      </div>
      <a href="#top">回到顶部</a>
    </footer>
  )
}

function App() {
  const { resourceSlug, projectSlug, page } = useHashRoute()
  const {
    progress,
    recordExport,
    resetProgress,
    saveMockInterview,
    toggleProgress,
    toggleQuestionMastered,
  } = useLocalProgress()
  const selectedResource = resourceSlug ? resourcesBySlug[resourceSlug] : null
  const selectedProject = projectSlug ? projectsBySlug[projectSlug] : null

  useEffect(() => {
    if (resourceSlug || projectSlug || page) {
      window.scrollTo(0, 0)
      return
    }

    const anchorId = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : ''
    if (anchorId) {
      requestAnimationFrame(() => document.getElementById(anchorId)?.scrollIntoView())
    }
  }, [resourceSlug, projectSlug, page])

  return (
    <div id="top" className="app-shell">
      <Header />
      {page === 'dashboard' ? (
        <DashboardPage progress={progress} onToggle={toggleProgress} onReset={resetProgress} />
      ) : page === 'interview-bank' ? (
        <InterviewBankPage progress={progress} onToggle={toggleProgress} onToggleMastered={toggleQuestionMastered} />
      ) : page === 'mock-interview' ? (
        <MockInterviewPage
          progress={progress}
          onSaveMockInterview={saveMockInterview}
          onToggle={toggleProgress}
          onToggleMastered={toggleQuestionMastered}
        />
      ) : page === 'review' ? (
        <ReviewPage
          progress={progress}
          onRecordExport={recordExport}
          onToggleMastered={toggleQuestionMastered}
        />
      ) : projectSlug ? (
        <ProjectDetail project={selectedProject} />
      ) : resourceSlug ? (
        <ResourceDetail resource={selectedResource} />
      ) : (
        <HomePage />
      )}
      <SiteFooter />
    </div>
  )
}

export default App

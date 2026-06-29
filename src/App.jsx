import { useEffect, useState } from 'react'
import roadmapHero from './assets/roadmap-hero.png'
import {
  capabilities,
  checklist,
  projectTasks,
  timelineSteps,
  weeks,
} from './data'
import { courseTaskCount, courseWeeks } from './data/course'
import {
  interviewProgressItems,
  miniGptProgressItems,
  resourcesProgressItems,
  weeklyPlanItems,
} from './data/progress'
import { mockInterviewModes, mockReviewPrompts } from './data/mockInterview'
import {
  behavioralStoryTemplates,
  interviewChecklistItems,
  portfolioExportTemplates,
  portfolioProjects,
  projectPitchTemplates,
  resumeOptimizerLengths,
  resumeOptimizerProjects,
  resumeOptimizerRoles,
  resumeOptimizerTones,
  resumeBulletTemplates,
} from './data/portfolio'
import { projectsBySlug } from './data/projects'
import { interviewQuestions, questionCategories } from './data/questions'
import { resources, resourcesBySlug } from './data/resources'
import './App.css'

const STORAGE_KEY = 'openai-roadmap-progress'

const emptyResumeOptimizer = {
  role: 'research-engineer',
  project: 'both-projects',
  tone: 'conservative',
  length: 'standard',
  targetNote: '',
  keywords: '',
  outcome: '',
  avoid: '',
  savedOutputs: null,
}

const emptyPortfolioDrafts = {
  selectedRole: 'research-engineer',
  resumeOptimizer: emptyResumeOptimizer,
  behavioralStories: {},
  behavioralStoryDrafts: {},
  interviewChecklist: {},
  lastPortfolioExportedAt: null,
}

const emptyProgress = {
  resourceCompletion: {},
  miniGptCompletion: {},
  weeklyCompletion: {},
  interviewCompletion: {},
  questionPracticed: {},
  questionMastered: {},
  lastMockInterview: null,
  lastExportedAt: null,
  courseTasks: {},
  activeCourseWeek: null,
  portfolioDrafts: emptyPortfolioDrafts,
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
  const courseWeekMatch = window.location.hash.match(/^#\/course\/week\/(\d{1,2})(?:[/?#]|$)/)
  const pageMatch = window.location.hash.match(/^#\/(dashboard|interview-bank|mock-interview|review|course|portfolio)(?:[/?#]|$)/)

  return {
    resourceSlug: resourceMatch ? decodeURIComponent(resourceMatch[1]) : null,
    projectSlug: projectMatch ? decodeURIComponent(projectMatch[1]) : null,
    page: courseWeekMatch ? 'course-week' : pageMatch ? pageMatch[1] : null,
    courseWeekNumber: courseWeekMatch ? Number(courseWeekMatch[1]) : null,
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

function normalizeProgress(value = {}) {
  const portfolioDrafts = value.portfolioDrafts || {}

  return {
    ...emptyProgress,
    ...value,
    portfolioDrafts: {
      ...emptyPortfolioDrafts,
      ...portfolioDrafts,
      resumeOptimizer: {
        ...emptyResumeOptimizer,
        ...portfolioDrafts.resumeOptimizer,
      },
      behavioralStories: {
        ...emptyPortfolioDrafts.behavioralStories,
        ...portfolioDrafts.behavioralStories,
      },
      behavioralStoryDrafts: {
        ...emptyPortfolioDrafts.behavioralStoryDrafts,
        ...portfolioDrafts.behavioralStoryDrafts,
      },
      interviewChecklist: {
        ...emptyPortfolioDrafts.interviewChecklist,
        ...portfolioDrafts.interviewChecklist,
      },
    },
  }
}

function readStoredProgress() {
  if (typeof window === 'undefined') {
    return normalizeProgress()
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? normalizeProgress(JSON.parse(stored)) : normalizeProgress()
  } catch {
    return normalizeProgress()
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

  const toggleCourseTask = (id, checked) => {
    setProgress((current) => ({
      ...current,
      courseTasks: {
        ...current.courseTasks,
        [id]: checked,
      },
    }))
  }

  const setActiveCourseWeek = (weekNumber) => {
    setProgress((current) => ({
      ...current,
      activeCourseWeek: weekNumber,
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

  const setPortfolioRole = (roleId) => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        selectedRole: roleId,
      },
    }))
  }

  const updateBehavioralStoryDraft = (storyId, field, value) => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        behavioralStoryDrafts: {
          ...current.portfolioDrafts.behavioralStoryDrafts,
          [storyId]: {
            ...current.portfolioDrafts.behavioralStoryDrafts[storyId],
            [field]: value,
          },
        },
      },
    }))
  }

  const updateBehavioralStoryFollowUp = (storyId, question, value) => {
    setProgress((current) => {
      const storyDraft = current.portfolioDrafts.behavioralStoryDrafts[storyId] || {}

      return {
        ...current,
        portfolioDrafts: {
          ...current.portfolioDrafts,
          behavioralStoryDrafts: {
            ...current.portfolioDrafts.behavioralStoryDrafts,
            [storyId]: {
              ...storyDraft,
              followUpAnswers: {
                ...storyDraft.followUpAnswers,
                [question]: value,
              },
            },
          },
        },
      }
    })
  }

  const togglePortfolioChecklist = (id, checked) => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        interviewChecklist: {
          ...current.portfolioDrafts.interviewChecklist,
          [id]: checked,
        },
      },
    }))
  }

  const recordPortfolioExport = () => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        lastPortfolioExportedAt: new Date().toISOString(),
      },
    }))
  }

  const updateResumeOptimizer = (field, value) => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        resumeOptimizer: {
          ...current.portfolioDrafts.resumeOptimizer,
          [field]: value,
        },
      },
    }))
  }

  const saveResumeOptimizerOutputs = (outputs) => {
    setProgress((current) => ({
      ...current,
      portfolioDrafts: {
        ...current.portfolioDrafts,
        resumeOptimizer: {
          ...current.portfolioDrafts.resumeOptimizer,
          savedOutputs: {
            ...outputs,
            savedAt: new Date().toISOString(),
          },
        },
      },
    }))
  }

  return {
    progress,
    recordExport,
    recordPortfolioExport,
    resetProgress,
    saveMockInterview,
    setActiveCourseWeek,
    setPortfolioRole,
    saveResumeOptimizerOutputs,
    toggleCourseTask,
    togglePortfolioChecklist,
    toggleProgress,
    toggleQuestionMastered,
    updateBehavioralStoryDraft,
    updateBehavioralStoryFollowUp,
    updateResumeOptimizer,
  }
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

function getCompletedCourseTaskCount(progress) {
  return courseWeeks.reduce(
    (total, week) => total + week.tasks.filter((task) => progress.courseTasks[task.id]).length,
    0,
  )
}

function getWeekTaskCompletedCount(week, progress) {
  return week.tasks.filter((task) => progress.courseTasks[task.id]).length
}

function isCourseWeekComplete(week, progress) {
  return week.tasks.length > 0 && getWeekTaskCompletedCount(week, progress) === week.tasks.length
}

function getCompletedCourseWeekCount(progress) {
  return courseWeeks.filter((week) => isCourseWeekComplete(week, progress)).length
}

function getSuggestedCourseWeek(progress) {
  return courseWeeks.find((week) => !isCourseWeekComplete(week, progress)) || null
}

function getCourseWeekByNumber(weekNumber) {
  return courseWeeks.find((week) => week.weekNumber === weekNumber) || null
}

function getCourseTasksByType(week, type) {
  return week.tasks.filter((task) => task.type === type)
}

function findRecommendedQuestion(text) {
  return interviewQuestions.find((question) => question.id === text || question.question === text) || null
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

function getReviewQuestionGroups(progress) {
  const recentWeakIds = new Set(progress.lastMockInterview?.weakIds || [])
  const practicedWeak = interviewQuestions.filter((question) => progress.questionPracticed[question.id] && !progress.questionMastered[question.id])
  const recentMockWeak = getQuestionsByIds([...recentWeakIds])
  const unpracticedAdvanced = interviewQuestions.filter((question) => !progress.questionPracticed[question.id] && question.difficulty === '高阶')

  return { practicedWeak, recentMockWeak, unpracticedAdvanced }
}

function getQuestionCategoryStats(progress) {
  return questionCategories
    .filter((category) => category !== '全部')
    .map((category) => {
      const categoryQuestions = interviewQuestions.filter((question) => question.category === category)
      const practiced = categoryQuestions.filter((question) => progress.questionPracticed[question.id]).length
      const mastered = categoryQuestions.filter((question) => progress.questionMastered[question.id]).length

      return {
        category,
        total: categoryQuestions.length,
        practiced,
        mastered,
        unmastered: categoryQuestions.length - mastered,
      }
    })
}

function getNextActionPlan(progress, reviewQuestions) {
  const completedCourseTasks = getCompletedCourseTaskCount(progress)
  const completedMiniGpt = countCompleted(miniGptProgressItems, progress.miniGptCompletion)
  const masteredQuestions = countCompleted(interviewQuestions, progress.questionMastered)
  const suggestions = []

  if (completedCourseTasks / courseTaskCount < 0.5) {
    const currentWeek = progress.activeCourseWeek || getSuggestedCourseWeek(progress)?.weekNumber || 1
    suggestions.push(`课程完成率低于 50%，建议回到第 ${currentWeek} 周继续推进。`)
  }

  if (masteredQuestions / interviewQuestions.length < 0.5) {
    suggestions.push('题库掌握率低于 50%，建议进入 Interview Bank 做分类练习。')
  }

  if (!progress.lastMockInterview) {
    suggestions.push('尚未完成 Mock Interview，建议先完成一次快速练习。')
  }

  if (completedMiniGpt < miniGptProgressItems.length) {
    suggestions.push('Mini GPT 模块尚未全部完成，建议回到 Mini GPT 项目页补齐项目链路。')
  }

  if (reviewQuestions.length >= 5) {
    suggestions.push('错题较多，建议进入 Review 页集中复盘并导出错题本。')
  }

  return suggestions.length > 0 ? suggestions : ['整体进度良好，建议继续导出周报并准备简历 / 项目展示材料。']
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

function buildWeekReportMarkdown(week, progress) {
  const completedTasks = week.tasks.filter((task) => progress.courseTasks[task.id])
  const incompleteTasks = week.tasks.filter((task) => !progress.courseTasks[task.id])

  return [
    `# 第 ${week.weekNumber} 周学习周报：${week.title}`,
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    '',
    '## 本周目标',
    week.goal,
    '',
    '## 已完成任务',
    ...(completedTasks.length > 0 ? completedTasks.map((task) => `- [x] ${task.label}`) : ['- 暂无']),
    '',
    '## 未完成任务',
    ...(incompleteTasks.length > 0 ? incompleteTasks.map((task) => `- [ ] ${task.label}`) : ['- 暂无']),
    '',
    '## 学习资源',
    ...week.resourceLinks.map((resource) => `- [${resource.label}](${resource.href})：${resource.description}`),
    '',
    '## 项目任务',
    ...week.projectTasks.map((task) => `- ${task}`),
    '',
    '## 面试训练',
    ...week.interviewTasks.map((task) => `- ${task}`),
    '',
    '## 本周产出',
    ...week.deliverables.map((item) => `- ${item}`),
    '',
    '## 复盘',
    '- 本周最难的概念：',
    '- 本周最卡的代码：',
    '- 本周最需要补的题：',
    '- 下周要优先改进的地方：',
  ].join('\n')
}

function formatMarkdownQuestionList(questions) {
  return questions.length > 0
    ? questions.map((question) => `- [${question.category} / ${question.difficulty}] ${question.question}`)
    : ['- 暂无']
}

function buildCourseTotalReportMarkdown(progress) {
  const completedCourseWeeks = getCompletedCourseWeekCount(progress)
  const completedCourseTasks = getCompletedCourseTaskCount(progress)
  const completedResources = countCompleted(resourcesProgressItems, progress.resourceCompletion)
  const completedMiniGpt = countCompleted(miniGptProgressItems, progress.miniGptCompletion)
  const practicedQuestions = countCompleted(interviewQuestions, progress.questionPracticed)
  const masteredQuestions = countCompleted(interviewQuestions, progress.questionMastered)
  const reviewQuestions = getReviewQuestions(progress)
  const { practicedWeak, recentMockWeak, unpracticedAdvanced } = getReviewQuestionGroups(progress)
  const lastMock = progress.lastMockInterview
  const nextActions = getNextActionPlan(progress, reviewQuestions)
  const suggestedWeek = getSuggestedCourseWeek(progress)
  const currentWeek = progress.activeCourseWeek
    ? `第 ${progress.activeCourseWeek} 周`
    : suggestedWeek
      ? `建议第 ${suggestedWeek.weekNumber} 周`
      : '已完成全部 12 周'

  const weeklyBlocks = courseWeeks.map((week) => {
    const completedTasks = week.tasks.filter((task) => progress.courseTasks[task.id])
    const incompleteTasks = week.tasks.filter((task) => !progress.courseTasks[task.id])

    return [
      `### ${week.title}`,
      `- 完成任务数：${completedTasks.length} / ${week.tasks.length}`,
      '- 已完成任务：',
      ...(completedTasks.length > 0 ? completedTasks.map((task) => `  - ${task.label}`) : ['  - 暂无']),
      '- 未完成任务：',
      ...(incompleteTasks.length > 0 ? incompleteTasks.map((task) => `  - ${task.label}`) : ['  - 暂无']),
    ].join('\n')
  })

  const mockLines = lastMock
    ? [
        `- 模式：${getMockModeName(lastMock.mode)}`,
        `- 时间：${formatDateTime(lastMock.completedAt)}`,
        `- 题目数量：${lastMock.questionIds.length}`,
        `- 已掌握数量：${lastMock.masteredIds.length}`,
        `- weakIds 数量：${lastMock.weakIds.length}`,
      ]
    : ['- 尚未完成模拟面试。']

  return [
    '# 12 周 OpenAI / AI Lab 面试课程总报告',
    '',
    '## 生成时间',
    formatDateTime(new Date().toISOString()),
    '',
    '## 总体进度',
    `- 已完成周数：${completedCourseWeeks} / 12`,
    `- 已完成课程任务数：${completedCourseTasks} / ${courseTaskCount}`,
    `- 当前学习周：${currentWeek}`,
    `- 资源页完成数：${completedResources} / ${resourcesProgressItems.length}`,
    `- Mini GPT 模块完成数：${completedMiniGpt} / ${miniGptProgressItems.length}`,
    `- 面试题已练习数：${practicedQuestions} / ${interviewQuestions.length}`,
    `- 面试题已掌握数：${masteredQuestions} / ${interviewQuestions.length}`,
    '',
    '## 每周完成情况',
    ...weeklyBlocks,
    '',
    '## 学习资源完成情况',
    ...resourcesProgressItems.map((item) => markdownCheckbox(item.title, progress.resourceCompletion[item.id])),
    '',
    '## Mini GPT 项目完成情况',
    ...miniGptProgressItems.map((item) => markdownCheckbox(item.title, progress.miniGptCompletion[item.id])),
    '',
    '## 面试题训练情况',
    ...getQuestionCategoryStats(progress).map(
      (item) => `- ${item.category}：总题数 ${item.total}，已练习 ${item.practiced}，已掌握 ${item.mastered}，未掌握 ${item.unmastered}`,
    ),
    '',
    '## 最近一次 Mock Interview',
    ...mockLines,
    '',
    '## 错题与薄弱点',
    '### 已练习但未掌握题',
    ...formatMarkdownQuestionList(practicedWeak),
    '',
    '### 最近一次 Mock weak questions',
    ...formatMarkdownQuestionList(recentMockWeak),
    '',
    '### 未练习高阶题',
    ...formatMarkdownQuestionList(unpracticedAdvanced),
    '',
    '## 下一步行动计划',
    ...nextActions.map((action) => `- ${action}`),
  ].join('\n')
}

function getSelectedResumeRole(drafts) {
  return resumeBulletTemplates.find((role) => role.id === drafts.selectedRole) || resumeBulletTemplates[0]
}

function buildResumeBulletsMarkdown(drafts) {
  const role = getSelectedResumeRole(drafts)

  return [
    `# Resume Bullets：${role.label}`,
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    '',
    '## 目标岗位',
    role.label,
    '',
    '## 项目 Bullet',
    ...role.bullets.map((bullet) => `- ${bullet}`),
    '',
    '## 技术关键词',
    role.keywords.join(' / '),
  ].join('\n')
}

function formatPitchSections(pitch) {
  return [
    `### ${pitch.title}`,
    '',
    `适用场景：${pitch.useCase}`,
    '',
    `- 背景：${pitch.sections.background}`,
    `- 目标：${pitch.sections.goal}`,
    `- 做了什么：${pitch.sections.work}`,
    `- 技术点：${pitch.sections.technical}`,
    `- 结果：${pitch.sections.result}`,
    `- 下一步：${pitch.sections.next}`,
    '',
    '可能追问：',
    ...pitch.followUps.map((item) => `- ${item}`),
  ].join('\n')
}

function buildProjectPitchMarkdown() {
  const projectBlocks = projectPitchTemplates.map((project) => [
    `## ${project.projectName}`,
    '',
    ...project.pitches.map(formatPitchSections),
  ].join('\n'))

  return [
    '# Project Pitch Packet',
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    '',
    ...projectBlocks,
  ].join('\n')
}

const behavioralStoryFields = [
  { id: 'situation', label: 'Situation' },
  { id: 'task', label: 'Task' },
  { id: 'action', label: 'Action' },
  { id: 'result', label: 'Result' },
  { id: 'metricsOrEvidence', label: 'Evidence / Metric' },
  { id: 'reflection', label: 'Reflection' },
]

function getStoryDraft(drafts, story) {
  const draft = drafts.behavioralStoryDrafts[story.id] || {}
  const legacyNote = drafts.behavioralStories[story.id]?.trim()

  return {
    situation: draft.situation || '',
    task: draft.task || '',
    action: draft.action || '',
    result: draft.result || '',
    reflection: draft.reflection || legacyNote || '',
    metricsOrEvidence: draft.metricsOrEvidence || '',
    risksToAvoid: draft.risksToAvoid || '',
    followUpAnswers: draft.followUpAnswers || {},
  }
}

function getStoryCompleteness(draft) {
  const completedFields = behavioralStoryFields.filter((field) => draft[field.id]?.trim())
  const missingFields = behavioralStoryFields.filter((field) => !draft[field.id]?.trim()).map((field) => field.label)
  const percent = Math.round((completedFields.length / behavioralStoryFields.length) * 100)

  return {
    percent,
    missingFields,
    ready: percent >= 80,
  }
}

function storyValue(value, fallback) {
  return value?.trim() || fallback
}

function buildStoryVersions(story, draft) {
  const situation = storyValue(draft.situation, `[补充 ${story.title} 的 Situation]`)
  const task = storyValue(draft.task, '[补充 Task]')
  const action = storyValue(draft.action, '[补充 Action]')
  const result = storyValue(draft.result, '[补充 Result]')
  const reflection = storyValue(draft.reflection, '[补充 Reflection]')
  const evidence = storyValue(draft.metricsOrEvidence, '[补充 evidence / metric]')

  return {
    short:
      `In one story about ${story.title}, the situation was ${situation}. My task was ${task}. I focused on ${action}, and the result was ${result}. The main lesson was ${reflection}.`,
    medium:
      `I would use ${story.title} to show ${story.targetCompetency}. The situation was ${situation}. My responsibility was ${task}. I took action by ${action}. The result was ${result}, with evidence such as ${evidence}. What I learned was ${reflection}.`,
    deep:
      `For a deeper discussion, I would start with the context: ${situation}. The core challenge was ${task}. I considered the risk of overclaiming or giving a vague story, so I would anchor the answer in concrete actions: ${action}. The outcome was ${result}, supported by ${evidence}. My reflection is ${reflection}. If asked follow-up questions, I would connect the story back to ${story.targetCompetency} and be explicit about what I would improve next time.`,
  }
}

function formatBehavioralStoryMarkdown(story, drafts) {
  const draft = getStoryDraft(drafts, story)
  const completeness = getStoryCompleteness(draft)
  const versions = buildStoryVersions(story, draft)

  return [
    `## ${story.title}`,
    `- Target competency：${story.targetCompetency}`,
    `- 完整度：${completeness.percent}%（${completeness.ready ? '可用于面试' : '需要补充'}）`,
    completeness.missingFields.length > 0 ? `- 缺失项：${completeness.missingFields.join(' / ')}` : '- 缺失项：无',
    '',
    '### STAR 字段',
    `- Situation：${draft.situation || '待填写'}`,
    `- Task：${draft.task || '待填写'}`,
    `- Action：${draft.action || '待填写'}`,
    `- Result：${draft.result || '待填写'}`,
    `- Evidence / Metric：${draft.metricsOrEvidence || '待填写'}`,
    `- Reflection：${draft.reflection || '待填写'}`,
    `- Risks to avoid：${draft.risksToAvoid || story.risksToAvoid.join('；')}`,
    '',
    '### 30 秒版',
    versions.short,
    '',
    '### 2 分钟版',
    versions.medium,
    '',
    '### 深挖版',
    versions.deep,
    '',
    '### 追问与回答',
    ...story.followUpQuestions.map((question) => `- ${question}：${draft.followUpAnswers[question] || '待填写'}`),
    '',
    '### 风险提醒',
    ...story.risksToAvoid.map((risk) => `- ${risk}`),
  ].join('\n')
}

function getReadyStoryCount(drafts) {
  return behavioralStoryTemplates.filter((story) => getStoryCompleteness(getStoryDraft(drafts, story)).ready).length
}

function buildBehavioralStoriesMarkdown(drafts) {
  const storyBlocks = behavioralStoryTemplates.map((story) => formatBehavioralStoryMarkdown(story, drafts))

  return [
    '# Behavioral STAR Stories',
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    `完整故事数：${getReadyStoryCount(drafts)} / ${behavioralStoryTemplates.length}`,
    '',
    ...storyBlocks,
  ].join('\n')
}

function getOptionById(items, id) {
  return items.find((item) => item.id === id) || items[0]
}

function splitInputList(value) {
  return (value || '')
    .split(/[,，;；\n/]+/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function uniqueItems(items) {
  return [...new Set(items.filter(Boolean))]
}

function getResumeOptimizerSelection(drafts) {
  const optimizer = drafts.resumeOptimizer

  return {
    role: getOptionById(resumeOptimizerRoles, optimizer.role),
    project: getOptionById(resumeOptimizerProjects, optimizer.project),
    tone: getOptionById(resumeOptimizerTones, optimizer.tone),
    length: getOptionById(resumeOptimizerLengths, optimizer.length),
  }
}

function buildResumeOptimizerOutput(drafts) {
  const optimizer = drafts.resumeOptimizer
  const { role, project, tone, length } = getResumeOptimizerSelection(drafts)
  const userKeywords = splitInputList(optimizer.keywords)
  const keywords = uniqueItems([...role.keywords, ...project.stack, ...userKeywords]).slice(0, 8)
  const targetNote = optimizer.targetNote.trim()
  const outcome = optimizer.outcome.trim() || project.outcomes[0]
  const avoid = optimizer.avoid.trim()
  const targetPhrase = targetNote ? ` for ${targetNote}` : ''
  const avoidPhrase = avoid ? ` Avoided overstating or using: ${avoid}.` : ''
  const keywordPhrase = keywords.join(', ')
  const capabilityPhrase = project.capabilities.slice(0, 4).join(', ')
  const secondaryCapabilityPhrase = project.capabilities.slice(4, 8).join(', ')
  const resultPhrase = `${outcome}; ${project.outcomes[1]}`

  const shortBullets = [
    `${tone.ownership} ${project.artifact}${targetPhrase} using ${keywordPhrase} to ${outcome}.`,
    `Implemented ${capabilityPhrase} in ${project.scope}, keeping the work explainable and portfolio-ready.`,
    `Tested and documented ${project.label} so the project can support resume screening, technical discussion, and interview follow-up.`,
  ]
  const standardBullets = [
    `${tone.ownership} ${project.artifact}${targetPhrase} ${tone.qualifier}, using ${keywordPhrase} to ${resultPhrase}.`,
    `Implemented ${capabilityPhrase}${secondaryCapabilityPhrase ? `, and ${secondaryCapabilityPhrase}` : ''}, making the project concrete enough for code review and interview discussion.`,
    `Created reusable documentation and exportable artifacts around ${project.label}, helping translate LLM preparation into resume bullets, project pitch material, and follow-up talking points.`,
  ]
  const detailedBullets = [
    `${tone.ownership} ${project.artifact}${targetPhrase} ${tone.qualifier}; the work combines ${keywordPhrase} with a deliberately scoped personal portfolio project that can be inspected, run, and explained without claiming production scale.`,
    `Implemented the core project workflow around ${capabilityPhrase}${secondaryCapabilityPhrase ? `, and ${secondaryCapabilityPhrase}` : ''}; this gives interviewers concrete hooks to ask about architecture, trade-offs, testing, limitations, and next-step improvements.`,
    `Created a portfolio-ready narrative for ${project.label} that connects implementation details, learning outcomes, and interview preparation outputs, with emphasis on ${role.angle}.`,
  ]
  const bulletsByLength = {
    short: shortBullets,
    standard: standardBullets,
    detailed: detailedBullets,
  }
  const bullets = bulletsByLength[length.id] || standardBullets
  const projectDescription = `${project.label} is ${project.scope} focused on ${project.artifact}. It covers ${project.capabilities.join(', ')} and is framed for ${role.label} roles by emphasizing ${role.angle}. ${tone.impact}.${avoidPhrase}`
  const profileDescription = `${role.label} candidate building practical AI portfolio projects across ${keywordPhrase}. Recent work includes ${project.label}, which ${project.outcomes[2]} and turns learning artifacts into clearer resume, GitHub, and interview materials.`
  const interviewExpansion = `In an interview, I would start by explaining the motivation for ${project.label}, then walk through the main workflow: ${project.capabilities.slice(0, 5).join(' -> ')}. I would then discuss the implementation choices, how I validated the project, what the current limitations are, and how I would extend it for a more realistic AI Lab or GenAI engineering setting.`

  return {
    selection: {
      role: role.label,
      project: project.label,
      tone: tone.label,
      length: length.label,
      targetNote,
      keywords: userKeywords,
      outcome: optimizer.outcome.trim(),
      avoid,
    },
    bullets,
    projectDescription,
    profileDescription,
    interviewExpansion,
  }
}

function formatResumeOptimizerMarkdown(outputs) {
  return [
    '## Resume Bullet Optimizer',
    `- Role：${outputs.selection.role}`,
    `- Project：${outputs.selection.project}`,
    `- Tone：${outputs.selection.tone}`,
    `- Length：${outputs.selection.length}`,
    outputs.selection.targetNote ? `- Target note：${outputs.selection.targetNote}` : '- Target note：未填写',
    outputs.selection.keywords.length > 0 ? `- Extra keywords：${outputs.selection.keywords.join(', ')}` : '- Extra keywords：未填写',
    outputs.selection.outcome ? `- Emphasized outcome：${outputs.selection.outcome}` : '- Emphasized outcome：使用默认项目结果',
    outputs.selection.avoid ? `- Avoided wording：${outputs.selection.avoid}` : '- Avoided wording：未填写',
    '',
    '### Generated Bullets',
    ...outputs.bullets.map((bullet) => `- ${bullet}`),
    '',
    '### Project Description',
    outputs.projectDescription,
    '',
    '### LinkedIn / GitHub Profile Description',
    outputs.profileDescription,
    '',
    '### Interview Expansion',
    outputs.interviewExpansion,
  ].join('\n')
}

function buildPortfolioPacketMarkdown(drafts) {
  const role = getSelectedResumeRole(drafts)
  const savedOptimizerOutputs = drafts.resumeOptimizer.savedOutputs
  const projectLines = portfolioProjects.flatMap((project) => [
    `## ${project.name}`,
    `- 定位：${project.positioning}`,
    `- 技术栈：${project.stack.join(' / ')}`,
    '- 亮点：',
    ...project.highlights.map((item) => `  - ${item}`),
    '- 可展示能力：',
    ...project.capabilities.map((item) => `  - ${item}`),
    '- 链接：',
    ...project.links.map((link) => `  - [${link.label}](${link.href})`),
    '',
  ])
  const checklistLines = interviewChecklistItems.map((item) => markdownCheckbox(item.label, drafts.interviewChecklist[item.id]))

  return [
    '# Portfolio & Resume Packet',
    '',
    `生成时间：${formatDateTime(new Date().toISOString())}`,
    '',
    '# 项目列表',
    ...projectLines,
    '# Resume Bullets',
    `目标岗位：${role.label}`,
    '',
    ...role.bullets.map((bullet) => `- ${bullet}`),
    '',
    ...(savedOptimizerOutputs
      ? [formatResumeOptimizerMarkdown(savedOptimizerOutputs), '']
      : ['## Resume Bullet Optimizer', '尚未加入优化后的 bullet。请在 Portfolio 页面点击“加入 Portfolio Packet”。', '']),
    '# Project Pitch',
    ...projectPitchTemplates.map((project) => [
      `## ${project.projectName}`,
      ...project.pitches.map((pitch) => `- ${pitch.title}：${pitch.sections.goal}`),
    ].join('\n')),
    '',
    '# Behavioral Stories',
    `完整故事数：${getReadyStoryCount(drafts)} / ${behavioralStoryTemplates.length}`,
    '',
    ...behavioralStoryTemplates.map((story) => formatBehavioralStoryMarkdown(story, drafts)),
    '',
    '# 面试前 checklist',
    ...checklistLines,
    '',
    '# 相关链接',
    '- [openai-interview-roadmap](https://conanxin.github.io/openai-interview-roadmap/)',
    '- [mini-gpt-from-scratch](https://github.com/conanxin/mini-gpt-from-scratch)',
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
  const completedCourseTasks = getCompletedCourseTaskCount(progress)
  const suggestedCourseWeek = getSuggestedCourseWeek(progress)
  const currentCourseHref = progress.activeCourseWeek ? `#/course/week/${progress.activeCourseWeek}` : '#/course'

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
          <a className="button primary" href="#/course">
            查看课程路径
          </a>
          <a className="button secondary" href={currentCourseHref}>
            查看当前周详情
          </a>
          <a className="button secondary" href="#/review?export=course">
            导出课程总报告
          </a>
          <a className="button secondary" href="#/portfolio">
            打开 Portfolio Toolkit
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
            <DashboardStat label="当前课程周" value={progress.activeCourseWeek || suggestedCourseWeek?.weekNumber || '完成'} />
            <DashboardStat label="课程任务完成" value={`${completedCourseTasks} / ${courseTaskCount}`} />
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
  if (typeof window !== 'undefined' && window.location.hash.includes('export=course')) {
    return 'course'
  }

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

function MarkdownExportPanel({ markdown, onCopy, onSelect, options, selectedType, status }) {
  const exportOptions = options || [
    { id: 'progress', label: '导出学习进度 Markdown' },
    { id: 'wrong', label: '导出错题本 Markdown' },
    { id: 'mock', label: '导出最近一次 Mock Interview 复盘 Markdown' },
    { id: 'course', label: '12 周课程总报告 Markdown' },
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
            <span>{option.label}</span>
            {option.summary ? <small>{option.summary}</small> : null}
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

function PortfolioProjects() {
  return (
    <div className="portfolio-project-grid">
      {portfolioProjects.map((project) => (
        <article className="portfolio-project-card" key={project.id}>
          <p>{project.positioning}</p>
          <h3>{project.name}</h3>
          <div className="portfolio-tag-row">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <dl>
            <div>
              <dt>亮点</dt>
              <dd>
                <BulletList items={project.highlights} />
              </dd>
            </div>
            <div>
              <dt>可展示能力</dt>
              <dd>
                <BulletList items={project.capabilities} />
              </dd>
            </div>
          </dl>
          <div className="detail-actions">
            {project.links.map((link, index) => (
              <a className={index === 0 ? 'button primary' : 'button secondary'} href={link.href} key={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function ResumeBulletBuilder({ drafts, onSelectRole }) {
  const selectedRole = getSelectedResumeRole(drafts)

  return (
    <div className="portfolio-tool-stack">
      <div className="question-filter-row portfolio-role-row" role="tablist" aria-label="目标岗位选择">
        {resumeBulletTemplates.map((role) => (
          <button
            className={selectedRole.id === role.id ? 'is-active' : ''}
            key={role.id}
            type="button"
            onClick={() => onSelectRole(role.id)}
          >
            {role.label}
          </button>
        ))}
      </div>
      <article className="resume-bullet-card">
        <p>目标岗位：{selectedRole.label}</p>
        <BulletList items={selectedRole.bullets} />
        <div className="portfolio-tag-row">
          {selectedRole.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </article>
    </div>
  )
}

function OptimizerChoiceGroup({ label, options, selected, onChange }) {
  return (
    <div className="resume-optimizer-choice">
      <p>{label}</p>
      <div className="question-filter-row portfolio-role-row">
        {options.map((option) => (
          <button
            className={selected === option.id ? 'is-active' : ''}
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function ResumeOptimizerInput({ label, value, placeholder, onChange }) {
  return (
    <label className="resume-optimizer-input">
      <span>{label}</span>
      <textarea value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  )
}

function ResumeOptimizerOutputCard({ title, text, items, onCopy, onSave }) {
  const outputText = items ? items.map((item) => `- ${item}`).join('\n') : text

  return (
    <article className="resume-optimizer-output-card">
      <h3>{title}</h3>
      {items ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{text}</p>
      )}
      <div className="review-card-actions">
        <button className="button secondary" type="button" onClick={() => onCopy(outputText, title)}>
          复制
        </button>
        <button className="button primary" type="button" onClick={onSave}>
          加入 Portfolio Packet
        </button>
      </div>
    </article>
  )
}

function ResumeBulletOptimizer({ drafts, onSaveOutputs, onUpdateOptimizer }) {
  const [copyStatus, setCopyStatus] = useState('')
  const optimizer = drafts.resumeOptimizer
  const outputs = buildResumeOptimizerOutput(drafts)

  const updateField = (field) => (value) => {
    onUpdateOptimizer(field, value)
  }

  const copyOutput = async (text, title) => {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus(`${title} 已生成，可手动复制`)
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus(`${title} 已复制`)
    } catch {
      setCopyStatus(`${title} 复制失败，可手动复制`)
    }
  }

  const saveOutputs = () => {
    onSaveOutputs(outputs)
    setCopyStatus('已加入 Portfolio Packet')
  }

  return (
    <div className="resume-optimizer">
      <div className="resume-optimizer-form">
        <OptimizerChoiceGroup
          label="目标岗位"
          options={resumeOptimizerRoles}
          selected={optimizer.role}
          onChange={updateField('role')}
        />
        <OptimizerChoiceGroup
          label="项目"
          options={resumeOptimizerProjects}
          selected={optimizer.project}
          onChange={updateField('project')}
        />
        <OptimizerChoiceGroup
          label="表达强度"
          options={resumeOptimizerTones}
          selected={optimizer.tone}
          onChange={updateField('tone')}
        />
        <OptimizerChoiceGroup
          label="长度"
          options={resumeOptimizerLengths}
          selected={optimizer.length}
          onChange={updateField('length')}
        />
        <div className="resume-optimizer-input-grid">
          <ResumeOptimizerInput
            label="目标公司 / 岗位备注"
            value={optimizer.targetNote}
            placeholder="例如：OpenAI Research Engineer, inference systems team"
            onChange={updateField('targetNote')}
          />
          <ResumeOptimizerInput
            label="想强调的技术关键词"
            value={optimizer.keywords}
            placeholder="例如：PyTorch, checkpointing, top-p sampling, React, localStorage"
            onChange={updateField('keywords')}
          />
          <ResumeOptimizerInput
            label="想强调的结果"
            value={optimizer.outcome}
            placeholder="例如：converted interview preparation into trackable project artifacts"
            onChange={updateField('outcome')}
          />
          <ResumeOptimizerInput
            label="想避免的表述"
            value={optimizer.avoid}
            placeholder="例如：production-scale, millions of users, SOTA claims"
            onChange={updateField('avoid')}
          />
        </div>
      </div>

      <div className="resume-optimizer-result-head">
        <h3>生成结果</h3>
        <p>英文输出为主，使用静态模板组合生成；默认避免未经证实的规模化表述。</p>
        {copyStatus ? <span>{copyStatus}</span> : null}
      </div>

      <div className="resume-optimizer-output-grid">
        <ResumeOptimizerOutputCard title="3 条简历 bullet" items={outputs.bullets} onCopy={copyOutput} onSave={saveOutputs} />
        <ResumeOptimizerOutputCard title="项目描述" text={outputs.projectDescription} onCopy={copyOutput} onSave={saveOutputs} />
        <ResumeOptimizerOutputCard title="LinkedIn / GitHub profile 描述" text={outputs.profileDescription} onCopy={copyOutput} onSave={saveOutputs} />
        <ResumeOptimizerOutputCard title="面试展开解释" text={outputs.interviewExpansion} onCopy={copyOutput} onSave={saveOutputs} />
      </div>

      <div className="review-summary-note portfolio-export-note">
        <p>Portfolio Packet 中的优化器输出：{optimizer.savedOutputs ? `已加入，时间 ${formatDateTime(optimizer.savedOutputs.savedAt)}` : '尚未加入'}</p>
      </div>
    </div>
  )
}

function ProjectPitchToolkit() {
  return (
    <div className="portfolio-pitch-grid">
      {projectPitchTemplates.map((project) => (
        <article className="portfolio-pitch-project" key={project.projectId}>
          <h3>{project.projectName}</h3>
          <div className="portfolio-pitch-list">
            {project.pitches.map((pitch) => (
              <article className="portfolio-pitch-card" key={`${project.projectId}-${pitch.id}`}>
                <p>{pitch.title}</p>
                <strong>{pitch.useCase}</strong>
                <dl>
                  <div>
                    <dt>背景</dt>
                    <dd>{pitch.sections.background}</dd>
                  </div>
                  <div>
                    <dt>目标</dt>
                    <dd>{pitch.sections.goal}</dd>
                  </div>
                  <div>
                    <dt>做了什么</dt>
                    <dd>{pitch.sections.work}</dd>
                  </div>
                  <div>
                    <dt>技术点</dt>
                    <dd>{pitch.sections.technical}</dd>
                  </div>
                  <div>
                    <dt>结果</dt>
                    <dd>{pitch.sections.result}</dd>
                  </div>
                  <div>
                    <dt>下一步</dt>
                    <dd>{pitch.sections.next}</dd>
                  </div>
                </dl>
                <div className="portfolio-followups">
                  <span>可能追问</span>
                  <BulletList items={pitch.followUps} />
                </div>
              </article>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

function StoryDraftTextarea({ label, placeholder, value, onChange }) {
  return (
    <label className="story-draft-field">
      <span>{label}</span>
      <textarea value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  )
}

function StoryVersionPreview({ title, body }) {
  return (
    <article className="story-version-preview">
      <h4>{title}</h4>
      <p>{body}</p>
    </article>
  )
}

function BehavioralStoryEditor({ drafts, onUpdateFollowUp, onUpdateStoryDraft }) {
  const readyStoryCount = getReadyStoryCount(drafts)

  return (
    <div className="behavioral-editor">
      <div className={readyStoryCount >= 5 ? 'story-readiness-callout is-ready' : 'story-readiness-callout'}>
        <strong>{readyStoryCount >= 5 ? 'Behavioral stories 基本可用' : '建议至少准备 5 个完整故事'}</strong>
        <p>当前完整度大于等于 80% 的故事数：{readyStoryCount} / {behavioralStoryTemplates.length}</p>
      </div>

      <div className="portfolio-story-grid">
        {behavioralStoryTemplates.map((story) => {
          const draft = getStoryDraft(drafts, story)
          const completeness = getStoryCompleteness(draft)
          const versions = buildStoryVersions(story, draft)

          return (
            <article className="portfolio-story-card" key={story.id}>
              <div className="story-card-head">
                <div>
                  <p>{story.targetCompetency}</p>
                  <h3>{story.title}</h3>
                </div>
                <span className={completeness.ready ? 'story-status is-ready' : 'story-status'}>
                  {completeness.ready ? '可用于面试' : '需要补充'}
                </span>
              </div>

              <div className="story-completeness">
                <div>
                  <strong>{completeness.percent}%</strong>
                  <span>完整度</span>
                </div>
                <progress value={completeness.percent} max="100" />
                <p>{completeness.missingFields.length > 0 ? `缺失项：${completeness.missingFields.join(' / ')}` : 'STAR、evidence 和 reflection 已齐全。'}</p>
              </div>

              <div className="story-template-note">
                <p>模板提示</p>
                <dl>
                  <div>
                    <dt>Situation</dt>
                    <dd>{story.situation}</dd>
                  </div>
                  <div>
                    <dt>Task</dt>
                    <dd>{story.task}</dd>
                  </div>
                  <div>
                    <dt>Action</dt>
                    <dd>{story.action}</dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{story.result}</dd>
                  </div>
                </dl>
              </div>

              <div className="story-draft-grid">
                <StoryDraftTextarea
                  label="Situation"
                  value={draft.situation}
                  placeholder={story.situation}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'situation', value)}
                />
                <StoryDraftTextarea
                  label="Task"
                  value={draft.task}
                  placeholder={story.task}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'task', value)}
                />
                <StoryDraftTextarea
                  label="Action"
                  value={draft.action}
                  placeholder={story.action}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'action', value)}
                />
                <StoryDraftTextarea
                  label="Result"
                  value={draft.result}
                  placeholder={story.result}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'result', value)}
                />
                <StoryDraftTextarea
                  label="Evidence / Metric"
                  value={draft.metricsOrEvidence}
                  placeholder={story.metricsOrEvidence}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'metricsOrEvidence', value)}
                />
                <StoryDraftTextarea
                  label="Reflection"
                  value={draft.reflection}
                  placeholder={story.reflection}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'reflection', value)}
                />
                <StoryDraftTextarea
                  label="Risks to Avoid"
                  value={draft.risksToAvoid}
                  placeholder={story.risksToAvoid.join('；')}
                  onChange={(value) => onUpdateStoryDraft(story.id, 'risksToAvoid', value)}
                />
              </div>

              <div className="story-risk-list">
                <span>风险提醒</span>
                <BulletList items={story.risksToAvoid} />
              </div>

              <div className="story-follow-up-list">
                <h4>故事面试追问</h4>
                {story.followUpQuestions.map((question) => (
                  <label className="story-follow-up" key={question}>
                    <span>{question}</span>
                    <textarea
                      value={draft.followUpAnswers[question] || ''}
                      placeholder="写下你会怎么回答这个追问。"
                      onChange={(event) => onUpdateFollowUp(story.id, question, event.target.value)}
                    />
                  </label>
                ))}
              </div>

              <div className="story-version-grid">
                <StoryVersionPreview title="30 秒版" body={versions.short} />
                <StoryVersionPreview title="2 分钟版" body={versions.medium} />
                <StoryVersionPreview title="深挖版" body={versions.deep} />
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function PortfolioInterviewChecklist({ drafts, onToggleChecklist }) {
  return (
    <div className="portfolio-checklist">
      {interviewChecklistItems.map((item) => (
        <label className={drafts.interviewChecklist[item.id] ? 'portfolio-check-item is-complete' : 'portfolio-check-item'} key={item.id}>
          <input
            type="checkbox"
            checked={Boolean(drafts.interviewChecklist[item.id])}
            onChange={(event) => onToggleChecklist(item.id, event.target.checked)}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  )
}

function PortfolioPage({
  progress,
  onRecordExport,
  onSaveOptimizerOutputs,
  onSelectRole,
  onToggleChecklist,
  onUpdateFollowUp,
  onUpdateOptimizer,
  onUpdateStoryDraft,
}) {
  const drafts = progress.portfolioDrafts
  const [exportType, setExportType] = useState('resume')
  const [copyStatus, setCopyStatus] = useState('')
  const markdownByType = {
    resume: buildResumeBulletsMarkdown(drafts),
    pitch: buildProjectPitchMarkdown(),
    stories: buildBehavioralStoriesMarkdown(drafts),
    packet: buildPortfolioPacketMarkdown(drafts),
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
    <main className="detail-page portfolio-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V7A Portfolio Toolkit</p>
        <h1>Portfolio & Resume Toolkit</h1>
        <span>把学习项目变成可以投递、面试和展示的求职材料。</span>
        <div className="detail-actions">
          <a className="button primary" href="#portfolio-resume">
            生成简历项目段落
          </a>
          <a className="button secondary" href="#portfolio-resume-optimizer">
            Resume Bullet Optimizer
          </a>
          <a className="button secondary" href="#portfolio-pitch">
            准备项目 Pitch
          </a>
          <a className="button secondary" href="#portfolio-stories">
            Behavioral Story Deep Editor
          </a>
          <a className="button secondary" href="#portfolio-export">
            导出求职材料 Markdown
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <DetailSection id="portfolio-projects" title="项目作品集">
          <PortfolioProjects />
        </DetailSection>

        <DetailSection id="portfolio-resume" title="简历 Bullet 生成区">
          <ResumeBulletBuilder drafts={drafts} onSelectRole={onSelectRole} />
        </DetailSection>

        <DetailSection id="portfolio-resume-optimizer" title="Resume Bullet Optimizer">
          <ResumeBulletOptimizer
            drafts={drafts}
            onSaveOutputs={onSaveOptimizerOutputs}
            onUpdateOptimizer={onUpdateOptimizer}
          />
        </DetailSection>

        <DetailSection id="portfolio-pitch" title="项目 Pitch 区">
          <ProjectPitchToolkit />
        </DetailSection>

        <DetailSection id="portfolio-stories" title="Behavioral Story Deep Editor">
          <BehavioralStoryEditor
            drafts={drafts}
            onUpdateFollowUp={onUpdateFollowUp}
            onUpdateStoryDraft={onUpdateStoryDraft}
          />
        </DetailSection>

        <DetailSection id="portfolio-checklist" title="面试前 Checklist">
          <PortfolioInterviewChecklist drafts={drafts} onToggleChecklist={onToggleChecklist} />
        </DetailSection>

        <DetailSection id="portfolio-export" title="Markdown 导出区">
          <MarkdownExportPanel
            markdown={selectedMarkdown}
            options={portfolioExportTemplates}
            selectedType={exportType}
            status={copyStatus}
            onCopy={copyMarkdown}
            onSelect={selectExportType}
          />
          <div className="review-summary-note portfolio-export-note">
            <p>最近一次 Portfolio 导出时间：{formatDateTime(drafts.lastPortfolioExportedAt)}</p>
          </div>
        </DetailSection>
      </div>
    </main>
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
    course: buildCourseTotalReportMarkdown(progress),
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
          <a className="button primary" href="#/course">
            回到课程路径
          </a>
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

        <section className="project-next-callout" aria-label="求职材料入口">
          <p>Portfolio Output</p>
          <h2>完成复盘后，可以把训练记录、项目内容和故事库整理成求职材料。</h2>
          <a href="#/portfolio">生成求职材料</a>
        </section>
      </div>
    </main>
  )
}

function CourseOverview({ progress }) {
  const suggestedWeek = getSuggestedCourseWeek(progress)
  const completedWeeks = getCompletedCourseWeekCount(progress)
  const completedTasks = getCompletedCourseTaskCount(progress)
  const suggestedLabel = suggestedWeek
    ? `第 ${suggestedWeek.weekNumber} 周：${suggestedWeek.title.replace(/^第 \d+ 周：/, '')}`
    : '已完成全部 12 周'

  return (
    <DetailSection id="course-overview" title="课程总览">
      <div className="dashboard-stat-grid course-stat-grid">
        <DashboardStat label="当前建议学习周" value={suggestedLabel} />
        <DashboardStat label="已完成周数" value={`${completedWeeks} / 12`} />
        <DashboardStat label="课程任务完成" value={`${completedTasks} / ${courseTaskCount}`} />
        <DashboardStat label="当前学习周" value={progress.activeCourseWeek ? `第 ${progress.activeCourseWeek} 周` : '未设置'} />
      </div>
      <div className="detail-actions course-overview-actions">
        <a className="button primary" href="#/dashboard">
          进入 Dashboard
        </a>
        <a className="button secondary" href="#/mock-interview">
          进入 Mock Interview
        </a>
        <a className="button secondary" href="#/review">
          进入错题复盘
        </a>
        <a className="button secondary" href="#/review?export=course">
          生成课程总报告
        </a>
      </div>
    </DetailSection>
  )
}

function CourseTaskChecklist({ progress, tasks, onToggleTask }) {
  return (
    <div className="course-task-list">
      {tasks.map((item) => (
        <article className={progress.courseTasks[item.id] ? 'course-task-row is-complete' : 'course-task-row'} key={item.id}>
          <ProgressCheckbox
            checked={Boolean(progress.courseTasks[item.id])}
            label={item.label}
            onChange={(checked) => onToggleTask(item.id, checked)}
          />
          <span>{item.type}</span>
        </article>
      ))}
    </div>
  )
}

function CourseWeekCard({ progress, week, onSetActiveWeek, onToggleTask }) {
  const completedTasks = getWeekTaskCompletedCount(week, progress)
  const complete = isCourseWeekComplete(week, progress)
  const active = progress.activeCourseWeek === week.weekNumber

  return (
    <article id={week.id} className={complete ? 'course-week-card is-complete' : active ? 'course-week-card is-active' : 'course-week-card'}>
      <div className="course-week-head">
        <span>Week {week.weekNumber}</span>
        <strong>{completedTasks} / {week.tasks.length}</strong>
      </div>
      <h3>{week.title}</h3>
      <p className="course-theme">{week.theme}</p>
      <p>{week.goal}</p>

      <div className="course-link-list">
        {week.resourceLinks.map((resource) => (
          <a key={resource.href} href={resource.href}>
            {resource.label}
          </a>
        ))}
      </div>

      <div className="course-week-grid">
        <div>
          <h4>Mini GPT 项目任务</h4>
          <BulletList items={week.projectTasks} />
        </div>
        <div>
          <h4>面试训练任务</h4>
          <BulletList items={week.interviewTasks} />
        </div>
        <div>
          <h4>本周产出</h4>
          <BulletList items={week.deliverables} />
        </div>
        <div>
          <h4>推荐题目</h4>
          <BulletList items={week.recommendedQuestions} />
          <a className="resource-link secondary-link course-bank-link" href="#/interview-bank">
            进入题库练习
          </a>
        </div>
      </div>

      <div className="course-review-prompt">
        <strong>本周复盘提示</strong>
        <p>{week.reviewPrompt}</p>
      </div>

      <CourseTaskChecklist progress={progress} tasks={week.tasks} onToggleTask={onToggleTask} />

      <div className="detail-actions course-week-actions">
        <a className="button primary" href={`#/course/week/${week.weekNumber}`}>
          查看本周详情
        </a>
        <button className={active ? 'button primary' : 'button secondary'} type="button" onClick={() => onSetActiveWeek(week.weekNumber)}>
          {active ? '当前学习周' : '设为当前学习周'}
        </button>
        <a className="button secondary" href="#/review">
          本周完成后导出复盘
        </a>
      </div>
    </article>
  )
}

function CourseTimeline({ progress, onSetActiveWeek, onToggleTask }) {
  return (
    <DetailSection id="course-timeline" title="12 周 Timeline">
      <div className="course-timeline">
        {courseWeeks.map((week) => (
          <a className={isCourseWeekComplete(week, progress) ? 'course-timeline-pill is-complete' : 'course-timeline-pill'} href={`#${week.id}`} key={week.id}>
            <span>{week.weekNumber}</span>
            {week.theme}
          </a>
        ))}
      </div>
      <div className="course-week-list">
        {courseWeeks.map((week) => (
          <CourseWeekCard
            key={week.id}
            progress={progress}
            week={week}
            onSetActiveWeek={onSetActiveWeek}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </DetailSection>
  )
}

function CoursePage({ progress, onSetActiveWeek, onToggleTask }) {
  return (
    <main className="detail-page course-page">
      <a className="back-link" href="#top">
        返回首页
      </a>
      <section className="detail-hero">
        <p>V6A Course Path</p>
        <h1>12 周 OpenAI / AI Lab 面试课程路径</h1>
        <span>把语言模型基础、Mini GPT 实践、面试题训练和复盘节奏串成一条可执行路线。</span>
        <div className="detail-actions">
          <a className="button primary" href="#/dashboard">
            学习进度
          </a>
          <a className="button secondary" href="#/interview-bank">
            面试题库
          </a>
          <a className="button secondary" href="#/review">
            错题复盘
          </a>
          <a className="button secondary" href="#/review?export=course">
            生成课程总报告
          </a>
          <a className="button secondary" href="#/portfolio">
            生成求职材料
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <CourseOverview progress={progress} />
        <CourseTimeline progress={progress} onSetActiveWeek={onSetActiveWeek} onToggleTask={onToggleTask} />
        <section className="project-next-callout" aria-label="课程复盘导出提示">
          <p>Review Loop</p>
          <h2>完成每周学习后，建议前往错题复盘页导出学习进度 Markdown。</h2>
          <a href="#/review">导出复盘请前往 #/review</a>
          <a href="#/portfolio">生成求职材料</a>
        </section>
      </div>
    </main>
  )
}

function WeekTaskPanel({ entryHref, entryLabel, progress, tasks, title, onToggleTask }) {
  return (
    <DetailSection id={title.replace(/\s/g, '-')} title={title}>
      <div className="course-detail-task-list">
        {tasks.map((item) => (
          <article className={progress.courseTasks[item.id] ? 'course-detail-task is-complete' : 'course-detail-task'} key={item.id}>
            <ProgressCheckbox
              checked={Boolean(progress.courseTasks[item.id])}
              label={item.label}
              onChange={(checked) => onToggleTask(item.id, checked)}
            />
            <a href={entryHref}>{entryLabel}</a>
          </article>
        ))}
      </div>
    </DetailSection>
  )
}

function WeekLearningRoute({ week }) {
  return (
    <DetailSection id="week-route" title="本周学习路线">
      <div className="week-route-grid">
        <article>
          <span>01</span>
          <h3>先学资源页</h3>
          <p>{week.resourceLinks.map((resource) => resource.label).join('、')}</p>
        </article>
        <article>
          <span>02</span>
          <h3>再做 Mini GPT 任务</h3>
          <p>{week.projectTasks.join('；')}</p>
        </article>
        <article>
          <span>03</span>
          <h3>然后练面试题</h3>
          <p>{week.interviewTasks.join('；')}</p>
        </article>
        <article>
          <span>04</span>
          <h3>最后复盘</h3>
          <p>{week.reviewPrompt}</p>
        </article>
      </div>
    </DetailSection>
  )
}

function WeekResourceLinks({ progress, resources, tasks, onToggleTask }) {
  return (
    <DetailSection id="week-resources" title="推荐学习页">
      <div className="week-resource-grid">
        {resources.map((resource) => (
          <article className="week-resource-card" key={resource.href}>
            <h3>{resource.label}</h3>
            <p>{resource.description}</p>
            <a className="button secondary" href={resource.href}>
              进入学习页
            </a>
          </article>
        ))}
      </div>
      {tasks.length > 0 ? (
        <div className="course-detail-task-list resource-task-checklist">
          {tasks.map((item) => (
            <article className={progress.courseTasks[item.id] ? 'course-detail-task is-complete' : 'course-detail-task'} key={item.id}>
              <ProgressCheckbox
                checked={Boolean(progress.courseTasks[item.id])}
                label={item.label}
                onChange={(checked) => onToggleTask(item.id, checked)}
              />
              <span>resource</span>
            </article>
          ))}
        </div>
      ) : null}
    </DetailSection>
  )
}

function WeekDeliverables({ progress, tasks, week, onToggleTask }) {
  return (
    <DetailSection id="week-deliverables" title="本周产出">
      <p>鼓励把本周学习沉淀成笔记、代码、讲稿或复盘文档。</p>
      <div className="course-detail-task-list">
        {tasks.map((item) => (
          <article className={progress.courseTasks[item.id] ? 'course-detail-task is-complete' : 'course-detail-task'} key={item.id}>
            <ProgressCheckbox
              checked={Boolean(progress.courseTasks[item.id])}
              label={item.label}
              onChange={(checked) => onToggleTask(item.id, checked)}
            />
            <span>{week.deliverables.includes(item.label.replace(/^完成\s*/, '')) ? '本周产出' : '交付物'}</span>
          </article>
        ))}
      </div>
    </DetailSection>
  )
}

function WeekRecommendedQuestions({ questions }) {
  return (
    <DetailSection id="week-questions" title="推荐题目">
      <div className="week-question-grid">
        {questions.map((text) => {
          const matchedQuestion = findRecommendedQuestion(text)
          return (
            <article className="week-question-card" key={text}>
              <div className="question-card-head">
                <span>{matchedQuestion?.category || '推荐练习'}</span>
                <strong>{matchedQuestion?.difficulty || '按需'}</strong>
              </div>
              <h3>{matchedQuestion?.question || text}</h3>
              {matchedQuestion ? <p>{matchedQuestion.focus}</p> : <p>进入题库后按关键词或相关分类练习。</p>}
              <a className="button secondary" href="#/interview-bank">
                进入题库练习
              </a>
            </article>
          )
        })}
      </div>
    </DetailSection>
  )
}

function WeekReportExport({ progress, week }) {
  const [markdown, setMarkdown] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const currentMarkdown = markdown || buildWeekReportMarkdown(week, progress)

  const generateMarkdown = () => {
    setMarkdown(buildWeekReportMarkdown(week, progress))
    setCopyStatus('已生成，可复制或手动选中文本')
  }

  const copyMarkdown = async () => {
    const text = markdown || buildWeekReportMarkdown(week, progress)
    setMarkdown(text)
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('已生成，可手动复制')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyStatus('已复制')
    } catch {
      setCopyStatus('复制失败，可手动复制')
    }
  }

  return (
    <DetailSection id="week-report" title="周报 Markdown 导出">
      <div className="markdown-export-panel">
        <div className="markdown-output-head">
          <p>本周周报 Markdown</p>
          <div className="week-report-actions">
            <button className="button secondary" type="button" onClick={generateMarkdown}>
              生成本周周报 Markdown
            </button>
            <button className="button primary" type="button" onClick={copyMarkdown}>
              复制 Markdown
            </button>
          </div>
        </div>
        {copyStatus ? <div className="copy-status">{copyStatus}</div> : null}
        <textarea className="markdown-output" readOnly value={currentMarkdown} aria-label="本周周报 Markdown" />
      </div>
    </DetailSection>
  )
}

function CourseWeekDetailPage({ progress, week, onSetActiveWeek, onToggleTask }) {
  if (!week) {
    return (
      <main className="detail-page">
        <a className="back-link" href="#/course">
          返回课程路径
        </a>
        <section className="detail-hero">
          <p>Course Week Not Found</p>
          <h1>没有找到这一周的课程</h1>
          <span>请回到课程路径，选择第 1 到第 12 周。</span>
        </section>
      </main>
    )
  }

  const active = progress.activeCourseWeek === week.weekNumber
  const resourceTasks = getCourseTasksByType(week, 'resource')
  const projectTasksForWeek = getCourseTasksByType(week, 'project')
  const interviewTasksForWeek = getCourseTasksByType(week, 'interview')
  const deliverableTasks = getCourseTasksByType(week, 'deliverable')

  return (
    <main className="detail-page course-week-detail-page">
      <a className="back-link" href="#/course">
        返回课程路径
      </a>
      <section className="detail-hero">
        <p>Week {week.weekNumber}</p>
        <h1>{week.title}</h1>
        <span>{week.goal}</span>
        <div className="course-week-hero-meta">
          <span>{week.theme}</span>
          <strong>{active ? '当前学习周' : '未设为当前学习周'}</strong>
        </div>
        <div className="detail-actions">
          <button className={active ? 'button primary' : 'button secondary'} type="button" onClick={() => onSetActiveWeek(week.weekNumber)}>
            {active ? '当前学习周' : '设为当前学习周'}
          </button>
          <a className="button secondary" href="#/dashboard">
            查看 Dashboard
          </a>
        </div>
      </section>

      <div className="project-detail-content">
        <WeekLearningRoute week={week} />
        <WeekResourceLinks
          progress={progress}
          resources={week.resourceLinks}
          tasks={resourceTasks}
          onToggleTask={onToggleTask}
        />
        <WeekTaskPanel
          entryHref="#/projects/mini-gpt"
          entryLabel="Mini GPT 项目页"
          progress={progress}
          tasks={projectTasksForWeek}
          title="项目任务"
          onToggleTask={onToggleTask}
        />
        <WeekTaskPanel
          entryHref="#/interview-bank"
          entryLabel="进入题库"
          progress={progress}
          tasks={interviewTasksForWeek.length > 0 ? interviewTasksForWeek : resourceTasks.filter((task) => task.id.includes('bank'))}
          title="面试训练任务"
          onToggleTask={onToggleTask}
        />
        <div className="week-interview-actions">
          <a className="button secondary" href="#/interview-bank">
            进入题库
          </a>
          <a className="button secondary" href="#/mock-interview">
            开始 Mock Interview
          </a>
        </div>
        <WeekDeliverables progress={progress} tasks={deliverableTasks} week={week} onToggleTask={onToggleTask} />
        <WeekRecommendedQuestions questions={week.recommendedQuestions} />
        <section className="project-next-callout" aria-label="本周复盘提示">
          <p>Weekly Review</p>
          <h2>{week.reviewPrompt}</h2>
          <a href="#/review">前往错题复盘与导出</a>
        </section>
        <WeekReportExport progress={progress} week={week} />
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

function CourseEntrySection() {
  return (
    <section className="section course-entry-section" id="course-entry">
      <div>
        <SectionHeading
          eyebrow="12-Week Course"
          title="12 周课程路径"
          description="如果你不知道先学什么，可以从这里开始。课程路径会把资源学习、Mini GPT 项目、题库练习和复盘导出按周串起来。"
        />
        <div className="project-actions">
          <a className="resource-link primary-link" href="#/course">
            开始 12 周课程
          </a>
          <a className="resource-link secondary-link" href="#/dashboard">
            查看学习进度
          </a>
        </div>
      </div>
      <div className="course-entry-steps">
        <div>资源学习</div>
        <div>Mini GPT 实践</div>
        <div>题库训练</div>
        <div>Mock Interview</div>
        <div>错题复盘导出</div>
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
            <a className="button secondary" href="#/course">
              进入 12 周课程
            </a>
            <a className="button secondary" href="#/portfolio">
              作品集工具
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
      <CourseEntrySection />
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
  const { resourceSlug, projectSlug, page, courseWeekNumber } = useHashRoute()
  const {
    progress,
    recordExport,
    recordPortfolioExport,
    resetProgress,
    saveResumeOptimizerOutputs,
    saveMockInterview,
    setActiveCourseWeek,
    setPortfolioRole,
    toggleCourseTask,
    togglePortfolioChecklist,
    toggleProgress,
    toggleQuestionMastered,
    updateBehavioralStoryDraft,
    updateBehavioralStoryFollowUp,
    updateResumeOptimizer,
  } = useLocalProgress()
  const selectedResource = resourceSlug ? resourcesBySlug[resourceSlug] : null
  const selectedProject = projectSlug ? projectsBySlug[projectSlug] : null
  const selectedCourseWeek = courseWeekNumber ? getCourseWeekByNumber(courseWeekNumber) : null

  useEffect(() => {
    if (resourceSlug || projectSlug || page) {
      window.scrollTo(0, 0)
      return
    }

    const anchorId = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : ''
    if (anchorId) {
      requestAnimationFrame(() => document.getElementById(anchorId)?.scrollIntoView())
    }
  }, [resourceSlug, projectSlug, page, courseWeekNumber])

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
      ) : page === 'course' ? (
        <CoursePage
          progress={progress}
          onSetActiveWeek={setActiveCourseWeek}
          onToggleTask={toggleCourseTask}
        />
      ) : page === 'course-week' ? (
        <CourseWeekDetailPage
          progress={progress}
          week={selectedCourseWeek}
          onSetActiveWeek={setActiveCourseWeek}
          onToggleTask={toggleCourseTask}
        />
      ) : page === 'portfolio' ? (
        <PortfolioPage
          progress={progress}
          onRecordExport={recordPortfolioExport}
          onSaveOptimizerOutputs={saveResumeOptimizerOutputs}
          onSelectRole={setPortfolioRole}
          onToggleChecklist={togglePortfolioChecklist}
          onUpdateFollowUp={updateBehavioralStoryFollowUp}
          onUpdateOptimizer={updateResumeOptimizer}
          onUpdateStoryDraft={updateBehavioralStoryDraft}
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

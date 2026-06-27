import { useEffect, useState } from 'react'
import roadmapHero from './assets/roadmap-hero.png'
import {
  capabilities,
  checklist,
  projectTasks,
  timelineSteps,
  weeks,
} from './data'
import { resources, resourcesBySlug } from './data/resources'
import './App.css'

const navItems = [
  { label: '能力地图', href: '#capabilities' },
  { label: '学习路线', href: '#roadmap' },
  { label: '资源地图', href: '#resources' },
  { label: '12 周计划', href: '#plan' },
]

const detailNavItems = [
  { id: 'positioning', label: '资源定位' },
  { id: 'goals', label: '学习目标' },
  { id: 'guide', label: '中文导读' },
  { id: 'concepts', label: '核心概念' },
  { id: 'glossary', label: '术语表' },
  { id: 'notes', label: '学习笔记' },
  { id: 'exercises', label: '代码练习' },
  { id: 'questions', label: '面试问题' },
  { id: 'outputs', label: '学习产出' },
]

function getResourceSlugFromHash() {
  const match = window.location.hash.match(/^#\/resources\/([^/?#]+)/)
  return match ? decodeURIComponent(match[1]) : null
}

function useResourceRoute() {
  const [slug, setSlug] = useState(getResourceSlugFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setSlug(getResourceSlugFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return slug
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

function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
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
          <DetailSection title="资源定位：这份资料解决什么面试能力缺口">
            <p id="positioning">{resource.positioning}</p>
          </DetailSection>

          <DetailSection title="学习目标：学完应该掌握什么">
            <div id="goals">
              <BulletList items={resource.goals} />
            </div>
          </DetailSection>

          <DetailSection title="中文导读：这份资料的主线">
            <div id="guide" className="note-stack">
              {resource.guide.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="核心概念">
            <div id="concepts" className="concept-cloud">
              {resource.concepts.map((concept) => (
                <span key={concept}>{concept}</span>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="术语表：英文术语 + 中文解释">
            <dl id="glossary">
              <TermTable terms={resource.glossary} />
            </dl>
          </DetailSection>

          <DetailSection title="学习笔记">
            <div id="notes">
              <BulletList items={resource.notes} />
            </div>
          </DetailSection>

          <DetailSection title="代码练习">
            <div id="exercises">
              <BulletList items={resource.exercises} />
            </div>
          </DetailSection>

          <DetailSection title="面试问题">
            <div id="questions">
              <BulletList items={resource.interviewQuestions} />
            </div>
          </DetailSection>

          <DetailSection title="学习产出">
            <div id="outputs">
              <BulletList items={resource.outputs} />
            </div>
            <a className="resource-link primary-link detail-original" href={resource.link} target="_blank" rel="noreferrer">
              查看原文
            </a>
          </DetailSection>
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
  const resourceSlug = useResourceRoute()
  const selectedResource = resourceSlug ? resourcesBySlug[resourceSlug] : null

  useEffect(() => {
    if (resourceSlug) {
      window.scrollTo(0, 0)
      return
    }

    const anchorId = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : ''
    if (anchorId) {
      requestAnimationFrame(() => document.getElementById(anchorId)?.scrollIntoView())
    }
  }, [resourceSlug])

  return (
    <div id="top" className="app-shell">
      <Header />
      {resourceSlug ? <ResourceDetail resource={selectedResource} /> : <HomePage />}
      <SiteFooter />
    </div>
  )
}

export default App

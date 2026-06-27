import roadmapHero from './assets/roadmap-hero.png'
import {
  capabilities,
  checklist,
  projectTasks,
  resources,
  timelineSteps,
  weeks,
} from './data'
import './App.css'

const navItems = [
  { label: '能力地图', href: '#capabilities' },
  { label: '学习路线', href: '#roadmap' },
  { label: '资源地图', href: '#resources' },
  { label: '12 周计划', href: '#plan' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到顶部">
        <span className="brand-mark" aria-hidden="true">AI</span>
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
        description="每个资源都对应一个面试准备缺口，避免为了收藏而收藏。"
      />
      <div className="resource-grid">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.name}>
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
            <a className="resource-link" href={resource.link} target="_blank" rel="noreferrer">
              打开资源
            </a>
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

function App() {
  return (
    <div id="top" className="app-shell">
      <Header />

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
            它把求职准备拆成可学习、可实践、可复盘的能力模块，而不是把结果包装成捷径。
          </p>
        </section>

        <CapabilityMap />
        <RoadmapTimeline />
        <ResourceCards />
        <PracticeProject />
        <WeeklyPlan />
        <ProgressChecklist />
      </main>

      <footer className="site-footer">
        <div>
          <strong>Based on public learning resources and Alisa Liu's job search notes</strong>
          <p>Learning roadmap for personal study and AI Lab interview preparation</p>
        </div>
        <a href="#top">回到顶部</a>
      </footer>
    </div>
  )
}

export default App

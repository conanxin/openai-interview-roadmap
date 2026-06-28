export const resourceDetails = [
  {
    slug: 'alisa-job-search',
    name: 'Alisa Liu Job Search Notes',
    stage: '准备总览',
    problem: '把 OpenAI / 顶级 AI Lab 面试从神秘流程拆成可训练的能力模块。',
    advice: '先读一遍建立预期，再把每类面试映射到自己的项目、代码和表达准备。',
    link: 'https://alisawuffles.github.io/blog/job-search/',
    positioning: '这份笔记解决的是“我到底要准备什么”的问题。它不是题库，而是把 Research Scientist 求职里的 coding、ML coding、technical discussion、research discussion、job talk 和 behavioral 串成一张真实流程图。',
    goals: [
      '理解顶级 AI Lab 面试通常不是单点考试，而是多轮能力采样。',
      '把自己的短板归类到 coding、research、systems、behavioral 等训练模块。',
      '为每一轮准备可复用的项目故事、实验复盘和技术判断。',
      '建立“面试表达也是研究能力的一部分”的意识。',
    ],
    guide: [
      '这份资料最重要的价值，是把求职准备从“刷很多材料”改成“证明自己能在研究环境里工作”。OpenAI / AI Lab 的面试往往会同时看代码能力、研究品味、技术沟通、项目 ownership 和协作方式。',
      '阅读时不要只记录流程名称，而要追问每一轮到底在采样什么信号：coding 看你能否稳定解决问题，ML coding 看你是否真正理解模型实现，technical discussion 看你能否拆解新问题，research discussion 看你的判断和方向感。',
      '把它当作个人准备仪表盘：每读到一种面试形式，就写下自己可以用哪个项目、哪段代码、哪次失败和哪条 insight 来回应。',
    ],
    concepts: [
      '面试轮次与能力采样',
      'ML Coding 和 General Coding 的差异',
      'Research Discussion 的故事结构',
      'Behavioral stories 的证据化表达',
      'Job Talk 的主线设计',
      '失败经历复盘',
      '项目 ownership',
      '技术沟通密度',
    ],
    glossary: [
      { term: 'Research Scientist', explanation: '以研究问题、实验判断和论文/产品影响为核心的研究岗位。' },
      { term: 'ML Coding', explanation: '围绕模型、张量、loss、训练循环和推理逻辑的代码面试。' },
      { term: 'Technical Discussion', explanation: '围绕一个技术问题持续追问假设、取舍、实验和边界。' },
      { term: 'Behavioral', explanation: '通过真实经历判断协作、抗压、成长和价值观匹配。' },
      { term: 'Job Talk', explanation: '系统展示一个代表性研究或工程项目的长形式报告。' },
    ],
    notes: [
      '准备顺序建议先定“面试地图”，再补知识。否则很容易陷入资源收集，却不知道每份资料服务哪一轮。',
      '每个项目故事都应该包含背景、你的决策、关键实验、失败分支、最终结果和下一步方向。',
      'AI Lab 面试里的强表达不是夸大成果，而是能清楚说出为什么这样做、还可以怎么做、哪些结论不可靠。',
    ],
    exercises: [
      '把自己的 3 个项目分别写成 5 分钟、15 分钟、30 分钟版本。',
      '列出 5 个 behavioral stories：冲突、失败、成长、协作、模糊问题推进。',
      '把准备清单分成 coding、ML coding、technical discussion、research discussion 四列。',
      '为每一种面试类型准备 1 个可验证产出：代码、笔记、讲稿、mock 记录或复盘。',
      '做一次 60 分钟 mock interview，并用复盘模板记录卡点和下一步行动。',
    ],
    interviewQuestions: [
      '你最有代表性的项目里，真正的新 insight 是什么？',
      '如果给你多 3 个月，你会如何推进这个方向？',
      '一次失败实验如何改变了你的判断？',
      '你如何解释自己适合 OpenAI / AI Lab 的研究环境？',
      '你如何把学习资源转化成可展示的项目和面试表达？',
    ],
    lectureSections: [
      {
        title: '1. 这篇笔记真正重要的地方',
        paragraphs: [
          'Alisa Liu 的求职笔记最有价值的地方，不是列出了多少资源，而是把 AI Lab 求职拆成了可训练的能力系统。你会看到 coding、ML coding、technical discussion、research discussion、behavioral、job talk 并不是孤立环节，而是在反复验证同一件事：你能否在高不确定性的 AI 研究环境里产出可靠工作。',
          '因此阅读这类笔记时，不要停在“别人被问了什么”。更重要的是追问：这些问题背后在采样什么能力？我现在有哪些证据能证明自己具备这个能力？还缺哪些证据？',
        ],
      },
      {
        title: '2. “资源清单”不是核心，“能力转化”才是核心',
        paragraphs: [
          '很多准备者会不断收藏课程、博客和题单，但真正进入面试时，面试官看不到你的收藏夹，只看到你的表达、代码、项目判断和复盘能力。',
          '能力转化的路径是：学习资源变成中文笔记，中文笔记变成可运行代码，代码变成可展示项目，项目变成 research/project story，story 再通过 mock interview 打磨成面试现场的稳定表达。',
        ],
      },
      {
        title: '3. AI Lab 面试能力模型',
        paragraphs: [
          'AI Lab 面试通常同时看三层能力：基础执行力、模型理解力和研究判断力。基础执行力对应 general coding、边界条件和沟通节奏；模型理解力对应 Transformer、loss、backward、decoding、post-training；研究判断力对应实验设计、失败复盘、方向选择和未来工作。',
          'Behavioral 和 Job Talk 不是“软问题”，它们是在验证你是否有 ownership、协作能力、长期思考和真实项目经验。越是顶级团队，越会关心你如何在模糊问题中推进。',
        ],
      },
      {
        title: '4. 从学习资源到面试表现的路径',
        paragraphs: [
          '每份资源都应该落到一个可见产出。CS336 对应语言模型系统图，Transformer from Scratch 对应 Mini GPT 仓库，Backpropagation 对应手写 backward，GRPO/Policy Gradient 对应后训练解释，Scaling 对应系统 trade-off 讨论。',
          '面试表现不是临场发挥，而是把这些产出压缩成清晰表达。一个好的准备动作通常同时有三种结果：你写了代码，你写了笔记，你能在 mock 中讲出来。',
        ],
      },
      {
        title: '5. 面试类型拆解',
        paragraphs: [
          'ML Coding 考 tensor shape、模型组件和训练细节；General Coding 考数据结构、算法和工程稳定性；Technical Discussion 考你能否围绕一个技术点持续分析假设、边界和 trade-off。',
          'Research Discussion 考项目 insight 和未来方向；Behavioral 考协作、失败、成长和 ownership；Math 考线代、概率、反向传播和优化直觉；Job Talk 考你是否能把一个核心项目讲成完整故事。',
        ],
      },
      {
        title: '6. 求职节奏：准备、投递、面试、复盘、谈 offer',
        paragraphs: [
          '准备阶段要先定主线：我用哪个项目证明自己？我缺哪类面试能力？投递阶段要把简历、GitHub、个人页面和 referral 话术对齐，不要让别人替你猜你的强项。',
          '面试阶段要把每一轮当作信息采样：被问到的问题、卡住的概念、表达不顺的故事都要记录。复盘阶段要快速补洞，谈 offer 阶段则要基于岗位匹配、团队方向、成长空间和风险做判断。',
        ],
      },
      {
        title: '7. 如何把求职准备变成每周系统',
        paragraphs: [
          '不要等“准备完美”再投递。更稳的方式是每周形成一个闭环：补一块知识，产出一份材料，做一次 mock，复盘一次卡点，然后调整下一周重点。',
          '这个节奏能避免两种常见问题：只学习不投递，或者只投递不复盘。AI Lab 求职本质上是一个迭代系统，和训练模型一样，需要数据、反馈和更新。',
        ],
      },
    ],
    structureDiagram: [
      '学习资源',
      '  -> 中文笔记',
      '  -> 代码实现',
      '  -> 可展示项目',
      '  -> mock interview',
      '  -> research / project story',
      '  -> referral / application',
      '  -> interview loop',
      '  -> 面试复盘',
      '  -> offer negotiation',
    ],
    interviewPrepMatrix: [
      {
        type: 'ML Coding',
        focus: 'Transformer、loss、decoding、backward、training loop、tensor shape 和数值稳定性。',
        preparation: '反复手写 Mini GPT、attention、softmax cross entropy、linear backward，并用测试验证 shape 和 mask。',
        output: 'Mini GPT 仓库、shape trace、backward 推导笔记。',
        resource: 'Transformer from Scratch / Backpropagation',
        resourceHref: '#/resources/transformer-from-scratch',
      },
      {
        type: 'General Coding',
        focus: '数组、哈希、双指针、栈、二分、树图、堆、DP，以及边界条件和复杂度分析。',
        preparation: '用少量高频题建立模板和沟通节奏，每题记录算法选择理由。',
        output: '30 题刷题日志、模板笔记、45 分钟模拟记录。',
        resource: 'LeetCode',
        resourceHref: '#/resources/leetcode',
      },
      {
        type: 'Technical Discussion',
        focus: '围绕 positional encoding、parallelism、PPO vs GRPO、scaling 等问题讨论假设、取舍和实验设计。',
        preparation: '把每个技术点写成“概念、为什么、trade-off、如何验证”的四段回答。',
        output: '技术问答卡片、实验设计草稿、trade-off 表。',
        resource: 'Self-Attention / GRPO / Scaling',
        resourceHref: '#/resources/scaling',
      },
      {
        type: 'Research Discussion',
        focus: '讲清楚自己的项目问题、方法、关键 insight、失败分支、未来方向和局限。',
        preparation: '为 1-2 个核心项目准备 5 分钟、15 分钟、30 分钟版本，并做追问演练。',
        output: '项目故事稿、insight 清单、未来工作路线图。',
        resource: 'Alisa Job Search Notes',
        resourceHref: '#/resources/alisa-job-search',
      },
      {
        type: 'Behavioral',
        focus: '协作、冲突、失败、快速学习、ownership、成长和价值观匹配。',
        preparation: '用 STAR 结构准备 5 个真实故事，每个故事突出一个能力信号。',
        output: 'behavioral stories 文档、mock 录音、复盘记录。',
        resource: 'Alisa Job Search Notes',
        resourceHref: '#/resources/alisa-job-search',
      },
      {
        type: 'Math',
        focus: '线代、概率、反向传播、优化、梯度流和常见 loss 的直觉。',
        preparation: '把公式转成计算图和 shape 解释，优先练会反向传播与概率解释。',
        output: 'backprop 推导笔记、概率/优化自测题。',
        resource: 'Backpropagation',
        resourceHref: '#/resources/backpropagation',
      },
      {
        type: 'Job Talk',
        focus: '系统展示一个研究或工程项目的背景、问题、方法、实验、影响和下一步。',
        preparation: '准备 30 分钟讲稿和 10 张以内核心 slides，提前演练时间控制和追问。',
        output: 'job talk 大纲、slides、追问答案库。',
        resource: 'Transformer from Scratch / CS336',
        resourceHref: '#/resources/cs336',
      },
    ],
    behavioralStories: [
      {
        title: '最难 debug 的项目',
        situation: '选择一个真实项目，例如 Mini GPT loss 不下降、attention mask 错误、数据管道污染或训练不稳定。',
        challenge: '问题现象不直接指向根因，可能牵涉 shape、数据、优化器、数值稳定性或评估脚本。',
        action: '描述你如何缩小范围：复现实验、打印 shape、写最小测试、对比 baseline、记录假设和排除路径。',
        result: '说明 bug 如何被定位和修复，以及修复后指标、训练曲线或系统稳定性如何变化。',
        signal: '突出系统化 debug、耐心、实验纪律和对模型实现细节的理解。',
      },
      {
        title: '失败后如何调整',
        situation: '选择一次实验、项目方向或申请策略失败的经历。',
        challenge: '原假设不成立，指标没有改善，或者外部反馈显示当前表达/项目不够有说服力。',
        action: '说明你如何复盘失败原因，区分数据问题、方法问题、评估问题和沟通问题，并重新设计下一步。',
        result: '给出调整后的结果，即使不是巨大成功，也要说明你学到了什么，并如何影响后续判断。',
        signal: '突出成长型心态、研究判断、诚实复盘和快速迭代能力。',
      },
      {
        title: '和别人协作冲突',
        situation: '选择一次和同学、合作者、导师或工程伙伴在优先级、技术路线或交付标准上不一致的经历。',
        challenge: '冲突不是人际戏剧，而是目标、信息、风险偏好或时间约束不一致。',
        action: '说明你如何澄清共同目标，拆分事实和观点，提出可验证方案，并推动对齐。',
        result: '描述最终协作结果、关系是否改善、项目是否推进，以及你下次会怎样更早对齐。',
        signal: '突出沟通、ownership、团队意识和在不确定性中推进问题的能力。',
      },
      {
        title: '快速学习新领域',
        situation: '选择一次你必须快速掌握新技术的经历，例如 RLHF、GRPO、scaling、推理系统或新框架。',
        challenge: '时间有限，资料很多，且需要把知识转化成项目或讨论能力。',
        action: '说明你的学习策略：先建概念地图，再做最小实现，再写中文解释，再用 mock 问答测试理解。',
        result: '给出可见产出：代码、笔记、技术分享、实验结果或面试中能讲清楚的回答。',
        signal: '突出学习速度、结构化思考和把知识转成行动的能力。',
      },
      {
        title: '最有 insight 的 AI 项目',
        situation: '选择一个你真正深入过的 AI 项目，而不是只调包完成的 demo。',
        challenge: '项目中必须有一个非显然判断，例如数据质量比模型更关键、mask bug 导致虚假指标、某个 baseline 更强或推理成本成为瓶颈。',
        action: '说明你如何发现 insight，做了哪些实验或对比，如何排除其他解释。',
        result: '说明这个 insight 改变了项目方向、实验设计、模型实现或产品决策。',
        signal: '突出研究品味、实验判断、技术深度和能从失败/数据中提炼结论的能力。',
      },
    ],
    weeklyJobPlan: [
      {
        week: '第 1 周',
        focus: '整理简历和项目主线',
        actions: [
          '选出 1 个主项目和 1 个补充项目，写出问题、方法、结果、insight 和未来方向。',
          '更新简历，让每条项目经历都包含动作、技术细节和可验证结果。',
          '整理 GitHub / 项目 README / 个人页面入口，减少面试官理解成本。',
        ],
        output: '一版面向 AI Lab 的简历、项目主线文档和 5 分钟项目讲稿。',
      },
      {
        week: '第 2 周',
        focus: '补齐 ML Coding / Technical Discussion',
        actions: [
          '重写一次 Mini GPT 的 attention、block、loss 和 generation。',
          '补齐 Backpropagation、Policy Gradient、GRPO、Scaling 的答题卡片。',
          '为每个技术点准备一个“怎么验证”的实验设计回答。',
        ],
        output: 'ML coding 代码包、技术讨论问答卡和一次白板讲解记录。',
      },
      {
        week: '第 3 周',
        focus: 'mock interview 和 behavioral stories',
        actions: [
          '完成至少 2 次 mock：一次 coding/ML coding，一次 research/behavioral。',
          '把 5 个 behavioral stories 写成 STAR 结构，并压缩成 90 秒版本。',
          '录音复盘表达，标出冗长、模糊和没有证据支撑的句子。',
        ],
        output: 'mock interview 记录、5 个 behavioral stories 和改进清单。',
      },
      {
        week: '第 4 周',
        focus: '投递、内推、复盘、迭代',
        actions: [
          '建立目标团队列表，并为每个团队写一句匹配理由。',
          '准备 referral message，清楚说明研究兴趣、项目证据和目标岗位。',
          '每次面试后 24 小时内复盘，并把卡点映射到站内资源页补齐。',
        ],
        output: '投递追踪表、内推话术、面试复盘文档和下一轮学习计划。',
      },
    ],
    interviewReviewTemplate: [
      { label: '面试类型', prompt: '这是 ML Coding、General Coding、Technical Discussion、Research Discussion、Behavioral、Math 还是 Job Talk？' },
      { label: '被问到的问题', prompt: '逐条记录原问题，尽量保留面试官追问的原始措辞。' },
      { label: '哪些回答卡住', prompt: '标出卡住位置：概念不清、例子不足、代码 bug、复杂度分析、项目表达还是英文/中文组织。' },
      { label: '哪些概念不熟', prompt: '把薄弱点映射到具体概念，例如 causal mask、advantage、KV cache、gradient flow、binary search invariant。' },
      { label: '需要补的资源页', prompt: '写下要回看的站内资源页，例如 Backpropagation、GRPO、Scaling、LeetCode、Transformer from Scratch。' },
      { label: '下一次改进动作', prompt: '只写 1-3 个可执行动作，例如重写一段代码、补一张图、做一次 mock、改写项目故事。' },
    ],
    selfTest: [
      {
        question: '1. 为什么 AI Lab 面试不只是刷题？',
        answer: '因为它同时采样 coding、ML 实现、研究判断、技术讨论、项目表达、协作和 ownership。刷题只覆盖其中一部分。',
      },
      {
        question: '2. “资源清单”如何转化成面试能力？',
        answer: '要把资源变成笔记、代码、项目、mock 表达和复盘记录，最终形成可展示证据。',
      },
      {
        question: '3. 一个好的 Research Discussion 项目故事应该包含什么？',
        answer: '背景问题、你的方法、关键实验、失败分支、核心 insight、局限和未来方向。',
      },
      {
        question: '4. Behavioral story 为什么要证据化？',
        answer: '因为面试官需要从真实行动和结果判断协作、抗压、成长和 ownership，而不是听抽象形容词。',
      },
      {
        question: '5. 面试后 24 小时内最应该做什么？',
        answer: '记录问题、卡点、薄弱概念、需要补的资源页和下一次具体改进动作。',
      },
    ],
    completionChecklist: [
      '我能解释 AI Lab 面试为什么不只是刷题。',
      '我有 1 个可展示的 Mini GPT / LLM 项目。',
      '我能把学习资源映射到面试类型和准备产出。',
      '我准备了 5 个 behavioral stories。',
      '我能讲清楚自己的项目 insight 和未来方向。',
      '我做过至少 3 次 mock interview。',
      '我有面试复盘记录，并能把卡点映射到具体资源页。',
      '我有一版简历、项目主线和 referral message 草稿。',
    ],
    outputs: [
      '一页个人面试能力地图。',
      '5 个 behavioral stories 草稿。',
      '一个可讲 30 分钟的 job talk 大纲。',
    ],
  },
  {
    slug: 'cs336',
    name: 'Stanford CS336: Language Modeling from Scratch',
    stage: '第 1-2 周',
    problem: '建立 LLM 从零训练的主线框架。',
    advice: '把它当作整条路线的主课：每看一讲，都落到一个能实现或能解释的模块。',
    link: 'https://stanford-cs336.github.io/spring2025/',
    positioning: 'CS336 是这套路线的主线课程，因为它不是只讲 Transformer 某一个局部，而是把语言模型训练从数据、tokenizer、模型、训练循环、评估、扩展和系统成本串起来。',
    goals: [
      '理解 tokenizer、Transformer、training loop、scaling 和 data cleaning 如何组成一个完整训练系统。',
      '能解释从原始文本到 token，再到 logits、loss、梯度更新的端到端路径。',
      '能写出一个最小语言模型训练脚本，并知道每个模块的风险点。',
      '能在面试中讨论数据质量、模型规模、算力预算和评估指标之间的关系。',
    ],
    guide: [
      'CS336 的学习主线可以理解为“从语料到模型能力”。data cleaning 决定模型能看到什么世界，tokenizer 决定文本如何变成离散符号，Transformer 决定信息如何在上下文里流动，training loop 决定模型如何通过 loss 更新参数，scaling 决定在更多数据、更多参数和更多计算量下能力如何变化。',
      'tokenizer 不是预处理小工具，而是模型输入空间的设计。一个不合适的 tokenizer 会影响序列长度、稀有词、代码/数学文本表达和训练效率。',
      'training loop 是把所有知识连起来的地方：batch、forward、loss、backward、optimizer、checkpoint、eval、logging 都在这里相遇。学完 CS336，应该能把这些模块讲成一个系统，而不是孤立术语。',
    ],
    concepts: [
      'Language modeling objective',
      'Tokenizer 与 token distribution',
      'Decoder-only Transformer',
      'Cross entropy loss',
      'Training loop',
      'Data cleaning',
      'Scaling law',
      'Evaluation',
      'Checkpointing',
      'Compute budget',
    ],
    glossary: [
      { term: 'Tokenizer', explanation: '把文本切分成模型可处理 token id 的组件。' },
      { term: 'Training loop', explanation: '反复执行取 batch、forward、loss、backward、optimizer step 的训练流程。' },
      { term: 'Scaling law', explanation: '描述模型性能随参数、数据和计算量变化的经验规律。' },
      { term: 'Data cleaning', explanation: '去重、过滤低质量文本、处理污染和格式问题的数据准备过程。' },
      { term: 'Checkpoint', explanation: '训练中保存的模型参数和优化器状态快照。' },
    ],
    notes: [
      '把 CS336 当作主线课程的原因：它给你一张语言模型系统图，后面的 GPT-2、attention、backprop、GRPO 和 scaling 都能挂到这张图上。',
      '学习 tokenizer 时要记录：词表大小如何影响序列长度，BPE 为什么常见，特殊 token 如何影响训练和生成。',
      '学习 Transformer 时要记录：embedding、position、attention、MLP、residual、layer norm、logits 各自负责什么。',
      '学习 scaling 时要记录：参数、数据、计算量不是越多越好，而是要匹配预算、吞吐、数据质量和目标能力。',
    ],
    exercises: [
      '用一个小文本语料训练或调用 BPE tokenizer，统计 token 长度分布。',
      '写一个最小 training loop，包含 train/eval loss、checkpoint 和 generation sample。',
      '对同一个小模型改变 batch size、learning rate、context length，记录 loss 曲线。',
      '写一页 data cleaning checklist：去重、低质过滤、PII、污染、格式归一。',
    ],
    interviewQuestions: [
      '为什么 CS336 适合作为语言模型学习主线？',
      'tokenizer、Transformer、training loop、scaling、data cleaning 之间是什么关系？',
      '如果训练 loss 下降但 eval loss 不降，你会如何排查？',
      '在固定 compute 下，你如何权衡模型规模和数据规模？',
    ],
    outputs: [
      '一张从 raw text 到 generated text 的端到端流程图。',
      '一个 Mini LM training loop 仓库。',
      '一份 tokenizer / data cleaning / scaling 学习笔记。',
    ],
  },
  {
    slug: 'illustrated-gpt2',
    name: 'The Illustrated GPT-2',
    stage: '第 2-3 周',
    problem: '把 GPT-2 的 decoder-only Transformer 结构可视化理解清楚。',
    advice: '边看边画 tensor shape，把每个图解模块映射成 PyTorch 类和张量维度。',
    link: 'https://jalammar.github.io/illustrated-gpt2/',
    positioning: '这份资料适合把抽象的 GPT 架构变成可视化心智模型，尤其适合在手写 Mini GPT 前建立 decoder-only Transformer 的模块顺序。',
    goals: [
      '理解 decoder-only Transformer 如何从 token 生成下一个 token。',
      '掌握 token embedding、positional encoding、self-attention、MLP 和 logits 的连接方式。',
      '能解释 generation 为什么是一步一步 autoregressive 进行的。',
      '能把图解转化为一个最小 GPT 模型类。',
    ],
    guide: [
      'GPT-2 的核心是 decoder-only Transformer：它只使用因果 self-attention，通过 mask 保证当前位置只能看到过去和当前位置，训练目标是预测下一个 token。',
      'token embedding 把离散 token id 映射成连续向量，positional encoding 或 position embedding 给模型提供顺序信息。没有位置信息，attention 本身无法区分词序。',
      'generation 阶段不是一次生成整篇文章，而是把已有 token 输入模型，得到下一个 token 的分布，采样或取最大概率 token，再把它拼回上下文继续循环。',
    ],
    concepts: [
      'Decoder-only Transformer',
      'Token embedding',
      'Positional encoding',
      'Causal self-attention',
      'Residual connection',
      'Layer normalization',
      'Logits',
      'Autoregressive generation',
    ],
    glossary: [
      { term: 'Decoder-only', explanation: '只使用 Transformer decoder 堆叠结构的自回归语言模型架构。' },
      { term: 'Token embedding', explanation: '把 token id 映射成可训练向量的查表层。' },
      { term: 'Positional encoding', explanation: '向模型注入序列位置信息的机制。' },
      { term: 'Logits', explanation: 'softmax 前的未归一化词表分数。' },
      { term: 'Autoregressive', explanation: '每一步基于已有上下文预测下一个 token 的生成方式。' },
    ],
    notes: [
      '理解 GPT-2 时先抓主线：token ids -> embeddings -> transformer blocks -> logits -> next token。',
      'self-attention 的“看上下文”并不是自然语言理解的魔法，而是 Q/K/V 点积、mask、softmax、加权求和的结果。',
      'generation 质量受模型分布和 decoding 策略共同影响，top-k、top-p、temperature 都是在 logits 后处理阶段发挥作用。',
    ],
    exercises: [
      '画出 batch、time、channel 三个维度在 GPT forward 中的变化。',
      '实现一个只含 embedding、一个 attention block 和 lm head 的 Tiny GPT。',
      '写 greedy、temperature、top-k 三种 generation 函数，并比较输出差异。',
    ],
    interviewQuestions: [
      'decoder-only Transformer 和 encoder-decoder Transformer 的差异是什么？',
      '为什么 GPT 需要 positional encoding？',
      'generation 时为什么要把新 token 拼回上下文？',
      'logits、probability、sampled token 之间是什么关系？',
    ],
    outputs: [
      '一张 GPT-2 forward 流程图。',
      'Tiny GPT forward 代码。',
      '一份 decoding 策略对比笔记。',
    ],
  },
  {
    slug: 'self-attention',
    name: 'CS224n Self-Attention & Transformers',
    stage: '第 2-4 周',
    problem: '补齐 self-attention、mask、position 和 multi-head attention 细节。',
    advice: '重点追问 Q/K/V 的形状、mask 的方向、attention score 的含义和 position encoding 的必要性。',
    link: 'https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf',
    positioning: '这份资料解决的是 Transformer 内部机制问题。它让你不只会调用 attention，而是能解释 attention 为什么能做上下文聚合。',
    goals: [
      '理解 Q/K/V 分别扮演 query、key、value 的角色。',
      '能推导 attention score、softmax 权重和 weighted sum。',
      '清楚 causal mask 与 padding mask 的差异。',
      '理解 multi-head attention 为什么提供多组子空间视角。',
      '能解释 position encoding 为什么补足序列顺序信息。',
    ],
    guide: [
      'Self-attention 可以看作每个 token 对上下文里其他 token 发起查询。Q 表示“我在找什么”，K 表示“我有什么特征可被匹配”，V 表示“如果被关注，我贡献什么信息”。',
      'attention score 通常来自 QK^T，再除以 sqrt(d_k) 稳定数值尺度。softmax 后得到权重，用这些权重对 V 做加权求和，就得到每个位置聚合上下文后的表示。',
      'mask 是语言模型面试里很容易追问的细节。causal mask 防止模型偷看未来，padding mask 防止模型关注无意义填充位置。multi-head attention 则让不同 head 学到不同关系，例如语法、指代、局部邻近或长程依赖。',
    ],
    concepts: [
      'Query / Key / Value',
      'Attention score',
      'Scaled dot-product attention',
      'Softmax weights',
      'Causal mask',
      'Padding mask',
      'Multi-head attention',
      'Position encoding',
      'Context aggregation',
    ],
    glossary: [
      { term: 'Query', explanation: '当前位置发出的查询向量，用于匹配其他位置。' },
      { term: 'Key', explanation: '每个位置提供的可匹配特征向量。' },
      { term: 'Value', explanation: '被注意到后实际汇入输出的信息向量。' },
      { term: 'Attention score', explanation: 'Q 与 K 的相似度分数，决定关注强度。' },
      { term: 'Causal mask', explanation: '遮住未来 token 的 mask，用于自回归语言模型。' },
    ],
    notes: [
      'Q/K/V 是三个线性投影，不是三份原始输入。它们让同一个 token 在“查询、被匹配、被读取”三个角色上拥有不同表示。',
      '除以 sqrt(d_k) 是为了避免点积维度变大后 softmax 过于尖锐，导致梯度不稳定。',
      'multi-head 不是简单重复 attention，而是把通道分成多个 head，让模型并行学习多种关系。',
    ],
    exercises: [
      '手写 scaled dot-product attention，输入 B x T x C，输出同形状张量。',
      '构造一个 causal mask，并打印 mask 前后的 attention score。',
      '实现 multi-head attention，检查 concat 后的 shape 是否正确。',
      '写一个单元测试确认第 t 个位置不会关注 t 之后的 token。',
    ],
    interviewQuestions: [
      'Q/K/V 分别是什么，为什么需要三组投影？',
      'attention score 为什么要除以 sqrt(d_k)？',
      'causal mask 和 padding mask 分别解决什么问题？',
      'multi-head attention 比 single-head 多了什么表达能力？',
    ],
    outputs: [
      '一个带 mask 测试的 attention 模块。',
      '一页 Q/K/V 和 mask 的 shape 笔记。',
      '一组可视化 attention weight 的小实验。',
    ],
  },
  {
    slug: 'backpropagation',
    name: 'CS231n Backpropagation',
    stage: '第 3-5 周',
    problem: '建立反向传播、计算图和梯度流的基本功。',
    advice: '不要只背公式，手推 softmax cross entropy、linear layer 和 layer norm 的梯度。',
    link: 'https://cs231n.github.io/optimization-2/',
    positioning: '这份资料补的是“为什么 backward 能工作”。对 ML Coding 来说，能解释 computational graph 和 chain rule，往往比会调用 autograd 更重要。',
    goals: [
      '理解 computational graph 如何把复杂函数拆成局部操作。',
      '掌握 chain rule 如何让局部梯度组合成整体梯度。',
      '能解释 gradient flow、梯度消失和梯度爆炸的直觉。',
      '能手写简单层的 backward pass。',
    ],
    guide: [
      '反向传播的核心不是神秘算法，而是在计算图上反向应用链式法则。forward 保存中间值，backward 从 loss 出发，把每个节点的上游梯度乘以局部梯度，再传给输入。',
      'computational graph 让我们把一个大函数拆成许多小函数。每个小函数只需要知道自己如何对输入求导，整个网络的梯度就能通过链式法则组合出来。',
      'gradient flow 是训练稳定性的关键。如果梯度在很深的网络里不断变小，前层学不到东西；如果不断变大，更新会爆炸。residual connection、normalization、初始化和学习率都会影响梯度流。',
    ],
    concepts: [
      'Computational graph',
      'Chain rule',
      'Local gradient',
      'Upstream gradient',
      'Backward pass',
      'Gradient flow',
      'Gradient check',
      'Vanishing gradient',
      'Exploding gradient',
    ],
    glossary: [
      { term: 'Computational graph', explanation: '把计算拆成节点和边的图结构，用于组织 forward 和 backward。' },
      { term: 'Chain rule', explanation: '复合函数求导规则，反向传播的数学基础。' },
      { term: 'Upstream gradient', explanation: '从 loss 方向传来的上游梯度。' },
      { term: 'Local gradient', explanation: '当前操作对自己输入的局部导数。' },
      { term: 'Backward pass', explanation: '从 loss 反向计算各参数梯度的过程。' },
    ],
    notes: [
      'ML Coding 面试中，如果你能把 backward 说成“上游梯度 x 局部梯度”，很多复杂问题会变得清楚。',
      '手写 backward 时，最容易错的是 shape、broadcast、sum 的反向传播和 softmax/cross entropy 的合并梯度。',
      'gradient check 是调试手写 backward 的好习惯，用数值差分验证解析梯度。',
    ],
    exercises: [
      '手写 y = Wx + b 的 backward，检查 dW、db、dx 的 shape。',
      '推导并实现 softmax cross entropy backward。',
      '写一个数值梯度检查函数，验证手写 backward。',
      '记录一次梯度爆炸或梯度为零的 debug 过程。',
    ],
    interviewQuestions: [
      '反向传播和链式法则是什么关系？',
      'computational graph 为什么有助于自动求导？',
      '什么是 upstream gradient 和 local gradient？',
      '如何判断一个手写 backward 是否正确？',
      '手写 softmax + cross entropy backward 时为什么常把两步合并推导？',
    ],
    lectureSections: [
      {
        title: '1. Computational graph：把大函数拆成可求导的小操作',
        paragraphs: [
          '深度网络本质上是一个很大的复合函数。computational graph 把这个复合函数拆成节点和边：节点代表加法、乘法、矩阵乘、激活函数、loss 等局部操作，边代表张量值如何从一个操作流向下一个操作。',
          '这样做的好处是，每个局部操作只需要知道自己如何对输入求导。框架不需要一次性推导整个 Transformer 的闭式梯度，而是把许多局部梯度沿着图连接起来。',
        ],
      },
      {
        title: '2. Forward pass 和 backward pass：一个保存值，一个传播梯度',
        paragraphs: [
          'forward pass 从输入开始计算输出和 loss，并保存 backward 需要的中间值，例如 linear layer 的输入 x、权重 W，softmax 的概率 p，layer norm 的均值和方差。',
          'backward pass 从 loss 的梯度 1 开始，沿计算图反方向传播。每个节点接收 upstream gradient，乘以自己的 local gradient，然后把结果传给更早的节点。',
        ],
      },
      {
        title: '3. Chain rule：反向传播的唯一核心',
        paragraphs: [
          '链式法则说，复合函数的导数等于外层导数乘以内层导数。写成计算图语言，就是 upstream gradient x local gradient。',
          '如果一个变量被多个后续节点使用，它收到的梯度需要相加。这是很多手写 backward bug 的来源：不是覆盖梯度，而是累加梯度。',
        ],
      },
      {
        title: '4. Scalar、vector、matrix 梯度的直觉',
        paragraphs: [
          '标量对标量的梯度是一个数；标量 loss 对向量的梯度是同形状向量；标量 loss 对矩阵的梯度是同形状矩阵。训练神经网络时，我们通常关心的是每个参数对最终 loss 的影响，所以梯度形状要和参数形状一致。',
          '矩阵梯度可以先从 shape 推理：如果 y = xW + b，x 是 B x Din，W 是 Din x Dout，y 是 B x Dout，那么 dW 必须是 Din x Dout，db 必须是 Dout，dx 必须是 B x Din。',
        ],
      },
      {
        title: '5. Gradient flow：为什么训练会稳定或失控',
        paragraphs: [
          '梯度流描述梯度能否从 loss 稳定地传回前面层。深层网络里，如果局部梯度反复小于 1，容易梯度消失；如果反复大于 1，容易梯度爆炸。',
          'Transformer 里的 residual connection、normalization、合理初始化、learning rate schedule 和 gradient clipping，都是为了让梯度在深层结构里更稳定地流动。',
        ],
      },
      {
        title: '6. 自动求导为什么可行',
        paragraphs: [
          'PyTorch autograd 会在 forward 时记录张量之间的操作关系，形成动态计算图。每个操作注册了自己的 backward 规则，调用 loss.backward() 时，框架按拓扑逆序执行这些规则。',
          '自动求导不是魔法。它只是系统化地做你手写 backward 时会做的事情：保存中间值、接收上游梯度、计算局部梯度、累加到叶子参数的 .grad。',
        ],
      },
      {
        title: '7. ML Coding 面试为什么爱考手写 backward',
        paragraphs: [
          '手写 backward 能暴露候选人是否真正理解 tensor shape、广播、数值稳定性和训练过程。很多人会调用 autograd，但无法解释 loss.backward() 到底沿着什么图、把什么梯度写到哪里。',
          '面试中不一定要求完整实现大模型 backward，但常会要求 linear、softmax cross entropy、layer norm 或 attention 的局部梯度思路。',
        ],
      },
      {
        title: '8. 常见 bug：shape、broadcast 和数值稳定性',
        paragraphs: [
          'shape 错误通常来自矩阵乘法方向、batch 维度求和遗漏、transpose 忘记还原。broadcast 梯度错误常见于 bias、mask、归一化统计量：forward 被广播的维度，backward 往往要 sum 回原形状。',
          'softmax 和 cross entropy 要注意数值稳定性。直接 exp(logits) 可能溢出，通常要先减去每行最大值；softmax 和 cross entropy 合并后，梯度可以简化为 probs - one_hot。',
        ],
      },
    ],
    structureDiagram: [
      '输入 x, 参数 W/b',
      '  -> forward：保存中间值 cache',
      '  -> loss：得到标量目标',
      '  -> backward：从 dloss = 1 开始',
      '      -> upstream gradient x local gradient',
      '      -> 多分支梯度相加',
      '      -> broadcast 维度 sum 回原形状',
      '  -> 参数梯度 dW/db',
      '  -> optimizer 根据梯度更新参数',
    ],
    pseudocode: [
      {
        title: '简单计算图反向传播',
        code: `# z = (x * y) + y
x = value()
y = value()
a = x * y
z = a + y

# backward from z
dz = 1
da = dz * 1
dy_from_add = dz * 1
dx = da * y
dy_from_mul = da * x
dy = dy_from_add + dy_from_mul`,
      },
      {
        title: 'Linear layer backward',
        code: `# forward: y = x @ W + b
# x: [B, Din], W: [Din, Dout], y: [B, Dout]
dy = upstream_gradient

dW = x.T @ dy              # [Din, Dout]
db = dy.sum(axis=0)        # [Dout]
dx = dy @ W.T              # [B, Din]`,
      },
      {
        title: 'Softmax + cross entropy 梯度思路',
        code: `# logits: [B, C], target: [B]
shifted = logits - logits.max(axis=1, keepdims=True)
probs = exp(shifted) / exp(shifted).sum(axis=1, keepdims=True)
loss = -log(probs[range(B), target]).mean()

dlogits = probs
dlogits[range(B), target] -= 1
dlogits /= B`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：反向传播和链式法则是什么关系？',
        answer: '可以这样回答：反向传播就是把链式法则系统地应用在计算图上。forward 先把复合函数拆成局部操作并保存中间值；backward 从 loss 开始，节点接收上游梯度，乘以局部梯度，把结果传给输入。复杂网络的梯度就是这些局部梯度按图结构组合出来的。',
      },
      {
        question: '如果面试官问：loss.backward() 到底做了什么？',
        answer: '可以这样回答：它从标量 loss 的梯度 1 开始，按计算图的逆拓扑顺序调用每个操作的 backward 规则，把梯度传给依赖的张量，并把叶子参数的梯度累加到 .grad。优化器下一步读取这些 .grad 来更新参数。',
      },
      {
        question: '如果面试官问：broadcast 的 backward 为什么容易错？',
        answer: '可以这样回答：forward 里某个张量如果被广播到更大 shape，它在 backward 里会收到多个位置的梯度贡献，所以需要沿被广播的维度求和，回到原始 shape。例如 bias 加到 batch 上，db 要对 batch 维度 sum。',
      },
      {
        question: '如果面试官问：softmax cross entropy 的梯度为什么是 p - y？',
        answer: '可以这样回答：softmax 的 Jacobian 和 cross entropy 的导数相乘后会简化，最终每个类别的 logits 梯度是预测概率减去 one-hot 标签。实际实现还会除以 batch size，并用 logits 减最大值保证数值稳定。',
      },
      {
        question: '如果面试官问：怎么 debug 手写 backward？',
        answer: '可以这样回答：先检查每个梯度 shape 是否和对应变量一致，再用数值梯度做 gradient check，最后和 PyTorch autograd 对比。遇到不一致时重点看 transpose、sum 维度、broadcast 还原和 inplace 修改。',
      },
    ],
    selfTest: [
      {
        question: '1. computational graph 中，一个变量被两个后续节点使用时，梯度如何处理？',
        answer: '来自两个分支的梯度要相加，因为 loss 对该变量的影响来自所有使用路径。',
      },
      {
        question: '2. y = x @ W + b 中，x 是 [B, Din]，W 是 [Din, Dout]，dW 的 shape 是什么？',
        answer: 'dW 是 [Din, Dout]，通常由 x.T @ dy 得到。',
      },
      {
        question: '3. 为什么 bias 的 backward 需要对 batch 维度求和？',
        answer: '因为 bias 在 forward 中被广播到每个样本，backward 要把每个样本贡献累加回原始 bias shape。',
      },
      {
        question: '4. softmax 前为什么常减去每行 logits 的最大值？',
        answer: '为了避免 exp 溢出，同时不改变 softmax 的概率结果。',
      },
      {
        question: '5. 梯度消失会带来什么训练现象？',
        answer: '前面层参数更新很小，loss 下降慢或停滞，深层网络难以学习有效表示。',
      },
    ],
    completionChecklist: [
      '我能画出一个小计算图并手动标注 forward cache 和 backward 梯度。',
      '我能解释 upstream gradient、local gradient 和参数梯度的区别。',
      '我能手写 linear layer backward，并说清楚 dW、db、dx 的 shape。',
      '我能推导 softmax + cross entropy 的核心梯度，并处理数值稳定性。',
      '我能说明 broadcast backward 为什么要 sum 回原维度。',
      '我能用 gradient check 或 PyTorch autograd 验证自己的 backward。',
      '我能列举并排查 shape 错误、梯度消失和梯度爆炸问题。',
    ],
    outputs: [
      '一份 softmax cross entropy 推导笔记。',
      '一个包含 forward/backward/gradient check 的小库。',
      '一张常见操作 backward shape 表。',
    ],
  },
  {
    slug: 'policy-gradient',
    name: 'Introduction to Policy Gradient for LMs',
    stage: '第 8-9 周',
    problem: '理解语言模型后训练中的 policy gradient、reward、advantage 和 KL 约束。',
    advice: '先理解 objective，再比较 SFT、DPO、PPO、GRPO 的数据流和优化对象。',
    link: 'https://huggingface.co/blog/the_n_implementation_details_of_rlhf_with_ppo',
    positioning: '这份资料把语言模型从“预测下一个 token”带到“按 reward 优化行为”。它是理解 RLHF、PPO 和 GRPO 的前置台阶。',
    goals: [
      '理解 policy 在语言模型里就是生成 token 序列的概率分布。',
      '知道 reward model 或规则 reward 如何给生成结果打分。',
      '理解 advantage 为什么表示“比预期好多少”。',
      '理解 KL penalty 为什么用于防止模型偏离参考策略太远。',
    ],
    guide: [
      'SFT 让模型模仿高质量答案，policy gradient 则尝试让模型生成能获得更高 reward 的答案。对于语言模型，policy 是每一步输出 token 的分布，trajectory 是整段生成文本。',
      '直接最大化 reward 很容易让模型钻 reward 漏洞，或者远离原本语言能力。因此 RLHF 常引入 KL 约束，让新策略不要离 reference model 太远。',
      'advantage 的作用是降低方差并提供相对改进信号：不是只看 reward 高低，而是看这次输出相对基线是否更好。',
    ],
    concepts: [
      'Policy',
      'Reward',
      'Trajectory',
      'Policy gradient',
      'Advantage',
      'Baseline',
      'KL penalty',
      'Reference model',
      'PPO',
    ],
    glossary: [
      { term: 'Policy', explanation: '给定上下文后生成下一个动作/token 的概率分布。' },
      { term: 'Reward', explanation: '对模型输出质量的标量评分。' },
      { term: 'Advantage', explanation: '某次输出相对基线表现好多少的信号。' },
      { term: 'KL penalty', explanation: '惩罚新策略偏离参考策略太远的正则项。' },
      { term: 'Reference model', explanation: '通常由 SFT 模型冻结得到，用来约束后训练模型。' },
    ],
    notes: [
      '语言模型里的 RL 难点在于动作空间巨大，reward 稀疏且容易被利用。',
      'KL 不是装饰项，它是让模型保留语言质量和安全边界的重要约束。',
      '理解 PPO 前先理解 policy gradient 的基本目标：提高高 advantage 输出的概率，降低低 advantage 输出的概率。',
    ],
    exercises: [
      '写伪代码：采样回答 -> 计算 reward -> 计算 advantage -> 更新 policy。',
      '对比 SFT loss 和 policy gradient loss 的优化对象。',
      '构造一个简单 reward，例如答案长度或格式正确性，模拟一次 policy update。',
      '写一个 toy policy gradient loss：输入 logprob 和 reward，输出可反向传播的 loss。',
      '画出 policy gradient、PPO、GRPO 的关系图，标出 advantage 从哪里来。',
    ],
    interviewQuestions: [
      '语言模型里的 policy 和 action 分别是什么？',
      '为什么 RLHF 需要 KL penalty？',
      'advantage 相比直接使用 reward 有什么作用？',
      'PPO 想解决普通 policy gradient 的什么问题？',
      '为什么后训练不是简单 supervised learning？',
    ],
    lectureSections: [
      {
        title: '1. 为什么语言模型可以看作 policy',
        paragraphs: [
          '在强化学习里，policy 是给定 state 后选择 action 的概率分布。语言模型给定 prompt 和已生成 prefix 后，会输出 next-token distribution，所以它天然可以被看作一个 policy。',
          '区别在于语言模型的 action 空间非常大：每一步 action 是词表里的一个 token，完整 response 是一串 action 组成的 trajectory。这让 RL 目标有用，也让方差、采样成本和稳定性问题更突出。',
        ],
      },
      {
        title: '2. prompt、state、action、trajectory、reward 的对应关系',
        paragraphs: [
          'prompt 是任务输入；当前已生成的 prefix 可以看作 state；模型下一步采样的 token 是 action；从第一个生成 token 到停止符的整段 response 是 trajectory。',
          'reward 是对完整 response 或中间步骤的评分。它可以来自人工偏好、reward model、规则、单元测试、数学答案验证器或格式检查器。',
        ],
      },
      {
        title: '3. Policy gradient 的核心目标',
        paragraphs: [
          'policy gradient 的目标不是直接拟合某个标准答案，而是提高高 reward trajectory 的概率，降低低 reward trajectory 的概率。它优化的是“模型行为带来的期望 reward”。',
          '在语言模型里，这通常表现为：如果某段回答得分高，就增加这段回答中 token 序列的 log probability；如果得分低，就减少它们的概率。',
        ],
      },
      {
        title: '4. REINFORCE 的直觉',
        paragraphs: [
          'REINFORCE 可以理解成“采样一个行为，得到结果评分，然后把评分乘到这次行为的 log probability 上”。如果 reward 高，梯度会推高这次采样路径的概率；如果 reward 低，梯度会推低它。',
          '它的优点是简单，不需要 reward 对 token 采样动作可导；缺点是方差很大，因为一次采样的 reward 可能受随机性影响很强。',
        ],
      },
      {
        title: '5. Advantage 为什么重要',
        paragraphs: [
          '只看 reward 容易误判：一个 0.7 的 reward 在难题里可能很好，在简单题里可能很差。advantage 表示“比基线好多少”，把绝对分数转成相对改进信号。',
          '正 advantage 表示这次回答比预期好，应该提高概率；负 advantage 表示比预期差，应该降低概率。这也是 PPO、GRPO 都围绕 advantage 做文章的原因。',
        ],
      },
      {
        title: '6. Variance 问题从哪里来',
        paragraphs: [
          '语言模型生成是随机采样，同一个 prompt 可能生成多种 response。reward 还可能稀疏、延迟、带噪声。把整段 response 的 reward 直接分配给每个 token，会让梯度估计很不稳定。',
          'variance 高的表现是训练抖动、需要大量样本、对 reward scaling 敏感。baseline、value function、reward normalization、KL 约束和 PPO clipping 都是在改善稳定性。',
        ],
      },
      {
        title: '7. Baseline / value function 的作用',
        paragraphs: [
          'baseline 是一个参照值，用来把 reward 转成 advantage。只要 baseline 不依赖当前 action，它不会改变 policy gradient 的期望方向，却能降低方差。',
          'value function 可以学习预测某个 state 下的期望回报，PPO 常用 critic/value model 来估计 baseline。GRPO 则用同一 prompt 下多个回答的组内统计量构造相对 baseline。',
        ],
      },
      {
        title: '8. Policy gradient 与 RLHF、PPO、GRPO 的关系',
        paragraphs: [
          'RLHF 是把人类偏好或偏好模型作为 reward 来后训练语言模型的一类流程。policy gradient 是其中优化 policy 的基础思想：通过 reward 信号调整生成概率。',
          'PPO 在 policy gradient 上加了 clipping、critic 和 KL 等稳定机制；GRPO 保留 reward 优化思路，但用 group relative advantage 简化 value/critic 依赖。',
        ],
      },
      {
        title: '9. 后训练为什么不是简单 supervised learning',
        paragraphs: [
          'SFT 依赖固定标签答案，目标是让模型模仿示范。后训练常常面对的是偏好、约束、可验证结果或任务成功率，不一定只有唯一标准答案。',
          '在后训练里，模型可能生成多个候选，系统通过 reward 比较它们的质量，再优化生成策略。这更像行为优化，而不是单纯拟合下一个 token 标签。',
        ],
      },
    ],
    structureDiagram: [
      'prompt',
      '  -> 当前生成 prefix 作为 state',
      '  -> LM 产生 next-token distribution',
      '  -> 采样 token 作为 action',
      '  -> token 追加到 prefix',
      '  -> 形成完整 response / trajectory',
      '  -> reward model / rule 打分',
      '  -> reward - baseline 得到 advantage',
      '  -> 根据 advantage 更新 policy',
    ],
    pseudocode: [
      {
        title: '最小 policy gradient loss',
        code: `prompt = sample_prompt()
response, token_logprobs = policy.sample_with_logprobs(prompt)

reward = score(prompt, response)
baseline = estimate_baseline(prompt)
advantage = reward - baseline

# maximize advantage * logprob, so minimize negative objective
loss = -advantage * sum(token_logprobs)
loss.backward()
optimizer.step()`,
      },
      {
        title: 'SFT loss 与 policy gradient loss 对比',
        code: `# SFT: 给定标准答案 token，最大化这些标签 token 的概率
sft_loss = cross_entropy(model(prompt), target_tokens)

# Policy gradient: 先采样 response，再按 reward 强化或削弱这条路径
logprob = model.logprob(prompt, sampled_response)
pg_loss = -advantage * logprob`,
      },
      {
        title: 'reward 如何影响 token 概率',
        code: `if advantage > 0:
    # 这条 response 比基线好
    # 梯度方向会提高组成它的 token log probability
    increase_probability(sampled_tokens)
else:
    # 这条 response 比基线差
    # 梯度方向会降低组成它的 token log probability
    decrease_probability(sampled_tokens)`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：为什么语言模型可以看作 policy？',
        answer: '可以这样回答：policy 是给定 state 后对 action 的概率分布。语言模型给定 prompt 和已生成 prefix 后输出 next-token distribution，所以 state 是上下文，action 是下一个 token，完整回答就是一条 trajectory。',
      },
      {
        question: '如果面试官问：policy gradient 的目标是什么？',
        answer: '可以这样回答：目标是最大化模型生成行为的期望 reward。实现上会提高高 reward 或正 advantage 回答的 log probability，降低低 reward 或负 advantage 回答的概率。',
      },
      {
        question: '如果面试官问：log probability 为什么出现在 loss 里？',
        answer: '可以这样回答：采样动作本身不可导，但 log probability 对模型参数可导。policy gradient 用 reward 或 advantage 作为权重，调整被采样轨迹的 log probability，从而间接提高好行为的采样概率。',
      },
      {
        question: '如果面试官问：advantage 和 baseline 的作用是什么？',
        answer: '可以这样回答：advantage 是 reward 相对基线的改进量。baseline 不改变期望梯度方向，但能降低方差，让模型关注“比预期好还是差”，而不是只看绝对 reward。',
      },
      {
        question: '如果面试官问：policy gradient、PPO、GRPO 是什么关系？',
        answer: '可以这样回答：policy gradient 是基础优化思想。PPO 加入 clipping、critic/value、KL 等机制让更新更稳定；GRPO 用同一 prompt 的多个回答构造 group relative advantage，减少对单独 critic 的依赖。',
      },
      {
        question: '如果面试官问：为什么后训练不是简单 supervised learning？',
        answer: '可以这样回答：SFT 拟合固定示范答案，后训练优化的是偏好、正确性或任务成功率。模型会生成候选回答，再通过 reward 或比较信号更新行为，目标不是只复刻标签，而是让策略更倾向高质量输出。',
      },
    ],
    selfTest: [
      {
        question: '1. 在语言模型生成中，state 和 action 分别是什么？',
        answer: 'state 是 prompt 加当前 prefix，action 是下一步采样的 token。',
      },
      {
        question: '2. trajectory 对应语言模型里的什么？',
        answer: '一次完整生成的 token 序列，也就是 response。',
      },
      {
        question: '3. REINFORCE 的核心直觉是什么？',
        answer: '用采样结果的 reward 加权这条轨迹的 log probability，高 reward 提高概率，低 reward 降低概率。',
      },
      {
        question: '4. baseline 为什么能降低方差？',
        answer: '它把绝对 reward 转成相对优势，减少不同 prompt 或不同难度带来的波动，同时不改变期望梯度方向。',
      },
      {
        question: '5. PPO 和 GRPO 都离不开 policy gradient 的哪条主线？',
        answer: '都在用 reward/advantage 信号调整语言模型生成策略，只是稳定机制和 advantage 估计方式不同。',
      },
    ],
    completionChecklist: [
      '我能把 prompt、prefix、token、response 分别映射到 RL 的 state、action、trajectory。',
      '我能写出最小 policy gradient loss，并解释负号的含义。',
      '我能解释 log probability 为什么是优化入口。',
      '我能说明 reward、baseline、advantage 的区别。',
      '我能讲清楚 variance 问题为什么会出现。',
      '我能比较 SFT loss 和 policy gradient loss。',
      '我能把 policy gradient、PPO、GRPO 放在同一张关系图里说明。',
    ],
    outputs: [
      '一页 SFT / RLHF / PPO 数据流对比图。',
      '一个 policy gradient 更新伪代码笔记。',
      '一组 reward hacking 风险案例。',
    ],
  },
  {
    slug: 'grpo',
    name: 'Lightweight Guide to GRPO and RL principles',
    stage: '第 9 周',
    problem: '理解 GRPO 如何用 group relative advantage 简化语言模型后训练。',
    advice: '重点写出 PPO vs GRPO 的差异：有没有 critic、advantage 如何估计、为什么适合 reasoning 输出。',
    link: 'https://gitlostmurali.com/blog/grpo-intro/',
    positioning: 'GRPO 页面解决的是“后训练新方法如何读懂”的问题。它帮助你把 PPO 的 actor-critic 框架和 GRPO 的 group relative advantage 放在同一张图里比较。',
    goals: [
      '理解 PPO 和 GRPO 的共同点：都在用 reward 信号优化语言模型策略。',
      '理解 GRPO 不依赖单独 critic 的核心动机。',
      '掌握 group relative advantage：同一 prompt 多个回答之间做相对比较。',
      '能解释为什么 GRPO 与 reasoning model 后训练相关。',
    ],
    guide: [
      'PPO 通常需要 policy、reference model、reward model 和 value/critic 来估计 advantage。critic 会增加训练复杂度，也可能成为不稳定来源。',
      'GRPO 的思路是：对同一个 prompt 采样一组回答，用组内 reward 的均值和标准差做相对归一化，得到每个回答的 group relative advantage。这样可以少依赖独立 critic。',
      '它和语言模型后训练相关，是因为 reasoning 场景常常可以对同一个问题采样多个解法，再用规则、验证器或 reward model 评估。组内比较能强化比同组更好的推理路径。',
    ],
    concepts: [
      'PPO',
      'GRPO',
      'Group sampling',
      'Group relative advantage',
      'Critic-free training',
      'KL regularization',
      'Reasoning model',
      'Reward normalization',
    ],
    glossary: [
      { term: 'PPO', explanation: '一种限制策略更新幅度的 policy optimization 方法。' },
      { term: 'GRPO', explanation: '使用组内相对 advantage 的语言模型后训练方法。' },
      { term: 'Critic', explanation: '估计 value 或 expected return 的模型。' },
      { term: 'Group relative advantage', explanation: '同一 prompt 多个回答在组内归一化后的相对优势。' },
      { term: 'KL regularization', explanation: '控制新模型不要偏离参考模型太远的正则约束。' },
    ],
    notes: [
      'PPO vs GRPO 的第一层差异：PPO 常使用 critic 估计 advantage，GRPO 用同组样本的 reward 统计量构造相对 advantage。',
      'GRPO 不是“不要 reward”，而是改变 advantage 的估计方式。',
      '在数学、代码、推理任务里，同一 prompt 采样多个答案并比较质量，往往比单个答案绝对分数更稳定。',
    ],
    exercises: [
      '写一个 group relative advantage 函数：输入一组 reward，输出归一化 advantage。',
      '用表格比较 PPO 和 GRPO：组件、采样方式、advantage、训练复杂度。',
      '设计一个 reasoning 任务的 reward：正确性、格式、步骤一致性。',
      '对同一个 prompt 的 4 个回答做 group normalization，解释哪个回答会被提高概率。',
      '写一段短说明：为什么多个回答的相对比较可以减少对单独 value model 的依赖。',
    ],
    interviewQuestions: [
      'PPO 和 GRPO 最大的结构差异是什么？',
      'group relative advantage 如何计算，解决什么问题？',
      '为什么 GRPO 可能适合 reasoning model 后训练？',
      'GRPO 是否仍然需要 KL 约束，为什么？',
      '如果 reward model 有噪声，GRPO 的组内比较可能带来什么风险？',
    ],
    lectureSections: [
      {
        title: '1. 为什么语言模型后训练会用 RL 思路',
        paragraphs: [
          '预训练和 SFT 主要让模型学习“像数据一样回答”，但 AI Lab 面试会进一步关心：如何让模型更偏向有用、正确、可验证、符合偏好的回答。后训练里的 RL 思路，就是把输出质量变成 reward，再让模型提高高 reward 输出的概率。',
          '对语言模型来说，policy 是给定 prompt 后生成 token 序列的概率分布；response 是一次采样轨迹；reward 可以来自 reward model、规则验证器、单元测试、数学答案匹配或人工偏好。',
        ],
      },
      {
        title: '2. Policy、reward、advantage 分别是什么',
        paragraphs: [
          'policy 决定模型在每一步选择哪个 token；reward 给整段回答或每个步骤打分；advantage 表示某个回答比基线好多少。advantage 的作用是告诉优化器：不是所有高分都同等重要，而是“相对预期更好”的输出更应该被强化。',
          '在语言模型后训练里，advantage 通常会乘到 token log probability 上。正 advantage 会提高这段回答的概率，负 advantage 会降低概率。',
        ],
      },
      {
        title: '3. PPO 的基本思想',
        paragraphs: [
          'PPO 是一种限制 policy 更新幅度的策略优化方法。它通常包含当前 policy、reference policy、reward model 和 value/critic。critic 估计某个状态或回答的 expected value，用于构造 advantage。',
          'PPO 的优势是稳定，但组件多、训练复杂：要维护 value model，要处理 clipping、KL、reward normalization，还要避免 reward hacking 和 policy collapse。',
        ],
      },
      {
        title: '4. GRPO 和 PPO 的关键区别',
        paragraphs: [
          'GRPO 的核心变化是：对同一个 prompt 采样多个 response，用同组 response 的 reward 均值和标准差构造 relative advantage。这样可以弱化对单独 critic/value model 的依赖。',
          '它仍然是 policy optimization：好回答的概率被提高，差回答的概率被降低。区别不在于有没有 reward，而在于 advantage 的估计方式从“critic 预测基线”转向“组内相对基线”。',
        ],
      },
      {
        title: '5. Group relative advantage：同题多解的相对比较',
        paragraphs: [
          '假设同一个 prompt 生成 4 个回答，reward 分别是 0.2、0.4、0.9、0.5。GRPO 会用这组 reward 的均值和标准差做归一化，高于组均值的回答得到正 advantage，低于组均值的回答得到负 advantage。',
          '这种方式特别适合数学推理、代码推理、工具调用等任务，因为同一个题目可以生成多个候选解，再用规则、测试或 verifier 做相对比较。',
        ],
      },
      {
        title: '6. KL penalty 和 reference model 的作用',
        paragraphs: [
          '后训练如果只追 reward，模型可能学会投机：输出格式作弊、过度冗长、偏离自然语言质量，甚至利用 reward 漏洞。KL penalty 用 reference model 约束当前模型不要偏离原始 SFT 行为太远。',
          'reference model 通常是冻结的 SFT 模型。GRPO 即使减少 critic，也仍然需要 KL 或类似机制来控制更新幅度和保留基础能力。',
        ],
      },
      {
        title: '7. GRPO 与数学/代码推理、偏好优化的关系',
        paragraphs: [
          '数学和代码任务常有可验证 reward：答案是否正确、测试是否通过、推理步骤是否一致。GRPO 可以从同一个 prompt 的多个候选中学习“相对更好”的推理路径。',
          '偏好优化中也可以用相对比较，但要注意 reward 质量。如果 reward model 或规则本身有偏差，组内归一化会把这种偏差转化成训练信号。',
        ],
      },
      {
        title: '8. 面试中解释 PPO vs GRPO 的抓手',
        paragraphs: [
          '回答 PPO vs GRPO 时，先说共同点：二者都用 reward 信号优化语言模型 policy，并通常需要 KL 约束。再说差异：PPO 常用 critic/value model 估计 advantage，GRPO 用同 prompt 的多个回答做组内相对 advantage。',
          '最后补 trade-off：GRPO 简化组件、适合同题多候选的 reasoning 场景，但依赖 group sampling 和 reward 质量，也会增加采样成本。',
        ],
      },
    ],
    structureDiagram: [
      'prompt',
      '  -> 生成多个候选回答 response_1 ... response_k',
      '  -> reward model / rule-based reward 打分',
      '  -> 计算组内 mean / std',
      '  -> group relative advantage = (reward - mean) / std',
      '  -> 提高正 advantage 回答的概率',
      '  -> 降低负 advantage 回答的概率',
      '  -> 加入 KL 约束，避免偏离 reference model 过大',
      '  -> 更新 policy',
    ],
    pseudocode: [
      {
        title: 'Toy GRPO 更新流程',
        code: `for prompt in batch:
    responses = policy.sample(prompt, n=group_size)
    rewards = [score(prompt, r) for r in responses]

    mean = average(rewards)
    std = standard_deviation(rewards) + 1e-8
    advantages = [(r - mean) / std for r in rewards]

    for response, adv in zip(responses, advantages):
        logp = policy.logprob(prompt, response)
        ref_logp = reference.logprob(prompt, response)
        kl = logp - ref_logp
        loss += -adv * logp + beta * kl

optimizer.step(loss)`,
      },
      {
        title: 'Group relative advantage 计算',
        code: `def group_advantage(rewards, eps=1e-8):
    mean = rewards.mean()
    std = rewards.std()
    return (rewards - mean) / (std + eps)

# rewards = [0.2, 0.4, 0.9, 0.5]
# advantages < 0 的回答被压低，advantages > 0 的回答被强化`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：为什么语言模型后训练会用 RL？',
        answer: '可以这样回答：SFT 让模型模仿示范数据，但很多目标是偏好或任务成功率，例如答案正确、有帮助、遵守格式、代码通过测试。RL 把这些目标变成 reward，通过提高高 reward 输出的概率，让模型向更符合目标的行为移动。',
      },
      {
        question: '如果面试官问：PPO 和 GRPO 的核心区别是什么？',
        answer: '可以这样回答：二者都用 reward 优化 policy，也都需要控制 policy 偏移。PPO 常依赖 critic/value model 来估计 advantage；GRPO 对同一个 prompt 采样多个回答，用组内 reward 的均值和标准差构造 relative advantage，因此可以减少对单独 value model 的依赖。',
      },
      {
        question: '如果面试官问：group relative advantage 是什么？',
        answer: '可以这样回答：它是同一个 prompt 下多个 response 的相对表现。把每个 response 的 reward 减去组均值，再除以组标准差。这样高于同组平均的回答获得正信号，低于平均的回答获得负信号。',
      },
      {
        question: '如果面试官问：GRPO 为什么适合 reasoning model？',
        answer: '可以这样回答：reasoning 任务常能对同一问题采样多个候选解，并用答案匹配、代码测试或 verifier 打分。组内比较能强化相对更好的推理路径，而且不一定需要训练一个额外 critic。',
      },
      {
        question: '如果面试官问：GRPO 还需要 KL 吗？',
        answer: '可以这样回答：通常仍然需要。KL 用来约束当前 policy 不要离 reference model 太远，避免模型为了追 reward 牺牲语言质量、格式稳定性或安全边界。',
      },
    ],
    selfTest: [
      {
        question: '1. 在语言模型后训练里，policy 指什么？',
        answer: '给定上下文后生成 token 序列的概率分布，也就是模型的生成策略。',
      },
      {
        question: '2. advantage 为什么通常比直接 reward 更有用？',
        answer: 'advantage 表示相对基线的好坏，能降低方差，并告诉优化器哪些输出比预期更值得强化。',
      },
      {
        question: '3. GRPO 为什么可以减少对 critic 的依赖？',
        answer: '因为它用同一 prompt 的多个回答 reward 构造组内相对基线，而不是依赖单独 value model 预测基线。',
      },
      {
        question: '4. KL penalty 主要防什么？',
        answer: '防止当前模型为了追 reward 偏离 reference model 太远，造成语言能力退化或 reward hacking。',
      },
      {
        question: '5. GRPO 的一个潜在成本是什么？',
        answer: '需要对同一个 prompt 采样多个回答，增加生成和打分成本；reward 有噪声时组内比较也可能放大错误信号。',
      },
    ],
    completionChecklist: [
      '我能用一句话解释 policy、reward 和 advantage。',
      '我能画出同一个 prompt 采样多个 response 的 GRPO 数据流。',
      '我能手写 group relative advantage 的计算函数。',
      '我能说清楚 PPO 里的 critic/value model 做什么。',
      '我能比较 PPO 和 GRPO 在组件、advantage、稳定性和成本上的差异。',
      '我能解释 KL penalty / reference model 为什么仍然重要。',
      '我能举一个数学或代码推理任务中使用 GRPO 思路的例子。',
    ],
    outputs: [
      '一页 PPO vs GRPO 对照笔记。',
      '一个 group advantage 计算代码片段。',
      '一份 reasoning reward 设计草案。',
    ],
  },
  {
    slug: 'scaling',
    name: 'How to Scale Your Model',
    stage: '第 8 周',
    problem: '建立模型规模、数据规模、计算量、parallelism 和训练/推理成本的系统直觉。',
    advice: '先读训练、推理、parallelism 和成本章节，再把术语落到一个具体模型预算里。',
    link: 'https://jax-ml.github.io/scaling-book/',
    positioning: 'Scaling 资料解决的是“模型变大以后系统为什么变难”的问题。它把模型能力和计算资源、并行策略、显存、通信、吞吐、延迟连接起来。',
    goals: [
      '理解模型规模、数据规模和计算量之间的关系。',
      '知道 training cost 与 inference cost 的不同瓶颈。',
      '掌握 data parallelism、tensor parallelism、pipeline parallelism 的基本用途。',
      '能讨论吞吐、延迟、显存和通信开销之间的 trade-off。',
    ],
    guide: [
      '模型规模通常指参数量，数据规模指训练 token 数，计算量常用 FLOPs 或 GPU hours 近似。三者需要匹配：参数太多数据太少会欠训练，数据很多但模型太小可能容量不足，计算预算不足则无法稳定训练。',
      'training cost 关注大规模矩阵计算、反向传播、优化器状态、checkpoint 和跨设备通信；inference cost 更关注延迟、吞吐、KV cache、batching 和服务稳定性。',
      'parallelism 是 scaling 的核心工具。data parallelism 复制模型分数据，tensor parallelism 切分单层矩阵，pipeline parallelism 切分层。它们降低单卡压力，但引入通信和调度复杂度。',
    ],
    concepts: [
      'Model size',
      'Data size',
      'Compute budget',
      'FLOPs',
      'Data parallelism',
      'Tensor parallelism',
      'Pipeline parallelism',
      'KV cache',
      'Training cost',
      'Inference cost',
    ],
    glossary: [
      { term: 'Model size', explanation: '模型参数量，影响容量、显存和计算需求。' },
      { term: 'Data size', explanation: '训练 token 数或样本量，影响模型能学到的分布覆盖。' },
      { term: 'Compute', explanation: '训练或推理需要的计算量，常用 FLOPs 或 GPU 时间衡量。' },
      { term: 'Parallelism', explanation: '把训练或推理工作拆到多设备上的方法集合。' },
      { term: 'KV cache', explanation: '推理时缓存历史 key/value，避免重复计算 attention。' },
    ],
    notes: [
      'Scaling 不是简单“越大越好”，而是在目标能力、数据质量、预算、硬件和服务需求之间找匹配。',
      '训练和推理的成本结构不同：训练要存激活和优化器状态，推理要处理低延迟、高并发和长上下文。',
      'parallelism 的收益常被通信开销吃掉，面试中要能说出为什么多卡不一定线性加速。',
    ],
    exercises: [
      '估算一个小 Transformer 的参数量和单步 FLOPs。',
      '画出 data/tensor/pipeline parallelism 的区别图。',
      '解释 KV cache 如何改变自回归推理的计算成本。',
      '为一个 7B 模型写一页训练与推理成本问题清单。',
      '给定 batch、seq_len、hidden_size、layers，写出 attention score 和 KV cache 的主要 shape。',
    ],
    interviewQuestions: [
      '模型规模、数据规模、计算量如何共同影响训练效果？',
      'training cost 和 inference cost 的瓶颈有什么不同？',
      'data parallelism、tensor parallelism、pipeline parallelism 分别解决什么问题？',
      '为什么 parallelism 会带来通信成本？',
      'prefill 和 decode 阶段的计算形态有什么不同？',
    ],
    lectureSections: [
      {
        title: '1. Scaling 在大模型中是什么意思',
        paragraphs: [
          'Scaling 不是简单把模型做大，而是在模型参数量、训练 token 数、计算预算、硬件拓扑和服务目标之间做匹配。一个模型能不能训练好，既取决于算法，也取决于数据质量、吞吐、显存、通信和容错。',
          '面试中谈 scaling，不只要说“大模型更强”，还要能解释为什么更贵、哪里变慢、怎么并行、怎么服务，以及训练和推理的瓶颈为什么不同。',
        ],
      },
      {
        title: '2. Model size、data size、compute 三者关系',
        paragraphs: [
          'model size 通常指参数量，决定模型容量和单步计算/显存需求；data size 通常指训练 token 数，决定模型看到多少分布覆盖；compute 是实际能投入的 FLOPs 或 GPU 时间。',
          '三者需要平衡：模型很大但数据少会欠训练；数据多但模型太小可能容量不足；模型和数据都大但 compute 不够，训练无法稳定完成或无法充分 sweep 超参。',
        ],
      },
      {
        title: '3. Training compute 和 inference compute 的区别',
        paragraphs: [
          '训练要做 forward、backward 和 optimizer update，需要保存 activation、梯度、优化器状态，还要频繁跨设备同步。训练瓶颈常见于显存、通信带宽、checkpoint 和整体吞吐。',
          '推理主要做 forward，但要面对低延迟、高并发、长上下文、KV cache、batching 和稳定性。产品场景里，吞吐和延迟的 trade-off 往往比单次 FLOPs 更关键。',
        ],
      },
      {
        title: '4. batch size、sequence length、hidden size、layers 如何影响成本',
        paragraphs: [
          'batch size 增加通常提高吞吐，但占用更多显存；sequence length 增加会显著影响 attention，因为 attention score 形状大致是 B x heads x T x T；hidden size 和 layers 增加会提高矩阵乘计算和参数量。',
          '长上下文尤其影响推理。prefill 阶段要处理完整 prompt，attention 近似和 T^2 相关；decode 阶段一次生成一个 token，但每步要读取已有 KV cache，上下文越长，单 token 成本越高。',
        ],
      },
      {
        title: '5. Attention 为什么和序列长度强相关',
        paragraphs: [
          'self-attention 会让每个 token 和之前或所有 token 计算相关性。训练或 prefill 中，如果序列长度是 T，每个 head 的 attention score 通常是 T x T，所以 T 翻倍时，attention score 的元素数近似变为 4 倍。',
          '这也是长上下文模型昂贵的原因之一：不仅 prompt 更长，attention 计算、显存占用、KV cache 和调度压力都会上升。',
        ],
      },
      {
        title: '6. Parallelism 的主要方式',
        paragraphs: [
          'data parallelism 复制完整模型，把不同 batch 分到不同设备，最后同步梯度；tensor parallelism 切分单层矩阵或 attention head，让单层计算跨设备完成；pipeline parallelism 按层切分模型，不同设备处理不同层。',
          'sequence parallelism 在序列维度切分部分计算，expert parallelism 常见于 MoE，把不同 expert 分布到不同设备。每种并行方式都在显存、通信、负载均衡和实现复杂度之间取舍。',
        ],
      },
      {
        title: '7. Memory、communication、FLOPs、throughput、latency 的关系',
        paragraphs: [
          'FLOPs 衡量计算量，memory 决定能否放下参数、activation、KV cache 和 optimizer state，communication 决定多设备同步是否拖慢速度。吞吐关注单位时间处理多少 token，延迟关注一个请求多久返回。',
          '更多 GPU 不一定线性加速，因为通信、pipeline bubble、负载不均衡和小 batch 都会降低利用率。系统工程能力就是理解这些瓶颈并设计合适的并行和调度策略。',
        ],
      },
      {
        title: '8. Prefill 和 decode：一次推理请求的两个阶段',
        paragraphs: [
          'prefill 阶段把用户 prompt 一次性送入模型，生成每层的 KV cache，并得到第一个输出 token 的分布。这个阶段适合并行矩阵计算，但长 prompt 会显著增加 attention 成本。',
          'decode 阶段每次只追加一个新 token，复用 KV cache，避免重复计算历史 token 的 key/value。decode 通常受内存带宽、KV cache 读取和小 batch 调度影响更大。',
        ],
      },
      {
        title: '9. 为什么系统工程能力对 AI Lab 面试重要',
        paragraphs: [
          '顶级 AI Lab 的研究和工程经常交织：一个新训练方法如果无法在多机多卡稳定跑起来，就很难验证；一个推理优化如果不理解模型结构，也很难做正确 trade-off。',
          '面试时能把模型能力、训练预算、推理成本和产品约束放在同一张图里讨论，会比只背 scaling law 更有说服力。',
        ],
      },
    ],
    structureDiagram: [
      '模型规模',
      '  -> 参数量、hidden size、layers',
      '数据规模',
      '  -> token 数、数据质量、去重清洗',
      '训练计算量',
      '  -> FLOPs、batch size、sequence length',
      '并行策略',
      '  -> data / tensor / pipeline / sequence / expert parallelism',
      '显存与通信',
      '  -> 参数、activation、optimizer state、KV cache、跨卡同步',
      '结果影响',
      '  -> 训练成本',
      '  -> 推理成本',
      '  -> 吞吐与延迟',
      '  -> 产品可用性',
    ],
    pseudocode: [
      {
        title: 'Attention score shape 粗略估算',
        code: `# x: [batch, seq_len, hidden_size]
heads = num_heads
head_dim = hidden_size // heads

Q = [batch, heads, seq_len, head_dim]
K = [batch, heads, seq_len, head_dim]

# 每个 token 对每个 token 做相关性
attention_scores = Q @ transpose(K)
shape = [batch, heads, seq_len, seq_len]`,
      },
      {
        title: 'KV cache 随上下文长度增长',
        code: `# 每层都要保存 K 和 V
# rough_elements 只看数量趋势，不含 dtype bytes
kv_elements = batch * layers * 2 * heads * seq_len * head_dim
kv_bytes = kv_elements * bytes_per_element

# seq_len 翻倍时，KV cache 近似翻倍
# batch 或 layers 翻倍时，KV cache 也近似翻倍`,
      },
      {
        title: '长上下文推理成本直觉',
        code: `def inference_request(prompt_len, output_len):
    # prefill: 处理完整 prompt，构建 KV cache
    prefill_cost = attention_cost(seq_len=prompt_len)

    # decode: 每步生成一个 token，并读取已有 KV cache
    decode_cost = 0
    for step in range(output_len):
        context_len = prompt_len + step
        decode_cost += read_kv_cache(context_len)

    return prefill_cost + decode_cost`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：scaling 在大模型里到底指什么？',
        answer: '可以这样回答：scaling 是把模型参数、数据 token、计算预算和系统能力一起扩大并保持匹配。它不只是参数变多，还包括训练吞吐、显存、通信、推理延迟、KV cache 和服务稳定性。',
      },
      {
        question: '如果面试官问：training cost 和 inference cost 有什么不同？',
        answer: '可以这样回答：训练要 forward/backward/update，需要 activation、梯度和优化器状态，瓶颈常在显存、通信和吞吐；推理主要 forward，但要服务请求，瓶颈常在 latency、throughput、batching、KV cache 和长上下文。',
      },
      {
        question: '如果面试官问：为什么 attention 和 seq_len 关系很强？',
        answer: '可以这样回答：每个 token 要和其他 token 计算 attention score，训练或 prefill 中 attention score 形状通常是 batch x heads x T x T，所以序列长度增加会平方级增加 score 元素数。',
      },
      {
        question: '如果面试官问：data parallel 和 tensor parallel 的区别？',
        answer: '可以这样回答：data parallel 复制完整模型，切分 batch，适合模型能放进单卡或单个并行组时扩吞吐；tensor parallel 切分单层矩阵或 attention head，用来让单层模型参数和计算跨设备放下，但会引入层内通信。',
      },
      {
        question: '如果面试官问：prefill 和 decode 有什么区别？',
        answer: '可以这样回答：prefill 一次处理完整 prompt，构建 KV cache，矩阵计算并行度高但长 prompt 成本大；decode 每步生成一个 token，复用 KV cache，常受内存带宽、cache 读取和调度影响。',
      },
    ],
    selfTest: [
      {
        question: '1. model size、data size、compute 分别是什么？',
        answer: 'model size 是参数规模，data size 是训练 token 或样本规模，compute 是训练/推理投入的 FLOPs 或硬件时间。',
      },
      {
        question: '2. attention score 的常见 shape 是什么？',
        answer: '通常是 [batch, heads, seq_len, seq_len]，具体实现可能有布局差异。',
      },
      {
        question: '3. KV cache 为什么会随 layers 增长？',
        answer: '每一层都要保存历史 token 的 key 和 value，所以 layers 越多，缓存总量近似线性增加。',
      },
      {
        question: '4. 为什么多卡训练不一定线性加速？',
        answer: '因为梯度同步、层间通信、pipeline bubble、负载不均衡和小 batch 调度都会消耗时间。',
      },
      {
        question: '5. decode 阶段为什么常受内存带宽影响？',
        answer: '每生成一个 token 都要读取已有上下文的 KV cache，长上下文下读取量大，计算并行度又相对有限。',
      },
    ],
    completionChecklist: [
      '我能解释 scaling 不是单纯增大参数，而是模型、数据、计算和系统的匹配。',
      '我能区分 training compute 和 inference compute 的主要瓶颈。',
      '我能写出 attention score 的主要 shape，并解释 seq_len 的影响。',
      '我能粗略估算 KV cache 随 batch、layers、seq_len 增长的趋势。',
      '我能比较 data、tensor、pipeline、sequence、expert parallelism 的适用场景。',
      '我能解释 prefill 和 decode 的成本差异。',
      '我能把 FLOPs、显存、通信、throughput、latency 放在一个系统 trade-off 里讨论。',
    ],
    outputs: [
      '一张 scaling 三角图：参数、数据、计算量。',
      '一页 parallelism 对比表。',
      '一个训练/推理成本估算笔记。',
    ],
  },
  {
    slug: 'leetcode',
    name: 'LeetCode',
    stage: '第 7 周贯穿全程',
    problem: '准备 General Coding 面试里的算法、边界条件和沟通节奏。',
    advice: '优先刷数组、哈希、双指针、二分、堆、图、动态规划的高频题，并强制口述思路。',
    link: 'https://leetcode.com/',
    positioning: 'LeetCode 不是 AI Lab 面试的全部，但它训练的是基础 coding 稳定性。你需要在压力下写出正确、清晰、可讨论的代码。',
    goals: [
      '掌握常见数据结构和算法模板。',
      '能在 30-45 分钟内读题、澄清、设计算法、编码和测试。',
      '形成边界条件和复杂度分析习惯。',
      '把刷题从“记答案”转成“解释选择”。',
    ],
    guide: [
      'General Coding 的核心不是炫技，而是稳定交付。面试官看的是你如何拆问题、如何选择数据结构、如何处理边界、如何在 bug 出现时定位。',
      '刷题时建议按类型组织，而不是随机刷。每个类型先总结不变量：双指针维护什么窗口，二分的单调性是什么，堆维护什么优先级，图搜索如何避免重复。',
      '每道题做完都写一句“为什么这个方法对”，这比只记录代码更能提升面试表达。',
    ],
    concepts: [
      'Array',
      'Hash map',
      'Two pointers',
      'Binary search',
      'Heap',
      'Graph traversal',
      'Dynamic programming',
      'Complexity analysis',
      'Edge cases',
    ],
    glossary: [
      { term: 'Time complexity', explanation: '算法运行时间随输入规模增长的阶。' },
      { term: 'Space complexity', explanation: '算法额外内存随输入规模增长的阶。' },
      { term: 'Invariant', explanation: '算法过程中始终保持成立的条件。' },
      { term: 'Edge case', explanation: '容易导致错误的边界输入，例如空数组、重复值、极值。' },
      { term: 'Dry run', explanation: '用具体样例手动模拟代码执行。' },
    ],
    notes: [
      '每类题都要沉淀模板和判断条件，而不是只收藏题解。',
      '面试时先讲 brute force，再讲优化方向，能展示你的推理过程。',
      '测试样例至少覆盖普通样例、最小输入、重复值、无解情况和极值情况。',
    ],
    exercises: [
      '完成 30 道高频题，每题写复杂度和一句证明。',
      '每天选 1 题录音讲解，限制 5 分钟。',
      '整理 8 个模板：滑动窗口、二分、BFS、DFS、堆、前缀和、DP、并查集。',
      '每周做一次 45 分钟限时模拟，强制先口述再写代码。',
      '复盘错题并记录模式：卡在读题、数据结构、边界还是实现细节。',
    ],
    interviewQuestions: [
      '你为什么选择这个数据结构？',
      '这个算法的不变量是什么？',
      '复杂度能否进一步优化？',
      '如果输入为空、重复或极大，会发生什么？',
      '你如何从 brute force 逐步优化到当前方案？',
    ],
    lectureSections: [
      {
        title: '1. 为什么 AI Lab 面试仍然考 general coding',
        paragraphs: [
          'Research Engineer 和 GenAI Engineer 不只写模型代码，也会写数据管道、评测工具、服务逻辑和实验基础设施。General coding 考的是在压力下把问题拆清楚、写对、测对、讲清楚的能力。',
          'LeetCode 不是衡量研究能力的全部，但它能暴露候选人的基本工程稳定性：能否处理边界条件、能否选择合适数据结构、能否在 bug 出现时快速定位。',
        ],
      },
      {
        title: '2. 高频题型应该如何组织',
        paragraphs: [
          '建议按模式而不是按题号学习：array/hashmap 训练计数和索引映射；two pointers 训练有序结构和窗口不变量；stack 训练最近未匹配状态；binary search 训练单调性；tree/graph 训练遍历和 visited；heap 训练动态 top-k；DP 训练状态定义和转移。',
          '每类题都要沉淀“什么时候用”和“为什么正确”，而不是只背模板。面试中，能解释选择依据比快速贴出代码更重要。',
        ],
      },
      {
        title: '3. 如何用最少题量建立稳定手感',
        paragraphs: [
          '不要盲目刷几百题。更高效的方式是选 Blind 75 或高频清单，每个类型做 5 到 10 题，目标是形成识别模式的速度和编码模板的肌肉记忆。',
          '每题做完写三句话：这题属于什么模式、核心不变量是什么、下次怎么更快识别。30 道高质量复盘题通常比 100 道无复盘题更有价值。',
        ],
      },
      {
        title: '4. 面试时如何沟通思路',
        paragraphs: [
          '推荐顺序是：复述题意，明确输入输出和约束，举一个例子，先讲 brute force，再指出瓶颈，提出优化思路，最后编码和测试。',
          '不要一上来沉默写代码。面试官真正想看的是你的推理过程。即使最终代码有小 bug，清晰沟通也能让对方知道你在哪里、为什么这么做。',
        ],
      },
      {
        title: '5. 从 brute force 到 better solution',
        paragraphs: [
          'brute force 是起点，不是失败。它能帮你确认问题本质和复杂度瓶颈。优化通常来自三类动作：用 hashmap 记住过去信息，用排序/双指针利用有序性，用 heap/queue/stack 维护动态状态。',
          '面试表达里可以这样说：暴力解需要枚举所有组合，时间是 O(n^2)；瓶颈是重复查找；我们可以用 hashmap 把查找降到 O(1)，整体变成 O(n)。',
        ],
      },
      {
        title: '6. 边界条件和复杂度分析',
        paragraphs: [
          '边界条件至少覆盖空输入、单元素、重复值、负数或极值、无解、有多个答案、图中环、树为空、数组已排序或完全逆序。',
          '复杂度分析要说清楚 n 代表什么。图题里可能是 V 和 E；字符串题可能是字符数和词表大小；堆题要说明每次操作的 log k 来自堆大小。',
        ],
      },
      {
        title: '7. LeetCode 和 ML Coding 的区别',
        paragraphs: [
          'LeetCode 训练通用数据结构、算法选择和实现稳定性；ML Coding 训练 tensor shape、数值稳定性、模型模块和训练流程。两者都考代码清晰度，但心智模型不同。',
          '准备 AI Lab 面试时要两条线并行：general coding 保证基础过线，ML coding 展示你能实现 attention、loss、decoding、backward 等模型核心。',
        ],
      },
    ],
    structureDiagram: [
      '读题',
      '  -> 明确输入输出',
      '  -> 澄清约束和边界',
      '  -> 举例 dry run',
      '  -> 暴力解',
      '  -> 找瓶颈',
      '  -> 优化数据结构或算法',
      '  -> 写代码',
      '  -> 测边界',
      '  -> 分析时间和空间复杂度',
      '  -> 总结为什么正确',
    ],
    pseudocode: [
      {
        title: 'Hashmap 计数模板',
        code: `count = {}
for x in nums:
    count[x] = count.get(x, 0) + 1

for key, freq in count.items():
    if meets_condition(key, freq):
        return answer`,
      },
      {
        title: 'Two pointers 模板',
        code: `left = 0
right = len(nums) - 1

while left < right:
    current = nums[left] + nums[right]
    if current == target:
        return [left, right]
    if current < target:
        left += 1
    else:
        right -= 1`,
      },
      {
        title: 'BFS 模板',
        code: `queue = deque([start])
visited = set([start])

while queue:
    node = queue.popleft()
    for nxt in neighbors(node):
        if nxt in visited:
            continue
        visited.add(nxt)
        queue.append(nxt)`,
      },
      {
        title: 'Binary search 模板',
        code: `left = 0
right = n

while left < right:
    mid = (left + right) // 2
    if condition(mid):
        right = mid
    else:
        left = mid + 1

return left`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：你为什么选择这个数据结构？',
        answer: '可以这样回答：我先看暴力解的瓶颈在哪里。如果瓶颈是重复查找，我会考虑 hashmap；如果要维护动态最值或 top-k，我会考虑 heap；如果是最近未匹配状态，我会考虑 stack。这个选择是为了把瓶颈操作从 O(n) 降到 O(1) 或 O(log n)。',
      },
      {
        question: '如果面试官问：你如何从 brute force 优化？',
        answer: '可以这样回答：先给出暴力解确认正确性和复杂度，再指出重复计算或重复查找的瓶颈，然后引入数据结构保存中间信息，或者利用排序、单调性、窗口不变量来减少搜索空间。',
      },
      {
        question: '如果面试官问：这个算法的不变量是什么？',
        answer: '可以这样回答：不变量是循环过程中始终保持成立的条件。比如滑动窗口里窗口始终满足某个约束；二分里答案始终落在 [left, right)；BFS 里 queue 中节点是下一层待扩展节点。',
      },
      {
        question: '如果面试官问：你会怎么测试这段代码？',
        answer: '可以这样回答：我会先测题目样例，再测最小输入、空输入、重复值、无解、多解、负数或极值。如果是图题，会测环和不连通；如果是二分，会测边界位置和找不到目标。',
      },
      {
        question: '如果面试官问：LeetCode 和 ML Coding 有什么不同？',
        answer: '可以这样回答：LeetCode 更关注通用算法、数据结构和复杂度；ML Coding 更关注 tensor shape、数值稳定性、模型模块和训练流程。准备 AI Lab 面试需要两者都稳定，但展示的能力不同。',
      },
    ],
    selfTest: [
      {
        question: '1. 什么时候优先考虑 hashmap？',
        answer: '当暴力解瓶颈是重复查找、计数、去重或需要从值快速映射到索引时。',
      },
      {
        question: '2. 二分搜索最重要的前提是什么？',
        answer: '存在可利用的单调性，不一定是数组排序，也可能是答案空间上的条件单调。',
      },
      {
        question: '3. BFS 通常适合解决哪类问题？',
        answer: '无权图最短步数、层序遍历、状态空间按步扩展等问题。',
      },
      {
        question: '4. 为什么面试里要先讲 brute force？',
        answer: '它能证明你理解问题，并为后续优化提供清晰瓶颈。',
      },
      {
        question: '5. 复杂度分析里 n 代表什么需要说明吗？',
        answer: '需要。不同题里 n 可能是数组长度、节点数、边数、字符串长度或堆大小，含义会影响分析准确性。',
      },
    ],
    completionChecklist: [
      '我能按固定流程完成读题、澄清、暴力解、优化、编码、测试和复杂度分析。',
      '我能说出 array/hashmap、two pointers、stack、binary search、tree/graph、heap、DP 的典型触发信号。',
      '我能手写 hashmap、two pointers、BFS、binary search 四个模板。',
      '我能为每题写一句“为什么用这个算法”。',
      '我能在 45 分钟内完成一道中等题的沟通和实现。',
      '我能系统复盘错题并归类失败原因。',
      '我能区分 general coding 和 ML coding 的训练目标。',
    ],
    outputs: [
      '30 题刷题日志。',
      '常见算法模板笔记。',
      '一页 coding interview checklist。',
    ],
  },
  {
    slug: 'transformer-from-scratch',
    name: '从零反复实现 Transformer',
    stage: '第 3-6 周贯穿全程',
    problem: '把 LLM 知识转成现场可写、可解释、可调试的 ML Coding 能力。',
    advice: '每次重写都限制资料依赖，记录 shape、mask、loss、sampling 的 bug 清单。',
    link: 'https://github.com/karpathy/nanoGPT',
    positioning: '这是整套路线的实践主轴。只有反复从零实现，才能把图解、课程和论文语言变成真正可面试的代码能力。',
    goals: [
      '能独立写出 tokenizer、causal self-attention、Transformer block 和 training loop。',
      '掌握 logits、loss、backward、optimizer step、generation 的代码路径。',
      '能 debug shape mismatch、mask 错误、loss 不下降和采样异常。',
      '能把实现讲成清晰的模块边界。',
    ],
    guide: [
      '第一次实现目标是跑通，不要追求优雅；第二次实现目标是 shape 清晰；第三次实现目标是能加测试和解释每个模块。',
      'Transformer from scratch 的关键不是复制 nanoGPT，而是能回答“为什么这里需要 mask”“为什么 residual 在这里”“为什么 logits 要接 cross entropy”“为什么 generation 要裁剪 context”。',
      '练习时保持小规模：小语料、小模型、短上下文、少层数。越小越容易 debug，也更适合面试现场讨论。',
    ],
    concepts: [
      'Tokenizer',
      'Causal self-attention',
      'Transformer block',
      'Residual connection',
      'Layer norm',
      'Cross entropy loss',
      'Training loop',
      'Generation',
      'Top-k sampling',
      'Top-p sampling',
    ],
    glossary: [
      { term: 'Causal self-attention', explanation: '只能关注当前位置及之前 token 的自注意力。' },
      { term: 'Transformer block', explanation: '通常由 attention、MLP、残差和归一化组成的重复模块。' },
      { term: 'Top-k sampling', explanation: '只在概率最高的 k 个 token 中采样。' },
      { term: 'Top-p sampling', explanation: '只在累计概率达到 p 的候选 token 集合中采样。' },
      { term: 'Loss curve', explanation: '训练过程中 loss 随 step 变化的曲线，用于观察学习状态。' },
    ],
    notes: [
      '手写 Transformer 的最常见错误是 mask 方向反了、head reshape 错了、target shift 错了、eval 时忘记 no_grad。',
      '给每个模块加 shape 注释，比写很多抽象封装更适合学习阶段。',
      '每次实现结束都写“bug ledger”：症状、原因、修复、如何下次更早发现。',
    ],
    exercises: [
      '实现 tokenizer 或字符级编码器。',
      '实现 causal self-attention，并测试不能看未来 token。',
      '实现 Transformer block 和完整 Mini GPT。',
      '实现 top-k、top-p、temperature sampling。',
      '为 attention mask、loss shift、generation 写单元测试。',
    ],
    interviewQuestions: [
      '你如何从零写一个最小 GPT？',
      '如果 loss 不下降，你会如何排查？',
      'top-k 和 top-p sampling 有什么区别？',
      'Transformer block 中 residual 和 layer norm 的作用是什么？',
      '你如何设计测试证明自己的 Transformer 实现是正确的？',
    ],
    lectureSections: [
      {
        title: '1. 为什么反复从零实现 Transformer 是关键训练',
        paragraphs: [
          '读懂 Transformer 和能独立实现 Transformer 是两种能力。面试里，真正拉开差距的是你能不能把 tokenizer、attention、loss、training loop、generation 这些环节串成可运行系统。',
          '反复实现的价值在于形成 shape 直觉和 debug 经验。第一次跑通，第二次写清 shape，第三次加测试，第四次能在白板或面试中讲清设计取舍。',
        ],
      },
      {
        title: '2. Mini GPT 项目应该包含哪些模块',
        paragraphs: [
          '一个最小但完整的 GPT 项目应该包含 tokenizer 或字符级编码器、dataset/batching、token embedding、position embedding、causal self-attention、MLP、LayerNorm、residual、logits head、cross entropy loss、optimizer、training loop 和 generation。',
          '不需要一开始追求大规模。小语料、小 context、小 hidden size 更适合学习，因为它让每个 bug 都更容易定位，也方便写单元测试。',
        ],
      },
      {
        title: '3. tokenizer、dataset、embedding、attention、loss、generation 的关系',
        paragraphs: [
          '文本先经过 tokenizer 变成 token ids，dataset 把 ids 切成输入 x 和目标 y。embedding 把离散 token 映射成向量，再加 position 信息。Transformer blocks 处理上下文，输出 logits。',
          '训练时 logits 和目标 y 进入 cross entropy loss，反向传播更新参数。生成时模型根据 logits 采样下一个 token，把 token 追加到上下文，再循环生成。',
        ],
      },
      {
        title: '4. Causal mask 和 shape debug 为什么重要',
        paragraphs: [
          'decoder-only GPT 不能看未来 token，所以 attention score 必须加 causal mask。mask 方向一旦反了，模型要么泄漏未来信息，要么无法关注有效上下文。',
          'shape debug 是 ML Coding 的核心。你要能随口说出 x、q、k、v、attention score、attention output、logits、targets 的 shape，并知道每次 reshape/transpose 为什么存在。',
        ],
      },
      {
        title: '5. Top-k、top-p、temperature sampling 的作用',
        paragraphs: [
          'temperature 控制 logits 分布的尖锐程度：低 temperature 更保守，高 temperature 更多样。top-k 只保留概率最高的 k 个 token，top-p 保留累计概率达到 p 的最小候选集合。',
          '这些采样策略不是模型训练本身，但它们决定生成行为。面试时要能解释为什么 greedy 可能重复、为什么 sampling 更有多样性、为什么 top-p 比固定 top-k 更自适应。',
        ],
      },
      {
        title: '6. 如何设计测试证明实现正确',
        paragraphs: [
          '测试应该覆盖 shape、mask、loss shift 和 generation。比如 attention 输出 shape 必须等于输入 shape；第 t 个位置不能关注未来 token；logits flatten 后和 target flatten 的长度要一致；eval generation 应该使用 no_grad。',
          '还可以做微型 overfit 测试：让小模型在极小数据上训练到很低 loss。如果连小数据都过拟合不了，通常说明 mask、loss、optimizer 或数据切片有 bug。',
        ],
      },
      {
        title: '7. 如何做成 GitHub 作品集',
        paragraphs: [
          '作品集不只是代码跑通。README 应该解释模块结构、数据流、关键 shape、训练命令、采样示例、测试覆盖和已知限制。最好附一张 loss curve 和几段生成样例。',
          '把 bug ledger 也写进去会很加分：记录 mask 方向、target shift、reshape、dtype、device、eval/no_grad 等真实问题，说明你不仅会写，还会 debug。',
        ],
      },
      {
        title: '8. 面试中如何讲这个项目',
        paragraphs: [
          '讲项目时先给系统图：文本到 tokenizer，到 batch，到 embedding，到 Transformer blocks，到 logits/loss，再到 optimizer 和 generation。然后挑一个深点，例如 causal attention 或 sampling，讲 shape 和 trade-off。',
          '最后讲你如何验证：单元测试、shape trace、overfit 小数据、loss 曲线和生成样例。这样的讲法比“我复现了 nanoGPT”更像真正掌握。',
        ],
      },
    ],
    structureDiagram: [
      '文本数据',
      '  -> tokenizer',
      '  -> token ids',
      '  -> batch: x / y',
      '  -> token embedding + position embedding',
      '  -> Transformer blocks',
      '      -> causal self-attention',
      '      -> MLP',
      '      -> residual + LayerNorm',
      '  -> logits',
      '  -> cross entropy loss',
      '  -> backward + optimizer update',
      '  -> generation: sample next token and append',
    ],
    pseudocode: [
      {
        title: 'Minimal GPT forward',
        code: `def forward(idx, targets=None):
    # idx: [B, T]
    tok = token_embedding(idx)          # [B, T, C]
    pos = position_embedding(arange(T)) # [T, C]
    x = tok + pos

    for block in transformer_blocks:
        x = block(x)

    logits = lm_head(layer_norm(x))     # [B, T, vocab]
    loss = None
    if targets is not None:
        loss = cross_entropy(logits.view(B*T, vocab), targets.view(B*T))
    return logits, loss`,
      },
      {
        title: 'Causal self-attention',
        code: `q = Wq(x).view(B, T, heads, head_dim).transpose(1, 2)
k = Wk(x).view(B, T, heads, head_dim).transpose(1, 2)
v = Wv(x).view(B, T, heads, head_dim).transpose(1, 2)

scores = q @ k.transpose(-2, -1) / sqrt(head_dim)
scores = scores.masked_fill(causal_mask[:T, :T] == 0, -inf)
weights = softmax(scores, dim=-1)

out = weights @ v
out = out.transpose(1, 2).contiguous().view(B, T, C)`,
      },
      {
        title: 'Training loop',
        code: `for step in range(max_steps):
    x, y = get_batch(train_data)
    logits, loss = model(x, y)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if step % eval_interval == 0:
        print(step, loss.item())`,
      },
      {
        title: 'Generation loop',
        code: `for _ in range(max_new_tokens):
    context = idx[:, -block_size:]
    logits, _ = model(context)
    next_logits = logits[:, -1, :] / temperature
    filtered = apply_top_k_or_top_p(next_logits)
    probs = softmax(filtered, dim=-1)
    next_id = sample(probs)
    idx = concat(idx, next_id, dim=1)`,
      },
    ],
    interviewTemplates: [
      {
        question: '如果面试官问：你如何从零写一个最小 GPT？',
        answer: '可以这样回答：我会从数据流讲起：文本经过 tokenizer 得到 token ids，切 batch 得到 x/y，x 进入 token embedding 和 position embedding，然后过多个 Transformer block，最后 lm head 输出 logits，和 y 做 cross entropy。训练用 backward 和 optimizer step，推理用 logits 采样下一个 token。',
      },
      {
        question: '如果面试官问：causal mask 为什么重要？',
        answer: '可以这样回答：decoder-only LM 训练时每个位置只能预测下一个 token，不能看到未来 token。causal mask 会把未来位置的 attention score 设为负无穷，防止信息泄漏。如果 mask 方向错了，训练 loss 可能异常低或模型无法学习。',
      },
      {
        question: '如果面试官问：loss 不下降你怎么排查？',
        answer: '可以这样回答：先检查数据 x/y 是否 shift 正确，再检查 logits 和 targets flatten 后长度是否一致；然后看 mask 方向、学习率、optimizer、梯度是否为 nan、模型是否能 overfit 极小数据；最后检查 eval/train mode 和 dtype/device。',
      },
      {
        question: '如果面试官问：top-k、top-p、temperature 有什么区别？',
        answer: '可以这样回答：temperature 调整分布尖锐程度；top-k 固定保留概率最高的 k 个 token；top-p 保留累计概率达到 p 的候选集合，更能随上下文自适应候选数量。',
      },
      {
        question: '如果面试官问：如何证明你的实现正确？',
        answer: '可以这样回答：我会写 shape tests、causal mask tests、loss shift tests 和 generation smoke tests；再做 tiny overfit，确认小模型能在极小数据上把 loss 降下来；最后用 PyTorch baseline 或已知实现对齐关键输出。',
      },
      {
        question: '如果面试官问：这个项目如何体现工程能力？',
        answer: '可以这样回答：除了模型代码，我会展示 README、训练脚本、测试、loss curve、生成样例和 bug ledger。重点是证明我能把研究概念落成可运行、可调试、可解释的代码系统。',
      },
    ],
    selfTest: [
      {
        question: '1. Mini GPT 训练时 x 和 y 的关系是什么？',
        answer: '通常 y 是 x 向右移动一位后的目标 token，用当前位置上下文预测下一个 token。',
      },
      {
        question: '2. attention score 的常见 shape 是什么？',
        answer: '通常是 [B, heads, T, T]，表示每个 head 中每个 token 对其他 token 的注意力分数。',
      },
      {
        question: '3. causal mask 把哪些位置屏蔽掉？',
        answer: '屏蔽当前位置之后的未来 token，让第 t 个位置只能看 0 到 t 的上下文。',
      },
      {
        question: '4. top-p 相比 top-k 的主要区别是什么？',
        answer: 'top-k 固定候选数量，top-p 按累计概率动态确定候选集合大小。',
      },
      {
        question: '5. tiny overfit 测试能发现什么问题？',
        answer: '如果模型不能在极小数据上过拟合，往往说明数据切片、mask、loss、optimizer 或梯度路径存在 bug。',
      },
    ],
    completionChecklist: [
      '我能画出文本到 logits/loss/generation 的完整数据流。',
      '我能写出 minimal GPT forward，并标注每个关键 tensor shape。',
      '我能实现 causal self-attention，并测试不能看未来 token。',
      '我能实现 training loop，并解释 zero_grad、backward、step 的顺序。',
      '我能实现 temperature、top-k、top-p sampling。',
      '我能设计 shape、mask、loss shift、generation 和 tiny overfit 测试。',
      '我能把项目整理成 GitHub 作品集 README，并在面试中讲清楚。',
    ],
    outputs: [
      '一个 Mini GPT from Scratch 仓库。',
      '一份 shape trace 文档。',
      '一份 bug ledger 和测试清单。',
    ],
  },
]

export const resources = resourceDetails.map((resource) => ({
  slug: resource.slug,
  name: resource.name,
  stage: resource.stage,
  problem: resource.problem,
  advice: resource.advice,
  link: resource.link,
}))

export const resourcesBySlug = Object.fromEntries(
  resourceDetails.map((resource) => [resource.slug, resource]),
)

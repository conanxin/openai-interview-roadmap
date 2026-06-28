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
    ],
    interviewQuestions: [
      '你最有代表性的项目里，真正的新 insight 是什么？',
      '如果给你多 3 个月，你会如何推进这个方向？',
      '一次失败实验如何改变了你的判断？',
      '你如何解释自己适合 OpenAI / AI Lab 的研究环境？',
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
    ],
    interviewQuestions: [
      '语言模型里的 policy 和 action 分别是什么？',
      '为什么 RLHF 需要 KL penalty？',
      'advantage 相比直接使用 reward 有什么作用？',
      'PPO 想解决普通 policy gradient 的什么问题？',
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
    ],
    interviewQuestions: [
      '你为什么选择这个数据结构？',
      '这个算法的不变量是什么？',
      '复杂度能否进一步优化？',
      '如果输入为空、重复或极大，会发生什么？',
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

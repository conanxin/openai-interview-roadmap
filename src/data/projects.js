export const projectDetails = [
  {
    slug: 'mini-gpt',
    name: 'Mini GPT from Scratch',
    stage: 'V4A 实践项目路线图',
    subtitle: '把语言模型知识转化为可运行代码、可解释项目和可展示作品集。',
    description:
      '这个项目的目标不是训练一个强模型，而是通过从零实现一个小型 GPT，掌握 tokenizer、embedding、causal self-attention、Transformer block、training loop、generation、sampling、debug 和测试。',
    goals: [
      '能画出 decoder-only Transformer 的结构。',
      '能手写 causal self-attention。',
      '能解释 token embedding、position embedding、logits、loss 的关系。',
      '能写一个最小 training loop。',
      '能实现 greedy / temperature / top-k / top-p sampling。',
      '能 debug shape、mask、loss、generation 问题。',
      '能把这个项目作为 GitHub 作品集讲给面试官。',
    ],
    modules: [
      {
        module: 'Module 1',
        title: 'Tokenizer 与数据准备',
        task: '把文本转成 token ids，构建 batch。',
        resources: [
          { label: 'CS336', href: '#/resources/cs336' },
          { label: 'GPT-2', href: '#/resources/illustrated-gpt2' },
        ],
        outputs: ['tokenizer_notes.md', 'dataset_loader.py'],
      },
      {
        module: 'Module 2',
        title: 'Embedding 与位置编码',
        task: '实现 token embedding 和 positional embedding。',
        resources: [
          { label: 'Illustrated GPT-2', href: '#/resources/illustrated-gpt2' },
          { label: 'Self-Attention', href: '#/resources/self-attention' },
        ],
        outputs: ['embedding.py', 'shape_notes.md'],
      },
      {
        module: 'Module 3',
        title: 'Causal Self-Attention',
        task: '实现 Q/K/V、attention score、softmax、causal mask。',
        resources: [{ label: 'Self-Attention', href: '#/resources/self-attention' }],
        outputs: ['attention.py', 'causal_mask_test.py'],
      },
      {
        module: 'Module 4',
        title: 'Transformer Block',
        task: '组合 attention、MLP、LayerNorm、residual connection。',
        resources: [
          { label: 'CS336', href: '#/resources/cs336' },
          { label: 'Transformer from Scratch', href: '#/resources/transformer-from-scratch' },
        ],
        outputs: ['block.py', 'model.py'],
      },
      {
        module: 'Module 5',
        title: 'Training Loop',
        task: '实现 forward、loss、backward、optimizer step。',
        resources: [
          { label: 'Backpropagation', href: '#/resources/backpropagation' },
          { label: 'CS336', href: '#/resources/cs336' },
        ],
        outputs: ['train.py', 'loss_curve_notes.md'],
      },
      {
        module: 'Module 6',
        title: 'Generation 与 Sampling',
        task: '实现 greedy、temperature、top-k、top-p。',
        resources: [
          { label: 'Illustrated GPT-2', href: '#/resources/illustrated-gpt2' },
          { label: 'Transformer from Scratch', href: '#/resources/transformer-from-scratch' },
        ],
        outputs: ['generate.py', 'sampling_notes.md'],
      },
      {
        module: 'Module 7',
        title: 'Testing 与 Debug',
        task: '写 shape test、mask test、generation smoke test。',
        resources: [
          { label: 'Backpropagation', href: '#/resources/backpropagation' },
          { label: 'LeetCode', href: '#/resources/leetcode' },
          { label: 'Transformer from Scratch', href: '#/resources/transformer-from-scratch' },
        ],
        outputs: ['tests/test_attention.py', 'tests/test_model.py'],
      },
      {
        module: 'Module 8',
        title: '项目展示与面试讲法',
        task: '写 README、结构图、面试讲稿。',
        resources: [
          { label: 'Alisa Job Search Notes', href: '#/resources/alisa-job-search' },
          { label: 'LeetCode', href: '#/resources/leetcode' },
        ],
        outputs: ['README.md', 'interview_pitch.md'],
      },
    ],
    repoTree: [
      'mini-gpt-from-scratch/',
      '  README.md',
      '  pyproject.toml',
      '  src/',
      '    mini_gpt/',
      '      tokenizer.py',
      '      data.py',
      '      attention.py',
      '      block.py',
      '      model.py',
      '      train.py',
      '      generate.py',
      '  tests/',
      '    test_attention.py',
      '    test_model.py',
      '    test_generation.py',
      '  notes/',
      '    transformer_shapes.md',
      '    sampling.md',
      '    interview_pitch.md',
      '  scripts/',
      '    train_tiny.py',
      '    sample.py',
    ],
    relatedResources: [
      { label: 'Stanford CS336', href: '#/resources/cs336' },
      { label: 'The Illustrated GPT-2', href: '#/resources/illustrated-gpt2' },
      { label: 'Self-Attention & Transformers', href: '#/resources/self-attention' },
      { label: 'Backpropagation', href: '#/resources/backpropagation' },
      { label: 'Transformer from Scratch', href: '#/resources/transformer-from-scratch' },
      { label: 'Scaling', href: '#/resources/scaling' },
      { label: 'Alisa Job Search Notes', href: '#/resources/alisa-job-search' },
    ],
    checklist: [
      '我能解释 Mini GPT 的整体数据流。',
      '我能写出 causal self-attention。',
      '我能解释 attention score 的 shape。',
      '我能解释 causal mask 为什么是上三角屏蔽。',
      '我能跑通一个最小 training loop。',
      '我能实现至少 3 种 decoding 策略。',
      '我写了 shape / mask / generation 测试。',
      '我能用 3 分钟向面试官讲清楚这个项目。',
      '我能说明这个项目的限制和下一步改进。',
    ],
    pitch: [
      {
        title: '30 秒版本',
        body: '我做了一个从零实现的 Mini GPT 项目，目标不是追求模型效果，而是验证我对语言模型完整链路的理解，包括 tokenizer、embedding、causal attention、Transformer block、training loop 和 generation。我为 attention、mask 和 generation 写了测试，并把每个模块对应到面试中可能被问到的问题。',
      },
      {
        title: '3 分钟版本',
        body: '可以按数据流讲：文本先经过 tokenizer 变成 token ids，dataset 构建 x/y batch；模型用 token embedding 和 position embedding 表示输入，经过多个 decoder-only Transformer block，输出 logits；训练时 logits 和 shifted targets 计算 cross entropy，反向传播更新参数；推理时根据 logits 进行 greedy、temperature、top-k 或 top-p sampling。最后补一句你如何验证：shape tests、causal mask tests、generation smoke tests 和 tiny overfit。',
      },
      {
        title: '技术深挖问题',
        body: '准备回答这些追问：Q/K/V 的 shape 是什么？attention score 为什么是 B x heads x T x T？causal mask 为什么不能看未来 token？loss shift 如何做？top-k 和 top-p 有什么区别？为什么 tiny overfit 是有效 debug 方法？',
      },
      {
        title: '项目局限',
        body: '这个项目规模小，不追求 SOTA；tokenizer、数据清洗、训练稳定性、评估和推理性能都比真实大模型系统简化。它的价值在于证明你理解完整链路，并能把每个模块写成可读、可测、可解释的代码。',
      },
      {
        title: '下一步改进',
        body: '可以继续加入 BPE tokenizer、checkpoint、eval loop、learning rate schedule、KV cache、mixed precision、wandb/logging、更多测试，以及一份更完整的 job talk 风格项目说明。',
      },
    ],
    nextStep:
      '下一步可以创建独立代码仓库 mini-gpt-from-scratch，并把本页路线中的模块逐步实现为真实代码。',
  },
]

export const projectsBySlug = Object.fromEntries(
  projectDetails.map((project) => [project.slug, project]),
)

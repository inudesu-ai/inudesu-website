import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Lang = 'zh' | 'en'

type TranslationDict = Record<string, string | Record<string, string>>

const I18nContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}>({ lang: 'zh', setLang: () => {}, t: (k: string) => k })

function getNested(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const k of keys) {
    if (typeof current !== 'object' || current === null || !(k in current)) return path
    current = (current as Record<string, unknown>)[k]
  }
  if (typeof current === 'string') return current
  if (current === null || current === undefined) return path
  return JSON.stringify(current)
}

const zh: Record<string, unknown> = {
  site: {
    title: 'inudesu - 抬手之间，它便与你同行',
    description: '可穿戴动作交互界面——通过 Zilo 智能指环将自然人体动作实时转化为机器狗行为。ADVX 2026',
    keywords: '机器人,可穿戴,IMU,手势控制,人机交互,ADVX 2026',
    domain: '未知域 · 不被定义的域名',
  },
  nav: {
    system: '系统',
    gestures: '手势',
    tech: '技术',
    why: '意义',
    xyz: '未知域',
    demo: '查看演示',
  },
  hero: {
    badge: 'ADVX 2026 · 人机交互',
    headline1: '抬手之间，',
    headline2: '它便与你同行。',
    tagline: 'With a simple gesture, your robot companion moves with you.',
    subtitle: '可穿戴智能指环 · 实时手势识别 · 机器狗伴侣',
    watchDemo: '观看演示',
    viewArch: '查看架构',
    scroll: '向下滚动探索',
  },
  demo: {
    eyebrow: '现场演示',
    title: '眼见为实',
    subtitle: '观看 inudesu 如何通过简单手势实时操控机器狗',
    advxLabel: 'ADVX 2026 · 现场实机演示',
    play: '▸ 播放',
    pause: '▐▐ 暂停',
    videoContent: '视频内容：',
    videoContentDesc: '展示佩戴者通过手势控制机器狗的实时交互效果',
  },
  pipeline: {
    eyebrow: '动作管线',
    title1: '从动作',
    title2: '到机器意图',
    subtitle: '一条将人体动作无缝转化为机器行为的处理管线',
    stages: {
      sense: { title: '感知', sub: 'SENSE', desc: 'Zilo 指环采集线性加速度与角速度数据' },
      process: { title: '处理', sub: 'PROCESS', desc: '原始 IMU 数据经滤波、归一化、分段为动作序列' },
      understand: { title: '理解', sub: 'UNDERSTAND', desc: '系统比对动作特征，识别意图手势' },
      map: { title: '映射', sub: 'MAP', desc: '识别的意图转换为机器人指令' },
      act: { title: '执行', sub: 'ACT', desc: 'Dimension 机器狗在物理世界中完成动作' },
    },
    terminal: {
      connected: '[已连接] ZILO-RING-01',
      dataStream: '[数据流]',
      detected: '[检测] motion_sequence_started',
      classified: '[分类] gesture=forward_push',
      intent: '[意图] robot.move.forward',
      dispatched: '[调度] dimension.command 已接受 ✓',
      moving: '[状态] dimension 移动中',
    },
  },
  gestures: {
    eyebrow: '手势映射',
    title1: '一个动作',
    title2: '一个即时反应',
    subtitle: '基于实时 IMU 分类的手势识别。每个动作对应一个特定的机器行为',
    action: '动作:',
    command: '指令',
    standby: '待机',
    note: '说明：',
    noteText: '以上为可配置的手势映射，可根据不同使用场景和机器人实现进行定制。实际手势识别由基于真实 IMU 动作数据训练的神经网络完成',
    items: {
      push: { name: '前推', desc: '手向前伸出', status: '前进中' },
      pull: { name: '后拉', desc: '手向后收回', status: '后退中' },
      left: { name: '左转手腕', desc: '逆时针转动手腕', status: '左转中' },
      right: { name: '右转手腕', desc: '顺时针转动手腕', status: '右转中' },
      lift: { name: '抬手', desc: '手向上抬起', status: '站立中' },
      circle: { name: '画圈', desc: '手画圆形轨迹', status: '巡逻模式' },
    },
  },
  architecture: {
    eyebrow: '系统架构',
    title1: '直觉背后的',
    title2: '完整系统',
    subtitle: '从物理感知到意图行为的完整管线',
    nodes: {
      ring: { label: 'Zilo 指环', desc: '六轴运动感知，加速度计与陀螺仪数据采集' },
      transport: { label: '无线传输', desc: '将时序传感器数据流传输至处理系统' },
      preprocess: { label: '信号预处理', desc: '降噪、校准、归一化与平滑处理' },
      segment: { label: '动作分割', desc: '检测有意义的动作起止点' },
      recognize: { label: '手势识别', desc: '将动作序列匹配已知动作特征' },
      map: { label: '意图映射', desc: '将识别的手势转换为机器行为' },
      interface: { label: '机器人接口', desc: '向机器人控制层发送结构化指令' },
      robot: { label: 'Dimension', desc: '在物理环境中执行运动' },
    },
    legend: ['硬件', '信号处理', '智能', '执行'],
  },
  why: {
    eyebrow: '为什么重要',
    title1: '机器人应该理解的',
    title2: '不只是',
    title3: '按钮。',
    values: {
      noController: { title: '无需控制器', sub: 'NO CONTROLLER', desc: '自然动作取代复杂的操控硬件' },
      noScreen: { title: '无需屏幕', sub: 'NO SCREEN', desc: '操作者目光始终聚焦物理环境' },
      lowerBarrier: { title: '降低交互门槛', sub: 'LOWER BARRIER', desc: '让机器人系统更简单、更快速地听从指令' },
    },
    body: '本项目探索一个未来——可穿戴设备成为人与具身机器之间直觉化的沟通层。手势控制界面不仅是一种便利，更代表着人类对机器人操控方式的根本转变',
    quote1: '当操控变得自然，人与机器人不再是操作者和工具的关系——',
    quote2: '他们成为伙伴。',
  },
  useCases: {
    eyebrow: '应用场景',
    title: '真实世界的应用',
    subtitle: 'inudesu 为各行各业打开了全新的可能性',
    items: {
      rescue: { title: '搜救', sub: 'SEARCH & RESCUE', desc: '救援人员在保持对环境和受困者关注的同时，通过手势直接指挥机器人' },
      industrial: { title: '工业巡检', sub: 'INDUSTRIAL INSPECTION', desc: '现场操作员无需携带传统遥控器，即可引导四足机器人在危险或狭窄空间中穿行' },
      accessible: { title: '无障碍机器人', sub: 'ACCESSIBLE ROBOTICS', desc: '简单的身体动作作为替代交互界面，帮助因行动或运动控制差异而无法操作复杂控制器的人群' },
      collaboration: { title: '人机协作', sub: 'HUMAN–ROBOT COLLABORATION', desc: '机器人像人类队友回应手势一样自然地响应身体意图，在共享工作空间中实现更紧密的合作' },
    },
    disclaimer: '注：',
    disclaimerText: '以上场景为研究与原型阶段探索的潜在应用。在实际部署前需完成场景特定的安全考量、法规合规与全面用户测试',
  },
  xyz: {
    eyebrow: '未知域 · 为什么是 xyz',
    headline1: '我们不选那些',
    headline2: '被定义好的域名。',
    subtitle: '在这个被 .ai、.lab、.cn、.com 划好的互联网版图上，我们选择了一个没有预设含义的结尾——字母表最后三个字母。',
    pillars: {
      unknown: { title: '未知域', tagline: 'UNDEFINED TERRITORY', body: '.xyz 没有语义包袱。不像 .ai 暗示人工智能、.com 暗示商业公司、.cn 暗示国家归属——xyz 是字母表的终点，也是所有可能性的起点。在这里，你定义它，而不是它定义你。' },
      space: { title: '三维空间', tagline: 'X · Y · Z', body: 'X、Y、Z——三个空间坐标轴。它们代表物理世界的三个维度，也象征无限延伸的未知。当 Google 的母公司重组为 Alphabet 时，它没有用 .com，它选择了 abc.xyz——因为 .xyz 意味着探索的勇气。' },
      public: { title: '公共域名', tagline: 'FOR EVERYONE', body: '.xyz 是一个通用顶级域，在 230+ 个国家和地区有 480 万+ 注册。它不属于任何国家、任何行业、任何群体。它是真正的公共空间——没有门槛，没有预设，对所有人开放。就像互联网本该如此。' },
    },
    manifesto1: '我们相信技术应该是开放的，',
    manifesto2: '域名也应该是。',
    closing: 'inudesu 选择 .xyz，并非因为它便宜或新奇。而是因为它和我们的项目内核一致：不被定义，不设边界，为所有人而建。',
    stat1: { num: '2014', label: '开放注册年份' },
    stat2: { num: '4.8M+', label: '全球注册量' },
    stat3: { num: '230+', label: '覆盖国家和地区' },
    stat4: { num: '∞', label: '无预设含义' },
  },
  footer: {
    mission: '我们的使命',
    mission1: '我们做的不是更小的遥控器。',
    mission2: '我们为机器创造了一种新的语言——',
    mission3: '在公共的、不被定义的域名上。',
    missionDesc: 'Zilo 将人的动作翻译为机器的意图，让 Dimension 实时响应',
    cta: '你的动作，就是它的本能',
    brandDesc: '通过可穿戴动作感知实现人机交互 · 在未知域上打造开放平台',
    navTitle: '导航',
    projectTitle: '项目',
    contactTitle: '联系',
    github: 'GitHub 仓库',
    paper: '研究论文',
    video: '演示视频',
    team: '团队成员',
    advx: 'ADVX 2026',
    privacy: '隐私',
    terms: '条款',
    sitemap: '网站地图',
    copyright: '保留所有权利。 | ADVX 2026 · inudesu.xyz',
  },
  tech: {
    eyebrow: '技术文档',
    title1: '直觉背后的',
    title2: '工程技术',
    subtitle: '从信号处理到机器学习，从嵌入式到云端部署——inudesu 的完整技术栈',
    layers: [
      { label: '感知层', desc: 'Zilo 指环 · 6 轴 IMU · 200Hz 采样' },
      { label: '传输层', desc: 'BLE 5.3 低延迟无线传输' },
      { label: '算法层', desc: 'RNN 实时手势分类 · 滑动窗口分割' },
      { label: '控制层', desc: '意图映射引擎 · 指令调度器' },
      { label: '执行层', desc: 'Dimension 四足机器人 · ROS2 集成' },
      { label: '前端层', desc: 'Next.js 15 · Tailwind · Framer Motion' },
    ],
    reportsDivider: '技术报告',
    docs: {
      architecture: { title: '系统架构文档', desc: '完整的技术架构说明——从传感器到执行的全链路设计' },
      summary: { title: '项目总结', desc: '项目全貌、技术栈、关键决策与实现细节' },
      redesign: { title: '改造完成报告', desc: '本次网站改造的详细记录——设计决策、改动对比' },
      deploy: { title: '部署指南', desc: 'Vercel / 服务器部署步骤与配置说明' },
      quickstart: { title: '快速开始', desc: '本地开发环境搭建、运行与构建命令速查' },
    },
    back: '← 返回首页',
  },
}

const en: Record<string, unknown> = {
  site: {
    title: 'inudesu - Gesture Is All It Takes',
    description: 'Wearable motion interaction interface — translating natural human gestures into real-time robot dog behavior via Zilo smart ring. ADVX 2026',
    keywords: 'robot,wearable,IMU,gesture control,human-robot interaction,ADVX 2026',
    domain: 'Undefined Territory · A Domain Without Limits',
  },
  nav: {
    system: 'System',
    gestures: 'Gestures',
    tech: 'Tech',
    why: 'Why',
    xyz: '.xyz',
    demo: 'Watch Demo',
  },
  hero: {
    badge: 'ADVX 2026 · Human–Robot Interaction',
    headline1: 'Raise your hand, ',
    headline2: 'and it moves with you.',
    tagline: 'With a simple gesture, your robot companion moves with you.',
    subtitle: 'Wearable Smart Ring · Real-time Gesture Recognition · Robot Dog Companion',
    watchDemo: 'Watch Demo',
    viewArch: 'View Architecture',
    scroll: 'Scroll to explore',
  },
  demo: {
    eyebrow: 'Live Demo',
    title: 'Seeing Is Believing',
    subtitle: 'Watch inudesu control a robot dog in real-time through simple hand gestures',
    advxLabel: 'ADVX 2026 · Live On-site Demo',
    play: '▸ Play',
    pause: '▐▐ Pause',
    videoContent: 'Video Content: ',
    videoContentDesc: 'Demonstration of a wearer controlling a robot dog through gesture interaction in real-time',
  },
  pipeline: {
    eyebrow: 'Motion Pipeline',
    title1: 'From Gesture',
    title2: 'to Robot Intent',
    subtitle: 'A processing pipeline that seamlessly transforms human motion into robot behavior',
    stages: {
      sense: { title: 'Sense', sub: 'SENSE', desc: 'Zilo ring captures linear acceleration and angular velocity data' },
      process: { title: 'Process', sub: 'PROCESS', desc: 'Raw IMU data is filtered, normalized, and segmented into motion sequences' },
      understand: { title: 'Understand', sub: 'UNDERSTAND', desc: 'System matches motion features to identify intended gestures' },
      map: { title: 'Map', sub: 'MAP', desc: 'Recognized intent is translated into robot commands' },
      act: { title: 'Act', sub: 'ACT', desc: 'Dimension robot dog executes the action in physical space' },
    },
    terminal: {
      connected: '[CONNECTED] ZILO-RING-01',
      dataStream: '[STREAM]',
      detected: '[DETECTED] motion_sequence_started',
      classified: '[CLASSIFIED] gesture=forward_push',
      intent: '[INTENT] robot.move.forward',
      dispatched: '[DISPATCHED] dimension.command accepted ✓',
      moving: '[STATUS] dimension moving',
    },
  },
  gestures: {
    eyebrow: 'Gesture Mapping',
    title1: 'One Gesture,',
    title2: 'One Instant Response',
    subtitle: 'Gesture recognition based on real-time IMU classification. Each gesture maps to a specific robot behavior',
    action: 'Motion:',
    command: 'Command',
    standby: 'Standby',
    note: 'Note: ',
    noteText: 'The above gesture mappings are configurable and can be customized for different use cases and robot implementations. Actual gesture recognition is performed by neural networks trained on real IMU motion data',
    items: {
      push: { name: 'Push Forward', desc: 'Hand extends forward', status: 'Moving forward' },
      pull: { name: 'Pull Back', desc: 'Hand retracts backward', status: 'Moving backward' },
      left: { name: 'Turn Wrist Left', desc: 'Rotate wrist counter-clockwise', status: 'Turning left' },
      right: { name: 'Turn Wrist Right', desc: 'Rotate wrist clockwise', status: 'Turning right' },
      lift: { name: 'Lift Hand', desc: 'Hand raises upward', status: 'Standing tall' },
      circle: { name: 'Draw Circle', desc: 'Hand traces a circular path', status: 'Patrol mode' },
    },
  },
  architecture: {
    eyebrow: 'System Architecture',
    title1: 'The Complete System',
    title2: 'Behind the Intuition',
    subtitle: 'The full pipeline from physical sensing to intentional behavior',
    nodes: {
      ring: { label: 'Zilo Ring', desc: '6-axis motion sensing, accelerometer and gyroscope data acquisition' },
      transport: { label: 'Wireless Transport', desc: 'Streams time-series sensor data to the processing system' },
      preprocess: { label: 'Signal Preprocessing', desc: 'Noise reduction, calibration, normalization, and smoothing' },
      segment: { label: 'Motion Segmentation', desc: 'Detects meaningful motion start and end points' },
      recognize: { label: 'Gesture Recognition', desc: 'Matches motion sequences against known gesture features' },
      map: { label: 'Intent Mapping', desc: 'Translates recognized gestures into robot behaviors' },
      interface: { label: 'Robot Interface', desc: 'Sends structured commands to the robot control layer' },
      robot: { label: 'Dimension', desc: 'Executes motion in the physical environment' },
    },
    legend: ['Hardware', 'Signal', 'Intelligence', 'Actuation'],
  },
  why: {
    eyebrow: 'Why It Matters',
    title1: 'Robots should understand',
    title2: 'more than just',
    title3: 'buttons.',
    values: {
      noController: { title: 'No Controller', sub: 'NO CONTROLLER', desc: 'Natural motion replaces complex control hardware' },
      noScreen: { title: 'No Screen', sub: 'NO SCREEN', desc: 'The operator keeps their eyes on the physical environment' },
      lowerBarrier: { title: 'Lower the Barrier', sub: 'LOWER BARRIER', desc: 'Making robot systems simpler and faster to command' },
    },
    body: 'This project explores a future where wearables become the intuitive communication layer between humans and embodied machines. Gesture-based control is not just a convenience — it represents a fundamental shift in how we command robots',
    quote1: 'When control becomes natural, the human and the robot are no longer operator and tool — ',
    quote2: 'they become partners.',
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: 'Real-World Applications',
    subtitle: 'inudesu opens entirely new possibilities across industries',
    items: {
      rescue: { title: 'Search & Rescue', sub: 'SEARCH & RESCUE', desc: 'Rescuers direct robots through gestures while maintaining focus on the environment and survivors' },
      industrial: { title: 'Industrial Inspection', sub: 'INDUSTRIAL INSPECTION', desc: 'Field operators guide quadrupeds through hazardous or confined spaces without carrying traditional controllers' },
      accessible: { title: 'Accessible Robotics', sub: 'ACCESSIBLE ROBOTICS', desc: 'Simple body movements serve as an alternative interface for individuals with mobility or motor control differences' },
      collaboration: { title: 'Human–Robot Collaboration', sub: 'HUMAN–ROBOT COLLABORATION', desc: 'Robots respond to physical intent as naturally as a human teammate responding to gestures, enabling tighter cooperation in shared workspaces' },
    },
    disclaimer: 'Note: ',
    disclaimerText: 'The above scenarios are potential applications explored in research and prototyping phases. Scenario-specific safety considerations, regulatory compliance, and comprehensive user testing are required before real-world deployment',
  },
  xyz: {
    eyebrow: 'Unknown Domain · Why .xyz',
    headline1: "We didn't pick a domain",
    headline2: 'that tells you what to be.',
    subtitle: 'On an internet carved up by .ai, .lab, .cn, and .com, we chose the last three letters of the alphabet. A domain with no built-in meaning — and therefore, every meaning.',
    pillars: {
      unknown: { title: 'Undefined Territory', tagline: 'NO SEMANTIC BAGGAGE', body: '.xyz carries zero assumptions. Unlike .ai (artificial intelligence), .com (commercial), or .cn (national), xyz is the end of the alphabet — and the start of every possibility. You define it. It doesn\'t define you.' },
      space: { title: 'Three Dimensions', tagline: 'X · Y · Z', body: 'X, Y, Z — the three axes of space. They represent the physical world\'s dimensions and infinite possibility. When Google restructured into Alphabet, it didn\'t use .com. It chose abc.xyz — because .xyz means the courage to explore.' },
      public: { title: 'Public Domain', tagline: 'FOR EVERYONE', body: '.xyz is a generic TLD with 4.8M+ registrations across 230+ countries. It belongs to no nation, no industry, no group. It is a true commons — no gatekeeping, no prerequisites, open to all. The way the internet was meant to be.' },
    },
    manifesto1: 'We believe technology should be open —',
    manifesto2: 'and so should its names.',
    closing: 'inudesu chose .xyz not because it\'s cheap or trendy. Because it mirrors what we\'re building: undefined, unbounded, and built for everyone.',
    stat1: { num: '2014', label: 'Year Launched' },
    stat2: { num: '4.8M+', label: 'Global Registrations' },
    stat3: { num: '230+', label: 'Countries & Regions' },
    stat4: { num: '∞', label: 'No Predefined Meaning' },
  },
  footer: {
    mission: 'Our Mission',
    mission1: 'We are not building a smaller remote control.',
    mission2: 'We are inventing a new language for machines —',
    mission3: 'on the public, undefined domain.',
    missionDesc: 'Zilo translates human motion into machine intent, and Dimension responds in real-time',
    cta: 'Your movement is its instinct.',
    brandDesc: 'Human–robot interaction through wearable motion sensing · Building open platforms on the undefined domain',
    navTitle: 'Navigation',
    projectTitle: 'Project',
    contactTitle: 'Contact',
    github: 'GitHub Repository',
    paper: 'Research Paper',
    video: 'Demo Video',
    team: 'Team Members',
    advx: 'ADVX 2026',
    privacy: 'Privacy',
    terms: 'Terms',
    sitemap: 'Sitemap',
    copyright: 'All rights reserved. | ADVX 2026 · inudesu.xyz',
  },
  tech: {
    eyebrow: 'Technical Docs',
    title1: 'The Engineering',
    title2: 'Behind the Intuition',
    subtitle: 'From signal processing to machine learning, from embedded systems to cloud deployment — the complete inudesu tech stack',
    layers: [
      { label: 'Sensing Layer', desc: 'Zilo Ring · 6-axis IMU · 200Hz sampling' },
      { label: 'Transport Layer', desc: 'BLE 5.3 low-latency wireless transmission' },
      { label: 'Algorithm Layer', desc: 'RNN real-time gesture classification · Sliding window segmentation' },
      { label: 'Control Layer', desc: 'Intent mapping engine · Command scheduler' },
      { label: 'Actuation Layer', desc: 'Dimension quadruped robot · ROS2 integration' },
      { label: 'Frontend Layer', desc: 'Next.js 15 · Tailwind · Framer Motion' },
    ],
    reportsDivider: 'Technical Reports',
    docs: {
      architecture: { title: 'System Architecture Doc', desc: 'Complete technical architecture — end-to-end design from sensor to actuation' },
      summary: { title: 'Project Summary', desc: 'Project overview, tech stack, key decisions, and implementation details' },
      redesign: { title: 'Redesign Report', desc: 'Detailed record of this website redesign — design decisions and change comparison' },
      deploy: { title: 'Deployment Guide', desc: 'Vercel / server deployment steps and configuration instructions' },
      quickstart: { title: 'Quick Start', desc: 'Local dev environment setup, run and build command reference' },
    },
    back: '← Back to Home',
  },
}

const dicts: Record<Lang, Record<string, unknown>> = { zh, en }

export function I18nProvider({ children, defaultLang = 'zh' as Lang }: { children: ReactNode; defaultLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(defaultLang)

  const t = useCallback(
    (key: string) => getNested(dicts[lang], key),
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(I18nContext)
  return { t: ctx.t, lang: ctx.lang, setLang: ctx.setLang }
}

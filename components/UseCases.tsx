'use client'

import { motion } from 'framer-motion'

interface UseCase {
  title: string
  sub: string
  description: string
  color: string
  emoji: string
}

const useCases: UseCase[] = [
  {
    title: '搜救',
    sub: 'SEARCH & RESCUE',
    description: '救援人员在保持对环境和受困者关注的同时，通过手势直接指挥机器人',
    color: 'from-inudesu-accent to-inudesu-accent',
    emoji: '🚨',
  },
  {
    title: '工业巡检',
    sub: 'INDUSTRIAL INSPECTION',
    description: '现场操作员无需携带传统遥控器，即可引导四足机器人在危险或狭窄空间中穿行',
    color: 'from-inudesu-accent to-inudesu-accent',
    emoji: '🏭',
  },
  {
    title: '无障碍机器人',
    sub: 'ACCESSIBLE ROBOTICS',
    description: '简单的身体动作作为替代交互界面，帮助因行动或运动控制差异而无法操作复杂控制器的人群',
    color: 'from-inudesu-accent to-inudesu-accent',
    emoji: '♿',
  },
  {
    title: '人机协作',
    sub: 'HUMAN–ROBOT COLLABORATION',
    description: '机器人像人类队友回应手势一样自然地响应身体意图，在共享工作空间中实现更紧密的合作',
    color: 'from-inudesu-accent to-inudesu-accent',
    emoji: '🤝',
  },
]

export default function UseCases() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 bg-inudesu-bgDeep">
      <div className="container-wide">
        {/* Section title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">应用场景</p>
          <h2 className="section-title mb-4">真实世界的应用</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            inudesu 为各行各业打开了全新的可能性
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-inudesu-border p-8 md:p-10 hover:border-inudesu-accent transition-all duration-300 bg-inudesu-bg shadow-card-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient background */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-6">{useCase.emoji}</div>

                <h3 className="text-xl md:text-2xl font-bold font-display text-inudesu-dark mb-1 group-hover:text-inudesu-accent transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-xs font-mono text-inudesu-accent/60 mb-3">
                  {useCase.sub}
                </p>

                <p className="text-inudesu-textSoft leading-relaxed">
                  {useCase.description}
                </p>

                <div className={`mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r ${useCase.color} transition-all duration-300`} />
              </div>

              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 rounded-full blur-2xl -z-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-16 p-6 bg-inudesu-darker/80 border border-inudesu-borderDark rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-inudesu-light/60">
            <span className="font-semibold text-inudesu-accentLight">注：</span>
            以上场景为研究与原型阶段探索的潜在应用。在实际部署前需完成场景特定的安全考量、法规合规与全面用户测试
          </p>
        </motion.div>
      </div>
    </section>
  )
}

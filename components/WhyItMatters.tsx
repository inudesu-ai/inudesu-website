'use client'

import { motion } from 'framer-motion'

interface ValueProp {
  title: string
  sub: string
  description: string
  icon: string
}

const values: ValueProp[] = [
  {
    title: '无需控制器',
    sub: 'NO CONTROLLER',
    description: '自然动作取代复杂的操控硬件',
    icon: '✋',
  },
  {
    title: '无需屏幕',
    sub: 'NO SCREEN',
    description: '操作者目光始终聚焦物理环境',
    icon: '👁️',
  },
  {
    title: '降低交互门槛',
    sub: 'LOWER BARRIER',
    description: '让机器人系统更简单、更快速地听从指令',
    icon: '⚡',
  },
]

export default function WhyItMatters() {
  return (
    <section id="why" className="relative w-full py-20 md:py-32 px-4">
      <div className="container-wide">
        {/* Main statement */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">为什么重要</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 text-inudesu-dark">
            机器人应该理解的
            <br />
            不只是
            <br />
            <span className="text-gradient-warm">按钮。</span>
          </h2>
        </motion.div>

        {/* Value propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              className="card-glass p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-inudesu-dark mb-1">{value.title}</h3>
              <p className="text-xs font-mono text-inudesu-accent/60 mb-3">{value.sub}</p>
              <p className="text-inudesu-textSoft leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Explanation section */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-inudesu-textSoft leading-relaxed mb-8">
            本项目探索一个未来——可穿戴设备成为人与具身机器之间直觉化的沟通层。
            手势控制界面不仅是一种便利，更代表着人类对机器人操控方式的根本转变
          </p>

          <div className="hud-corners relative bg-inudesu-darker border border-inudesu-borderDark rounded-xl p-8 md:p-12 shadow-glow-accent">
            <p className="text-2xl md:text-3xl font-display font-bold text-inudesu-light italic">
              当操控变得自然，人与机器人不再是操作者和工具的关系——
              <br />
              <span className="text-gradient-warm">他们成为伙伴。</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

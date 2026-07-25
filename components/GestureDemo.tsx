'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Gesture {
  id: string
  name: string
  description: string
  motion: string
  command: string
  status: string
  icon: string
}

const gestures: Gesture[] = [
  {
    id: 'push',
    name: '前推',
    description: '手向前伸出',
    motion: '→',
    command: 'robot.move.forward',
    status: '前进中',
    icon: '➡️',
  },
  {
    id: 'pull',
    name: '后拉',
    description: '手向后收回',
    motion: '←',
    command: 'robot.move.backward',
    status: '后退中',
    icon: '⬅️',
  },
  {
    id: 'left',
    name: '左转手腕',
    description: '逆时针转动手腕',
    motion: '↺',
    command: 'robot.turn.left',
    status: '左转中',
    icon: '↩️',
  },
  {
    id: 'right',
    name: '右转手腕',
    description: '顺时针转动手腕',
    motion: '↻',
    command: 'robot.turn.right',
    status: '右转中',
    icon: '↪️',
  },
  {
    id: 'lift',
    name: '抬手',
    description: '手向上抬起',
    motion: '↑',
    command: 'robot.stand.tall',
    status: '站立中',
    icon: '⬆️',
  },
  {
    id: 'circle',
    name: '画圈',
    description: '手画圆形轨迹',
    motion: '◯',
    command: 'robot.patrol.start',
    status: '巡逻模式',
    icon: '🔄',
  },
]

export default function GestureDemo() {
  const [hoveredGesture, setHoveredGesture] = useState<string | null>(null)

  return (
    <section id="gestures" className="relative w-full py-20 md:py-32 px-4">
      <div className="container-wide">
        {/* Section title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">手势映射</p>
          <h2 className="section-title mb-4">
            一个动作
            <br />
            一个即时反应
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            基于实时 IMU 分类的手势识别。每个动作对应一个特定的机器行为
          </p>
        </motion.div>

        {/* Gesture cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gestures.map((gesture, idx) => (
            <motion.div
              key={gesture.id}
              className="card-glass p-6 md:p-8 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredGesture(gesture.id)}
              onMouseLeave={() => setHoveredGesture(null)}
              whileHover={{ y: -8, borderColor: 'rgba(230, 126, 34, 1)' }}
            >
              {/* Icon */}
              <div className="mb-6 text-5xl">{gesture.icon}</div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-inudesu-dark mb-2">{gesture.name}</h3>
                <p className="text-sm text-inudesu-textSoft mb-4">{gesture.description}</p>

                {/* Motion indicator */}
                <div className="inline-block px-3 py-1 bg-inudesu-accent/10 border border-inudesu-accent/50 rounded text-sm font-mono text-inudesu-accentDark">
                  动作: {gesture.motion}
                </div>
              </div>

              {/* Command mapping */}
              <div className="space-y-3 pt-6 border-t border-inudesu-border">
                <div>
                  <span className="text-xs font-mono text-inudesu-textSoft uppercase tracking-wide">
                    指令
                  </span>
                  <div className="font-mono text-sm text-inudesu-accent/80 break-all">
                    {gesture.command}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      hoveredGesture === gesture.id
                        ? 'bg-inudesu-accent shadow-glow-accent'
                        : 'bg-inudesu-textSoft/30'
                    }`}
                  />
                  <span className="text-xs font-mono text-inudesu-textSoft">
                    {hoveredGesture === gesture.id ? gesture.status : '待机'}
                  </span>
                </div>
              </div>

              {/* Hover animation */}
              {hoveredGesture === gesture.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-inudesu-accent/5 pointer-events-none"
                  layoutId={`hover-${gesture.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="mt-12 p-6 bg-inudesu-darker/80 border border-inudesu-borderDark rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-inudesu-light/70">
            <span className="font-semibold text-inudesu-accentLight">说明：</span>
            以上为可配置的手势映射，可根据不同使用场景和机器人实现进行定制。
            实际手势识别由基于真实 IMU 动作数据训练的神经网络完成
          </p>
        </motion.div>
      </div>
    </section>
  )
}

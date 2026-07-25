'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SystemNode {
  id: string
  label: string
  description: string
  category: 'hardware' | 'signal' | 'intelligence' | 'robot'
  x: number
  y: number
}

const nodes: SystemNode[] = [
  {
    id: 'ring',
    label: 'Zilo 指环',
    description: '六轴运动感知，加速度计与陀螺仪数据采集',
    category: 'hardware',
    x: 10,
    y: 50,
  },
  {
    id: 'transport',
    label: '无线传输',
    description: '将时序传感器数据流传输至处理系统',
    category: 'signal',
    x: 30,
    y: 50,
  },
  {
    id: 'preprocess',
    label: '信号预处理',
    description: '降噪、校准、归一化与平滑处理',
    category: 'signal',
    x: 50,
    y: 50,
  },
  {
    id: 'segment',
    label: '动作分割',
    description: '检测有意义的动作起止点',
    category: 'signal',
    x: 70,
    y: 50,
  },
  {
    id: 'recognize',
    label: '手势识别',
    description: '将动作序列匹配已知动作特征',
    category: 'intelligence',
    x: 30,
    y: 20,
  },
  {
    id: 'map',
    label: '意图映射',
    description: '将识别的手势转换为机器行为',
    category: 'intelligence',
    x: 50,
    y: 20,
  },
  {
    id: 'interface',
    label: '机器人接口',
    description: '向机器人控制层发送结构化指令',
    category: 'intelligence',
    x: 70,
    y: 20,
  },
  {
    id: 'robot',
    label: 'Dimension',
    description: '在物理环境中执行运动',
    category: 'robot',
    x: 85,
    y: 35,
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'hardware':
      return 'border-inudesu-accent bg-inudesu-accent/10'
    case 'signal':
      return 'border-inudesu-accent bg-inudesu-accent/10'
    case 'intelligence':
      return 'border-inudesu-accent bg-inudesu-accent/10'
    case 'robot':
      return 'border-inudesu-accent bg-inudesu-accent/10'
    default:
      return 'border-inudesu-border bg-inudesu-light'
  }
}

const getCategoryTextColor = (category: string) => {
  switch (category) {
    case 'hardware':
      return 'text-inudesu-accentDark'
    case 'signal':
      return 'text-inudesu-accentDark'
    case 'intelligence':
      return 'text-inudesu-accentDark'
    case 'robot':
      return 'text-inudesu-accentDark'
    default:
      return 'text-inudesu-dark'
  }
}

export default function SystemArchitecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section id="architecture" className="relative w-full py-20 md:py-32 px-4">
      <div className="container-wide">
        {/* Section title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">系统架构</p>
          <h2 className="section-title mb-4">
            直觉背后的
            <br />
            完整系统
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            从物理感知到意图行为的完整管线
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="mb-16 overflow-x-auto">
          <svg
            className="w-full h-auto min-h-96"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="gradAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E67E22" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#D4A24C" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <rect width="1000" height="400" fill="url(#gradAccent)" opacity="0.3" />

            {/* Connecting lines */}
            <line x1="150" y1="200" x2="300" y2="200" stroke="#E67E22" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            <line x1="300" y1="200" x2="450" y2="200" stroke="#E67E22" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            <line x1="450" y1="200" x2="600" y2="200" stroke="#E67E22" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
            <line x1="600" y1="200" x2="800" y2="200" stroke="#E67E22" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#E67E22" opacity="0.5" />
              </marker>
            </defs>

            {nodes.map((node, idx) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <circle
                  cx={node.x * 10}
                  cy={node.y * 4}
                  r="35"
                  className={`cursor-pointer transition-all ${getCategoryColor(node.category)}`}
                  stroke="#E67E22"
                  strokeWidth={hoveredNode === node.id ? 3 : 1.5}
                  fill={hoveredNode === node.id ? '#E67E22' : '#2C2420'}
                  opacity={hoveredNode === node.id ? 0.3 : 0.1}
                  style={{ pointerEvents: 'auto' }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                />

                <text
                  x={node.x * 10}
                  y={node.y * 4 + 5}
                  textAnchor="middle"
                  className={`text-xs font-bold ${getCategoryTextColor(node.category)}`}
                  style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    pointerEvents: 'none',
                  }}
                >
                  {node.label.split(' ')[0]}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Node details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className={`p-4 rounded-lg border transition-all cursor-pointer ${getCategoryColor(node.category)} ${
                hoveredNode === node.id ? 'border-opacity-100' : 'border-opacity-50'
              }`}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ y: -4 }}
            >
              <h4 className={`font-bold text-sm mb-2 ${getCategoryTextColor(node.category)}`}>
                {node.label}
              </h4>
              <p className="text-xs text-inudesu-textSoft">{node.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {['硬件', '信号处理', '智能', '执行'].map((label, idx) => {
            const categories = ['hardware', 'signal', 'intelligence', 'robot']
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded border-2 ${getCategoryColor(categories[idx])}`} />
                <span className="text-sm text-inudesu-textSoft">{label}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

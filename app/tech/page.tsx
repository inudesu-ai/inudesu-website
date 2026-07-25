'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Download, Cpu, BookOpen, Rocket, Wrench } from 'lucide-react'

interface Doc {
  title: string
  description: string
  file: string
  icon: React.ReactNode
}

const docs: Doc[] = [
  {
    title: '系统架构文档',
    description: '完整的技术架构说明——从传感器到执行的全链路设计',
    file: 'ARCHITECTURE.md',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: '项目总结',
    description: '项目全貌、技术栈、关键决策与实现细节',
    file: 'PROJECT_SUMMARY.md',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: '改造完成报告',
    description: '本次网站改造的详细记录——设计决策、改动对比',
    file: 'REDESIGN_REPORT.md',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: '部署指南',
    description: 'Vercel / 服务器部署步骤与配置说明',
    file: 'DEPLOYMENT.md',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: '快速开始',
    description: '本地开发环境搭建、运行与构建命令速查',
    file: 'QUICK_START.md',
    icon: <Wrench className="w-6 h-6" />,
  },
]

export default function TechPage() {
  return (
    <main className="relative w-full min-h-screen bg-inudesu-bg pt-24 pb-20">
      {/* hero glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[50vh] bg-hero-glow" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow mb-4">技术文档</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-inudesu-dark mb-6">
            直觉背后的
            <br />
            <span className="text-gradient-warm">工程技术</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto">
            从信号处理到机器学习，从嵌入式到云端部署——inudesu 的完整技术栈
          </p>
        </motion.div>

        {/* Tech overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            { label: '感知层', desc: 'Zilo 指环 · 6 轴 IMU · 200Hz 采样', icon: '📡' },
            { label: '传输层', desc: 'BLE 5.3 低延迟无线传输', icon: '📶' },
            { label: '算法层', desc: 'RNN 实时手势分类 · 滑动窗口分割', icon: '🧠' },
            { label: '控制层', desc: '意图映射引擎 · 指令调度器', icon: '🎯' },
            { label: '执行层', desc: 'Dimension 四足机器人 · ROS2 集成', icon: '🤖' },
            { label: '前端层', desc: 'Next.js 15 · Tailwind · Framer Motion', icon: '⚛️' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="card-glass p-6 flex gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-display font-bold text-inudesu-dark mb-1">{item.label}</h3>
                <p className="text-sm text-inudesu-textSoft">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-inudesu-border" />
          <span className="font-mono text-xs text-inudesu-accent tracking-widest uppercase">技术报告</span>
          <div className="h-px flex-1 bg-inudesu-border" />
        </div>

        {/* Document cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {docs.map((doc, i) => (
            <motion.a
              key={doc.file}
              href={`/docs/${doc.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-corners relative group block p-6 md:p-8 bg-inudesu-light border border-inudesu-border rounded-xl hover:border-inudesu-accent/60 hover:shadow-glow-accent transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {/* hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-warm origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-inudesu-accent/10 flex items-center justify-center text-inudesu-accent shrink-0 group-hover:bg-inudesu-accent group-hover:text-white transition-colors">
                  {doc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg text-inudesu-dark group-hover:text-inudesu-accent transition-colors">
                      {doc.title}
                    </h3>
                    <Download className="w-4 h-4 text-inudesu-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-inudesu-textSoft leading-relaxed">{doc.description}</p>
                  <p className="mt-3 font-mono text-xs text-inudesu-accent/60">{doc.file}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-inudesu-textSoft hover:text-inudesu-accent transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </main>
  )
}

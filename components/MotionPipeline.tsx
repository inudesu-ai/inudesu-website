'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface PipelineStage {
  number: string
  title: string
  sub: string
  description: string
  icon: React.ReactNode
}

const stages: PipelineStage[] = [
  {
    number: '01',
    title: '感知',
    sub: 'SENSE',
    description: 'Zilo 指环采集线性加速度与角速度数据',
    icon: '📡',
  },
  {
    number: '02',
    title: '处理',
    sub: 'PROCESS',
    description: '原始 IMU 数据经滤波、归一化、分段为动作序列',
    icon: '⚙️',
  },
  {
    number: '03',
    title: '理解',
    sub: 'UNDERSTAND',
    description: '系统比对动作特征，识别意图手势',
    icon: '🧠',
  },
  {
    number: '04',
    title: '映射',
    sub: 'MAP',
    description: '识别的意图转换为机器人指令',
    icon: '🎯',
  },
  {
    number: '05',
    title: '执行',
    sub: 'ACT',
    description: 'Dimension 机器狗在物理世界中完成动作',
    icon: '🤖',
  },
]

export default function MotionPipeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return

    const lines = svgRef.current.querySelectorAll('line')

    lines.forEach((line) => {
      const length = (line as SVGLineElement).getTotalLength()
      line.setAttribute('stroke-dasharray', String(length))
      line.setAttribute('stroke-dashoffset', String(length))

      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="system"
      className="relative w-full py-20 md:py-32 px-4 overflow-hidden"
      ref={containerRef}
    >
      <div className="container-wide">
        {/* Section title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">动作管线</p>
          <h2 className="section-title mb-4">
            从动作
            <br />
            到机器意图
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            一条将人体动作无缝转化为机器行为的处理管线
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative mb-20">
          {/* SVG Connecting lines */}
          <svg
            ref={svgRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ height: '400px' }}
          >
            {stages.map((_, idx) => {
              if (idx < stages.length - 1) {
                return (
                  <line
                    key={`line-${idx}`}
                    x1={`${((idx + 0.5) / stages.length) * 100}%`}
                    y1="100"
                    x2={`${((idx + 1.5) / stages.length) * 100}%`}
                    y2="100"
                    stroke="#E67E22"
                    strokeWidth="2"
                    className="hidden md:block"
                  />
                )
              }
              return null
            })}
          </svg>

          {/* Pipeline stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Node */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 w-20 h-20 bg-inudesu-accent/20 rounded-full blur-xl" />
                  <div className="relative w-20 h-20 border-2 border-inudesu-accent rounded-full flex items-center justify-center bg-inudesu-darker/80 hover:bg-inudesu-darker transition-colors group cursor-pointer">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {stage.icon}
                    </span>
                  </div>
                  {idx < stages.length - 1 && (
                    <div className="md:hidden flex justify-center mt-4">
                      <svg className="w-6 h-8 text-inudesu-accent" fill="none" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16l-4-4m0 0l4-4m-4 4h16"
                          transform="rotate(90) translate(2 -8)"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Stage label */}
                <div className="text-center">
                  <div className="font-mono text-xs text-inudesu-accent/70 mb-2">{stage.number}</div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-inudesu-dark mb-1">
                    {stage.title}
                  </h3>
                  <p className="font-mono text-xs text-inudesu-accent/60 mb-2">{stage.sub}</p>
                  <p className="text-sm text-inudesu-textSoft max-w-xs">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data flow visualization */}
        <motion.div
          className="hud-corners relative mt-20 p-6 md:p-8 border border-inudesu-borderDark rounded-xl bg-inudesu-darker shadow-glow-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-inudesu-light/80 space-y-2">
            <div className="text-inudesu-accentLight">$ inudesu stream</div>
            <div className="text-inudesu-light/50">
              [已连接] ZILO-RING-01 <span className="text-inudesu-accentLight">✓</span>
            </div>
            <div className="text-inudesu-light/50">
              [数据流] imu.accel x=0.42 y=-0.18 z=0.91
            </div>
            <div className="text-inudesu-light/50">
              [数据流] imu.gyro x=21.4 y=-8.7 z=14.2
            </div>
            <div className="text-inudesu-accentLight">
              [检测] motion_sequence_started
            </div>
            <div className="text-inudesu-accentLight">
              [分类] gesture=forward_push
            </div>
            <div className="text-inudesu-accentLight">
              [意图] robot.move.forward
            </div>
            <div className="text-inudesu-accentLight">
              [调度] dimension.command 已接受 ✓
            </div>
            <div className="text-inudesu-light/50">
              [状态] dimension 移动中
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

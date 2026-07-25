'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.play()
    setIsPlaying(true)
  }

  return (
    <section
      id="demo"
      className="relative w-full py-20 md:py-32 px-4 bg-inudesu-bgDeep"
    >
      <div className="container-wide">
        {/* Section title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-4">现场演示</p>
          <h2 className="section-title mb-4">眼见为实</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            观看 inudesu 如何通过简单手势实时操控机器狗
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hud-corners relative w-full bg-inudesu-darker rounded-2xl overflow-hidden shadow-glow-accent border border-inudesu-accent/40">
            {/* Real video */}
            <video
              ref={videoRef}
              className="w-full aspect-video bg-black object-cover"
              src="/demo.mp4"
              controls={isPlaying}
              playsInline
              preload="metadata"
              poster="/inudesu-badge.png"
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            />

            {/* Custom play overlay (hidden once playing) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="播放演示视频"
                className="absolute inset-0 flex items-center justify-center group cursor-pointer bg-inudesu-darker/50 backdrop-blur-[2px] transition-colors hover:bg-inudesu-darker/35"
              >
                {/* animated ring */}
                <span className="absolute w-24 h-24 rounded-full border border-inudesu-accent/50 animate-pulse-glow" />
                <span className="relative w-20 h-20 rounded-full bg-accent-sheen flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow-accent">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                {/* label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-inudesu-light/70 font-mono text-xs md:text-sm">
                  <span>ADVX 2026 · 现场实机演示</span>
                  <span className="text-inudesu-accent">▸ 播放</span>
                </div>
              </button>
            )}
          </div>

          {/* Info Box */}
          <motion.div
            className="mt-8 p-6 bg-inudesu-light/70 border border-inudesu-border rounded-xl shadow-card-soft"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-inudesu-textSoft text-center">
              <span className="font-semibold text-inudesu-accent">视频内容：</span>
              展示佩戴者通过手势控制机器狗的实时交互效果
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

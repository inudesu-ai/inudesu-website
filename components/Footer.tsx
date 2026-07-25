'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-inudesu-darker border-t border-inudesu-borderDark text-inudesu-light overflow-hidden">
      {/* warm glow accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-hero-glow opacity-60" />

      {/* Final CTA section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-6">我们的使命</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 text-inudesu-light">
              我们做的
              <br />不是更小的遥控器。
              <br />
              <span className="text-gradient-warm">我们为机器创造了一种新的语言。</span>
            </h2>

            <p className="text-lg md:text-xl text-inudesu-light/70 max-w-2xl mx-auto mb-12">
              Zilo 将人的动作翻译为机器的意图，让 Dimension 实时响应
            </p>

            <div className="inline-block px-7 py-3.5 bg-accent-sheen text-white font-semibold rounded-full tracking-wide shadow-glow-accent">
              你的动作，就是它的本能
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer content */}
      <div className="relative px-4 py-12 md:py-16 border-t border-inudesu-borderDark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full border border-inudesu-accent flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent-sheen" />
                </div>
                <span className="font-display font-bold text-xl text-inudesu-light">inudesu</span>
              </div>
              <p className="text-sm text-inudesu-light/60">
                通过可穿戴动作感知实现人机交互
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-inudesu-light mb-4">导航</h4>
              <ul className="space-y-2 text-sm text-inudesu-light/60">
                <li>
                  <a href="#system" className="hover:text-inudesu-accent transition-colors">
                    系统
                  </a>
                </li>
                <li>
                  <a href="#gestures" className="hover:text-inudesu-accent transition-colors">
                    手势
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="hover:text-inudesu-accent transition-colors">
                    架构
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-inudesu-accent transition-colors">
                    意义
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Project */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-inudesu-light mb-4">项目</h4>
              <ul className="space-y-2 text-sm text-inudesu-light/60">
                <li>
                  <a href="#" className="hover:text-inudesu-accent transition-colors">
                    GitHub 仓库
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-inudesu-accent transition-colors">
                    研究论文
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-inudesu-accent transition-colors">
                    演示视频
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-inudesu-light mb-4">联系</h4>
              <ul className="space-y-2 text-sm text-inudesu-light/60">
                <li>
                  <a
                    href="mailto:team@inudesu.xyz"
                    className="hover:text-inudesu-accent transition-colors"
                  >
                    team@inudesu.xyz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-inudesu-accent transition-colors">
                    团队成员
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-inudesu-accent transition-colors">
                    ADVX 2026
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-inudesu-borderDark mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-inudesu-light/60 font-mono">
            <p>© {currentYear} inudesu. 保留所有权利。 | ADVX 2026 黑客松项目</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-inudesu-accent transition-colors">
                隐私
              </a>
              <a href="#" className="hover:text-inudesu-accent transition-colors">
                条款
              </a>
              <a href="#" className="hover:text-inudesu-accent transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

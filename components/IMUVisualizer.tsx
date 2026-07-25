'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface IMUData {
  accelX: number
  accelY: number
  accelZ: number
  gyroX: number
  gyroY: number
  gyroZ: number
}

export default function IMUVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imuData, setIMUData] = useState<IMUData>({
    accelX: 0,
    accelY: 0,
    accelZ: 0.91,
    gyroX: 0,
    gyroY: 0,
    gyroZ: 0,
  })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    // Simulate IMU data changes
    const interval = setInterval(() => {
      setIMUData((prev) => ({
        accelX: Math.sin(Date.now() / 2000) * 1.5,
        accelY: Math.cos(Date.now() / 2500) * 1.2,
        accelZ: 0.91 + Math.sin(Date.now() / 3000) * 0.3,
        gyroX: Math.sin(Date.now() / 1500) * 30,
        gyroY: Math.cos(Date.now() / 2000) * 25,
        gyroZ: Math.sin(Date.now() / 1800) * 35,
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      {/* Canvas waveform */}
      <motion.div
        className="relative h-48 bg-inudesu-dark/50 border border-inudesu-border rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          width={800}
          height={200}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-inudesu-accent/10" />
      </motion.div>

      {/* Data readout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Accelerometer */}
        <motion.div
          className="p-4 bg-inudesu-dark/50 border border-inudesu-accent/30 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-inudesu-accent/60 mb-2">ACCELEROMETER (g)</div>
          <div className="space-y-1 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">X:</span>
              <span className="text-cyan-300">{imuData.accelX.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">Y:</span>
              <span className="text-cyan-300">{imuData.accelY.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">Z:</span>
              <span className="text-cyan-300">{imuData.accelZ.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>

        {/* Gyroscope */}
        <motion.div
          className="p-4 bg-inudesu-dark/50 border border-inudesu-accent/30 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-inudesu-accent/60 mb-2">GYROSCOPE (°/s)</div>
          <div className="space-y-1 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">X:</span>
              <span className="text-purple-300">{imuData.gyroX.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">Y:</span>
              <span className="text-purple-300">{imuData.gyroY.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-inudesu-text/60">Z:</span>
              <span className="text-purple-300">{imuData.gyroZ.toFixed(1)}</span>
            </div>
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          className="p-4 bg-inudesu-dark/50 border border-inudesu-accent/30 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-inudesu-accent/60 mb-2">STATUS</div>
          <div className="space-y-1 font-mono text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-inudesu-accent animate-pulse" />
              <span className="text-inudesu-accent">ACTIVE</span>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="text-inudesu-text/60">Latency:</span>
              <span className="text-inudesu-accent">&lt;20ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

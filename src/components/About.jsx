import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../data/data'
import { smoothTween } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-24 pt-12 pb-16 md:py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...smoothTween }}
          className="transform-gpu will-change-transform"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">{about.title}</h2>
          <p className="text-[#999] text-lg leading-relaxed mb-12 max-w-3xl">
            {about.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {about.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...smoothTween, delay: idx * 0.08 }}
                className="transform-gpu will-change-transform bg-[#1a1a1f] px-4 py-4 md:p-6 rounded-2xl md:rounded-lg border border-[#2a2a2f] hover:border-accent transition"
              >
                <div className="flex items-center gap-4 md:flex-col md:text-center md:gap-0">
                  <div className="text-2xl md:text-3xl font-bold text-accent shrink-0">✦</div>
                  <p className="text-white font-medium text-sm md:text-base leading-snug md:mt-3">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

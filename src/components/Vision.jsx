import React from 'react'
import { motion } from 'framer-motion'
import { vision } from '../data/data'
import { smoothTween } from '../utils/motion'

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-20 md:scroll-mt-24 pt-12 pb-16 md:py-20 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...smoothTween }}
          className="transform-gpu will-change-transform mb-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">{vision.title}</h2>
          <p className="text-[#999] text-xl leading-relaxed max-w-3xl italic">
            "{vision.mission}"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vision.values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...smoothTween, delay: idx * 0.08 }}
              className="transform-gpu will-change-transform bg-[#1a1a1f] px-4 py-4 md:p-8 rounded-2xl md:rounded-lg border border-[#2a2a2f] hover:border-accent transition group flex flex-col md:items-center md:text-center"
            >
              <div className="flex items-start gap-4 md:flex-col md:gap-3 md:w-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-semibold shrink-0 md:shrink-0 md:mx-auto">
                  {idx + 1}
                </div>
                <div className="md:w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-accent mb-2 md:mb-3 group-hover:text-white transition">
                    {value.title}
                  </h3>
                  <p className="text-[#999] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

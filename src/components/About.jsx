import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../data/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-white mb-6">{about.title}</h2>
          <p className="text-[#999] text-lg leading-relaxed mb-12 max-w-3xl">
            {about.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {about.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#1a1a1f] p-6 rounded-lg border border-[#2a2a2f] hover:border-accent transition"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-3">✦</div>
                  <p className="text-white font-medium">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

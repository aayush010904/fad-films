import React from 'react'
import { motion } from 'framer-motion'
import { vision } from '../data/data'

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1a1a1f] p-8 rounded-lg border border-[#2a2a2f] hover:border-accent transition group"
            >
              <h3 className="text-xl font-semibold text-accent mb-3 group-hover:text-white transition">
                {value.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

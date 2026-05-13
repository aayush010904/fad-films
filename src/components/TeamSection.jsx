import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { team } from '../data/data'
import TeamDrawer from './TeamDrawer'

export default function TeamSection(){
  const [active, setActive] = useState(null)
  return (
    <section id="team" className="scroll-mt-20 md:scroll-mt-24 pt-12 pb-14 md:py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-white">Meet the team</h2>
          <a href="#" className="text-sm text-accent hover:text-white transition">Full bios →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {team.map(m=> (
            <motion.button key={m.id} whileHover={{scale:1.02}} onClick={()=>setActive(m)} className="bg-[#1a1a1f] px-4 py-4 rounded-2xl md:rounded-md text-left border border-[#2a2a2f] hover:border-accent transition group">
              <div className="flex items-center gap-4 md:flex-col md:items-center md:text-center">
                <div style={{background:m.avatarBg,color:m.avatarColor}} className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shrink-0">{m.initials}</div>
                <div className="min-w-0 flex-1 md:w-full">
                  <div className="text-white font-medium truncate">{m.name}</div>
                  <div className="text-sm text-[#999] truncate">{m.role}</div>
                  <div className="text-xs text-[#666] mt-1 md:mt-2">{m.credits}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <TeamDrawer member={active} onClose={()=>setActive(null)} />
    </section>
  )
}

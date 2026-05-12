import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { team } from '../data/data'
import TeamDrawer from './TeamDrawer'

export default function TeamSection(){
  const [active, setActive] = useState(null)
  return (
    <section id="team" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-white">Meet the team</h2>
          <a href="#" className="text-sm text-accent hover:text-white transition">Full bios →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {team.map(m=> (
            <motion.button key={m.id} whileHover={{scale:1.02}} onClick={()=>setActive(m)} className="bg-[#1a1a1f] p-6 rounded-md text-left border border-[#2a2a2f] hover:border-accent transition group">
              <div className="flex flex-col items-center text-center">
                <div style={{background:m.avatarBg,color:m.avatarColor}} className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mb-4">{m.initials}</div>
                <div className="w-full">
                  <div className="text-white font-medium">{m.name}</div>
                  <div className="text-sm text-[#999]">{m.role}</div>
                  <div className="text-xs text-[#666] mt-2">{m.credits}</div>
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

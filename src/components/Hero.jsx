import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import TrailerModal from './TrailerModal'
import { hero } from '../data/data'

export default function Hero(){
  const [open, setOpen] = useState(false)
  const lines = hero.title.split('\n')
  return (
    <section id="films" className="min-h-screen bg-[#0d0d18] flex items-center relative overflow-hidden">
      {/* Background GIF/Video */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{backgroundImage: `url(${hero.videoUrl})`}}
      />
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.05}} className="text-accent uppercase tracking-widest text-sm drop-shadow-lg">{hero.eyebrow}</motion.div>
            <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.15}} className="text-6xl leading-tight font-semibold text-white drop-shadow-2xl">{lines.map((l,i)=><div key={i}>{l}</div>)}</motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="text-[#ccc] max-w-xl text-sm drop-shadow-lg">{hero.description}</motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="flex gap-4 pt-4">
              <button onClick={()=>setOpen(true)} className="bg-accent text-black px-6 py-2 rounded-sm font-medium flex items-center gap-2 hover:bg-opacity-90 transition"> <Play size={16} className="fill-black"/>Watch latest work</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white/20 text-white px-6 py-2 rounded-sm font-medium hover:border-accent transition">More info</button>
            </motion.div>
          </div>
        </div>
      </div>
      <TrailerModal open={open} onClose={()=>setOpen(false)} url={hero.trailerUrl} />
    </section>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import TrailerModal from './TrailerModal'
import { hero } from '../data/data'
import { smoothTween } from '../utils/motion'

export default function Hero(){
  const [open, setOpen] = useState(false)
  const lines = hero.title.split('\n')
  return (
    <section id="home" className="h-96 md:min-h-screen bg-[#0d0d18] flex items-center relative overflow-hidden">
      {/* Background GIF/Video */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{backgroundImage: `url(${hero.videoUrl})`}}
      />
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3 md:space-y-6">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{...smoothTween, delay:0.05}} className="transform-gpu will-change-transform text-accent uppercase tracking-widest text-xs md:text-sm drop-shadow-lg">{hero.eyebrow}</motion.div>
            <motion.h1 initial={{y:24,opacity:0}} animate={{y:0,opacity:1}} transition={{...smoothTween, delay:0.12}} className="transform-gpu will-change-transform text-3xl md:text-6xl leading-tight font-semibold text-white drop-shadow-2xl">{lines.map((l,i)=><div key={i}>{l}</div>)}</motion.h1>
            <motion.p initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{...smoothTween, delay:0.2}} className="transform-gpu will-change-transform text-[#ccc] max-w-xl text-xs md:text-sm drop-shadow-lg">{hero.description}</motion.p>
            <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{...smoothTween, delay:0.28}} className="transform-gpu will-change-transform flex flex-col md:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button onClick={()=>setOpen(true)} className="bg-accent text-black px-6 py-2 rounded-sm font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition text-sm transform-gpu will-change-transform"> <Play size={16} className="fill-black"/>Watch latest work</button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="border border-white/20 text-white px-6 py-2 rounded-sm font-medium hover:border-accent transition text-sm transform-gpu will-change-transform">More info</button>
            </motion.div>
          </div>
        </div>
      </div>
      <TrailerModal open={open} onClose={()=>setOpen(false)} url={hero.trailerUrl} />
    </section>
  )
}

import React from 'react'
import { motion, useInView } from 'framer-motion'
import useCountUp from '../hooks/useCountUp'
import { stats } from '../data/data'

function Stat({label, value}){
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const v = useCountUp(value, 1500, 0, inView)
  const isMillions = value >= 1000000
  return (
    <div ref={ref} className="py-8 px-4 border-r border-[#222] last:border-r-0">
      <div className="text-3xl font-semibold text-white">{isMillions ? (v/1000000).toFixed(1) + 'M+' : v.toLocaleString()}</div>
      <div className="text-sm text-[#999] capitalize">{label}</div>
    </div>
  )
}

export default function StatsBar(){
  return (
    <div className="border-t border-b border-[#222] bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map(s=> <Stat key={s.id} {...s} />)}
      </div>
    </div>
  )
}

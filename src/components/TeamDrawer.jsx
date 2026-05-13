import React from 'react'
import { motion } from 'framer-motion'
import { smoothTween } from '../utils/motion'

export default function TeamDrawer({member, onClose}){
  if(!member) return null
  return (
    <motion.aside initial={{x:260}} animate={{x:0}} exit={{x:260}} transition={smoothTween} className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#0d0d18] z-50 p-6 transform-gpu will-change-transform">
      <div className="flex justify-between items-start"><div className="text-white font-bold">{member.name}</div><button onClick={onClose}>Close</button></div>
      <div className="mt-4 text-[#E5E5E5]">{member.bio}</div>
      <div className="mt-6">
        <div className="text-sm text-[#999]">Notable</div>
        <div className="mt-2">{member.credits}</div>
      </div>
    </motion.aside>
  )
}

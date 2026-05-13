import React from 'react'
import { motion } from 'framer-motion'
import { smoothTween } from '../utils/motion'

export default function TrailerModal({open, onClose, url}){
  if(!open) return null
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={smoothTween} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-[90%] md:w-3/4 bg-[#0d0d18] rounded-md p-4">
        <div className="aspect-video bg-black">
          <iframe className="w-full h-full" src={url} title="trailer" allowFullScreen />
        </div>
        <div className="mt-4 text-right"><button onClick={onClose} className="px-4 py-2 border rounded-sm">Close</button></div>
      </div>
    </motion.div>
  )
}

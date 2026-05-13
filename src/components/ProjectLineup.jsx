import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/data'
import ProjectModal from './ProjectModal'
import { smoothTween } from '../utils/motion'

export default function ProjectLineup(){
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setCurrentIndex(0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const itemsPerView = isMobile ? 1 : 4

  const handleNext = () => {
    const maxStart = Math.max(0, projects.length - itemsPerView)
    const nextIndex = Math.min(currentIndex + itemsPerView, maxStart)
    setCurrentIndex(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex = Math.max(0, currentIndex - itemsPerView)
    setCurrentIndex(prevIndex)
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section id="lineup" className="scroll-mt-20 md:scroll-mt-24 pt-12 pb-14 md:py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-white">Project lineup</h2>
            {projects.length > itemsPerView && (
              <div className="flex gap-3 items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="bg-accent text-black p-2 rounded-full hover:bg-opacity-90 transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Previous projects"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= projects.length - itemsPerView}
                  className="bg-accent text-black p-2 rounded-full hover:bg-opacity-90 transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Next projects"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
        </div>

        <div className="relative">
          {/* Desktop Grid (4 items) */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            {visibleProjects.map((p, idx) => (
              <motion.button
                key={p.id}
                whileHover={{scale:1.05}}
                onClick={() => setSelectedProject(p)}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{ ...smoothTween, delay: idx * 0.08 }}
                className="transform-gpu will-change-transform text-left bg-[#1a1a1f] rounded-md border border-[#2a2a2f] hover:border-accent transition overflow-hidden group"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition" />
                </div>
                <div className="p-4">
                  <div className="text-white font-medium mb-1">{p.title}</div>
                  <div className="text-xs text-[#999]">{p.genre} · {p.format}</div>
                  <div className="mt-2 inline-block text-xs px-2 py-1 rounded-sm bg-[#2a2a2f]" style={{color: p.status === 'In production' ? '#4ADE80' : p.status === 'Post production' ? '#FBBF24' : p.status === 'Released' ? '#EF4444' : '#60A5FA'}}>{p.status}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Grid (1 item) */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {visibleProjects.map((p, idx) => (
              <motion.button
                key={p.id}
                whileHover={{scale:1.05}}
                onClick={() => setSelectedProject(p)}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{ ...smoothTween, delay: idx * 0.08 }}
                className="transform-gpu will-change-transform text-left bg-[#1a1a1f] rounded-md border border-[#2a2a2f] hover:border-accent transition overflow-hidden group"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition" />
                </div>
                <div className="p-3">
                  <div className="text-white font-medium mb-1 text-sm">{p.title}</div>
                  <div className="text-xs text-[#999]">{p.genre}</div>
                  <div className="mt-1 inline-block text-xs px-2 py-1 rounded-sm bg-[#2a2a2f]" style={{color: p.status === 'In production' ? '#4ADE80' : p.status === 'Post production' ? '#FBBF24' : p.status === 'Released' ? '#EF4444' : '#60A5FA'}}>{p.status}</div>
                </div>
              </motion.button>
            ))}
          </div>

            {/* Navigation moved into heading; top overlay removed */}

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({length: Math.ceil(projects.length / itemsPerView)}).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerView)}
                className={`h-2 rounded-full transition ${
                  idx === Math.floor(currentIndex / itemsPerView)
                    ? 'bg-accent w-6'
                    : 'bg-[#333] w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

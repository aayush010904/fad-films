import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-80 z-50"
          />
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-[#1a1a1f] rounded-lg max-w-2xl w-full border border-[#2a2a2f] max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b border-[#2a2a2f]">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="text-[#999] hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Video/Thumbnail */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2a2a2f] text-sm text-[#999] rounded-full">
                      {project.genre}
                    </span>
                    <span className="px-3 py-1 bg-[#2a2a2f] text-sm text-[#999] rounded-full">
                      {project.format}
                    </span>
                    <span
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor:
                          project.status === 'In production'
                            ? 'rgba(74, 222, 128, 0.1)'
                            : project.status === 'Post production'
                            ? 'rgba(251, 191, 36, 0.1)'
                            : project.status === 'Released'
                            ? 'rgba(239, 68, 68, 0.1)'
                            : 'rgba(96, 165, 250, 0.1)',
                        color:
                          project.status === 'In production'
                            ? '#4ADE80'
                            : project.status === 'Post production'
                            ? '#FBBF24'
                            : project.status === 'Released'
                            ? '#EF4444'
                            : '#60A5FA',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-[#E5E5E5] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2a2a2f]">
                    <div>
                      <div className="text-sm text-[#999] mb-1">Genre</div>
                      <div className="text-white font-medium">{project.genre}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#999] mb-1">Format</div>
                      <div className="text-white font-medium">{project.format}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(project.videoUrl, '_blank')}
                    className="w-full bg-accent text-black py-2 rounded-sm font-medium hover:bg-opacity-90 transition mt-4"
                  >
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

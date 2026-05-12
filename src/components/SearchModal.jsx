import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search as SearchIcon } from 'lucide-react'
import { projects, team, roles } from '../data/data'

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('')

  const results = useMemo(() => {
    if (!searchQuery.trim()) return { projects: [], team: [], roles: [] }

    const query = searchQuery.toLowerCase()

    return {
      projects: projects.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.genre.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      ),
      team: team.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.role.toLowerCase().includes(query) ||
        m.bio.toLowerCase().includes(query)
      ),
      roles: roles.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.location.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query)
      )
    }
  }, [searchQuery])

  const totalResults = results.projects.length + results.team.length + results.roles.length

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-50 flex justify-center"
          >
            <div className="w-full max-w-2xl mx-4 bg-[#1a1a1f] border border-[#2a2a2f] rounded-lg shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
              {/* Search Input */}
              <div className="p-6 border-b border-[#2a2a2f]">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]" size={20} />
                  <input
                    type="text"
                    placeholder="Search films, team, roles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full bg-[#0d0d18] border border-[#333] rounded-sm pl-10 pr-4 py-3 text-white text-sm placeholder-[#666] focus:outline-none focus:border-accent"
                  />
                </div>
                {searchQuery && (
                  <div className="text-sm text-[#999] mt-2">
                    {totalResults} result{totalResults !== 1 ? 's' : ''} found
                  </div>
                )}
              </div>

              {/* Results */}
              <div className="overflow-y-auto flex-1">
                {searchQuery.trim() === '' ? (
                  <div className="p-6 text-center text-[#999]">
                    <p className="text-sm">Start typing to search...</p>
                  </div>
                ) : totalResults === 0 ? (
                  <div className="p-6 text-center text-[#999]">
                    <p className="text-sm">No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <>
                    {/* Films */}
                    {results.projects.length > 0 && (
                      <div className="p-6 border-b border-[#2a2a2f]">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide text-[#999]">
                          Films ({results.projects.length})
                        </h3>
                        <div className="space-y-3">
                          {results.projects.map(project => (
                            <a
                              key={project.id}
                              href={`#lineup`}
                              onClick={onClose}
                              className="block p-3 bg-[#0d0d18] hover:bg-[#151520] rounded transition border border-transparent hover:border-[#333]"
                            >
                              <div className="text-white font-medium">{project.title}</div>
                              <div className="text-xs text-[#999]">{project.genre} · {project.format}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Team */}
                    {results.team.length > 0 && (
                      <div className="p-6 border-b border-[#2a2a2f]">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide text-[#999]">
                          Team ({results.team.length})
                        </h3>
                        <div className="space-y-3">
                          {results.team.map(member => (
                            <a
                              key={member.id}
                              href={`#team`}
                              onClick={onClose}
                              className="block p-3 bg-[#0d0d18] hover:bg-[#151520] rounded transition border border-transparent hover:border-[#333]"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                  style={{ background: member.avatarBg, color: member.avatarColor }}
                                >
                                  {member.initials}
                                </div>
                                <div>
                                  <div className="text-white font-medium text-sm">{member.name}</div>
                                  <div className="text-xs text-[#999]">{member.role}</div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Roles */}
                    {results.roles.length > 0 && (
                      <div className="p-6">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide text-[#999]">
                          Open Roles ({results.roles.length})
                        </h3>
                        <div className="space-y-3">
                          {results.roles.map(role => (
                            <a
                              key={role.id}
                              href={`#join`}
                              onClick={onClose}
                              className="block p-3 bg-[#0d0d18] hover:bg-[#151520] rounded transition border border-transparent hover:border-[#333]"
                            >
                              <div className="text-white font-medium">{role.title}</div>
                              <div className="text-xs text-[#999]">{role.type} · {role.location}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

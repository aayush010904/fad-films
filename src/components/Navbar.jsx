import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'
import useScrolled from '../hooks/useScrolled'
import { navLinks } from '../data/data'
import SearchModal from './SearchModal'

export default function Navbar(){
  const scrolled = useScrolled(80)
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <motion.nav animate={{ backdropFilter: scrolled? 'blur(6px)':'blur(0px)', backgroundColor: scrolled? 'rgba(0,0,0,0.7)':'rgba(0,0,0,1)'}} transition={{duration:0.25}} className="fixed w-full z-40 top-0 border-b border-[#222] bg-black">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-accent font-bold tracking-widest">FALAANA AND DHIMKANA</div>
          <div className="hidden md:flex space-x-6 text-sm">
            {navLinks.map(l=> (
              <a key={l.id} href={`#${l.id}`} className="hover:text-white text-[#999] transition">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(true)}
              className="hidden md:block p-2 text-[#999] hover:text-white transition"
            >
              <Search size={18} />
            </button>
            <button className="md:hidden p-2 text-[#999]" onClick={()=>setOpen(true)}><Menu size={20} /></button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="p-6 flex justify-between items-center border-b border-[#222]"><div className="text-accent font-bold tracking-widest">FALAANA AND DHIMKANA</div><button onClick={()=>setOpen(false)}><X/></button></div>
          <div className="flex-1 p-10 flex flex-col gap-6 items-center justify-center">
            {navLinks.map(l=> <a key={l.id} href={`#${l.id}`} onClick={()=>setOpen(false)} className="text-2xl hover:text-accent transition">{l.label}</a>)}
          </div>
        </motion.div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

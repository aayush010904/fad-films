import React from 'react'
import { Instagram, Youtube, Mail } from 'lucide-react'
import { footerLinks } from '../data/data'

export default function Footer(){
  return (
    <footer className="bg-black text-[#666] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
              <div className="text-white font-bold tracking-widest">FALAANA AND DHIMKANA</div>
            <p className="text-sm text-[#999] mt-2">Bringing bold visions to life through cinema.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:justify-center">
            {footerLinks.map((f)=>(<a key={f.id} href={`#${f.id}`} className="text-sm hover:text-[#E50914] transition duration-300 font-medium border-b border-transparent hover:border-[#E50914]">{f.label}</a>))}
          </div>
          <div className="flex justify-end gap-4">
            <a href="#" className="hover:text-white transition"><Instagram size={18}/></a>
            <a href="#" className="hover:text-white transition"><Youtube size={18}/></a>
            <a href="#" className="hover:text-white transition"><Mail size={18}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#222] py-4 text-sm text-[#666]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <div>© {new Date().getFullYear()} Falaana and Dhimkana Films. All rights reserved</div>
          <div className="hidden md:block">Privacy · Press · Instagram · IMDb</div>
        </div>
      </div>
    </footer>
  )
}

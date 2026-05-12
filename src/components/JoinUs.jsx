import React, { useState } from 'react'
import { roles } from '../data/data'
import { motion, AnimatePresence } from 'framer-motion'

export default function JoinUs(){
  const [form, setForm] = useState({name:'',email:'',role:'',msg:''})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(){
    const e = {}
    if(!form.name) e.name = 'Required'
    if(!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required'
    if(!form.role) e.role = 'Select a role'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function onSubmit(e){
    e.preventDefault()
    if(!validate()) return
    setSent(true)
  }

  return (
    <section id="join" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-4">Join the crew</h2>
          <p className="text-[#999] text-sm mb-8 leading-relaxed">We're always looking for passionate storytellers, technicians, and creatives to bring bold visions to life. Full-time, freelance, and internship roles available.</p>
          
          <h3 className="text-lg font-semibold text-white mb-4">Open Roles</h3>
          <div className="space-y-2">
            {roles.map(r=> (
              <div key={r.id} className="bg-[#1a1a1f] p-3 rounded-md border border-[#2a2a2f] hover:border-accent transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm font-medium">{r.title}</div>
                    <div className="text-xs text-[#999]">{r.type} · {r.location}</div>
                  </div>
                  <button className="text-accent text-xl">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {!sent ? (
            <form onSubmit={onSubmit} className="space-y-4 bg-[#1a1a1f] p-6 rounded-md border border-[#2a2a2f]">
              <h3 className="text-lg font-semibold text-white">Apply now</h3>
              <div>
                <label className="text-sm text-[#999]">Full name</label>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="w-full mt-1 p-2 bg-[#0d0d18] border border-[#333] rounded-sm text-white text-sm placeholder-[#666]" />
                {errors.name && <div className="text-xs text-red-500">{errors.name}</div>}
              </div>
              <div>
                <label className="text-sm text-[#999]">Email</label>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@email.com" className="w-full mt-1 p-2 bg-[#0d0d18] border border-[#333] rounded-sm text-white text-sm placeholder-[#666]" />
                {errors.email && <div className="text-xs text-red-500">{errors.email}</div>}
              </div>
              <div>
                <label className="text-sm text-[#999]">Role you're applying for</label>
                <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="w-full mt-1 p-2 bg-[#0d0d18] border border-[#333] rounded-sm text-white text-sm">
                  <option value="">Select role</option>
                  {roles.map(r=> <option key={r.id} value={r.title}>{r.title}</option>)}
                </select>
                {errors.role && <div className="text-xs text-red-500">{errors.role}</div>}
              </div>
              <div>
                <label className="text-sm text-[#999]">Tell us about yourself</label>
                <textarea value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} placeholder="Your experience, portfolio link, or anything relevant..." className="w-full mt-1 p-2 bg-[#0d0d18] border border-[#333] rounded-sm text-white text-sm placeholder-[#666]" rows={4} />
              </div>
              <button className="w-full bg-accent text-black px-4 py-2 rounded-sm font-medium hover:bg-opacity-90 transition">Submit application</button>
            </form>
          ) : (
            <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} className="bg-[#1a1a1f] p-6 rounded-md text-center border border-[#2a2a2f]">
              <div className="text-4xl text-accent mb-3">✓</div>
              <div className="text-white font-medium">Thanks — we received your application.</div>
              <div className="text-[#999] text-sm mt-2">We'll be in touch soon!</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsBar from './components/StatsBar'
import ProjectLineup from './components/ProjectLineup'
import Vision from './components/Vision'
import TeamSection from './components/TeamSection'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

function IntroScreen({ fading }) {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black text-white transition-opacity duration-700 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-6">
        <div className="intro-title text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.32em] uppercase text-[#E50914] drop-shadow-[0_0_18px_rgba(229,9,20,0.35)]">
          Falaana and Dhimkana Films
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [introVisible, setIntroVisible] = useState(true)
  const [introFading, setIntroFading] = useState(false)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIntroFading(true)
    }, 900)

    const hideTimer = window.setTimeout(() => {
      setIntroVisible(false)
    }, 1500)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="min-h-screen text-[#E5E5E5] bg-black">
      {introVisible && <IntroScreen fading={introFading} />}
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        {/* <StatsBar /> */}
        <ProjectLineup />
        <Vision />
        <TeamSection />
        <JoinUs />
        {/* <section className="bg-[#090909] border-t border-[#1f1f1f]">
          <div className="max-w-7xl mx-auto px-6 py-16 grid gap-6 md:grid-cols-3">
            <article id="privacy" className="scroll-mt-24 rounded-md border border-[#222] bg-gradient-to-br from-[#1a1a1f] to-[#0f0f15] p-6 hover:border-[#E50914] transition duration-300">
              <h2 className="text-xl font-semibold text-white">Privacy</h2>
              <p className="mt-3 text-sm leading-6 text-[#aaa]">We only collect the information needed to respond to inquiries, manage submissions, and improve the viewing experience. We do not sell personal data, and any form submissions are handled with standard security practices.</p>
            </article>
            <article id="press" className="scroll-mt-24 rounded-md border border-[#222] bg-gradient-to-br from-[#1a1a1f] to-[#0f0f15] p-6 hover:border-[#E50914] transition duration-300">
              <h2 className="text-xl font-semibold text-white">Press</h2>
              <p className="mt-3 text-sm leading-6 text-[#aaa]">For press kits, interviews, or media requests, contact our publicity team through the Join Us section. Approved media assets and project notes can be shared on request for coverage and festival submissions.</p>
            </article>
            <article id="terms" className="scroll-mt-24 rounded-md border border-[#222] bg-gradient-to-br from-[#1a1a1f] to-[#0f0f15] p-6 hover:border-[#E50914] transition duration-300">
              <h2 className="text-xl font-semibold text-white">Terms</h2>
              <p className="mt-3 text-sm leading-6 text-[#aaa]">Content on this site is provided for informational purposes. Project materials, images, and trailers remain the property of Falaana and Dhimkana Films or their respective owners, and may not be reused without permission.</p>
            </article>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Designs from './components/Designs'
import Strengths from './components/Strengths'
import Experience from './components/Experience'
import About from './components/About'
import Guestbook from './components/Guestbook'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [motionReady, setMotionReady] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || reduced) return

    document.documentElement.classList.add('motion-ready')
    setMotionReady(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CustomCursor />
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Designs />
        <Strengths />
        <Experience />
        <About />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

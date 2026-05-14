import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = ['home', 'about', 'skills', 'projects', 'contact']
      let cur = 'Home'
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130)
          cur = id.charAt(0).toUpperCase() + id.slice(1)
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (label, href) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[rgba(8,12,16,0.85)] backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => {
              e.preventDefault()
              handleClick('Home', '#home')
            }}
            className="font-display font-bold text-xl tracking-tight flex-shrink-0"
          >
            <span className="text-white">HS</span>
            <span className="text-[#E8652A]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleClick(link.label, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${active === link.label
                    ? 'text-[#E8652A]'
                    : 'text-[#6B7280] hover:text-[#F0F4F8]'
                    }`}>
                  {link.label}
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[rgba(232,101,42,0.12)] border border-[rgba(232,101,42,0.2)] rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              handleClick('Contact', '#contact')
            }}
            className="hidden md:block px-5 py-2 text-sm font-medium bg-[#E8652A] hover:bg-[#F0874A] text-white rounded-lg transition-all duration-200 flex-shrink-0"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#6B7280] hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-[64px] left-3 right-3 z-40 md:hidden bg-[rgba(13,17,23,0.95)] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
            <ul className="flex flex-col gap-1">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.label, link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active === link.label
                      ? 'text-[#E8652A] bg-[rgba(232,101,42,0.12)]'
                      : 'text-[#6B7280] hover:text-white hover:bg-white/5'
                      }`}>
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 mt-1 border-t border-white/[0.06]">
                <button
                  onClick={() => handleClick('Contact', '#contact')}
                  className="block w-full text-center px-4 py-3 text-sm font-medium bg-[#E8652A] hover:bg-[#F0874A] text-white rounded-xl transition-colors">
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
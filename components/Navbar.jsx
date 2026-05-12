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
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (label, href) => {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('Home', '#home')}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="text-white">HS</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-lg group ${
                    active === link.label ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent-dim rounded-lg border border-accent/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => handleNavClick('Contact', '#contact')}
            className="hidden md:block px-5 py-2 text-sm font-body font-medium bg-accent hover:bg-accent-soft text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-muted hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[65px] left-4 right-4 z-40 glass rounded-2xl border border-white/8 p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.label, link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors ${
                      active === link.label
                        ? 'text-accent bg-accent-dim'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5 mt-1">
                <a
                  href="#contact"
                  onClick={() => { setMenuOpen(false) }}
                  className="block w-full text-center px-4 py-3 text-sm font-body font-medium bg-accent text-white rounded-xl"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

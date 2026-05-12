import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/Honey-10', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/harshitsharma0210', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harshits0210@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display font-bold text-2xl">
              <span className="text-white">HS</span>
              <span className="text-accent">.</span>
            </a>
            <p className="text-muted text-sm font-body mt-1">MERN Stack Developer</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-text font-body transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 glass border border-white/8 rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hr-accent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-subtle">
          <p>© {new Date().getFullYear()} Harshit Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart size={10} className="text-accent fill-accent" />
            {' '}using{' '}
            <span className="text-muted">Next.js</span>
            {' '}&{' '}
            <span className="text-muted">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

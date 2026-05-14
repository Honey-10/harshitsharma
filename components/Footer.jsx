import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const links = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const socials = [
  { icon: Github,   href: 'https://github.com/Honey-10',           label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com/in/harshitsharma0210', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:harshits0210@gmail.com',         label: 'Email'    },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display font-bold text-xl sm:text-2xl">
              <span className="text-white">HS</span>
              <span className="text-[#E8652A]">.</span>
            </a>
            <p className="text-[#6B7280] text-sm mt-1">MERN Stack Developer</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {links.map(link => (
              <a key={link.label} href={link.href}
                className="text-xs sm:text-sm text-[#6B7280] hover:text-[#F0F4F8] transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08]
                  rounded-lg flex items-center justify-center text-[#6B7280]
                  hover:text-[#E8652A] hover:border-[rgba(232,101,42,0.3)] transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(232,101,42,0.4)] to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs font-mono text-[#374151]">
          <p>© {new Date().getFullYear()} Harshit Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={10} className="text-[#E8652A] fill-[#E8652A]" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
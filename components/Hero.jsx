import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download, Eye } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const socials = [
  { icon: Github, href: 'https://github.com/Honey-10', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/harshitsharma0210', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:harshits0210@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Mesh glow 1 */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none blur-[60px] -top-24 -left-32 sm:-left-40 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(232,101,42,0.08) 0%, transparent 70%)' }}
      />

      {/* Mesh glow 2 */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none blur-[80px] bottom-16 -right-20 sm:-right-24 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
      />

      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-[#E8652A] to-transparent origin-left"
      />

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-16">
        <div className="max-w-3xl">

          {/* Available tag */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(232,101,42,0.12)] border border-[rgba(232,101,42,0.2)] text-[#E8652A] text-xs font-mono font-medium mb-6 sm:mb-8 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8652A] animate-pulse" />
              Available for Hire
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-bold leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
          >
            <span className="text-[#F0F4F8]">Hi, I'm </span>
            <br />
            <span className="relative inline-block">
              <span className="text-[#E8652A]">Harshit</span>
              <span className="text-[#F0F4F8]"> Sharma</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full bg-gradient-to-r from-[#E8652A] to-transparent origin-left rounded-full"
              />
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div {...fadeUp(0.35)} className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#E8652A] flex-shrink-0" />
            <p className="font-display text-base sm:text-xl md:text-2xl font-medium text-[#6B7280]">
              MERN Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-[#6B7280] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10"
          >
            Building modern full-stack web applications with MongoDB, Express.js,
            React.js and Node.js. Passionate about clean UI, performant APIs, and
            turning ideas into production-ready products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E8652A] hover:bg-[#F0874A] text-white rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Eye size={16} />
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download="Harshit_Sharma_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/10 hover:border-[rgba(232,101,42,0.3)] text-[#F0F4F8] rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.65)} className="flex items-center flex-wrap gap-2">
            <span className="text-xs text-[#374151] font-mono mr-1 tracking-wider">FIND ME ON</span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08] rounded-xl flex items-center justify-center text-[#6B7280] hover:text-[#E8652A] hover:border-[rgba(232,101,42,0.3)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating stat cards — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 mr-6"
        >
          {[
            { label: 'Projects Shipped', value: '4+' },
            { label: 'Tech Stack', value: 'MERN' },
            { label: 'Status', value: 'Open' },
          ].map(stat => (
            <div
              key={stat.label}
              className="bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08] hover:border-[rgba(232,101,42,0.2)] rounded-2xl p-5 w-40 transition-colors duration-300"
            >
              <p className="font-display font-bold text-2xl text-[#E8652A] mb-1">{stat.value}</p>
              <p className="text-xs text-[#6B7280]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[#374151] tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={14} className="text-[#E8652A]" />
        </motion.div>
      </motion.div>

    </section>
  )
}

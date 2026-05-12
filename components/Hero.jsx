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
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background mesh glows */}
      <div className="mesh-1 top-[-100px] left-[-200px]" />
      <div className="mesh-2 bottom-[100px] right-[-100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 w-24 h-px bg-gradient-to-r from-accent to-transparent origin-left"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tag pill */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20 text-accent text-xs font-mono font-medium mb-8 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-bold leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            <span className="text-text">Hi, I'm </span>
            <br />
            <span className="relative">
              <span className="text-accent">Harshit</span>
              <span className="text-text"> Sharma</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-accent to-transparent origin-left rounded-full"
              />
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div {...fadeUp(0.35)} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <p className="font-display text-xl md:text-2xl font-medium text-muted">
              MERN Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="font-body text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Building modern full-stack web applications with MongoDB, Express.js,
            React.js & Node.js. Passionate about clean UI, performant APIs, and
            turning ideas into production-ready products.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-soft text-white rounded-xl font-body font-medium text-sm transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <Eye size={16} />
              View Projects
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="inline-block"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-7 py-3.5 glass border border-white/10 hover:border-accent/30 text-text rounded-xl font-body font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.65)} className="flex items-center gap-2">
            <span className="text-xs text-subtle font-mono mr-2">FIND ME ON</span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 glass border border-white/8 rounded-xl flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 mr-6"
        >
          {[
            { label: 'Projects Shipped', value: '5+' },
            { label: 'Tech Stack', value: 'MERN' },
            { label: 'Status', value: 'Open' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass border border-white/8 rounded-2xl p-5 w-40 hover:border-accent/20 transition-colors duration-300"
            >
              <p className="font-display font-bold text-2xl text-accent mb-1">{stat.value}</p>
              <p className="text-xs text-muted font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-subtle tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

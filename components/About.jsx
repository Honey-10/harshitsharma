import { motion } from 'framer-motion'
import { Code2, Layers, Zap, Globe } from 'lucide-react'
import SectionHeading from './SectionHeading'

const traits = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code with modern best practices.',
  },
  {
    icon: Layers,
    title: 'Full-Stack',
    desc: 'End-to-end development from database design to pixel-perfect UIs.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Optimised builds, fast APIs, and responsive experiences on all devices.',
  },
  {
    icon: Globe,
    title: 'Real-World Apps',
    desc: 'Building production-deployed projects that solve actual problems.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle left glow */}
      <div className="mesh-2 top-0 left-[-200px] opacity-60" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <SectionHeading
              label="About Me"
              title={<>Building with<br /><span className="text-accent">purpose</span></>}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 mb-8"
            >
              <p className="text-muted font-body text-base leading-relaxed">
                I'm <span className="text-text font-medium">Harshit Sharma</span>, a MERN Stack Developer
                with hands-on experience in building responsive, production-ready web applications
                using <span className="text-accent">MongoDB, Express.js, React.js,</span> and{' '}
                <span className="text-accent">Node.js.</span>
              </p>
              <p className="text-muted font-body text-base leading-relaxed">
                I'm passionate about modern UI engineering, crafting fast and intuitive frontend
                experiences, and designing robust REST APIs. Every project I ship is built with
                attention to detail, clean architecture, and a focus on real-world usability.
              </p>
              <p className="text-muted font-body text-base leading-relaxed">
                Currently seeking opportunities where I can contribute meaningfully, grow as an
                engineer, and ship impactful products alongside driven teams.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-8"
            >
              {[
                { val: '5+', label: 'Projects Shipped' },
                { val: '4', label: 'Core Technologies' },
                { val: '100%', label: 'Passion Driven' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-3xl text-accent">{s.val}</p>
                  <p className="text-xs text-muted mt-1 font-mono tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass border border-white/8 hover:border-accent/25 rounded-2xl p-6 group cursor-default transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-dim border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <t.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-text text-base mb-2">{t.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
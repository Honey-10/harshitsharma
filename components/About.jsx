import { motion } from 'framer-motion'
import { Code2, Layers, Zap, Globe } from 'lucide-react'
import SectionHeading from './SectionHeading'

const traits = [
  { icon: Code2,  title: 'Clean Code',       desc: 'Writing maintainable, scalable code with modern best practices.'          },
  { icon: Layers, title: 'Full-Stack',        desc: 'End-to-end development from database design to pixel-perfect UIs.'        },
  { icon: Zap,    title: 'Performance First', desc: 'Optimised builds, fast APIs, and responsive experiences on all devices.'  },
  { icon: Globe,  title: 'Real-World Apps',   desc: 'Building production-deployed projects that solve actual problems.'        },
]

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden">
      <div aria-hidden="true"
        className="absolute rounded-full pointer-events-none blur-[80px]
          w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]
          top-0 -left-32 opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="About Me"
              title={<>Building with<br /><span className="text-[#E8652A]">purpose</span></>}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 mb-8"
            >
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                I'm <span className="text-[#F0F4F8] font-medium">Harshit Sharma</span>, a MERN Stack
                Developer with hands-on experience building responsive, production-ready web applications
                using <span className="text-[#E8652A]">MongoDB, Express.js, React.js,</span> and{' '}
                <span className="text-[#E8652A]">Node.js.</span>
              </p>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                Passionate about modern UI engineering, crafting fast and intuitive frontend
                experiences, and designing robust REST APIs. Every project I ship is built with
                attention to detail, clean architecture, and a focus on real-world usability.
              </p>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                Currently seeking opportunities where I can contribute meaningfully, grow as an
                engineer, and ship impactful products alongside driven teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-6 sm:gap-8"
            >
              {[
                { val: '4+',  label: 'Projects Shipped'    },
                { val: '4',    label: 'Core Technologies' },
                { val: '100%', label: 'Passion Driven'    },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-[#E8652A]">{s.val}</p>
                  <p className="text-xs text-[#6B7280] mt-1 font-mono tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-[rgba(13,17,23,0.7)] backdrop-blur-xl
                  border border-white/[0.08] hover:border-[rgba(232,101,42,0.25)]
                  rounded-2xl p-5 sm:p-6 group cursor-default transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(232,101,42,0.12)]
                  border border-[rgba(232,101,42,0.2)] flex items-center justify-center mb-4
                  group-hover:bg-[rgba(232,101,42,0.2)] transition-colors">
                  <t.icon size={18} className="text-[#E8652A]" />
                </div>
                <h3 className="font-display font-semibold text-[#F0F4F8] text-base mb-2">{t.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
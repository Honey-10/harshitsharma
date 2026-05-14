import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skills = [
  { name: 'React.js',    level: 88, icon: '⚛', color: '#61DAFB', category: 'Frontend',  desc: 'Component architecture, hooks, context, performance optimisation' },
  { name: 'Next.js',     level: 82, icon: '▲', color: '#E8652A', category: 'Framework',  desc: 'SSR, SSG, App Router, API routes, Vercel deployment'              },
  { name: 'Node.js',     level: 80, icon: '◉', color: '#68A063', category: 'Backend',    desc: 'REST APIs, middleware, authentication, async patterns'            },
  { name: 'Express.js',  level: 78, icon: '≡', color: '#8BC8A3', category: 'Backend',    desc: 'Routing, MVC pattern, error handling, JWT auth'                  },
  { name: 'MongoDB',     level: 75, icon: '🍃', color: '#47A248', category: 'Database',   desc: 'Schema design, aggregation, Mongoose ODM, Atlas'                 },
  { name: 'JavaScript',  level: 90, icon: 'JS', color: '#F7DF1E', category: 'Language',   desc: 'ES6+, async/await, closures, DOM APIs, modern patterns'          },
  { name: 'Tailwind CSS',level: 92, icon: '✦', color: '#06B6D4', category: 'Styling',    desc: 'Utility-first CSS, responsive design, custom config'             },
  { name: 'Git / GitHub',level: 80, icon: '⎇', color: '#F05032', category: 'DevOps',     desc: 'Version control, branching, PRs, collaboration workflows'        },
]

const categoryColors = {
  Frontend:  'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Framework: 'text-[#E8652A] bg-[rgba(232,101,42,0.12)] border-[rgba(232,101,42,0.2)]',
  Backend:   'text-green-400 bg-green-400/10 border-green-400/20',
  Database:  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Language:  'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Styling:   'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  DevOps:    'text-red-400 bg-red-400/10 border-red-400/20',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-28 overflow-hidden">
      <div aria-hidden="true"
        className="absolute rounded-full pointer-events-none blur-[60px] opacity-50
          w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]
          top-1/2 -translate-y-1/2 -right-24 sm:-right-40"
        style={{ background: 'radial-gradient(circle, rgba(232,101,42,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Tech Stack"
          title={<>Skills & <span className="text-[#E8652A]">Technologies</span></>}
          subtitle="The tools I reach for to bring ideas to life — from database to deployment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative bg-[rgba(13,17,23,0.7)] backdrop-blur-xl
                border border-white/[0.08] hover:border-white/15
                rounded-2xl p-4 sm:p-5 group cursor-default overflow-hidden
                transition-colors duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${skill.color}08 0%, transparent 60%)` }}
              />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-mono font-bold mb-4 relative"
                style={{ background: `${skill.color}15`, color: skill.color, border: `1px solid ${skill.color}30` }}>
                {skill.icon}
              </div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-[#F0F4F8] text-sm sm:text-base leading-tight">
                  {skill.name}
                </h3>
                <span className={`shrink-0 text-[9px] sm:text-[10px] font-mono font-medium px-1.5 sm:px-2 py-0.5 rounded-full border ${categoryColors[skill.category]}`}>
                  {skill.category}
                </span>
              </div>
              <p className="text-[#6B7280] text-xs leading-relaxed mb-4">{skill.desc}</p>
              <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                />
              </div>
              <p className="text-right text-[10px] font-mono mt-1" style={{ color: skill.color }}>
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
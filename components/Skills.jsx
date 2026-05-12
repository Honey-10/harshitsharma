import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skills = [
  {
    name: 'React.js',
    level: 88,
    category: 'Frontend',
    color: '#61DAFB',
    icon: '⚛',
    desc: 'Component architecture, hooks, context, performance optimisation',
  },
  {
    name: 'Next.js',
    level: 82,
    category: 'Framework',
    color: '#E8652A',
    icon: '▲',
    desc: 'SSR, SSG, App Router, API routes, Vercel deployment',
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'Backend',
    color: '#68A063',
    icon: '◉',
    desc: 'REST APIs, middleware, authentication, async patterns',
  },
  {
    name: 'Express.js',
    level: 78,
    category: 'Backend',
    color: '#8BC8A3',
    icon: '≡',
    desc: 'Routing, MVC pattern, error handling, JWT auth',
  },
  {
    name: 'MongoDB',
    level: 75,
    category: 'Database',
    color: '#47A248',
    icon: '🍃',
    desc: 'Schema design, aggregation, Mongoose ODM, Atlas',
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Language',
    color: '#F7DF1E',
    icon: 'JS',
    desc: 'ES6+, async/await, closures, DOM APIs, modern patterns',
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    category: 'Styling',
    color: '#06B6D4',
    icon: '✦',
    desc: 'Utility-first CSS, responsive design, custom config',
  },
  {
    name: 'Git / GitHub',
    level: 80,
    category: 'DevOps',
    color: '#F05032',
    icon: '⎇',
    desc: 'Version control, branching, PRs, collaboration workflows',
  },
]

const categoryColors = {
  Frontend: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Framework: 'text-accent bg-accent-dim border-accent/20',
  Backend: 'text-green-400 bg-green-400/10 border-green-400/20',
  Database: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Language: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Styling: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  DevOps: 'text-red-400 bg-red-400/10 border-red-400/20',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mesh-1 top-1/2 right-[-300px] -translate-y-1/2 opacity-50" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Tech Stack"
          title={<>Skills & <span className="text-accent">Technologies</span></>}
          subtitle="The tools I reach for to bring ideas to life — from database to deployment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass border border-white/8 hover:border-white/15 rounded-2xl p-5 group cursor-default relative overflow-hidden transition-colors duration-300"
            >
              {/* Glow accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${skill.color}08 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-mono font-bold mb-4 relative"
                style={{ background: `${skill.color}15`, color: skill.color, border: `1px solid ${skill.color}30` }}
              >
                {skill.icon}
              </div>

              {/* Name + category */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-display font-semibold text-text text-base leading-tight">{skill.name}</h3>
                <span className={`shrink-0 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${categoryColors[skill.category]}`}>
                  {skill.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted text-xs font-body leading-relaxed mb-4">{skill.desc}</p>

              {/* Progress bar */}
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

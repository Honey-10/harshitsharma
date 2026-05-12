import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    id: 1,
    title: 'NKTV News',
    tagline: 'Full-Stack MERN News Platform',
    description:
      'A full-stack MERN news web application with responsive UI, dynamic news categories, real-time API integration, and a modern frontend design. Features include category-based filtering, search functionality, and a clean reading experience.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
    liveUrl: 'https://nktv-news.vercel.app/',
    githubUrl: null,
    status: 'live',
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
    accentColor: '#E8652A',
    placeholder: false,
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Alpha',
    tagline: 'Coming Soon',
    description:
      'The next project is currently in development. Expect a full-stack application with modern architecture, clean UI, and real-world utility. Stay tuned.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    liveUrl: null,
    githubUrl: null,
    status: 'upcoming',
    gradient: 'from-blue-500/15 via-indigo-500/10 to-transparent',
    accentColor: '#6366F1',
    placeholder: true,
    year: '2026',
    featured: false,
  },
  {
    id: 3,
    title: 'Project Beta',
    tagline: 'In Planning',
    description:
      'Another exciting project is being planned — focused on performance, developer experience, and elegant user interfaces. Details will be revealed soon.',
    tech: ['Next.js', 'Tailwind CSS', 'API'],
    liveUrl: null,
    githubUrl: null,
    status: 'upcoming',
    gradient: 'from-emerald-500/15 via-teal-500/10 to-transparent',
    accentColor: '#10B981',
    placeholder: true,
    year: '2026',
    featured: false,
  },
]

function ProjectCard({ project, i }) {
  const isPlaceholder = project.placeholder

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`glass border rounded-2xl overflow-hidden group relative transition-colors duration-300 flex flex-col ${
        project.featured
          ? 'border-accent/20 hover:border-accent/40'
          : 'border-white/8 hover:border-white/15'
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[10px] font-mono font-bold tracking-wider">
            FEATURED
          </span>
        </div>
      )}

      {/* Image placeholder / hero area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaceholder ? (
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 rounded-2xl border-2 border-dashed flex items-center justify-center"
                style={{ borderColor: `${project.accentColor}40` }}
              >
                <Lock size={22} style={{ color: project.accentColor }} className="opacity-60" />
              </div>
              <span className="text-xs font-mono" style={{ color: project.accentColor }}>
                {project.year}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-display font-bold"
                style={{
                  background: `${project.accentColor}20`,
                  border: `1px solid ${project.accentColor}40`,
                  color: project.accentColor,
                }}
              >
                N
              </div>
              <div className="text-center">
                <p className="text-xs font-mono font-medium" style={{ color: project.accentColor }}>
                  NKTV News
                </p>
                <p className="text-[10px] text-muted/60 mt-0.5">nktv-news.vercel.app</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-1">
            <h3 className="font-display font-bold text-text text-xl mb-0.5">{project.title}</h3>
            <p className="text-xs font-mono" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
          </div>
          <span
            className={`shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full border mt-1 ${
              project.status === 'live'
                ? 'text-green-400 bg-green-400/10 border-green-400/20'
                : 'text-muted bg-muted/10 border-muted/20'
            }`}
          >
            {project.status === 'live' ? '● LIVE' : '○ SOON'}
          </span>
        </div>

        <p className="text-muted text-sm font-body leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 border border-white/8 text-muted hover:text-text transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-body font-medium text-white transition-all duration-200 hover:shadow-lg hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`,
                boxShadow: `0 4px 20px ${project.accentColor}25`,
              }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-body font-medium text-subtle bg-white/5 border border-white/5 cursor-not-allowed"
            >
              <Lock size={15} />
              Coming Soon
            </button>
          )}
          <a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-medium glass border transition-all duration-200 ${
              project.githubUrl
                ? 'border-white/15 text-muted hover:text-white hover:border-white/25'
                : 'border-white/5 text-subtle cursor-not-allowed'
            }`}
          >
            <Github size={15} />
            {project.githubUrl ? 'Code' : 'Private'}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mesh-1 bottom-0 left-1/2 -translate-x-1/2 opacity-40" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Work"
          title={<>Featured <span className="text-accent">Projects</span></>}
          subtitle="Real-world applications built with the MERN stack and modern tooling."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted text-sm font-body mt-10"
        >
          More projects coming soon —{' '}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            follow on GitHub
          </a>{' '}
          for updates.
        </motion.p>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'

const contactLinks = [
  {
    icon: Mail,
    label: 'Send an Email',
    desc: 'harshits0210@gmail.com',
    href: 'mailto:harshits0210@gmail.com',
    color: '#E8652A',
    cta: 'Email Me',
  },
  {
    icon: Linkedin,
    label: 'Connect on LinkedIn',
    desc: 'linkedin.com/in/harshitsharma',
    href: 'https://linkedin.com/in/harshitsharma0210',
    color: '#0A66C2',
    cta: 'Connect',
  },
  {
    icon: Github,
    label: 'Follow on GitHub',
    desc: 'github.com/Honey-10',
    href: 'https://github.com/Honey-10',
    color: '#6E77D0',
    cta: 'Follow',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="mesh-1 top-1/2 right-[-200px] -translate-y-1/2 opacity-50" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title={<>Let's <span className="text-accent">work together</span></>}
          subtitle="I'm open to full-time roles, freelance projects, and interesting collaborations. Drop a message — I respond fast."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass border border-white/8 rounded-2xl p-7 mb-6"
            >
              <h3 className="font-display font-semibold text-text text-lg mb-5">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <div className="w-8 h-8 rounded-lg bg-accent-dim border border-accent/20 flex items-center justify-center">
                    <MapPin size={14} className="text-accent" />
                  </div>
                  <span className="font-body">India — Open to Remote & Hybrid roles</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <div className="w-8 h-8 rounded-lg bg-accent-dim border border-accent/20 flex items-center justify-center">
                    <Clock size={14} className="text-accent" />
                  </div>
                  <span className="font-body">Response time: within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <span className="font-body">Currently <span className="text-green-400 font-medium">available</span> for new opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* What I'm looking for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass border border-white/8 rounded-2xl p-7"
            >
              <h3 className="font-display font-semibold text-text text-lg mb-4">What I'm looking for</h3>
              <ul className="space-y-2.5">
                {[
                  'Full-time Frontend / Full-Stack Developer roles',
                  'MERN stack or React-based projects',
                  'Remote-friendly teams and modern tech stacks',
                  'Collaborative environments with growth scope',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted font-body">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="glass border border-white/8 hover:border-white/20 rounded-2xl p-6 flex items-center gap-5 group transition-colors duration-300 cursor-pointer"
                style={{ '--hover-color': link.color }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}30`,
                  }}
                >
                  <link.icon size={22} style={{ color: link.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-text text-base mb-0.5 group-hover:text-white transition-colors">
                    {link.label}
                  </p>
                  <p className="text-muted text-sm font-mono truncate">{link.desc}</p>
                </div>

                {/* CTA arrow */}
                <div
                  className="shrink-0 flex items-center gap-2 text-sm font-body font-medium px-4 py-2 rounded-xl transition-all duration-200"
                  style={{
                    background: `${link.color}15`,
                    color: link.color,
                    border: `1px solid ${link.color}25`,
                  }}
                >
                  <Send size={13} />
                  {link.cta}
                </div>
              </motion.a>
            ))}

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center pt-4"
            >
              <p className="text-muted text-sm font-body">
                Prefer a formal approach?{' '}
                <a
                  href="mailto:harshits0210@gmail.com"
                  className="text-accent hover:underline font-medium"
                >
                  Send me your JD via email
                </a>{' '}
                and I'll get back to you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

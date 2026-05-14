import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'

const contactLinks = [
  { icon: Mail,     label: 'Send an Email',      desc: 'harshits0210@gmail.com',        href: 'mailto:harshits0210@gmail.com',         color: '#E8652A', cta: 'Email'   },
  { icon: Linkedin, label: 'Connect on LinkedIn', desc: 'linkedin.com/in/harshitsharma0210', href: 'https://linkedin.com/in/harshitsharma0210', color: '#0A66C2', cta: 'Connect' },
  { icon: Github,   label: 'Follow on GitHub',    desc: 'github.com/Honey-10',           href: 'https://github.com/Honey-10',           color: '#6E77D0', cta: 'Follow'  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-28 overflow-hidden">
      <div aria-hidden="true"
        className="absolute rounded-full pointer-events-none blur-[60px] opacity-50
          w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px]
          top-1/2 -translate-y-1/2 -right-20 sm:-right-32"
        style={{ background: 'radial-gradient(circle, rgba(232,101,42,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title={<>Let's <span className="text-[#E8652A]">work together</span></>}
          subtitle="I'm open to full-time roles, freelance projects, and interesting collaborations. Drop a message — I respond fast."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 sm:p-7 mb-4"
            >
              <h3 className="font-display font-semibold text-[#F0F4F8] text-base sm:text-lg mb-4 sm:mb-5">Quick Info</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: MapPin, text: 'India — Open to Remote & Hybrid roles' },
                  { icon: Clock,  text: 'Response time: within 24 hours'        },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(232,101,42,0.12)] border border-[rgba(232,101,42,0.2)] flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#E8652A]" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <span>Currently <span className="text-green-400 font-medium">available</span> for new opportunities</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 sm:p-7"
            >
              <h3 className="font-display font-semibold text-[#F0F4F8] text-base sm:text-lg mb-3 sm:mb-4">What I'm looking for</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  'Full-time Frontend / Full-Stack Developer roles',
                  'MERN stack or React-based projects',
                  'Remote-friendly teams and modern tech stacks',
                  'Collaborative environments with growth scope',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B7280]">
                    <span className="text-[#E8652A] mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="bg-[rgba(13,17,23,0.7)] backdrop-blur-xl border border-white/[0.08]
                    hover:border-white/20 rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5
                    group transition-colors duration-300"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}30` }}>
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-[#F0F4F8] text-sm sm:text-base mb-0.5 group-hover:text-white transition-colors truncate">
                      {link.label}
                    </p>
                    <p className="text-[#6B7280] text-xs font-mono truncate">{link.desc}</p>
                  </div>
                  {/* CTA — full button on sm+, just icon on mobile */}
                  <div className="hidden sm:flex flex-shrink-0 items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-2 rounded-xl"
                    style={{ background: `${link.color}15`, color: link.color, border: `1px solid ${link.color}25` }}>
                    <Send size={12} />
                    {link.cta}
                  </div>
                  <Send size={15} className="sm:hidden flex-shrink-0 text-[#6B7280] group-hover:text-[#E8652A] transition-colors" />
                </motion.a>
              )
            })}

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-center pt-3 sm:pt-4">
              <p className="text-[#6B7280] text-xs sm:text-sm">
                Prefer a formal approach?{' '}
                <a href="mailto:harshits0210@gmail.com" className="text-[#E8652A] hover:underline font-medium">
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
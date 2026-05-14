import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 sm:mb-16 ${center ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, x: center ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#E8652A] tracking-widest uppercase mb-3 sm:mb-4"
      >
        <span className="w-4 h-px bg-[#E8652A]" />
        {label}
        <span className="w-4 h-px bg-[#E8652A]" />
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-bold text-[#F0F4F8] leading-tight mb-3 sm:mb-4"
        style={{ fontSize: 'clamp(1.7rem, 5vw, 3.2rem)' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#6B7280] text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
          style={{ marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
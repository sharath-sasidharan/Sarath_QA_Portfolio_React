import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'Brought structure to our regression suite and cut execution time significantly. The automation framework is maintainable and well-documented.',
    author: 'Engineering Lead',
    role: 'Product company',
  },
  {
    quote: 'Strong in both manual and automation testing. Quick to ramp on complex domains and proactive in identifying edge cases before release.',
    author: 'Product Owner',
    role: 'Fintech',
  },
  {
    quote: 'Collaborative and detail-oriented. The API and performance testing work improved our release confidence and reduced production incidents.',
    author: 'DevOps / QA peer',
    role: 'Cross-functional team',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3"
        >
          What Others Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.author + i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
              className="rounded-xl p-6 lg:p-7 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
            >
              <p className="text-gray-200 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite className="not-italic text-white font-semibold text-sm">{t.author}</cite>
                <span className="text-gray-400 text-sm"> — {t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

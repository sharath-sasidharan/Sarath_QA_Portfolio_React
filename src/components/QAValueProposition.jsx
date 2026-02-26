import { motion } from 'framer-motion'

const PILLARS = [
  { title: 'Automation-first mindset', desc: 'Design tests for maintainability and scale; reduce manual regression and speed up release cycles.' },
  { title: 'Risk-based testing', desc: 'Prioritize coverage by business impact and failure probability to maximize ROI of test effort.' },
  { title: 'CI/CD integration', desc: 'Gate builds on automated suites; fail fast and surface results in Allure, Jenkins, or GitHub Actions.' },
  { title: 'API-first validation', desc: 'Validate contracts and data before UI; shift-left with Postman, Newman, and schema checks.' },
  { title: 'GenAI-powered test design', desc: 'Use AI for test case generation, RAG-based requirement coverage, and flaky-test analysis.' },
  { title: 'Shift-left testing strategy', desc: 'Catch defects at requirements and API stage; fewer escapes and lower cost of fix.' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function QAValueProposition() {
  return (
    <section
      id="value-proposition"
      className="py-24 px-8"
      aria-labelledby="value-proposition-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="value-proposition-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          What I Bring as a QA Engineer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={itemVariants}
              className="rounded-xl p-6 lg:p-7 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
            >
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

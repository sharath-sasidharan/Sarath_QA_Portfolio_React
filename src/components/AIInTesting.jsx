import { motion } from 'framer-motion'

const ITEMS = [
  { title: 'AI-based test case generation', desc: 'Structured test cases and automation-ready scripts from requirements using LLMs and strict JSON schema.' },
  { title: 'Prompt engineering for test design', desc: 'Craft prompts for positive, negative, and edge-case coverage; validate outputs for consistency.' },
  { title: 'Synthetic test data generation', desc: 'Generate realistic, anonymized data for API and UI tests to improve coverage and reduce dependency on prod-like data.' },
  { title: 'Flaky test detection strategies', desc: 'Identify and quarantine flaky tests; use retries, tags, and CI analytics to keep suites reliable.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AIInTesting() {
  return (
    <section
      id="ai-in-testing"
      className="py-24 px-8"
      aria-labelledby="ai-in-testing-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="ai-in-testing-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3"
        >
          AI in Testing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
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

import { motion } from 'framer-motion'

const points = [
  'Page Object Model (POM) for maintainability and scalability',
  'Parallel execution for faster feedback',
  'Structured reporting (Allure / custom) for traceability',
]

export default function AutomationFramework() {
  return (
    <section id="framework" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-bold text-gray-900 mb-6"
        >
          Automation Framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          Framework built for reliability and scale: clear separation of pages and flows, parallel
          runs for speed, and detailed reporting for release confidence.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2 text-gray-600 mb-8"
        >
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-accent">•</span>
              {point}
            </li>
          ))}
        </motion.ul>
        <motion.a
          href="https://github.com/sharath-sasidharan"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
        >
          View on GitHub
          <span aria-hidden>→</span>
        </motion.a>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const STEPS = [
  'Requirement analysis',
  'Risk analysis',
  'Test design',
  'Automation strategy',
  'CI/CD integration',
  'Reporting',
  'Monitoring',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  }),
}

const stepVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

export default function TestingApproach() {
  return (
    <section
      id="testing-approach"
      className="py-24 px-8"
      aria-labelledby="testing-approach-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="testing-approach-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          Testing Approach
          <motion.span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-accent block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ originX: 0 }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base max-w-2xl mb-8 leading-relaxed"
        >
          Step-by-step methodology from requirements to monitoring.
        </motion.p>
        <motion.ol
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={containerVariants}
          aria-label="Testing methodology steps"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              variants={stepVariants}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 text-gray-200 text-sm font-medium"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              {i < STEPS.length - 1 ? (
                <>
                  {step}
                  <span className="hidden sm:inline text-gray-500 ml-1" aria-hidden>→</span>
                </>
              ) : (
                step
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

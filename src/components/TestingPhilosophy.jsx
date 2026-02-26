import { motion } from 'framer-motion'

const philosophy = `Quality is built early. I focus on shift-left testing—catching issues at requirements and API level before they reach the UI. Automation is about confidence: reliable suites that tell you whether a build is safe to ship, not just scripts that run. Clear reporting, traceability, and collaboration with dev and product make releases predictable and defects rare.`

export default function TestingPhilosophy() {
  return (
    <section id="philosophy" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3"
        >
          Testing philosophy
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="text-gray-400 leading-relaxed pl-4 border-l-2 border-accent/50"
        >
          {philosophy}
        </motion.blockquote>
      </div>
    </section>
  )
}

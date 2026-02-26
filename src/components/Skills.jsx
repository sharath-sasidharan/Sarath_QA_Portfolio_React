import { motion } from 'framer-motion'

const skills = [
  {
    title: 'Testing',
    items: ['Functional', 'Regression', 'UAT', 'Defect Management'],
  },
  {
    title: 'Automation',
    items: ['Playwright', 'JavaScript/TypeScript', 'POM Framework'],
  },
  {
    title: 'API & Tools',
    items: ['Postman', 'REST APIs', 'Git', 'CI/CD'],
  },
  {
    title: 'AI Testing',
    items: ['LLM validation', 'Prompt Testing', 'Precision/Recall', 'RAG testing'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-bold text-gray-900 mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="rounded-xl p-6 bg-white/70 backdrop-blur-md border border-white/80 shadow-lg shadow-gray-200/50"
            >
              <h3 className="text-lg font-semibold text-accent mb-3">{category.title}</h3>
              <ul className="space-y-1.5 text-gray-600">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

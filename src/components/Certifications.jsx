import { motion } from 'framer-motion'
import { useState } from 'react'

// Official ISTQB logo from istqb.org (used for display in portfolio)
const ISTQB_LOGO_URL = 'https://www.istqb.org/wp-content/uploads/2024/10/istqb-logo.png'

const certificates = [
  {
    id: 'ctfl',
    name: 'ISTQB® Certified Tester, Foundation Level (v4.0)',
    shortName: 'CTFL',
    datePassed: '01/02/2026',
    image: '/certificates/istqb-ctfl.png',
    knowledge: [
      'The Fundamentals of Testing',
      'Testing throughout the Software Development Lifecycle',
      'Static Testing',
      'Test Analysis and Design',
      'Managing the Test Activities',
      'Test Tools',
    ],
  },
  {
    id: 'ct-genai',
    name: 'ISTQB® Certified Tester, Testing with Generative AI (v1.0)',
    shortName: 'CT-GenAI',
    datePassed: '23/02/2026',
    image: '/certificates/istqb-ct-genai.png',
    knowledge: [
      'Fundamental concepts, capabilities, and limitations of generative AI',
      'Prompting large language models for software testing',
      'Risks and mitigations of using GenAI for testing',
      'Applications of GenAI solutions for software testing',
      'Contributing to GenAI strategy and roadmap for testing',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (id) => () => setImageErrors((prev) => ({ ...prev, [id]: true }))

  return (
    <section id="certifications" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          Certifications
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

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
          <a
            href="https://www.istqb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg transition-transform duration-200 hover:scale-105"
            aria-label="ISTQB official website"
          >
            <img
              src={ISTQB_LOGO_URL}
              alt="ISTQB - International Software Testing Qualifications Board"
              className="h-14 w-auto object-contain"
            />
          </a>
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            ISTQB — International Software Testing Qualifications Board
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              custom={i}
              whileHover={{ borderColor: 'rgba(148, 163, 184, 0.4)', transition: { duration: 0.2 } }}
              className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 transition-shadow duration-200 hover:shadow-lg hover:shadow-slate-900/30 flex flex-col"
            >
              <button
                type="button"
                onClick={() => !imageErrors[cert.id] && setLightbox(cert)}
                className="relative block w-full aspect-[4/3] bg-slate-800 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-inset"
                aria-label={`View ${cert.shortName} certificate`}
              >
                {!imageErrors[cert.id] ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                    onError={handleImageError(cert.id)}
                  />
                ) : null}
                <div className={`absolute inset-0 flex items-center justify-center p-4 ${imageErrors[cert.id] ? 'bg-slate-800/95' : 'bg-slate-800/0 pointer-events-none'} transition-colors duration-200`}>
                  {imageErrors[cert.id] ? (
                    <span className="text-gray-400 text-sm text-center">
                      Add <code className="bg-slate-700 px-1.5 py-0.5 rounded text-gray-300">{cert.id === 'ctfl' ? 'istqb-ctfl.png' : 'istqb-ct-genai.png'}</code> to <code className="bg-slate-700 px-1.5 py-0.5 rounded text-gray-300">public/certificates/</code>
                    </span>
                  ) : null}
                </div>
              </button>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-xs mb-3">
                  Passed {cert.datePassed}
                </p>
                <details className="group flex-1">
                  <summary className="text-gray-400 text-xs cursor-pointer hover:text-gray-300 list-none flex items-center gap-1">
                    <span className="group-open:rotate-90 transition-transform">▶</span>
                    Knowledge acquired
                  </summary>
                  <ul className="mt-2 space-y-2 text-gray-400 text-xs leading-relaxed pl-4">
                    {cert.knowledge.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </details>
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-accent text-xs hover:underline"
                >
                  Open full certificate →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {lightbox && (
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close certificate view"
          >
            <img
              src={lightbox.image}
              alt={lightbox.name}
              className="max-w-full max-h-full object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </button>
        )}
      </div>
    </section>
  )
}

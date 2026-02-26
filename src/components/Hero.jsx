import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const PlaywrightLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 inline-block align-middle" aria-hidden>
    <path fill="#2DAD68" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5-8.5-3.806-8.5-8.5 3.806-8.5 8.5-8.5zM9.5 8.2v7.6l5.5-3.8-5.5-3.8z" clipRule="evenodd" />
  </svg>
)
const PostmanLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 inline-block align-middle" aria-hidden>
    <path fill="#FF6C37" d="M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zM10.8 7.2v9.6h2.4V12l3.6 4.8 2.4-1.8L13.2 12l3.6-4.8-2.4-1.8-3.6 4.8V7.2h-2.4z" />
  </svg>
)
const K6Logo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 inline-block align-middle" aria-hidden>
    <path fill="#7D64FF" fillRule="evenodd" d="M12 0L0 6v12l12 6 12-6V6L12 0zm0 3.6l7.2 3.6v7.2L12 18l-7.2-3.6V7.2L12 3.6z" clipRule="evenodd" />
  </svg>
)
const RobotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 inline-block align-middle text-gray-400" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M8 4h8M6 8h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2z" />
    <path d="M9 14h.01M15 14h.01M10 18h4" />
  </svg>
)

// Use your logo images from public/ (typewriter-*.png); fallback to SVG if missing
const typewriterIcons = [
  { type: 'img', src: '/typewriter-postman.png', alt: 'Postman', Fallback: PostmanLogo },
  { type: 'img', src: '/typewriter-k6.png', alt: 'k6', Fallback: K6Logo },
  { type: 'img', src: '/typewriter-playwright.png', alt: 'Playwright', Fallback: PlaywrightLogo },
  { type: 'svg', Component: RobotIcon },
]

const PHRASE_ICONS = [PostmanLogo, K6Logo, PlaywrightLogo, RobotIcon]

const ROTATING_PHRASES = [
  'API Testing',
  'Performance Testing',
  'Playwright Automation',
  'AI-Augmented QA',
]

const VALUE_PROP = [
  { label: 'Automation', metric: '~40% faster regression' },
  { label: 'API validation', metric: 'Shift-left contract checks' },
  { label: 'CI/CD', metric: 'Build-gated test runs' },
  { label: 'Performance', metric: 'Load & throughput analysis' },
  { label: 'GenAI testing', metric: 'RAG-driven test design' },
]

const TYPING_MS = 100
const DELETING_MS = 65
const PAUSE_BEFORE_DELETE_MS = 1200

function TypewriterImageIcon({ src, alt, className, Fallback }) {
  const [errored, setErrored] = useState(false)
  if (errored) return <Fallback />
  return (
    <img
      src={src}
      alt=""
      className={className}
      aria-hidden
      onError={() => setErrored(true)}
    />
  )
}

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = ROTATING_PHRASES[phraseIndex]
    if (!isDeleting) {
      if (displayText.length < phrase.length) {
        const t = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length + 1)), TYPING_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE_MS)
      return () => clearTimeout(t)
    }
    if (displayText.length > 0) {
      const t = setTimeout(() => setDisplayText(phrase.slice(0, displayText.length - 1)), DELETING_MS)
      return () => clearTimeout(t)
    }
    setIsDeleting(false)
    setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length)
    return undefined
  }, [phraseIndex, displayText, isDeleting])

  return (
    <section
      className="min-h-[55vh] flex flex-col justify-center px-8 pt-28 pb-24 max-w-7xl mx-auto"
      aria-label="Introduction"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          QA Engineer Who Ships Confidence
        </h1>
        <div
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-medium min-h-[1.5em] flex items-center flex-wrap gap-2"
          aria-live="polite"
          aria-label={`Specializing in ${ROTATING_PHRASES.join(', ')}`}
        >
          {(() => {
            const item = typewriterIcons[phraseIndex]
            const iconClass = 'w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 inline-block align-middle'
            if (item.type === 'img') {
              return (
                <TypewriterImageIcon
                  src={item.src}
                  alt={item.alt}
                  className={iconClass}
                  Fallback={item.Fallback}
                />
              )
            }
            const Icon = item.Component
            return <Icon />
          })()}
          <span>{displayText}</span>
          <span
            className="inline-block w-0.5 h-[0.9em] ml-0.5 bg-slate-500 align-middle opacity-70 flex-shrink-0"
            aria-hidden
          />
        </div>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          I build automation frameworks and API-first validation that cut regression time, catch defects earlier, and give teams clear pass/fail signals—so releases ship on time with fewer production issues.
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-relaxed" role="list" aria-label="Value proposition">
          {VALUE_PROP.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-2 text-gray-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
              <span><strong className="text-white font-medium">{item.label}</strong> — {item.metric}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="/Sarath_Sasidharan_QA_Engineer_Resume.pdf"
            download="Sarath_Sasidharan_QA_Engineer_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-slate-900 font-semibold hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/sharath-sasidharan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-gray-200 font-medium hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Open GitHub profile in new tab"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sarath-sasidharan-74b30b136/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-600 text-gray-200 font-medium hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Open LinkedIn profile in new tab"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400 text-sm pt-2">
          ISTQB CTFL · ISTQB CT-GenAI · 4+ years in AML & Fintech
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 mt-6">
          <span className="text-gray-400 text-xs font-medium">Repository:</span>
          <a
            href="https://github.com/sharath-sasidharan/playwright-automationexercise-pom/actions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 bg-slate-800 border border-slate-600 text-gray-200 text-xs hover:border-accent/50 transition-colors"
            aria-label="Build status on GitHub Actions"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden />
            Build passing
          </a>
          <a
            href="https://github.com/sharath-sasidharan/playwright-automationexercise-pom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 bg-slate-800 border border-slate-600 text-gray-200 text-xs hover:border-accent/50 transition-colors"
            aria-label="Latest commit on GitHub"
          >
            Latest commit
          </a>
        </div>
      </motion.div>
    </section>
  )
}

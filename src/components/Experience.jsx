import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    role: 'Software QA Engineer',
    company: 'Talentica Software',
    current: true,
    companyDomain: 'talentica.com',
    logoPath: '/logos/talentica.png',
    logoUrl: 'https://icons.duckduckgo.com/ip3/talentica.com.ico',
    location: 'Remote',
    period: 'Sep 2025 – Present',
    bullets: [
      { problem: 'Customer-facing Full Kit flows needed high confidence before release.', solution: 'Designed and executed detailed test scenarios; validated UI and backend data for report accuracy.', tech: 'Manual testing, requirement analysis, Jira.', impact: 'Critical defects caught early; reduced rework and supported on-time releases.' },
      { problem: 'Regression coverage and test clarity were inconsistent.', solution: 'Streamlined regression test structure and documentation for the Realization team.', tech: 'Test case design, traceability.', impact: 'Faster onboarding and more reliable validation cycles.' },
      { problem: 'Cross-functional alignment on quality criteria.', solution: 'Collaborated with developers and product owners to close functional gaps and clarify requirements.', tech: 'Agile ceremonies, defect triage.', impact: 'Fewer misunderstandings and smoother releases.' },
    ],
    achievement: 'Outstanding Performer of the Month (Nov 2025) for quick adaptability, ownership, and impact in Full Kit manual testing.',
  },
  {
    role: 'QA Engineer',
    company: 'Dataseers',
    companyDomain: 'dataseers.ai',
    logoPath: '/logos/dataseers.png',
    logoUrl: 'https://icons.duckduckgo.com/ip3/dataseers.ai.ico',
    location: 'India',
    period: 'Jun 2021 – Aug 2025',
    bullets: [
      { problem: 'Regression suite was manual and slow, delaying releases.', solution: 'Built E2E automation with Playwright (JS/TS) and POM; integrated into CI.', tech: 'Playwright, TypeScript, Allure, Jenkins.', impact: '50% of regression automated; ~30% reduction in testing time.' },
      { problem: 'Release validation cycle was a bottleneck.', solution: 'Automated Jenkins pipelines with webhook triggers; parallel execution and clear reporting.', tech: 'Jenkins, webhooks, Allure.', impact: 'Shorter release cycles; build-gated quality checks.' },
      { problem: 'API and data validation were ad hoc.', solution: 'Designed reusable API validation utilities; executed tests via Postman and Newman CLI.', tech: 'Postman, Newman, REST, JSON schema.', impact: 'Shift-left API coverage; fewer UI-level defects.' },
      { problem: 'Performance and scalability not validated systematically.', solution: 'Executed load and stress tests; analyzed throughput, response time, and resource usage.', tech: 'JMeter, performance metrics.', impact: 'Data-driven capacity and performance decisions.' },
      { problem: 'Test scenarios were hard to maintain and share with dev/product.', solution: 'Adopted BDD with Cucumber; wrote readable, scenario-based tests.', tech: 'Cucumber, Gherkin.', impact: 'Better collaboration; maintainable test suite.' },
      { problem: 'Team automation coverage and quality consistency needed improvement.', solution: 'Mentored 2 QA engineers on automation and test design.', tech: 'Playwright, code review, pair testing.', impact: '20% increase in automation coverage; 15% reduction in production defects.' },
    ],
    achievement: null,
  },
]

function CompanyLogo({ domain, companyName, logoPath, logoUrl }) {
  const [error, setError] = useState(false)
  const [tryExternal, setTryExternal] = useState(false)
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
  const externalUrl = logoUrl || faviconUrl
  const src = logoPath && !tryExternal ? logoPath : externalUrl

  const handleError = () => {
    if (logoPath && !tryExternal) {
      setTryExternal(true)
    } else {
      setError(true)
    }
  }

  if (error) {
    return (
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/80 border border-slate-600/50 flex items-center justify-center text-white font-semibold text-lg"
        aria-hidden
      >
        {companyName.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`${companyName} logo`}
      className="w-12 h-12 rounded-xl object-contain bg-white border border-slate-600/50 p-1"
      onError={handleError}
    />
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          Experience
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
        <div className="space-y-8">
          {experiences.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="rounded-xl p-7 lg:p-9 bg-slate-800/50 border border-slate-700/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <CompanyLogo domain={job.companyDomain} companyName={job.company} logoPath={job.logoPath} logoUrl={job.logoUrl} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 flex-wrap">
                    {job.role} | {job.company}
                    {job.current && (
                      <span className="relative inline-flex items-center justify-center w-5 h-5 ml-0.5" aria-label="Currently working here">
                        <motion.span
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent/50"
                          animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.span
                          className="relative w-2 h-2 rounded-full bg-accent"
                          animate={{ opacity: [0.85, 1, 0.85] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </span>
                    )}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    {job.location} · {job.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex flex-col gap-2 pl-0">
                    {typeof bullet === 'string' ? (
                      <span className="flex gap-2">
                        <span className="text-accent shrink-0">·</span>
                        {bullet}
                      </span>
                    ) : (
                      <>
                        <span className="flex gap-2">
                          <span className="text-accent shrink-0">·</span>
                          <span><strong className="text-gray-200">Problem:</strong> {bullet.problem}</span>
                        </span>
                        <span className="pl-5 text-gray-400"><strong className="text-gray-300">Solution:</strong> {bullet.solution}</span>
                        <span className="pl-5 text-gray-400"><strong className="text-gray-300">Tech:</strong> {bullet.tech}</span>
                        <span className="pl-5 text-accent/90"><strong className="text-gray-300">Impact:</strong> {bullet.impact}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {job.achievement && (
                <p className="mt-4 pt-4 border-t border-slate-700/60 text-gray-200 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Achievement:</span>{' '}
                  {job.achievement}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

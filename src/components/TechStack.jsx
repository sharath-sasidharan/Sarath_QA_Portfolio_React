import { useState } from 'react'
import { motion } from 'framer-motion'

const CDN = 'https://cdn.simpleicons.org'
const accent = '2dd4bf'

const groups = [
  {
    title: 'Testing',
    items: ['Functional & Regression', 'UAT', 'Defect management', 'Exploratory testing'],
    logos: [],
  },
  {
    title: 'Automation',
    items: [
      'Scalable POM-based automation architecture',
      'Parallel execution with optimized worker configuration',
      'BDD implementation using Cucumber',
      'CI-integrated test execution pipelines',
      'Maintainable and reusable test utilities',
    ],
    logos: [
      {
        name: 'Playwright',
        officialSrc: 'https://raw.githubusercontent.com/microsoft/playwright/main/packages/recorder/public/playwright-logo.svg',
      },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
      { name: 'Cucumber', icon: 'cucumber', color: '23D96C' },
    ],
  },
  {
    title: 'API & Tools',
    items: [
      'REST API validation and contract testing',
      'JavaScript-based request assertions',
      'SQL backend data verification',
      'Structured reporting using Allure',
      'Version-controlled automation workflows',
    ],
    logos: [
      { name: 'Postman', icon: 'postman', color: 'FF6C37' },
      { name: 'Git', icon: 'git', color: 'F05032' },
      { name: 'GitHub', icon: 'github', color: '181717' },
      { name: 'SQL', icon: 'postgresql', color: '4169E1' },
      { name: 'Jira', icon: 'jira', color: '0052CC' },
      { name: 'TestRail', icon: 'testrail', color: '00A699' },
      { name: 'k6', icon: 'k6', color: '7D64FF' },
      { name: 'Grafana Cloud', icon: 'grafana', color: 'F46800' },
      { name: 'Docker', icon: 'docker', color: '2496ED' },
      {
        name: 'Allure',
        officialSrc: 'https://allurereport.org/svg/logo-report-sign.svg',
      },
    ],
  },
  {
    title: 'CI/CD',
    items: [
      'GitHub Actions workflow design and automation triggers',
      'Jenkins job configuration and pipeline setup',
      'Webhook-driven test execution',
      'CI pipeline integration with automated reporting',
    ],
    logos: [
      { name: 'GitHub Actions', icon: 'githubactions', color: '2088FF' },
      { name: 'Jenkins', icon: 'jenkins', color: 'D24939' },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

function LogoImage({ name, icon, color, officialSrc }) {
  const [error, setError] = useState(false)
  const hex = color || accent
  const src = officialSrc || `${CDN}/${icon}/${hex}`
  return (
    <div className="flex flex-col items-center gap-2 group" title={name}>
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-700/60 flex items-center justify-center p-2 border border-slate-600/50 group-hover:border-accent/40 transition-all duration-300 ease-out hover:scale-[1.02]">
        {error ? (
          <span className="text-lg font-bold text-accent">{name.charAt(0)}</span>
        ) : (
          <img
            src={src}
            alt={name}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setError(true)}
          />
        )}
      </div>
      <span className="text-xs text-gray-400">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          Tech stack
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
              className="rounded-xl p-6 lg:p-7 bg-slate-800/40 border border-slate-700/50"
            >
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                {group.title}
              </h3>
              {group.logos.length > 0 && (
                <div className="flex flex-wrap gap-5 items-center mb-4">
                  {group.logos.map((logo) => (
                    <LogoImage
                      key={logo.name}
                      name={logo.name}
                      icon={logo.icon}
                      color={logo.color}
                      officialSrc={logo.officialSrc}
                    />
                  ))}
                </div>
              )}
              <ul className="space-y-2 text-gray-200 text-sm leading-relaxed">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
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

import { motion } from 'framer-motion'
import { useState } from 'react'

function ProjectImage({ src, alt, fallbackLabel }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="w-full max-w-[700px] min-h-[200px] flex items-center justify-center rounded-lg bg-slate-800/80 border border-slate-600/50 border-dashed text-gray-400 text-sm p-6 text-center">
        {fallbackLabel || 'Image not found'}: <code className="ml-1 text-gray-300">{src.replace(/^\//, '')}</code>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full max-w-[700px] h-auto block"
      onError={() => setFailed(true)}
    />
  )
}

const PLAYWRIGHT_REPO = 'https://github.com/sharath-sasidharan/playwright-automationexercise-pom'
const AI_QA_REPO = 'https://github.com/sharath-sasidharan/AI-QA-Test-Case-Generator'
const HEALTHCONNECT_REPO = 'https://github.com/sharath-sasidharan/healthconnect-qa-automation'

const project1Outcomes = [
  'Designed scalable POM-based automation framework for e-commerce workflows',
  'Reduced regression execution time by ~40% through parallel execution',
  'Implemented reusable utilities and environment-based configuration',
  'Integrated Allure reporting for traceable execution insights',
  'CI-ready with GitHub Actions integration',
]

const project3Phase1 = [
  'Generated structured manual test cases with priority assignment',
  'Produced automation-ready Playwright test() blocks',
  'Enforced strict JSON schema validation',
  'Implemented fallback handling for malformed AI responses',
  'Enabled CSV export for test documentation',
]
const project3Phase2 = [
  'Document upload (.txt, .md, .docx, .pdf)',
  'Chunking strategy (600 chars, 80 overlap)',
  'OpenAI embeddings (text-embedding-3-small)',
  'In-memory vector store with cosine similarity search',
  'Retrieval-Augmented Generation for requirement-aware test creation',
  'Excel export + Playwright scaffold output',
]

const healthConnectOutcomes = [
  'Documented test plan with scope, approach, entry/exit criteria, and suite overview (docs/TestPlan.md)',
  'Structured test-case matrix in docs/TestSuites.csv with 30+ cases—Suite ID, Test ID, Spec File, Priority',
  'Built POM framework with pages for Login, Registration, Dashboard, Search, Payment, Medical Records, and more',
  'Centralized config and test data; reusable fixtures and helpers (e.g. random email generation)',
  'Coverage across Auth (login, sign-up then login), Patient/Doctor Registration, Appointments, Doctor Search, Payment, Medical Records',
  'Allure integration with screenshots and videos on failure',
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3 relative inline-block"
        >
          Featured projects
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
        <div className="space-y-10">
          {/* Project 1: Playwright E2E */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            custom={0}
            className="rounded-xl p-7 lg:p-9 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-3">End-to-End Playwright Test Suite</h3>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Problem:</strong> E-commerce regression was manual and slow; releases needed faster, repeatable validation.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Solution:</strong> Scalable POM-based framework with reusable page objects, parallel runs, and Allure reporting.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Tech:</strong> Playwright, JavaScript/TypeScript, Allure, GitHub Actions.</p>
            <p className="text-accent/90 text-sm mb-4 leading-relaxed"><strong className="text-gray-200">Results:</strong> ~40% regression time reduction; CI-ready; traceable execution insights.</p>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed mb-6">
              {project1Outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  {outcome}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={PLAYWRIGHT_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-slate-900 font-semibold px-5 py-2.5 text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="View Playwright project on GitHub"
              >
                View GitHub Repository
              </a>
              <a
                href="/AutomationExercise_TestPlan.pdf"
                download="AutomationExercise_TestPlan.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 text-gray-200 font-medium px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Download Test Plan (PDF)"
              >
                Test Plan
              </a>
              <a
                href="/AutomationExercise_TestSuites.xlsx"
                download="AutomationExercise_TestSuites.xlsx"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 text-gray-200 font-medium px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Download Test Suites (Excel)"
              >
                Test Suites
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-700/60">
              <h4 className="text-base font-semibold text-white mb-4">Execution Demo</h4>
              <div className="rounded-lg overflow-hidden bg-slate-900/50">
                <ProjectImage
                  src="/workflow-end-to-end.png"
                  alt="Playwright E2E execution workflow"
                  fallbackLabel="Add workflow-end-to-end.png to public folder"
                />
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-base font-semibold text-white mb-4">Allure Reporting</h4>
              <div className="rounded-lg overflow-hidden bg-slate-900/50">
                <ProjectImage
                  src="/Allure_report_data.png"
                  alt="Allure test report dashboard"
                  fallbackLabel="Add Allure_report_data.png to public folder"
                />
              </div>
            </div>
          </motion.article>

          {/* Project 3: AI QA Generator */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            custom={2}
            className="rounded-xl p-7 lg:p-9 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-3">AI-Powered QA Test Case & Playwright Script Generator (RAG Enabled)</h3>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Problem:</strong> Manual test design was slow; generic AI prompts lacked requirement context.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Solution:</strong> Phase 1: structured cases + Playwright scaffolds. Phase 2: RAG with document upload and vector search for context-aware generation.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Tech:</strong> OpenAI API, text-embedding-3-small, Node.js, React, chunking + cosine similarity.</p>
            <p className="text-accent/90 text-sm mb-4 leading-relaxed"><strong className="text-gray-200">Results:</strong> Requirement-driven automation generation; Excel/CSV + Playwright output; reduced manual test-writing time.</p>
            <div className="space-y-1 mb-2">
              <p className="text-gray-200 text-sm font-semibold">Phase 1</p>
              <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                {project3Phase1.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="text-accent shrink-0">·</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-1 mb-6">
              <p className="text-gray-200 text-sm font-semibold mt-4">Phase 2 (RAG Implementation)</p>
              <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                {project3Phase2.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="text-accent shrink-0">·</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={AI_QA_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-slate-900 font-semibold px-5 py-2.5 text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="View AI QA Generator on GitHub"
              >
                View GitHub Repository
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-700/60">
              <h4 className="text-base font-semibold text-white mb-4">Workflow Execution</h4>
              <div className="rounded-lg overflow-hidden bg-slate-900/50">
                <ProjectImage
                  src="/Workflow_QA_AI_ASSISTANT.png"
                  alt="AI QA Test Case Generator workflow"
                  fallbackLabel="Add Workflow_QA_AI_ASSISTANT.png to public folder"
                />
              </div>
            </div>

            <p className="mt-8 text-gray-400 text-sm italic leading-relaxed">
              Enabled requirement-driven automation generation using RAG-based retrieval instead of generic prompting.
            </p>
          </motion.article>

          {/* Project 3: HealthConnect – QA Automation */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            custom={3}
            className="rounded-xl p-7 lg:p-9 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-3">End-to-End QA Automation for HealthConnect</h3>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Problem:</strong> The healthcare web app needed repeatable E2E validation; sanity and regression runs had to be traceable and maintainable.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Solution:</strong> I designed a test plan (scope, approach, entry/exit criteria), structured test suites (30+ cases in docs), and a Playwright + Node.js POM framework covering auth, registration, appointments, search, payment, and medical records, with Allure reporting and screenshots/videos on failure.</p>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed"><strong className="text-gray-200">Tech:</strong> Playwright, JavaScript, Node.js, npm, Page Object Model, Allure; test plan and test suites in repo (docs/).</p>
            <p className="text-accent/90 text-sm mb-4 leading-relaxed"><strong className="text-gray-200">Results:</strong> Test plan and suites in place; 30+ automated test cases; coverage across 7 functional areas; framework ready for sanity and regression runs; traceable execution via Allure.</p>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed mb-6">
              {healthConnectOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  {outcome}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={HEALTHCONNECT_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-accent text-slate-900 font-semibold px-5 py-2.5 text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="View HealthConnect QA project on GitHub"
              >
                View GitHub Repository
              </a>
              <a
                href="/HealthConnect_TestPlan_SarathSasidharan.pdf"
                download="HealthConnect_TestPlan_SarathSasidharan.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 text-gray-200 font-medium px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Download Test Plan (PDF)"
              >
                Test Plan
              </a>
              <a
                href="/HealthConnect_TestSuites_SarathSasidharan.xlsx"
                download="HealthConnect_TestSuites_SarathSasidharan.xlsx"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 text-gray-200 font-medium px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label="Download Test Suites (Excel)"
              >
                Test Suites
              </a>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-700/60">
              <h4 className="text-base font-semibold text-white mb-4">Execution Demo</h4>
              <div className="rounded-lg overflow-hidden bg-slate-900/50">
                <ProjectImage
                  src="/healthconnect-workflow-demo.gif"
                  alt="HealthCare Connect Create Account page during automated test run (patient registration)"
                  fallbackLabel="Add healthconnect-workflow-demo.gif to public folder"
                />
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-base font-semibold text-white mb-4">Allure Reporting</h4>
              <div className="rounded-lg overflow-hidden bg-slate-900/50">
                <ProjectImage
                  src="/healthconnect-allure-report.png.gif"
                  alt="Allure report dashboard for HealthConnect QA — pass rate, suites, trend"
                  fallbackLabel="Add healthconnect-allure-report.png.gif to public folder"
                />
              </div>
            </div>
          </motion.article>

          {/* Coming next */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            custom={4}
            className="rounded-xl p-7 lg:p-9 bg-slate-800/40 border border-slate-700/50 border-dashed"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-3">Coming next</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Postman API and Performance testing (JMeter) project case studies will be added here soon.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md px-2.5 py-1 bg-slate-700/50 text-gray-400 text-xs font-medium">
                Postman
              </span>
              <span className="inline-flex items-center rounded-md px-2.5 py-1 bg-slate-700/50 text-gray-400 text-xs font-medium">
                JMeter
              </span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

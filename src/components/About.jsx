import { FadeUp } from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-gray-600 leading-relaxed">
            QA Engineer with 4+ years of experience in manual and automation testing. Specialized in
            Playwright automation, API testing, and CI/CD integration. ISTQB CTFL and CT-GenAI
            certified (100% score). Passionate about AI-driven testing and quality engineering.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

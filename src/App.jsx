import Hero from './components/Hero'
import QAValueProposition from './components/QAValueProposition'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import AIInTesting from './components/AIInTesting'
import TestingApproach from './components/TestingApproach'
import Testimonials from './components/Testimonials'
import TestingPhilosophy from './components/TestingPhilosophy'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="#" className="text-white font-semibold">
            Sarath Sasidharan
          </a>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
            <a href="#value-proposition" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">What I Bring</a>
            <a href="#tech-stack" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Tech stack</a>
            <a href="#experience" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Projects</a>
            <a href="#certifications" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Certifications</a>
            <a href="#ai-in-testing" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">AI in Testing</a>
            <a href="#testing-approach" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Approach</a>
            <a href="#testimonials" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Testimonials</a>
            <a href="#philosophy" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Philosophy</a>
            <a href="#contact" className="text-gray-400 hover:text-accent transition-colors focus:outline-none focus:text-accent">Contact</a>
          </div>
        </div>
      </nav>
      <Hero />
      <QAValueProposition />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <AIInTesting />
      <TestingApproach />
      <Testimonials />
      <TestingPhilosophy />
      <Contact />
      <footer className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-8 py-6 text-center text-gray-400 text-sm">
          © 2026 Sarath Sasidharan · QA Engineer
        </div>
      </footer>
    </div>
  )
}

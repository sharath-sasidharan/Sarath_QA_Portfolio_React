import { motion } from 'framer-motion'

// Inline SVGs so logos always show (no CDN dependency)
const OutlookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-hidden>
    <path fill="#0078D4" d="M7.88 11.91L4.22 9.5 12 2.5l7.78 7-3.66 2.41L12 6.41l-4.12 5.5zM2.5 4.5v15l9-6 9 6v-15l-9-6-9 6z" />
  </svg>
)
const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-hidden>
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0 text-gray-300" aria-hidden>
    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const ICONS = { outlook: OutlookLogo, linkedin: LinkedInLogo, github: GitHubLogo }

const links = [
  { label: 'Email', href: 'mailto:ssarath.qa@outlook.com', text: 'ssarath.qa@outlook.com', icon: 'outlook' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarath-sasidharan-74b30b136/',
    text: 'linkedin.com/in/sarath-sasidharan',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/sharath-sasidharan', text: 'github.com/sharath-sasidharan', icon: 'github' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold tracking-tight text-white mb-12 pb-3"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-gray-400 text-base mb-10 leading-relaxed"
        >
          Open to roles in product companies, fintech, and SaaS. Remote or hybrid.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {links.map((link) => {
            const Icon = ICONS[link.icon]
            return (
              <li key={link.label} className="flex items-center justify-center gap-3 flex-wrap">
                <Icon />
                <span className="text-gray-400 text-base mr-1">{link.label}:</span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-accent hover:underline text-base font-medium transition-colors"
                >
                  {link.text}
                </a>
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

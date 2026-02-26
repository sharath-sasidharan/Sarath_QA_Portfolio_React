import { motion } from 'framer-motion'

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0.6) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: i,
    },
  }),
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  as: Component = motion.section,
  ...props
}) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      custom={delay}
      className={className}
      {...props}
    >
      {typeof children === 'function' ? children(itemVariants) : children}
    </Component>
  )
}

export function FadeUp({ children, className = '', delay = 0, as: Tag = motion.div, ...props }) {
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}

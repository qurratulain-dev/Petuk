import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

// Fade + slide in when the element scrolls into view
export const Reveal = ({ children, className = '', delay = 0, y = 40, x = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease }}
  >
    {children}
  </motion.div>
)

// Container that staggers its StaggerItem children
export const Stagger = ({ children, className = '', stagger = 0.12 }) => (
  <motion.div
    className={className}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, className = '', ...rest }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
    }}
    {...rest}
  >
    {children}
  </motion.div>
)

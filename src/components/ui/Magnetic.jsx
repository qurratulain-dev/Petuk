import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Makes its children gently follow the cursor while hovered.
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 })

  const handleMove = (event) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const midX = event.clientX - (rect.left + rect.width / 2)
    const midY = event.clientY - (rect.top + rect.height / 2)
    x.set(midX * strength)
    y.set(midY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic

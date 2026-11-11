import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

// Desktop-only custom cursor: a dot plus a springy ring that grows on
// interactive elements and shows a short label ("Add", "View").
const CustomCursor = () => {
  const reduce = useReducedMotion()
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  )
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.4 })

  useEffect(() => {
    if (reduce || !enabled) return undefined

    document.body.classList.add('has-custom-cursor')

    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const over = (event) => {
      const target = event.target.closest('a, button, [data-cursor]')
      if (!target) {
        setHovering(false)
        setLabel('')
        return
      }
      setHovering(true)
      setLabel(target.getAttribute('data-cursor') || '')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [reduce, enabled, x, y])

  if (!enabled || reduce) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-orange-500"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/70"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.7 : 1,
          backgroundColor: hovering ? 'rgba(249, 115, 22, 0.12)' : 'rgba(249, 115, 22, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        {label && (
          <span className="text-[7px] font-bold uppercase tracking-wide text-orange-600">{label}</span>
        )}
      </motion.div>
    </>
  )
}

export default CustomCursor

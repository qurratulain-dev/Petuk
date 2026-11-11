import { useEffect, useState } from 'react'
import { AnimatePresence, animate, motion, useReducedMotion } from 'framer-motion'
import { GiFullPizza } from 'react-icons/gi'

const SESSION_KEY = 'petuk-preloaded'

// First-visit preloader: spinning pizza + percentage counter, then an
// orange curtain that splits apart to reveal the site. Once per session.
const Preloader = () => {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SESSION_KEY))
  const [count, setCount] = useState(0)
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    if (!visible) return undefined
    sessionStorage.setItem(SESSION_KEY, '1')

    if (reduce) {
      const frame = requestAnimationFrame(() => setVisible(false))
      return () => cancelAnimationFrame(frame)
    }

    const controls = animate(0, 100, {
      duration: 1.7,
      ease: 'easeInOut',
      onUpdate: (value) => setCount(Math.round(value)),
    })
    const revealTimer = setTimeout(() => setReveal(true), 1800)
    const hideTimer = setTimeout(() => setVisible(false), 2600)

    return () => {
      controls.stop()
      clearTimeout(revealTimer)
      clearTimeout(hideTimer)
    }
  }, [visible, reduce])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="preloader" className="fixed inset-0 z-[100] overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-orange-500"
            animate={reveal ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-orange-500"
            animate={reveal ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center"
            animate={reveal ? { opacity: 0, scale: 0.92 } : { opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              <GiFullPizza size={72} color="#ffffff" />
            </motion.div>
            <p className="mt-4 text-4xl font-bold text-white">{count}%</p>
            <p className="mt-1 text-xs uppercase tracking-[0.4em] text-white/80">Petuk</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader

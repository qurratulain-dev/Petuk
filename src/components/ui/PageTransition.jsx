import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { GiFullPizza } from 'react-icons/gi'

// Orange panel that sweeps across the screen on every route change.
const PageTransition = () => {
  const { pathname } = useLocation()
  const reduce = useReducedMotion()
  const isFirst = useRef(true)
  const [run, setRun] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    if (reduce) return undefined
    const frame = requestAnimationFrame(() => {
      setRun((value) => value + 1)
      setShow(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, reduce])

  if (!show) return null

  return (
    <motion.div
      key={run}
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setShow(false)}
      className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-orange-500"
    >
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <GiFullPizza size={60} color="#ffffff" />
      </motion.div>
    </motion.div>
  )
}

export default PageTransition

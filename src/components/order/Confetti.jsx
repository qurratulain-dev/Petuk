import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useReducedMotion } from 'framer-motion'

const COLORS = ['#f97316', '#fbbf24', '#22c55e', '#fb923c']

// Lightweight confetti burst fired once when the order success page mounts.
const Confetti = () => {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const end = Date.now() + 1600

    const frame = () => {
      confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.6 }, colors: COLORS })
      confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.6 }, colors: COLORS })
      if (Date.now() < end) requestAnimationFrame(frame)
    }

    frame()
  }, [reduce])

  return null
}

export default Confetti

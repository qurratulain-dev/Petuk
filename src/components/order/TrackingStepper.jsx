import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TbCheck } from 'react-icons/tb'
import { ORDER_STATUS_LABEL, ORDER_STEPS } from '../../utils/orders'

const STEP_ICONS = ['🥧', '👨‍🍳', '🛵', '🏠']

// Auto-advancing order tracker. Advances every 7 seconds to simulate live
// delivery updates. Uses transform-only animation for the scooter.
const TrackingStepper = ({ initialStatus = 'received' }) => {
  const startIndex = Math.max(ORDER_STEPS.indexOf(initialStatus), 0)
  const [active, setActive] = useState(startIndex)
  const trackRef = useRef(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    if (active >= ORDER_STEPS.length - 1) return
    const timer = setTimeout(() => setActive((step) => Math.min(step + 1, ORDER_STEPS.length - 1)), 7000)
    return () => clearTimeout(timer)
  }, [active])

  useEffect(() => {
    const measure = () => setTrackWidth(trackRef.current?.offsetWidth ?? 0)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const progress = active / (ORDER_STEPS.length - 1)
  const scooterX = Math.max(trackWidth * progress - 14, 0)

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Live order tracking
      </h3>

      <div ref={trackRef} className="relative">
        <div className="absolute left-0 right-0 top-5 h-1 rounded-full bg-zinc-200" />
        <motion.div
          className="absolute left-0 top-5 h-1 origin-left rounded-full bg-orange-500"
          animate={{ scaleX: progress || 0.001 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          style={{ width: '100%' }}
        />

        <motion.div
          className="absolute top-0 text-xl"
          animate={{ x: scooterX }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          style={{ left: 0 }}
          aria-hidden="true"
        >
          🛵
        </motion.div>

        <ol className="relative flex justify-between">
          {ORDER_STEPS.map((step, index) => {
            const done = index < active
            const current = index === active
            return (
              <li key={step} className="flex w-1/4 flex-col items-center text-center">
                <motion.span
                  animate={current ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                  transition={current ? { repeat: Infinity, duration: 1.6 } : {}}
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm transition-colors ${
                    done || current
                      ? 'border-orange-500 bg-orange-500 text-white'
                      : 'border-zinc-300 bg-white text-zinc-400'
                  }`}
                >
                  {done ? <TbCheck size={20} /> : STEP_ICONS[index]}
                </motion.span>
                <span
                  className={`mt-2 text-[11px] leading-tight sm:text-xs ${
                    current ? 'font-semibold text-orange-500' : done ? 'text-zinc-600' : 'text-zinc-400'
                  }`}
                >
                  {ORDER_STATUS_LABEL[step]}
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default TrackingStepper

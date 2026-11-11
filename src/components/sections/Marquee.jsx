import { useEffect, useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useVelocity } from 'framer-motion'

// Infinite horizontal marquee that speeds up slightly with scroll velocity.
const Marquee = ({
  text = 'HOT PIZZA • FAST DELIVERY • FRESH INGREDIENTS •',
  speed = 70,
  repeat = 3,
  className = '',
}) => {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const trackRef = useRef(null)
  const widthRef = useRef(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)

  useEffect(() => {
    const measure = () => {
      widthRef.current = trackRef.current ? trackRef.current.scrollWidth / 2 : 0
    }
    measure()
    const timer = setTimeout(measure, 350)
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', measure)
    }
  }, [])

  useAnimationFrame((_, delta) => {
    if (reduce) return
    const width = widthRef.current
    if (!width) return
    const boost = Math.abs(velocity.get()) * 0.15
    let next = x.get() + (speed + boost) * (delta / 1000)
    if (next >= width) next -= width
    x.set(next)
  })

  const content = Array.from({ length: repeat }, () => text).join(' ')

  return (
    <div className={`overflow-hidden bg-orange-500 py-4 ${className}`}>
      <motion.div
        ref={trackRef}
        style={{ x: reduce ? 0 : x }}
        className="flex w-max whitespace-nowrap"
      >
        <span className="px-2 text-lg font-extrabold uppercase tracking-wider text-white sm:text-2xl">
          {content}
        </span>
        <span
          aria-hidden="true"
          className="px-2 text-lg font-extrabold uppercase tracking-wider text-white sm:text-2xl"
        >
          {content}
        </span>
      </motion.div>
    </div>
  )
}

export default Marquee

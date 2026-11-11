import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { TbTruckDelivery, TbPizza, TbStar, TbToolsKitchen2 } from 'react-icons/tb'
import SectionHeading from '../ui/SectionHeading'

const CountUp = ({ to, decimals = 0, suffix = '', prefix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return undefined
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  const display = reduce ? to : value

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const STATS = [
  { id: 1, icon: <TbPizza />, to: 10, suffix: 'k+', label: 'Orders delivered', decimals: 0 },
  { id: 2, icon: <TbTruckDelivery />, to: 50, suffix: ' min', label: 'Average delivery', decimals: 0 },
  { id: 3, icon: <TbStar />, to: 4.9, suffix: '', label: 'Customer rating', decimals: 1 },
  { id: 4, icon: <TbToolsKitchen2 />, to: 25, suffix: '+', label: 'Menu items', decimals: 0 },
]

const Stats = () => (
  <section className="bg-[#fcfcfc]">
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionHeading
        className="mb-10"
        eyebrow="By the numbers"
        title="Loved across the country"
        subtitle="Hot boxes, happy customers and a kitchen that never stands still."
      />

      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-lg shadow-orange-100/40 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center text-center"
          >
            <span className="mb-2 text-2xl text-orange-500 transition-transform duration-300 group-hover:scale-110">
              {stat.icon}
            </span>
            <p className="text-2xl font-extrabold text-zinc-800 sm:text-3xl">
              <CountUp to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats

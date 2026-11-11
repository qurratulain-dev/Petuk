import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import Heading from '../Heading'
import deliveryboy from '../../assets/deliveryboy.avif'
import { ImSpoonKnife } from 'react-icons/im'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'
import { Stagger, StaggerItem } from '../motion/Reveal'

const RouteScooter = () => {
  const routeRef = useRef(null)
  const pathRef = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (reduce || !pathRef.current) return
    const path = pathRef.current
    const length = path.getTotalLength()
    const point = path.getPointAtLength(length * Math.min(Math.max(progress, 0), 1))
    x.set(point.x)
    y.set(point.y)
  })

  return (
    <div ref={routeRef} className="relative mt-8 h-28 w-full">
      <svg viewBox="0 0 1000 110" className="h-full w-full" aria-hidden="true">
        <path
          ref={pathRef}
          d="M25 85 C 200 15, 340 110, 500 55 S 780 5, 975 75"
          fill="none"
          stroke="#fb923c"
          strokeWidth="3"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        <motion.g style={{ x, y }}>
          <circle r="20" fill="#f97316" opacity="0.12" />
          <text x="0" y="7" fontSize="22" textAnchor="middle">
            🛵
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

const FastestDelivery = () => {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#fcfcfc]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <Heading title="Fast Delivery" />
        <div className="mt-6 flex flex-col items-center gap-10 md:flex-row">
          <div className="flex-1">
            <motion.div
              initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl"
            >
              <motion.img
                src={deliveryboy}
                alt="Delivery rider"
                className="h-[55vh] w-full object-cover md:w-[40vw]"
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                data-cursor="View"
              />
            </motion.div>
          </div>

          <div className="flex-1">
            <Stagger stagger={0.18} className="flex flex-col justify-center gap-5 overflow-hidden">
              {FastestDeliverArray.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="relative flex items-center gap-14 rounded-xl bg-white px-6 py-5 shadow-sm transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="flex items-center justify-center">
                    <span className="absolute left-6 h-8 w-8 rotate-90 rounded-full rounded-bl-lg rounded-tl-5xl rounded-tr-2xl bg-orange-500/20" />
                    <div className="absolute left-5 text-3xl text-orange-500">{item.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-md font-semibold text-zinc-800">{item.name}</h2>
                    <p className="text-sm text-zinc-500">{item.para}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <RouteScooter />
      </div>
    </section>
  )
}

const FastestDeliverArray = [
  {
    id: 1,
    icon: <ImSpoonKnife />,
    name: 'Order food from the menu',
    para: 'Pick your favourites and add them to the cart in one tap.',
  },
  {
    id: 2,
    icon: <FaMoneyBill1Wave />,
    name: 'Pay your food bill',
    para: 'Cash on delivery or a mobile wallet — your choice.',
  },
  {
    id: 3,
    icon: <TbTruckDelivery />,
    name: 'Get delivery within 50 minutes',
    para: 'Live tracking keeps you posted until it reaches your door.',
  },
]

export default FastestDelivery

import { motion, useReducedMotion } from 'framer-motion'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import HeroVisual from './hero/HeroVisual'
import Magnetic from './ui/Magnetic'

const HEADLINE = [
  { text: 'You' },
  { text: 'would' },
  { text: 'Love' },
  { text: 'our' },
  { text: 'Hot', accent: true },
  { text: 'Pizza', accent: true },
]

const wordVariants = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Hero = () => {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-amber-50">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-[18vh]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 flex w-48 items-center space-x-1 rounded-lg bg-orange-200 px-2 py-1"
            >
              <motion.span
                animate={reduce ? {} : { x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              >
                <TbTruckDelivery size={24} color="coral" />
              </motion.span>
              <p className="text-[10px] text-zinc-500">Faster Delivery Guaranteed</p>
            </motion.div>

            <h1 className="flex flex-wrap text-4xl font-bold leading-tight text-zinc-800 sm:text-5xl lg:text-6xl">
              {HEADLINE.map((word, index) => (
                <span key={index} className="mr-[0.24em] inline-block overflow-hidden pb-1">
                  <motion.span
                    variants={reduce ? undefined : wordVariants}
                    className={`inline-block ${word.accent ? 'text-orange-500' : ''}`}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className="my-7 max-w-sm text-sm text-zinc-500">
              Get 10% instant off on every order and a Rs. 200 welcome bonus today. Hot, fresh
              Pakistani favourites delivered to your door.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  to="/shop"
                  className="btn-sweep inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-300/50"
                >
                  Order Now
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero

import cheese from '../assets/cheese.jpg'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Magnetic from './ui/Magnetic'

const lineVariants = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// Avoid wrapping this section in a transformed element: the fixed background
// relies on the section being the nearest scrolling context.
const BestCheese = () => {
  const reduce = useReducedMotion()

  return (
    <section
      className="bg-[#fcfcfc] bg-fixed"
      style={{ backgroundImage: `url(${cheese})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black/35 px-5 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-2xl text-center text-white"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            {['Best Cheese Pizza available', 'in your town by Petuk'].map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span variants={reduce ? undefined : lineVariants} className="inline-block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="my-5 text-white/85"
          >
            Hand-stretched dough, slow-cooked tomato sauce and a generous blanket of mozzarella.
            This is the slice your town keeps talking about.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="inline-block"
          >
            <Magnetic>
              <Link
                to="/shop"
                className="btn-sweep inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30"
              >
                Visit Shop
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BestCheese

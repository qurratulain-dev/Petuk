import cheese from '../assets/cheese.jpg'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Magnetic from './ui/Magnetic'
import SectionHeading from './ui/SectionHeading'

// The fixed background gives this band its parallax feel, so the section must
// stay free of transformed ancestors.
const BestCheese = () => {
  const reduce = useReducedMotion()

  return (
    <section
      className="bg-[#fcfcfc] bg-fixed"
      style={{ backgroundImage: `url(${cheese})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black/40 px-5 py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading
            theme="dark"
            eyebrow="The town favourite"
            title="Best Cheese Pizza in your town"
            subtitle="Hand-stretched dough, slow-cooked tomato sauce and a generous blanket of mozzarella. This is the slice your town keeps talking about."
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-8 inline-block"
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
        </div>
      </div>
    </section>
  )
}

export default BestCheese

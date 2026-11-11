import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import deliveryboy from '../../assets/deliveryboy.avif'
import { FREE_DELIVERY_THRESHOLD, formatPrice, getDeliveryFee } from '../../utils/format'
import ImageReveal from '../ui/ImageReveal'
import { Reveal } from '../motion/Reveal'

const FastestDelivery = () => {
  const reduce = useReducedMotion()
  const deliveryFee = getDeliveryFee(0)

  return (
    <section className="overflow-hidden bg-[#fff7ed]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative">
              <ImageReveal
                src={deliveryboy}
                alt="Petuk delivery rider bringing a fresh order"
                className="h-[24rem] w-full rounded-[2rem] sm:h-[32rem]"
                radius="rounded-[2rem]"
                cursor="View"
                parallax
                parallaxStrength={40}
              />
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.2 }}
                className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-6"
              >
                <p className="text-xs font-medium text-zinc-500">Fresh from our oven</p>
                <p className="text-lg font-bold text-zinc-800">On its way to you <span aria-hidden="true">🛵</span></p>
              </motion.div>
            </div>
          </Reveal>

          <div className="pt-4 lg:pt-0">
            <SectionHeading
              align="left"
              eyebrow="Good food, no long wait"
              title="Fast Delivery"
              subtitle="Your favourites are made fresh, packed with care and sent straight to your door."
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-extrabold text-orange-500">~50</p>
                <p className="mt-1 text-xs font-medium text-zinc-600 sm:text-sm">minutes to your door</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-extrabold text-orange-500">{formatPrice(deliveryFee)}</p>
                <p className="mt-1 text-xs font-medium text-zinc-600 sm:text-sm">delivery fee</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-zinc-900 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">A little extra love</p>
                <p className="mt-1 text-sm text-white/85">
                  Delivery is on us when your order reaches {formatPrice(FREE_DELIVERY_THRESHOLD)}.
                </p>
              </div>
            </div>

            <div className="mt-7 text-center lg:text-left">
              <Link to="/shop" className="btn-sweep inline-flex rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white">
                Order your favourites <span className="ml-2" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastestDelivery

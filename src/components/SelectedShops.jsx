import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import ImageReveal from './ui/ImageReveal'
import hero from '../assets/hero.webp'
import slice from '../assets/slice.jpg'
import cheese from '../assets/cheese.jpg'

const features = [
  {
    image: hero,
    eyebrow: 'THE SIGNATURE',
    title: 'A proper, cheesy classic',
    description: 'Golden crust, rich tomato and the kind of cheese pull worth sharing.',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    image: slice,
    eyebrow: 'FRESH FROM THE OVEN',
    title: 'Made for the first bite',
    description: 'Prepared fresh and packed while it is still hot.',
    className: 'md:col-span-5',
  },
  {
    image: cheese,
    eyebrow: 'GOOD INGREDIENTS',
    title: 'Simple things, done well',
    description: 'Big flavour starts with ingredients we love.',
    className: 'md:col-span-5',
  },
]

const SelectedShops = () => (
  <section className="bg-[#fcfcfc]">
    <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <SectionHeading
        className="mx-auto mb-10 max-w-2xl"
        eyebrow="A little slice of Petuk"
        title="Made fresh. Made to share."
        subtitle="From the first stretch of dough to the last cheesy bite, good pizza is worth gathering around."
      />

      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className={`group relative min-h-64 overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-orange-200/50 ${feature.className} ${index === 0 ? 'md:min-h-[34rem]' : 'md:min-h-64'}`}
          >
            <ImageReveal
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 h-full w-full"
              radius="rounded-3xl"
              parallax={index === 0}
              parallaxStrength={44}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 text-white transition-transform duration-500 group-hover:translate-y-0 sm:p-8">
              <p className="text-[10px] font-bold tracking-[0.22em] text-orange-300">{feature.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{feature.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/80">{feature.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/shop" className="btn-sweep inline-flex rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white">
          Explore the menu <span className="ml-2" aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  </section>
)

export default SelectedShops

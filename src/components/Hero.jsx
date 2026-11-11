import { useEffect, useLayoutEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { TbTruckDelivery, TbClockHour4, TbLeaf } from 'react-icons/tb'
import { AiFillStar } from 'react-icons/ai'
import HeroVisual from './hero/HeroVisual'
import Magnetic from './ui/Magnetic'
import pizzaImage from '../assets/pizza.webp'
import IngredientField, { BasilLeaf, TomatoSlice, Mozzarella, SauceDrop } from './hero/Ingredients'

const HEADLINE = [
  { text: 'You' },
  { text: 'would' },
  { text: 'Love' },
  { text: 'our' },
  { text: 'Hot', accent: true },
  { text: 'Pizza', accent: true },
]

const BADGES = [
  { id: 1, icon: <AiFillStar />, title: '4.9 rating', className: 'left-0 top-10', delay: 0.9 },
  { id: 2, icon: <TbClockHour4 />, title: '50 min delivery', className: 'right-0 bottom-16', delay: 1.1 },
  { id: 3, icon: <TbLeaf />, title: '100% fresh', className: 'right-4 top-2', delay: 1.3 },
]

const INGREDIENTS = [
  { id: 'mozzarella', label: 'Fresh Mozzarella', icon: <Mozzarella size={34} /> },
  { id: 'tomato', label: 'Sun-ripened Tomatoes', icon: <TomatoSlice size={34} /> },
  { id: 'basil', label: 'Hand-picked Basil', icon: <BasilLeaf size={34} /> },
  { id: 'sauce', label: 'Signature Sauce', icon: <SauceDrop size={34} /> },
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

  const sectionRef = useRef(null)
  const slotRef = useRef(null)
  const pizzaRef = useRef(null)
  const floatRef = useRef(null)
  const plateRef = useRef(null)
  const editorialRef = useRef(null)
  const decorRef = useRef(null)

  // Cursor parallax for the floating ingredients in the hero scene.
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 20 })
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 20 })
  const ingredientX = useTransform(smoothX, (value) => value * -40)
  const ingredientY = useTransform(smoothY, (value) => value * -40)

  useEffect(() => {
    if (reduce) return undefined
    const handleMove = (event) => {
      rawX.set(event.clientX / window.innerWidth - 0.5)
      rawY.set(event.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reduce, rawX, rawY])

  useLayoutEffect(() => {
    if (reduce) return undefined
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const pizza = pizzaRef.current
    const float = floatRef.current
    const plate = plateRef.current
    const slot = slotRef.current
    const editorial = editorialRef.current
    const decor = decorRef.current
    if (!section || !pizza || !float || !plate || !slot) return undefined

    const build = (rotation) => {
      // Centre of an untransformed element, relative to the section. Both the
      // slot and the plate are `aspect-square`, so their measured size is
      // reliable even before the pizza image has finished loading.
      const centerIn = (el) => {
        const r = el.getBoundingClientRect()
        const s = section.getBoundingClientRect()
        return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 }
      }
      const W = () => pizza.offsetWidth
      const H = () => pizza.offsetHeight
      const startX = () => centerIn(slot).x - W() / 2
      const startY = () => centerIn(slot).y - H() / 2
      const endX = () => centerIn(plate).x - W() / 2
      const endY = () => centerIn(plate).y - H() / 2
      const endScale = () => (plate.offsetWidth * 0.82) / W()

      gsap.set(pizza, { x: startX, y: startY, transformOrigin: '50% 50%' })
      gsap.set(plate, { opacity: 0, scale: 0.6 })

      // Entrance + idle float live on the inner wrapper only, so they never
      // fight the scroll transform on the outer wrapper.
      gsap.fromTo(
        float,
        { scale: 0.72, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      )
      gsap.to(float, { y: -16, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to(float, { rotate: 2.5, duration: 5.5, ease: 'sine.inOut', repeat: -1, yoyo: true })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          endTrigger: plate,
          end: 'center center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        pizza,
        { x: startX, y: startY, scale: 1, rotate: 0 },
        { x: endX, y: endY, scale: endScale, rotate: rotation, ease: 'power1.inOut', duration: 1 },
        0
      )
      if (decor) tl.to(decor, { opacity: 0, duration: 0.3, ease: 'power1.out' }, 0)
      tl.fromTo(
        plate,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, ease: 'power2.out', duration: 0.5 },
        0.25
      )

      if (editorial) {
        const items = editorial.querySelectorAll('[data-reveal]')
        if (items.length) {
          gsap.from(items, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: editorial, start: 'top 78%', once: true },
          })
        }
      }
    }

    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => build(24), section)
      return () => ctx.revert()
    })
    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => build(10), section)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [reduce])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-amber-50">
      {/* ---------------- Scene 1: the floating hero pizza ---------------- */}
      <div className="relative min-h-[100svh]">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-[18vh]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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

            {/* Empty slot that reserves the pizza's starting position. */}
            <div ref={slotRef} className="relative mx-auto aspect-square w-[min(78vw,440px)]">
              {reduce && (
                <img
                  src={pizzaImage}
                  alt="Freshly baked Petuk pizza"
                  className="h-full w-full object-contain drop-shadow-[0_35px_45px_rgba(120,53,15,0.30)]"
                />
              )}
              <div ref={decorRef} className="pointer-events-none absolute inset-0 z-40">
                <IngredientField mx={ingredientX} my={ingredientY} />
                {BADGES.map((badge) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.4, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18, delay: badge.delay }}
                    className={`absolute ${badge.className} z-10`}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut', delay: badge.delay }}
                      className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-lg backdrop-blur"
                    >
                      <span className="text-orange-500">{badge.icon}</span>
                      {badge.title}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Scene 2: the plate + editorial story ---------------- */}
      <div className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto flex aspect-square w-[min(72vw,420px)] items-center justify-center">
              <div className="absolute inset-[6%] rounded-full bg-orange-200/40 blur-2xl" />
              <div ref={plateRef} className="relative aspect-square w-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-orange-50 to-orange-100 shadow-[0_35px_70px_-20px_rgba(120,53,15,0.45)] ring-1 ring-orange-100" />
                <div className="absolute inset-[7%] rounded-full bg-gradient-to-br from-white to-orange-50 ring-1 ring-orange-100/80" />
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-orange-50 to-amber-100 shadow-inner" />
                {reduce && (
                  <img
                    src={pizzaImage}
                    alt="Freshly baked Petuk pizza"
                    className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain drop-shadow-[0_20px_30px_rgba(120,53,15,0.35)]"
                  />
                )}
              </div>
            </div>

            <div ref={editorialRef}>
              <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                The Petuk Way
              </p>
              <h2
                data-reveal
                className="text-3xl font-bold leading-tight text-zinc-800 sm:text-4xl lg:text-5xl"
              >
                Crafted With <span className="text-orange-500">Passion</span>, Served With{' '}
                <span className="text-orange-500">Love</span>
              </h2>
              <p data-reveal className="mt-5 max-w-md text-sm leading-relaxed text-zinc-500">
                Every Petuk pizza starts with slow-fermented dough, stretched by hand and finished
                with ingredients we&apos;re proud to name. Baked hot, served fast, and made to be
                shared.
              </p>

              <div data-reveal className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INGREDIENTS.map((ing) => (
                  <div
                    key={ing.id}
                    className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <span className="shrink-0">{ing.icon}</span>
                    <span className="text-xs font-semibold text-zinc-700">{ing.label}</span>
                  </div>
                ))}
              </div>

              <div data-reveal className="mt-8">
                <Magnetic>
                  <Link
                    to="/shop"
                    className="btn-sweep inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-300/50"
                  >
                    Explore Our Menu
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The single shared pizza that travels between the two scenes. */}
      {!reduce && <HeroVisual ref={pizzaRef} floatRef={floatRef} />}
    </section>
  )
}

export default Hero

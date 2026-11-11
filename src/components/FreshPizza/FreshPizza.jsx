import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from '../Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbToolsKitchen2Off, TbTruckDelivery } from 'react-icons/tb'
import { RiBillLine } from 'react-icons/ri'

const STEP_ICONS = [<TbToolsKitchen2Off />, <RiBillLine />, <TbTruckDelivery />]
const STEP_COUNTS = [
  <TbCircleNumber1Filled />,
  <TbCircleNumber2Filled />,
  <TbCircleNumber3Filled />,
]

const STEPS = [
  {
    id: 1,
    heading: 'Choose your food',
    para: 'Browse the menu and pick your favourite pizzas, sides and drinks.',
  },
  {
    id: 2,
    heading: 'Pay your bill',
    para: 'Checkout in seconds with cash on delivery or a mobile wallet.',
  },
  {
    id: 3,
    heading: 'Get the delivery',
    para: 'Track your rider live and enjoy hot pizza in about 50 minutes.',
  },
]

const FreshPizza = () => {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const path = pathRef.current
      let length = 0
      if (path && path.getTotalLength) {
        length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      }

      const steps = gsap.utils.toArray('.fp-step')
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=140%',
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      })

      if (path) timeline.to(path, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)
      steps.forEach((step, index) => {
        timeline.fromTo(
          step,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.4 },
          index * 0.28
        )
      })

      return () => {
        gsap.set(steps, { clearProps: 'all' })
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#fcfcfc]">
      <div ref={pinRef} className="mx-auto max-w-6xl px-5 py-10">
        <Heading title="Fresh Pizza. Delivered." />
        <div className="relative mt-8">
          <svg
            className="pointer-events-none absolute left-0 top-8 hidden h-24 w-full lg:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M30 40 C 240 -10, 360 90, 500 40 S 760 -10, 970 40"
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
              strokeDasharray="6 12"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>

          <div className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className="fp-step relative flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
                  <span className="absolute -right-1 -top-1 text-3xl text-orange-200">{STEP_COUNTS[index]}</span>
                  <span className="text-3xl text-orange-500">{STEP_ICONS[index]}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-800">{step.heading}</h3>
                <p className="mt-2 text-sm text-zinc-500">{step.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreshPizza

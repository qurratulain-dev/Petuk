import wehate from '../assets/wehate.jpg'
import { TiTick } from 'react-icons/ti'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { motion } from 'framer-motion'
import ImageReveal from './ui/ImageReveal'
import SectionHeading from './ui/SectionHeading'
import { Stagger, StaggerItem } from './motion/Reveal'

const CHECKLIST = [
  'Live rider tracking from kitchen to door',
  'Insulated bags so every slice stays hot',
  'Smart routing that skips the traffic',
  "On-time promise, or your next one's on us",
]

const WeHate = () => {
  return (
    <section className="bg-[#fcfcfc]">
      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-10 px-5 py-20 sm:px-10 md:flex-row">
        <div className="flex flex-1 flex-col">
          <SectionHeading
            align="left"
            eyebrow="On time, every time"
            title="We Hate Late!"
            subtitle="Great pizza should never sit around getting cold. Our kitchen, riders and routing all work to one promise — your order arrives hot, fresh and right on time."
          />

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-500">
            From the moment your order is confirmed we start the clock. A dedicated rider is
            assigned, your box is sealed for warmth, and you can follow every turn until it reaches
            your door.
          </p>

          <Stagger className="my-6 flex flex-col gap-1">
            {CHECKLIST.map((item) => (
              <StaggerItem key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                  <TiTick />
                </span>
                <p className="text-sm text-zinc-600">{item}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="relative flex flex-1 flex-col">
          {/* floating call box */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-5 left-1/2 z-10 flex w-[calc(100%-1rem)] max-w-[18rem] -translate-x-1/2 -rotate-12 items-center justify-center gap-2 rounded bg-white p-3 shadow-lg md:left-auto md:right-0 md:w-[20vw] md:max-w-none md:translate-x-0"
          >
            <MdOutlinePhoneInTalk className="shrink-0 text-4xl text-orange-500 sm:text-5xl" />
            <div>
              <p className="text-sm font-light capitalize text-zinc-500">call for order</p>
              <p className="text-lg font-bold text-zinc-800 sm:text-2xl">1(789)00123</p>
            </div>
          </motion.div>

          <ImageReveal
            src={wehate}
            alt="A fresh Petuk pizza ready for delivery"
            className="h-[55vh] w-full md:h-[70vh]"
            radius="rounded-full"
            cursor="View"
            parallax
            parallaxStrength={44}
          />
        </div>
      </div>
    </section>
  )
}

export default WeHate

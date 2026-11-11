import { motion, useReducedMotion } from 'framer-motion'
import { GiFullPizza } from 'react-icons/gi'

const Footer = () => {
  const reduce = useReducedMotion()

  return (
    <section className="overflow-hidden bg-[#fcfcfc]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex basis-[40%] flex-col items-center md:items-start">
          <div className="flex items-center gap-1">
            <GiFullPizza size={32} color="coral" />
            <h2 className="text-xl font-bold text-zinc-700">Petuk</h2>
          </div>
          <ul className="my-3 flex items-center space-x-5 text-sm text-zinc-500">
            {['Facebook', 'Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
              <li key={social} className="link-underline cursor-pointer">
                {social}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex basis-[40%] justify-around">
          <div>
            <h2 className="pt-14 text-xl font-semibold text-zinc-800">Quick Links</h2>
            <ul className="mt-3 flex flex-col text-sm leading-7 text-zinc-500">
              {['Pizza', 'Burger', 'Cake', 'Chocolate', 'Ice Cream'].map((link) => (
                <li key={link} className="link-underline w-fit cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="pt-14 text-xl font-semibold text-zinc-800">Important Links</h2>
            <ul className="mt-3 flex flex-col text-sm leading-7 text-zinc-500">
              {['About', 'News', 'Shop', 'FAQ', 'Contact'].map((link) => (
                <li key={link} className="link-underline w-fit cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex basis-[20%] flex-col items-center justify-center md:mt-0">
          <h2 className="text-xl font-semibold text-zinc-800">Opening Hours</h2>
          <ul className="mt-3 flex flex-col text-sm leading-7 text-zinc-500">
            <li>Sat: 8pm-5pm</li>
            <li>Sun-Thurs: 12pm-8pm</li>
            <li>
              Friday: <span className="text-red-500">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Big animated wordmark revealed on scroll */}
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden">
          <motion.h2
            initial={reduce ? false : { y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="select-none bg-gradient-to-b from-orange-500/80 to-orange-200/40 bg-clip-text text-center text-[22vw] font-black leading-none text-transparent"
          >
            Petuk
          </motion.h2>
        </div>
      </div>

      <hr className="mx-auto h-px max-w-6xl bg-gray-300" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-10 py-5 md:flex-row">
        <p className="text-sm font-light text-zinc-500">
          © 2025 Petuk. All rights reserved by{' '}
          <span className="text-sm font-light text-amber-500">themeix</span>
        </p>
        <ul className="flex items-center justify-center gap-5 text-right text-sm text-zinc-500">
          <li className="link-underline cursor-pointer">impressum</li>
          <li className="link-underline cursor-pointer">cookie policy</li>
          <li className="link-underline cursor-pointer">AGBs</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer

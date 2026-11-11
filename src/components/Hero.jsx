import React from 'react'
import { motion } from 'framer-motion'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.webp'
import appStore from '../assets/app_store.png'
import playStore from '../assets/play_store.png'

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Hero = () => {
    return (
        <section className='bg-amber-50 overflow-hidden'>
            <div className='max-w-6xl mx-auto px-5 py-10 pt-[19vh] flex '>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className=' flex flex-col justify-center items-start flex-1'
                >
                    <motion.div variants={item} className='flex justify-center items-center space-x-1 bg-orange-200 px-2 py-1 rounded-lg w-48 mb-5'>
                        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
                            <TbTruckDelivery size={24} color='coral' />
                        </motion.span>
                        <p className='text-[10px] text-zinc-500'>Faster Delivery Guaranteed</p>
                    </motion.div>
                    <motion.h2 variants={item} className='lg:text-6xl text-5xl font-bold text-zinc-800 lg:leading-16 leading-12'>
                        You would Love <br /> our <span className='text-orange-500'>Hot Pizza</span>
                    </motion.h2>
                    <motion.p variants={item} className='text-sm text-zinc-500 my-7 w-4xs'>
                        Get 10% instant off for all order and $200 signup bonus <br /> today for new registration!
                    </motion.p>
                    <motion.div variants={item} className='flex flex-wrap items-center gap-3 mb-6'>
                        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/shop" className='inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-orange-300/50'>
                                Order Now
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={item} className='flex justify-center items-center gap-2'>
                        {
                            heroArray.map((i) => (
                                <motion.a
                                    key={i.id}
                                    whileHover={{ y: -4 }}
                                    href={i.href}
                                    target="_blank"
                                    rel={i.rel}>
                                    <img src={i.img} alt={i.alt} className="w-40 h-14" />
                                </motion.a>
                            ))
                        }
                    </motion.div>
                </motion.div>

                <div className='flex-1 lg:flex justify-end hidden relative'>
                    {/* soft spinning glow behind the pizza */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                        className='absolute right-10 top-1/2 -translate-y-1/2 w-[34vw] h-[34vw] rounded-full border-2 border-dashed border-orange-300/70'
                    />
                    <motion.img
                        src={hero}
                        alt="Pizza pic"
                        className='w-[50vw] h-[80vh] relative'
                        initial={{ opacity: 0, x: 120, rotate: -8 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </div>
        </section>
    )
}
const heroArray = [
    {
        id: 1,
        href: "https://play.google.com/store",
        rel: "noopener noreferrer",
        img: playStore,
        alt: "Play Store",
    },
    {
        id: 2,
        href: "https://www.apple.com/app-store/",
        rel: "noopener noreferrer",
        img: appStore,
        alt: "App Store",
    },
]

export default Hero

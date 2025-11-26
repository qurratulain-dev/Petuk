import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import hero from '../assets/hero.webp'
import appStore from '../assets/app_store.png'
import playStore from '../assets/play_store.png'

const Hero = () => {
    return (
        <section className='bg-amber-50'>
            <div className='max-w-6xl mx-auto px-5 py-10 pt-[19vh] flex '>
                <div className=' flex flex-col justify-center items-start flex-1'>
                    <div className='flex justify-center items-center space-x-1 bg-orange-200 px-2 py-1 rounded-lg w-48 mb-5'>
                        <TbTruckDelivery size={24} color='coral' />
                        <p className='text-[10px] text-zinc-500'>Faster Delivery Guaranteed</p>
                    </div>
                    <h2 className='lg:text-6xl text-5xl font-bold text-zinc-800 lg:leading-16 leading-12'>You would Love <br /> our <span className='text-orange-500'>Hot Pizza</span> </h2>
                    <p className='text-sm text-zinc-500 my-7 w-4xs'>Get 10% instant off for all order and $200 signup bonus <br /> today forn new registration!</p>
                    <div className='flex justify-center items-center gap-2'>
                        {
                            heroArray.map((item) => (
                                <a
                                key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel={item.rel}>
                                    <img src={item.img} alt={item.alt} className="w-40 h-14" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className='flex-1 lg:flex justify-end hidden '>
                    <img src={hero} alt="Pizza pic" className='w-[50vw] h-[80vh]' />
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

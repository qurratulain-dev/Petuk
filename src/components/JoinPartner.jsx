import React from 'react'
import SectionHeading from './ui/SectionHeading'
import { TbToolsKitchen2, TbTruckDelivery } from 'react-icons/tb'
import { BsAward } from 'react-icons/bs'
import { FaShop } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { Stagger, StaggerItem } from './motion/Reveal'
import Magnetic from './ui/Magnetic'

const JoinPartner = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-5 py-10 relative'>
                <SectionHeading
                    className="mb-6"
                    eyebrow="Grow with Petuk"
                    title="Join as Partner"
                    subtitle="Bring your kitchen or your wheels — we will bring the customers."
                />
                <Stagger className='flex justify-center items-stretch gap-10 flex-col md:flex-row'>
                    {
                        joinPartnerArray.map((item) => (
                            <StaggerItem key={item.id} whileHover={{ y: -8 }} className='group bg-white ring-1 ring-zinc-100 shadow-lg transition-shadow duration-500 hover:shadow-2xl hover:shadow-orange-200/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center relative mt-16 mb-5 w-full max-w-sm'>
                                <div className='bg-white w-28 h-28 text-6xl text-orange-500 flex justify-center items-center rounded-full absolute -top-14 ring-8 ring-[#fcfcfc] shadow-md'>{item.icon}</div>
                                <h2 className='text-zinc-800 font-semibold text-xl mt-5'>{item.name}</h2>
                                <p className='text-zinc-500 text-sm my-5 '>{item.para}</p>
                                <Magnetic>
                                    <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className='btn-sweep px-4 py-2 text-white bg-orange-500 flex justify-center items-center gap-2 rounded-full'>{item.smallicon}{item.button}</motion.button>
                                </Magnetic>
                            </StaggerItem>
                        ))
                    }
                </Stagger>
            </div>
        </section>
    )
}
const joinPartnerArray = [
    {
        id: 1,
        icon: <TbToolsKitchen2 />,
        name: "Become a vendor",
        para: "Put your kitchen on the map. Reach thousands of hungry customers and grow your sales with no setup fees.",
        smallicon: <FaShop />,
        button: "Open a shop",
    },
    {
        id: 2,
        icon: <BsAward />,
        name: "Become a Delivery Hero",
        para: "Ride on your own schedule, earn on every drop, and keep the city fed one hot box at a time.",
        smallicon: <TbTruckDelivery />,
        button: "Become a Hero",
    },
]

export default JoinPartner

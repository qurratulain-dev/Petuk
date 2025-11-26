import React from 'react'
import Heading from './Heading'
import { TbToolsKitchen2, TbTruckDelivery } from 'react-icons/tb'
import { BsAward } from 'react-icons/bs'
import { FaShop } from 'react-icons/fa6'

const JoinPartner = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-5 py-10 relative'>
                <Heading title={"Join as Partner"}/>
                <div className='flex justify-center items-center gap-5 mt-10'>
                    {
                        joinPartnerArray.map((item) => (
                            <div className='bg-white shadow p-10 flex flex-col items-center justify-center text-center relative'>
                                <div className='bg-white w-28 h-28 text-6xl text-orange-500 flex justify-center items-center rounded-full absolute -top-14'>{item.icon}</div>
                                <h2 className='text-zin font-semibold text-xl mt-5'>{item.name}</h2>
                                <p className='text-zinc-500 text-sm my-5 '>{item.para}</p>
                                <button className='px-4 py-2 text-white bg-orange-500 flex justify-center items-center gap-2 rounded-full'>{item.smallicon}{item.button}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
const joinPartnerArray = [
    {
        id: 1,
        icon: <TbToolsKitchen2 />,
        name: "Become a vendor",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed?  dolor sit amet consectetur",
        smallicon: <FaShop />,
        button: "Open a shop",
    },
    {
        id: 2,
        icon: <BsAward />,
        name: "Become a Delivery Hero",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed? onsectetur adipisicing elit.",
        smallicon: <TbTruckDelivery />,
        button: "Become a Hero",
    },
]

export default JoinPartner

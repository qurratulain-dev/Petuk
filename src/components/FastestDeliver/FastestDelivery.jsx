import React from 'react'
import Heading from '../Heading'
import deliveryboy from '../../assets/deliveryboy.avif'
import { ImSpoonKnife } from 'react-icons/im'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbTruckDelivery } from 'react-icons/tb'

const FastestDelivery = () => {
    return (
        <section className='bg-[#fcfcfc]'>
            <div className='max-w-6xl mx-auto px-5 py-5'>
                <Heading title={"Fast Delivey"} />
                <div className='flex justify-between items-center'>
                    <div className='flex-1'>
                        <img src={deliveryboy} alt="Delivery Boy" className='h-[65vh] w-[40vw]'/>
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            {
                                FastestDeliverArray.map((item) => (
                                    <div key={item.id}
                                    className='flex justify-center items-center gap-16 relative px-6 py-5 bg-white shadow-sm '>
                                        <div className='flex justify-center items-center'>
                                            <span className='bg-orange-500/20 h-8 w-8 rounded-full rounded-tl-5xl rounded-tr-2xl rounded-br-lg  left-7 top-10 rounded-bl-lg rotate-90 absolute'></span>
                                            <div className='absolute text-3xl text-orange-500 left-5'>{item.icon}</div>
                                        </div>
                                        <div>
                                            <h2 className='text-zinc-800 text-md font-semibold'>{item.name}</h2>
                                            <p className='text-sm text-zinc-500 '>{item.para}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const FastestDeliverArray = [
    {
        id: 1,
        icon: <ImSpoonKnife />,
        name: "Order food from menu",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium!"
    },
    {
        id: 2,
        icon: <FaMoneyBill1Wave />,
        name: "Pay your food bill",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium!"
    },
    {
        id: 3,
        icon: <TbTruckDelivery />,
        name: "Get delivery within 50 mints",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laudantium!"
    },
]

export default FastestDelivery

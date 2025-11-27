import React from 'react'
import Heading from '../Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbToolsKitchen2Off, TbTruckDelivery } from 'react-icons/tb'
import { RiBillLine } from 'react-icons/ri'

const ThreeSteps = () => {
    return (
        <section>
            <div className='max-w-6xl mx-auto px-5 py-5'>
                <Heading title={"3 Steps to delivery"} />
                <div className='flex flex-col lg:flex-row justify-center items-center bg-white shadow gap-5 mt-8 overflow-hidden'>
                    {FreshPizzaArray.map((item, index) => (
                        <div
                            key={item.id}
                            className={`px-3 py-10 flex flex-col justify-center items-center text-center shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 lg:shadow-none lg:hover:shadow-none
                                ${index === 1 ? 'lg:border border-dashed border-t-transparent border-b-transparent border-orange-500' : ''
                                }`}>
                            <div className='flex justify-center items-center relative'>
                                <span className='bg-orange-500/20 h-10 w-10 rounded-full rounded-tl-5xl rounded-tr-2xl rounded-br-lg rounded-bl-lg rotate-90  left-3 top-1 absolute'></span>
                                <div className='text-4xl text-orange-500'>{item.icon}</div>
                                <div className='text-zinc-200'>{item.countingIcon}</div>
                            </div>
                            <h2 className='text-zinc-800 text-xl my-3 font-semibold'>{item.heading}</h2>
                            <p className='text-zinc-500 text-sm'>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
const FreshPizzaArray = [
    {
        id: 1,
        icon: <TbToolsKitchen2Off />,
        countingIcon: <TbCircleNumber1Filled className='text-4xl absolute -top-4 -right-18' />,
        heading: "Choose your food",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque."
    },
    {
        id: 2,
        icon: <RiBillLine />,
        countingIcon: <TbCircleNumber2Filled className='text-6xl absolute -top-8 -right-32' />,
        heading: "Pay your bill",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque."
    },
    {
        id: 3,
        icon: <TbTruckDelivery />,
        countingIcon: <TbCircleNumber3Filled className='text-4xl absolute -top-4 -right-18' />,
        heading: "Get the delivery",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, doloremque."
    },
]
export default ThreeSteps

import React from 'react'
import { HiMiniReceiptPercent } from 'react-icons/hi2'
import slice from '../assets/slice.jpg'

const SelectedShops = () => {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-10 py-5 '>
        <div className='flex justify-center items-center bg-orange-100 gap-5 my-10 p-2 rounded-lg border border-dashed border-orange-500'>
          <div className='flex gap-1 text-orange-500 font-bold text-2xl'>
            <div className='text transform -rotate-90'>
              <HiMiniReceiptPercent size={28} />
            </div>
            <p>BF050</p>
          </div>
          <p className='text-zinc-500 text-sm'>Get $50 discount from our selected shops</p>
        </div>
        <div className='flex justify-center items-center gap-10 mt-20'>
          {
            selectedShopsArray.map((item) => (
              <div className='bg-orange-50 border border-dashed border-orange-500 flex-1 rounded-lg'>
                <div className='flex justify-end items-end overflow-hidden rounded-tr-lg'>
                  <img src={item.image} alt={item.name} className=' h-52 w-72 rounded-tr-lg  object-cover transition-transform duration-300 hover:scale-105' />
                </div>
                <div className='flex flex-col px-10 -pt-10'>
                  <p className='text-3xl text-orange-500 font-bold'>{item.date}</p>
                  <h2 className='text-2xl text-zinc-800 font-bold my-2'>{item.name}</h2>
                  <p className='text-sm text-zinc-500 font-light mb-10'>{item.para}</p>
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
const selectedShopsArray = [
  {
    id: 1,
    image: slice,
    date: "14th July",
    name: "Special Pizza Party",
    para: "Get free home delivery today",
  },
  {
    id: 2,
    image: slice,
    date: "10% off",
    name: "Everet Pizza today",
    para: "Get free home delivery today",
  },
]
export default SelectedShops

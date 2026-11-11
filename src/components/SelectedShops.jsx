import React from 'react'
import { HiMiniReceiptPercent } from 'react-icons/hi2'
import hero from '../assets/hero.webp'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'
import ImageReveal from './ui/ImageReveal'

const SelectedShops = () => {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-6xl mx-auto px-10 py-10 '>
        <Reveal>
        <div className='flex justify-center items-center bg-orange-100 gap-5 my-10 p-2 rounded-lg border border-dashed border-orange-500'>
          <div className='flex gap-1 text-orange-500 font-bold text-2xl'>
            <div className='text transform -rotate-90'>
              <HiMiniReceiptPercent size={28} />
            </div>
            <p>BF050</p>
          </div>
          <p className='text-zinc-500 text-sm'>Get $50 discount from our selected shops</p>
        </div>
        </Reveal>
        <Stagger className='flex flex-col md:flex-row justify-center items-center gap-10 mt-20'>
          {
            selectedShopsArray.map((item) => (
              <StaggerItem key={item.id} whileHover={{ y: -8 }} className='bg-orange-50 border border-dashed border-orange-500 flex-1 rounded-lg mt-5 w-full'>
                <div className='flex justify-end items-start overflow-hidden rounded-tr-lg'>
                  <ImageReveal
                    src={item.image}
                    alt={item.name}
                    className='h-40 w-56 lg:w-[300px]'
                    radius='rounded-tr-lg'
                    cursor='View'
                  />
                </div>
                <div className='flex flex-col px-10 -pt-10'>
                  <p className='text-3xl text-orange-500 font-bold'>{item.date}</p>
                  <h2 className='text-2xl text-zinc-800 font-bold my-2'>{item.name}</h2>
                  <p className='text-sm text-zinc-500 font-light mb-10'>{item.para}</p>
                </div>
              </StaggerItem>
            ))
          }
        </Stagger>

      </div>
    </section>
  )
}
const selectedShopsArray = [
  {
    id: 1,
    image: hero,
    date: "14th July",
    name: "Special Pizza Party",
    para: "Get free home delivery today",
  },
  {
    id: 2,
    image: hero,
    date: "10% off",
    name: "Everet Pizza today",
    para: "Get free home delivery today",
  },
]
export default SelectedShops

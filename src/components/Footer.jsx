import React from 'react'
import { GiFullPizza } from 'react-icons/gi'
import appStore from '../assets/app_store.png'
import playStore from '../assets/play_store.png'

const Footer = () => {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-5 py-10 flex md:justify-between md:items-center md:flex-row flex-col gap-5'>
        <div className='basis-[40%] flex flex-col items-center md:items-start'>
          <div className='flex items-center gap-1'>
            <GiFullPizza size={32} color='coral' />
            <h2 className='font-bold text-xl text-zinc-700'>Petuk</h2>
          </div>
          <ul className='text-sm text-zinc-500 flex items-center space-x-5 my-3'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Pinterest</li>
          </ul>
          <h2 className='text-zinc-800 text-xl font-bold mt-10 py-4'>Ready to get started?</h2>
          <div className='flex gap-2'>
            {
              heroArray.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel={item.rel}>
                  <img src={item.img} alt={item.alt} className="w-28 h-10" />
                </a>
              ))
            }
          </div>
        </div>
        {/* 2 links */}
        <div className='flex basis-[40%] justify-around'>
        {/* quick links */}
        <div className=''>
          <h2 className='text-zinc-800 text-xl font-semibold pt-14'>Quick Links</h2>
          <ul className='flex flex-col text-sm text-zinc-500 leading-7 mt-3'>
            <li >Pizza</li>
            <li>Burger</li>
            <li>cake</li>
            <li>Chcolate</li>
            <li>Ice Cream</li>
          </ul>
        </div>
        {/* important links */}
        <div className=''>
          <h2 className='text-zinc-800 text-xl font-semibold pt-14'>Important Links</h2>
          <ul className='flex flex-col text-sm text-zinc-500 leading-7 mt-3'>
            <li>About</li>
            <li>News</li>
            <li>Shop</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>
        {/* opening hours */}
        <div className='basis-[20%] flex flex-col justify-center items-center mt-5 md:mt-0'>
          <h2 className='text-zinc-800 text-xl font-semibold'>Opening Hours</h2>
          <ul className='flex flex-col text-sm text-zinc-500 leading-7 mt-3'>
            <li>Sat: 8pm-5pm</li>
            <li>Sun-Thurs: 12pm-8pm</li>
            <li>Friday: <span className='text-red-500'>Closed</span></li>
          </ul>
        </div>
      </div>
<hr className='max-w-6xl mx-auto h-px bg-gray-500 text-gray-500'/>
      <div className='max-w-6xl mx-auto px-10 flex justify-between items-center py-5 flex-col md:flex-row gap-5'>
        <p className='text-zinc-500 text-sm font-light'>@ 2025 Petuk.All right reserved by <span className='text-amber-300 text-sm font-light'>themeix</span></p>
        <ul className='flex justify-center items-center gap-5 text-sm text-zinc-500 text-right'>
          <li>impresum</li>
          <li>cookie plicy</li>
          <li>AGBs</li>
        </ul>
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
export default Footer

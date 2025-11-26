import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <header className='fixed top-0 left-0 right-0 bg-amber-50 z-50'>
      <nav className='max-w-6xl mx-auto px-5 py-5 flex justify-between items-center h-[13vh] '>
        <div className='flex justify-center items-center gap-1'>
          <GiFullPizza size={32} color='coral' />
          <h2 className='font-bold text-xl text-zinc-700'>Petuk</h2>
        </div>

        <div>
          <ul className='flex justify-between items-center space-x-10'>
            {navArray.map((item) => (
              <li 
              key={item.id}
              onClick={() => setActiveLink(item.id)}
              className={`relative cursor-pointer transition-colors duration-200 ${
                activeLink === item.id ? 'text-orange-500 font-semibold' : 'text-zinc-800'
              }`}>
              {activeLink === item.id && (
                <FaPizzaSlice size={14} className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500" />
              )}
            
              <Link to={item.path}>{item.name}</Link>
            </li>
            
            ))}
          </ul>
        </div>

        <div className=' flex space-x-8'>
          <div className='flex flex-col text-right '>
            <p className='text-[10px] text-zinc-500'>call for order</p>
            <p className='text-2xl text-orange-500'>1-231-675</p>
          </div>
          <div className='border-l border-orange-500'></div>
          <div className='flex items-center justify-center space-x-3'>
            <IoCartOutline size={28} />
            <IoSearch size={28} />
          </div>
        </div>
      </nav>
    </header>
  )
}

const navArray = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Restaurants", path: "/restaurants" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  

export default Nav;

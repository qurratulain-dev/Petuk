import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import MobileNav from './MobileNav';

const Nav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-amber-50 z-50'>
      <nav className='max-w-6xl mx-auto px-5 py-5 flex justify-between items-center h-[13vh]'>
        {/* Logo */}
        <div className='flex justify-center items-center gap-1'>
          <GiFullPizza size={32} color='coral' />
          <h2 className='font-bold text-xl text-zinc-700'>Petuk</h2>
        </div>
        {/* links */}
        <ul className='hidden md:flex justify-between items-center space-x-10'>
          {navArray.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                className={`relative cursor-pointer transition-colors duration-200 ${isActive ? 'text-orange-500 font-semibold' : 'text-zinc-800'
                  }`}>
                {isActive && (
                  <FaPizzaSlice size={14} className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500" />
                )}
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* Right Section  */}
        <div className='flex items-center space-x-5'>
          <div className='flex space-x-3 justify-center items-center md:hidden'>
            <Link to="/cart">
              <IoCartOutline size={28} />
            </Link>
            <IoSearch size={28} />
          </div>
          <div className='hidden md:flex md:space-x-8'>
            <div className='flex flex-col text-right '>
              <p className='text-[10px] text-zinc-500'>call for order</p>
              <p className='text-2xl text-orange-500'>1-231-675</p>
            </div>

            <div className='hidden md:flex border-l border-orange-500'></div>

            <div className='flex space-x-3 justify-center items-center'>
              <Link to="/cart">
                <IoCartOutline size={28} />
              </Link>
              <IoSearch size={28} />
            </div>
          </div>

          {/* Hamburger Icon */}
          <button className='md:hidden' onClick={() => setMobileOpen(true)}>
            <HiMenu size={32} />
          </button>
        </div>
      </nav>
      <MobileNav
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navArray={navArray}
        location={location}
        handleLinkClick={handleLinkClick}
      />

    </header>
  );
};

const navArray = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
  { id: 3, name: "Shop", path: "/shop" },
];

export default Nav;

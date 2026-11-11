import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FaPizzaSlice } from 'react-icons/fa';
import { GiFullPizza } from 'react-icons/gi'
import { IoCartOutline, IoSearch } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import MobileNav from './MobileNav';
import { useCart } from '../../context/CartContext';

const CartIcon = () => {
  const { count } = useCart()
  return (
    <Link to="/cart" className='relative' aria-label="Cart">
      <IoCartOutline size={28} />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            // new key on every count change -> badge pops again
            key={count}
            initial={{ scale: 0.3 }}
            animate={{ scale: [1.6, 1] }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className='absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-semibold flex items-center justify-center'
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  )
}

const Nav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 30));

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-amber-50/90 backdrop-blur-md shadow-md' : 'bg-amber-50'
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-5 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-[9vh] min-h-16' : 'h-[13vh]'
        }`}
      >
        {/* Logo */}
        <Link to="/" className='flex justify-center items-center gap-1'>
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
            <GiFullPizza size={32} color='coral' />
          </motion.div>
          <h2 className='font-bold text-xl text-zinc-700'>Petuk</h2>
        </Link>
        {/* links */}
        <ul className='hidden md:flex justify-between items-center space-x-10'>
          {navArray.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                className={`relative cursor-pointer transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500 font-semibold' : 'text-zinc-800'}`}>
                {isActive && (
                  // layoutId makes the slice glide from the old link to the new one
                  <motion.span
                    layoutId="nav-slice"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500"
                  >
                    <FaPizzaSlice size={14} />
                  </motion.span>
                )}
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* Right Section  */}
        <div className='flex items-center space-x-5'>
          <div className='flex space-x-3 justify-center items-center md:hidden'>
            <CartIcon />
            <IoSearch size={28} />
          </div>
          <div className='hidden md:flex md:space-x-8'>
            <div className='flex flex-col text-right '>
              <p className='text-[10px] text-zinc-500'>call for order</p>
              <p className='text-2xl text-orange-500'>1-231-675</p>
            </div>

            <div className='hidden md:flex border-l border-orange-500'></div>

            <div className='flex space-x-3 justify-center items-center'>
              <CartIcon />
              <IoSearch size={28} />
            </div>
          </div>

          {/* Hamburger Icon */}
          <button className='md:hidden' onClick={() => setMobileOpen(true)} aria-label="Open menu">
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
    </motion.header>
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

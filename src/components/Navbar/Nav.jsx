import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FaPizzaSlice } from 'react-icons/fa'
import { GiFullPizza } from 'react-icons/gi'
import { IoCartOutline } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'
import { useCart } from '../../context/CartContext'
import { useCartUI } from '../../context/CartUIContext'

const CartIcon = () => {
  const { count } = useCart()
  const { openCart } = useCartUI()
  return (
    <button onClick={openCart} className="relative" aria-label="Open cart" data-cart-icon>
      <IoCartOutline size={28} />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.3 }}
            animate={{ scale: [1.6, 1] }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[11px] font-semibold text-white"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

const Nav = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 30)
    const diff = value - lastY.current
    if (value > 140 && diff > 4) setHidden(true)
    else if (diff < -4 || value <= 140) setHidden(false)
    lastY.current = value
  })

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-amber-50/85 shadow-md backdrop-blur-md' : 'bg-amber-50'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-[11vh] min-h-[64px]'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-1">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
            <GiFullPizza size={32} color="coral" />
          </motion.div>
          <h2 className="text-xl font-bold text-zinc-700">Petuk</h2>
        </Link>

        {/* links */}
        <ul className="hidden items-center space-x-8 md:flex">
          {navArray.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li
                key={item.id}
                className={`relative cursor-pointer transition-colors duration-200 hover:text-orange-500 ${
                  isActive ? 'font-semibold text-orange-500' : 'text-zinc-800'
                }`}
              >
                {isActive && (
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
            )
          })}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-3 md:hidden">
            <CartIcon />
          </div>
          <div className="hidden md:flex md:space-x-8">
            <div className="flex items-center space-x-3">
              <CartIcon />
            </div>
          </div>

          {/* Hamburger Icon */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
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
  )
}

const navArray = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 4, name: 'Blog', path: '/blog' },
  { id: 5, name: 'Contact', path: '/contact' },
  { id: 3, name: 'Shop', path: '/shop' },
  { id: 6, name: 'Orders', path: '/orders' },
]

export default Nav

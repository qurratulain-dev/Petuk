import { Outlet, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './Navbar/Nav'
import Footer from './Footer'
import { Reveal } from './motion/Reveal'
import SmoothScroll from './SmoothScroll'
import Preloader from './ui/Preloader'
import PageTransition from './ui/PageTransition'
import CustomCursor from './ui/CustomCursor'
import ScrollToTop from './ui/ScrollToTop'
import CartDrawer from './CartDrawer'
import { CartUIProvider } from '../context/CartUIContext'

const Layout = () => {
  const { pathname } = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return (
    <CartUIProvider>
      <SmoothScroll />
      <Preloader />
      <PageTransition />
      <CustomCursor />
      <ScrollToTop />
      <CartDrawer />

      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-orange-500"
      />

      <Nav />

      {/* opacity-only so no leftover transform breaks fixed backgrounds / pinning */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>

      <Reveal y={30}>
        <Footer />
      </Reveal>
    </CartUIProvider>
  )
}

export default Layout

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./Navbar/Nav";
import Footer from "./Footer";
import { Reveal } from "./motion/Reveal";

const Layout = () => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  // Start every page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[60]"
      />
      <Nav />
      {/* key = route, so every page fades/slides in on navigation */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <Reveal y={30}>
        <Footer />
      </Reveal>
    </>
  );
};

export default Layout;

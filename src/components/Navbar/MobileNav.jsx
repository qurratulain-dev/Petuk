import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MobileNav = ({ mobileOpen, setMobileOpen, navArray, location, handleLinkClick }) => {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 md:hidden z-40"
          />
          {/* Sidebar */}
          <motion.div
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 h-full w-72 bg-amber-50 shadow-xl z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <HiX
                size={32}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer"
              />
            </div>
            {/* Links slide in one after another */}
            <motion.ul
              className="flex flex-col space-y-5 px-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            >
              {navArray.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li
                    key={item.id}
                    variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
                    onClick={handleLinkClick}
                    className={`cursor-pointer text-lg ${isActive ? "text-orange-500 font-semibold" : "text-zinc-700"}`}>
                    <Link to={item.path} className="block">{item.name}</Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

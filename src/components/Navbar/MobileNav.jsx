import React from 'react'
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MobileNav = ({ mobileOpen, setMobileOpen, navArray, location, handleLinkClick }) => {
  return (
    <div>
      {/*  Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-amber-50 shadow-xl z-50 transform transition-transform duration-300 md:hidden
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Cross */}
        <div className="flex justify-end p-4">
          <HiX
            size={32}
            onClick={() => setMobileOpen(false)}
            className="cursor-pointer"
          />
        </div>
        {/*  Links */}
        <ul className="flex flex-col space-y-5 px-6">
          {navArray.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                onClick={handleLinkClick}
                className={`cursor-pointer text-lg ${
                  isActive ? "text-orange-500 font-semibold" : "text-zinc-700"
                }`} >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

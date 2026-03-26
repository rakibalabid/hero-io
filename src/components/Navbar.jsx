import React from 'react';
import { FaGithub } from "react-icons/fa";
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to={"/"} className={({isActive}) =>
                isActive ? "text-[#7C3AED] font-bold border-b-2 border-[#7C3AED]" 
                :"text-gray-600 hover:text-[#7C3AED]" }>
                    Home

                </NavLink>
            </li>
            <li>
                <NavLink to={"/apps"} className={({isActive}) =>
                isActive ? "text-[#7C3AED] font-bold border-b-2 border-[#7C3AED]" 
                :"text-gray-600 hover:text-[#7C3AED]" }>
                    Apps

                </NavLink>
            </li>
            <li>
                <NavLink to={"/installation"} className={({isActive}) =>
                isActive ? "text-[#7C3AED] font-bold border-b-2 border-[#7C3AED]" 
                :"text-gray-600 hover:text-[#7C3AED]" }>
                    Installation

                </NavLink>
            </li>
            {/* <li><a className="hover:text-primary transition-colors">Home</a></li> */}
            {/* <li><a className="hover:text-primary transition-colors">Apps</a></li>
            <li><a className="hover:text-primary transition-colors">Installation</a></li> */}
        </>
    );

    return (
        <div className="navbar bg-white px-4 md:px-8 border-b border-gray-100">
          <div className="navbar-start">
            {/* লোগো সেকশন */}
            
             <Link to="/" className="flex items-center gap-2">
               <img 
                src={Logo} 
                alt="HERO.IO Logo" 
                className="h-8 w-auto" 
                />
                <span className="text-xl font-bold text-[#0D172C]">HERO.IO</span>
              </Link>
          </div>

    <div className="navbar-center hidden lg:flex">
        {/* মেনু লিঙ্কস */}
        <ul className="menu menu-horizontal px-1 gap-6 text-[#5F6368] font-medium">
            {navLinks}
        </ul>
    </div>

    <div className="navbar-end">
        {/* কন্ট্রিবিউট বাটন */}
        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none normal-case rounded-lg px-5">
            <FaGithub className="text-lg" />
            Contribute
        </button>
    </div>
</div>

    );
};

export default Navbar;
// NEXTJS ROUTER GUIDE
"use client"
import Link from 'next/link'
import React from 'react'
// import NavLink from './NavLink'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import {Bars3Icon, XmarkIcon} from "@heroicons/react/24/solid"
// import MenuOverlay from './MenuOverlay'
import { Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek apakah ada data dalam localStorage dengan kunci '@token'
    const userToken = localStorage.getItem('@token');
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Hapus data dari localStorage
    localStorage.removeItem('@token');
    setIsLoggedIn(false);
    router.push('/')
  }
  return (
    // <nav className='fixed top-0 left-0 right-0 z-10 bg-[#0a192f] bg-opacity-100'>
    //   <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
    //     <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>🎱</Link>
    //     <div className='menu md:block md:w-auto' id='navbar'>
    //       <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
    //         <Link href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
    //         <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link>
    //         <Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
    //         <Link href={"/auth"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Login</Link>
    //       </ul>
    //     </div>
    //   </div>    
    // </nav>

    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#0a192f] bg-opacity-100'>
    {/* // <nav className='fixed top-0 left-0 right-0 z-10 bg-sky-300 bg-opacity-100 text-black'> */}
      <div className='flex items-center justify-between mx-auto px-2 md:px-4 py-2'>
        <Link href={"/"} className='cursor-pointer text-xl md:text-5xl text-white font-semibold'>🎱</Link>
        <div className='menu md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-4'>
            <ScrollLink to='about' spy={true} smooth={true} duration={500} className='cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</ScrollLink>
            <ScrollLink to='projects' spy={true} smooth={true} duration={500} className='cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</ScrollLink>
            <ScrollLink to='contact' spy={true} smooth={true} duration={500} className='cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</ScrollLink>
            {isLoggedIn ? (
              <>
                <Link href="/admin" passHref>
                  <div className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover-text-white'>Edit</div>
                </Link>
                <button onClick={handleLogout} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Logout</button>
              </>
            ) : (
              <Link href={"/auth"} passHref>
                <div className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover-text-white'>Login</div>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
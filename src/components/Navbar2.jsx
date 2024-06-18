import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
const Navbar2 = () => {
    const[top,setTop]=useState('-100vh')

    function handleMenuOpen(){
          setTop("0px")     
    }
    function handleMenuClose(){
        setTop("-100vh")     
  }
  return (
    <header className='flex relative items-center justify-between h-[70px] bg-[#10154c] px-[40px] text-white'>
        <div className='text-[25px] font-medium'>ROOMIES</div>
        <nav className={`top-[${top}] duration-200 flex gap-5  md:flex-row flex-col bg-[#10154c]  absolute top-0 left-0 w-[100%] items-center md:static h-[60vh] justify-center md:justify-normal md:w-auto md:h-auto`}>
            <div className='block md:hidden absolute top-[25px] right-[40px]'  onClick={handleMenuClose}><FaTimes /></div>
            <a href="">HOSTEL</a>
            <a href="">ROOM</a>
            <a href="">SEARCH</a>
            <a href="">MY BOOKINGS</a>
        </nav>
        <div className='block md:hidden' onClick={handleMenuOpen}><RiMenu3Line /></div>
    </header>
  )
}

export default Navbar2
import React, { useRef } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import "./Navbar1.css"

const Navbar1 = () => {
    let navRef=useRef();
    function handleMenuToggle(){
        navRef.current.classList.toggle("showNavbar")
    }
    

  return (
    <header className='header1' >
        <div className='logo'>Jitendra</div>
        <nav className="navbar" ref={navRef}>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Services</a>
            <a href="">Contact</a>
            <div className='menuClose' onClick={handleMenuToggle}><FaTimes/></div>
        </nav>
        <div className="menuIcon" onClick={handleMenuToggle}><RiMenu3Line/></div>

    </header>
  )
}

export default Navbar1
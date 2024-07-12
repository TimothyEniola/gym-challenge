import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.svg'
const Navbar = () => {
  return (
    <div className='seperate'>
          <div className='logo'><img src={Logo} alt="logo" /></div>

        <nav className='navbar'>
            <ul className='nav-links'>
               <li>Home</li>
                <li>About</li>
                <li>Classes</li>
                <li>Trainers</li>
                <li>News</li>
                <li>Contact</li>                
                <button>Book Class</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

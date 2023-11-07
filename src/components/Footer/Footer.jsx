import React from 'react'
import {Link} from 'react-router-dom'
import Home from "../../views/Home"
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import logo from '../../utils/images/Logo/NEOGN white.png'

const Footer = () => {
  return (
    <footer className='absolute left-0 w-full  h-[220px] bg-black text-white flex flex-col items-center justify-betweengit status  '>
     
      <Link to="/" ><img className='w-11 h-11 mt-10' src={logo} alt={logo}/> </Link>
      <ul className='flex flex-row space-x-6'>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/Search'>Search</Link></li>
        <li><Link to='/Wishlist'>Your Wishlist</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
        <li><Link to='/Account'>Your Profile</Link></li>
        
      </ul>
      <div className='flex flex-row space-x-11 '>
        <a className='w-14 h-14' href="https://facebook.com"><BsFacebook className="w-10 h-6"/></a>
        <a className='w-14 h-14' href="https://instagram.com"><BsInstagram className="w-10 h-6"/></a>
        <a className='w-14 h-14' href="https://twitter.com"><BsTwitter className="w-10 h-6"/></a>
      </div>
    </footer>
  )
}

export default Footer
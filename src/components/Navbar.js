import React,{useState}  from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='header'>
            <div>
            <Link to='/Contact'>
               <img className='logo' src="/logo.png" alt="logo" />
            </Link>

            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Skills'>Skills</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>

            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} styles={{color:'white'}}/>):(<FaBars size={20} styles={{color:'white'}}/>)}
                
            </div>
        </div>
    )
}

export default Navbar
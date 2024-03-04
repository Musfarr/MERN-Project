import React from 'react'
import { Form, Link } from 'react-router-dom'
import {FaSignInAlt , FaSignOutAlt ,FaUser} from 'react-icons/fa'





const Header = () => {
  return (
    <header className='header uk-container'>
        
        <div className='logo' >
            <Link to={"/"}> LOGO </Link>
        </div>

        <div>
            <ul>
                <li><Link to={"/"}> Home </Link> </li>
                <li><Link to={"/login"}><FaSignInAlt/> Login </Link> </li>
                <li><Link to={"/signup"}><FaUser/>Signup </Link> </li>
                <li><Link to={"/"}></Link>Contact </li>
            </ul>
        </div>
        
    </header>
  )
}

export default Header
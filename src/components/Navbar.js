import React, {useState} from 'react';
import './NavbarStyles.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }
        window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
       <Link to='/'><h1>BP</h1></Link>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/tourdates'>Tour Dates</Link>
            </li>

            <li>
                <Link to='/members'>Members</Link>
            </li>

            <li>
                <Link to='/music'>Music</Link>
            </li>
       </ul>  
       <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#FF1493'}} />) : (<FaBars size={20} style={{color: '#FFB6C1'}} />)}
       </div>
    </div>
  )
}

export default Navbar;

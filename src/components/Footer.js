import React from 'react';
import './FooterStyles.css';
import {FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
              <h4>FOLLOW BLACKPINK</h4>
              <a href='https://twitter.com/BLACKPINK'><FaTwitter size={50} style={{ color: '#FFB6C1'}}/></a>
              <a href='https://www.youtube.com/@BLACKPINK'><FaYoutube size={50} style={{ color: '#FFB6C1'}}/></a>
    </div>    
  )
};

export default Footer;

import React from 'react';
import './FooterStyles.css';
import {FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
          <div className='center'>
          <div className='SNS'>
              <h4><center>FOLLOW @BLACKPINK ON </center></h4>
              <a href='https://twitter.com/blackpink'><FaTwitter size={70} style={{ color: '#FFB6C1', marginLeft: '7rem' }} /> </a>
              <a href='https://www.youtube.com/@BLACKPINK'><FaYoutube size={70} style={{ color: '#FFB6C1', marginRight: '0rem' }} /> </a>
          </div>
          </div>
    </div>    
  )
}

export default Footer;

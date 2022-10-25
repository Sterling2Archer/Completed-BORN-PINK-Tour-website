import React from 'react'
import './FooterStyles.css'
import {FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
          <div className='center'>
          <div className='SNS'>
              <h4><center>FOLLOW @BLACKPINK ON </center></h4>
              <FaTwitter size={70} style={{ color: '#FFB6C1', marginLeft: '7rem' }} /> 
              <FaYoutube size={70} style={{ color: '#FFB6C1', marginRight: '0rem' }} />
          </div>
          </div>
    </div>    
  )
}

export default Footer

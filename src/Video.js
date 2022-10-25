import React from 'react'
import  './VideoStyles.css'
import {Link} from 'react-router-dom'
import tourIntro from '../assets/IYAIntro.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={tourIntro} type='video/mp4'  />
        </video>
      <div className='content'>
          <h1>BORNPINK WORLD TOUR: 2022-2023</h1>
          <p>BLINKS, are ya'll ready for BLACKPINK in Ya AREA?</p>
           <div>
               <Link to='/tourdates' className='btn btn-light'>Tour Dates</Link>
               <Link to='/music' className='btn btn-light'>Music</Link>    
             </div>
          </div>
      </div>
  )
}

export default Video

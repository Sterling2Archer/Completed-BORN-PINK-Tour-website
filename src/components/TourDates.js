import React from 'react';
import './TourDatesStyles.css';
import Dates2 from '../assets/Blackpink-Asia.jpeg';

const TourDates = () => {
  return (
    <div className='worldtour'>
      <div className='img-container'>
              <div className='image-stack top'>
                   <img src={Dates2} className='img' alt='' /> 
              </div>
      </div>
    </div>
  )
}

export default TourDates;

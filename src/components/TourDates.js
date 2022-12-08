import React from 'react';
import './TourDatesStyles.css';
import Dates1 from '../assets/Blackpink-Tour-2022.jpg.webp';

const TourDates = () => {
  return (
    <div className='tourdates1'>
            <div className='dates'>
                 <center><img src={Dates1} className='img' alt='' /> </center>
            </div>
    </div>
  )
}

export default TourDates;

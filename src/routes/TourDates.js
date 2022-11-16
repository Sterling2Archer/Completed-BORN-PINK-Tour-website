import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Stage from '../components/Stage'
import TourDatesCards from '../components/TourDates'


const TourDates = () => {
    return (
        <div>
            <Navbar />
            <Stage heading='BORN PINK WORLD TOUR 2022-2023' text='NEXT STOP: LOS ANGELES, CALIFORNIA NOVEMBER 19th, 2022' />
            <TourDatesCards />
            <Footer />
        </div>
    )
}

export default TourDates

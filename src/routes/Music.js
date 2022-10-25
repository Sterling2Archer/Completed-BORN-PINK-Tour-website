import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Songs from '../components/Songs'
import MusicCards from '../components/Music'

const Music = () => {
    return (
        <div>
            <Navbar />
            <Songs heading='MUSIC' />
            <MusicCards />
            <Footer />
        </div>
    )
}

export default Music
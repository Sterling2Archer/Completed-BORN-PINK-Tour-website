import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PinkVenom from '../components/PinkVenom';
import MembersCards from '../components/Members';


const Members = () => {
    return (
        <div>
            <Navbar />
            <PinkVenom heading='BLACKPINK' text='JISOO JENNIE ROSÉ LALISA' />
            <MembersCards />
            <Footer />
        </div>
    )
}

export default Members;

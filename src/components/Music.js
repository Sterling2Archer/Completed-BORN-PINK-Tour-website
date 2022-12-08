import React from 'react';
import './MusicStyles.css';
import ShutDown from '../assets/shutdown.mp4';
import Jisoo from '../assets/jisoosolo.mp4';
import Jennie from '../assets/jenniesolo.mp4';
import Rose from '../assets/rosegone.mp4';
import Lisa from '../assets/LALISA.mp4';

const Music = () => {
  return (
    <div className='music-pink'>
        <div className='JiSolo' >
             <h3> <center>LIAR (CAMILA CABELLO COVER) // JISOO SOLO</center></h3>
             <span className='bar' ></span> <center>
             <video height={550}  autoPlay loop muted src={Jisoo} className='jisoo' alt=''  /> </center>
        <div>
              <a href='https://www.youtube.com/watch?v=ayIANe5Qmxs' className='btn btn-light'>YouTube</a>
        </div>
        </div>
                
        <div className='JenSolo' >
              <h3> <center>SOLO // JENNIE SOLO </center></h3>
              <span className='bar' ></span>
              <video height={550}  autoPlay loop muted src={Jennie} className='jennie' alt='' />
        <div>
              <a href='https://www.youtube.com/watch?v=b73BI9eUkjM' className='btn btn-light'>YouTube</a>
        </div>
        </div>

        <div className='RoseSolo'>
              <h3> <center>GONE // ROSÉ SOLO </center></h3>
              <span className='bar' ></span>
              <video height={550}  autoPlay loop muted src={Rose} className='rose' alt='' />
        <div>
              <a href='https://www.youtube.com/watch?v=K9_VFxzCuQ0' className='btn btn-light'>YouTube</a>
        </div>
        </div>

        <div className='LisaSolo'>
              <h3> <center>LALISA // LISA SOLO </center></h3>
              <span className='bar' ></span>
              <video height={550}  autoPlay loop muted src={Lisa} className='lisa' alt='' />
        <div>
              <a href='https://www.youtube.com/watch?v=awkkyBH2zEo' className='btn btn-light'>YouTube</a>
        </div>
        </div>

        <div className='groupMusic'>
             <h3> SHUT DOWN // BLACKPINK </h3>
             <span className='bar' ></span>
             <center><video height={500} autoPlay loop muted src={ShutDown} className='shutdown' alt='' /> </center>
        <div> 
             <a href='https://www.youtube.com/watch?v=POe9SOEKotk' className='btn btn-light'>YouTube</a>
        </div>
        </div>
    </div>
  )
}

export default Music;

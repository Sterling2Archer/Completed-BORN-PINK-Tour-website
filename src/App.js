import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Members from './routes/Members';
import Music from './routes/Music';
import TourDates from './routes/TourDates';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/music' element={<Music />} />
        <Route path='/tourdates' element={<TourDates />} />
      </Routes>
    </>
  );
}

export default App;

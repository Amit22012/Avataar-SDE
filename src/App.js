// App.js
import React from 'react';
import Swiper from './component2/swiper';
import Navbar from './component/navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='navigation'><Navbar /></div>
      <div className='swiperx'><Swiper /></div>
      
    </div>
  );
}

export default App;

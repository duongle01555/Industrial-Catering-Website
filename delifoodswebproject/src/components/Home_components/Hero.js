import React from 'react';
import './Hero.css';

import Video from '../../asset/HotFood_JPN.mp4'

function Hero() {
  return (
    <div className="hero" id='video'>
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Chào mừng đến với Delifoods</h1>
        <p>An toàn  -  Vệ sinh  -  Chất lượng  -  Chuyên nghiệp</p>
        <button>Đặt món</button>
        <button>Liên hệ</button>
      </div>
    </div>
  );
}

export default Hero;
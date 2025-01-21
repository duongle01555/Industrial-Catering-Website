import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [heroHeading, setHeroHeading] = useState('');
  const [heroParagraph, setHeroParagraph] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;

    switch (currentPath) {
      case '/dichvu':
        setBackgroundImage(require('../../asset/service.jpg'));
        setHeroHeading('Dịch vụ tận tâm - Uy tín hàng đầu');
        setHeroParagraph('Nhiều lựa chọn suất ăn khác nhau phục vụ cho các nhu cầu khác nhau.');
        break;
      case '/vechungtoi':
        setBackgroundImage(require('../../asset/aboutus.jpg'));
        setHeroHeading('Chất lượng bữa ăn - Cam kết từ tâm');
        setHeroParagraph('An toàn, dinh dưỡng, và tiết kiệm dành cho doanh nghiệp của bạn');
        break;
      case '/lienhe':
        setBackgroundImage(require('../../asset/contact.jpg'));
        setHeroHeading('Liên hệ dễ dàng - Hỗ trợ tận tâm');
        setHeroParagraph('Hỗ trợ nhanh chóng, tận tâm với mọi thắc mắc và yêu cầu của bạn.');
        break;
      default:
        setBackgroundImage(require('../../asset/hero.jpg'));
        setHeroHeading('Chào mừng đến với Delifoods');
        setHeroParagraph('An toàn  -  Vệ sinh  -  Chất lượng  -  Chuyên nghiệp');
        break;
    }
  }, []);

  return (
    <div className="hero" id="background_hero">
      <img src={backgroundImage} alt="Hero_Background" className="hero-background" />
      <div className="hero-content">
        <h1>{heroHeading}</h1>
        <p>{heroParagraph}</p>
        <button onClick={() => window.location.href='/dichvu'}>Đặt món</button>
        <button onClick={() => window.location.href='/lienhe'}>Liên hệ</button>
      </div>
    </div>
  );
}

export default Hero;

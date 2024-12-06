import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css'; 

function TopBar() {
  return (
    <div className="top-bar-grid">
        <div className="logoduck-container">
          <Link to="/">
            <img id="logoduck" src={require('../asset/logo.jpg')} alt="logo"/>
          </Link>
        </div>
        <div className="tb-title">
          <Link style={{ textDecoration: 'none' }} to="/">
            <p id="tb-title-1">CÔNG TY TNHH DỊCH VỤ DELI FOODS</p>
          </Link>
            <p id="tb-title-2">Địa chỉ: 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</p>
        </div>
        <div className="tb-search-box">
          <input type="text" placeholder="Search.." />
        </div>
    </div>
  );
}


export default TopBar;
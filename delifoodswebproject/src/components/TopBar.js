import React from 'react';
import './TopBar.css'; 

function TopBar() {
  return (
    <div className="top-bar-grid">
        <div className="logoduck-container">
            <img id="logoduck" src={require('../asset/logo.jpg')} alt="logo"/>
        </div>
        <div className="tb-title">
            <p id="tb-title-1">CÔNG TY TNHH DỊCH VỤ DELI FOODS</p>
            <p id="tb-title-2">Địa chỉ: 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</p>
        </div>
        <div className="tb-search-box">
          <input type="text" placeholder="Search.." />
        </div>
    </div>
  );
}


export default TopBar;
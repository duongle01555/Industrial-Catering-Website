import React from 'react';
import './TopBar.css'; 

function TopBar() {
  return (
    <div className="top-bar-grid">
        <div>
            <img src="../../asset/logo.jpg" alt="haha"/>
        </div>
        <div>
            <p id="title-1">CÔNG TY TNHH DỊCH VỤ DELI FOODS</p>
            <p id="title-2">Địa chỉ: 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</p>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search.." />
        </div>
    </div>
  );
}


export default TopBar;
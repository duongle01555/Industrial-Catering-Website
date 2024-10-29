import React from 'react';
import './Section3.css';
import BoxComponent from './CallToAction.js';

function Section3() {
  return (
    <div>
      <div>
        <h1 className="header2">VÌ SAO CHỌN CHÚNG TÔI</h1>
        <p>DeliFoods - Đơn vị uy tín chuyên cung cấp các suất ăn công nghiệp đảm bảo an toàn dinh dương, giá thành hợp lý</p>
      </div>
      <div className="USP">
        <div className="USP-item">
          <img className="USP-image" src={require('../asset/chew toy.webp')} alt="USP-icon"/>
          <h1>Uy tín chất lượng</h1>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
        <div className="USP-item">
          <img className="USP-image"
          src={require('../asset/model train set.webp')} alt="USP-icon"/>
          <h1>Uy tín chất lượng</h1>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
        <div className="USP-item">
          <img 
          className="USP-image"
          src={require('../asset/stuffed plush toy.webp')} alt="USP-icon"/>
          <h1>Uy tín chất lượng</h1>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
        <div className="USP-item">
          <img 
          className="USP-image"
          src={require('../asset/tumbler.webp')} alt="USP-icon"/>
          <h1>Uy tín chất lượng</h1>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
      </div>
      <BoxComponent />
    </div>
  )
}

export default Section3;
import React from 'react';
import './Section3.css';


function Section3() {
  return (
    <div className='all-3'>
      <div className="header-3">
        <h1>VÌ SAO CHỌN CHÚNG TÔI</h1>
        <p>DeliFoods - Đơn vị uy tín chuyên cung cấp các suất ăn công nghiệp đảm bảo an toàn dinh dưỡng, giá thành hợp lý</p>
      </div>
      <div className="USP-3">
        <div className="USP-item-3">
          <img className="USP-image-3" src={require('../../asset/chew toy.webp')} alt="USP-icon"/>
          <div className='USP-commit-3'>Uy tín chất lượng</div>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
        <div className="USP-item-3">
          <img className="USP-image-3" src={require('../../asset/model train set.webp')} alt="USP-icon"/>
          <div className='USP-commit-3'>Uy tín chất lượng</div>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
        <div className="USP-item-3">
          <img className="USP-image-3" src={require('../../asset/stuffed plush toy.webp')} alt="USP-icon"/>
          <div className='USP-commit-3'>Uy tín chất lượng</div>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất. </p>
        </div>
        <div className="USP-item-3">
          <img className="USP-image-3" src={require('../../asset/tumbler.webp')} alt="USP-icon"/>
          <div className='USP-commit-3'>Uy tín chất lượng</div>
          <p>Với phương châm hoạt động "Lấy chữ tâm để phục vụ". Chúng tôi luôn cam kết mang đến dịch vụ uy tín, chất lượng nhất.</p>
        </div>
      </div>

    </div>
  )
}

export default Section3;
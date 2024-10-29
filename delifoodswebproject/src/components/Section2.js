import React from 'react';
import './Section2.css'; 

function Section2() {
  return (
<div className="all-grid">
        <div className="Header1">Dịch vụ chúng tôi cung cấp</div>         
        <div className="ND1">
                  <p id="tđ">Deli Foods cung cấp các dịch vụ như:</p>
                  <ul className="nd">
                      <li>Suất ăn thơm ngon, cung cấp đủ dưỡng chất, được lựa chọn từ những nguồn thực phẩm tươi ngon, đảm bảo chất lượng.</li>
                      <li>Thực đơn đa dạng phong phú thay đổi theo ngày, theo nhiều thị hiếu nhu cầu khách hàng.</li>
                      <li>Hệ thống trang thiết bị nhà bếp hiện đại, quy trình chế biến khép kín, được quản lý nghiêm ngặt từ chuỗi nguyên liệu đầu vào. Khâu chế biến luôn tuân thủ quy trình vệ sinh an toàn thực phẩm.</li>
                      <li>Đội ngũ đầu bếp chuyên nghiệp và nhiều năm trong nghề, chăm chút kỹ lưỡng để nấu ra những món ăn ngon.</li>
                  </ul>
        </div>
        <div className='picture'>
          <img src={require('../asset/18k.jpg')} alt="Ảnh dịch vụ chúng tôi cung cấp" />
        </div>     
        <div id="Nut">Xem thêm dịch vụ</div>        
               
    </div>
  );
}


export default Section2;
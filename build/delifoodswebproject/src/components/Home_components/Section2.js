import React from 'react';
import './Section2.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Section2() {
  return (
    <div className="all-2">
        <div className="Header-2">Dịch vụ chúng tôi cung cấp</div>
        <div className="container-2">
          <div className="ND-2">
            <p id="td-2">Deli Foods cung cấp các dịch vụ như:</p>
            <ul className="nd-2">
                <li><FontAwesomeIcon icon={faCheck} /> Suất ăn thơm ngon, cung cấp đủ dưỡng chất, được lựa chọn từ những nguồn thực phẩm tươi ngon, đảm bảo chất lượng.</li>
                <li><FontAwesomeIcon icon={faCheck} /> Thực đơn đa dạng phong phú thay đổi theo ngày, theo nhiều thị hiếu nhu cầu khách hàng.</li>
                <li><FontAwesomeIcon icon={faCheck} /> Hệ thống trang thiết bị nhà bếp hiện đại, quy trình chế biến khép kín, được quản lý nghiêm ngặt từ chuỗi nguyên liệu đầu vào. Khâu chế biến luôn tuân thủ quy trình vệ sinh an toàn thực phẩm.</li>
                <li><FontAwesomeIcon icon={faCheck} /> Đội ngũ đầu bếp chuyên nghiệp và nhiều năm trong nghề, chăm chút kỹ lưỡng để nấu ra những món ăn ngon.</li>
            </ul>
          </div>
          <div className='picture-2'>
            <img src={require('../../asset/18k.jpg')} alt="Ảnh dịch vụ chúng tôi cung cấp" />
          </div> 
        </div> 
        <div className="button-2">
          <button onClick={() => window.location.href='/dichvu'}>Xem thêm dịch vụ</button>       
        </div>    
                
    </div>
  );
}


export default Section2;
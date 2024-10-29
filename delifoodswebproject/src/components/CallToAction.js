import React from 'react';
import './CallToAction.css';
import Button from 'react-bootstrap/Button';

function CallToAction() {
  return (
    <div className="box1">
      <h1>Sẵn sàng sử dụng dịch vụ của Delifoods</h1>
      <p>Nguồn thực phẩm an toàn, bữa ăn ngon miệng, Tạo sự thoải mái và yên tâm tuyệt đối cho khách hàng. Đừng do dự liên hệ với chúng tôi để được tư vấn chi tiết</p>
      <button onClick={() => alert('Button 1 clicked')} className="button button1">Đặt Món</button>
      <button onClick={() => alert('Button 2 clicked')} className="button button2">Liên Hệ</button>
    </div>
  );
};

export default CallToAction;
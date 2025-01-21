import React from 'react';
import './CallToAction.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="box1">
      <h1>Sẵn sàng sử dụng dịch vụ của Delifoods?</h1>
      <p>Nguồn thực phẩm an toàn, bữa ăn ngon miệng, Tạo sự thoải mái và yên tâm tuyệt đối cho khách hàng.
      <br></br>
        Đừng do dự liên hệ với chúng tôi để được tư vấn chi tiết!</p>
      <button onClick={() => window.location.href='/dichvu#Menutable_container'} className="button button1">Đặt Món</button>
      {/* <Link style={{ textDecoration: 'none' }} to="/dichvu">
        <button className="button button1">Đặt Món</button>
      </Link>  */}
      <button onClick={() => window.location.href='/lienhe'} className="button button2">Liên Hệ</button>
    </div>
  );
};

export default CallToAction;
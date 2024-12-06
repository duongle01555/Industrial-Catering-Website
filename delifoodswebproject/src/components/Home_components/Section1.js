import React from 'react';
import './Section1.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Section1() {
  return (
    <>
      <Breadcrumb style={{backgroundColor: '#fff'}}>
        <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
        <Breadcrumb.Item active>Trang chủ</Breadcrumb.Item>
      </Breadcrumb>
      <div className="all-1">
        <div className="inner-section-about-us">
          <h1 className="header-1">
            ĐÔI NÉT VỀ DELI FOODS
          </h1>
          <div className="section-1"> 
            <div className="text-column-1"> 
              <p className="introduction-section-1">
                Công Ty TNHH Thương Mại Dịch Vụ Deli Foods
                <p className="introduction-brief-1">
                  Chuyên cung cấp và phục vụ suất ăn công nghiệp phục vụ cho nhiều đơn vị: Nhà máy, xí nghiệp, công ty, trường học, bệnh viện, văn phòng,...
                </p>
              </p>
              <p className="introduction-section-1">
                Ngoài ra chúng tôi còn cung cấp các dịch vụ:
              </p>
              <ul className="introduction-list-1">
                <li>✥ Thầu căng tin, thầu bếp ăn</li>
                <li>✥ Dịch vụ phục vụ suất ăn cho các sự kiện</li>
              </ul>
              <p className="introduction-section-1">Cam kết của DELI FOODS:</p>
              <ul className="introduction-list-1">
                <li>☑ Suất ăn thơm ngon, cung cấp đủ dưỡng chất, được lựa chọn từ những nguồn thực phẩm tươi ngon, đảm bảo chất lượng.</li>
                <li>☑ Thực đơn đa dạng phong phú thay đổi theo ngày, theo nhiều thị hiếu nhu cầu khách hàng.</li>
                <li>☑ Hệ thống trang thiết bị nhà bếp hiện đại, quy trình chế biến khép kín, được quản lý nghiêm ngặt từ chuỗi nguyên liệu đầu vào. Khâu chế biến luôn tuân thủ quy trình vệ sinh an toàn thực phẩm.</li>
                <li>☑ Đội ngũ đầu bếp chuyên nghiệp và nhiều năm trong nghề, chăm chút kỹ lưỡng để nấu ra những món ăn ngon.</li>
              </ul>
            </div>
            <div className="image-column-1"> 
              <div className="image-section-1">
                <img id="image-section-1-employee" src={require('../../asset/Employee 494x329.png')} alt="employee" />
              </div>
              <div className="image-section-1">
                <img id="image-section-1-serving" src={require('../../asset/Serving 315x494.png')} alt="serving" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1;
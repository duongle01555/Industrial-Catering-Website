import React from 'react';
import './Section1.css';

function Section1() {
  return (
    <div>
      <div className="info-bar">
        Trang Chủ/Trang Chủ
      </div>
      <div className="inner-section-about-us">
        <h1 className="header1">
          ĐÔI NÉT VỀ DELI FOODS
        </h1>
        <div className="section-1">
          <p className="introduction-section-1">
            Công Ty TNHH Thương Mại Dịch Vụ Deli Foods
            Chuyên cung cấp và phục vụ suất ăn công nghiệp phục vụ cho nhiều đơn vị: Nhà máy, xí nghiệp, công ty, trường học, bệnh viện, văn phòng,...
            Ngoài ra chúng tôi còn cung cấp các dịch vụ:
            ✥ Thầu căng tin, thầu bếp ăn
            ✥ Dịch vụ phục vụ suất ăn cho các sự kiện
            Cam kết của DELI FOODS:
            ☑ Suất ăn thơm ngon, cung cấp đủ dưỡng chất, được lựa chọn từ những nguồn thực phẩm tươi ngon, đảm bảo chất lượng.
            ☑ Thực đơn đa dạng phong phú thay đổi theo ngày, theo nhiều thị hiếu nhu cầu khách hàng.
            ☑ Hệ thống trang thiết bị nhà bếp hiện đại, quy trình chế biến khép kín, được quản lý nghiêm ngặt từ chuỗi nguyên liệu đầu vào. Khâu chế biến luôn tuân thủ quy trình vệ sinh an toàn thực phẩm.
            ☑ Đội ngũ đầu bếp chuyên nghiệp và nhiều năm trong nghề, chăm chút kỹ lưỡng để nấu ra những món ăn ngon.
          </p>
          <div className="inner-section-1">
            <div className="image-section-1">
              <img id="image-section-1" src={require('../asset/Employee 494x329.png')} alt="employee"/>
            </div>
            <div className="image-section-1">
              <img id="image-section-1" src={require('../asset/Serving 315x494.png')} alt="serving"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1;
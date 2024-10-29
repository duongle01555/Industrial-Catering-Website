import React from 'react'
import './AboutUs.css'
import Section2 from "./Section2.js";

function AboutUs() {
  return (
    <div>
      <div>
        <p>Trang Chủ/Trang Chủ</p>
      </div>
      <div className="inner-section-1">
        <div className="header1">
          ĐÔI NÉT VỀ DELI FOODS
        </div>
        <div className="section-1">
          <div>
            <p className="introduction-section-1">
              Công Ty TNHH Thương Mại Dịch Vụ Deli Foods
              <br></br>
              chuyên cung cấp và phục vụ suất ăn công nghiệp phục vụ cho nhiều đơn vị: Nhà máy, xí nghiệp, công ty, trường học, bệnh viện, văn phòng,...
              <br></br>
              Ngoài ra chúng tôi còn cung cấp các dịch vụ:
              <br></br>
              ✥ Thầu căng tin, thầu bếp ăn
              <br></br>
              ✥ Dịch vụ phục vụ suất ăn cho các sự kiện
              <br></br>
              Cam kết của DELI FOODS:
              <br></br>
              ☑ Suất ăn thơm ngon, cung cấp đủ dưỡng chất, được lựa chọn từ những nguồn thực phẩm tươi ngon, đảm bảo chất lượng.
              <br></br>
              ☑ Thực đơn đa dạng phong phú thay đổi theo ngày, theo nhiều thị hiếu nhu cầu khách hàng.
              <br></br>
              ☑ Hệ thống trang thiết bị nhà bếp hiện đại, quy trình chế biến khép kín, được quản lý nghiêm ngặt từ chuỗi nguyên liệu đầu vào. Khâu chế biến luôn tuân thủ quy trình vệ sinh an toàn thực phẩm.
              <br></br>
              ☑ Đội ngũ đầu bếp chuyên nghiệp và nhiều năm trong nghề, chăm chút kỹ lưỡng để nấu ra những món ăn ngon.
            </p>
          </div>
          <div className="inner-section-1-1">
            <div className="image-section-1">
              {/* <img src="../asset/about us.jpg" /> */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY7OQq4dlLTSkjGScKhVIWbXIrtw5GY3nNg&s" alt="employee"/>
            </div>
            <div className="image-section-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiY7OQq4dlLTSkjGScKhVIWbXIrtw5GY3nNg&s" alt="serving"/>
            </div>
          </div>
        </div>
      </div>
      
      <Section2 />
      <br></br>
    </div>
  )
}

export default AboutUs
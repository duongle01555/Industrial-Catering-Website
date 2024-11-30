import React from 'react';
import './Section1.css';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Section1() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
                <Breadcrumb.Item active>Về chúng tôi</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid className="about-us my-5">
                <div id="Aboutus-header">Về Chúng Tôi</div>
                <p className="text-center" id="header-welcome">Chào Mừng Bạn Đến Với Suất Ăn Công Nghiệp DELI FOODS
                - Nơi mang đến những bữa ăn ngon lành và dinh dưỡng cho doanh nghiệp của bạn!</p>
                
                <div className="text-center my-4">
                    <img src={require("../../asset/hero.jpg")} alt="About Us" className="img-fluid Aboutus-picture" />
                </div>

                <h2>Sứ Mệnh Của Chúng Tôi</h2>
                <p>
                    Tại DELI FOODS, chúng tôi tin rằng một bữa ăn ngon không chỉ nuôi dưỡng cơ thể mà còn nuôi dưỡng tinh thần. Với hơn 10 năm kinh nghiệm trong lĩnh vực suất ăn công nghiệp, chúng tôi tự hào mang đến:
                </p>
                <ul>
                    <li>🍽️ Thực đơn đa dạng, phong phú</li>
                    <li>🥗 Nguyên liệu tươi ngon, an toàn</li>
                    <li>👨‍🍳 Đội ngũ đầu bếp chuyên nghiệp</li>
                    <li>🚚 Dịch vụ giao hàng đúng giờ, tận nơi</li>
                </ul>

                <h2>Giá Trị Cốt Lõi</h2>
                <ul>
                    <li>Cung cấp bữa ăn sạch, chất lượng cao, dịch vụ hoàn hảo.</li>
                    <li>Con người là sức mạnh lớn nhất, là nhân tố chủ đạo cho sức mạnh của sự phát triển bền vững.</li>
                    <li>Môi trường làm việc thân thiện, chuyên nghiệp, sáng tạo và gắn kết.</li>
                    <li>Là đối tác tin cậy của mọi doanh nghiệp.</li>
                </ul>
            </Container>
        </>
    );
}

export default Section1;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Section2.css';

function Section2() {
    return (
        <Container fluid className="contact-section my-5 ">
            <h2>Nếu Bạn Vẫn Còn Do Dự, Đừng Ngần Ngại Mà Hãy Liên Hệ Với Chúng Tôi Ngay!</h2>
            <Row className="mt-4">
                <Col md={6}>
                    <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn! Nếu bạn có bất kỳ câu hỏi nào về thực đơn, dịch vụ hoặc cần thêm thông tin, hãy liên hệ với chúng tôi. Đội ngũ nhân viên tận tâm của chúng tôi sẽ giúp bạn tìm ra giải pháp tốt nhất.</p>
                </Col>
                <Col md={6}>
                    <h3>Thông Tin Liên Hệ:</h3>
                    <ul>
                        <li><strong>Số Điện Thoại</strong>: (0123) 456-789</li>
                        <li><strong>Email</strong>: support@delifoods.com</li>
                        <li><strong>Địa Chỉ</strong>: 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</li>
                    </ul>
                </Col>
            </Row>
            <p className="mt-4 text-center fs-5">Chúng tôi rất mong nhận được phản hồi từ bạn và hy vọng được phục vụ bạn trong thời gian tới!</p>
        </Container>
    );
}

export default Section2;
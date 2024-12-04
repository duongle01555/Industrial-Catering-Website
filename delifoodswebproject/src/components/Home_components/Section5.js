import React from 'react';
import './Section5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section5_Carousel from './Section5-Carousel.js';

function Section5(){
    return(
        <div className="all-5">
            <h1>Danh sách suất ăn</h1>
            {/* <div className="Header-5">Chứng chỉ Chứng nhận</div> */}
            {/* <p>TỰ TIN LÀ ĐƠN VỊ CUNG CẤP SUẤT ĂN CÔNG NGHIỆP ĐẠT CHUẨN ISO 22000 - 2018, ĐẢM BẢO CHẤT LƯỢNG VÀ VỆ SINH AN TOÀN THỰC PHẨM.</p> */}
            <p>Tự hào là đơn vị cung cấp suất ăn công nghiệp, suất ăn trường học đạt chuẩn iso 22000 - 2018, đảm bảo chất lượng và vệ sinh an toàn thực phẩm.</p>
            {/* <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container> */}
            <Section5_Carousel />
        </div>
    )

}

export default Section5;
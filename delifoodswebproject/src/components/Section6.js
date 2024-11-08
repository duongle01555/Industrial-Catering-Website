import React from 'react';
import './Section6.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section6_Carousel from './Section6-Carousel.js';

function Section6(){

    return(
        <div className="all-6">
            <h1>Chứng chỉ chứng nhận</h1>
            {/* <div className="Header-5">Chứng chỉ Chứng nhận</div> */}
            <p>TỰ TIN LÀ ĐƠN VỊ CUNG CẤP SUẤT ĂN CÔNG NGHIỆP ĐẠT CHUẨN ISO 22000 - 2018, ĐẢM BẢO CHẤT LƯỢNG VÀ VỆ SINH AN TOÀN THỰC PHẨM.</p>
            {/* <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container> */}
            <Section6_Carousel />
        </div>
    )

}

export default Section6;
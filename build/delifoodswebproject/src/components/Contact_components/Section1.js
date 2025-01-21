import React from 'react';
import './Section1.css';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Section1() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
                <Breadcrumb.Item active>Liên hệ</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid className="contact-page">
                {/* <div id="Contact_title">Bản Đồ</div> */}
                <Row>
                    <Col md={6} className="map-column">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0399651972307!2d106.69098691128123!3d11.035628454312505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4fb1e576c727386d%3A0xdc8e3b878cb5760f!2sC%C3%B4ng%20ty%20TNHH%20DV%20DELI%20FOODS!5e0!3m2!1svi!2shk!4v1732544806189!5m2!1svi!2shk"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Col>
                    <Col md={6} className="contact-info-column">
                        <div id="contact-header">Liên hệ</div>
                        <div id="company-name">CÔNG TY SUẤT ĂN CÔNG NGHIỆP DELI FOODS</div>
                        <p id="phone-number"><strong>Điện Thoại:</strong> (123) 456-7890</p>
                        <p id="email-address"><strong>Email:</strong> contact@delifoods.com</p>
                        <p id="address"><strong>Địa Chỉ:</strong> 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</p>
                    </Col>
                </Row>
            </Container>
    </>
    );
}

export default Section1;
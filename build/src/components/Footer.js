import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container className="all-footer">
      {/* <Row>
          <Col md={4}>
              <Row className="footer-item">
                  <Col>
                      <img id="footer_phone" src={require('../asset/phone.jpg')} alt="footer_phone" />
                  </Col>
                  <Col>
                      <Row>
                          <Col>
                              <p>Gọi Chúng Tôi</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <a href="tel:02439533343">024 395 33343</a>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Col>

          <Col md={4}>
              <Row className="footer-item">
                  <Col>
                      <img id="footer_tick" src={require('../asset/tick.jpg')} alt="footer_tick" />
                  </Col>
                  <Col>
                      <Row>
                          <Col>
                              <p>Đảm bảo</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              An toàn - Vệ sinh - Chất lượng
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Col>

          <Col md={4}>
              <Row className="footer-item">
                  <Col>
                      <img id="footer_email" src={require('../asset/email.jpg')} alt="footer_email" />
                  </Col>
                  <Col>
                      <Row>
                          <Col>
                              <p>Email</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <a href="mailto:delifood@company.pro">delifood@company.pro</a>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Col>
      </Row> */}

      <Row>
        <Col xs={6} md={3}>
          <h5 id="service_header_title">Về chúng tôi</h5>
          <p id="service_header_aboutus_paragraph">DELI FOODS chúng tôi khẳng định được vị thế và uy tín của mình thông qua việc phục vụ hàng nghìn suất ăn mỗi ngày cho các doanh nghiệp.
          Chúng tôi rất hy vọng được sự hợp tác nhiều hơn nữa của Quý khách hàng !</p>
        </Col>
        <Col xs={6} md={3}>
          <h5 id="service_header_title">Dịch vụ</h5>
          <ul className="footer-service-list">
            <li>Suất ăn Công nghiệp</li>
            <li>Tiệc cưới - Hội nghị</li>
            <li>Suất ăn Chăm sóc sức khỏe</li>
            <li>Suất ăn Trường học - Canteen</li>
          </ul>
        </Col>
        <Col xs={6} md={3}>
          <h5 id="service_header_title">Thông tin liên hệ</h5>
          <p>Email: delifood@company.pro</p>
          <p>SĐT: 0336333988</p>
          <p>Địa chỉ: 655 Điện Biên Phủ, KP. 1, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương</p>
          <p>Giờ mở cửa: 8:00am - 10:00pm</p>
        </Col>
        <Col xs={6} md={3}>
          <h5 id="service_header_title">Fanpage</h5>
          <p>Hãy theo dõi trang của chúng tôi để cập nhật thông tin và các ưu đãi đặc biệt!</p>
          <div>
            <a href="https://www.facebook.com/yourfanpage" target="_blank" rel="noreferrer">Facebook</a><br />
            <a href="https://www.instagram.com/yourfanpage" target="_blank" rel="noreferrer">Instagram</a><br />
            <a href="https://www.x.com/yourfanpage" target="_blank" rel="noreferrer">X</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="copyright">
          <p>&copy; 2024 Industrial Catering. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
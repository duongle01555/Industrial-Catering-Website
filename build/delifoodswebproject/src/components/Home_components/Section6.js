import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Section6.css';

function Section6() {
    return (
      // <div className="all-7">
      //     <div className="Header-7">Review của khách hàng</div>       
      //     <div className="Review7-1">
      //         <p>Testimony 1: "Chúng tôi đã hợp tác với Deli Foods hơn 2 năm và luôn hài lòng. Bữa ăn luôn đảm bảo an toàn, đa dạng, giúp công nhân làm việc hiệu quả." <br/>- Công ty ABC</p>  
      //         <div className="image-div1">
      //           <img className='picture1' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 1" />
      //         </div>     
      //     </div>
      //     <div className="Review7-2">
      //     <div className="image-div2">
      //         <img className='picture2' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 2" /> </div>    
      //         <div>Testimony 2: "Deli Foods mang đến thực phẩm chất lượng cao và đội ngũ nhân viên chuyên nghiệp. Dịch vụ giúp chúng tôi tiết kiệm chi phí mà vẫn đảm bảo chất lượng."
      //         <p id="cty">- Công ty XYZ</p></div>       
      //     </div>
      //     <div className="Review7-3">
      //          <p>Testimony 3: "Deli Foods là lựa chọn đúng đắn cho công ty chúng tôi. Món ăn phong phú, tươi ngon, giúp tăng sức khỏe và tinh thần cho nhân viên."<br />- Công ty LMN</p>  
      //          <div className="image-div3">
      //             <img className='picture3' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 3" /> </div>    
      //     </div>
      //     <button id="Nut">Xem thêm</button>    
      // </div>
      <div className="all-6">
        <div className="Header-6">Chứng chỉ - Chứng nhận</div>     
        <div className="certificate-table">
          <Row>
            <Col xs={12} md={4} className="mb-3">
              <Card>
                <Card.Img className="certificate-image" variant="top" src="https://stavi.com.vn/storage/finder/images/iso22.jpg" />
                <Card.Body>
                  <Card.Title className='Card-Title-Style'>Công ty ABC</Card.Title>
                  {/* <Card.Text className='Card-Text-Rating'>
                    Rating: ★★★★☆
                  </Card.Text> */}
                  <Card.Text className='Card-Text-Review'>
                    <p>Chúng tôi đã hợp tác với Deli Foods hơn 2 năm và luôn hài lòng. Bữa ăn luôn đảm bảo an toàn, đa dạng, giúp công nhân làm việc hiệu quả."</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card>
                <Card.Img className="certificate-image" variant="top" src="https://stavi.com.vn/storage/finder/images/bh22.jpg" />
                <Card.Body>
                  <Card.Title className='Card-Title-Style'>Công ty ABC</Card.Title>
                  {/* <Card.Text className='Card-Text-Rating'>
                    Rating: ★★★★☆
                  </Card.Text> */}
                  <Card.Text className='Card-Text-Review'>
                    <p>Chúng tôi đã hợp tác với Deli Foods hơn 2 năm và luôn hài lòng. Bữa ăn luôn đảm bảo an toàn, đa dạng, giúp công nhân làm việc hiệu quả."</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Card>
                <Card.Img className="certificate-image" variant="top" src="https://stavi.com.vn/storage/finder/images/certificate-02.jpg" />
                <Card.Body>
                  <Card.Title className='Card-Title-Style'>Công ty ABC</Card.Title>
                  {/* <Card.Text className='Card-Text-Rating'>
                    Rating: ★★★★☆
                  </Card.Text> */}
                  <Card.Text className='Card-Text-Review'>
                    <p>Chúng tôi đã hợp tác với Deli Foods hơn 2 năm và luôn hài lòng. Bữa ăn luôn đảm bảo an toàn, đa dạng, giúp công nhân làm việc hiệu quả."</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  
  
  export default Section6;
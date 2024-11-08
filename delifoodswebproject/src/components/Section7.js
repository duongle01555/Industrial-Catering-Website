import React from 'react';
import './Section7.css';

function Section7() {
    return (
      <div className="all-7">
          <div className="Header-7">Review của khách hàng</div>       
          <div className="Review7-1">
              <p>Testimony 1: "Chúng tôi đã hợp tác với Deli Foods hơn 2 năm và luôn hài lòng. Bữa ăn luôn đảm bảo an toàn, đa dạng, giúp công nhân làm việc hiệu quả." <br/>- Công ty ABC</p>  
              <div className="image-div1">
                <img className='picture1' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 1" />
              </div>     
          </div>
          <div className="Review7-2">
          <div className="image-div2">
              <img className='picture2' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 2" /> </div>    
              <div>Testimony 2: "Deli Foods mang đến thực phẩm chất lượng cao và đội ngũ nhân viên chuyên nghiệp. Dịch vụ giúp chúng tôi tiết kiệm chi phí mà vẫn đảm bảo chất lượng."
              <p id="cty">- Công ty XYZ</p></div>       
          </div>
          <div className="Review7-3">
               <p>Testimony 3: "Deli Foods là lựa chọn đúng đắn cho công ty chúng tôi. Món ăn phong phú, tươi ngon, giúp tăng sức khỏe và tinh thần cho nhân viên."<br />- Công ty LMN</p>  
               <div className="image-div3">
                  <img className='picture3' src={require('../asset/logo-1.jpg')} alt="Ảnh công ty 3" /> </div>    
          </div>
          <button id="Nut">Xem thêm</button>    
      </div>
    );
  }
  
  
  export default Section7;
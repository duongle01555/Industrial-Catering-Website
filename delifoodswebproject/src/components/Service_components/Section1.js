import React, { useState } from 'react';
import './Section1.css';
import { Card, ListGroup, Container, Row, Col, Pagination } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const foods = [
    { id: 1, name: "Suất ăn 18k", price: 18000, imageUrl: require("../../asset/18k.jpg"), ingredients: ["Cơm", "Cá", "Rau", "Canh"], introduction: "abc" },
    { id: 2, name: "Suất ăn 20k", price: 20000, imageUrl: require("../../asset/20k.jpg"), ingredients: ["Cơm", "Cá", "Rau", "Trứng", "Canh"], introduction: "def" },
    { id: 3, name: "Suất ăn 25k", price: 25000, imageUrl: require("../../asset/25k.jpg"), ingredients: ["Cơm", "Cá", "Rau", "Trứng", "Đậu phụ", "Canh"], introduction: "ghi" },
    { id: 4, name: "Suất ăn 30k", price: 30000, imageUrl: require("../../asset/30k_1.jpg"), ingredients: ["Cơm", "Cá", "Rau", "Trứng", "Thịt", "Canh", "Chuối"], introduction: "jkl" },
    { id: 5, name: "Suất ăn 35k", price: 35000, imageUrl: require("../../asset/35k.jpg"), ingredients: ["Cơm", "Cá", "Rau", "Trứng", "Thịt", "Canh", "Chuối", "Sữa chua"], introduction: "mno" },
    { id: 6, name: "Suất ăn 40k", price: 40000, imageUrl: require("../../asset/35k.jpg"), ingredients:["Cơm", "Cá", "Rau", "Trứng", "Thịt", "Canh", "Chuối", "Sữa chua", "Cua hoàng đế :)" ], introduction: "xyz" },
];

function Section1() {
    const [show, setShow] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (food) => {
        setSelectedFood(food);
        setShow(true);
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
                <Breadcrumb.Item active>Dịch vụ</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid className="Menutable_container">
                <h1 id="Menutable_header" className="text-center my-4">Suất ăn theo giá</h1>
                <Row xs={1} sm={2} lg={3} className="g-4">
                    {foods.map(food => (
                        <Col key={food.id}>
                            <Card className="Menutable_card">
                                <Zoom>
                                    <Card.Img variant="top" src={food.imageUrl} />
                                </Zoom>
                                <Card.Body>
                                    <Card.Title className="justify-content-center text-center my-1">{food.name}</Card.Title>
                                    <div className="justify-content-center text-center Moreinfo_button">
                                        <Button variant="danger" onClick={() => handleShow(food)}>
                                            Chi tiết
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Chi tiết suất ăn</Modal.Title>
                    </Modal.Header>
                    {selectedFood && (
                        <Modal.Body>
                            <Card className="food-card">
                                <Card.Body>
                                    <Card.Title className="food-title">{selectedFood.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 food-price">
                                        <strong>Đơn giá:</strong> {selectedFood.price} VNĐ
                                    </Card.Subtitle>
                                    <Card.Text className="food-introduction">
                                        <strong>Giới thiệu:</strong> {selectedFood.introduction}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup variant="flush">
                                    <Card.Text className="ingredient-title">
                                        <strong>Thành phần:</strong>
                                    </Card.Text>
                                    <div className="ingredient-list">
                                        {selectedFood.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </div>
                                </ListGroup>
                            </Card>
                        </Modal.Body>
                    )}
                    <Modal.Footer className="modal-footer">
                        <Button variant="secondary" className="modal-button" onClick={handleClose}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* <Pagination className="justify-content-center my-4 Pagination_style">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination> */}
            </Container>
        </>
    );
}

export default Section1;
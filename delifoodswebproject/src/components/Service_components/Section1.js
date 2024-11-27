import React from 'react';
import './Section1.css';
import { Card, Container, Row, Col, Pagination } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const foods = [
    { id: 1, name: "Suất ăn 18k", imageUrl: require("../../asset/18k.jpg") },
    { id: 2, name: "Suất ăn 20k", imageUrl: require("../../asset/20k.jpg") },
    { id: 3, name: "Suất ăn 25k", imageUrl: require("../../asset/25k.jpg") },
    { id: 4, name: "Suất ăn 30k", imageUrl: require("../../asset/30k_1.jpg") },
    { id: 5, name: "Suất ăn 35k", imageUrl: require("../../asset/35k.jpg") },
    { id: 6, name: "Suất ăn 40k", imageUrl: require("../../asset/35k.jpg") },
];

function Section1() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">DELIFOODS</Breadcrumb.Item>
                <Breadcrumb.Item active>Dịch vụ</Breadcrumb.Item>
            </Breadcrumb>
                <Container fluid className="Menutable_container">
                    <h1 className="text-center my-4">Suất ăn theo giá</h1>
                    <Row xs={1} md={3} className="g-4">
                        {foods.map(food => (
                            <Col key={food.id}>
                                <Card className="Menutable_card">
                                    <Zoom>
                                        <Card.Img variant="top" src={food.imageUrl} />
                                    </Zoom>
                                    <Card.Body>
                                        <Card.Title className="justify-content-center text-center my-1">{food.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Pagination className="justify-content-center my-4 Pagination_style">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Container>
        </>
    );
}

export default Section1;
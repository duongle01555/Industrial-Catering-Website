import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar.js';
import Hero from './Home_components/Hero.js';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div>
            <TopBar />
            <hr />
            <Navbar expand="lg" bg="light" variant="light" className="w-100">
                <Container fluid>
                    {/* <Navbar.Brand as={Link} to="/" onClick={() => handleTabClick('home')}>Brand</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100 justify-content-between">
                            <Nav.Link 
                                as={Link} 
                                to="/" 
                                onClick={() => handleTabClick('home')} 
                                className={activeTab === 'home' ? 'active' : ''}
                            >
                                Trang Chủ
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/dichvu" 
                                onClick={() => handleTabClick('services')} 
                                className={activeTab === 'services' ? 'active' : ''}
                            >
                                Dịch Vụ
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/vechungtoi" 
                                onClick={() => handleTabClick('about')} 
                                className={activeTab === 'about' ? 'active' : ''}
                            >
                                Về Chúng Tôi
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/lienhe" 
                                onClick={() => handleTabClick('contact')} 
                                className={activeTab === 'contact' ? 'active' : ''}
                            >
                                Liên Hệ
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Hero />
        </div>
    );
}

export default Header;

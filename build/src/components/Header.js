import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from './TopBar.js';
import Hero from './Home_components/Hero.js';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home');

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveTab('home');
                break;
            case '/dichvu':
                setActiveTab('services');
                break;
            case '/vechungtoi':
                setActiveTab('about');
                break;
            case '/lienhe':
                setActiveTab('contact');
                break;
            default:
                setActiveTab('home');
        }
    }, [location]);

    return (
        <div>
            <TopBar />
            {/* <div>alo</div> */}
            <Navbar className='py-0 px-0' expand="sm" bg="white" variant="light" >
                <Container fluid className="Navbar-container" >
                    {/* <Navbar.Brand as={Link} to="/" onClick={() => handleTabClick('home')}>Brand</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100 justify-content-between">
                            <Nav.Link 
                                as={Link} 
                                to="/" 
                                className={activeTab === 'home' ? 'nav-link active' : 'nav-link'}
                            >
                                Trang Chủ
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/dichvu" 
                                className={activeTab === 'services' ? 'nav-link active' : 'nav-link'}
                            >
                                Dịch Vụ
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/vechungtoi" 
                                className={activeTab === 'about' ? 'nav-link active' : 'nav-link'}
                            >
                                Về Chúng Tôi
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/lienhe" 
                                className={activeTab === 'contact' ? 'nav-link active' : 'nav-link'}
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
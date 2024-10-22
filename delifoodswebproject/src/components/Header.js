import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import './Header.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    
  return (
    <div>
        <TopBar />
        <hr></hr>
        <ul className="flex nav nav-pills nav-fill">
            <li className="nav-item">
                <a className={"nav-link ${activeTab === 'home' ? 'active' : ''}"} 
                   aria-current="page" 
                   href="http://localhost:3000"
                   onClick={() => handleTabClick('home')}>
                    Trang Chủ
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link ${activeTab === 'contact' ? 'active' : ''}"} 
                   href="http://localhost:3000/lienhe"
                   onClick={() => handleTabClick('contact')}>
                    Liên Hệ
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link ${activeTab === 'services' ? 'active' : ''}"} 
                   href="http://localhost:3000/dichvu"
                   onClick={() => handleTabClick('services')}>
                    Dịch Vụ
                </a>
            </li>
            <li className="nav-item">
                <a className={"nav-link ${activeTab === 'about' ? 'active' : ''}"} 
                   href="http://localhost:3000/vechungtoi"
                   onClick={() => handleTabClick('about')}>
                    Về Chúng Tôi
                </a>
            </li>
        </ul>
        <Hero />
    </div>
  );
}


export default Header;
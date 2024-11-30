import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import NotFound from './components/Notfound_components/Notfound_page';

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dichvu" element={<Services />} />
                <Route path="/lienhe" element={<Contact />} />
                <Route path="/vechungtoi" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

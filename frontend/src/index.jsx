// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import './utils/style/global.scss';

ReactDOM.render(
    <React.StrictMode>
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
)
        
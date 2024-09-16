// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactForm from './components/ContactForm';
import './App.css';
const App = () => {
    return (
        <Router>
            <header>
                <div className="logo">TOLET Globe</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li> </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2024 TOLET Globe. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;

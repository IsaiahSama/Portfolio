import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header: React.FC = () => {
    return (
    <header className="header">
        <nav className="navbar">
            <div className="name">
                <a href="/">Isaiah Carrington</a>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/skills">Skills</a>
                <a href="https://www.linkedin.com/in/isaiah-carrington-231501208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </nav>
    </header>
    );
};

export default Header;
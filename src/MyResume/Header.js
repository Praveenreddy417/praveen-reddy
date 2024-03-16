import React from 'react';
import './Header.css';
import PraveenReddy from './PraveenReddy.png';

function Header() {
    return (
        <header className="header">
            <div className="profile-info">
                <img src={PraveenReddy} alt="Profile" className="profile-image" />
                <div className="contact-info">
                    <p>Name: Praveen Reddy</p>
                    <p>Email: praveenreddy417@gmail.com</p>
                    <p>Phone: +91 8985845001</p>
                </div>
            </div>
        </header>
    );
}

export default Header;

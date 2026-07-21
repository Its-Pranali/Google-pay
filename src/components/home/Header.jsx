// src/components/home/Header.jsx

import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { MdQrCodeScanner } from 'react-icons/md';
import './Header.css';

function Header() {
    const placeholders = [
        'Pay by name or phone number',
        'Pay friends and merchants',
        'Pay anyone on UPI',
    ];

    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
            setFadeKey(prev => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="gpay-header">
            {/* Curved background */}
            <div className="header-background"></div>

            <div className="header-content p-3 d-flex justify-content-between align-items-center">
                <Form className="w-100 me-3 position-relative">
                    <InputGroup className="search-bar rounded-pill overflow-hidden bg-white shadow-sm">
                        <InputGroup.Text className="bg-white border-0 text-muted ps-3">
                            <FaSearch />
                        </InputGroup.Text>

                        <FormControl
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="border-0 bg-white shadow-none"
                            style={{ position: 'relative', fontSize: '15px' }}
                        />
                        
                        {/* Animated Placeholder Overlay */}
                        {inputValue === '' && (
                            <span key={fadeKey} className="custom-placeholder">
                                {placeholders[placeholderIndex]}
                            </span>
                        )}
                    </InputGroup>
                </Form>

                <div className="profile-icon">
                    <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff&rounded=true" alt="Profile" />
                </div>
            </div>
        </header>
    );
}

export default Header;

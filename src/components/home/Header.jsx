// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import './Header.css'; // custom styles

function Header() {
    const placeholders = [
        'Pay anyone on UPI',
        'Pay friends and merchants',
        'Pay by name or phone number',
    ];

    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
            setFadeKey(prev => prev + 1); // trigger animation
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="banner-header d-flex justify-content-between align-items-center p-3">
            <Form className="w-100 me-3 position-relative">
                <InputGroup className="rounded-pill overflow-hidden bg-white shadow">
                    <InputGroup.Text className="bg-white border-0">
                        <FaSearch />
                    </InputGroup.Text>

                    <FormControl
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border-0 bg-white"
                        style={{ boxShadow: 'none', position: 'relative' }}
                    />
                    
                    {/* Animated Placeholder Overlay */}
                    {inputValue === '' && (
                        <span
                            key={fadeKey}
                            className="custom-placeholder"
                        >
                            {placeholders[placeholderIndex]}
                        </span>
                    )}
                </InputGroup>
            </Form>

            <div className="fs-3 text-secondary d-flex align-items-center">
                <FaUserCircle />
            </div>
        </header>
    );
}

export default Header;

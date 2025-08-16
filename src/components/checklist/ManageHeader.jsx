// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import '../home/Header.css';

function ManageHeader() {
    const placeholders = [
        'Search by nickname',
        'Search billers',
        
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

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-3">
            <div className="">
                <HiArrowLeft
                    size={16}
                    className="mb-0 "
                    onClick={handleBack}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <Form className="w-100 mx-3 position-relative">
                <InputGroup className="rounded-pill overflow-hidden bg-white border">
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

            <div className=" text-end">
                <HiOutlineDotsVertical
                    size={20}
                    className="text-dark"
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </header>
    );
}

export default ManageHeader;

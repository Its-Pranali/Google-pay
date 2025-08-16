import React, { useState } from 'react';
import './Scanner.css';
import { FaMobileAlt, FaUniversity, FaUserFriends, FaRegCopy } from 'react-icons/fa';
import { MdQrCodeScanner } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Scanner() {
    const upiId = "abcdefg-2@abcbank";

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        alert("UPI ID copied to clipboard!");
    };

    return (
        <div className="scanner-sec container py-3">
            <div className=" row d-flex justify-content-between align-items-center">

                <div className="icon-box text-center col-3">
                    <Link to="/qr-scann" className="text-decoration-none text-dark">
                        <MdQrCodeScanner size={40} className="text-primary sc-icon mb-2" />
                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Scan any<br /> QR code</p>
                    </Link>

                </div>


                <div className="icon-box text-center col-3">
                    <FaUserFriends size={40} className="text-primary sc-icon mb-2" />
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Pay <br />anyone</p>
                </div>
                <div className="icon-box text-center col-3">
                    <FaUniversity size={40} className="text-primary sc-icon mb-2" />
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Bank<br /> transfer</p>
                </div>
                <div className="icon-box text-center col-3">
                    <Link to="/mobile-recharge" className="text-decoration-none text-dark">
                        <FaMobileAlt size={40} className="text-primary sc-icon mb-2" />
                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Mobile <br />recharge</p>
                    </Link>
                </div>
            </div>

            <div className="get-upi d-flex justify-content-center mt-3">
                <p className="copy-upi border rounded-pill py-1 px-3 text-sm d-flex align-items-center" style={{ fontSize: '12px', gap: '8px' }}>
                    UPI ID: <span>{upiId}</span>
                    <FaRegCopy size={15} className="text-muted" style={{ cursor: 'pointer' }} onClick={handleCopy} />
                </p>
            </div>
        </div>
    );
}

export default Scanner;

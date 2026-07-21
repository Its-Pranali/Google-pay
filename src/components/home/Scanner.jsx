import React, { useState } from 'react';
import './Scanner.css';
import { FaMobileAlt, FaUniversity, FaUserFriends, FaRegCopy, FaMoneyBillWave, FaQrcode } from 'react-icons/fa';
import { MdQrCodeScanner, MdAccountBalanceWallet, MdSendToMobile } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Scanner() {
    const upiId = "user@okhdfcbank";

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        alert("UPI ID copied to clipboard!");
    };

    return (
        <div className="scanner-container px-3">
            <div className="actions-card bg-white rounded-4 shadow-sm p-3 position-relative">
                <div className="row g-3">
                    <div className="col-3 text-center">
                        <Link to="/qr-scann" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-primary-subtle text-primary">
                                <FaQrcode size={24} />
                            </div>
                            <span className="action-label">Scan any<br />QR code</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center">
                        <Link to="/pay-contacts" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-success-subtle text-success">
                                <FaUserFriends size={24} />
                            </div>
                            <span className="action-label">Pay<br />contacts</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center">
                        <Link to="/pay-phone" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-danger-subtle text-danger">
                                <MdSendToMobile size={24} />
                            </div>
                            <span className="action-label">Pay phone<br />number</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center">
                        <Link to="/bank-transfer" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-info-subtle text-info">
                                <FaUniversity size={24} />
                            </div>
                            <span className="action-label">Bank<br />transfer</span>
                        </Link>
                    </div>

                    <div className="col-3 text-center mt-4">
                        <Link to="/pay-upi" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-warning-subtle text-warning">
                                <MdAccountBalanceWallet size={24} />
                            </div>
                            <span className="action-label">Pay UPI ID<br />or number</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center mt-4">
                        <Link to="/self-transfer" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-secondary-subtle text-secondary">
                                <FaUserFriends size={24} />
                            </div>
                            <span className="action-label">Self<br />transfer</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center mt-4">
                        <Link to="/pay-bill" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-primary-subtle text-primary">
                                <FaMoneyBillWave size={24} />
                            </div>
                            <span className="action-label">Pay<br />bills</span>
                        </Link>
                    </div>
                    <div className="col-3 text-center mt-4">
                        <Link to="/mobile-recharge" className="text-decoration-none text-dark action-link">
                            <div className="action-icon-wrapper mx-auto mb-2 bg-info-subtle text-info">
                                <FaMobileAlt size={24} />
                            </div>
                            <span className="action-label">Mobile<br />recharge</span>
                        </Link>
                    </div>
                </div>

                <div className="upi-id-section mt-4 pt-3 border-top text-center">
                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-normal d-inline-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
                        UPI ID: {upiId}
                        <FaRegCopy className="text-muted" style={{ cursor: 'pointer' }} onClick={handleCopy} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Scanner;

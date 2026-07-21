

import React from 'react';
import './Banner.css';
import { FaArrowRight, FaGift } from 'react-icons/fa';

function Banner() {
    return (
        <div className="banner-container px-3 mt-3">
            <div className="promo-card bg-primary text-white rounded-4 p-3 d-flex justify-content-between align-items-center">
                <div className="promo-text">
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <FaGift size={18} className="text-warning" />
                        <h6 className="mb-0 fw-bold" style={{ fontSize: '14px' }}>Invite friends, get ₹201</h6>
                    </div>
                    <p className="mb-0 text-white-50" style={{ fontSize: '12px' }}>When your friend sends their first payment.</p>
                </div>
                <div className="promo-action">
                    <button className="btn btn-light btn-sm rounded-pill fw-bold" style={{ fontSize: '12px', color: '#1a73e8' }}>
                        Invite
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;




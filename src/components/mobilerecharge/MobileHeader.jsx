import React from 'react';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


function MobileHeader() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };
    return (
        <div className="container header position-sticky top-0 bg-light z-3">
            <div className="row align-items-center py-2">
                <div className="col-1">
                    <HiArrowLeft
                        size={16}
                        className="mb-0 "
                        onClick={handleBack}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="col-9">
                    <h3 className="mb-0" style={{fontSize:'16px'}}>Mobile Reacharge</h3>
                </div>
                <div className="col-2 text-end">
                    <HiOutlineDotsVertical
                        size={20}
                        className="text-dark"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
    );
}
export default MobileHeader;




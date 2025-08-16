import React from 'react';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function PayBillHeader() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };
    return (
        <div className="container position-sticky top-0 z-3 bg-light" >
            <div className="header ">
                <div className="row align-items-center py-2 flex-nowrap">
                    <div className="col-6">
                        <HiArrowLeft
                            size={16}
                            className="mb-0 "
                            onClick={handleBack}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                   
                    <div className="col-6 text-end">
                        <HiOutlineDotsVertical
                            size={20}
                            className="text-dark"
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayBillHeader;
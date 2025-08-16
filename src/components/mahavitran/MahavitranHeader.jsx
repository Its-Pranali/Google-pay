import React from 'react';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
function MahavitranHeader() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };
    return (
        <div className="container position-sticky top-0 z-3 bg-light" >
            <div className="header ">
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
                        <div className="d-flex align-items-center">
                            <img src="assets/images/Light-bill.jpg" className="prepaid-logo w-100" />
                            <div>
                                <h3 className="mb-0 px-2" style={{ fontSize: '16px' }}>Mahavitran - Maharas...</h3>
                                <p className="text-muted px-2 mb-0" style={{ fontSize: '12px' }}>Bharat Connect</p>
                            </div>

                        </div>

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
        </div>
    );
}

export default MahavitranHeader;
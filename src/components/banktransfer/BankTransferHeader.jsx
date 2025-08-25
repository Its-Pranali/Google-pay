import React from 'react';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function BankTransferHeader() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div className="container position-sticky top-0 z-3 bg-light" >
            <div className="header ">
                <div className="row align-items-center py-2 flex-nowrap">
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
                            <h3 className="mb-0 px-2" style={{ fontSize: '16px' }}>Bank transfer</h3>
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

export default BankTransferHeader;
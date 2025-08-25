// import { BsX } from 'react-icons/bs';
import { HiOutlineDotsVertical, HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function PayHeader() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="header">
                <div className="row align-items-center py-2">
                    <div className="col-1">
                        {/* <BsX
                            size={20}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)} 
                        /> */}
                        <HiArrowLeft
                            size={16}
                            className="mb-0 "
                            onClick={() => navigate(-1)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="col-9"></div>
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

export default PayHeader;

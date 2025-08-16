import { BsX } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function RechargeHeader() {
    const navigate = useNavigate();

    return (
        <div className="container position-sticky top-0 z-3 bg-light">
            <div className="header">
                <div className="row align-items-center py-2">
                    <div className="col-1">
                        <BsX
                            size={20}
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(-1)} 
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

export default RechargeHeader;

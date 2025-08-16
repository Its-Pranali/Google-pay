
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
function QrScann() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };
    return (
        <div className="">

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
            <div className="container">
                <div className="row py-2">
                    <div className="scanner-block bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center py-2">
                            <div className="letter-icon d-flex align-items-center justify-content-center">
                                R
                            </div>
                            <h2 className="mb-0 px-2" style={{ fontSize: '14px' }}>John</h2>
                        </div>
                        <img src="/assets/images/Scanner-img.jpg" className="w-100" />
                        <p className="text-muted text-center mb-0 py-2" style={{fontSize:'10px'}}>Scan to pay with any UPI app</p>
                        <h3 className="mb-0 text-center" style={{fontSize:'10px'}}>UPI ID: john1000-12@okaxisbank</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QrScann;
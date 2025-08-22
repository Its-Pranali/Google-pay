import { HiChevronRight } from 'react-icons/hi';
import { FaBolt, FaTv, FaGooglePlay, FaCar, FaRupeeSign } from 'react-icons/fa';
import { RiSmartphoneLine } from 'react-icons/ri';
import { MdOutlineLightbulb, MdCreditCard, MdRouter } from 'react-icons/md';
import { FiWifi } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import GasCylinderIcon from '../GasCylinderIcon';

function PaymentCategory() {
    return (
        <div className="container">
            <div className="row align-items-center pb-3">
                <div className="col-8" >
                    <h3 className="mb-0" style={{ fontSize: '15px' }}>Payment categories</h3>
                </div>
                <div className="col-4 text-end" >
                    {/* <a href="#" className=" text-decoration-none" style={{ fontSize: '12px' }}>View all</a> */}
                    <a href="#" className=" text-decoration-none" style={{ fontSize: '12px' }}>View all <HiChevronRight className=" text-primary" size={16} /></a>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-4">
                    <Link to="/mobile-recharge" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center ">
                                <RiSmartphoneLine size={40} className="mb-2 b text-primary" />
                                <FaBolt size={14} className="position-absolute battery-icon fa-bolt  text-primary" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Mobile recharge</p>
                        </div>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/electricity" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center ">
                                <MdOutlineLightbulb size={46} className="text-primary pb-2" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Electricity</p>
                        </div>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/dth-file" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center pb-2">
                                <FaTv size={30} className="text-primary" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>DTH / Cable TV</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-4">
                    <Link to="/fastag" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center position-relative">
                                <FaCar className="text-primary" size={30} />
                                <FiWifi className="text-primary wifi-icon position-absolute" aria-label="wifi" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>FASTag recharge</p>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/google-play" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center position-relative">
                                <FaGooglePlay aria-label="Google Play" className="text-primary pb-2" size={30} />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Google Play</p>
                        </div>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/credit-cards" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center position-relative">
                                <MdCreditCard size={40} className="text-primary pb-2" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Credit cards</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-4">
                    <Link to="/gas-booking" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center ">
                                <GasCylinderIcon size={40} className="text-primary" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Gas cylinder booking</p>
                        </div>
                    </Link>
                </div>

                <div className="col-4">
                    <Link to="/broadband" className="text-decoration-none text-dark">
                        <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                            <div className="text-center ">
                                <MdRouter size={40} className="text-primary mb-2" />
                            </div>
                            <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Broadband / Landline</p>
                        </div>
                    </Link>
                </div>

                <div className="col-4">
                    <div className="position-relative category-card card shadow border-0 px-3 py-2 d-flex justify-content-center align-items-center">
                        <div className="position-relative text-center">
                            <RiSmartphoneLine size={40} className="text-primary mb-2" />
                            <FaRupeeSign size={13} className="position-absolute text-primary fa-rupee" />
                        </div>
                        <p className="text-center mb-0 fw-bold" style={{ fontSize: '12px', lineHeight: '14px' }}>Postpaid mobile</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentCategory;
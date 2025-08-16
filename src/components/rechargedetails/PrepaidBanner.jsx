import { Link } from 'react-router-dom';
import { FaChevronDown, FaCheck } from 'react-icons/fa';

function PrepaidBanner() {
    return (
        <div className="container py-3">
            <div className="text-center">
                <img src="./assets/images/Airtel-logo.png" className="w-100 banner-pre-logo" />
                <h3 className="mb-0 pt-2" style={{ fontSize: '12px' }}>Airtel Prepaid</h3>
                <h2 className="py-2">₹ 210.90</h2>
                <button className="rounded-pill recharge-btn border-0 py-2 text-light px-3" style={{ fontSize: '12px' }}>Repeat Reacharge</button>
                <div className="d-flex align-items-center justify-content-center py-2">
                    <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                    <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>Paid . 25 Jun 2025</p>
                </div>
                <div className="hr-line">
                    <hr className="my-1" />
                </div>
                <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>10 Jul 2025, 1:02 pm</p>
            </div>
        
            <div className="block py-3">
                <div className="card">
                    <div className="d-flex justify-content-between py-2">
                        <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Plan price</p>
                        <p className="mb-0 px-2" style={{ fontSize: '12px' }}>₹209</p>
                    </div>

                    <div className="d-flex justify-content-between py-2">
                        <div>
                            <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Platform free</p>
                            <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>Free for seamless bill payments <br />and recharges (inclusive of GST)</p>
                        </div>

                        <p className="mb-0 px-2" style={{ fontSize: '12px' }}>₹1.90</p>

                    </div>
                    <div className="hr-line-new">
                        <hr className="my-2" />
                    </div>
                    <div className="d-flex justify-content-between py-2">
                        <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Total amount</p>
                        <p className="mb-0 px-2" style={{ fontSize: '12px' }}>₹210.90</p>
                    </div>
                </div>
            </div>

            <div className="block py-3">
                <div className="card ">
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex">
                            <FaCheck className="border bg-success rounded-circle text-light mt-2" style={{ padding: '2px' }} size={14} />
                            <div>
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>₹210.90 paid</p>
                                <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>10 Jul 2025, 1:02 pm</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="./assets/images/IDBI.png" className="pay-icon me-2" />
                            <FaChevronDown size={10} style={{ cursor: 'pointer' }} />
                        </div>
                        
                    </div>
                    <hr className="my-2"/>
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex">
                            <FaCheck className="border border-success bg-light rounded-circle text-success mt-2" style={{ padding: '2px' }} size={14} />
                            <div>
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Payment started</p>
                                <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>10 Jul 2025, 1:02 pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex">
                            <FaCheck className="border border-success bg-light rounded-circle text-success mt-1" style={{ padding: '2px' }} size={14} />
                            <div>
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Pay intermediary</p>
                                
                            </div>
                        </div>
                    </div>
                     <div className="d-flex justify-content-between p-2">
                        <div className="d-flex">
                            <FaCheck className="border border-success bg-light rounded-circle text-success mt-2" style={{ padding: '2px' }} size={14} />
                            <div>
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Recharge processed</p>
                                <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>Your recharge should shortly in your Airtel Prepaid account</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2"/>

                    <div className="p-2">
                         <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Form</p>
                         <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>abc123-2@oksbi</p>
                    </div>
                    <div className="p-2">
                         <p className="mb-0 px-2" style={{ fontSize: '12px' }}>UPI transaction ID</p>
                         <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>2435647677678687</p>
                    </div>

                    <div className="p-2">
                         <p className="mb-0 px-2" style={{ fontSize: '12px' }}>UPI transaction ID</p>
                         <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>2435647677678687</p>
                    </div>

                    <div className="p-2">
                         <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Mobile number</p>
                         <p className="mb-0 px-2 text-muted" style={{ fontSize: '12px' }}>9879874345</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrepaidBanner;
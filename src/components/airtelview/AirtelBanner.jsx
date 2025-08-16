
import { Link } from 'react-router-dom';
import { FaAngleRight, FaCheck } from 'react-icons/fa';
function AirtelBanner() {
    return (
        <div className="container py-2 overlay">
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">
                        <h3 style={{ fontSize: '14px' }}>Recharge order</h3>
                        <h2 className="mb-1">₹210.90</h2>
                        <p style={{ fontSize: '12px' }}>Plan price ₹209.00</p>
                        <Link to="/airtel-prepaid" className="text-decoration-none text-dark">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                    <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 25 Jun 2025</p>
                                </div>
                                <FaAngleRight />
                            </div>
                        </Link>

                        <Link to="/recharge" className="text-decoration-none text-dark">
                            <button className="w-100 border-0 rounded-pill recharge-btn py-2" style={{ fontSize: '12px' }}>
                                Repeat recharge
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">
                        <h3 style={{ fontSize: '14px' }}>Recharge order</h3>
                        <h2 className="mb-1">₹210.90</h2>
                        <p style={{ fontSize: '12px' }}>Plan price ₹209.00</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 25 Jun 2025</p>
                            </div>
                            <FaAngleRight />
                        </div>

                        <button className="w-100 border-0 rounded-pill recharge-btn py-2" style={{ fontSize: '12px' }}>
                            Repeat recharge
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">
                        <h3 style={{ fontSize: '14px' }}>Recharge order</h3>
                        <h2 className="mb-1">₹210.90</h2>
                        <p style={{ fontSize: '12px' }}>Plan price ₹209.00</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 25 Jun 2025</p>
                            </div>
                            <FaAngleRight />
                        </div>

                        <button className="w-100 border-0 rounded-pill recharge-btn py-2" style={{ fontSize: '12px' }}>
                            Repeat recharge
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">
                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">
                        <h3 style={{ fontSize: '14px' }}>Recharge order</h3>
                        <h2 className="mb-1">₹210.90</h2>
                        <p style={{ fontSize: '12px' }}>Plan price ₹209.00</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">


                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 25 Jun 2025</p>
                            </div>
                            <FaAngleRight />


                        </div>

                        <button className="w-100 border-0 rounded-pill recharge-btn py-2" style={{ fontSize: '12px' }}>
                            Repeat recharge
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AirtelBanner;

import { FaAngleRight, FaCheck } from 'react-icons/fa';
import { FiClock } from "react-icons/fi"; // Feather style
import { Link } from 'react-router-dom';
function MahavitranBanner() {
    return (
        <div className="container">
            <div className="py-1">

                <div className="d-flex justify-content-start">
                    <div className="card border-0 shadow p-2 rounded w-50">

                        <h2 className="mb-1">₹580</h2>
                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill date</p>
                        <p style={{ fontSize: '12px' }}>8 Nov 2024</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">

                                <p className="mb-0" style={{ fontSize: '12px' }}>Expired . 28 Nov 2024</p>
                            </div>
                            <FaAngleRight />
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">

                        <h2 className="mb-1">₹670</h2>
                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill date</p>
                        <p style={{ fontSize: '12px' }}>8 Dec 2024</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 21 Dec 2024</p>
                            </div>
                            <FaAngleRight />
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">

                        <h2 className="mb-1">₹670</h2>
                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill date</p>
                        <p style={{ fontSize: '12px' }}>8 Dec 2024</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 21 Dec 2024</p>
                            </div>
                            <FaAngleRight />
                        </div>

                    </div>
                </div>
            </div>
            <hr />
            <div className="py-1">

                <div className="d-flex justify-content-end">
                    <div className="card border-0 shadow p-2 rounded w-50">

                        <h2 className="mb-1">₹820</h2>
                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill date</p>
                        <p style={{ fontSize: '12px' }}>8 Jan 2025</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FaCheck className="border bg-success rounded-circle text-light" style={{ padding: '2px' }} size={14} />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Paid . 15 Jan 2025</p>
                            </div>
                            <FaAngleRight />
                        </div>

                    </div>
                </div>
            </div>

            <hr />

            <div className="py-1">

                <div className="d-flex justify-content-start">
                    <div className="card border-0 shadow p-2 rounded w-50">

                        <h2 className="mb-1">₹540</h2>
                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill date</p>
                        <p style={{ fontSize: '12px' }}>8 Aug 2025</p>

                        <p className="mb-0" style={{ fontSize: '10px' }}>Due date</p>
                        <p style={{ fontSize: '12px' }}>28 Aug 2025</p>

                        <p className="mb-0" style={{ fontSize: '10px' }}>Bill number</p>
                        <p style={{ fontSize: '12px' }}>000002974859450</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <FiClock size={12} className="" />
                                <p className="mb-0 px-2" style={{ fontSize: '12px' }}>Not paid</p>
                            </div>
                            <FaAngleRight />
                        </div>
                        <Link to="/pay-bill" className="text-decoration-none text-dark">
                            <button className="w-100 border-0 rounded-pill recharge-btn py-2" style={{ fontSize: '12px' }}>
                                Pay Bill
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MahavitranBanner;
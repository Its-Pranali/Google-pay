import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { RiSmartphoneLine } from 'react-icons/ri';
import { MdCreditCard, MdRouter } from 'react-icons/md';
import { FaRupeeSign, FaBolt } from 'react-icons/fa';
import './Bills.css';

function Bills() {
    return (
        <div className="bills-container px-3 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>Bills & recharges</h3>
                <Link to="/manage" className="text-decoration-none bg-light px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1" style={{ fontSize: '12px', color: '#1a73e8', fontWeight: '500' }}>
                    Manage <HiChevronRight size={14} />
                </Link>
            </div>

            <div className="row g-3">
                {/* Row 1 */}
                <div className="col-3 text-center">
                    <Link to="/airtel" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon bg-light mb-1 overflow-hidden">
                            <img src="assets/images/Airtel-logo.png" className="w-100 h-100 object-fit-contain" alt="Airtel" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Ai&background=ff0000&color=fff&rounded=true' }} />
                        </div>
                        <span className="biller-name text-truncate-2">Airtel Prepaid</span>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link to="/jio" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon bg-light mb-1 overflow-hidden">
                            <img src="assets/images/Jio.png" className="w-100 h-100 object-fit-contain" alt="Jio" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Ji&background=0055a5&color=fff&rounded=true' }} />
                        </div>
                        <span className="biller-name text-truncate-2">Jio Prepaid</span>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <div className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon bg-light mb-1 overflow-hidden">
                            <img src="assets/images/vi.png" className="w-100 h-100 object-fit-contain" alt="Vi" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Vi&background=ed1c24&color=fff&rounded=true' }} />
                        </div>
                        <span className="biller-name text-truncate-2">Vi Prepaid</span>
                    </div>
                </div>
                <div className="col-3 text-center">
                    <Link to="/mahavitran" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon bg-light mb-1 overflow-hidden">
                            <img src="assets/images/Light-bill.jpg" className="w-100 h-100 object-fit-contain" alt="Mahavitran" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Ma&background=ff9900&color=fff&rounded=true' }} />
                        </div>
                        <span className="biller-name text-truncate-2">Mahavitaran</span>
                    </Link>
                </div>

                {/* Row 2 */}
                <div className="col-3 text-center">
                    <Link to="/mobile-recharge" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon mb-1 d-flex justify-content-center align-items-center position-relative">
                            <RiSmartphoneLine size={24} className="text-primary" />
                            <FaBolt size={10} className="position-absolute text-warning" style={{bottom: '12px', right: '12px'}} />
                        </div>
                        <span className="biller-name text-truncate-2">Mobile recharge</span>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link to="/credit-cards" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon mb-1 d-flex justify-content-center align-items-center">
                            <MdCreditCard size={24} className="text-primary" />
                        </div>
                        <span className="biller-name text-truncate-2">Credit cards</span>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link to="/mobile-postpaid" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon mb-1 d-flex justify-content-center align-items-center position-relative">
                            <RiSmartphoneLine size={24} className="text-primary" />
                            <FaRupeeSign size={10} className="position-absolute text-success" style={{bottom: '12px', right: '12px'}} />
                        </div>
                        <span className="biller-name text-truncate-2">Postpaid mobile</span>
                    </Link>
                </div>
                <div className="col-3 text-center">
                    <Link to="/broadband" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                        <div className="biller-icon mb-1 d-flex justify-content-center align-items-center">
                            <MdRouter size={24} className="text-primary" />
                        </div>
                        <span className="biller-name text-truncate-2">Broadband</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Bills;
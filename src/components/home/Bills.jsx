import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { RiSmartphoneLine } from 'react-icons/ri';
import { MdCreditCard, MdRouter } from 'react-icons/md';
import { FaRupeeSign, FaBolt } from 'react-icons/fa';
import './Bills.css';
function Bills() {
    return (
        <div className="container">
            <div className="row align-items-center pb-3">
                <div className="col-8" >
                    <h3 className="mb-0" style={{ fontSize: '15px' }}>Bills & recharges</h3>
                </div>
                <div className="col-4 text-end" >
                    <Link to="/manage" className="text-decoration-none text-dark">
                        <a href="#" className=" text-decoration-none" style={{ fontSize: '12px' }}>Manage <HiChevronRight className=" text-primary" size={16} /></a>
                    </Link>

                </div>
            </div>

            <div className=" row d-flex justify-content-between align-items-center py-2">
                <div className="icon-box text-center col-3">
                    <Link to="/airtel" className="text-decoration-none text-dark">
                        <img src="assets/images/Airtel-logo.png" className="bill-img mb-2 w-100" />

                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Airtel<br />Prepaid</p>
                    </Link>

                </div>
                <div className="icon-box text-center col-3">
                    <Link to="/jio" className="text-decoration-none text-dark">
                        <img src="assets/images/Jio.png" className="bill-img mb-2 w-100" />
                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Jio <br />Prepaid</p>
                    </Link>

                </div>
                <div className="icon-box text-center col-3">
                    <img src="assets/images/vi.png" className="bill-img mb-2 w-100" />
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Vi <br />Prepaid</p>
                </div>
                <div className="icon-box text-center col-3">
                    <Link to="/mahavitran" className="text-decoration-none text-dark">
                        <img src="assets/images/Light-bill.jpg" className="bill-img mb-2 w-100" />
                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Mahavitaran <br />-Maharas...</p>
                    </Link>

                </div>




            </div>
            <div className="row py-2">
                <div className="icon-box text-center col-3">
                    {/* <img src="assets/images/Airtel-logo.png" className="bill-img mb-2 w-100" /> */}
                    <Link to="/mobile-recharge" className="text-decoration-none text-dark">
                        <div className="position-relative">
                            <RiSmartphoneLine size={40} className="text-muted sc-icon bill-icon mb-2" />
                            <FaBolt size={11} className="position-absolute text-muted battery-icon" />
                        </div>
                        <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Mobile<br />Recharge</p>
                    </Link>

                </div>
                <div className="icon-box text-center col-3">
                    {/* <img src="assets/images/Jio.png" className="bill-img mb-2 w-100" /> */}
                    <MdCreditCard size={40} className="text-muted sc-icon bill-icon mb-2" />
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Credit cards<br /></p>
                </div>
                <div className="icon-box text-center col-3">
                    {/* <img src="assets/images/vi.png" className="bill-img mb-2 w-100" /> */}
                    <div className="position-relative">
                        <RiSmartphoneLine size={40} className="text-muted bill-icon sc-icon mb-2" />
                        <FaRupeeSign size={13} className="position-absolute text-muted rupiee-icon" />
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Postpaid <br />mobile</p>
                </div>
                <div className="icon-box text-center col-3">
                    {/* <img src="assets/images/Light-bill.jpg" className="bill-img mb-2 w-100" /> */}
                    <MdRouter size={40} className="text-muted sc-icon bill-icon mb-2" />
                    <p style={{ fontSize: '14px', lineHeight: '16px' }} className="mb-0">Broadband/ <br />Landline</p>
                </div>
            </div>
        </div>
    );
}
export default Bills;
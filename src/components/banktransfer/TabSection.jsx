import { useState } from "react";

function TabSection() {
    const [activeTab, setActiveTab] = useState("others");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [amount, setAmount] = useState("");

    const isFormValid = accountNumber.trim() !== "" && ifscCode.trim() !== "";

    return (
        <div className="container">
            {/* Tab Header */}
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item w-50 d-flex justify-content-center">
                    <button className={`nav-link border-0 text-center text-dark ${activeTab === "others" ? "active" : ""}`} onClick={() => setActiveTab("others")}>To Others</button>
                </li>
                <li className="nav-item w-50 d-flex justify-content-center">
                    <button className={`nav-link border-0 text-center text-dark ${activeTab === "self" ? "active" : ""}`} onClick={() => setActiveTab("self")}>To Self</button>
                </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content mt-3">
                {activeTab === "others" && (
                    <div className="tab-pane fade show active">
                        <h4 style={{fontSize:'18px'}}>Receiver's Bank Details</h4>
                        <div>
                      

                            <form class="tab-form">
                                <div className="input-container">
                                    <div className="form-group position-relative my-3" >
                                        <input
                                            type="text"
                                            className="form-control floating-input py-2"
                                            id="accountNumber"
                                            placeholder=" "
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                        <label htmlFor="accountNumber" className="floating-label">Bank account number</label>
                                    </div>
                                    <div className="form-group position-relative my-3">
                                        <input
                                            type="text"
                                            className="form-control floating-input py-2"
                                            id="ifscCode"
                                            placeholder=" "
                                            value={ifscCode}
                                            onChange={(e) => setIfscCode(e.target.value)}
                                            style={{ fontSize: '14px' }}
                                        />
                                        <label htmlFor="ifscCode" className="floating-label">IFSC code</label>
                                        <a
                                            href="https://www.rbi.org.in/Scripts/IFSCMICRDetails.aspx"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="position-absolute top-50 end-0 translate-middle-y me-2 text-primary text-decoration-none"
                                            style={{ fontSize: '12px' }}
                                        >
                                            Search for IFSC
                                        </a>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            type="submit"
                                            className={`btn rounded-pill ${isFormValid ? "btn-primary" : "btn-secondary"}`}
                                            disabled={!isFormValid}
                                        >
                                            Continue
                                        </button>
                                    </div>

                                </div>
                                <p className="text-muted mb-0 text-center py-3" style={{fontSize:'12px'}}>This information will be securely saved as per Google Pay Terms of Service and Privacy Policy</p>
                            </form>

                        </div>
                        <h4 style={{fontSize:'18px'}}>Recent transfers</h4>
                        <div className="d-flex align-items-center">
                            <div className="">
                                
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "self" && (
                    <div className="tab-pane fade show active">
                        <h4>Transfer to Self</h4>
                        <div className="card p-3">
                            <p>Your Account Details:</p>
                            <p className="fw-bold">Account No: 1234 5678 9012</p>
                            <p className="fw-bold">Bank: HDFC Bank</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TabSection;

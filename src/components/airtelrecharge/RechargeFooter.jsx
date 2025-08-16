import React, { useState } from 'react';
import { FaChevronDown, FaUniversity, FaCreditCard, FaExternalLinkAlt } from 'react-icons/fa';
import { MdCreditCard } from 'react-icons/md';

function RechargeFooter() {
    const allBanks = [
        {
            name: 'Bank of India',
            number: '....1234',
            logo: '/assets/images/Boi.png'
        },
        {
            name: 'HDFC Bank',
            number: '....5678',
            logo: '/assets/images/HDFC.png'
        },
        {
            name: 'IDBI Bank',
            number: '....7890',
            logo: '/assets/images/IDBI.png'
        }
    ];

    const [selectedBank, setSelectedBank] = useState(allBanks[0]);
    const [showBanks, setShowBanks] = useState(false);

    const toggleBanks = () => {
        setShowBanks(!showBanks);
    };

    const handleBankSelect = (bank) => {
        setSelectedBank(bank);
        setShowBanks(false);
    };

    // Exclude the selected bank from dropdown
    const otherBanks = allBanks.filter(bank => bank.name !== selectedBank.name);

    return (
        <div className="position-absolute bottom-0 w-100">
            <div className={`payment-card card shadow border-0 pt-3 px-2 transition-footer ${showBanks ? 'slide-up' : ''}`}>
                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Choose account or card to pay with</p>

                {/* Selected Bank */}
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center w-100 py-3">
                        <img src={selectedBank.logo} className="pay-icon me-2" alt={selectedBank.name} />
                        <div>
                            <h3 className="mb-0" style={{ fontSize: '14px' }}>{selectedBank.name} {selectedBank.number}</h3>
                            <p className="mb-0" style={{ fontSize: '12px' }}>
                                Balance: <span className="text-primary">Check now</span>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaChevronDown
                            size={12}
                            className="text-dark"
                            style={{ cursor: 'pointer' }}
                            onClick={toggleBanks}
                        />
                    </div>
                </div>

                {/* Dropdown with remaining banks */}
                {showBanks && (
                    <div>
                        <div className="additional-banks">
                            {otherBanks.map((bank, index) => (
                                <div key={index} className="bank-item d-flex align-items-center py-3" onClick={() => handleBankSelect(bank)} style={{ cursor: 'pointer' }}>
                                    <img src={bank.logo} className="pay-icon me-2" alt={bank.name} />
                                    <div>
                                        <h3 className="mb-0" style={{ fontSize: '14px' }}>{bank.name} {bank.number}</h3>
                                        <p className="mb-0" style={{ fontSize: '12px' }}>Balance: <span className="text-primary">Check now</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add bank / card section */}
                        <div className="addBank">
                            <div className="bank-item d-flex align-items-center py-3">
                                <FaUniversity className="text-primary add-bank-logo" size={30} />
                                <h3 className="mb-0 text-primary px-2" style={{ fontSize: '14px' }}>Add bank account</h3>
                            </div>

                            <div className="bank-item d-flex align-items-center py-3">
                                <FaCreditCard className="text-primary add-bank-logo" size={30} />
                                <h3 className="mb-0 text-primary px-2" style={{ fontSize: '14px' }}>Add RuPay credit card on UPI</h3>
                            </div>

                            {/* <div className="bank-item align-items-center d-flex py-3">
                                <MdCreditCard className="text-primary add-bank-logo" size={35} />
                                <div className="">
                                    <h3 className="mb-0 text-primary px-2" style={{ fontSize: '14px' }}>Add card</h3>
                                    <p className="px-2 mb-0" style={{ fontSize: '11px' }}>
                                        Only selected Visa and Mastercard banks supported at the moment. <span className="text-primary text-decoration-underline">Learn More</span>
                                    </p>
                                </div>
                            </div> */}

                            <div className="bank-item d-flex align-items-center py-3">
                                <FaExternalLinkAlt className="text-primary add-bank-logo" size={30} />
                                <h3 className="mb-0 text-primary px-2" style={{ fontSize: '14px' }}>Add RuPay credit card on UPI</h3>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pay button */}
                <div className="pay-btn w-100">
                    <button className="bg-primary rounded-pill border-0 w-100 text-light py-2">
                        Pay ₹210.90
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src="/assets/images/sbi.jpg" style={{ height: '23px', objectFit: 'cover', borderRight: '1px solid #000' }} className="f-logo w-100 my-3 border-right" />
                        <img src="/assets/images/UPI.png" style={{ height: '20px', objectFit: 'contain' }} className="f-logo w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RechargeFooter;

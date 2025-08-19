import { FaChevronDown, FaCheck, FaPen,FaPlus  } from "react-icons/fa";

import { FiTrash2 } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function RechargeCode() {
    return (
        <div className="container py-2">
            <div className="d-flex gap-2 align-items-center">
                <img
                    src="./assets/images/current-google-play-icon.jpg"
                    className="w-100 google-play-img border rounded-circle"
                    alt="Google Play"
                />
                <div>
                    <h2 className="mb-0" style={{ fontSize: "20px" }}>
                        Google Play recharge code
                    </h2>
                    <div className="d-flex align-items-center gap-2">
                        <p
                            className="mb-0 border rounded-circle px-2 py-1 bg-secondary"
                            style={{ fontSize: "10px" }}
                        >
                            J
                        </p>
                        <p className="mb-0" style={{ fontSize: "13px" }}>
                            johnran100@gmail.com
                        </p>

                        {/* Dropdown Icon triggers modal */}
                        <FaChevronDown
                            size={12}
                            className="text-dark"
                            role="button"
                            data-bs-toggle="modal"
                            data-bs-target="#bottomModal"
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>

            {/* Modal (Bottom Sheet Style) */}
            <div
                className="modal fade"
                id="bottomModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-bottom">
                    <div className="modal-content rounded-top modal-container border-0">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">Select account</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-3">
                                    <FaCheck className="text-light bg-primary border rounded-circle p-1" size={20} />  {/* green check */}

                                    <div>
                                        <h3 className="mb-0" style={{ fontSize: '14px' }}> johnran100@gmail.com</h3>
                                        <p className="mb-0" style={{ fontSize: "12px" }}>Email ID:</p>
                                        <p className="mb-0" style={{ fontSize: "12px" }}>johnran100@gmail.com</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <FaPen className="text-primary " size={16} />
                                    <FiTrash2 className="text-primary " size={16} />
                                </div>
                            </div>
                            <div className="d-flex gap-3 pt-3">
                                <FaPlus  className="text-primary border-primary border rounded-circle p-1" size={20} />
                                <h3 className="mb-0 text-primary" style={{ fontSize: '14px' }}> Link account</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Extra CSS for bottom sheet effect */}
            <style>{`
                .modal-bottom {
                    position: fixed;
                    bottom: 0;
                    margin: 0;
                    width: 100%;
                    max-width: 100%;
                }

                .modal-bottom .modal-content {
                    border-top-left-radius: 1rem;
                    border-top-right-radius: 1rem;
                }

                /* Slide-up animation */
                .modal.fade .modal-dialog {
                    transform: translateY(100%);
                    transition: transform 0.3s ease-out;
                }
                .modal.show .modal-dialog {
                    transform: translateY(0);
                }
            `}</style>
        </div>
    );
}

export default RechargeCode;


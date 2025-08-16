import { HiChevronRight } from 'react-icons/hi';

function ViewChecklist() {
    return (
        <div className="container">
            <div className="row align-items-center pb-3">
                <div className="col-8" >
                    <h3 className="mb-0" style={{ fontSize: '15px' }}>Your checklist (12)</h3>
                </div>
                <div className="col-4 text-end" >
                    <a href="#" className=" text-decoration-none" style={{ fontSize: '12px' }}>Add new</a>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <div class="position-relative">
                        <img src="assets/images/Light-bill.jpg" className="operator-logo w-100" />
                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>John</h2>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Electricity</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Bill due in 17 days</p>
                    </div>
                </div>
                <div>
                    <a href="" className="btn tect-decoration-none rounded-pill border text-primary px-3" style={{ fontSize: '12px' }}>₹540</a>
                </div>

            </div>

            <div className="d-flex py-3 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div
                            className="letter-icon d-flex align-items-center justify-content-center"

                        >
                            R
                        </div>
                        <img src="assets/images/Airtel-logo.png" className="suffix-logo w-100" />
                    </div>

                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '14px' }}>Ram</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Mobile recharge</p>
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Plan valid till 3 Sept</p>
                </div>
            </div>

            <div className="d-flex py-3 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div
                            className="letter-icon d-flex align-items-center justify-content-center"

                        >
                            G
                        </div>
                        <img src="assets/images/Jio.png" className="suffix-logo w-100" />
                    </div>

                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '14px' }}>Gita</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>Mobile recharge</p>
                    <p className="text-muted mb-0" style={{ fontSize: '12px' }}>+91 7098786576</p>
                </div>
            </div>

            <a href="" className="btn border rounded-pill w-100 text-primary my-3" style={{fontSize:'14px'}}>View all</a>
        </div>
    );
}

export default ViewChecklist;

function PopularBanks() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between alihn-items-center py-2">
                <h3 className="mb-0" style={{ fontSize: '14px' }}>Popular banks</h3>
            </div>

            <div className="row">
                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/IDFC-bank.jpg" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>IDFC FIRST FASTTag</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/ICICI-Bank.jpg" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>ICICI FASTTag</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/Indusland.png" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>Indusland FASTTag</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/Kotak-bank.png" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>Kotak FASTTag</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/Airtel-bank.jpg" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>Airtel Payments</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2">
                    <div className="bg-light rounded p-3">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/assets/images/HDFC.png" className="w-100 popular-icon rounded-circle " />
                            <p className="mb-0" style={{ fontSize: '12px' }}>HDFC Bank FASTag</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularBanks;
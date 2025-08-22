

function GasProvider() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between alihn-items-center py-2">
                <h3 className="mb-0" style={{ fontSize: '14px' }}>All gas providers</h3>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <img src="assets/images/Bharat Gas (BPCL).jpg" className="operator-logo w-100" />
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Bharat Gas (BPCL)</h2>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <img src="assets/images/Bharat Gas (BPCL) - Commercial.png" className="operator-logo w-100" />
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Bharat Gas (BPCL) - Commercial</h2>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <img src="assets/images/HP.png" className="operator-logo w-100" />
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>HP Gas Cylinder (LPG)</h2>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <img src="assets/images/Indane-Gas.jpg" className="operator-logo w-100" />
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Indane Gas (Indian Oil)</h2>
                </div>
            </div>
        </div>
    );
}

export default GasProvider;
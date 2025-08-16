

function LinkedAccount() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="pt-3" style={{ fontSize: '16px' }}>Linked accounts</h2>
                </div>

                <div className="d-flex py-2 align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div class="position-relative">
                            <img src="assets/images/Light-bill.jpg" className="operator-logo w-100" />
                        </div>
                        <div className="px-3">
                            <h2 className="mb-0" style={{ fontSize: '14px' }}>John</h2>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Mahavitran - Maharashtra <br />Electricity (MSCDCL)</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Bill due in 17 days</p>
                        </div>
                    </div>
                    <div>
                        <a href="" className="btn tect-decoration-none rounded-pill border text-primary px-3" style={{ fontSize: '12px' }}>₹540</a>
                    </div>

                </div>
            </div>
            <hr />
        </div>

    );
}

export default LinkedAccount;
import { FaInfoCircle } from "react-icons/fa";
function Supplier() {
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <h2 className="" style={{ fontSize: '16px' }}>Select your electricity supplier</h2>
                </div>

                <div className=" py-2 d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="mb-0" style={{ fontSize: '12px' }}>suggested</h3>
                    </div>

                    <div>
                        <FaInfoCircle className="" />
                    </div>

                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/Light-bill.jpg" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Mahavitran - Maharashtra Electricity (MSEDCL)</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/adani.png" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Adani Electricity</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/best.jpg" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>BEST - Brihan Mumbai Electricity</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/tata-power.jpg" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Tata Power Mumbai</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/torient.png" className="operator-logo w-100 p-1" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Torrent Power</h2>

                    </div>
                </div>
            </div>
            <hr className="mt-0" />
            <div className="container">
                <div>
                    <h3 className="mb-0 py-2" style={{ fontSize: '12px' }}>All electricity suppliers</h3>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/adani.png" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Adani Electricity</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/ajmer.png" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Ajmer Vidyut (AVVNL)</h2>

                    </div>
                </div>

                <div className="d-flex py-2 align-items-center">
                    <div className="">
                        <div class="position-relative">
                            <img src="assets/images/Andhra_Pradesh_Central_Power_Distribution_Company_Limited.png" className="operator-logo w-100" />
                        </div>

                    </div>
                    <div className="px-3">
                        <h2 className="mb-0" style={{ fontSize: '14px' }}>Ajmer Vidyut (AVVNL)</h2>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Supplier;
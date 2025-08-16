import { FiRefreshCw } from "react-icons/fi"; // Feather Icons
import { MdRefresh } from "react-icons/md";   // Material Icons
function MahavitranFooter() {
    return (
        <div className="container">
            <div className="row justify-content-between d-flex alihn-items-center">
                <div className="col-6">
                    <img src="/assets/images/BharatConnect.png" className="w-100 footer-img" />
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <MdRefresh size={20} className="text-primary" />
                </div>
            </div>
        </div>
    );
}

export default MahavitranFooter;
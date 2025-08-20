
import { FaInfoCircle } from "react-icons/fa";
function CreditCardTitle() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center py-2">
                <h2 className="mb-0 py-3" style={{ fontSize: '18px' }}>Select your Bank</h2>
                <FaInfoCircle className="text-light bg-dark rounded-circle border" size={20} style={{ padding: '1px' }} />
            </div>

        </div>
    );
}

export default CreditCardTitle;
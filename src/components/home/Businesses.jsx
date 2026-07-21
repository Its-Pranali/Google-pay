import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Businesses() {
    return (
        <div className="businesses-container px-3 mt-4 mb-0">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>Businesses</h3>
                <Link to="/explore" className="text-decoration-none bg-light px-2 py-1 rounded-pill d-inline-flex align-items-center gap-1" style={{ fontSize: '12px', color: '#1a73e8', fontWeight: '500' }}>
                    Explore <HiChevronRight size={14} />
                </Link>
            </div>

            <div className="text-center text-muted py-4" style={{ fontSize: '12px', backgroundColor: '#f8f9fa', borderRadius: '16px' }}>
                No recent businesses found.
            </div>
        </div>
    );
}

export default Businesses;
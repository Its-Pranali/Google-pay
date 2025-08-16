
import { HiChevronRight } from 'react-icons/hi';
function Businesses() {
    return (
        <div className="container">
            <div className="row align-items-center py-3">
                <div className="col-8" >
                    <h3 className="mb-0" style={{ fontSize: '15px' }}>Businesses</h3>
                </div>
                <div className="col-4 text-end" >
                    <a href="#" className=" text-decoration-none" style={{ fontSize: '12px' }}>Explore <HiChevronRight className=" text-primary" size={16} /></a>
                </div>
            </div>
        </div>
    );
}
export default Businesses;
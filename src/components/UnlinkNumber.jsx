import AirtelHeader from './airtelview/AirtelHeader'
import AirtelPlans from './airtelview/AirtelPlans';
import AirtelBanner from './airtelview/AirtelBanner';

// import './Airtel.css'; // custom styles   
import './airtelview/Airtel.css';

function UnlinkNumber() {
    return (
        <div className=" pb-2">
            <AirtelHeader />

            <div className=" py-2 position-relative" style={{ height: '80vh' }}>
                <h3 style={{ fontSize: '16px' }}>Unlink phone number</h3>
                <button className="bg-primary rounded-pill w-100 border-0 text-light py-2 position-absolute bottom-0">
                    Unlink
                </button>
            </div>

        </div>
    );
}

export default UnlinkNumber;



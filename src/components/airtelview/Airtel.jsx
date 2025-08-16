
import AirtelHeader from './AirtelHeader'
import AirtelPlans from './AirtelPlans';
import AirtelBanner from './AirtelBanner';
import './Airtel.css'; // custom styles
function Airtel() {
    return (
        <div className="">
            <AirtelHeader />
            <AirtelPlans/>
            <AirtelBanner/>
        </div>
    );
}

export default Airtel;
import BroadbandHeader from './BroadbandHeader.jsx';
import Biller from '../electricity/Biller.jsx';
import BroadbandServices from './BroadbandServices.jsx';
import './Broadband.jsx'
function Broadband() {
    return (
        <>
            <BroadbandHeader />
            <Biller />
            <BroadbandServices/>
        </>
    );
}

export default Broadband;
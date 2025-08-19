
import GooglePlayHeader from './GooglePlayHeader';
import GoogleBanner from './GoogleBanner';
import RechargeCode from './RechargeCode';
import './GooglePlay.css';
import MakeRecharge from './MakeRecharge';
function GooglePlay() {
    return (
        <>
            <GooglePlayHeader />
            <GoogleBanner />
            <RechargeCode />
            <MakeRecharge/>
        </>
    );
}

export default GooglePlay;
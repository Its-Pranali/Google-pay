
import JioHeader from './JioHeader';
import JioPlans from './JioPlans';
import JioBanner from './JioBanner';

import './Jio.css'; // custom styles
function Jio() {
    return (
        <div className="">
            <JioHeader />
            <JioPlans />
            <JioBanner />
        </div>
    );
}

export default Jio;
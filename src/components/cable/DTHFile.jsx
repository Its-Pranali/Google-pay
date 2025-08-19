import './DTHFile.css';
import DthHeader from './DthHeader';
import Biller from '../electricity/Biller';
import DTHTitle from './DTHTitle';
import SuggestedCable from './SuggestedCable';
import DTHCableProviders from './DTHCableProviders';

function DTHFile() {
    return (
        <>
            <DthHeader />
            <Biller />
            <DTHTitle/>
            <SuggestedCable/>
            <DTHCableProviders/>
        </>
    );
}

export default DTHFile;
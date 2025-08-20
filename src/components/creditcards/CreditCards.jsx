
import Biller from "../electricity/Biller";
import CreditCardHeader from "./CreaditCardHeader";
import CreditCardTitle from './CreditCardTitle';
import SuggestedCard from './SuggestedCard';
import AllBanks from './AllBanks';

function CreditCards() {
    return (
        <>
            <CreditCardHeader />
            <Biller/>
            <CreditCardTitle/>
            <SuggestedCard/>
            <AllBanks/>
        </>
    );
}
export default CreditCards;
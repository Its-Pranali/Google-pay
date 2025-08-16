import PayBillHeader from './PayBillHeader';
import PayBillBanner from './PayBillBanner';
import RechargeFooter from '../airtelrecharge/RechargeFooter';
function PayBill(){
    return(
        <>
        <PayBillHeader/>
        <PayBillBanner/>
        <RechargeFooter/>
        </>
    );
}

export default PayBill;
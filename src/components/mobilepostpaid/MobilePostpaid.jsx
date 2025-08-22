
import PostpaidHeader from "./PostpainHeader";
import PostpaidTitle from "./PostpaidTitle";
import Biller from "../electricity/Biller";
function MobilePostpaid() {
    return (
        <>
            <PostpaidHeader />
            <Biller/>
            <PostpaidTitle/>
        </>
    );
}

export default MobilePostpaid;
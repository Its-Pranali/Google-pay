import ManageHeader from "./ManageHeader";
import ViewChecklist from "./ViewChecklist";
import PaymentCategory from "./PaymentCategory";
import Suggestions from "./Suggestions";
import './Manage.css';
function Manage() {
    return (
        <>
            <ManageHeader />
            <ViewChecklist />
            <PaymentCategory/>
            <Suggestions/>
        </>

    );
}

export default Manage;


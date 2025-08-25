
import { LuUser, LuArrowRight } from "react-icons/lu";
import SplitExpensesIcon from "../SplitExpensesIcon";

function AllPeople() {
    return (
        <div className="container">
            <div className="row align-items-center py-4">
                <div className="col-8">
                    <h3 className="mb-0" style={{ fontSize: '18px' }}>All peoples on UPI</h3>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div className="letter-icon people-icon d-flex align-items-center justify-content-center postiton-relative">
                            <LuUser size={28} className="position-absolute  text-muted"/>
                            <LuArrowRight size={15} className="position-absolute bottom-0 fw-bold text-muted"/>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Self transfer</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '10px' }}>transfer money between your accounts</p>
                </div>
            </div>



            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div className="letter-icon people-icon d-flex align-items-center justify-content-center">
                           <SplitExpensesIcon clasName="text-muted"/>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Split expenses</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '10px' }}>Share expenses with a group</p>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div className="letter-icon d-flex align-items-center justify-content-center">
                            S
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>7760333176@ybl</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '10px' }}>PhonePe . 7760333176@ybl</p>
                </div>
            </div>

            <div className="d-flex py-2 align-items-center">
                <div className="">
                    <div class="position-relative">
                        <div className="letter-icon d-flex align-items-center justify-content-center">
                            R
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="mb-0" style={{ fontSize: '12px' }}>Ram</h2>
                    <p className="text-muted mb-0" style={{ fontSize: '10px' }}>+91 8776858485</p>
                </div>
            </div>
        </div>
    );
}

export default AllPeople;
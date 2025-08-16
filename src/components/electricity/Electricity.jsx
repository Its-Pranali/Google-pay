
import ElectricityHeader from "./ElectricityHeader";
import Biller from "./Biller";
import Supplier from "./Supplier";
import './Electricity.css';
import LinkedAccount from "./LinkedAccount";
function Electricity() {
    return (
        <>
            <ElectricityHeader />
            <Biller />
            <LinkedAccount/>
            <Supplier />
        </>
    );
}

export default Electricity;
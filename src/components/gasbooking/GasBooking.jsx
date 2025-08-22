import Biller from "../electricity/Biller";
import GasHeader from "./GasHeader";
import GasProvider from "./GasProviders";


function GasBooking() {
    return (
        <>
            <GasHeader />
            <Biller />
            <GasProvider/>
        </>
    );
}

export default GasBooking;
import FastagHeader from "./FastagHeader";
import Biller from "../electricity/Biller";
import FastagTitle from "./FastagTitle";
import PopularBanks from "./PopularBanks";
import FasttagBanks from "./FasttagBanks";

function Fastag() {
    return (
        <div className="">
            <FastagHeader/>
            <Biller />
            <FastagTitle />
            <PopularBanks />
            <FasttagBanks />
        </div>
    );
}

export default Fastag;
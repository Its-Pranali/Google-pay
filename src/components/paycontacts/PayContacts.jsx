import { useEffect, useState } from "react";
import PayHeader from "./PayHeader";
import PayTitle from "./PayTitle";
import "./PayContacts.css";
import Recent from "./Recent";
import AllPeople from "./AllPeople";

function PayContacts() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0); // true when scrolled down
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="position-relative">
            <div
                className={`position-sticky top-0 pb-3 z-3 ${scrolled ? "bg-light" : "bg-white"
                    }`}
                style={{ transition: "background-color 0.3s ease" }}
            >
                <PayHeader />
                <PayTitle />
            </div>
            <Recent />
            <AllPeople />
        </div>
    );
}

export default PayContacts;

import { useState, useEffect } from "react";

function PayTitle() {
  const placeholders = [
    "Enter phone no or name",
    "Enter UPI ID or number"
  ];
  const [index, setIndex] = useState(0);
  const [toggle, setToggle] = useState("123");

  // Change placeholder every 3 seconds with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="py-2">
        <h2 className="mb-0" style={{ fontSize: "18px" }}>
          Select your Bank
        </h2>
        <p className="mb-0" style={{ fontSize: "12px" }}>
          Pay any{" "}
          <img
            src="../assets/images/UPI.png"
            className="upi-img w-100"
            alt="UPI"
            style={{ width: "40px", display: "inline-block" }}
          />{" "}
          app using name, number or UPI ID
        </p>
      </div>

      <form className="mt-3">
        <div className="relative flex items-center">
          {/* Input with animated placeholder */}
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder={placeholders[index]}
          />

          {/* Toggle button on right side */}
          <button
            type="button"
            onClick={() => setToggle(toggle === "123" ? "ABC" : "123")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 
                       bg-gray-200 hover:bg-gray-300 text-sm font-bold 
                       px-2 py-1 rounded border transition"
          >
            {toggle}
          </button>
          {/* <button></> */}
        </div>
      </form>
    </div>
  );
}

export default PayTitle;

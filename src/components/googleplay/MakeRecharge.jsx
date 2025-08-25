import { useState } from "react";

function MakeRecharge() {
    const [amount, setAmount] = useState(""); // state to store input value

    return (
        <div className="container pt-3">
            <h3 className="mb-0" style={{ fontSize: '14px' }}>Make a recharge</h3>
            <form className="amount-forms">
                <div className="input-container">
                    <label htmlFor="amount">Enter Amount</label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="₹"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} // manual typing
                    />

                    <p className="text-muted px-3 mb-1 py-1" style={{ fontSize: '10px' }}>
                        Enter amount between ₹10 and ₹5000
                    </p>

                    <div className="d-flex gap-1">
                        <button
                            type="button"
                            className="border border-muted rounded bg-light py-1 px-3"
                            style={{ fontSize: '14px' }}
                            onClick={() => setAmount(100)}
                        >
                            ₹100
                        </button>
                        <button
                            type="button"
                            className="border border-muted rounded bg-light py-1 px-3"
                            style={{ fontSize: '14px' }}
                            onClick={() => setAmount(200)}
                        >
                            ₹200
                        </button>
                        <button
                            type="button"
                            className="border border-muted rounded bg-light py-1 px-3"
                            style={{ fontSize: '14px' }}
                            onClick={() => setAmount(300)}
                        >
                            ₹300
                        </button>
                    </div>
                    <button className="bg-primary border-0 w-100 text-light rounded-pill py-2 mt-2" style={{fontSize:'12px'}}>Buy now</button>

                </div>
            </form>
        </div>
    );
}

export default MakeRecharge;

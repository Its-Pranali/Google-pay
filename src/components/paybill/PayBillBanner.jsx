

function PayBillBanner(){
     return(
        <div className="container">
            <div className="text-center py-4">
                  <img src="assets/images/Light-bill.jpg" className="recharge-logo w-100" />
                  <h3 className="mb-0" style={{fontSize:'14px'}}>Paying Mahavitran - Maharashtra Electricity<br/>(MSEDCL)</h3>
                   <p className="text-muted mb-0" style={{fontSize:'12px'}}>Consumer Number : 289063647890</p>
                  <h2 className="py-2 mb-0">₹540.00</h2>
            </div>
        </div>
    );
}

export default PayBillBanner;
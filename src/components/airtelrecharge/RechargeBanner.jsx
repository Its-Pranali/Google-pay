

function RechargeBanner(){
    return(
        <div className="container">
            <div className="text-center py-4">
                  <img src="assets/images/Airtel-logo.png" className="recharge-logo w-100" />
                  <h3 className="mb-0" style={{fontSize:'14px'}}>Paying Airtel Prepaid</h3>
                  <h2 className="py-2 mb-0">₹210.90</h2>
                  <p className="text-muted mb-0" style={{fontSize:'12px'}}>Plan price ₹209</p>
                  <p className="text-muted" style={{fontSize:'12px'}}>Platform fee ₹1.90</p>
            </div>
        </div>
    );
}
export default RechargeBanner;
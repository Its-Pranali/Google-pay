
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Banner from './components/home/Banner';
import Scanner from './components/home/Scanner';
import Bills from './components/home/Bills';
import Businesses from './components/home/Businesses';
import MobileRecharge from './components/mobilerecharge/MobileRecharge';
import Airtel from './components/airtelview/Airtel';
import UnlinkNumber from './components/UnlinkNumber';
import Jio from './components/jio/Jio';
import Recharge from './components/airtelrecharge/Recharge';
import AirtelPrepaid from './components/rechargedetails/AirtelPrepaid';
import Manage from './components/checklist/Manage';
import Mahavitran from './components/mahavitran/Mahavitran';
import PayBill from './components/paybill/PayBill';
import './App.css';
import Electricity from './components/electricity/Electricity';
import QrScann from './components/home/QrScann';
import DTHFile from './components/cable/DTHFile';
import Fastag from './components/fastag/Fastag';
import GooglePlay from './components/googleplay/GooglePlay';
import CreditCards from './components/creditcards/CreditCards';

function App() {
  return (
    <Router>
      <div className="app-container  position-relative">

        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Banner />
              <Scanner />
              <Bills />
              <Businesses />
            </>
          } />
          <Route path="/mobile-recharge" element={<MobileRecharge />} />
          <Route path="/airtel" element={<Airtel />} />
          <Route path="/unlink-phonenumber" element={<UnlinkNumber />} />
          <Route path="/jio" element={<Jio />} />
          <Route path="/recharge" element={<Recharge />} /> 
          <Route path="/airtel-prepaid" element={<AirtelPrepaid />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/mahavitran" element={<Mahavitran />} />
          <Route path="/pay-bill" element={<PayBill />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/qr-scann" element={<QrScann />} />
          <Route path="/dth-file" element={<DTHFile />} />
          <Route path="/fastag" element={<Fastag />} />
          <Route path="/google-play" element={<GooglePlay />} />
          <Route path="/credit-cards" element={<CreditCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


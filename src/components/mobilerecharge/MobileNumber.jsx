import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaAddressBook,FaUser  } from 'react-icons/fa';
import './MobileNumber.css'; // optional for extra styling

function MobileNumber() {
    const [mobile, setMobile] = useState('');

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Allow only digits
        if (value.length <= 10) {
            setMobile(value);
        }
    };

    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-md-6">

                    <Form.Label className="fw-semibold mb-2" style={{ fontSize: '13px' }}>Enter mobile number</Form.Label>
                    <div className="d-flex">
                        <InputGroup className="custom-input shadow-sm border">
                            <InputGroup.Text className="bg-white border-0 p-0">
                                <img src="assets/images/india-flag.jpg" className="w-100 ind-img px-1" />
                                <span role="img" aria-label="India Flag" style={{ marginRight: '6px' }}></span>
                                +91
                            </InputGroup.Text>

                            <Form.Control
                                type="tel"
                                placeholder="00000 00000"
                                value={mobile}
                                onChange={handleChange}
                                className="border-0"
                                inputMode="numeric"
                                maxLength={10}
                            />


                        </InputGroup>
                        <InputGroup.Text className="bg-white border-0">
                            <FaUser className="text-primary" />
                        </InputGroup.Text>
                    </div>
                    <p className="text-muted pt-1" style={{fontSize:'10px'}}>Ensure this is a valid mobile number</p>
                </div>
            </div>
        </div>
    );
}

export default MobileNumber;




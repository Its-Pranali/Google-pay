

import React from 'react';
import './Banner.css'; // custom styles
import { FaArrowRight } from 'react-icons/fa';

function Banner() {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center text-center">
            <div className="banner-content text-center">
                <h2>Pay anyone remotely</h2>
                <a href="#" className=" text-decoration-none">
                    Add them <FaArrowRight className="bg-primary text-light rounded-circle p-1" style={{fontSize:'20px'}} />
                </a>
            </div>
        </div>
    );
}

export default Banner;




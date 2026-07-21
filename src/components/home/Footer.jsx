import React from 'react';

function Footer() {
    return (
        <div className="text-center py-4 mt-auto w-100 text-muted" style={{ fontSize: '11px' }}>
            <p className="mb-0">&copy; {new Date().getFullYear()} Designed by Pranali Nikam</p>
        </div>
    );
}

export default Footer;
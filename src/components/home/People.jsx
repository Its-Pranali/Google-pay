import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import './People.css';

function People() {
    const contacts = [
        { name: 'Rahul', img: 'https://ui-avatars.com/api/?name=Rahul&background=random&color=fff&rounded=true' },
        { name: 'Priya', img: 'https://ui-avatars.com/api/?name=Priya&background=random&color=fff&rounded=true' },
        { name: 'Amit', img: 'https://ui-avatars.com/api/?name=Amit&background=random&color=fff&rounded=true' },
        { name: 'Sneha', img: 'https://ui-avatars.com/api/?name=Sneha&background=random&color=fff&rounded=true' },
        { name: 'Kiran', img: 'https://ui-avatars.com/api/?name=Kiran&background=random&color=fff&rounded=true' },
        { name: 'Ravi', img: 'https://ui-avatars.com/api/?name=Ravi&background=random&color=fff&rounded=true' },
        { name: 'Anjali', img: 'https://ui-avatars.com/api/?name=Anjali&background=random&color=fff&rounded=true' },
    ];

    return (
        <div className="people-container px-3 mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>People</h3>
            </div>

            <div className="row g-3">
                {contacts.map((contact, index) => (
                    <div className="col-3 text-center" key={index}>
                        <div className="person-icon mx-auto mb-1">
                            <img src={contact.img} alt={contact.name} />
                        </div>
                        <span className="person-name">{contact.name}</span>
                    </div>
                ))}
                
                <div className="col-3 text-center">
                    <div className="person-icon more-icon mx-auto mb-1 d-flex justify-content-center align-items-center bg-light border">
                        <HiChevronRight size={24} className="text-muted" />
                    </div>
                    <span className="person-name">More</span>
                </div>
            </div>
        </div>
    );
}

export default People;

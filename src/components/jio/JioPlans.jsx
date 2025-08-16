import React, { useState } from 'react';
import { FaChevronDown, FaPen, FaPlus, FaCheck } from 'react-icons/fa';
import { BsTrash3 } from 'react-icons/bs'; // Cleaner, minimal bin
import { Link } from 'react-router-dom';

function JioPlans() {


    const [users, setUsers] = useState([
        { id: 1, name: 'Priya', mobile: '9876543210' },
        { id: 2, name: 'John', mobile: '8765432109' },
        { id: 3, name: 'Amit', mobile: '7654321098' }
    ]);


    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    const selectUser = (user) => {
        setSelectedUser(user);
        setDropdownOpen(false);
    };

    const handleEdit = (user) => {
        console.log('Edit:', user);
    };

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        if (selectedUser.id === userId) {
            setSelectedUser(updatedUsers[0] || null);
            setDropdownOpen(false);
        }
    };

    return (
        <div className="container position-sticky border-bottom z-3" style={{top:'51px',backgroundColor:'#fff'}} >

            <div
                className="d-flex align-items-center justify-content-between py-2"

                onClick={toggleDropdown}
            >
                <div className="d-flex ">
                    <div
                        className={`rounded-circle d-flex justify-content-center align-items-center me-2 mt-1 ${dropdownOpen ? 'bg-success' : 'bg-danger'} text-white`}
                        style={{ width: '20px', height: '20px', fontSize: '12px' }}
                    >
                        {dropdownOpen ? <FaCheck size={10} /> : selectedUser.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="mb-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>{selectedUser.name}</h3>
                        <p className="mb-0" style={{ fontSize: '12px', color: '#666' }}>{selectedUser.mobile}</p>
                    </div>

                </div>

                <div className="d-flex align-items-center gap-3">

                    {dropdownOpen && (
                        <>
                            <FaPen
                                className="text-primary"
                                size={13}
                                style={{ cursor: 'pointer' }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEdit(selectedUser);
                                }}
                            />
                            <BsTrash3
                                className="text-primary"
                                size={13}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(selectedUser.id);
                                }}
                            />
                        </>
                    )}

                    {!dropdownOpen && (
                        <FaChevronDown style={{ cursor: 'pointer' }} />
                    )}
                </div>
            </div>


            {dropdownOpen && (
                <div className="">
                    {users
                        .filter(user => user.id !== selectedUser.id)
                        .map(user => (
                            <div
                                key={user.id}
                                className="d-flex align-items-center justify-content-between py-2"
                                style={{ cursor: 'pointer' }}
                                onClick={() => selectUser(user)}
                            >
                                <div className="d-flex ">
                                    <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-2 mt-1" style={{ width: '20px', height: '20px', fontSize: '10px' }}>
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="mb-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>{user.name}</h3>
                                        <p className="mb-0" style={{ fontSize: '12px', color: '#666' }}>{user.mobile}</p>
                                    </div>

                                </div>

                                <div className="d-flex align-items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                    <FaPen
                                        className="text-primary"
                                        size={13}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleEdit(user)}
                                    />
                                    <Link to="/unlink-phonenumber" className="text-decoration-none text-dark">
                                        <BsTrash3
                                            className="text-primary"
                                            size={13}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleDelete(user.id)}
                                        />
                                    </Link>

                                </div>

                            </div>

                        ))}

                </div>
            )}

            {dropdownOpen && (
                <div className="py-2">
                    <Link to="/mobile-recharge" className="text-decoration-none text-dark">
                        <div className="d-flex align-items-center">
                            <FaPlus className="text-primary border rounded-circle border-primary" size={16} style={{ padding: '2px' }} />
                            <h3 className="text-primary mb-0 px-3" style={{ fontSize: '14px' }}>Link account</h3>
                        </div>
                    </Link>
                </div>

            )}
        </div>
    );
}

export default JioPlans;

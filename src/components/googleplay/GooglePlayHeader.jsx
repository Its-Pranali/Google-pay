
import { BsX } from 'react-icons/bs';
import { HiArrowLeft, HiOutlineDotsVertical } from 'react-icons/hi';
import { MdMessage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function GooglePlayHeader() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };
    return (
        <div className="container position-absolute top-0 z-3 ">
            <div className="header">
                <div className="d-flex justify-content-between align-items-center py-2">
                   
                        <HiArrowLeft
                            size={36}
                            className="mb-0 arrow-icon"
                            onClick={handleBack}
                            style={{ cursor: 'pointer' }}
                        />
                   
                    
                  
                        <div className="d-flex gap-2 align-items-center justify-content-between">
                            <MdMessage className="w-6 h-6 text-blue-500 arrow-icon" size={36}/>
                            <HiOutlineDotsVertical
                                size={36}
                                className="text-dark arrow-icon"
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default GooglePlayHeader;
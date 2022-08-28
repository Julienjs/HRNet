import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/wealth-health.png"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLinkCurrentEmployee = () => {
        navigate("/current-employee")
    }

    const handleLinkCreateEmployee = () => {
        navigate("/")
    }


    return (
        <header>
            <img src={Logo} alt='wealth heatlth' onClick={handleLinkCreateEmployee} />
            <p>
                <span className='color-1'>H</span>
                <span className='color-2'>R</span>
                <span className='color-3'>N</span>
                <span className='color-4'>et</span>
            </p>
            <nav>
                <ul>
                    {location.pathname === "/" ?
                        <li onClick={handleLinkCurrentEmployee}>Employee</li>
                        :
                        <li onClick={handleLinkCreateEmployee}>Create</li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
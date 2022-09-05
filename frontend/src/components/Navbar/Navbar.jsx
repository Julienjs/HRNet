import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/wealth-health-header.png"

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
        <header className='b-bottom p-2 mx-auto w-11/12 flex justify-between items-center mb-5'>
            <img
                className='w-14 h-full sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32'
                src={Logo}
                alt='wealth heatlth'
                onClick={handleLinkCreateEmployee} />
            <h1
                className='text-3xl font-medium sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'
            >
                <span className='text-green-1'>H</span>
                <span>R</span>
                <span className='text-green-2'>N</span>
                <span className='text-green-2 font-normal'>et</span>
            </h1>
            <nav>
                <ul>
                    {location.pathname === "/" ?
                        < li className="btn-1 w-20 sm:w-24 md:w-20 lg:w-28  xl:w-28 2xl:w-28" onClick={handleLinkCurrentEmployee} >
                            Employee</li >
                        :
                        <li className="btn-1 w-20" onClick={handleLinkCreateEmployee}>Create</li>
                    }
                </ul >
            </nav >
        </header >
    );
};

export default Navbar;
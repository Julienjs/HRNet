import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/wealth-health2.png"
import "./CreateEmployee.css"

const Banner = () => {
    const navigate = useNavigate()

    const handleLink = () => {
        navigate("/current-employee")
    }
    return (
        <section id="banner">
            <h2>Welcome</h2>
            <article className='banner-contains'>
                <div className='banner-main'>
                    <img src={Logo} alt="wealth heatlth" />
                    <div className='column'>
                        <div className='logo-title'>
                            <h3>
                                <span className='weight-letter'>W</span>EALTH
                                {' '}
                                <span className='weight-letter'>H</span>EALTH
                            </h3>
                            <p>
                                <span className='color-1'>H</span>
                                <span className='color-2'>R</span>
                                <span className='color-3'>N</span>
                                <span className='color-4'>et</span>
                            </p>
                        </div>
                        <div className='column'>
                            <p className='lorem'><span className='weight-letter'>L</span>orem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi natus quo veniam perspiciatis, fugit perferendis quibusdam sit a, inventore voluptate debitis provident esse aut doloremque odit itaque illo adipisci.</p>
                            <button onClick={handleLink}>View Employee</button>
                        </div>
                    </div>
                </div>
            </article>
        </section >
    );
};

export default Banner;
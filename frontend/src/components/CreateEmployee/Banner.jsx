import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/wealth-health2.png"

const Banner = () => {
    const navigate = useNavigate()

    const handleLink = () => {
        navigate("/current-employee")
    }
    return (
        <section className='mx-auto flex flex-col items-center w-11/12 2xl:h-[586px] 2xl:justify-between 2xl:px-5'>
            <h2 className='text-2xl my-3 lg:text-5xl'>Welcome</h2>
            <article className='flex flex-col 2xl:relative 2xl:bottom-20'>
                <div className=' flex items-center justify-start my-2'>
                    <img
                        className='w-32 sm:w-44 lg:w-48 xl:w-52 2xl:w-48 h-full'
                        src={Logo}
                        alt="wealth heatlth"
                    />
                    <div className='text-xl relative bottom-2 tracking-wide sm:bottom-4 '>
                        <h3 className='font-light text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl'>
                            <span className='text-xl font-medium sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>W</span>EALTH
                            {' '}
                            <span className='text-xl font-medium sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>H</span>EALTH
                        </h3>
                        <p className='relative left-2 font-light sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>
                            <span className='text-green-1 font-medium '>H</span>
                            <span className='font-medium'>R</span>
                            <span className='text-green-2 font-medium'>N</span>
                            <span className='text-green-2'>et</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col self-end w-11/12 2xl:text-xl 2xl:relative 2xl:w-[75%] 2xl:bottom-14' >
                    <p className='font-light mb-2.5 '>
                        <span className='text-2xl font-medium'>
                            L
                        </span>orem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quasi natus quo veniam perspiciatis, fugit perferendis quibusdam sit a, inventore voluptate debitis provident esse aut doloremque odit itaque illo adipisci.
                    </p>
                    <button className='btn-2 self-end w-28 mt-4.5 relative bottom-4 left-2.5 2xl:w-32 2xl:left-0 2xl:bottom-5 ' onClick={handleLink}>View Employee</button>
                </div>
            </article>
        </section >
    );
};

export default Banner;
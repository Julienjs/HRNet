import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()

    const handleLink = () => {
        navigate("/")
    }
    return (
        <section className='flex flex-col justify-center items-center h-[72vh]'>
            <article className='error-message'>
                <Player
                    autoplay
                    loop={true}
                    src="https://assets5.lottiefiles.com/packages/lf20_suhe7qtm.json"
                />
            </article>
            <article >
                <p className='text-green-2' onClick={handleLink}>Return to the home page</p>
            </article>
        </section>
    );
};

export default Error;

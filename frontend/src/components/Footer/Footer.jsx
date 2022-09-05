import React from 'react';
import Logo from '../../assets/img/wealth-health2.png'

function Footer() {
    return (
        <footer className='text-black text-xs flex items-center justify-center border border-transparent border-t-green-1 p-[10px] w-[90%] mx-auto mt-[30px]'>
            <img src={Logo} alt="logo" className='w-[10%] mr-[5px] h-full md:w-[5%] xl:w-[3%]' />
            <p>© 2022 Wealth Health. All rights reserved</p>
        </footer>
    );
}

export default Footer;
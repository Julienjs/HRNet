import React from 'react';
import Banner from '../components/CreateEmployee/Banner';
import Form from '../components/CreateEmployee/Form/Form';

const CreateEmployee = () => {
    return (
        <main className='flex flex-col justify-center items-center mx-auto 2xl:w-[85%] 2xl:border-yellow-500 2xl:flex-row'>
            <Banner />
            <Form />
        </main>
    );
};

export default CreateEmployee;
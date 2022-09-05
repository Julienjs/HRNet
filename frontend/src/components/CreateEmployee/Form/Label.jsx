import React from 'react';

const Label = ({ id, text }) => {
    return (
        <div className='mt-1'>
            <label htmlFor={id} className="text-md" >
                {text}
                <span className='text-red-500'>*</span>
            </label>
        </div>
    );
};

export default Label;
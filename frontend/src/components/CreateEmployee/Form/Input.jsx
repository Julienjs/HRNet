import React from 'react';

const Input = ({ type, id, placeholder, register, regex, errors, patternError, requiredError, error }) => {
    return (
        <>
            <input
                type={type}
                id={id}
                className={errors ? "inputError" : ""}
                placeholder={placeholder}
                {...register(`${id}`, {
                    pattern: regex,
                    required: true
                })}
            />
            {errors &&
                <p className='error'>
                    {
                        errors.type === "pattern" ? patternError
                            : errors.type === "required" ? requiredError
                                : error
                    }
                </p>
            }
        </>
    );
};

export default Input;
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import tw from 'twin.macro';
import Label from './Label';

const SelectContent = ({ placeholder, options, id, register, control, errors, requiredError, name }) => {
    const StyleSelect = styled(Select)`
    .Select__control {
        ${tw`h-5 leading-tight appearance-none border border-blue-gray-200 rounded-[7px] w-full text-gray-700 focus:outline-none focus:shadow-inner`}
    }
    .Error__control{
        ${tw`appearance-none h-5 border border-red-500 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-inner`} 
    }
    .Select__value-container{
        ${tw``}
    }
    .Select__option{
        ${tw``}
    }
    .Select__placeholder{
        ${tw`text-blue-gray-500`}
    }
    .Error__placeholder{
        ${tw`text-red-500`}
    } 
    .Select__indicator{
        ${tw`text-gray-1`}
    }
    .Error__indicator{
        ${tw`text-red-500`}
    }
    `
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '0.5px solid rgb(147, 173, 24, 0.2)',
            height: "10px",
            display: "flex",
            alignItems: "center",
            color: state.isSelected ? 'white' : 'black',
            padding: 20,
        }),

        dropdownIndicator: (base, state) => ({
            ...base,
            color: errors ? "red" : "rgb(205, 202, 202)",
            transition: 'all .2s ease',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
        }),
        indicatorSeparator: (base, state) => ({
            ...base,
            backgroundColor: errors ? "red" : "rgb(205, 202, 202)"
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }
    return (
        <div className="w-[90%] mx-auto">
            <Label text={name} id={id} />
            <div className='mt-1'>
                <Controller
                    name={id}
                    id={id}
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field }) => (
                        <StyleSelect
                            classNamePrefix={!errors ? "Select" : "Error"}
                            id={id}
                            aria-label={`select a ${id}`}
                            aria-required="true"
                            {...field}
                            isClearable
                            styles={customStyles}
                            options={options}
                            placeholder={placeholder}
                        />
                    )}
                />
                {
                    errors &&
                    <p className='text-red-500 text-xs italic'>{requiredError}</p>
                }
            </div>
        </div >
    );
};

export default SelectContent;
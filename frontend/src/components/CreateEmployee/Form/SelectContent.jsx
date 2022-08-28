import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';



const SelectContent = ({ placeholder, options, error, id, register, control, errors, requiredError }) => {
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
        control: () => ({
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            height: 40,
            borderRadius: 10,
            width: "270px",
            border: !errors ? "0.5px solid rgb(205, 202, 202)" : "0.5px solid red",
            margin: "2px 0 5px 0",
            padding: "1px 2px"
        }),
        placeholder: base => {
            return {
                ...base,
                fontFamily: 'Kanit',
                fontWeight: "400",
                fontSize: 15,
                color: !errors ? "rgb(189, 185, 185)" : "red",
            };
        },
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
        <>
            <Controller
                name={id}
                control={control}
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <Select
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
                <p className='error'>{requiredError}</p>
            }
        </>
    );
};

export default SelectContent;
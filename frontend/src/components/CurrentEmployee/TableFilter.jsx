import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const TableFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)

    return (
        <div className='filter-searchBar'>
            <label htmlFor='searchBar' className='mr-[5px]'>Search</label>
            <input
                className='w-[70%] border border-blue-gray-300 rounded-[7px] pl-2 py-[2px] text-blue-gray-700'
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }} />
        </div>
    );
};

export default TableFilter;
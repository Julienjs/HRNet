import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const TableFilter = ({ filter, setFilter }) => {

    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 400)
    return (
        <div className='filter-searchBar'>
            <label htmlFor='searchBar'>Search</label>
            <input
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }} />
        </div>
    );
};

export default TableFilter;
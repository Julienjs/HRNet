import React from 'react';

const PageSize = ({ pageSize, setPageSize }) => {
    return (
        <div>
            <span>
                Show
                <select
                    className='font-medium border border-blue-gray-300 mx-2 rounded-[7px] text-center'
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, 100].map(pageSize => (
                            <option className='text-gray-500' key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))
                    }
                </select>
                entries
            </span>
        </div>
    );
};

export default PageSize;
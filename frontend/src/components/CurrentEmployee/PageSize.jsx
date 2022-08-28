import React from 'react';

const PageSize = ({ pageSize, setPageSize }) => {
    return (
        <div>
            <span className='page-size-select'>
                Show
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
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
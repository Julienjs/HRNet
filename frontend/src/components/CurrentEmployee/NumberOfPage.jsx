import React from 'react';

const NumberOfPage = (page, canPreviousPage, previousPage, pageCount, gotoPage, canNextPage, nextPage, pageOptions, pageIndex) => {
    return (
        <>
            {page.length > 0 &&
                <section className='w-[98%] md:max-w-[90%] lg:max-w-[70%] xl:max-w-[90%] 2xl:w-[60%]'>
                    <article className='w-[90%] min-w-[300px] flex justify-between items-center my-[10px] mx-auto '>
                        <div className='flex justify-between w-[90px]'>
                            <button className={!canPreviousPage ? 'page-btn disabled' : 'page-btn'} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                            <button className={!canPreviousPage ? 'page-btn disabled' : 'page-btn bg-gray-800'} onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
                        </div>
                        <span>Page{' '}
                            <strong className='font-medium'>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                        <div className="flex justify-between w-[90px]">
                            <button className={!canNextPage ? 'page-btn disabled' : 'page-btn bg-gray-800'} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                            <button className={!canNextPage ? 'page-btn disabled' : 'page-btn'} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
                        </div>
                    </article>
                </section>}
        </>
    );
};

export default NumberOfPage;
import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './Colums'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TableFilter from './TableFilter';
import PageSize from './PageSize';
import Up from '../../assets/img/icons8-chevron-haut-50.png'
import Down from '../../assets/img/icons8-chevron-bas-50.png'
import NumberOfPage from './NumberOfPage';

const Table = () => {
    const employees = useSelector((state) => state.employee)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employees, [employees])
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/")
    }

    const link = <button className='link-button' onClick={handleNavigate}>Create employee</button>
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        page,
        nextPage,
        previousPage,
        canNextPage,
        pageOptions,
        canPreviousPage,
        gotoPage,
        pageCount,
        setPageSize,
        setGlobalFilter
    } = useTable({
        columns: columns,
        data: data
    }, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex, pageSize } = state

    return (

        <>
            <section className="flex flex-col justify-center items-center my-4 rounded-md p-5 w-[98%] max-w-[700px] min-w-[310px] shadow-xl border md:max-w-[90%] lg:max-w-[70%] xl:max-w-[90%] 2xl:w-[90%]">
                <h2 className='text-center text-xl after:after-title'>Current Employee</h2>
                {employees.length === 0 ?
                    <div className='flex flex-col justify-around items-center h-[500px]'>
                        <div className='text-xl w-[90%] text-green-2 text-center md:text-2xl' >
                            <p className=''>There are no employees created,</p>
                            <p>Click on the button to create a new employee</p>
                        </div>
                        {link}
                    </div>
                    :
                    <>
                        <article className='flex flex-col justify-between items-center w-[100%] h-[80px] mt-7 mb-[4px] xl:flex-row xl:justify-between xl:w-[98%] xl:h-auto xl:mb-[0]'>
                            <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
                            <div className="flex justify-between w-[98%] xl:w-auto">
                                <PageSize pageSize={pageSize} setPageSize={setPageSize} />
                            </div>
                        </article>
                        <article className=' border border-[rgb(147, 173, 24, 0.5)] max-h-[700px] px-2 h-[700px] py-[10px] w-[100%] overflow-y-scroll xl:overflow-y-hidden xl:m-4 xl:h-auto xl:border-[0] xl:px-0'>
                            {page.length === 0 ?
                                <div className='flex flex-col justify-around items-center h-[500px]'>
                                    <p className='text-xl w-[90%] text-green-2 text-center md:text-2xl'>no results ...</p>
                                    {link}
                                </div>
                                :
                                <table className='block w-[100%] mx-auto rounded-lg border-collapse overflow-hidden xl:table xl:w-[100%]'{...getTableProps()}>
                                    <thead className='hidden xl:table-header-group'>
                                        {headerGroups.map((headerGroup) => (
                                            <tr className='block xl:table-row ' {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map((column) => (
                                                    <th{...column.getHeaderProps(column.getSortByToggleProps())} className="relative border py-[12px] bg-[#36304a] w-[100px] text-white text-center font-[100]">
                                                        {column.render('Header')}
                                                        {column.isSorted ? column.isSortedDesc ?
                                                            <img src={Down} alt='chevron down' className='w-[10px] absolute left-[80%] bottom-[35%]' />
                                                            :
                                                            <img src={Up} alt='chevron up' className='w-[10px] absolute left-[80%] bottom-[35%]' />
                                                            : null}
                                                    </th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody className='block xl:table-row-group' {...getTableBodyProps()}>
                                        {page.map((row) => {
                                            prepareRow(row)
                                            return (
                                                <tr {...row.getRowProps()} className="block w-full py-[37px] xl:table-row">
                                                    {row.cells.map((cell) => {
                                                        return (
                                                            <td className='block pl-[43%] mb-[24px] font-[200] leading-[1.2] relative before:before-td xl:table-cell xl:before:hidden xl:pl-[0] xl:py-3 xl:pl-2'{...cell.getCellProps()} data-label={cell.column.render('Header')}>
                                                                {cell.render('Cell')}
                                                            </td>
                                                        )
                                                    })}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            }
                        </article>
                    </>
                }
            </section>
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
            <NumberOfPage page={page} pageCount={pageCount} previousPage={previousPage} canPreviousPage={canPreviousPage} pageOptions={pageOptions} pageIndex={pageIndex} gotoPage={gotoPage} canNextPage={canNextPage} nextPage={nextPage} />
        </>
    );
};

export default Table;
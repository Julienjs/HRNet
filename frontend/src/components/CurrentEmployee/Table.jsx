import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import { COLUMNS } from './Colums'
import { useSelector } from 'react-redux';
import TableFilter from './TableFilter';
import './CurrentEmployee.css'
import PageSize from './PageSize';

const Table = () => {
    const employees = useSelector((state) => state.employee)
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employees, [employees])


    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
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
        employees.length === 0 ?
            <p>il n'y a pas d'employee</p>
            :
            <>
                <section id="current-employee-section">
                    <h2>Current Employee</h2>
                    <article className='searchBar'>
                        <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        <div className="page-size">
                            <PageSize pageSize={pageSize} setPageSize={setPageSize} />
                        </div>
                    </article>
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>{column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}</span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr  {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()} data-label={cell.column.render('Header')} >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>


                </section>
                <section>
                    <article className='pagination'>
                        <div className='previous-page'>
                            <button className={!canPreviousPage ? 'disabled' : null} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                            <button className={!canPreviousPage ? 'disabled' : 'next-prev-button'} onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
                        </div>
                        <span>Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                        <div className="next-page">
                            <button className={!canNextPage ? 'disabled' : 'next-prev-button'} onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                            <button className={!canNextPage ? 'disabled' : null} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
                        </div>
                    </article>
                </section>
            </>
    );
};

export default Table;
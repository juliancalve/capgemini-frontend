import React from 'react'
import './Paginator.css';

declare interface PaginatorProps {
    currentPage: number,
    totalPages: number,
    onClick: Function
}
const Paginator = ( { currentPage, totalPages, onClick }: PaginatorProps ) => {

    const handleClick = ( page: number ) => {
        console.log (page)
        onClick(page);
    }

    return (
        <div className='paginator__container'>
            { currentPage != 1 ? <div className='paginator__clickeable' onClick={ () => handleClick( 1 ) }> 
                <span>{'<<'}</span>
            </div> : null }
            { currentPage != 1 ?<div className='paginator__clickeable' onClick={ () => handleClick( currentPage - 1 ) }>
                <span>{'<'}</span>
            </div> : null }
            <div>
                <p className='paginator__page--active'>{ currentPage } of { totalPages }</p>
            </div>
            { currentPage < totalPages ? <div className='paginator__clickeable' onClick={ () => handleClick( currentPage + 1 ) }>
                <span>{'>'}</span>
            </div> : null }
            { currentPage < totalPages ? <div className='paginator__clickeable' onClick={ () => handleClick( totalPages ) }>
                <span>{'>>'}</span>
            </div> : null }
        </div>
    )

};

export default Paginator;
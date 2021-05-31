import React from 'react'
import { textCapitalize } from '../../../utils/TextUtils';
import Paginator from './Paginator/Paginator';
import './Table.css';
import circleImg from '../../../assets/images/red-point.png';
import searchImg from '../../../assets/images/search.png';
import checkImg from '../../../assets/images/check.png';

declare interface TableProps {
    dataHeader: string[],
    dataRows: Object[],
    onChangePage: Function,
    currentPage: number,
    totalPages: number
}

const Table = ( { dataHeader, dataRows, onChangePage, currentPage, totalPages }: TableProps ) => {

    return (
        <div className='table__container'>
            <table className="table">
                <thead>
                    <tr>
                        { dataHeader.map( head => {
                            return <th className='table__th' key={ head }>{ textCapitalize( head ) }</th>
                        })}
                    </tr>
                </thead>
                {
                    dataRows.length > 0 ?
                    <tbody>
                        { dataRows.map( ( data, index ) => {
                            return <tr key={ index } className='table__row'>
                                    { Object.keys( data ).map( key =>
                                        { return <td className='table__td' key={ key }>{ typeof ( data as any )[key] === 'boolean' ?
                                            <img alt='check' src={`${ !!( data as any )[key] ? checkImg : circleImg }`} width='20'/>
                                            :
                                            typeof ( data as any )[key] === 'function' ? <img alt='search' className='clickeable' src={searchImg} width='20' onClick={ () => { ( data as any )[key]() } }/> :
                                            ( data as any )[key] }
                                        </td>}
                                    ) }
                                </tr>
                        })}
                    </tbody>
                    :
                    <h6 className='title is-6 table__message'>No content available</h6>
                }
            </table>
            <Paginator onClick={ onChangePage } currentPage={ currentPage } totalPages={ totalPages }/>
        </div>
    )
};

export default Table;

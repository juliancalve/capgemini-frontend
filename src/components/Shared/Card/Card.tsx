import React from 'react'
import './Card.css';

const Card: React.FunctionComponent = ( {children} ) => {

    return (
        <div className='card'>
            <div className='card-content'>
                {children}
            </div>
        </div>
    )
};

export default Card;

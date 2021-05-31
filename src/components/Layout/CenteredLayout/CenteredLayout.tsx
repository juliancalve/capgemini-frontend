import React from 'react'
import Card from '../../Shared/Card/Card';
import './CenteredLayout.css';

const CenteredLayout: React.FunctionComponent = ( { children } ) => {

    return (
        <div className='container centered-layout'>
            <div className='centered-layout__card'>
                <Card> { children } </Card>
            </div>
        </div>
    )
};

export default CenteredLayout;

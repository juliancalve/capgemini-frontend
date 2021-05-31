import React from 'react'
import Card from '../../Shared/Card/Card'
import Navbar from '../Navbar/Navbar'
import './LoggedLayout.css';
import { useHistory } from 'react-router-dom';
import { getRouteName } from '../../../utils/RouteUtils';

const LoggedLayout: React.FunctionComponent = ( {children} ) => {

    const history = useHistory();
    return (
        <div className='container is-full'>
            <Navbar/>
            <h6 className='title is-4'>{ getRouteName(history) }</h6>
            <Card>{ children }</Card>
        </div>
    )
};

export default LoggedLayout;

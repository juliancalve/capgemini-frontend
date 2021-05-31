import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router';
import Routes from './Routes';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserAction } from '../redux/auth';

const Router = () => {

    const { id } = useSelector( (store: any) => store.auth.user );
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getUserAction(history) );
    }, [history.location])

    const generateRoutes = () => {
        let routes: JSX.Element[] = [];
        const status = id ? 'admin' : 'noLoggedIn';
        routes = Routes[status].map( (route: any) => {
            return <Route key={ route.name } {...route} />
        });
        return routes;
    };

    return (
        <Switch>
            { generateRoutes() }
        </Switch>
    )

};

export default Router;

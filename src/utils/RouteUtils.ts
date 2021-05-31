import Routes from '../router/Routes';

const verifyRoute = ( isAdmin: boolean, history: any ) => {
    const routeProp = localStorage.getItem('role')|| 'noLoggedIn';
    let validated;
    if( routeProp ) {
        validated = !!Routes[routeProp].find( (route: { path: string }) => route.path === history.location.pathname );
        if( !validated ) history.push( Routes[routeProp || 'noLoggedIn'][0].path );
    }
    return validated;
};

const getRouteName = ( history: any ) => {
    let name;
    Object.entries( Routes ).forEach(([key, value]: any[]) => {
        value.forEach((r: any) => {
        if ( r.path === history.location.pathname ) {
            name = r.name;
        }
        });
    });
    return name;
}


export {
    verifyRoute,
    getRouteName
}
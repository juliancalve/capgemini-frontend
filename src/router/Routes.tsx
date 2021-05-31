import Login from "../pages/Login/Login";
import Policies from "../pages/Policies/Policies";
import Paths from '../constants/Paths';
import Clients from "../pages/Clients/Clients";
import ClientPolicies from "../pages/Policies/ClientPolicies/ClientPolicies";

const Routes = {
    noLoggedIn: [
        {
            path: Paths.login,
            component: Login,
            name: 'Login',
            exact: true
        }
    ],
    admin: [
        {
            path: Paths.policies,
            component: Policies,
            name: 'Policies',
            exact: true
        },
        {
            path: Paths.clientPolicies,
            component: ClientPolicies
        },
        {
            path: Paths.clients,
            component: Clients,
            name: 'Clients',
            exact: true
        }        
    ],
    user: [
        {
            path: Paths.policies,
            component: Policies,
            name: 'Policies',
            exact: true
        }
    ]
};

export default Routes;
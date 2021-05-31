import Routes from '../router/Routes';
import { getUser, login } from '../services/auth.service';
import { verifyRoute } from "../utils/RouteUtils";
// constants
const initialValue = {
    user: {
        id: localStorage.getItem('id'),
        role: localStorage.getItem('role')
    },
    error: ''
};

//types

const LOGIN = 'LOGIN';
const ERROR = 'ERROR';
const LOGOUT = 'LOGOUT';

//reducer

export default function authReducer( state = initialValue, action ) {
    switch( action.type ) {
        case LOGIN:
            return { ...state, user: action.payload, error: '' }
        case ERROR:
            return { ...state, error: action.payload };
        case LOGOUT:
            return initialValue;
        default:
            return state;
    }
}

//actions

export const loginAction = ({ email, history }) => async ( dispatch ) => {

    try{
        const response = await login( email );
        if( response.data ){

            dispatch({
                type: LOGIN,
                payload: response.data.data
            });
            localStorage.setItem( 'id', response.data.data.id );
            localStorage.setItem( 'role', response.data.data.role );
            dispatch(getUserAction( history ));
        } else {
            console.log( response.response.data )
            dispatch({
            type: ERROR,
            payload: response.response.data.data
        })
        }
    } catch ( error ) {
        console.log( error.response.data )
        dispatch({
            type: ERROR,
            payload: error.response.data.data
        })
    }
}

export const getUserAction = ( history ) => async ( dispatch ) => {
    try {
        const id = localStorage.getItem( 'id' );
        let verified = verifyRoute( !!id, history );
        if ( id && verified ) {
            verified = getUser();
        }
        if ( (!verified && !id) ) {
            dispatch({
                type: LOGOUT
            });
        }
    } catch ( error ) {
        dispatch({
            type: ERROR,
            payload: error.response.data.data
        });
    }
};

export const logOutAction = () => ( dispatch ) => {
    localStorage.clear();
    dispatch({
        type: LOGOUT
    });
    window.location.href = Routes.noLoggedIn[0].path;
};

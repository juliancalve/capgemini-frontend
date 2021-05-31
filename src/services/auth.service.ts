import Api from '../axios/Api';
const prefixURL = '/auth';

const getUser = () => {
    return Api.get( `${prefixURL}/get-user` );
}

const login = ( email: string ) => {

    return Api.post( `${prefixURL}/login`, { email } );
}

export {
    getUser,
    login,
}

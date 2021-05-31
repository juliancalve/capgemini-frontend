import Api from "../axios/Api"
const prefixURL = '/policy';

const getPolicies = ( page: number ) => {
    return Api.get( `${prefixURL}/all?page=${page}` );
};

const getPoliciesByEmail = ( page: number, email: string ) => {
    return Api.get( `${prefixURL}/${email}?page=${page}` );
}

export {
    getPolicies,
    getPoliciesByEmail
}

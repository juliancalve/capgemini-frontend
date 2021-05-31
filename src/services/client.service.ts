import Api from "../axios/Api"
const baseURL = '/client';

const getAllClients = ( page: number ) => {
    return Api.get( `${baseURL}?page=${page}` );
};

export {
    getAllClients
}
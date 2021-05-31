import axios from "axios";

const defaultOptions = {
    // baseURL: 'http://localhost:3100/api',
    baseURL: 'https://capgemini-policy.herokuapp.com/api'

};

const Api = axios.create(defaultOptions);

Api.interceptors.request.use( function (config) {
    const id = localStorage.getItem('id');
    config.headers.Authorization = id || '';
    return config;
});

export default Api;
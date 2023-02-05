import Axios, { AxiosError } from 'axios';
import { url } from './url';

const Api = Axios.create({
    baseURL: url
});

// TODO configure this to handle request properly
// Add token if it exists
Api.interceptors.request.use((config) => {
    return config;
}, error => {
    return error;
});

// TODO configure this to handle response properly
Api.interceptors.response.use((config) => {
    const statusCode  = config.status;
    const data = config.data;
    return config;
}, (error: AxiosError<any, any>) => {
    return error.response?.data;
})

export { Api };
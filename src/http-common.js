import axios from "axios";
import cookies from 'react-cookies';

export default axios.create({
    baseURL: "http://localhost:80/api",
    headers: {
        "Content-type": "application/json",
        // "Authorization": "Bearer VTrY4aG3fk3P3WFQBgJg4bvGSSNGtNmXRw0MhxCJ",
        "Authorization": `Bearer ${cookies.load('access_token')}`,
    }
});

axios.interceptors.response.use(null, (error) => {
    if(error.response.status === 401) {
        console.log(2)
    }
    console.log(2)

    return Promise.reject(error);
});
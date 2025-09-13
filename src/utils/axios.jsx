import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",

});

export default instance;
// You can add interceptors or other configurations here if needed





// Request interceptor
instance.interceptors.request.use((config) => {
    // You can modify the request config here if needed (e.g., add headers)

    console.log("Request:", config);
    return config;
},
    (error) => {
        return Promise.reject(error);
    });






// Response interceptor
instance.interceptors.response.use((response) => {
    console.log("Response:", response);
    // response interceptor
    return response;
},
    (error) => {
        return Promise.reject(error);
    });
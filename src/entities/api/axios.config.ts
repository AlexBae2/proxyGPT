// Set config defaults when creating the instance
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.example.com'
});

// TODO: ADD AUTH TOKEN
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

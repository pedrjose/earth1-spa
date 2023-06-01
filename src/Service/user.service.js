import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export const userData = async (id) => {
    const response = await axios.get(`${baseUrl}/user/${id}`);

    return response.data;
}

export const userArticles = async (id) => {
    // add header
    const response = await axios.get(`${baseUrl}/user/${id}`);

    return response.data;
}

export const expiredSession = async (token) => {
    const response = await axios.post(`${baseUrl}/session/validate`, { token });

    return response.data;
}
import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export const Login = async (username, password) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/login`, { username, password });

        return response.data;
    } catch (err) {
        return false;
    }
}
import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export const userData = async (id) => {
    const response = await axios.get(`${baseUrl}/user/${id}`);

    return response.data;
}

export const findUserArticles = async (token) => {
    try {
        const response = await axios.get(`${baseUrl}/news/by-user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        return false;
    }
}

export const commentAtArticle = async (comment, articleId, token) => {
    try {
        const response = await axios.patch(`${baseUrl}/news/comment/${articleId}`, { comment }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return {status: true, message: response.data.message};
    } catch (error) {
        return {status: false, message: error.response.data.message};
    }
}

export const likeAtArticle = async (id, token) => {
    try {
        const response = await axios.patch(`${baseUrl}/news/like/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return {status: true, message: response.data.message};
    } catch (error) {
        return {status: false, message: error.response.data.message};
    }
}

export const expiredSession = async (token) => {
    const response = await axios.post(`${baseUrl}/session/validate`, { token });

    return response.data;
}
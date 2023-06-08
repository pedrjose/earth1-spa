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

        return { status: true, message: response.data.message };
    } catch (error) {
        return { status: false, message: error.response.data.message };
    }
}

export const likeAtArticle = async (id, token) => {
    try {
        const response = await axios.patch(`${baseUrl}/news/like/${id}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return { status: true, message: response.data.message };
    } catch (error) {
        return { status: false, message: error.response.data.message };
    }
}

export const deleteArticle = async (id, token) => {
    try {
        const response = await axios.delete(`${baseUrl}/news/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return { status: true, message: response.data.message };
    } catch (error) {
        return { status: false, message: error.response.data.message };
    }
}

export const createNewUser = async (newName, newUsername, newPassword, newAvatar, newBanner) => {
    try {
        const response = await axios.post(`${baseUrl}/user/create-user`, {
            "name": newName,
            "username": newUsername,
            "password": newPassword,
            "avatar": newAvatar,
            "background": newBanner
        })

        return { status: true, message: response.data.message };
    } catch (error) {
        return { status: false, message: error.response.data.message };
    }
}

export const publishArticle = async (newTitle, newContent, newBanner, token) => {
    try {
        const response = await axios.post(`${baseUrl}/news/create-news`, {
            "title": newTitle,
            "content": newContent,
            "banner": newBanner
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return { status: true, message: response.data.message };
    } catch (error) {
        return { status: false, message: error.response.data.message };
    }
}

export const expiredSession = async (token) => {
    const response = await axios.post(`${baseUrl}/session/validate`, { token });

    return response.data;
}
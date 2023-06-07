import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export async function getAllArticles() {
    const response = await axios.get(`${baseUrl}/news/find-all-news`);

    return response.data;
}
import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export async function findArticlesByTitle(title) {
        try {
                const response = await axios.get(`${baseUrl}/news/search?title=${title}`);

                return response.data;
        } catch (error) {
                return false;
        }
}
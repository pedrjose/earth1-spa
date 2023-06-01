import axios from "axios";

const baseUrl = 'https://api-earth1.onrender.com';

export const contentWithBreaks = (content) => {
    let paragraphsBreaking = 0;
    const paragraphs = [];

    for (let i = 0; i <= content.length; i++) {
        if (content[i] === "¬") {
            paragraphs.push(content.slice(paragraphsBreaking, i - 1));
            paragraphsBreaking = i + 2;
        }
    }

    return paragraphs;
}

export const getArticleById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/news/find-news/${id}`);

        return response.data;
    } catch (error) {
        return false;
    }
}
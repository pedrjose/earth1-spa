import axios from "axios";

export async function getAllNews() {
    const response = await axios.get("http://localhost:3000/user/users");

    return response;
}
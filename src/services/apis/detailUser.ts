import axios from "axios";
import {API_USER} from "../../common/constants/api-url.js";
export const detailUser = async () => {
    try {
        const response = await axios.get(API_USER);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

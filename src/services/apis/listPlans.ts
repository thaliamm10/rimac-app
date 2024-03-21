import axios from "axios";
import {API_PLANS} from "../../common/constants/api-url";

export const listPlans = async () => {
    try {
        const response = await axios.get(API_PLANS);
        return response.data.list;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

import axios from "axios";
import { baseUrl } from "../utils/constants/baseUrl";

export const getDespesas = async () => {
  try {
    const response = await axios.get(`${baseUrl}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";
import { baseUrl } from "../utils/constants/baseUrl";

export const getDespesasByMonth = async (month: number, year: number) => {
  try {
    const response = await axios.get(`${baseUrl}/mes/${month}/${year}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

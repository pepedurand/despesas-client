import axios from "axios";
import { baseUrl } from "../utils/constants/baseUrl";

export const getDespesasByMonthAndType = async (
  type: string,
  month: number,
  year: number
) => {
  try {
    const typeUrlParam = type === "Entradas" ? "creditos" : "debitos";
    const response = await axios.get(
      `${baseUrl}/${typeUrlParam}/${month}/${year}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

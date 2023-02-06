import axios from "axios";
import { tipoDespesa } from "../types";
import { baseUrl } from "../utils/constants/baseUrl";

export const getDespesasByType = async (type: tipoDespesa) => {
  try {
    const typeUrlParam = type === tipoDespesa.CREDIT ? "creditos" : "debitos";
    const response = await axios.get(`${baseUrl}/${typeUrlParam}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

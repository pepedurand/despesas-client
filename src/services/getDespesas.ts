import axios from "axios";
import { tipoDespesa } from "../types";
import { baseUrl } from "../utils/constants/baseUrl";

interface getAllDespesasProps {
  type?: tipoDespesa;
  month?: number;
  year?: number;
}

export const getAllDespesas = async ({
  month,
  type,
  year,
}: getAllDespesasProps) => {
  try {
    if (type) {
      const typeUrlParam = type === tipoDespesa.CREDIT ? "creditos" : "debitos";
      if (month) {
        const response = await axios.get(
          `${baseUrl}/${typeUrlParam}/${month}/${year}`
        );
        return response;
      }
      const response = await axios.get(`${baseUrl}/${typeUrlParam}`);
      return response;
    }
    const response = await axios.get(`${baseUrl}/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

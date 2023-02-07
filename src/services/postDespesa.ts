import axios from "axios";
import { tipoDespesa } from "../types";
import { baseUrl } from "../utils/constants/baseUrl";

interface postDepesa {
  description: string;
  value: number;
  type: tipoDespesa;
  dataDespesa: Date;
}

export const postDespesa = async (body: postDepesa) => {
  try {
    const response = await axios.post(`${baseUrl}/`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

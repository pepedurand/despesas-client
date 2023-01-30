import { tipoDespesa } from "./tipo-despesa";

export interface Despesas {
  _id: string;
  description: string;
  value: number;
  type: tipoDespesa;
  dataDespesa: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: any;
}

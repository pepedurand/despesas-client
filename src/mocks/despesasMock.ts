import { Despesas, tipoDespesa } from "../types";

export const despesasMock: Despesas[] = [
  {
    _id: "63d6f7c327c4bcb0f8c7ee0b",
    description: "Lancamento 1",
    value: 30,
    type: tipoDespesa.CREDIT,
    dataDespesa: new Date(2022, 10, 3),
    createdAt: new Date(2022, 10, 3),
    updatedAt: new Date(2022, 10, 3),
    __v: 0,
  },
  {
    _id: "63d6f7c327c4bcb0f8c7ee0b",
    description: "Lancamento 1",
    value: 30,
    type: tipoDespesa.CREDIT,
    dataDespesa: new Date(2022, 10, 5),
    createdAt: new Date(2022, 10, 3),
    updatedAt: new Date(2022, 10, 3),
    __v: 0,
  },
  {
    _id: "63d6f7c327c4bcb0f8c7ee0b",
    description: "Lancamento 1",
    value: 30.12,
    type: tipoDespesa.CREDIT,
    dataDespesa: new Date(2022, 10, 6),
    createdAt: new Date(2022, 10, 3),
    updatedAt: new Date(2022, 10, 3),
    __v: 0,
  },
  {
    _id: "63d6f7c327c4bcb0f8c7ee0b",
    description: "Lancamento 1",
    value: 301.2,
    type: tipoDespesa.EXPENSE,
    dataDespesa: new Date(2022, 12, 3),
    createdAt: new Date(2022, 10, 3),
    updatedAt: new Date(2022, 10, 3),
    __v: 0,
  },
];

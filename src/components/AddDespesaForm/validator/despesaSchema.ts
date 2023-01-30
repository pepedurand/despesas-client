import * as yup from "yup";

interface despesaData {
  description: string;
  date: Date;
  value: number;
}

export const despesaSchema: yup.SchemaOf<despesaData> = yup
  .object()
  .shape({
    description: yup.string().email().required(),
    date: yup.date().required(),
    value: yup.number().required(),
  })
  .required();

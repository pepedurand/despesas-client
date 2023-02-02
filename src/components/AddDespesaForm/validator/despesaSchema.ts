import * as yup from "yup";

interface despesaData {
  description: string;
  date: Date;
  value: number;
}

const REQUIRED_ERROR_MESSAGE = "Campo obrigatório.";
const DATE_FORMAT_ERROR_MESSAGE = "Insira uma data válida.";
const VALUE_FORMAT_ERROR_MESSAGE = "Insira apenas números.";

export const despesaSchema: yup.SchemaOf<despesaData> = yup
  .object()
  .shape({
    description: yup.string().required(REQUIRED_ERROR_MESSAGE),
    date: yup
      .date()
      .typeError(DATE_FORMAT_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
    value: yup
      .number()
      .typeError(VALUE_FORMAT_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
  })
  .required();

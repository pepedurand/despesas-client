import * as yup from "yup";

interface despesaData {
  description: string;
  date: Date;
  value: string;
}

const REQUIRED_ERROR_MESSAGE = "Campo obrigatório.";
const DATE_FORMAT_ERROR_MESSAGE = "Insira uma data válida.";

export const despesaSchema: yup.SchemaOf<despesaData> = yup
  .object()
  .shape({
    description: yup.string().required(REQUIRED_ERROR_MESSAGE),
    date: yup
      .date()
      .typeError(DATE_FORMAT_ERROR_MESSAGE)
      .required(REQUIRED_ERROR_MESSAGE),
    value: yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
  .required();

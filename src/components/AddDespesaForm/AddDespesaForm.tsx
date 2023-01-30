import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../FormInput";
// import { Button, useToast } from "@chakra-ui/react";
import { despesaSchema } from "./validator/despesaSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectDespesaType } from "../SelectDespesaType";
import { Box } from "@chakra-ui/react";

export const AddDespesaForm = () => {
  // const toast = useToast();

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(despesaSchema),
  });

  const onSubmitForm = async () => {
    console.log(methods.getValues());
  };

  return (
    <Box
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>
        <FormProvider {...methods}>
          <FormInput
            placeholder="Ex. cartão de crédito"
            htmlFor="description"
            label="Descrição"
            name="description"
            id="description"
          />
          <FormInput
            placeholder="dd/mm/aa"
            htmlFor="date"
            label="Data"
            name="date"
            id="date"
            type="date"
          />
          <FormInput
            placeholder="R$ xx,xx"
            htmlFor="value"
            label="Valor"
            name="value"
            id="value"
          />
          <SelectDespesaType name="" />
        </FormProvider>
      </form>
    </Box>
  );
};

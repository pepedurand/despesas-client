import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../FormInput";
import { despesaSchema } from "./validator/despesaSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@chakra-ui/react";
import { purpleColor } from "../../utils";
import { RadioSelect } from "../RadioSelect";

export const AddDespesaForm = () => {
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
            placeholder="dd/mm/aaaa"
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
          <RadioSelect
            name="despesaType"
            control={methods.control}
            options={["Despesa", "Ganho"]}
          />
          <Button
            color={"white"}
            backgroundColor={purpleColor}
            _hover={{ bg: "#9022FF" }}
            mr={3}
            type="submit"
            width="300px"
            height="60px"
            onSubmit={onSubmitForm}
          >
            Adicionar
          </Button>
        </FormProvider>
      </form>
    </Box>
  );
};

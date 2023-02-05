import { useEffect } from "react";
import { formatCurrency, purpleColor } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { despesaSchema } from "./validator/";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@chakra-ui/react";
import { RadioSelect, FormInput } from "../../components";

export const AddDespesaForm = () => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(despesaSchema),
  });

  const value = methods.getValues("value");

  const onSubmitForm = async () => {
    const launchBody = {
      ...methods.getValues(),
      value: parseInt(value.replace(/\D+/g, "")) / 100,
    };
    console.log(launchBody);
  };

  useEffect(() => {
    if (!value) {
      methods.setValue("value", "");
    }
    if (value) {
      methods.setValue("value", formatCurrency(value));
    }
  }, [value]);

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
            type="text"
            textAlign="right"
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

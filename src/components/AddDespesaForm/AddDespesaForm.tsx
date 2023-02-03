import { useEffect } from "react";
import { purpleColor } from "../../utils";
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

  const onSubmitForm = async () => {
    console.log(methods.getValues());
  };

  let value = methods.getValues("value");

  const formatCurrencyInput = (amount: string) => {
    amount = amount.replace(/\D/g, "");
    amount = amount.replace(/(\d)(\d{0,2})$/, "$1,$2");
    amount = amount.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return `R$ ${amount}`;
  };

  useEffect(() => {
    if (!value) {
      methods.setValue("value", "");
    }
    if (value) {
      methods.setValue("value", formatCurrencyInput(value));
    }
    console.log(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.watch("value")]);

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

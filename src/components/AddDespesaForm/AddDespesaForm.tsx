import { useEffect } from "react";
import { formatCurrency, purpleColor } from "../../utils";
import { useForm, FormProvider } from "react-hook-form";
import { despesaSchema } from "./validator/";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@chakra-ui/react";
import { RadioSelectForForm, FormInput } from "../../components";
import { postDespesa } from "../../services/";

interface AddDespesaFormProps {
  onClose: () => void;
  loadDespesas: () => void;
}

export const AddDespesaForm = ({
  onClose,
  loadDespesas,
}: AddDespesaFormProps) => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(despesaSchema),
  });

  const onSubmitForm = async () => {
    const launchBody = {
      description: methods.getValues("description"),
      value: parseInt(value.replace(/\D+/g, "")) / 100,
      type: methods.getValues("despesaType"),
      dataDespesa: methods.getValues("date"),
    };
    await postDespesa(launchBody);
    onClose();
    loadDespesas();
  };

  const value = methods.getValues("value");
  useEffect(() => {
    if (value) {
      methods.setValue("value", formatCurrency(value));
    }
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
          <RadioSelectForForm
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

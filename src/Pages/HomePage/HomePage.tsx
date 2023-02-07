import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {
  FloatingWindow,
  TotalCard,
  AddDespesaForm,
  MonthAndYearPicker,
  DespesaList,
} from "../../components";
import { tipoDespesa } from "../../types";
import { purpleColor } from "../../utils";
import { useDatePicker, useFilterDespesas } from "../../hooks";
import { RadioSelect } from "../../components/RadioSelect/RadioSelect";

export const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { despesasToShow, setSelectedDespesaType } = useFilterDespesas();
  const { month, setMonth, year, setYear } = useDatePicker();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="20px"
    >
      <TotalCard despesas={despesasToShow} creditOrDebit={tipoDespesa.CREDIT} />
      <TotalCard
        despesas={despesasToShow}
        creditOrDebit={tipoDespesa.EXPENSE}
      />
      <IconButton
        color={"white"}
        backgroundColor={purpleColor}
        _hover={{ bg: "#9022FF" }}
        aria-label="Search database"
        icon={<AddIcon />}
        borderRadius="100%"
        height="80px"
        width="80px"
        onClick={onOpen}
      />
      <FloatingWindow
        title="Adicionar despesa"
        body={<AddDespesaForm />}
        isOpen={isOpen}
        onClose={onClose}
      />
      <MonthAndYearPicker
        monthString={month}
        setMonthString={setMonth}
        setYear={setYear}
        year={year}
      />
      <RadioSelect
        options={["Todos", "Entradas", "Saídas"]}
        defaultValue={"Todos"}
        name={"Tipo de despesa"}
        setSelectedDespesaType={setSelectedDespesaType}
      />
      <DespesaList despesas={despesasToShow} />
    </Box>
  );
};

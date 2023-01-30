import { Box, Text } from "@chakra-ui/react";
import { Despesas } from "../../types/despesas";
import { tipoDespesa } from "../../types";
import { greenColor, realFormatter, redColor } from "../../utils";

interface TotalCardProps {
  despesas: Despesas[];
  creditOrDebit: tipoDespesa;
}

export const TotalCard = ({ despesas, creditOrDebit }: TotalCardProps) => {
  const despesasToShow = despesas.filter(
    (despesa) => creditOrDebit === despesa.type
  );
  const isCredit = () => {
    return [creditOrDebit].includes(tipoDespesa.CREDIT);
  };

  return (
    <Box
      backgroundColor={isCredit() ? greenColor : redColor}
      height="100px"
      width="300px"
      borderRadius="20px"
      padding="20px"
      marginBottom="20px"
    >
      <Text textTransform="capitalize">
        {isCredit() ? "A receber" : "A pagar"}
      </Text>
      <Text textAlign="right" fontSize="24px" fontWeight="bold">
        {realFormatter(
          despesasToShow.reduce((accumulator, despesa) => {
            return accumulator + despesa.value;
          }, 0)
        )}
      </Text>
    </Box>
  );
};

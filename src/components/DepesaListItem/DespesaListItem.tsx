import { Box, Text } from "@chakra-ui/react";
import { tipoDespesa } from "../../types";
import { greenColor, redColor } from "../../utils";

interface DespesaListItemProps {
  dataDespesa: Date;
  description: string;
  value: number;
  type: tipoDespesa;
}

export const DespesaListItem = ({
  dataDespesa,
  description,
  value,
  type,
}: DespesaListItemProps) => {
  const formatDate = new Intl.DateTimeFormat("pt-br");
  const formattedDate = formatDate.format(dataDespesa);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      width={"300px"}
      color={type === tipoDespesa.CREDIT ? greenColor : redColor}
    >
      <Text>{description}</Text>
      <Text>{formattedDate}</Text>
      <Text>{value}</Text>
    </Box>
  );
};

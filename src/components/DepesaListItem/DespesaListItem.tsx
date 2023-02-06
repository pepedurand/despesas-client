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
  const formatDate = new Intl.DateTimeFormat("pt-br", {
    month: "2-digit",
    year: "2-digit",
  });
  const formattedDate = formatDate.format(dataDespesa);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      color={type === tipoDespesa.CREDIT ? greenColor : redColor}
    >
      <Text padding={"10px"} width={"140px"} textAlign={"left"}>
        {description}
      </Text>
      <Text padding={"10px"} width={"100px"} textAlign={"center"}>
        {formattedDate}
      </Text>
      <Text
        padding={"10px"}
        width={"120px"}
        textAlign={"right"}
      >{`R$ ${value.toFixed(2)}`}</Text>
    </Box>
  );
};

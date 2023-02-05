import { Box, Text } from "@chakra-ui/react";
import { months } from "../../utils";
import { CollapsibleMenu } from "../CollapsibleMenu/CollapsibleMenu";

export const DespesaList = () => {
  const todaysMonth = new Date().getMonth();

  return (
    <Box width="300px" justifyContent="center" alignItems="center">
      {/* <Select
        variant="unstyled"
        placeholder="Selecione o mês"
        defaultValue={todaysMonth}
        size="lg"
        textAlign="center"
        icon={undefined}
      > */}
      <CollapsibleMenu title="selecione o mes">
        {months.map((month) => {
          return <Text textAlign="center">{month}</Text>;
        })}
      </CollapsibleMenu>

      {/* </Select> */}
    </Box>
  );
};

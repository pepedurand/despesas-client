import { Box, Select, Text } from "@chakra-ui/react";
import { months } from "../../utils";
import { CollapsibleMenu } from "../CollapsibleMenu/CollapsibleMenu";

export const MonthPicker = () => {
  const todaysMonth = new Date().getMonth();

  return (
    <Box width="300px" justifyContent="center" alignItems="center">
      <Select placeholder="Selecione o mês" defaultValue={todaysMonth}>
        {months.map((month) => {
          return <option value="month">{month}</option>;
        })}
      </Select>
      <CollapsibleMenu title="selecione o mes">
        {months.map((month) => {
          return (
            <Text
              textAlign="center"
              padding="10px"
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              {month}
            </Text>
          );
        })}
      </CollapsibleMenu>

      {/* </Select> */}
    </Box>
  );
};

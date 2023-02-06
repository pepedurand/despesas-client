import { useRadioGroup, HStack, Box } from "@chakra-ui/react";
import { greenColor, purpleColor, redColor } from "../../utils";
import { SelectCard } from "../SelectCard";

interface RadioSelectProps {
  options: string[];
  defaultValue: string;
  name: string;
  setSelectedDespesaType: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioSelect = ({
  options,
  defaultValue,
  name,
  setSelectedDespesaType,
}: RadioSelectProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange: setSelectedDespesaType,
  });
  //passar setSelect via props do homepage para o radio
  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <Box width="100px" {...group} key={`Box_${value}`}>
            <SelectCard
              backgroundColor={
                value === "Todos"
                  ? purpleColor
                  : value === "Entradas"
                  ? greenColor
                  : redColor
              }
              key={value}
              {...radio}
            >
              {value}
            </SelectCard>
          </Box>
        );
      })}
    </HStack>
  );
};

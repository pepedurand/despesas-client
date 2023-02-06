import { useRadioGroup, HStack, Box } from "@chakra-ui/react";
import { purpleColor } from "../../utils";
import { SelectCard } from "../SelectCard";

interface RadioSelectProps {
  options: string[];
  defaultValue: string;
  onChange: () => void;
  name: string;
}

export const RadioSelect = ({
  options,
  defaultValue,
  onChange,
  name,
}: RadioSelectProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <Box width="100px" {...group} key={`Box_${value}`}>
            <SelectCard backgroundColor={purpleColor} key={value} {...radio}>
              {value}
            </SelectCard>
          </Box>
        );
      })}
    </HStack>
  );
};

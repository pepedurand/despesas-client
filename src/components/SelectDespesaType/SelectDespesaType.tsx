import { HStack, InputProps, useRadioGroup } from "@chakra-ui/react";
import { greenColor, redColor } from "../../utils";
import { SelectCard } from "../SelectCard";
import { useFormContext } from "react-hook-form";

interface FormInputProps extends InputProps {
  name: string;
}

export const SelectDespesaType = ({ name }: FormInputProps) => {
  const options = ["Despesa", "Ganho"];

  const { register } = useFormContext();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Despesa",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} marginTop="20px">
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <SelectCard
            {...register(value)}
            key={value}
            {...radio}
            backgroundColor={value === "Despesa" ? redColor : greenColor}
          >
            {value}
          </SelectCard>
        );
      })}
    </HStack>
  );
};

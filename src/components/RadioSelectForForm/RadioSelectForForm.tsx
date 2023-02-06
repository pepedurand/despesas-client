import { Box, FormControl, FormLabel, useRadioGroup } from "@chakra-ui/react";
import {
  Control,
  Controller,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { redColor, greenColor } from "../../utils";
import { SelectCard } from "../SelectCard";

interface RadioSelectForFormProps {
  name: string;
  control?: Control<FieldValues, any>;
  options: string[];
}

export const RadioSelectForForm = ({
  name,
  control,
  options,
}: RadioSelectForFormProps) => {
  const { register } = useFormContext();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue: options[0],
  });

  const group = getRootProps();

  return (
    <FormControl id={name}>
      <FormLabel>Tipo</FormLabel>
      <Controller
        name={name}
        control={control}
        render={() => (
          <Box display="flex" flexDirection="row" justifyContent="space-around">
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <Box
                  width="150px"
                  {...group}
                  {...register(name)}
                  key={`Box_${value}`}
                >
                  <SelectCard
                    value={value}
                    key={value}
                    {...radio}
                    backgroundColor={
                      options.length === 2
                        ? value === "Despesa"
                          ? redColor
                          : greenColor
                        : undefined
                    }
                  >
                    {value}
                  </SelectCard>
                </Box>
              );
            })}
          </Box>
        )}
        rules={{
          required: { value: true, message: "Selecione o tipo." },
        }}
      />
    </FormControl>
  );
};

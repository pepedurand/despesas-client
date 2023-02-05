import { NumberInput, NumberInputField } from "@chakra-ui/react";
import { useState } from "react";

interface CurrencyInputProps {
  amount: string;
}

export const CurrencyInput = ({ amount }: CurrencyInputProps) => {
  const format = (value: string) => {
    return `R$` + value;
  };
  const parse = (value: string) => {
    return value.replace(/^\$/, "");
  };

  const [value, setValue] = useState("0.00");

  return (
    <NumberInput
      onChange={() => setValue(parse(amount))}
      value={format(value)}
      precision={2}
    >
      <NumberInputField />
    </NumberInput>
  );
};

import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { purpleColor } from "../../utils";

interface FormInputProps extends InputProps {
  htmlFor: string;
  label: string;
  name: string;
}

export const FormInput = ({
  htmlFor,
  label,
  name,
  placeholder,
}: FormInputProps) => {
  const { register, getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(name, formState);

  return (
    <FormControl marginTop="20px">
      <FormLabel
        color={!!fieldState.error ? "red" : undefined}
        htmlFor={htmlFor}
      >
        {label}
      </FormLabel>
      <Input
        isInvalid={!!fieldState.error}
        id={name}
        placeholder={placeholder}
        type={name}
        {...register(name)}
        height="80px"
        outline="1px"
        focusBorderColor={`${purpleColor}`}
      />
      <FormHelperText color="red">
        {!!fieldState.error && <>{fieldState.error?.message}</>}
      </FormHelperText>
    </FormControl>
  );
};

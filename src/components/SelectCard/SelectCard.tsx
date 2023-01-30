import { Box, useRadio } from "@chakra-ui/react";

export const SelectCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        border={`1px solid ${props.backgroundColor}`}
        _checked={{
          bg: `${props.backgroundColor}`,
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={12}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

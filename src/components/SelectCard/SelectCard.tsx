import { Box, useRadio } from "@chakra-ui/react";

export const SelectCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        gap="1"
        textAlign="center"
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
        py={3}
        marginBottom="20px"
      >
        {props.children}
      </Box>
    </Box>
  );
};

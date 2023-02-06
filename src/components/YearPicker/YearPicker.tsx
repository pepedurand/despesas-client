import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { purpleColor } from "../../utils";

interface YearPickerProps {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

export const YearPicker = ({ year, setYear }: YearPickerProps) => {
  const nextYear = () => {
    setYear(year + 1);
  };
  const previousYear = () => {
    setYear(year - 1);
  };
  return (
    <Box
      width="300px"
      textAlign="center"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      outline={""}
      outlineColor={purpleColor}
      padding="5px"
    >
      <ChevronLeftIcon w={6} h={6} color={purpleColor} onClick={previousYear} />
      <Text fontSize={"20px"}>{year}</Text>
      <ChevronRightIcon w={6} h={6} color={purpleColor} onClick={nextYear} />
    </Box>
  );
};

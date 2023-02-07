import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { months, purpleColor } from "../../utils";
import { YearPicker } from "../YearPicker";

interface MonthAndYearPickerProps {
  monthString: string;
  setMonthString: React.Dispatch<React.SetStateAction<string>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

export const MonthAndYearPicker = ({
  monthString,
  setMonthString,
  year,
  setYear,
}: MonthAndYearPickerProps) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  const onClickSaveButton = (month: string, year: number) => {
    setMonthString(month);
    setYear(year);
    onToggle();
  };

  return (
    <Box w="300px" margin={"20px"}>
      <Button
        width="300px"
        onClick={onOpen}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        outlineColor={purpleColor}
      >
        {`${monthString} de ${year}`}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione o mês e o ano</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="20px">
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <YearPicker setYear={setYear} year={year} />
              {months.map((month) => {
                return (
                  <Text
                    textAlign="center"
                    padding="10px"
                    _hover={{
                      background: "white",
                      color: "teal.500",
                    }}
                    backgroundColor={
                      monthString === month ? "white" : undefined
                    }
                    color={monthString === month ? "teal.500" : undefined}
                    onClick={() => setMonthString(month)}
                    width={"200px"}
                  >
                    {month}
                  </Text>
                );
              })}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => onClickSaveButton(monthString, year)}
            >
              Buscar
            </Button>
            <Button variant="ghost">Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

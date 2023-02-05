import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { months, MonthsEnum, purpleColor } from "../../utils";

export const MonthPicker = () => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined
  );

  const onSelectMonth = (month: string) => {
    setSelectedMonth(month);
    onToggle();
  };

  const actualMonth = MonthsEnum[new Date().getMonth()];

  return (
    <Box w="300px">
      <Button
        width="300px"
        onClick={onOpen}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        outlineColor={purpleColor}
      >
        {selectedMonth ?? actualMonth}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selecione o mês</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="20px">
            {months.map((month) => {
              return (
                <Text
                  textAlign="center"
                  padding="10px"
                  _hover={{
                    background: "white",
                    color: "teal.500",
                  }}
                  onClick={() => onSelectMonth(month)}
                >
                  {month}
                </Text>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

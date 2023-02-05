import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FloatingWindow, TotalCard, AddDespesaForm } from "../../components";
import { despesasMock } from "../../mocks/";
import { tipoDespesa } from "../../types";
import { purpleColor } from "../../utils";
import { MonthPicker } from "../../components/CollapsibleMenu/MonthPicker";

export const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="20px"
    >
      <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.CREDIT} />
      <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.EXPENSE} />
      <IconButton
        color={"white"}
        backgroundColor={purpleColor}
        _hover={{ bg: "#9022FF" }}
        aria-label="Search database"
        icon={<AddIcon />}
        borderRadius="100%"
        height="80px"
        width="80px"
        onClick={onOpen}
      />
      <FloatingWindow
        title="Adicionar despesa"
        body={<AddDespesaForm />}
        isOpen={isOpen}
        onClose={onClose}
      />
      <MonthPicker />
    </Box>
  );
};

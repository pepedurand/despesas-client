import { ChakraProvider, theme } from "@chakra-ui/react";
import { TotalCard } from "./components";
import { despesasMock } from "./mocks/despesas.list";
import { tipoDespesa } from "./types";

export const App = () => (
  <ChakraProvider theme={theme}>
    <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.CREDIT} />
    <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.EXPENSE} />
  </ChakraProvider>
);

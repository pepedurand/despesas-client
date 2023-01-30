import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ColorModeSwitcher } from "./components/";
import { Router } from "./Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <ColorModeSwitcher
        justifySelf="flex-end"
        position="absolute"
        right="10px"
      />
      <Router />
    </BrowserRouter>
  </ChakraProvider>
);

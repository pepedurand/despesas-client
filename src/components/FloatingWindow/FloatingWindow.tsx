import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { purpleColor } from "../../utils";

interface WindowProps {
  title?: string;
  body: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export const FloatingWindow = ({
  body,
  title,
  isOpen,
  onClose,
}: WindowProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size={"xl"}
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="2"
        >
          <Button
            color={"white"}
            backgroundColor={purpleColor}
            _hover={{ bg: "#9022FF" }}
            mr={3}
            onClick={onClose}
            width="300px"
            height="60px"
          >
            Adicionar
          </Button>
          <Button onClick={onClose} variant="unstyled">
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

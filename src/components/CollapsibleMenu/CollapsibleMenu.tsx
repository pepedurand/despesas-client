import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface CollapsibleMenuProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const CollapsibleMenu = ({ title, children }: CollapsibleMenuProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="300px">
      <Box
        cursor="pointer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="10px"
        onClick={onToggle}
      >
        {isOpen ? (
          <ChevronDownIcon width="50px" />
        ) : (
          <ChevronUpIcon width="50px" />
        )}
        <Text fontSize="20px">
          <>{title}</>
        </Text>
        {isOpen ? (
          <ChevronDownIcon width="50px" />
        ) : (
          <ChevronUpIcon width="50px" />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  );
};

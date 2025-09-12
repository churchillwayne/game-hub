import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardcontainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={7}
      overflow="hidden"
      marginBottom={5}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardcontainer;

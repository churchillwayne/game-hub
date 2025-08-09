import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardcontainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px" marginBottom={10}>
      {children}
    </Box>
  );
};

export default GameCardcontainer;

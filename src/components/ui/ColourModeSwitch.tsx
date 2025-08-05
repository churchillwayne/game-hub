import {
  HStack,
  Text,
  SwitchRoot,
  SwitchControl,
  SwitchThumb,
  SwitchHiddenInput,
} from "@chakra-ui/react";
import { useColorMode } from "./color-mode";

const ColourModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <SwitchRoot
        colorPalette="green"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <SwitchHiddenInput />
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
      </SwitchRoot>
      <Text>Dark Mode</Text>
    </HStack>
  );
  //return <ColorModeButton />;
};

export default ColourModeSwitch;

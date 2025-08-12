import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import {
  Menu,
  Button,
  Portal,
  HStack,
  Icon,
  Text,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack spacing={2}>
            <Text>Platforms</Text>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

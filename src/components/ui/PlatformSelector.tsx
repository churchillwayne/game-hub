import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Menu, Button, Portal, HStack, Icon, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);
  const platform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap={2}>
            <Text>{platform?.name || "Platforms"}</Text>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                value={platform.id.toString()}
                onClick={() => setSelectedPlatform(platform.id)}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;

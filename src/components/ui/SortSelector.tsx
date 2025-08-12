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

// interface Props {
//   onSelectSortOrder: (platform: Platform) => void;
// }

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap={2}>
            <Text>Order by Relevance</Text>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Released Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>
          </Menu.Content>

          {/* <Menu.Content>
            {data.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </Menu.Content> */}
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

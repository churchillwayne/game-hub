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

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSorder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap={2}>
            <Text>Order by: {currentSorder?.label || "Relevance"}</Text>
            <Icon as={BsChevronDown} />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
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

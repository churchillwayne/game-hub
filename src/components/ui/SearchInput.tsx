import { Input, InputGroup, Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<Icon as={BsSearch} color="gray.400" />}>
      <Input
        borderRadius={20}
        placeholder="Search games...."
        variant="subtle"
      />
    </InputGroup>
  );
};

export default SearchInput;

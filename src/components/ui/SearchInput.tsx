import { Input, InputGroup, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<Icon as={BsSearch} color="gray.400" />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games...."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

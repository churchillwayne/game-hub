import useGameQueryStore from "@/store";
import { Input, InputGroup, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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

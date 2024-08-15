import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchTerm } from "../hooks/useSearchTerm";
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const { searchTerm, handleChange, handleReset } = useSearchTerm();

  const navigate = useNavigate();
  const handleFocus = () => navigate(`/?q=${searchTerm}`);

  return (
    <Stack spacing={4}>
      <InputGroup onFocus={handleFocus}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          readOnly={false}
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => handleReset()}>
            X
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}

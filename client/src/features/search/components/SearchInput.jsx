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

/**
 * A search input component that allows the user to enter a search term.
 *
 * This component uses custom hooks to manage the search term and handles the input focus event to navigate to the search results.
 * It consists of an input field, a search icon, and a reset button.
 *
 * @return {JSX.Element} The rendered search input component.
 */
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

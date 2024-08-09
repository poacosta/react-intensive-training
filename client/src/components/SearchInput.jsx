import { useSearchParams } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchInput() {
  const defaultParams = { q: "" };
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          readOnly={false}
          value={searchParams.get("q") || ""}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => setSearchParams(defaultParams)}
          >
            X
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}

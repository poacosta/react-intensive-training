import { useQuery } from "@tanstack/react-query";
import { Heading } from "@chakra-ui/react";
import { EmployeeResult } from "./employees/EmployeeResult";
import { useSearchTerm } from "../hooks/useSearchTerm";

export function SearchResults() {
  const { searchTerm } = useSearchTerm();
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery(["search", searchTerm], async () => {
    const response = await fetch(
      `http://localhost:3030/employees?q=${searchTerm}`
    );
    return response.json();
  });

  if (isLoading || isError) return null;

  return (
    searchResults && (
      <>
        <Heading as="h2" size="lg" py={5}>
          {searchTerm === "" ? "All Employees" : "Search Results"} (
          {searchResults.length})
        </Heading>
        <EmployeeResult data={searchResults} searchTerm={searchTerm} />
      </>
    )
  );
}

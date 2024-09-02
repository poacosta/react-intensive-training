import { useQuery } from "@tanstack/react-query";
import { Heading } from "@chakra-ui/react";
import { EmployeeResult } from "../../employees/components/EmployeeResult";
import { useSearchTerm } from "../hooks/useSearchTerm";

/**
 * Fetches and displays search results for employees based on the given search term.
 * Utilizes useSearchTerm custom hook to get the current search term and
 * useQuery to perform the API request.
 *
 * If the data is still loading or if there is an error during fetching,
 * the function will return null.
 *
 * @return {JSX.Element|null} JSX to render the search result heading and employee results,
 *                            or null if loading or an error occurs.
 */
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

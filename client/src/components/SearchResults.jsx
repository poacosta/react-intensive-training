import { useQuery } from "@tanstack/react-query";
import { Heading } from "@chakra-ui/react";
import { EmployeeResult } from "./employees/EmployeeResult";
import { useSearchTerm } from "../hooks/useSearchTerm";
import { Loading } from "./Loading";

const fetchSearchResults = (searchParams) => {
  const url = `http://localhost:3030/employees?q=${searchParams}`;
  return fetch(url).then((res) => res.json());
};

export function SearchResults() {
  const { searchTerm } = useSearchTerm();

  const { isLoading, error, data } = useQuery({
    queryKey: ["employee", searchTerm],
    queryFn: () => fetchSearchResults(searchTerm),
  });

  if (isLoading) return <Loading />;
  if (error) return `An error has occurred: ${error.message}`;

  const { message } = data;
  if (message) return "No employee data available.";

  return (
    data && (
      <>
        <Heading as="h2" size="lg" py={5}>
          {searchTerm === "" ? "All Employees" : "Search Results"} (
          {data.length})
        </Heading>
        <EmployeeResult data={data} searchTerm={searchTerm} />
      </>
    )
  );
}

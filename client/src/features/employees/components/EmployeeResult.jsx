import { SimpleGrid } from "@chakra-ui/react";
import { EmployeeItem } from "./EmployeeItem";
import { Link } from "react-router-dom";

/**
 * Renders a grid displaying employee items filtered by the search term.
 *
 * @param {Object} params - The parameters object.
 * @param {Array} params.data - The array of employee data objects.
 * @param {string} params.searchTerm - The term used to filter employee data.
 *
 * @return {JSX.Element} A grid of employee items, each wrapped in a link.
 */
export function EmployeeResult({ data, searchTerm }) {
  return (
    <SimpleGrid columns={2} spacing={5}>
      {data.map((employee) => (
        <Link
          key={employee.id}
          to={`/employees/${employee.id}/?q=${searchTerm}`}
        >
          <EmployeeItem employee={employee} />
        </Link>
      ))}
    </SimpleGrid>
  );
}

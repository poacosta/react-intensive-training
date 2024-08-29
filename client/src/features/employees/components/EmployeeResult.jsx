import { SimpleGrid } from "@chakra-ui/react";
import { EmployeeItem } from "./EmployeeItem";
import { Link } from "react-router-dom";

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

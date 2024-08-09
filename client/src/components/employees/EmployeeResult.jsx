import { SimpleGrid } from "@chakra-ui/react";
import { EmployeeItem } from "./EmployeeItem";

export function EmployeeResult({ data }) {
  return (
    <SimpleGrid columns={2} spacing={5}>
      {data.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </SimpleGrid>
  );
}

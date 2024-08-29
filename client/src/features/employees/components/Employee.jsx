import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EmployeeCard } from "./EmployeeCard";

export function Employee() {
  const { id } = useParams();
  const {
    data: employeeInfo,
    isLoading,
    isError,
  } = useQuery(["employee", id], async () => {
    const response = await fetch(`http://localhost:3030/employees/${id}`);
    return response.json();
  });

  if (isLoading || isError) return null;

  return employeeInfo && <EmployeeCard employee={employeeInfo} />;
}

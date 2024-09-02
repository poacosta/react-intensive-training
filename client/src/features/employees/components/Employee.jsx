import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EmployeeCard } from "./EmployeeCard";

/**
 * Fetches and displays information about a specific employee.
 * Utilizes React hooks to get the employee ID from URL parameters and to
 * fetch data from an API endpoint.
 *
 * @returns {JSX.Element|null} A JSX element containing an EmployeeCard if data is fetched successfully,
 * or null if the data is loading or an error occurs.
 */
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

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EmployeeCard } from "./EmployeeCard";
import { Loading } from "../Loading";

const fetchEmployeeData = (id) => {
  const url = `http://localhost:3030/employees/${id}`;
  return fetch(url).then((res) => res.json());
};

export function Employee() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => fetchEmployeeData(id),
  });

  if (isLoading) return <Loading />;
  if (error) return `An error has occurred: ${error.message}`;

  const { message } = data;
  if (message) return "No employee data available.";

  return data && <EmployeeCard employee={data} />;
}

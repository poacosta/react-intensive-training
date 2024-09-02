import { Heading, HStack, Img, Text, VStack } from "@chakra-ui/react";
import { Badges } from "../../badges/components/Badges";

/**
 * Displays a card with the employee's details including image, name, job title, and team name.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.employee - The employee object containing employee details.
 * @param {string} props.employee.imageFilePath - The file path of the employee's image.
 * @param {string} props.employee.firstName - The first name of the employee.
 * @param {string} props.employee.lastName - The last name of the employee.
 * @param {string} props.employee.jobTitle - The job title of the employee.
 * @param {string} props.employee.teamName - The team name of the employee.
 * @return {JSX.Element} A visual card component displaying the employee's details.
 */
export function EmployeeCard({ employee }) {
  const serverUrl = "http://localhost:3030";

  return (
    <>
      <HStack>
        <VStack m={5}>
          <Img
            boxSize="200px"
            src={`${serverUrl}/${employee.imageFilePath}`}
            alt={employee.firstName}
          />
        </VStack>
        <VStack alignItems="left">
          <HStack>
            <Heading>{employee.firstName}</Heading>
            <Text fontSize={25}>{employee.lastName}</Text>
          </HStack>
          <HStack>
            <Text fontSize={20}>{employee.jobTitle}</Text>
            <Text fontSize={15}>{`| ${employee.teamName}`}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Badges employee={employee} />
    </>
  );
}

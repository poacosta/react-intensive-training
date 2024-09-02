import { Box, HStack, Img, Text, VStack } from "@chakra-ui/react";

/**
 * Component to display an employee's information including their image,
 * name, and team name.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.employee - The employee object containing their information.
 * @param {string} props.employee.imageFilePath - The file path to the employee's image.
 * @param {string} props.employee.firstName - The first name of the employee.
 * @param {string} props.employee.lastName - The last name of the employee.
 * @param {string} props.employee.teamName - The team name the employee belongs to.
 * @return {JSX.Element} A box containing the employee's image, name, and team name.
 */
export function EmployeeItem({ employee }) {
  const serverUrl = "http://localhost:3030";

  return (
    <Box borderWidth="1px" overflow="hidden" px={4} boxShadow="md">
      <HStack>
        <VStack m={5}>
          <Img
            boxSize="105px"
            src={`${serverUrl}/${employee.imageFilePath}`}
            alt={employee.firstName}
          />
        </VStack>
        <VStack alignItems="left">
          <HStack>
            <Text fontSize={22}>
              {employee.firstName} {employee.lastName}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize={15}>{employee.teamName}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

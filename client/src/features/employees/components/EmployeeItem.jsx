import { Box, HStack, Img, Text, VStack } from "@chakra-ui/react";

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

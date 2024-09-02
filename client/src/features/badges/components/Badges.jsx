import { Divider, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import { Badge } from "./Badge";
import { AddBadge } from "./AddBadge";

/**
 * Displays a list of badges for an employee.
 * If the employee has badges, it displays a heading "Badges" followed by a grid of badge components.
 * If the employee has no badges, it displays a heading "No Badges Yet".
 * Provides an option to add a new badge.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.employee - The employee object containing badge details.
 * @param {Array} props.employee.badgeDetails - The list of badge details associated with the employee.
 * @returns {JSX.Element} The Badges component.
 */
export const Badges = ({ employee }) => {
  const badges = employee.badgeDetails;
  return (
    <VStack width="100%" alignItems="center" mb={5}>
      <Divider pt={6} my={8} width="100%" borderColor="blue.800" />
      <Heading size="lg" pb={4}>
        {badges.length > 0 ? "Badges" : "No Badges Yet"}
      </Heading>
      <SimpleGrid width="100%" columns={3} spacingY="40px">
        {badges.map((badge) => (
          <Badge key={badge.id} badge={badge} />
        ))}
        <AddBadge employee={employee} />
      </SimpleGrid>
    </VStack>
  );
};

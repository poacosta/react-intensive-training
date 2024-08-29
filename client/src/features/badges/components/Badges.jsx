import { Divider, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import { Badge } from "./Badge";
import { AddBadge } from "./AddBadge";

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

import { Image, Text, VStack } from "@chakra-ui/react";

/**
 * Badge component that displays an image and a text label.
 *
 * @param {Object} props - The component properties.
 * @param {Object} props.badge - The badge information.
 * @param {string} props.badge.imageFilePath - The file path to the badge image.
 * @param {string} props.badge.name - The name of the badge.
 *
 * @returns {JSX.Element} A vertical stack containing an image and a text label.
 */
export const Badge = ({ badge }) => (
  <VStack alignItems="center" alignContent="center">
    <Image
      boxSize="100px"
      src={`http://localhost:3030/${badge.imageFilePath}`}
      alt={`${badge.name}`}
    />
    <Text textAlign="center" fontSize="lg">
      {badge.name}
    </Text>
  </VStack>
);

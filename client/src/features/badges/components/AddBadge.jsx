import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const AddBadge = ({ employee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [badgeSelectionError, setBadgeSelectionError] = useState(false);
  const [newBadgeId, setNewBadgeId] = useState();

  const handleSelectChange = (event) => {
    setBadgeSelectionError(false);
    setNewBadgeId(event.target.value);
  };

  const { isLoading, data: allBadges } = useQuery(
    ["badges", "all"],
    async () => {
      const response = await fetch("http://localhost:3030/badges");
      return response.json();
    },
    { select: (data) => data.sort((a, b) => (b.name > a.name ? -1 : 1)) }
  );

  const onSubmit = () => {
    console.log(`SELECTED BADGE ID: ${newBadgeId}`);
    onClose();
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <>
      <VStack>
        <IconButton
          onClick={onOpen}
          width="100px"
          height="100px"
          isRound
          icon={<AddIcon />}
          aria-label="add new badge"
        />
        <Text size="lg">Add new badge</Text>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Badge</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {badgeSelectionError ? (
              <Text textAlign="center" color="red" fontWeight={800}>
                Please select badge
              </Text>
            ) : null}
            <Select
              id="badge"
              placeholder="Select badge"
              value={newBadgeId}
              onChange={handleSelectChange}
            >
              {isLoading
                ? "Loading..."
                : allBadges
                    .filter((badge) => !employee.badgeIds.includes(badge.id))
                    .map((badge) => (
                      <option key={badge.id} value={badge.id}>
                        {badge.name}
                      </option>
                    ))}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Add badge
            </Button>
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

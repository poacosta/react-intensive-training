import { Spinner } from "@chakra-ui/react";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export function Loading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      zIndex="100"
      position="fixed"
      top="50%"
      left="50%"
      display={isFetching + isMutating > 0 ? "inherit" : "none"}
    />
  );
}

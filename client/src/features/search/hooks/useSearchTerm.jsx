import { useSearchParams } from "react-router-dom";

/**
 * Custom hook to manage search term state in URL parameters.
 *
 * @return {Object} An object containing the current search term,
 * a function to handle changes to the search term,
 * and a function to reset the search term to default.
 */
export function useSearchTerm() {
  const defaultParams = { q: "" };
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const searchTerm = searchParams.get("q") || "";

  const handleChange = (e) => {
    setSearchParams({ q: e.target.value });
  };

  const handleReset = () => {
    setSearchParams(defaultParams);
  };

  return {
    searchTerm,
    handleChange,
    handleReset,
  };
}

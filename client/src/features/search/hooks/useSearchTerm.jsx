import { useSearchParams } from "react-router-dom";

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

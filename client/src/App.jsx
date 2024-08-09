import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Employee } from "./components/employees/Employee";
import { SearchResults } from "./components/SearchResults";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Header />
      <Container pt="6" maxW="container.md">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="/employees/:id" element={<Employee />} />
          </Routes>
        </QueryClientProvider>
      </Container>
    </Router>
  );
}

export default App;

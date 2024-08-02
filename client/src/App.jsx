import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Employee } from "./components/employees/Employee";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Header />
      <Container pt="6" maxW="container.md">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees/:id" element={<Employee />} />
          </Routes>
        </QueryClientProvider>
      </Container>
    </Router>
  );
}

export default App;

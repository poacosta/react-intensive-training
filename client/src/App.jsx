import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Employee } from "./components/employees/Employee";
import { SearchResults } from "./components/SearchResults";
import { Loading } from "./components/Loading";
import { ToastContainer } from "./components/Toast";

function App() {
  return (
    <>
      <Header />
      <Container pt="6" maxW="container.md">
        <Loading />
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/employees/:id" element={<Employee />} />
        </Routes>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;

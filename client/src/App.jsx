import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./features/app/components/Header";
import { Employee } from "./features/employees/components/Employee";
import { SearchResults } from "./features/search/components/SearchResults";
import { Loading } from "./features/app/components/Loading";
import { ToastContainer } from "./features/app/components/Toast";

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

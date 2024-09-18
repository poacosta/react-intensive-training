import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../app/components/Header";

describe("Header", () => {
  test("renders Employee Directory heading", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const headingElement = screen.getByText("Employee Directory");
    expect(headingElement).toBeInTheDocument();
  });

  test("renders SongRiverLogo", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoElement = screen.getByText(/SongRiver/);
    expect(logoElement).toBeInTheDocument();
  });

  test("renders SearchInput field", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});

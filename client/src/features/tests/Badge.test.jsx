import { render, screen } from "@testing-library/react";
import { Badge } from "../badges/components/Badge";

const data = {
  id: 2,
  name: "Karaoke Star",
  imageFilePath: "images/badges/karaoke.png",
};

test("Badge name should be in page", () => {
  render(<Badge badge={data} />);
  const badgeName = screen.getByText(data.name);
  expect(badgeName).toBeInTheDocument();
});

test("Badge name should be alt of the badge image", () => {
  render(<Badge badge={data} />);
  const badgeImage = screen.getByRole("img");
  expect(badgeImage).toHaveAttribute("alt", data.name);
});

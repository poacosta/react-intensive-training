import userEvent from "@testing-library/user-event";

import { render, screen } from "../../__tests__/test-utils";
import { AddBadge } from "../badges/components/AddBadge";

const employee = {
  id: 41,
  firstName: "Angélica",
  lastName: "Bustos",
  imageFilePath: "images/employees/f-26.png",
  teamName: "Marketing",
  jobTitle: "VP Marketing",
  badgeIds: [2, 3],
  badgeDetails: [
    {
      id: 2,
      name: "Karaoke Star",
      imageFilePath: "images/badges/karaoke.png",
    },
    {
      id: 3,
      name: "Fashionista",
      imageFilePath: "images/badges/fashionista.png",
    },
  ],
};

test("badge options do not include existing badges for employee", async () => {
  const user = userEvent.setup();

  render(<AddBadge employee={employee} />);

  const addBadgeButton = screen.getByRole("button", { name: /add new badge/i });
  await user.click(addBadgeButton);

  const teamPlayerOption = await screen.findByRole("option", {
    name: /Team Player/i,
  });

  const badgeOptions = screen.getAllByRole("option");
  expect(badgeOptions.map((option) => option.text)).toEqual([
    "Select badge",
    "Comic Relief",
    "Helping Hand",
    "Nice Kicks",
    "Team Player",
  ]);
});

test("error displays when submitting without choosing badge", async () => {
  const user = userEvent.setup();

  render(<AddBadge employee={employee} />);

  const addBadgeButton = screen.getByRole("button", { name: /add new badge/i });
  await user.click(addBadgeButton);

  await screen.findByRole("option", {
    name: /Team Player/i,
  });

  expect(screen.queryByText(/please select badge/i)).not.toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /add badge/i });
  await user.click(submitButton);
  const error = screen.getByText(/please select badge/i);
  expect(error).toBeInTheDocument();
});

test("no error displays when submitting after choosing badge", async () => {
  const user = userEvent.setup();

  render(<AddBadge employee={employee} />);

  const addBadgeButton = screen.getByRole("button", { name: /add new badge/i });
  await user.click(addBadgeButton);

  const teamPlayer = await screen.findByRole("option", {
    name: /Team Player/i,
  });

  await user.selectOptions(
    screen.getByRole("combobox"),
    // Find and select the Team Playerr option, like a real user would.
    screen.getByRole("option", { name: "Team Player" })
  );
  expect(screen.getByRole("option", { name: "Team Player" }).selected).toBe(
    true
  );

  const submitButton = screen.getByRole("button", { name: /add badge/i });
  await user.click(submitButton);
  expect(screen.queryByText(/please select badge/i)).not.toBeInTheDocument();
});
